import * as THREE from 'three';
import { FullscreenPass, rawMaterial, clearTarget } from '../gl/FullscreenPass.js';
import { swarmUpdateFrag, swarmVert, swarmFrag } from '../shaders/swarm.js';

/**
 * Enjambre 3D de escamas de pigmento (GPGPU). Cada agente nace sobre una mancha,
 * conserva su color y navega con steering behaviours; en la fase III se posa y pinta.
 */
export class SwarmSystem {
  constructor(renderer, composition, floatType, size = 128) {
    this.renderer = renderer;
    this.size = size;
    const opts = {
      count: 3, type: floatType, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
      depthBuffer: false, generateMipmaps: false,
    };
    this.state = [new THREE.WebGLRenderTarget(size, size, opts), new THREE.WebGLRenderTarget(size, size, opts)];
    this.strokes = Array.from({ length: 16 }, () => new THREE.Vector4(0, 0, 0, 0));
    this.u = {
      tPos: { value: null }, tVel: { value: null }, tCol: { value: null },
      tDry: { value: null }, tWet: { value: null }, tField: { value: null },
      uAspect: { value: 1 }, uDt: { value: 0.016 }, uTime: { value: 0 }, uActive: { value: 0 },
      uGrowR: { value: 0 }, uOrigin: { value: new THREE.Vector2() }, uHybrid: { value: 0 },
      uSpawnRate: { value: 0.01 }, uStrokeSpawn: { value: 0 },
      uMouse: { value: new THREE.Vector4(-9, -9, 0, 0) },
      uStroke: { value: this.strokes }, uStrokeCount: { value: 0 },
    };
    this.pass = new FullscreenPass(rawMaterial(swarmUpdateFrag, this.u));

    // Geometría instanciada: un cuadrilátero por agente.
    const quad = new THREE.PlaneGeometry(1, 1);
    const geo = new THREE.InstancedBufferGeometry();
    geo.index = quad.index;
    geo.setAttribute('position', quad.getAttribute('position'));
    const n = size * size;
    const ref = new Float32Array(n * 2);
    for (let i = 0; i < n; i++) {
      ref[i * 2] = ((i % size) + 0.5) / size;
      ref[i * 2 + 1] = (Math.floor(i / size) + 0.5) / size;
    }
    geo.setAttribute('aRef', new THREE.InstancedBufferAttribute(ref, 2));
    geo.instanceCount = n;
    this.geo = geo;

    this.ru = {
      ...composition.shared,
      tPos: { value: null }, tVel: { value: null }, tCol: { value: null },
    };
    const base = { vertexShader: swarmVert, fragmentShader: swarmFrag, uniforms: this.ru, transparent: true, side: THREE.DoubleSide, depthWrite: false };
    this.mesh = new THREE.Mesh(geo, new THREE.ShaderMaterial({ ...base, defines: { MODE: 0 } }));
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 3;
    this.foot = new THREE.Mesh(geo, new THREE.ShaderMaterial({
      ...base, defines: { MODE: 2 }, depthTest: false,
      blending: THREE.CustomBlending, blendEquation: THREE.AddEquation,
      blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor, blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneFactor,
    }));
    this.foot.frustumCulled = false;
    composition.structGroup.add(this.mesh);
    composition.footScene.add(this.foot);
    this.mesh.visible = this.foot.visible = false;
    this.reset();
  }

  reset() {
    this.state.forEach((t) => clearTarget(this.renderer, t));
    this.active = false;
    this.linger = 0;
    this.mesh.visible = this.foot.visible = false;
  }

  setStrokes(list) {
    const n = Math.min(16, list.length);
    for (let i = 0; i < n; i++) this.strokes[i].set(list[i][0], list[i][1], 0, 0);
    this.u.uStrokeCount.value = n;
  }

  /** Reduce los agentes dibujados en calidades bajas. */
  setDensity(fraction) { this.geo.instanceCount = Math.floor(this.size * this.size * fraction); }

  update(dt, c) {
    if (!c.active && this.linger <= 0) return;
    this.linger = c.active ? 2 : this.linger - dt;
    const u = this.u;
    u.uDt.value = dt;
    u.uTime.value = c.time;
    u.uActive.value = c.active ? 1 : 0;
    u.uGrowR.value = c.growR;
    u.uOrigin.value.set(c.origin[0], c.origin[1]);
    u.uHybrid.value = c.hybrid;
    u.uSpawnRate.value = c.spawnRate;
    u.uStrokeSpawn.value = c.strokeSpawn;
    u.uMouse.value.copy(c.mouse);
    u.tDry.value = c.dry; u.tWet.value = c.wet; u.tField.value = c.field;
    const [read, write] = this.state;
    u.tPos.value = read.textures[0]; u.tVel.value = read.textures[1]; u.tCol.value = read.textures[2];
    this.pass.render(this.renderer, write);
    this.state.reverse();
    const cur = this.state[0];
    this.ru.tPos.value = cur.textures[0]; this.ru.tVel.value = cur.textures[1]; this.ru.tCol.value = cur.textures[2];
    this.mesh.visible = this.foot.visible = true;
  }
}
