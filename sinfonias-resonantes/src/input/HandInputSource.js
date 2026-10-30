/**
 * Manos con la cámara (MediaPipe Hand Landmarker, hasta 2 manos), procesado local.
 * Traduce los puntos de la mano al mismo vocabulario de intenciones que el ratón:
 *   índice extendido      -> pincel (cada mano tiene su propio trazo)
 *   pinza pulgar-índice   -> pincel fino
 *   abrir la palma de golpe -> 'bloom' con la posición de las cinco yemas
 *   girar la mano         -> 'twist' con su velocidad angular
 *   puño sostenido        -> 'fist' start / hold / end
 *   dos manos separadas / juntas -> pose 'apart' / 'together' (umbrales de fase)
 *
 * Robustez:
 *  - Identidad por seguimiento de posición, no por la etiqueta izquierda/derecha
 *    de MediaPipe (que a veces repite o intercambia la etiqueta entre cuadros).
 *  - Medidas en 3D (worldLandmarks) e independientes de la escala: girar o inclinar
 *    la palma no cambia si un dedo está extendido o doblado.
 *  - Histéresis en cada gesto y tolerancia a pérdidas breves de seguimiento.
 *  - Filtro One Euro sobre el punto de pintura (menos temblor sin añadir retraso).
 */
const VERSION = '0.10.14';
const WASM = `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${VERSION}/wasm`;
const MODEL = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';
const TIPS = [4, 8, 12, 16, 20];
const REACH = 1.3;        // la zona central de la cámara cubre toda la pantalla
const GRACE = 0.3;        // s que una mano puede desaparecer sin perder su estado
const MATCH_DIST = 0.25;  // distancia máxima (coords. de cámara) para reconocer la misma mano
const BLOOM_WINDOW = 0.8; // s entre cerrar el puño y abrir la palma

const d3 = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, (a.z || 0) - (b.z || 0));
const wrap = (a) => (a > Math.PI ? a - 2 * Math.PI : a < -Math.PI ? a + 2 * Math.PI : a);

/** Filtro One Euro: suaviza el temblor en reposo y sigue los movimientos rápidos. */
class OneEuro {
  constructor(minCutoff = 1.4, beta = 0.006, dCutoff = 1) {
    this.minCutoff = minCutoff; this.beta = beta; this.dCutoff = dCutoff; this.t = null;
  }
  static alpha(dt, cutoff) { const tau = 1 / (2 * Math.PI * cutoff); return 1 / (1 + tau / dt); }
  filter(x, t) {
    if (this.t === null) { this.t = t; this.x = x; this.dx = 0; return x; }
    const dt = Math.max(t - this.t, 1e-3);
    this.t = t;
    this.dx += OneEuro.alpha(dt, this.dCutoff) * ((x - this.x) / dt - this.dx);
    this.x += OneEuro.alpha(dt, this.minCutoff + this.beta * Math.abs(this.dx)) * (x - this.x);
    return this.x;
  }
}

export class HandInputSource {
  constructor(input) {
    this.input = input;
    this.enabled = false;
    this.landmarker = null;
    this.video = null;
    this.lastVideoTime = -1;
    this.tracks = [];   // manos seguidas: identidad estable + estado de gestos
    this.hands = [];    // lectura visible, para dibujar las yemas
    this.pose = null;
    this.nextId = 0;
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
      minHandDetectionConfidence: 0.55, minHandPresenceConfidence: 0.5, minTrackingConfidence: 0.5,
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
    for (const tr of this.tracks) this.input.endStroke(tr.id);
    this.tracks = [];
    this.hands = [];
    this.setPose(null);
    this.input.setPointer(0, 0, false);
  }

  /** Se llama una vez por cuadro desde el bucle principal. */
  update(nowMs) {
    if (!this.enabled || !this.video || this.video.readyState < 2) return;
    if (this.video.currentTime === this.lastVideoTime) return;
    // Como mucho 25 detecciones por segundo: la detección comparte GPU con la obra.
    if (nowMs - (this.lastDetect || 0) < 40) return;
    this.lastDetect = nowMs;
    this.lastVideoTime = this.video.currentTime;
    const res = this.landmarker.detectForVideo(this.video, nowMs);
    const list = (res.landmarks || []).map((lm, i) => ({ lm, wlm: res.worldLandmarks?.[i] }));
    this.process(list, nowMs / 1000);
  }

