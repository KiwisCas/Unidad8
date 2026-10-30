import * as THREE from 'three';
import { PIGMENTS, DIGITAL, mixA } from '../palette.js';
import { clamp } from '../util/math.js';

/**
 * Los mismos gestos de mano en las tres fases, con efectos que cambian de lenguaje:
 *
 *            | I · acuarela               | II · tecnología                  | III · encuentro
 *  abrir     | una gota de tinte por yema | estallido de líneas por yema     | vetas + tinte armónico por yema
 *  girar     | remolino en el agua        | la red se enrosca en espiral     | remolino que mezcla con lo digital
 *  pinza     | trazo fino                 | pozo de gravedad para la red     | trazo fino híbrido
 *  puño      | papel secante              | onda de choque que dispersa      | condensa color y siembra vetas
 */
export class GestureEffects {
  constructor(exp) {
    this.exp = exp;
    this.blot = new THREE.Vector4(0, 0, 0, 0);
    this.reset();
  }

  reset() {
    this.swirl = 0;
    this.blotT = 0;
    this.well = null;
    this.wellT = 0;
    this.repel = null;
    this.repelT = 0;
    this.tint = 0;
  }

  q(px) { return this.exp.composition.screenToQ(px[0], px[1], [0, 0]); }

  handle(g) {
    const exp = this.exp;
    if (!exp.started) return;
    const phase = exp.transition.phase;
    const x = g.palm ? g.palm[0] / window.innerWidth : g.pos ? g.pos[0] / window.innerWidth : 0.5;
    if (g.type !== 'fist' || g.stage === 'start') exp.audio.gesture(g.type, phase, x);
    if (g.type === 'bloom') this.bloom(g, phase);
    else if (g.type === 'twist') this.twist(g, phase);
    else if (g.type === 'pinch') this.pinch(g, phase);
    else if (g.type === 'fist') this.fist(g, phase);
  }

  bloom(g, phase) {
    const exp = this.exp, wc = exp.watercolor;
    const palm = this.q(g.palm);
    const tips = g.tips.map((t) => this.q(t)).filter(Boolean);
    if (!palm || !tips.length) return;
    if (phase === 1) {
      tips.forEach((t, i) => {
        const A = PIGMENTS[(this.tint + i * 2) % PIGMENTS.length].A;
        wc.addSegment(t[0], t[1], t[0] + 0.002, t[1], 0.016 + Math.random() * 0.008, 0.45, 0.32, A, 1, Math.random() * 50);
      });
      this.tint += 1;
    } else if (phase === 2) {
      // Abanico de tres direcciones por yema, hacia fuera de la palma.
      const pts = [];
      for (const t of tips) {
        const a = Math.atan2(t[1] - palm[1], t[0] - palm[0]);
        for (const da of [-0.35, 0, 0.35]) pts.push([t[0], t[1], Math.cos(a + da), Math.sin(a + da)]);
      }
      exp.physarum.burst(pts);
    } else {
      const ink = exp.palette.current.ink;
      tips.forEach((t, i) => {
        const A = mixA(PIGMENTS[(this.tint + i * 2) % PIGMENTS.length].A, ink, 0.5);
        wc.addSegment(t[0], t[1], t[0] + 0.002, t[1], 0.012, 0.3, 0.18, A, 1, Math.random() * 50);
        exp.seedStroke(t, [t[0] - palm[0], t[1] - palm[1]]);
      });
      this.tint += 1;
    }
  }

  twist(g, phase) {
    const p = this.q(g.palm);
    if (!p) return;
    const s = clamp(Math.abs(g.rate) / 4, 0.3, 2) * Math.sign(g.rate);
    const k = phase === 1 ? 0.07 : phase === 2 ? 0.12 : 0.09;
    this.exp.field.addVortex(p[0], p[1], s * k, phase === 2 ? 0.1 : 0.07);
    if (phase === 1) this.swirl = 1;
  }

  pinch(g, phase) {
    if (phase !== 2) return; // en I y III la pinza es un pincel fino (lo resuelve el Brush)
    const p = this.q(g.pos);
    if (p) { this.well = p; this.wellT = 0.25; }
  }

  fist(g, phase) {
    const exp = this.exp;
    const p = this.q(g.palm);
    if (!p) return;
    if (phase === 1) {
      if (g.stage !== 'end') { this.blot.set(p[0], p[1], 0.06, 2.5); this.blotT = 0.15; }
    } else if (phase === 2 && g.stage === 'start') {
      exp.digital.addWave(p[0], p[1], 0.014, exp.time);
      this.repel = p;
      this.repelT = 0.8;
    } else if (phase === 3 && g.stage === 'start') {
      const A = mixA(exp.palette.current.ink, DIGITAL[2].A, 0.3);
      exp.watercolor.addSegment(p[0], p[1], p[0] + 0.003, p[1], 0.035, 0.18, 0.45, A, 1, Math.random() * 50);
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        exp.seedStroke([p[0] + Math.cos(a) * 0.03, p[1] + Math.sin(a) * 0.03], [Math.cos(a), Math.sin(a)]);
      }
    }
  }

  update(dt) {
    this.swirl = Math.max(0, this.swirl - dt * 1.2);
    this.blotT -= dt;
    if (this.blotT <= 0) this.blot.w = 0;
    this.wellT -= dt;
    if (this.wellT <= 0) this.well = null;
    this.repelT -= dt;
    if (this.repelT <= 0) this.repel = null;
  }

  /** Sustituye el cursor de los agentes mientras dura un pozo o una onda de choque. */
  agentOverride(v) {
    if (this.well) { v.set(this.well[0], this.well[1], 0, 2); return true; }
    if (this.repel) { v.set(this.repel[0], this.repel[1], 0, -2.5); return true; }
    return false;
  }
}
