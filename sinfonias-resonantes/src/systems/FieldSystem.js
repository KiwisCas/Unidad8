import * as THREE from 'three';
import { FullscreenPass, rawMaterial, clearTarget } from '../gl/FullscreenPass.js';
import { fieldFrag } from '../shaders/passes.js';

/**
 * Campo vectorial compartido: lo deforman el gesto, los vórtices y (en la fase III)
 * el propio pigmento. Guía la difusión, curva las ramas, arrastra los patrones y marmoliza el cuadro.
 */
export class FieldSystem {
  constructor(renderer, floatType) {
    this.renderer = renderer;
    this.type = floatType;
    this.vortices = Array.from({ length: 8 }, () => new THREE.Vector4(0, 0, 0, 0));
    this.vortexCount = 0;
    this.regions = Array.from({ length: 16 }, () => new THREE.Vector4(0, 0, 0, 0));
    this.u = {
      tField: { value: null }, tDry: { value: null }, tWet: { value: null },
      uTexel: { value: new THREE.Vector2() }, uAspect: { value: 1 }, uDt: { value: 0.016 },
      uTime: { value: 0 }, uTech: { value: 0 }, uHybrid: { value: 0 },
      uMouse: { value: new THREE.Vector4(0, 0, 0, 0) }, uMouseGain: { value: 0 },
      uVortex: { value: this.vortices }, uVortexCount: { value: 0 },
      uCharge: { value: new THREE.Vector4(0, 0, 0, 0) },
      uRegions: { value: this.regions }, uRegionCount: { value: 0 },
      uHyb: { value: new THREE.Vector4(0, 0, 0, 0) }, uHybDir: { value: new THREE.Vector3(1, 0, 0) },
    };
    this.pass = new FullscreenPass(rawMaterial(fieldFrag, this.u));
  }

  resize(aspect) {
    const w = 192, h = Math.max(48, Math.round(192 / aspect));
    this.read?.dispose(); this.write?.dispose();
    const opts = {
      type: this.type, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
      depthBuffer: false, generateMipmaps: false,
    };
    this.read = new THREE.WebGLRenderTarget(w, h, opts);
    this.write = new THREE.WebGLRenderTarget(w, h, opts);
    this.clear();
    this.u.uTexel.value.set(1 / w, 1 / h);
    this.u.uAspect.value = aspect;
  }

  get texture() { return this.read.texture; }

  addVortex(x, y, strength, radius) {
    if (this.vortexCount >= 8) return;
    this.vortices[this.vortexCount++].set(x, y, strength, radius);
  }

  setRegions(list) {
    const n = Math.min(16, list.length);
    for (let i = 0; i < n; i++) this.regions[i].set(list[i].x, list[i].y, list[i].r, list[i].p);
    this.u.uRegionCount.value = n;
  }

  step(dt, wet, dry) {
    const u = this.u;
    u.uDt.value = dt;
    u.tField.value = this.read.texture;
    u.tWet.value = wet;
    u.tDry.value = dry;
    u.uVortexCount.value = this.vortexCount;
    this.pass.render(this.renderer, this.write);
    const t = this.read; this.read = this.write; this.write = t;
    this.vortexCount = 0;
  }

  clear() {
    clearTarget(this.renderer, this.read);
    clearTarget(this.renderer, this.write);
    this.u.uRegionCount.value = 0;
    this.u.uHyb.value.set(0, 0, 0, 0);
  }
}
