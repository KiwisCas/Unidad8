import { DIGITAL, PIGMENTS, mixA } from '../palette.js';
import { clamp, smooth } from '../util/math.js';

/**
 * Fase III: interacción bidireccional entre pigmento y estructura.
 *  - Un frente de integración se expande desde el punto elegido, orientado por el gesto.
 *  - Las ramas que crecen depositan pigmento (los bordes se vuelven ramificaciones).
 *  - La reacción-difusión y la red de physarum pintan pigmento complementario.
 *  - Cada trazo recibe una respuesta en canon: un eco espejado, en color armónico.
 *  - El pigmento curva el campo, el campo guía la difusión (bucle en los shaders).
 */
export class HybridSystem {
  constructor(exp) {
    this.exp = exp;
    this.reset();
  }

  reset() {
    this.active = false;
    this.origin = [0, 0];
    this.radius = 0;
    this.dir = [1, 0];
    this.stretch = 0;
    this.strokeTravel = 0;
    this.side = 1;
    this.ambientT = 0;
    this.echo = [];
    this.echoMode = 0;
  }

  /** Cambia la transformación del canon (espejo, rotación, reflejo vertical). */
  nextEchoMode() { this.echoMode = (this.echoMode + 1) % 3; }

  record(gesture, now) {
    if (!gesture || !gesture.segs || !gesture.A) return;
    for (const seg of gesture.segs) this.echo.push({ seg, A: gesture.A.slice(), t: now });
    if (this.echo.length > 400) this.echo.splice(0, this.echo.length - 400);
  }

  emitEcho(now) {
    const wc = this.exp.watercolor, aspect = this.exp.aspect;
    const delay = 1.3;
    while (this.echo.length && this.echo[0].t + delay + 2.5 < now) this.echo.shift();
    let budget = Math.min(3, wc.freeSegments - 1);
    const harmony = DIGITAL[(this.echoMode + 1) % DIGITAL.length].A;
    const T = this.echoMode === 0 ? (x, y) => [aspect - x, y]
      : this.echoMode === 1 ? (x, y) => [aspect - x, 1 - y] : (x, y) => [x, 1 - y];
    while (budget > 0 && this.echo.length && this.echo[0].t + delay <= now) {
      const { seg, A } = this.echo.shift();
      const [ax, ay, bx, by, r, w, pg] = seg;
      wc.addSegment(...T(ax, ay), ...T(bx, by), r * 0.75, w * 0.8, pg * 0.5, mixA(A, harmony, 0.45), 0.9, Math.random() * 40);
      budget--;
    }
  }

  begin(origin, now) {
    this.active = true;
    this.origin = origin.slice();
    this.radius = 0.04;
    this.start = now;
    this.exp.digital.lastHybridStart = now;
  }

  insideFront(x, y) {
    const rx = x - this.origin[0], ry = y - this.origin[1];
    const al = rx * this.dir[0] + ry * this.dir[1];
    const pe = -rx * this.dir[1] + ry * this.dir[0];
    return Math.hypot(al / (1 + this.stretch * (al > 0 ? 1 : 0)), pe) < this.radius - 0.05;
  }

  update(dt, now, pointerQ, gesture) {
    const field = this.exp.field;
    if (!this.active) { field.u.uHyb.value.w = 0; return; }
    const tr = this.exp.transition;
    const wc = this.exp.watercolor;

    // Durante la transición el gesto orienta la expansión.
    if (tr.transitioning && pointerQ) {
      const dx = pointerQ[0] - this.origin[0], dy = pointerQ[1] - this.origin[1];
      const l = Math.hypot(dx, dy);
      if (l > 0.02) {
        const k = Math.min(1, dt * 1.5);
        this.dir[0] += (dx / l - this.dir[0]) * k;
        this.dir[1] += (dy / l - this.dir[1]) * k;
        const n = Math.hypot(this.dir[0], this.dir[1]) || 1;
        this.dir[0] /= n; this.dir[1] /= n;
        this.stretch += (clamp(l * 3, 0, 1.6) - this.stretch) * k;
      }
    }
    this.radius += dt * (tr.transitioning ? 0.2 : 0.12);
    field.u.uHyb.value.set(this.origin[0], this.origin[1], this.radius, 1);
    field.u.uHybDir.value.set(this.dir[0], this.dir[1], this.stretch);

    const hyb = tr.hybrid;
    const an = this.exp.analysis;
    const aspect = this.exp.aspect;

    // Marcas híbridas: el trazo genera ramificaciones en sus bordes.
    if (gesture && gesture.A && hyb > 0.3) {
      this.strokeTravel += gesture.total;
      const sp = gesture.speed;
      if (this.strokeTravel > 0.16 && sp > 0.08 && sp < 1.8 && this.insideFront(gesture.pos[0], gesture.pos[1])) {
        this.strokeTravel = 0;
        this.side = -this.side;
        const nx = -gesture.dir[1] * this.side, ny = gesture.dir[0] * this.side;
        const root = [gesture.pos[0] + nx * 0.012, gesture.pos[1] + ny * 0.012];
        const pig = mixA(gesture.A, DIGITAL[Math.floor(Math.random() * DIGITAL.length)].A, 0.35);
        const scale = 0.8 + Math.random() * 0.5;
        this.exp.digital.spawnTree(root, [nx * 0.8 + gesture.dir[0] * 0.2, ny * 0.8 + gesture.dir[1] * 0.2], pig, now, an, aspect, scale);
        this.exp.audio.bloom();
      }
    }

    // Canon: el trazo reaparece transformado, como una segunda voz.
    if (hyb > 0.5) { this.record(gesture, now); this.emitEcho(now); }

    // Las ramas jóvenes depositan pigmento mientras crecen.
    let budget = Math.min(6, wc.freeSegments - 2);
    for (const t of this.exp.digital.trees) {
      if (budget <= 0) break;
      const age = now - t.start;
      for (const p of t.polys) {
        if (budget <= 0) break;
        for (let i = Math.max(1, p.done || 1); i < p.pts.length; i++) {
          if (p.birth[i] > age) break;
          p.done = i + 1;
          if (i % 2) continue;
          const a = p.pts[i - 1], b = p.pts[i];
          wc.addSegment(a[0], a[1], b[0], b[1], Math.max(0.003, p.width[i] * 0.9), 0.06, 0.05, p.pig, 0.9, Math.random() * 40);
          if (--budget <= 0) break;
        }
      }
    }

    // La obra sigue descubriendo: nuevas ramificaciones brotan solas de los contornos.
    this.ambientT += dt * (gesture ? 0.3 : 1);
    if (hyb > 0.8 && this.ambientT > 7 && an) {
      this.ambientT = 0;
      const zones = an.zones.filter((z) => z.boundary.length);
      if (zones.length) {
        const z = zones[Math.floor(Math.random() * zones.length)];
        const b = z.boundary[Math.floor(Math.random() * z.boundary.length)];
        const pig = mixA(z.A.map((v) => v / Math.max(0.3, (z.A[0] + z.A[1] + z.A[2]) / 3)),
          PIGMENTS[Math.floor(Math.random() * PIGMENTS.length)].A, 0.3);
        this.exp.digital.spawnTree([b[0], b[1]], [b[2], b[3]], pig, now, an, aspect, 1.1);
      }
    }
  }

  get depositAmount() { return this.active ? smooth(0.1, 0.8, this.exp.transition.hybrid) : 0; }
}
