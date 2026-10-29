import * as THREE from 'three';

export const PASS_VERT = /* glsl */ `
precision highp float;
in vec3 position;
in vec2 uv;
out vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const quad = new THREE.PlaneGeometry(2, 2);

export function rawMaterial(fragmentShader, uniforms) {
  return new THREE.RawShaderMaterial({
    glslVersion: THREE.GLSL3,
    vertexShader: PASS_VERT,
    fragmentShader,
    uniforms,
    depthTest: false,
    depthWrite: false,
  });
}

/** Pasada de pantalla completa reutilizable (sin crear objetos por cuadro). */
export class FullscreenPass {
  constructor(material) {
    this.material = material;
    this.mesh = new THREE.Mesh(quad, material);
    this.mesh.frustumCulled = false;
    this.scene = new THREE.Scene();
    this.scene.add(this.mesh);
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  }
  render(renderer, target) {
    renderer.setRenderTarget(target);
    renderer.render(this.scene, this.camera);
  }
  dispose() { this.material.dispose(); }
}

export function clearTarget(renderer, target) {
  renderer.setRenderTarget(target);
  renderer.setClearColor(0x000000, 0);
  renderer.clear(true, false, false);
}
