import * as THREE from 'three';
import { DIGITAL } from '../palette.js';

const I = [1, 0, 0, 0, 1, 0, 0, 0, 1];
// Bitono: parte del color original + proyección de la densidad sobre un único tono.
// Conserva la estructura del cuadro y garantiza una gama armónica.
function duotone(v, keep = 0.35) {
  const m = (v[0] + v[1] + v[2]) / 3;
  const n = v.map((x) => x / m);
  const out = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) out.push((r === c ? keep : 0) + (1 - keep) * n[r] / 3);
  return out;
}

const PALETTES = [
  { name: 'papel', M: I, paper: [0.955, 0.94, 0.905], ground: [0.025, 0.03, 0.07], night: 0, ink: DIGITAL[2].A },
  { name: 'marea', M: duotone([1.5, 0.5, 0.28], 0.45), paper: [0.955, 0.945, 0.92], ground: [0.02, 0.04, 0.06], night: 0, ink: DIGITAL[2].A },
  { name: 'nocturno', M: I, paper: [0.955, 0.94, 0.905], ground: [0.018, 0.026, 0.065], night: 1, ink: DIGITAL[0].A },
  { name: 'tinta', M: duotone([1.55, 1.25, 0.35]), paper: [0.97, 0.945, 0.885], ground: [0.03, 0.03, 0.06], night: 0, ink: DIGITAL[3].A },
  { name: 'brasas', M: duotone([0.2, 0.85, 1.6], 0.4), paper: [0.95, 0.93, 0.92], ground: [0.05, 0.022, 0.045], night: 1, ink: DIGITAL[3].A },
];

/**
 * Cuando el lienzo se llena en la fase III, un frente recorre la obra desde el
 * último gesto y la traslada a la siguiente paleta, aclarando lo anterior.
 */
export class PaletteController {
  constructor(shared) {
    this.shared = shared;
    Object.assign(shared, {
      uPalM0: { value: new THREE.Matrix3() }, uPalM1: { value: new THREE.Matrix3() },
      uPaper0: { value: new THREE.Vector3() }, uPaper1: { value: new THREE.Vector3() },
      uGround0: { value: new THREE.Vector3() }, uGround1: { value: new THREE.Vector3() },
      uNight0: { value: 0 }, uNight1: { value: 0 },
      uPalWave: { value: new THREE.Vector4(0, 0, 0, 0) },
    });
    this.dissolve = new THREE.Vector4(0, 0, 0, 0);
    this.reset();
  }

  set(slot, p) {
    const s = this.shared;
    s['uPalM' + slot].value.set(...p.M);
    s['uPaper' + slot].value.fromArray(p.paper);
    s['uGround' + slot].value.fromArray(p.ground);
    s['uNight' + slot].value = p.night;
  }

  reset() {
    this.index = 0;
    this.set(0, PALETTES[0]);
    this.set(1, PALETTES[0]);
    this.shared.uPalWave.value.set(0, 0, 0, 0);
    this.dissolve.set(0, 0, 0, 0);
    this.active = false;
    this.shifts = 0;
  }

  get current() { return PALETTES[this.index]; }
  get transitioning() { return this.active; }

  shift(origin) {
    if (this.active) return false;
    const next = (this.index + 1) % PALETTES.length;
    this.set(1, PALETTES[next]);
    this.next = next;
    this.radius = 0;
    this.origin = origin.slice();
    this.active = true;
    this.shifts++;
    return true;
  }

  update(dt, aspect) {
    if (!this.active) { this.dissolve.w = 0; return; }
    this.radius += dt * 0.32;
    this.shared.uPalWave.value.set(this.origin[0], this.origin[1], this.radius, 1);
    this.dissolve.set(this.origin[0], this.origin[1], this.radius, 0.8);
    if (this.radius > Math.hypot(aspect, 1) + 0.3) {
      this.index = this.next;
      this.set(0, PALETTES[this.index]);
      this.shared.uPalWave.value.w = 0;
      this.dissolve.w = 0;
      this.active = false;
    }
  }
}
