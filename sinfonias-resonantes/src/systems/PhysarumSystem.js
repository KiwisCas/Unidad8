import * as THREE from 'three';
import { FullscreenPass, rawMaterial, clearTarget } from '../gl/FullscreenPass.js';
import { agentFrag, trailFrag, depositVert, depositFrag } from '../shaders/physarum.js';

/**
 * Red de physarum en GPU. Los agentes nacen sobre el pigmento, lo usan como
 * alimento y tejen una red que conecta los trazos de la persona.
 */
export class PhysarumSystem {
  constructor(renderer, floatType, size = 256) {
    this.renderer = renderer;
    this.size = size;
    const agentOpts = {
      type: floatType, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
      depthBuffer: false, generateMipmaps: false,
    };
    this.agents = [new THREE.WebGLRenderTarget(size, size, agentOpts), new THREE.WebGLRenderTarget(size, size, agentOpts)];
    this.blank = new THREE.DataTexture(new Uint8Array(4), 1, 1);
    this.blank.needsUpdate = true;

    this.strokes = Array.from({ length: 16 }, () => new THREE.Vector4(0, 0, 0, 0));
    this.u = {
      tAgent: { value: null }, tTrail: { value: null }, tDry: { value: null }, tWet: { value: null }, tField: { value: null },
      uAspect: { value: 1 }, uDt: { value: 0.016 }, uTime: { value: 0 }, uActive: { value: 0 },
      uGrowR: { value: 0 }, uOrigin: { value: new THREE.Vector2() }, uHybrid: { value: 0 },
      uSpawnRate: { value: 0.03 }, uStrokeSteal: { value: 0 },
      uMouse: { value: new THREE.Vector4(-9, -9, 0, 0) },
      uStroke: { value: this.strokes }, uStrokeCount: { value: 0 },
      uSA: { value: 0.62 }, uRA: { value: 0.38 }, uSD: { value: 0.011 }, uSpeed: { value: 0.085 },
    };
    this.agentPass = new FullscreenPass(rawMaterial(agentFrag, this.u));
    this.trailU = { tTrail: { value: null }, uTexel: { value: new THREE.Vector2() }, uDecay: { value: 0.95 } };
    this.trailPass = new FullscreenPass(rawMaterial(trailFrag, this.trailU));

    const n = size * size;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    this.depU = { tAgent: { value: null }, uSize: { value: size }, uAspect: this.u.uAspect, uDeposit: { value: 0.35 } };
    const depMat = new THREE.RawShaderMaterial({
      glslVersion: THREE.GLSL3, vertexShader: depositVert, fragmentShader: depositFrag, uniforms: this.depU,
      depthTest: false, depthWrite: false, transparent: true,
      blending: THREE.CustomBlending, blendEquation: THREE.AddEquation,
      blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor, blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneFactor,
    });
    this.points = new THREE.Points(geo, depMat);
    this.points.frustumCulled = false;
    this.depScene = new THREE.Scene();
    this.depScene.add(this.points);
    this.depCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.trails = null;
    this.reset();
  }

  resize(aspect) {
    const w = 640, h = Math.max(160, Math.round(640 / aspect));
    this.trails?.forEach((t) => t.dispose());
    const opts = {
      type: THREE.HalfFloatType, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
      depthBuffer: false, generateMipmaps: false,
    };
    this.trails = [new THREE.WebGLRenderTarget(w, h, opts), new THREE.WebGLRenderTarget(w, h, opts)];
    this.trails.forEach((t) => clearTarget(this.renderer, t));
    this.trailU.uTexel.value.set(1 / w, 1 / h);
    this.u.uAspect.value = aspect;
  }

  reset() {
    this.agents.forEach((t) => clearTarget(this.renderer, t));
    this.trails?.forEach((t) => clearTarget(this.renderer, t));
    this.active = false;
    this.alive = 0;
  }

  get trail() { return this.trails[0].texture; }

  /** Puntos del gesto: [x, y, t, dx, dy]. Los agentes reclutados siguen esa dirección. */
  setStrokes(list) {
    const n = Math.min(16, list.length);
    for (let i = 0; i < n; i++) this.strokes[i].set(list[i][0], list[i][1], list[i][3] || 0, list[i][4] || 0);
    this.u.uStrokeCount.value = n;
  }

  /** Estallido de un cuadro: muchos agentes nacen a la vez desde esos puntos/direcciones. */
  burst(points) { this.pendingBurst = points; }

  update(dt, c) {
    if (!c.active && !this.active) return;
    this.active = c.active || this.alive > 0;
    this.alive = c.active ? 1 : Math.max(0, this.alive - dt * 0.5);
    const u = this.u;
    u.uDt.value = dt;
    u.uTime.value = c.time;
    u.uActive.value = c.active ? 1 : 0;
    u.uGrowR.value = c.growR;
    u.uOrigin.value.set(c.origin[0], c.origin[1]);
    u.uHybrid.value = c.hybrid;
    u.uSpawnRate.value = c.spawnRate;
    u.uStrokeSteal.value = c.strokeSteal;
    if (this.pendingBurst) {
      // Varias direcciones por punto: abanico radial desde cada yema.
      const pts = this.pendingBurst.slice(0, 16);
      for (let i = 0; i < pts.length; i++) this.strokes[i].set(...pts[i]);
      u.uStrokeCount.value = pts.length;
      u.uStrokeSteal.value = 0.025;
      this.pendingBurst = null;
    }
    u.uMouse.value.copy(c.mouse);
    u.tDry.value = c.dry; u.tWet.value = c.wet; u.tField.value = c.field;
    u.tTrail.value = this.trails[0].texture;
    u.tAgent.value = this.agents[0].texture;
    this.agentPass.render(this.renderer, this.agents[1]);
    this.agents.reverse();

    // Difusión + evaporación, luego depósito aditivo sobre el resultado.
    this.trailU.tTrail.value = this.trails[0].texture;
    this.trailU.uDecay.value = Math.pow(0.9, dt * 60);
    this.trailPass.render(this.renderer, this.trails[1]);
    this.depU.tAgent.value = this.agents[0].texture;
    const r = this.renderer;
    r.autoClear = false;
    r.setRenderTarget(this.trails[1]);
    r.render(this.depScene, this.depCam);
    r.autoClear = true;
    r.setRenderTarget(null);
    this.trails.reverse();
  }
}
