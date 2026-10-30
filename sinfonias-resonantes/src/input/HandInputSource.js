/**
 * Manos con la cámara (MediaPipe Hand Landmarker, hasta 2 manos), procesado local.
 * Traduce los puntos de la mano al mismo vocabulario de intenciones que el ratón:
 *   índice extendido      -> pincel (pen down)
 *   pinza pulgar-índice   -> pincel fino
 *   abrir la palma de golpe -> 'bloom' con la posición de las cinco yemas
 *   girar la muñeca       -> 'twist' continuo con su velocidad angular
 *   puño sostenido        -> 'fist' start / end
 *   dos manos separadas / juntas -> pose 'apart' / 'together' (umbrales de fase)
 */
const VERSION = '0.10.14';
const WASM = `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${VERSION}/wasm`;
const MODEL = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';
const TIPS = [4, 8, 12, 16, 20];
const REACH = 1.3; // la zona central de la cámara cubre toda la pantalla

const d2 = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

export class HandInputSource {
  constructor(input) {
    this.input = input;
    this.enabled = false;
    this.landmarker = null;
    this.video = null;
    this.lastVideoTime = -1;
    this.state = {};     // por mano (Left / Right): estado de gestos con histéresis
    this.hands = [];     // última lectura, para dibujar las yemas
    this.pose = null;
  }

