import { DIGITAL, mixA } from '../palette.js';
import { clamp, smooth } from '../util/math.js';

/**
 * Fase III: interacción bidireccional entre pigmento y estructura.
 *  - Un frente de integración se expande desde el punto elegido, orientado por el gesto.
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

  /** gestures: trazos de este cuadro (ratón y cada mano). */
  update(dt, now, pointerQ, gestures) {
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

    // Canon: el trazo reaparece transformado, como una segunda voz.
    if (tr.hybrid > 0.5) {
      for (const g of gestures) this.record(g, now);
      this.emitEcho(now);
    }
  }

  get depositAmount() { return this.active ? smooth(0.1, 0.8, this.exp.transition.hybrid) : 0; }
}
