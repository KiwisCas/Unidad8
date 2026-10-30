import { MouseInputSource } from './MouseInputSource.js';

/**
 * Normaliza cualquier fuente de entrada (mouse hoy, cuerpo mañana) en un
 * pequeño vocabulario de intenciones:
 *   streams      trazos independientes por fuente: 'mouse' y una por mano (dos manos pintan a la vez)
 *   pointer      posición del cursor visible (px de pantalla)
 *   hold:start   presión sostenida comenzada en un punto
 *   hold:end     presión liberada o rota por movimiento
 *   tap          clic breve
 *   key          r / h / m / c / f
 *   gesture      gestos de mano (bloom, twist, pinch, fist)
 *   pose         pose de dos manos ('apart' | 'together' | null)
 * Las fuentes llaman a los métodos inject*; el resto de la obra sólo escucha eventos.
 */
export class InputController {
  constructor(element) {
    this.listeners = {};
    this.streams = new Map();
    this.pointer = { x: 0, y: 0, inside: false, down: false };
    this.press = null;
    this.HOLD_BREAK_PX = 14;
    this.TAP_MAX_S = 0.25;
    this.sources = [new MouseInputSource(element, this)];
  }

  on(evt, fn) { (this.listeners[evt] ||= []).push(fn); }
  emit(evt, ...a) { (this.listeners[evt] || []).forEach((fn) => fn(...a)); }

  addSource(source) { this.sources.push(source); }

  // --- API para las fuentes ------------------------------------------------
  stream(id) {
    let s = this.streams.get(id);
    if (!s) { s = { id, pts: [], fine: false, down: false, brk: false }; this.streams.set(id, s); }
    return s;
  }

  injectPointer(x, y) {
    this.pointer.x = x; this.pointer.y = y; this.pointer.inside = true;
    this.stream('mouse').pts.push([x, y]);
    if (this.press && !this.press.broken) {
      const d = Math.hypot(x - this.press.x, y - this.press.y);
      if (d > this.HOLD_BREAK_PX) {
        this.press.broken = true;
        this.emit('hold:end', { broken: true });
      }
    }
  }

  injectLeave() { this.pointer.inside = false; }

  /**
   * Trazo de una fuente sin botón (cada mano): sólo deja marca con el "lápiz" abajo.
   * Al bajarlo de nuevo se corta el trazo anterior para no unir dos gestos con una línea.
   */
  injectStroke(id, x, y, penDown, fine) {
    const s = this.stream(id);
    if (penDown) {
      if (!s.down) s.brk = true;
      s.pts.push([x, y]);
      s.fine = fine;
    }
    s.down = penDown;
  }

  endStroke(id) { this.streams.delete(id); }

  /** Cursor visible (manos): no deja marca por sí mismo. */
  setPointer(x, y, inside) {
    if (inside) { this.pointer.x = x; this.pointer.y = y; }
    this.pointer.inside = inside;
  }

  injectDown(x, y) {
    this.pointer.down = true;
    this.press = { x, y, t: performance.now(), broken: false };
    this.emit('hold:start', { x, y });
  }

  injectUp(x, y) {
    this.pointer.down = false;
    const p = this.press;
    this.press = null;
    if (!p) return;
    if (!p.broken) this.emit('hold:end', { broken: false });
    const dur = (performance.now() - p.t) / 1000;
    if (!p.broken && dur < this.TAP_MAX_S) this.emit('tap', { x, y });
  }

  injectKey(key) { this.emit('key', key); }

  /** Trazos acumulados desde el último cuadro, uno por fuente. */
  consumeStreams(out = []) {
    out.length = 0;
    for (const s of this.streams.values()) {
      out.push({ id: s.id, pts: s.pts, fine: s.fine, brk: s.brk });
      s.pts = [];
      s.brk = false;
    }
    return out;
  }
}
