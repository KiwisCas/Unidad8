import { MouseInputSource } from './MouseInputSource.js';

/**
 * Normaliza cualquier fuente de entrada (mouse hoy, cuerpo mañana) en un
 * pequeño vocabulario de intenciones:
 *   pointer      posición continua del "pincel" (px de pantalla)
 *   hold:start   presión sostenida comenzada en un punto
 *   hold:end     presión liberada o rota por movimiento
 *   tap          clic breve
 *   key          r / h / m
 * Las fuentes llaman a los métodos inject*; el resto de la obra sólo escucha eventos.
 */
export class InputController {
  constructor(element) {
    this.listeners = {};
    this.samples = [];
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
  injectPointer(x, y) {
    this.pointer.x = x; this.pointer.y = y; this.pointer.inside = true;
    this.samples.push([x, y]);
    if (this.press && !this.press.broken) {
      const d = Math.hypot(x - this.press.x, y - this.press.y);
      if (d > this.HOLD_BREAK_PX) {
        this.press.broken = true;
        this.emit('hold:end', { broken: true });
      }
    }
  }

  injectLeave() { this.pointer.inside = false; }

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

  /** Posiciones acumuladas desde el último cuadro. */
  consumeSamples() {
    const s = this.samples;
    this.samples = [];
    return s;
  }
}