  toScreen(p) {
    const W = window.innerWidth, H = window.innerHeight;
    const x = ((1 - p.x) - 0.5) * REACH + 0.5; // espejo
    const y = (p.y - 0.5) * REACH + 0.5;
    return [Math.min(1, Math.max(0, x)) * W, Math.min(1, Math.max(0, y)) * H];
  }

  /** Asocia cada detección con la mano seguida más cercana (o crea una nueva). */
  match(dets, t) {
    const pairs = [];
    dets.forEach((d, i) => this.tracks.forEach((tr, j) => {
      const dist = Math.hypot(d.palmN.x - tr.palmN.x, d.palmN.y - tr.palmN.y);
      if (dist < MATCH_DIST) pairs.push([dist, i, j]);
    }));
    pairs.sort((a, b) => a[0] - b[0]);
    const usedD = new Set(), usedT = new Set();
    for (const [, i, j] of pairs) {
      if (usedD.has(i) || usedT.has(j)) continue;
      usedD.add(i); usedT.add(j);
      dets[i].track = this.tracks[j];
    }
    for (const d of dets) {
      if (d.track) continue;
      d.track = {
        id: 'hand' + this.nextId++, fx: new OneEuro(), fy: new OneEuro(),
        open: false, closed: false, pinch: false, fist: false, closedAt: -9, wasOpen: false,
        closedFor: 0, twistAcc: 0, twistV: 0, lastT: null,
      };
      this.tracks.push(d.track);
    }
    for (const d of dets) { d.track.palmN = d.palmN; d.track.lastSeen = t; }
  }

  /** Lógica de gestos separada de la detección (permite probarla con puntos sintéticos). */
  process(list, t) {
    const inp = this.input;
    const dets = list.map(({ lm, wlm }) => ({
      lm, P: wlm || lm,
      palmN: [0, 5, 9, 13, 17].reduce((a, i) => ({ x: a.x + lm[i].x / 5, y: a.y + lm[i].y / 5 }), { x: 0, y: 0 }),
    }));
    this.match(dets, t);

    for (const d of dets) this.gestures(d, d.track, t);

    // Manos que llevan demasiado tiempo sin verse: se cierran sus trazos y gestos.
    this.tracks = this.tracks.filter((tr) => {
      if (t - tr.lastSeen <= GRACE) return true;
      inp.endStroke(tr.id);
      if (tr.fist) inp.emit('gesture', { type: 'fist', stage: 'end', palm: tr.hand.palm });
      return false;
    });
    const live = this.tracks.filter((tr) => tr.hand);
    this.hands = live.map((tr) => tr.hand);

    this.updatePose(live, t);

    // Pinceles: cada mano que apunta o pellizca pinta su propio trazo.
    let cursor = null;
    for (const d of dets) {
      const tr = d.track, h = tr.hand;
      const pen = !this.pose && (h.pointing || h.pinch);
      const raw = h.pinch ? [(h.tips[0][0] + h.tips[1][0]) / 2, (h.tips[0][1] + h.tips[1][1]) / 2] : h.tips[1];
      const p = [tr.fx.filter(raw[0], t), tr.fy.filter(raw[1], t)];
      h.pen = pen;
      h.penPos = p;
      inp.injectStroke(tr.id, p[0], p[1], pen, h.pinch);
      if (pen && h.pinch) inp.emit('gesture', { type: 'pinch', pos: p });
      if (!cursor || (pen && !cursor.pen)) cursor = { pen, p };
    }
    if (cursor) inp.setPointer(cursor.p[0], cursor.p[1], true);
    else if (!live.length) inp.setPointer(0, 0, false);
  }

