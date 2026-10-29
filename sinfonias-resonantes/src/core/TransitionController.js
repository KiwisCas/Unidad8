import { clamp, easeInOut } from '../util/math.js';

export const HOLD_TIME = 1.1;       // segundos de presión sostenida para cruzar el umbral
const RUPTURE_DURATION = 7;
const ENCOUNTER_DURATION = 10;

/**
 * Narrativa: fase actual, carga del gesto de umbral y progreso de la transición.
 * No sabe nada del mouse: recibe intenciones (beginHold / endHold) desde el InputController.
 */
export class TransitionController {
  constructor() {
    this.listeners = {};
    this.reset();
  }

  on(evt, fn) { (this.listeners[evt] ||= []).push(fn); }
  emit(evt, ...a) { (this.listeners[evt] || []).forEach((fn) => fn(...a)); }

  reset() {
    this.phase = 1;
    this.charge = 0;
    this.holding = false;
    this.holdPos = [0, 0];
    this.rate = 1;
    this.trans = null;
    this.tech = 0;
    this.hybrid = 0;
  }

  get transitioning() { return !!this.trans; }

  /** densityAtPos permite exigir una zona libre para el encuentro (fase II). */
  beginHold(pos, densityAtPos = 0) {
    if (this.trans || this.phase === 3) return false;
    this.holding = true;
    this.holdPos = pos.slice();
    this.rate = this.phase === 2 ? clamp(1.25 - densityAtPos * 1.4, 0.35, 1) : 1;
    return true;
  }

  moveHold(pos) { if (this.holding) this.holdPos = pos.slice(); }
  endHold() { this.holding = false; }

  update(dt, now) {
    if (this.holding && !this.trans) {
      this.charge += (dt / HOLD_TIME) * this.rate;
      if (this.charge >= 1) {
        this.charge = 1;
        this.holding = false;
        const to = this.phase + 1;
        this.trans = { to, start: now, duration: to === 2 ? RUPTURE_DURATION : ENCOUNTER_DURATION, origin: this.holdPos.slice() };
        this.phase = to;
        this.emit('trigger', to, this.holdPos.slice(), now);
      }
    } else {
      // Si se suelta antes del umbral, la tensión se disipa sin cambiar de fase.
      this.charge = Math.max(0, this.charge - dt * (this.trans ? 0.6 : 1.4));
    }

    if (this.trans) {
      const p = clamp((now - this.trans.start) / this.trans.duration, 0, 1);
      if (this.trans.to === 2) this.tech = easeInOut(p);
      else this.hybrid = easeInOut(clamp(p * 1.6, 0, 1));
      if (p >= 1) {
        this.emit('complete', this.trans.to, now);
        this.trans = null;
      }
    }
    this.progress = this.trans ? clamp((now - this.trans.start) / this.trans.duration, 0, 1) : 1;
  }
}
