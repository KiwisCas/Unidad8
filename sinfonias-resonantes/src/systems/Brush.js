import { PIGMENTS, DIGITAL, mixA } from '../palette.js';
import { lerp, smooth, noise1 } from '../util/math.js';

/**
 * Traduce la trayectoria del cursor en depósitos materiales:
 * lento = trazo concentrado; rápido = trazo ancho, aguado y disperso;
 * giro brusco = acumulación; repetir = veladura sobre lo anterior.
 */
export class Brush {
  constructor() {
    this.pi = Math.floor(Math.random() * PIGMENTS.length);
    this.cur = PIGMENTS[this.pi].A.slice();
    this.target = this.cur.slice();
    this.tmp = [0, 0, 0];
    this.digitalIdx = 0;
    this.last = null;
    this.lastDir = null;
    this.speed = 0;
    this.idle = 10;
    this.travel = 0;
    this.t = 0;
    this.seed = Math.random() * 100;
    this.side = 1;
  }

  reset() { this.last = null; this.lastDir = null; this.idle = 10; this.speed = 0; }

  newStroke(hybrid) {
    const n = PIGMENTS.length;
    const jump = (Math.random() < 0.6 ? 1 : 2) * (Math.random() < 0.35 ? -1 : 1);
    this.pi = (this.pi + jump + n) % n;
    mixA(this.cur, PIGMENTS[this.pi].A, 0.9, this.cur);
    this.target = PIGMENTS[this.pi].A.slice();
    if (hybrid > 0.3) this.digitalIdx = (this.digitalIdx + 1) % DIGITAL.length;
    this.seed = Math.random() * 100;
  }

  /**
   * @param pts  posiciones (unidades de lienzo) recibidas en este cuadro
   * @param opts { amount, hybrid } amount = cuánto pigmento acepta el lienzo en esta fase
   * @returns información del gesto o null si el cursor no se movió
   */
  update(dt, pts, opts, wc) {
    this.t += dt;
    if (!pts.length) { this.idle += dt; this.speed *= Math.exp(-dt * 8); return null; }
    if (!this.last) { this.last = pts[pts.length - 1].slice(); return null; }

    // Diezmado: como mucho 4 tramos por cuadro.
    const path = [this.last];
    const step = Math.max(1, Math.ceil(pts.length / 4));
    for (let i = step - 1; i < pts.length; i += step) path.push(pts[i]);
    if (path[path.length - 1] !== pts[pts.length - 1]) path.push(pts[pts.length - 1]);

    let total = 0;
    for (let i = 1; i < path.length; i++) total += Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]);
    const inst = total / Math.max(dt, 1e-3);
    this.speed += (inst - this.speed) * Math.min(1, dt * 10);
    const a0 = path[0], b0 = path[path.length - 1];
    this.last = b0.slice();
    if (total < 1e-5) { this.idle += dt; return null; }

    if (this.idle > 0.7) this.newStroke(opts.hybrid);
    this.idle = 0;
    const dir = [(b0[0] - a0[0]) / total, (b0[1] - a0[1]) / total];
    let turn = 0;
    if (this.lastDir) {
      const c = this.lastDir[0] * dir[1] - this.lastDir[1] * dir[0];
      const d = this.lastDir[0] * dir[0] + this.lastDir[1] * dir[1];
      turn = Math.atan2(c, d);
    }
    this.lastDir = dir;

    // Deriva cromática a lo largo del trazo.
    this.travel += total;
    if (this.travel > 0.9) {
      this.travel = 0;
      const n = PIGMENTS.length;
      this.target = PIGMENTS[(this.pi + (Math.random() < 0.5 ? 1 : n - 1)) % n].A.slice();
    }
    mixA(this.cur, this.target, Math.min(1, dt * 0.5), this.cur);

    const info = { pos: b0, dir, speed: this.speed, turn, total };
    const amount = opts.amount;
    if (amount <= 0.002) return info;

    let A = this.cur;
    if (opts.hybrid > 0) {
      const osc = 0.5 + 0.5 * Math.sin(this.t * 0.7 + b0[0] * 6);
      A = mixA(this.cur, DIGITAL[this.digitalIdx].A, opts.hybrid * (0.25 + 0.45 * osc), this.tmp);
    }
    info.A = A;

    const s = smooth(0.06, 1.5, this.speed);
    const dtScale = Math.min(dt * 60, 2.5);
    // Pinza (manos): trazo fino y más cargado de pigmento.
    const fine = opts.fine ? 0.35 : 1;
    const r = lerp(0.0075, 0.03, s) * (0.85 + 0.3 * noise1(this.t * 1.7 + this.seed)) * fine;
    const water = lerp(0.2, 0.55, s) * dtScale;
    const pig = lerp(0.3, 0.11, s) * amount * dtScale * (opts.fine ? 1.5 : 1);
    const irr = lerp(0.35, 1.0, s);

    info.segs = [];
    for (let i = 1; i < path.length; i++) {
      const a = path[i - 1], b = path[i];
      const share = Math.hypot(b[0] - a[0], b[1] - a[1]) / total;
      if (share <= 0) continue;
      const seg = [a[0], a[1], b[0], b[1], r, water * Math.max(share, 0.35), pig * Math.max(share, 0.35)];
      wc.addSegment(...seg, A, irr, this.seed + i * 0.37);
      info.segs.push(seg);
    }

    // Cambio brusco de dirección: el gesto deja una acumulación.
    if (Math.abs(turn) > 0.75 && this.speed > 0.1) {
      wc.addSegment(a0[0], a0[1], a0[0] + dir[0] * r * 0.4, a0[1] + dir[1] * r * 0.4,
        r * 1.35, water * 0.7, pig * 1.9, A, 0.8, this.seed + 3.1);
      info.accent = true;
    }

    // Velocidad alta: salpicaduras satélite separadas del trazo principal.
    if (s > 0.45 && Math.random() < 0.55) {
      const count = s > 0.8 ? 2 : 1;
      for (let k = 0; k < count; k++) {
        const t = Math.random();
        this.side = -this.side;
        const off = r * (1.5 + Math.random() * 2.4) * this.side;
        const px = lerp(a0[0], b0[0], t) - dir[1] * off;
        const py = lerp(a0[1], b0[1], t) + dir[0] * off;
        wc.addSegment(px, py, px + dir[0] * r * 0.7, py + dir[1] * r * 0.7,
          r * (0.25 + Math.random() * 0.25), 0.5 * dtScale, pig * 0.8, A, 1.0, Math.random() * 50);
      }
    }
    return info;
  }
}
