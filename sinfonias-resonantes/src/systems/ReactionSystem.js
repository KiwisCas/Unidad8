import * as THREE from 'three';
import { FullscreenPass, rawMaterial, clearTarget } from '../gl/FullscreenPass.js';
import { reactionFrag } from '../shaders/reaction.js';

/**
 * Reacción-difusión (Gray-Scott) que nace en las manchas y se extiende por el papel
 * en vetas orientadas por el flujo; cada zona envejece y se renueva.
 */
export class ReactionSystem {
  constructor(renderer, floatType) {
    this.renderer = renderer;
    this.type = floatType;
    this.strokes = Array.from({ length: 16 }, () => new THREE.Vector4(0, 0, 0, 0));
    this.u = {
      tState: { value: null }, tDry: { value: null }, tWet: { value: null }, tField: { value: null },
      uTexel: { value: new THREE.Vector2() }, uAspect: { value: 1 }, uTime: { value: 0 },
      uAdvect: { value: 0 }, uStepDt: { value: 0.45 }, uIterSec: { value: 0 },
      uActive: { value: 0 }, uGrowR: { value: 0 },
      uOrigin: { value: new THREE.Vector2() }, uSeedRate: { value: 0 },
      uMouse: { value: new THREE.Vector4(-9, -9, 0, 0) },
      uStroke: { value: this.strokes }, uStrokeCount: { value: 0 },
    };
    this.pass = new FullscreenPass(rawMaterial(reactionFrag, this.u));
    this.rts = null;
    this.alive = 0;
  }

  resize(aspect) {
    const w = 720, h = Math.max(200, Math.round(720 / aspect));
    this.rts?.forEach((t) => t.dispose());
    const opts = {
      type: this.type, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
      depthBuffer: false, generateMipmaps: false,
    };
    this.rts = [new THREE.WebGLRenderTarget(w, h, opts), new THREE.WebGLRenderTarget(w, h, opts)];
    this.reset();
    this.u.uTexel.value.set(1 / w, 1 / h);
    this.u.uAspect.value = aspect;
    this.texel = [1 / w, 1 / h];
  }

  reset() {
    this.rts?.forEach((t) => clearTarget(this.renderer, t));
    this.alive = 0;
  }

  get texture() { return this.rts[0].texture; }

  setStrokes(list) {
    const n = Math.min(16, list.length);
    for (let i = 0; i < n; i++) this.strokes[i].set(list[i][0], list[i][1], 0, 0);
    this.u.uStrokeCount.value = n;
  }

  update(dt, c, iterations) {
    // Tras apagarse sigue unos segundos para que el patrón se extinga suavemente.
    this.alive = c.active ? 4 : this.alive - dt;
    if (this.alive <= 0) return;
    const u = this.u;
    u.uTime.value = c.time;
    u.uActive.value = c.active ? 1 : 0;
    u.uGrowR.value = c.growR;
    u.uOrigin.value.set(c.origin[0], c.origin[1]);
    u.uSeedRate.value = c.seedRate;
    u.uMouse.value.copy(c.mouse);
    u.uAdvect.value = (dt / iterations) * 0.8;
    u.uIterSec.value = dt / iterations;
    u.tDry.value = c.dry; u.tWet.value = c.wet; u.tField.value = c.field;
    for (let i = 0; i < iterations; i++) {
      u.tState.value = this.rts[0].texture;
      this.pass.render(this.renderer, this.rts[1]);
      this.rts.reverse();
      // Las semillas del trazo y del cursor se aplican sólo en la primera iteración.
      if (i === 0) { u.uStrokeCount.value = 0; u.uMouse.value.w = 0; }
    }
    this.renderer.setRenderTarget(null);
  }
}
