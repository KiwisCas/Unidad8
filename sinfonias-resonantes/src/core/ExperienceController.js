import * as THREE from 'three';
import { VisualComposition } from '../visual/VisualComposition.js';
import { WatercolorSystem } from '../systems/WatercolorSystem.js';
import { FieldSystem } from '../systems/FieldSystem.js';
import { RegionAnalyzer } from '../systems/RegionAnalyzer.js';
import { DigitalStructureSystem } from '../systems/DigitalStructureSystem.js';
import { HybridSystem } from '../systems/HybridSystem.js';
import { Brush } from '../systems/Brush.js';
import { PhysarumSystem } from '../systems/PhysarumSystem.js';
import { ReactionSystem } from '../systems/ReactionSystem.js';
import { TransitionController } from './TransitionController.js';
import { PerformanceMonitor, QUALITY } from './PerformanceMonitor.js';
import { InputController } from '../input/InputController.js';
import { HandInputSource } from '../input/HandInputSource.js';
import { GestureEffects } from './GestureEffects.js';
import { AudioController } from '../audio/AudioController.js';
import { smooth } from '../util/math.js';

/** Estado general: coordina entrada, narrativa, sistemas visuales y sonido. */
export class ExperienceController {
  constructor(canvas, overlay) {
    this.canvas = canvas;
    this.overlay = overlay;
    this.composition = new VisualComposition(canvas);
    const r = this.composition.renderer;
    const ext = r.extensions;
    const floatOK = ext.has('EXT_color_buffer_float') && ext.has('OES_texture_float_linear');
    this.floatType = floatOK ? THREE.FloatType : THREE.HalfFloatType;

    this.watercolor = new WatercolorSystem(r, this.floatType);
    this.field = new FieldSystem(r, this.floatType);
    this.analyzer = new RegionAnalyzer(r);
    this.digital = new DigitalStructureSystem(this.composition);
    this.hybrid = new HybridSystem(this);
    this.transition = new TransitionController();
    this.input = new InputController(canvas);
    this.audio = new AudioController();
    // Un pincel por fuente: el ratón y cada mano pintan su propio trazo a la vez.
    this.brushes = new Map();
    this.streamList = [];
    this.gestureList = [];
    this.physarum = new PhysarumSystem(r, this.floatType);
    this.reaction = new ReactionSystem(r, this.floatType);
    this.palette = this.composition.palette;
    this.perf = new PerformanceMonitor(() => this.resize());
    this.hands = new HandInputSource(this.input);
    this.gestures = new GestureEffects(this);
    this.poseHold = false;

    this.started = false;
    this.time = 0;
    this.frame = 0;
    this.last = performance.now();
    this.analysis = null;
    this.analysisTime = -99;
    this.pointerQ = [0, 0];
    this.ndc = [0, 0];
    this.mouse = { vel: [0, 0], speed: 0, agitation: 0, lastWave: -9, idle: 0 };
    this.ambientT = 0;
    this.resetArmed = -99;
    this.strokePts = [];
    this.coverageT = 0;
    this.lastShift = -99;
    this.rupture = { origin: [0, 0], start: 0 };
    this.agentMouse = new THREE.Vector4(-9, -9, 0, 0);
    this.agentCtx = {};

    this.wireEvents();
    this.resize();
    this.warmup();
    let rt = 0;
    window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => this.resize(), 150); });
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  begin() {
    if (this.started) return;
    this.started = true;
    this.audio.start();
    this.overlay.hideIntro();
    this.overlay.setPhase(1);
    this.brushes.forEach((b) => b.reset());
  }

  /** Activa / desactiva las manos (cámara). Todo se procesa en el equipo. */
  async toggleHands() {
    if (this.hands.enabled) {
      this.hands.disable();
      this.overlay.setHands('off');
      return;
    }
    this.overlay.setHands('loading');
    try {
      await this.hands.enable(this.overlay.video);
      this.overlay.setHands('on');
      this.overlay.toast('manos activas · separa las manos y mantenlas para la ruptura', 4000);
    } catch (err) {
      console.warn(err);
      this.overlay.setHands('off');
      this.overlay.toast('no se pudo activar la cámara', 3000);
    }
  }

  /** Semilla de gesto: alimenta la red y la reacción-difusión ([x, y, t, dx, dy]). */
  seedStroke(q, dir = [0, 0]) {
    const l = Math.hypot(dir[0], dir[1]) || 1;
    this.strokePts.push([q[0], q[1], this.time, dir[0] / l, dir[1] / l]);
    if (this.strokePts.length > 16) this.strokePts.shift();
  }

  toggleMute() {
    this.audio.setMuted(!this.audio.muted);
    this.overlay.setSound(!this.audio.muted);
  }

  wireEvents() {
    const inp = this.input, tr = this.transition;
    inp.on('hold:start', ({ x, y }) => {
      if (!this.started) return;
      const q = this.composition.screenToQ(x, y, [0, 0]);
      if (!q) return;
      let dens = 0;
      if (tr.phase === 2 && this.analysis) dens = this.analysis.densAt(q[0], q[1]);
      this.requestAnalysis();
      tr.beginHold(q, dens);
    });
    inp.on('hold:end', () => tr.endHold());
    inp.on('tap', ({ x, y }) => {
      if (!this.started) return;
      const q = this.composition.screenToQ(x, y, [0, 0]);
      if (q) this.handleTap(q);
    });
    inp.on('gesture', (g) => this.gestures.handle(g));
    // Poses de dos manos: separadas -> ruptura (fase I), juntas -> encuentro (fase II).
    inp.on('pose', ({ pose, mid }) => {
      if (!this.started) return;
      const wanted = (pose === 'apart' && tr.phase === 1) || (pose === 'together' && tr.phase === 2);
      if (wanted && mid) {
        const q = this.composition.screenToQ(mid[0], mid[1], [0, 0]);
        if (q && tr.beginHold(q, 0, 1.1 / 1.5)) this.poseHold = true;
      } else if (this.poseHold) {
        tr.endHold();
        this.poseHold = false;
      }
    });
    inp.on('key', (k) => {
      if (k === 'c') this.toggleHands();
      else if (k === 'f') this.overlay.toggleStats();
      else if (k === 'h') this.overlay.toggleHints();
      else if (k === 'm') this.toggleMute();
      else if (k === 'r' && this.started) {
        if (this.time - this.resetArmed < 3) this.reset();
        else { this.resetArmed = this.time; this.overlay.toast('pulsa R otra vez para reiniciar', 3000); }
      }
    });

    tr.on('trigger', (to, pos, now) => {
      if (to === 2) {
        // El análisis se mantiene al día en segundo plano; sólo si aún no hay ninguno se lee en el acto.
        if (!this.analysis) this.analyzeNow();
        this.digital.buildRupture(this.analysis, pos, now, this.aspect);
        this.rupture = { origin: pos.slice(), start: now };
        this.composition.shared.uRupO.value.set(pos[0], pos[1]);
        this.poseHold = false;
        this.audio.phaseStart(2);
        this.overlay.setPhase(2);
      } else if (to === 3) {
        this.hybrid.begin(pos, now);
        this.digital.addWave(pos[0], pos[1], 0.006, now);
        this.audio.phaseStart(3);
        this.overlay.setPhase(3);
        this.poseHold = false;
      }
    });
  }

  /**
   * Compila todos los programas de GPU mientras se ve la intro. Sin esto, la red,
   * la reacción-difusión y el análisis se compilarían en mitad de la ruptura (tirón visible).
   */
  warmup() {
    const r = this.composition.renderer;
    const ph = this.physarum, rd = this.reaction;
    ph.agentPass.render(r, ph.agents[1]);
    ph.trailPass.render(r, ph.trails[1]);
    r.autoClear = false;
    r.setRenderTarget(ph.trails[1]);
    r.render(ph.depScene, ph.depCam);
    r.autoClear = true;
    rd.u.tState.value = rd.rts[0].texture;
    rd.pass.render(r, rd.rts[1]);
    this.analyzer.render(this.watercolor.wet, this.watercolor.dry, this.aspect);
    r.setRenderTarget(null);
    r.compile(this.composition.scene, this.composition.camera);
    ph.reset();
    rd.reset();
  }

  /** Lectura síncrona (detiene la GPU): sólo como último recurso. */
  analyzeNow() {
    this.analysis = this.analyzer.analyze(this.watercolor.wet, this.watercolor.dry, this.aspect);
    this.analysisTime = this.time;
  }

  /** Pide un análisis sin bloquear: el resultado llega uno o dos cuadros después. */
  requestAnalysis() {
    if (this.analyzer.pending) return;
    const t = this.time;
    this.analysisRequested = t;
    this.analyzer.analyzeAsync(this.watercolor.wet, this.watercolor.dry, this.aspect).then((a) => {
      this.analysis = a;
      this.analysisTime = t;
    }).catch(() => {});
  }

  handleTap(q) {
    if (this.transition.phase === 1) {
      // Gota de agua limpia: floración sobre el pigmento húmedo o seco.
      this.watercolor.addDrop(q[0], q[1], 0.035, 0.55);
      this.audio.drop();
    } else {
      this.digital.addWave(q[0], q[1], 0.008, this.time);
      this.field.addVortex(q[0], q[1], (Math.random() < 0.5 ? -1 : 1) * 0.08, 0.06);
      this.audio.wave(0.8);
    }
  }

  reset() {
    this.watercolor.clear();
    this.field.clear();
    this.digital.clear();
    this.hybrid.reset();
    this.physarum.reset();
    this.reaction.reset();
    this.palette.reset();
    this.strokePts = [];
    this.gestures.reset();
    this.poseHold = false;
    this.transition.reset();
    this.brushes.forEach((b) => b.reset());
    this.analysis = null;
    this.resetArmed = -99;
    this.audio.phaseStart(1);
    this.overlay.setPhase(1);
    this.overlay.toast('lienzo nuevo', 1800);
  }

  resize() {
    const w = Math.max(1, window.innerWidth), h = Math.max(1, window.innerHeight);
    const Q = QUALITY[this.perf.tier];
    const pr = Math.min(window.devicePixelRatio || 1, Q.pixelRatio);
    const aspect = this.composition.resize(w, h, pr);
    this.aspect = aspect;
    const simW = aspect >= 1 ? Q.simMax : Math.round(Q.simMax * aspect);
    const simH = aspect >= 1 ? Math.round(Q.simMax / aspect) : Q.simMax;
    const paperW = Math.min(2560, Math.round(w * pr));
    this.watercolor.resize(aspect, simW, simH, paperW);
    this.composition.setPaper(this.watercolor.paper, paperW, Math.round(paperW / aspect));
    this.field.resize(aspect);
    this.physarum.resize(aspect);
    this.reaction.resize(aspect);
    this.composition.shared.uRDTexel.value.fromArray(this.reaction.texel);
  }

  /** En la fase I, cuando nadie pinta, el papel aún respira: gotas raras que florecen en los bordes. */
  ambient(dt, now) {
    const tr = this.transition;
    if (!this.started || tr.phase !== 1 || this.mouse.idle < 6) { this.ambientT = 0; return; }
    this.ambientT += dt;
    if (this.ambientT < 11) return;
    this.ambientT = 0;
    if (!this.analysis) return;
    const zones = this.analysis.zones.filter((z) => z.boundary.length);
    if (!zones.length) return;
    const z = zones[Math.floor(Math.random() * zones.length)];
    const b = z.boundary[Math.floor(Math.random() * z.boundary.length)];
    this.watercolor.addDrop(b[0] - b[2] * 0.01, b[1] - b[3] * 0.01, 0.028, 0.3);
  }

  brushFor(id) {
    let b = this.brushes.get(id);
    if (!b) { b = new Brush(); this.brushes.set(id, b); }
    return b;
  }

  /** Puntos recientes de todos los trazos: alimentan la red y la reacción-difusión. */
  updateStrokeTrail(dt, gestures, phase) {
    const pts = this.strokePts;
    if (phase >= 2) {
      for (const g of gestures) {
        g.brush.trailTravel = (g.brush.trailTravel || 0) + g.total;
        if (pts.length && g.brush.trailTravel <= 0.025) continue;
        g.brush.trailTravel = 0;
        pts.push([g.pos[0], g.pos[1], this.time, g.dir[0], g.dir[1]]);
        if (pts.length > 16) pts.shift();
      }
    }
    while (pts.length && this.time - pts[0][2] > 2.5) pts.shift();
    this.physarum.setStrokes(pts);
    this.reaction.setStrokes(pts);
  }

  loop(nowMs) {
    requestAnimationFrame(this.loop);
    const dt = Math.min(0.05, Math.max(0.001, (nowMs - this.last) / 1000));
    this.last = nowMs;
    this.time += dt;
    const now = this.time;
    this.perf.sample(dt);
    const comp = this.composition, sh = comp.shared, tr = this.transition, wc = this.watercolor;
    const Q = QUALITY[this.perf.tier];

    // --- entrada -> coordenadas de lienzo
    this.hands.update(nowMs);
    const streams = this.input.consumeStreams(this.streamList);
    const p = this.input.pointer;
    const pointerQ = p.inside ? comp.screenToQ(p.x, p.y, this.pointerQ) : null;
    this.ndc[0] = (p.x / comp.width) * 2 - 1;
    this.ndc[1] = -(p.y / comp.height) * 2 + 1;
    if (this.poseHold && this.hands.poseMid) {
      const mq = comp.screenToQ(this.hands.poseMid[0], this.hands.poseMid[1], [0, 0]);
      if (mq) tr.moveHold(mq);
    } else if (tr.holding && pointerQ) tr.moveHold(pointerQ);

    tr.update(dt, now);
    const { tech, hybrid: hyb, phase } = tr;

    // --- pinceles: uno por fuente (ratón y cada mano). "gesture" es el trazo principal
    // (el que más se mueve); "gestures" son todos los de este cuadro.
    const gestures = this.gestureList;
    gestures.length = 0;
    let gesture = null, speed = 0;
    if (this.started) {
      const amount = phase === 1 ? 1 : phase === 2 ? Math.max(0, 1 - tech * 2.5) : hyb;
      for (const st of streams) {
        const b = this.brushFor(st.id);
        if (st.brk) b.reset();
        const pts = [];
        for (const s of st.pts) {
          const q = comp.screenToQ(s[0], s[1], [0, 0]);
          if (q) pts.push(q);
        }
        const g = b.update(dt, pts, { amount, hybrid: phase === 3 ? hyb : 0, fine: st.fine }, wc);
        if (g) {
          g.brush = b;
          gestures.push(g);
          if (!gesture || g.total > gesture.total) gesture = g;
        }
        speed = Math.max(speed, b.speed);
      }
    }
    const m = this.mouse;
    if (gesture) {
      const k = Math.min(1, dt * 8);
      m.vel[0] += (gesture.dir[0] * gesture.speed - m.vel[0]) * k;
      m.vel[1] += (gesture.dir[1] * gesture.speed - m.vel[1]) * k;
      m.idle = 0;
    } else {
      const k = Math.exp(-dt * 4);
      m.vel[0] *= k; m.vel[1] *= k;
      m.idle += dt;
    }
    m.speed = speed;
    const agT = smooth(0.05, 1.2, m.speed);
    m.agitation += (agT - m.agitation) * Math.min(1, dt * (agT > m.agitation ? 4 : 0.6));

    // --- fase III: el gesto ondula y tuerce. En la fase II apenas afecta: sólo engendra líneas.
    for (const g of gestures) {
      const [x, y] = g.pos;
      if (phase === 3) {
        if (g.speed > 1.1 && now - m.lastWave > 0.4) {
          this.digital.addWave(x, y, 0.004 + 0.003 * Math.min(g.speed - 1.1, 2), now);
          this.audio.wave(0.35 + 0.25 * Math.min(g.speed - 1.1, 1.5));
          m.lastWave = now;
        }
        if (Math.abs(g.turn) > 0.6 && g.speed > 0.2) {
          this.field.addVortex(x, y, Math.sign(g.turn) * 0.05 * Math.min(g.speed, 2), 0.07);
        }
      }
      const dens = this.analysis ? this.analysis.densAt(x, y) : 0.3;
      this.audio.stroke({ speed: g.speed, x: x / this.aspect, y, density: dens, accent: g.accent });
    }

    // --- uniforms compartidos
    const charge = Math.pow(tr.charge, 1.4);
    sh.uTime.value = now;
    sh.uTech.value = tech;
    sh.uHybrid.value = hyb;
    sh.uAgitation.value = m.agitation;
    // w: hacia qué umbral apunta la carga (1 = ruptura, 2 = encuentro), estable durante la transición.
    sh.uCharge.value.set(tr.holdPos[0], tr.holdPos[1], charge, tr.trans ? tr.trans.to - 1 : tr.phase);
    sh.uRupT.value = tr.ruptureT;

    // --- campo vectorial
    const fu = this.field.u;
    fu.uTime.value = now; fu.uTech.value = tech; fu.uHybrid.value = hyb;
    fu.uMouse.value.set(pointerQ ? pointerQ[0] : -9, pointerQ ? pointerQ[1] : -9, m.vel[0], m.vel[1]);
    fu.uMouseGain.value = phase === 2 ? 0.15 : phase === 3 ? 0.5 : 0;
    fu.uCharge.value.copy(sh.uCharge.value);
    // Análisis periódico en segundo plano (umbral, gotas ambientales, cobertura).
    if (this.started && now - (this.analysisRequested ?? -99) > (phase === 3 ? 2.5 : 2)) this.requestAnalysis();
    this.hybrid.update(dt, now, pointerQ, gestures);
    this.field.step(dt, wc.wet, wc.dry);

    if (this.digital.active) this.digital.update(dt, now, { mouse: pointerQ, vel: m.vel, speed: m.speed, hybrid: hyb });
    this.ambient(dt, now);

    // --- sistemas autónomos: red de physarum y reacción-difusión
    this.updateStrokeTrail(dt, gestures, phase);
    const live = phase >= 2;
    // Cursor lento = atraer / sembrar; rápido = dispersar / disolver; quieto = dejarlos ser.
    // En la fase II el cursor no atrae ni dispersa: la red sólo recibe las líneas que engendras.
    const mode = phase !== 3 || !pointerQ || m.idle > 0.4 ? 0 : m.speed > 0.9 ? -1 : m.speed > 0.02 ? 1 : 0;
    this.agentMouse.set(pointerQ ? pointerQ[0] : -9, pointerQ ? pointerQ[1] : -9, m.speed, mode);
    this.gestures.agentOverride(this.agentMouse);
    // La red empieza a crecer cuando el cuadro ya se ha quebrado.
    const growR = live ? Math.max(0, now - this.rupture.start - 2.6) * 0.3 : 0;
    const ag = this.agentCtx;
    Object.assign(ag, {
      time: now, active: live, growR, origin: this.rupture.origin, hybrid: hyb, mouse: this.agentMouse,
      wet: wc.wet, dry: wc.dry, field: this.field.texture, spawnRate: 0.04,
      strokeSteal: tr.ruptureT > 2.6 && gesture ? (phase === 2 ? 0.0016 : 0.0008) : 0,
      seedRate: phase === 3 ? 0.001 : 0.003,
    });
    this.physarum.update(dt, ag);
    if (phase === 2 && ag.strokeSteal > 0) this.audio.birth();
    this.reaction.update(dt, ag, Q.rdIterations);
    sh.tRD.value = this.reaction.alive > 0 ? this.reaction.texture : null;
    sh.uRDVis.value = smooth(0.2, 1, tech) * (1 - 0.35 * hyb);
    sh.uNetGlow.value = smooth(0.1, 0.8, tech);
    sh.uRelief.value = tech * 0.034 * (1 - 0.65 * hyb);
    sh.tTrail.value = this.physarum.trails ? this.physarum.trail : null;

    // --- lienzo lleno en la fase III: la paleta cambia en un frente desde el último gesto
    this.palette.update(dt, this.aspect);
    if (phase === 3 && hyb > 0.95) {
      this.coverageT += dt;
      if (this.coverageT > 2.5 && !this.palette.transitioning && now - this.lastShift > 14) {
        this.coverageT = 0;
        if (this.analysis && this.analysisTime > this.lastShift + 3 && this.analysis.coverage() > 0.42) {
          const o = this.strokePts.length ? this.strokePts[this.strokePts.length - 1] : [this.aspect / 2, 0.5];
          this.palette.shift(o);
          this.hybrid.nextEchoMode();
          this.lastShift = now;
          this.audio.paletteShift();
        }
      }
    }

    sh.tWet.value = wc.wet; sh.tDry.value = wc.dry; sh.tField.value = this.field.texture;

    // --- acuarela
    wc.step(dt, this.field.texture, null, {
      advect: Math.max(hyb * 0.22, this.gestures.swirl * 0.9), aniso: 0, depositAmt: 0,
      blot: this.gestures.blot.w > 0 ? this.gestures.blot : null,
      // Fase II: el cuadro se marmoliza con el campo (y el gesto lo puede remover).
      dryAdvect: tech * 0.4 * (1 - 0.7 * hyb),
      trail: this.physarum.trails ? this.physarum.trail : null,
      netDeposit: hyb, netA: this.palette.current.ink,
      rd: null, rdDeposit: 0,
      dissolve: this.palette.transitioning ? this.palette.dissolve : null,
    }, Q.substeps);
    sh.tWet.value = wc.wet; sh.tDry.value = wc.dry;

    // --- composición
    // Temblor: impacto de la ruptura y umbral sostenido.
    const rs = tr.ruptureT;
    const impact = rs >= 0.6 && rs < 2.2 ? 1 - smooth(0.6, 2.2, rs) : 0;
    comp.updateCamera(dt, now, Math.max(tech, hyb), p.inside ? this.ndc : null, impact * 1.3 + tr.charge * tr.charge * 0.6);
    comp.render();

    this.gestures.update(dt);
    if (this.frame % 30 === 0) this.overlay.updateStats(Math.round(1 / this.perf.avg), this.perf.tier, QUALITY.length);
    this.overlay.moveCursor(p.x, p.y, tr.charge, p.inside && this.started && !this.hands.enabled);
    this.overlay.drawHands(this.hands, tr.charge, this.poseHold);
    this.audio.update(dt, { tech, hybrid: hyb, speed: m.speed, charge: tr.charge, agitation: m.agitation });
    this.frame++;
  }
}
