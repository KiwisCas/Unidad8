import * as THREE from 'three';
import { canvasVert, canvasFrag } from '../shaders/canvas.js';
import { PaletteController } from '../systems/PaletteController.js';

export const WORLD_SCALE = 10; // altura del lienzo en unidades de mundo
const OVERSCAN = 0.93;         // la cámara encuadra un poco menos que el lienzo

/**
 * Cámara, iluminación, superficie del lienzo y orden de composición.
 * Mantiene el registro de uniforms compartidos entre lienzo y estructuras.
 */
export class VisualComposition {
  constructor(canvas) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setClearColor(0xe9e4d8, 1);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(30, 1, 0.1, 200);
    this.camDist = (WORLD_SCALE * OVERSCAN * 0.5) / Math.tan(THREE.MathUtils.degToRad(15));
    this.camera.position.set(0, 0, this.camDist);

    this.shared = {
      uTime: { value: 0 }, uAspect: { value: 1 }, uScale: { value: WORLD_SCALE },
      uTech: { value: 0 }, uHybrid: { value: 0 }, uAgitation: { value: 0 },
      uWave: { value: Array.from({ length: 8 }, () => new THREE.Vector4(0, 0, 0, 0)) },
      uFold: { value: Array.from({ length: 6 }, () => new THREE.Vector4(0, 0, 0, 0)) },
      uFoldB: { value: Array.from({ length: 6 }, () => new THREE.Vector4(0, 0, 0, 0)) },
      uCharge: { value: new THREE.Vector4(0, 0, 0, 0) },
      uLight: { value: new THREE.Vector3(-0.45, 0.55, 0.7).normalize() },
      tWet: { value: null }, tDry: { value: null }, tField: { value: null }, tPaper: { value: null },
      tTrail: { value: null }, uRelief: { value: 0 }, uNetGlow: { value: 0 },
    };
    // Las paletas añaden sus uniforms al registro antes de crear cualquier material.
    this.palette = new PaletteController(this.shared);
    this.canvasUniforms = { ...this.shared, uPaperTexel: { value: new THREE.Vector2() } };
    this.canvasMat = new THREE.ShaderMaterial({
      vertexShader: canvasVert, fragmentShader: canvasFrag, uniforms: this.canvasUniforms,
    });
    this.canvasMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.canvasMat);
    this.canvasMesh.frustumCulled = false;
    this.canvasMesh.renderOrder = 0;
    this.scene.add(this.canvasMesh);

    this.shadowGroup = new THREE.Group();
    this.structGroup = new THREE.Group();
    this.scene.add(this.shadowGroup, this.structGroup);

    // Vista cenital para rasterizar las huellas de pigmento de las estructuras.
    this.footScene = new THREE.Scene();
    this.footCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -50, 50);

    this.raycaster = new THREE.Raycaster();
    this.plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    this.ndc = new THREE.Vector2();
    this.hit = new THREE.Vector3();
    this.drift = new THREE.Vector2();
    this.lookTarget = new THREE.Vector3();
  }

  resize(w, h, pixelRatio) {
    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.setSize(w, h, false);
    this.width = w; this.height = h;
    this.aspect = w / h;
    this.shared.uAspect.value = this.aspect;
    this.camera.aspect = this.aspect;
    this.camera.updateProjectionMatrix();
    this.canvasMesh.geometry.dispose();
    this.canvasMesh.geometry = new THREE.PlaneGeometry(this.aspect * WORLD_SCALE, WORLD_SCALE, 300, 180);
    const hw = (this.aspect * WORLD_SCALE) / 2, hh = WORLD_SCALE / 2;
    Object.assign(this.footCamera, { left: -hw, right: hw, top: hh, bottom: -hh });
    this.footCamera.position.set(0, 0, 10);
    this.footCamera.updateProjectionMatrix();
    return this.aspect;
  }

  setPaper(tex, w, h) {
    this.shared.tPaper.value = tex;
    this.canvasUniforms.uPaperTexel.value.set(1 / w, 1 / h);
  }

  /** Píxel de pantalla -> coordenadas de lienzo (x en [0, aspect], y en [0, 1]). */
  screenToQ(px, py, out = [0, 0]) {
    this.ndc.set((px / this.width) * 2 - 1, -(py / this.height) * 2 + 1);
    this.raycaster.setFromCamera(this.ndc, this.camera);
    if (!this.raycaster.ray.intersectPlane(this.plane, this.hit)) return null;
    out[0] = this.hit.x / WORLD_SCALE + this.aspect / 2;
    out[1] = this.hit.y / WORLD_SCALE + 0.5;
    return out;
  }

  /** Paralaje suave sólo cuando existe profundidad (fases II y III). */
  updateCamera(dt, time, depth, pointerNdc) {
    // La vista se desplaza ~0.6× el movimiento de cámara: nunca más que el margen de sobrebarrido.
    const margin = (1 - OVERSCAN) * 0.5 * WORLD_SCALE * 1.4;
    const mx = margin * Math.min(1, this.aspect), my = margin * Math.min(1, 1 / this.aspect);
    const tx = THREE.MathUtils.clamp((Math.sin(time * 0.071) * 0.35 + (pointerNdc ? pointerNdc[0] * 0.25 : 0)) * depth, -mx, mx);
    const ty = THREE.MathUtils.clamp((Math.sin(time * 0.053 + 1.3) * 0.25 + (pointerNdc ? pointerNdc[1] * 0.18 : 0)) * depth, -my, my);
    const k = Math.min(1, dt * 0.8);
    this.drift.x += (tx - this.drift.x) * k;
    this.drift.y += (ty - this.drift.y) * k;
    this.camera.position.set(this.drift.x, this.drift.y, this.camDist);
    this.lookTarget.set(this.drift.x * 0.6, this.drift.y * 0.6, 0);
    this.camera.lookAt(this.lookTarget);
  }

  renderFootprint(target) {
    const r = this.renderer;
    r.setRenderTarget(target);
    r.setClearColor(0x000000, 0);
    r.clear(true, false, false);
    r.render(this.footScene, this.footCamera);
    r.setClearColor(0xe9e4d8, 1);
    r.setRenderTarget(null);
  }

  render() {
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.scene, this.camera);
  }
}
