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
import { AudioController } from '../audio/AudioController.js';
import { smooth } from '../util/math.js';

const QUOTE = 'No tenemos que destruir lo que fuimos para descubrir lo que podemos llegar a ser.';

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
    this.brush = new Brush();
    this.physarum = new PhysarumSystem(r, this.floatType);
    this.reaction = new ReactionSystem(r, this.floatType);
    this.palette = this.composition.palette;
    this.perf = new PerformanceMonitor(() => this.resize());

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
    this.strokeTravel = 0;
    this.coverageT = 0;
    this.lastShift = -99;
    this.rupture = { origin: [0, 0], start: 0 };
    this.agentMouse = new THREE.Vector4(-9, -9, 0, 0);

    this.wireEvents();
    this.resize();
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
    this.brush.reset();
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
      if (tr.phase === 2) { this.refreshAnalysis(); dens = this.analysis.densAt(q[0], q[1]); }
      tr.beginHold(q, dens);
    });
    inp.on('hold:end', () => tr.endHold());
    inp.on('tap', ({ x, y }) => {
      if (!this.started) return;
      const q = this.composition.screenToQ(x, y, [0, 0]);
      if (q) this.handleTap(q);
    });
    inp.on('key', (k) => {
      if (k === 'h') this.overlay.toggleHints();
      else if (k === 'm') this.toggleMute();
      else if (k === 'r' && this.started) {
        if (this.time - this.resetArmed < 3) this.reset();
        else { this.resetArmed = this.time; this.overlay.toast('pulsa R otra vez para reiniciar', 3000); }
      }
    });

    tr.on('trigger', (to, pos, now) => {
      if (to === 2) {
        this.refreshAnalysis();
        this.digital.buildRupture(this.analysis, pos, now, this.aspect);
        this.rupture = { origin: pos.slice(), start: now };
        this.audio.phaseStart(2);
        this.overlay.setPhase(2);
      } else if (to === 3) {
        this.hybrid.begin(pos, now);
        this.digital.addWave(pos[0], pos[1], 0.006, now);
        this.audio.phaseStart(3);
        this.overlay.setPhase(3);
        setTimeout(() => this.overlay.toast(QUOTE, 8000, 'quote'), 3500);
      }
    });
  }

  refreshAnalysis() {
    this.analysis = this.analyzer.analyze(this.watercolor.wet, this.watercolor.dry, this.aspect);
    this.analysisTime = this.time;
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
    this.transition.reset();
    this.brush.reset();
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
    this.footRT?.dispose();
    this.footRT = new THREE.WebGLRenderTarget(Math.round(simW / 2), Math.round(simH / 2), {
      type: this.floatType, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false, generateMipmaps: false,
    });
  }

  /** En la fase I, cuando nadie pinta, el papel aún respira: gotas raras que florecen en los bordes. */
  ambient(dt, now) {
    const tr = this.transition;
    if (!this.started || tr.phase !== 1 || this.mouse.idle < 6) { this.ambientT = 0; return; }
    this.ambientT += dt;
    if (this.ambientT < 11) return;
    this.ambientT = 0;
    this.refreshAnalysis();
    const zones = this.analysis.zones.filter((z) => z.boundary.length);
    if (!zones.length) return;
    const z = zones[Math.floor(Math.random() * zones.length)];
    const b = z.boundary[Math.floor(Math.random() * z.boundary.length)];
    this.watercolor.addDrop(b[0] - b[2] * 0.01, b[1] - b[3] * 0.01, 0.028, 0.3);
  }

  /** Puntos recientes del gesto: alimentan el seguimiento de trayectoria y los nacimientos. */
  updateStrokeTrail(dt, gesture, phase) {
    const pts = this.strokePts;
    if (gesture && phase >= 2) {
      this.strokeTravel += gesture.total;
      if (!pts.length || this.strokeTravel > 0.025) {
        this.strokeTravel = 0;
        pts.push([gesture.pos[0], gesture.pos[1], this.time]);
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
    const pts = [];
    for (const s of this.input.consumeSamples()) {
      const q = comp.screenToQ(s[0], s[1], [0, 0]);
      if (q) pts.push(q);
    }
    const p = this.input.pointer;
    const pointerQ = p.inside ? comp.screenToQ(p.x, p.y, this.pointerQ) : null;
    this.ndc[0] = (p.x / comp.width) * 2 - 1;
    this.ndc[1] = -(p.y / comp.height) * 2 + 1;
    if (tr.holding && pointerQ) tr.moveHold(pointerQ);

    tr.update(dt, now);
    const { tech, hybrid: hyb, phase } = tr;

    // --- pincel
    let gesture = null;
    if (this.started) {
      const amount = phase === 1 ? 1 : phase === 2 ? Math.max(0, 1 - tech * 2.5) : hyb;
      gesture = this.brush.update(dt, pts, { amount, hybrid: phase === 3 ? hyb : 0 }, wc);
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
    m.speed = this.brush.speed;
    const agT = smooth(0.05, 1.2, m.speed);
    m.agitation += (agT - m.agitation) * Math.min(1, dt * (agT > m.agitation ? 4 : 0.6));

    // --- el gesto frente a la tecnología: ondas y torsiones, no persecución
    if (gesture && phase >= 2) {
      const [x, y] = gesture.pos;
      if (gesture.speed > 1.1 && now - m.lastWave > 0.4) {
        this.digital.addWave(x, y, 0.004 + 0.003 * Math.min(gesture.speed - 1.1, 2), now);
        this.audio.wave(0.35 + 0.25 * Math.min(gesture.speed - 1.1, 1.5));
        m.lastWave = now;
      }
      if (Math.abs(gesture.turn) > 0.6 && gesture.speed > 0.2) {
        this.field.addVortex(x, y, Math.sign(gesture.turn) * 0.05 * Math.min(gesture.speed, 2), 0.07);
      }
    }
    if (gesture && this.started) {
      const dens = this.analysis ? this.analysis.densAt(gesture.pos[0], gesture.pos[1]) : 0.3;
      this.audio.stroke({ speed: gesture.speed, x: gesture.pos[0] / this.aspect, y: gesture.pos[1], density: dens, accent: gesture.accent });
    }

    // --- uniforms compartidos
    const charge = Math.pow(tr.charge, 1.4);
    sh.uTime.value = now;
    sh.uTech.value = tech;
    sh.uHybrid.value = hyb;
    sh.uAgitation.value = m.agitation;
    sh.uCharge.value.set(tr.holdPos[0], tr.holdPos[1], charge, 0);

    // --- campo vectorial
    const fu = this.field.u;
    fu.uTime.value = now; fu.uTech.value = tech; fu.uHybrid.value = hyb;
    fu.uMouse.value.set(pointerQ ? pointerQ[0] : -9, pointerQ ? pointerQ[1] : -9, m.vel[0], m.vel[1]);
    fu.uMouseGain.value = phase === 2 ? 1 : phase === 3 ? 0.5 : 0;
    fu.uCharge.value.copy(sh.uCharge.value);
    if (phase === 3 && now - this.analysisTime > 10) this.refreshAnalysis();
    this.hybrid.update(dt, now, pointerQ, gesture);
    this.field.step(dt, wc.wet, wc.dry);

    if (this.digital.active) this.digital.update(dt, now, { mouse: pointerQ, vel: m.vel, speed: m.speed, hybrid: hyb });
    this.ambient(dt, now);

    // --- sistemas autónomos: red de physarum y reacción-difusión
    this.updateStrokeTrail(dt, gesture, phase);
    const live = phase >= 2;
    // Cursor lento = atraer / sembrar; rápido = dispersar / disolver; quieto = dejarlos ser.
    const mode = !pointerQ || m.idle > 0.4 ? 0 : m.speed > 0.9 ? -1 : m.speed > 0.02 ? 1 : 0;
    this.agentMouse.set(pointerQ ? pointerQ[0] : -9, pointerQ ? pointerQ[1] : -9, m.speed, mode);
    const growR = live ? (now - this.rupture.start) * 0.28 : 0;
    const agents = {
      time: now, active: live, growR, origin: this.rupture.origin, hybrid: hyb, mouse: this.agentMouse,
      wet: wc.wet, dry: wc.dry, field: this.field.texture,
    };
    this.physarum.update(dt, { ...agents, spawnRate: 0.04, strokeSpawn: phase === 3 && gesture ? 0.12 : 0 });
    this.reaction.update(dt, { ...agents, seedRate: phase === 3 ? 0.001 : 0.003 }, Q.rdIterations);
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
        this.refreshAnalysis();
        if (this.analysis.coverage() > 0.42) {
          const o = this.strokePts.length ? this.strokePts[this.strokePts.length - 1] : [this.aspect / 2, 0.5];
          this.palette.shift(o);
          this.hybrid.nextEchoMode();
          this.lastShift = now;
          this.audio.paletteShift();
        }
      }
    }

    sh.tWet.value = wc.wet; sh.tDry.value = wc.dry; sh.tField.value = this.field.texture;

    // --- huellas de pigmento de las estructuras (fase III)
    let foot = null, depositAmt = 0;
    if (this.hybrid.active && this.frame % Q.footEvery === 0) {
      comp.renderFootprint(this.footRT);
      foot = this.footRT.texture;
      depositAmt = this.hybrid.depositAmount * Q.footEvery * Math.min(dt * 60, 2);
    }

    // --- acuarela
    wc.step(dt, this.field.texture, foot, {
      advect: hyb * 0.22, aniso: hyb * 0.6, depositAmt,
      // Fase II: el cuadro se marmoliza con el campo (y el gesto lo puede remover).
      dryAdvect: tech * 0.4 * (1 - 0.7 * hyb),
      trail: this.physarum.trails ? this.physarum.trail : null,
      netDeposit: hyb, netA: this.palette.current.ink,
      rd: null, rdDeposit: 0,
      dissolve: this.palette.transitioning ? this.palette.dissolve : null,
    }, Q.substeps);
    sh.tWet.value = wc.wet; sh.tDry.value = wc.dry;

    // --- composición
    comp.updateCamera(dt, now, Math.max(tech, hyb), p.inside ? this.ndc : null);
    comp.render();

    this.overlay.moveCursor(p.x, p.y, tr.charge, p.inside && this.started);
    this.audio.update(dt, { tech, hybrid: hyb, speed: m.speed, charge: tr.charge, agitation: m.agitation });
    this.frame++;
  }
}
