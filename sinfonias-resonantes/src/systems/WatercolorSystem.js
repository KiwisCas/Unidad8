import * as THREE from 'three';
import { FullscreenPass, rawMaterial, clearTarget } from '../gl/FullscreenPass.js';
import { paperFrag, simFrag, copyFrag, MAX_SEG } from '../shaders/passes.js';

/**
 * Depósito, difusión, mezcla y secado del pigmento en GPU.
 * Estado en dos texturas por búfer (MRT): agua+pigmento suspendido / pigmento seco+humedad.
 */
export class WatercolorSystem {
  constructor(renderer, floatType) {
    this.renderer = renderer;
    this.type = floatType;
    this.segs = Array.from({ length: MAX_SEG }, () => new THREE.Vector4(0, 0, 0, 0));
    this.segP = Array.from({ length: MAX_SEG }, () => new THREE.Vector4(0, 0, 0, 0));
    this.segC = Array.from({ length: MAX_SEG }, () => new THREE.Vector4(0, 0, 0, 0));
    this.segCount = 0;
    this.drop = new THREE.Vector4(0, 0, 0, 0);

    this.blank = new THREE.DataTexture(new Uint8Array(4), 1, 1);
    this.blank.needsUpdate = true;

    this.u = {
      tWet: { value: null }, tDry: { value: null }, tField: { value: this.blank },
      tPaper: { value: null }, tDeposit: { value: this.blank },
      uTexel: { value: new THREE.Vector2() }, uAspect: { value: 1 }, uDt: { value: 0.016 },
      uAdvect: { value: 0 }, uAniso: { value: 0 }, uDepositAmt: { value: 0 },
      uSegCount: { value: 0 }, uSeg: { value: this.segs }, uSegP: { value: this.segP },
      uSegC: { value: this.segC }, uDrop: { value: this.drop },
      tTrail: { value: this.blank }, uDryAdvect: { value: 0 }, uNetDeposit: { value: 0 },
      uNetA: { value: new THREE.Vector3(1, 1, 1) }, uDissolve: { value: new THREE.Vector4(0, 0, 0, 0) },
    };
    this.simPass = new FullscreenPass(rawMaterial(simFrag, this.u));
    this.paperU = { uAspect: { value: 1 } };
    this.paperPass = new FullscreenPass(rawMaterial(paperFrag, this.paperU));
    this.copyU = { tWet: { value: null }, tDry: { value: null } };
    this.copyPass = new FullscreenPass(rawMaterial(copyFrag, this.copyU));
    this.read = null;
    this.write = null;
    this.paperRT = null;
  }

  makeRT(w, h) {
    return new THREE.WebGLRenderTarget(w, h, {
      count: 2, type: this.type, format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
      depthBuffer: false, stencilBuffer: false, generateMipmaps: false,
    });
  }

  /** Cambia la resolución conservando la pintura (memoria del lienzo). */
  resize(aspect, simW, simH, paperW) {
    const a = this.makeRT(simW, simH);
    const b = this.makeRT(simW, simH);
    if (this.read) {
      this.copyU.tWet.value = this.read.textures[0];
      this.copyU.tDry.value = this.read.textures[1];
      this.copyPass.render(this.renderer, a);
      this.read.dispose();
      this.write.dispose();
    } else {
      clearTarget(this.renderer, a);
    }
    clearTarget(this.renderer, b);
    this.read = a;
    this.write = b;
    this.u.uTexel.value.set(1 / simW, 1 / simH);
    this.u.uAspect.value = aspect;
    this.width = simW;
    this.height = simH;

    if (this.paperRT) this.paperRT.dispose();
    const pw = Math.round(paperW), ph = Math.round(paperW / aspect);
    this.paperRT = new THREE.WebGLRenderTarget(pw, ph, {
      type: THREE.UnsignedByteType, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
      depthBuffer: false, generateMipmaps: false,
    });
    this.paperU.uAspect.value = aspect;
    this.paperPass.render(this.renderer, this.paperRT);
    this.u.tPaper.value = this.paperRT.texture;
    this.renderer.setRenderTarget(null);
  }

  get wet() { return this.read.textures[0]; }
  get dry() { return this.read.textures[1]; }
  get paper() { return this.paperRT.texture; }

  /** Segmento de pincel en unidades de lienzo. A = absorbancia del pigmento. */
  addSegment(ax, ay, bx, by, radius, water, pigment, A, irregular, seed) {
    if (this.segCount >= MAX_SEG) return false;
    const i = this.segCount++;
    this.segs[i].set(ax, ay, bx, by);
    this.segP[i].set(radius, water, pigment, seed);
    this.segC[i].set(A[0], A[1], A[2], irregular);
    return true;
  }

  get freeSegments() { return MAX_SEG - this.segCount; }

  addDrop(x, y, radius, amount) { this.drop.set(x, y, radius, amount); }

  step(dt, fieldTex, depositTex, opts, substeps) {
    const u = this.u;
    u.uDt.value = dt / substeps;
    u.tField.value = fieldTex || this.blank;
    u.tDeposit.value = depositTex || this.blank;
    u.uAdvect.value = opts.advect;
    u.uAniso.value = opts.aniso;
    u.uDryAdvect.value = opts.dryAdvect || 0;
    u.uNetDeposit.value = opts.netDeposit || 0;
    u.tTrail.value = opts.trail || this.blank;
    if (opts.netA) u.uNetA.value.fromArray(opts.netA);
    if (opts.dissolve) u.uDissolve.value.copy(opts.dissolve); else u.uDissolve.value.w = 0;
    for (let i = 0; i < substeps; i++) {
      u.uSegCount.value = i === 0 ? this.segCount : 0;
      u.uDepositAmt.value = i === 0 ? opts.depositAmt : 0;
      if (i > 0) this.drop.w = 0;
      u.tWet.value = this.read.textures[0];
      u.tDry.value = this.read.textures[1];
      this.simPass.render(this.renderer, this.write);
      const t = this.read; this.read = this.write; this.write = t;
    }
    this.segCount = 0;
    this.drop.w = 0;
  }

  clear() {
    clearTarget(this.renderer, this.read);
    clearTarget(this.renderer, this.write);
    this.segCount = 0;
    this.drop.w = 0;
  }

  dispose() {
    this.read?.dispose(); this.write?.dispose(); this.paperRT?.dispose();
    this.simPass.dispose(); this.paperPass.dispose(); this.copyPass.dispose();
    this.blank.dispose();
  }
}
