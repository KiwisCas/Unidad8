import * as THREE from 'three';

/**
 * Una estructura digital = una geometría dibujada en tres modos que comparten
 * uniforms: principal (escena), sombra (sobre el lienzo) y huella (pigmento, fase III).
 */
export class Structure {
  constructor(geometry, vert, frag, uniforms, { renderOrder = 2, depthWrite = false } = {}) {
    const base = { vertexShader: vert, fragmentShader: frag, uniforms, transparent: true, side: THREE.DoubleSide };
    this.materials = [
      new THREE.ShaderMaterial({ ...base, defines: { MODE: 0 }, depthWrite }),
      new THREE.ShaderMaterial({ ...base, defines: { MODE: 1 }, depthWrite: false, depthTest: false }),
      new THREE.ShaderMaterial({
        ...base, defines: { MODE: 2 }, depthWrite: false, depthTest: false,
        blending: THREE.CustomBlending, blendEquation: THREE.AddEquation,
        blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
        blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneFactor,
      }),
    ];
    this.geometry = geometry;
    this.uniforms = uniforms;
    this.meshes = this.materials.map((m) => {
      const mesh = new THREE.Mesh(geometry, m);
      mesh.frustumCulled = false;
      return mesh;
    });
    this.meshes[0].renderOrder = renderOrder;
    this.meshes[1].renderOrder = 1;
  }

  attach(groups) {
    groups.main.add(this.meshes[0]);
    groups.shadow.add(this.meshes[1]);
    groups.foot.add(this.meshes[2]);
  }

  dispose() {
    for (const m of this.meshes) m.parent?.remove(m);
    for (const m of this.materials) m.dispose();
    this.geometry.dispose();
  }
}
