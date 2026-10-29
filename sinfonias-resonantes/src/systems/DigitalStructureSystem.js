import { BranchForest, growTree } from './structures/Branches.js';
import { clamp, easeInOut, smooth, mulberry32 } from '../util/math.js';

/**
 * Estructura del lienzo: pliegues que siguen las manchas dominantes, ondas de
 * tensión y las ramificaciones pigmentadas que brotan de los trazos en la fase III.
 * (La red y el enjambre viven en PhysarumSystem y SwarmSystem.)
 */
export class DigitalStructureSystem {
  constructor(composition) {
    this.comp = composition;
    this.shared = composition.shared;
    this.groups = { main: composition.structGroup, shadow: composition.shadowGroup, foot: composition.footScene };
    this.structures = [];
    this.trees = [];
    this.folds = [];
    this.forest = null;
    this.waveIdx = 0;
    this.lastHybridStart = Infinity;
  }

  addWave(x, y, amp, now) {
    this.shared.uWave.value[this.waveIdx].set(x, y, now, amp);
    this.waveIdx = (this.waveIdx + 1) % 8;
  }

  add(struct) {
    struct.attach(this.groups);
    this.structures.push(struct);
    return struct;
  }

  buildRupture(an, origin, now, aspect) {
    const rng = mulberry32((now * 1000) | 0);
    const zones = an.zones.map((z) => {
      const distO = Math.hypot(z.center[0] - origin[0], z.center[1] - origin[1]);
      return { ...z, distO, delay: 0.35 + distO * 2.4 };
    });
    const mass = (z) => z.area * z.meanDens;
    const byMass = [...zones].sort((a, b) => mass(b) - mass(a));

    // Pliegues: atraviesan las manchas dominantes siguiendo su eje principal.
    this.folds = [];
    this.folds.push({ cx: origin[0], cy: origin[1], angle: rng() * Math.PI, amp0: 0.014, width: 0.16, halfLen: 0.7, delay: 0, phase: rng() * 6, extra: 0, start: now });
    for (const z of byMass.slice(0, 4)) {
      this.folds.push({
        cx: z.center[0], cy: z.center[1], angle: z.axis + (rng() < 0.5 ? 0 : Math.PI / 2),
        amp0: (rng() < 0.5 ? -1 : 1) * (0.01 + rng() * 0.012), width: 0.1 + rng() * 0.1,
        halfLen: clamp(z.major * 1.5 + 0.15, 0.25, 0.8), delay: z.delay + 0.2, phase: rng() * 6, extra: 0, start: now,
      });
    }
    this.addWave(origin[0], origin[1], 0.012, now);
    return { zones: zones.length };
  }

  /** Árbol nacido en la fase III (marcas híbridas). Devuelve su registro para inyectar pigmento. */
  spawnTree(root, dir, pig, now, an, aspect, scale = 1) {
    const rng = mulberry32((Math.random() * 1e9) | 0);
    const polys = growTree(root, dir, {
      steps: Math.round(18 * scale), step: 0.008, maxDepth: 3, branchProb: 0.2, speed: 0.09, avoid: 0.25,
      wander: 0.45, curlScale: 4, aspect, width: 0.0034 * scale, delay: 0, seed: rng() * 50, pig,
    }, rng, an);
    if (!polys.length) return null;
    const forest = this.add(new BranchForest(this.shared, polys, now, 0.65));
    const rec = { forest, polys, start: now, life: 45 + Math.random() * 15, injected: 0 };
    this.trees.push(rec);
    if (this.trees.length > 18) {
      // Recicla el árbol más antiguo que aún no se esté desvaneciendo.
      const old = this.trees.find((t) => t.life > now - t.start + 6);
      if (old) old.life = now - old.start + 5;
    }
    return rec;
  }

  get active() { return this.folds.length > 0 || this.structures.length > 0; }

  update(dt, now, ctx) {
    const { mouse, vel, speed, hybrid } = ctx;
    const fold = this.shared.uFold.value, foldB = this.shared.uFoldB.value;
    const slow = smooth(0.02, 0.1, speed) * (1 - smooth(0.5, 1.2, speed));
    const ml = Math.hypot(vel[0], vel[1]) || 1;
    for (let i = 0; i < 6; i++) {
      const f = this.folds[i];
      if (!f) { fold[i].set(0, 0, 0, 0); continue; }
      // Movimiento lento cerca de un pliegue: modifica gradualmente su curvatura y orientación.
      if (mouse) {
        const dx = Math.cos(f.angle), dy = Math.sin(f.angle);
        const rx = mouse[0] - f.cx, ry = mouse[1] - f.cy;
        const d = -rx * dy + ry * dx, t = rx * dx + ry * dy;
        const prox = Math.exp(-((d / (f.width * 1.5)) ** 2)) * (Math.abs(t) < f.halfLen ? 1 : 0.3);
        const target = clamp((-vel[0] * dy + vel[1] * dx) * 3, -1, 1) * prox * slow;
        f.extra += (target - f.extra) * Math.min(1, dt * 1.2) * prox;
        f.angle += dt * 0.3 * prox * slow * ((dx * vel[1] - dy * vel[0]) / ml);
      }
      f.extra *= Math.exp(-dt * 0.15);
      const e = easeInOut((now - f.start - f.delay) / 3);
      const amp = f.amp0 * e * (1 + 0.15 * Math.sin(now * 0.21 + f.phase)) * (1 + 0.7 * f.extra) * (1 - 0.5 * hybrid);
      fold[i].set(f.cx, f.cy, f.angle, amp);
      foldB[i].set(f.width, f.halfLen, 0, 0);
    }


    for (let i = this.trees.length - 1; i >= 0; i--) {
      const t = this.trees[i];
      const age = now - t.start;
      t.forest.own.uFade.value = 1 - smooth(t.life - 6, t.life, age);
      t.forest.own.uShed.value = Math.exp(-age / 20);
    }
    for (let i = this.structures.length - 1; i >= 0; i--) {
      const s = this.structures[i];
      if (s.own.uFade && s.own.uFade.value <= 0) {
        s.dispose();
        this.structures.splice(i, 1);
        const ti = this.trees.findIndex((t) => t.forest === s);
        if (ti >= 0) this.trees.splice(ti, 1);
      }
    }
  }

  clear() {
    for (const s of this.structures) s.dispose();
    this.structures = [];
    this.trees = [];
    this.folds = [];
    this.forest = null;
    this.lastHybridStart = Infinity;
    for (const w of this.shared.uWave.value) w.set(0, 0, 0, 0);
    for (const f of this.shared.uFold.value) f.set(0, 0, 0, 0);
  }
}