  gestures(d, tr, t) {
    const inp = this.input, { lm, P } = d;
    const w = P[0];
    // Extensión de cada dedo: distancia yema-muñeca frente a articulación media-muñeca.
    // Extendido ≈ 1.3–1.45, doblado ≈ 0.7–0.9; no depende de la escala ni del giro.
    const ratio = (tip, pip) => d3(P[tip], w) / Math.max(d3(P[pip], w), 1e-6);
    const r = [ratio(8, 6), ratio(12, 10), ratio(16, 14), ratio(20, 18)];
    const nExt = r.filter((v) => v > 1.15).length;
    const nCurl = r.filter((v) => v < 0.95).length;
    const size = Math.max(d3(P[0], P[9]), 1e-6);
    const pinchD = d3(P[4], P[8]) / size;

    tr.open = tr.open ? nExt >= 2 : nExt >= 3;
    tr.closed = tr.closed ? nExt === 0 : nCurl === 4;
    tr.pinch = tr.pinch ? pinchD < 0.4 : pinchD < 0.26 && r[0] > 0.8;
    const pointing = !tr.pinch && r[0] > 1.15 && r[1] < 1.05 && r[2] < 1.05;

    const tips = TIPS.map((i) => this.toScreen(lm[i]));
    const palm = this.toScreen(d.palmN);
    tr.hand = { id: tr.id, tips, palm, pointing, pinch: tr.pinch, open: tr.open, closed: tr.closed, nExt };

    // Abrir la palma de golpe (desde puño).
    if (tr.closed) tr.closedAt = t;
    if (tr.open && !tr.wasOpen && t - tr.closedAt < BLOOM_WINDOW) inp.emit('gesture', { type: 'bloom', tips, palm });
    tr.wasOpen = tr.open;

    // Puño sostenido.
    const dt = tr.lastT === null ? 1 / 25 : Math.min(Math.max(t - tr.lastT, 1 / 120), 0.2);
    // Sólo cuenta como puño con los dedos realmente doblados (al abrir despacio la mano
    // pasa por un estado intermedio que no debe disparar el secante ni la onda de choque).
    if (tr.closed && nCurl >= 3 && !tr.pinch) {
      tr.closedFor += dt;
      if (!tr.fist && tr.closedFor > 0.3) { tr.fist = true; inp.emit('gesture', { type: 'fist', stage: 'start', palm }); }
      if (tr.fist) inp.emit('gesture', { type: 'fist', stage: 'hold', palm });
    } else {
      tr.closedFor = 0;
      if (tr.fist) { tr.fist = false; inp.emit('gesture', { type: 'fist', stage: 'end', palm }); }
    }

    // Giro: el mayor de dos ángulos — en el plano de la imagen (girar como un pomo)
    // o de la normal de la palma (rotar el antebrazo). Hace falta un giro acumulado
    // real, no un salto de un cuadro, para disparar el gesto.
    const inplane = Math.atan2(lm[17].y - lm[5].y, lm[17].x - lm[5].x);
    const ax = P[5].x - w.x, ay = P[5].y - w.y, az = (P[5].z || 0) - (w.z || 0);
    const bx = P[17].x - w.x, by = P[17].y - w.y, bz = (P[17].z || 0) - (w.z || 0);
    const nx = ay * bz - az * by, nz = ax * by - ay * bx;
    const yaw = Math.atan2(nx, nz);
    if (tr.lastT !== null) {
      const a1 = -wrap(inplane - tr.inplane), a2 = wrap(yaw - tr.yaw);
      const da = Math.abs(a1) >= Math.abs(a2) ? a1 : a2;
      tr.twistV += (da / dt - tr.twistV) * 0.5;
      tr.twistAcc = tr.twistAcc * Math.exp(-dt * 3) + da;
    }
    tr.inplane = inplane;
    tr.yaw = yaw;
    tr.lastT = t;
    if (Math.abs(tr.twistAcc) > 0.45 && Math.abs(tr.twistV) > 1.2 && nExt >= 2) {
      inp.emit('gesture', { type: 'twist', palm, rate: tr.twistV });
    }
  }

  /** Pose de dos manos con histéresis y un margen ante pérdidas breves (manos juntas se tapan). */
  updatePose(live, t) {
    let pose = null;
    if (live.length === 2) {
      const [a, b] = live.map((tr) => tr.hand);
      const sep = Math.hypot(a.palm[0] - b.palm[0], a.palm[1] - b.palm[1]) / window.innerWidth;
      const opened = a.nExt >= 2 && b.nExt >= 2;
      if (opened && sep > (this.pose === 'apart' ? 0.42 : 0.5)) pose = 'apart';
      else if (sep < (this.pose === 'together' ? 0.26 : 0.18)) pose = 'together';
      this.poseMid = [(a.palm[0] + b.palm[0]) / 2, (a.palm[1] + b.palm[1]) / 2];
      this.poseSep = sep;
    }
    if (pose) this.poseSeen = t;
    else if (this.pose && t - (this.poseSeen ?? -9) < 0.35) pose = this.pose;
    this.setPose(pose);
  }

  setPose(pose) {
    if (pose === this.pose) return;
    this.pose = pose;
    this.input.emit('pose', { pose, mid: this.poseMid });
  }
}