  async enable(videoEl) {
    if (this.enabled) return;
    const { FilesetResolver, HandLandmarker } = await import('@mediapipe/tasks-vision');
    const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480, facingMode: 'user' }, audio: false });
    this.video = videoEl;
    videoEl.srcObject = stream;
    await videoEl.play();
    const fileset = await FilesetResolver.forVisionTasks(WASM);
    const opts = (delegate) => ({
      baseOptions: { modelAssetPath: MODEL, delegate },
      runningMode: 'VIDEO', numHands: 2,
      minHandDetectionConfidence: 0.6, minHandPresenceConfidence: 0.5, minTrackingConfidence: 0.5,
    });
    try { this.landmarker = await HandLandmarker.createFromOptions(fileset, opts('GPU')); }
    catch { this.landmarker = await HandLandmarker.createFromOptions(fileset, opts('CPU')); }
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
    this.video?.srcObject?.getTracks().forEach((t) => t.stop());
    if (this.video) this.video.srcObject = null;
    this.landmarker?.close();
    this.landmarker = null;
    this.hands = [];
    this.setPose(null);
    this.input.injectCursor(0, 0, false, false, false);
  }

  /** Se llama una vez por cuadro desde el bucle principal. */
  update(nowMs) {
    if (!this.enabled || !this.video || this.video.readyState < 2) return;
    if (this.video.currentTime === this.lastVideoTime) return;
    this.lastVideoTime = this.video.currentTime;
    const res = this.landmarker.detectForVideo(this.video, nowMs);
    const list = (res.landmarks || []).map((lm, i) => ({
      lm, side: res.handednesses?.[i]?.[0]?.categoryName || (i ? 'B' : 'A'),
    }));
    this.process(list, nowMs / 1000);
  }

  toScreen(p) {
    const W = window.innerWidth, H = window.innerHeight;
    const x = ((1 - p.x) - 0.5) * REACH + 0.5; // espejo
    const y = (p.y - 0.5) * REACH + 0.5;
    return [Math.min(1, Math.max(0, x)) * W, Math.min(1, Math.max(0, y)) * H];
  }

  /** Lógica de gestos separada de la detección (permite probarla con puntos sintéticos). */
  process(list, t) {
    const inp = this.input;
    const seen = new Set();
    this.hands = [];
    for (const { lm, side } of list) {
      seen.add(side);
      const st = (this.state[side] ||= { closedAt: -9, open: false, closed: false, fist: false, roll: null, rollV: 0, pinch: false });
      const palmN = [0, 5, 9, 13, 17].reduce((a, i) => ({ x: a.x + lm[i].x / 5, y: a.y + lm[i].y / 5 }), { x: 0, y: 0 });
      const scale = d2(lm[0], lm[9]) || 1e-3;
      const ext = (i) => d2(lm[i], palmN) / scale;
      const openness = (ext(8) + ext(12) + ext(16) + ext(20)) / 4;
      // Proporciones reales: mano abierta ≈ 1.0–1.1 (yemas / tamaño de palma), puño ≈ 0.3–0.5.
      // Histéresis para que los gestos no parpadeen.
      st.open = st.open ? openness > 0.85 : openness > 0.95;
      // Puño = todos los dedos doblados, índice incluido (apuntar no cuenta como puño).
      st.closed = (st.closed ? openness < 0.65 : openness < 0.55) && ext(8) < 0.6;
      st.pinch = st.pinch ? d2(lm[4], lm[8]) / scale < 0.42 : d2(lm[4], lm[8]) / scale < 0.3;
      const pointing = ext(8) > 0.85 && ext(12) < 0.65 && ext(16) < 0.65 && !st.pinch;

      const tips = TIPS.map((i) => this.toScreen(lm[i]));
      const palm = this.toScreen(palmN);
      const hand = { side, tips, palm, pointing, pinch: st.pinch, open: st.open, closed: st.closed, openness };
      this.hands.push(hand);

      // Abrir la palma de golpe (desde puño) -> florecimiento en las yemas.
      if (st.closed) st.closedAt = t;
      if (st.open && !st.wasOpen && t - st.closedAt < 0.45) inp.emit('gesture', { type: 'bloom', tips, palm });
      st.wasOpen = st.open;

      // Puño sostenido.
      if (st.closed && !st.pinch) {
        st.closedFor = (st.closedFor || 0) + (t - (st.lastT || t));
        if (!st.fist && st.closedFor > 0.35) { st.fist = true; inp.emit('gesture', { type: 'fist', stage: 'start', palm }); }
        if (st.fist) inp.emit('gesture', { type: 'fist', stage: 'hold', palm });
      } else {
        st.closedFor = 0;
        if (st.fist) { st.fist = false; inp.emit('gesture', { type: 'fist', stage: 'end', palm }); }
      }

      // Giro de muñeca: ángulo de la línea índice-meñique (nudillos), velocidad suavizada.
      const roll = Math.atan2(lm[17].y - lm[5].y, lm[17].x - lm[5].x);
      if (st.roll !== null && st.lastT !== undefined) {
        let dr = roll - st.roll;
        if (dr > Math.PI) dr -= 2 * Math.PI;
        if (dr < -Math.PI) dr += 2 * Math.PI;
        const v = dr / Math.max(t - st.lastT, 1 / 60);
        st.rollV += (v - st.rollV) * 0.4;
      }
      st.roll = roll;
      st.lastT = t;
      if (Math.abs(st.rollV) > 2.5 && openness > 0.7) inp.emit('gesture', { type: 'twist', palm, rate: -st.rollV });
    }
    for (const k of Object.keys(this.state)) if (!seen.has(k)) delete this.state[k];

    // Pose de dos manos: separadas (ruptura) o juntas (encuentro).
    let pose = null;
    if (this.hands.length === 2) {
      const [a, b] = this.hands;
      const sep = Math.hypot(a.palm[0] - b.palm[0], a.palm[1] - b.palm[1]) / window.innerWidth;
      if (sep > 0.55 && a.openness > 0.8 && b.openness > 0.8) pose = 'apart';
      else if (sep < 0.16) pose = 'together';
      this.poseMid = [(a.palm[0] + b.palm[0]) / 2, (a.palm[1] + b.palm[1]) / 2];
      this.poseSep = sep;
    }
    this.setPose(pose);

    // Pincel: la primera mano que apunta o pellizca; si no, el cursor sigue al índice sin pintar.
    const pen = pose ? null : this.hands.find((h) => h.pointing || h.pinch);
    if (pen) {
      const p = pen.pinch ? [(pen.tips[0][0] + pen.tips[1][0]) / 2, (pen.tips[0][1] + pen.tips[1][1]) / 2] : pen.tips[1];
      inp.injectCursor(p[0], p[1], true, pen.pinch, true);
    } else if (this.hands.length) {
      inp.injectCursor(this.hands[0].tips[1][0], this.hands[0].tips[1][1], false, false, true);
    } else {
      inp.injectCursor(0, 0, false, false, false);
    }
    if (pen && pen.pinch) inp.emit('gesture', { type: 'pinch', pos: [(pen.tips[0][0] + pen.tips[1][0]) / 2, (pen.tips[0][1] + pen.tips[1][1]) / 2] });
  }

  setPose(pose) {
    if (pose === this.pose) return;
    this.pose = pose;
    this.input.emit('pose', { pose, mid: this.poseMid });
  }
}
