import * as THREE from 'three';
import { Structure } from './Structure.js';
import { branchVert, branchFrag } from '../../shaders/structures.js';
import { curl } from '../../util/math.js';

/**
 * Crecimiento por reglas: cada rama avanza evitando el pigmento denso (crece
 * hacia el espacio libre), deriva con un campo rotacional y se bifurca de forma
 * simpodial con grosor decreciente por orden jerárquico.
 */
export function growTree(root, dir, o, rng, an, out = []) {
  const g = [0, 0], c = [0, 0];
  const grow = (p, d, w, depth, arc, birth) => {
    const pts = [p.slice()], arcs = [arc], births = [birth];
    const steps = Math.round(o.steps * Math.pow(0.72, depth) * (0.75 + rng() * 0.5));
    const stepLen = o.step * (1 - 0.12 * depth);
    let [dx, dy] = d;
    let [x, y] = p;
    for (let k = 0; k < steps; k++) {
      if (an) an.gradAt(x, y, g); else g[0] = g[1] = 0;
      curl(x * o.curlScale + o.seed, y * o.curlScale, c);
      const cl = Math.hypot(c[0], c[1]) || 1;
      dx += -g[0] * o.avoid * 0.02 + (c[0] / cl) * o.wander + (rng() - 0.5) * 0.12;
      dy += -g[1] * o.avoid * 0.02 + (c[1] / cl) * o.wander + (rng() - 0.5) * 0.12;
      const l = Math.hypot(dx, dy) || 1;
      dx /= l; dy /= l;
      x += dx * stepLen; y += dy * stepLen; arc += stepLen;
      if (x < 0.01 || y < 0.01 || x > o.aspect - 0.01 || y > 0.99) break;
      pts.push([x, y]); arcs.push(arc); births.push(birth + (arc - arcs[0]) / o.speed);
      if (depth < o.maxDepth && k > 1 && k < steps - 2 && rng() < o.branchProb) {
        const sgn = rng() < 0.5 ? -1 : 1;
        const ang = sgn * (0.45 + rng() * 0.45);
        const ca = Math.cos(ang), sa = Math.sin(ang);
        grow([x, y], [dx * ca - dy * sa, dx * sa + dy * ca], w * 0.62, depth + 1, arc, births[births.length - 1]);
        const cb = Math.cos(-ang * 0.35), sb = Math.sin(-ang * 0.35);
        [dx, dy] = [dx * cb - dy * sb, dx * sb + dy * cb];
      }
    }
    const n = pts.length;
    if (n < 2) return;
    const width = pts.map((_, i) => w * Math.pow(1 - i / n, 0.75));
    out.push({ pts, width, arc: arcs, birth: births, depth, pig: o.pig });
  };
  grow(root, dir, o.width, 0, 0, o.delay);
  return out;
}

export function buildRibbonGeometry(polys) {
  let nv = 0, ni = 0;
  for (const p of polys) { nv += p.pts.length * 2; ni += (p.pts.length - 1) * 6; }
  const pos = new Float32Array(nv * 3), tan = new Float32Array(nv * 2), side = new Float32Array(nv);
  const width = new Float32Array(nv), birth = new Float32Array(nv), arc = new Float32Array(nv);
  const depth = new Float32Array(nv), pig = new Float32Array(nv * 3);
  const index = new Uint32Array(ni);
  let v = 0, ii = 0;
  for (const p of polys) {
    const n = p.pts.length;
    const base = v;
    for (let i = 0; i < n; i++) {
      const a = p.pts[Math.max(0, i - 1)], b = p.pts[Math.min(n - 1, i + 1)];
      let tx = b[0] - a[0], ty = b[1] - a[1];
      const l = Math.hypot(tx, ty) || 1; tx /= l; ty /= l;
      for (let s = 0; s < 2; s++) {
        pos[v * 3] = p.pts[i][0]; pos[v * 3 + 1] = p.pts[i][1]; pos[v * 3 + 2] = 0;
        tan[v * 2] = tx; tan[v * 2 + 1] = ty;
        side[v] = s === 0 ? -1 : 1;
        width[v] = p.width[i]; birth[v] = p.birth[i]; arc[v] = p.arc[i]; depth[v] = p.depth;
        pig[v * 3] = p.pig[0]; pig[v * 3 + 1] = p.pig[1]; pig[v * 3 + 2] = p.pig[2];
        v++;
      }
    }
    for (let i = 0; i < n - 1; i++) {
      const a = base + i * 2;
      index[ii++] = a; index[ii++] = a + 1; index[ii++] = a + 2;
      index[ii++] = a + 1; index[ii++] = a + 3; index[ii++] = a + 2;
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aTan', new THREE.BufferAttribute(tan, 2));
  g.setAttribute('aSide', new THREE.BufferAttribute(side, 1));
  g.setAttribute('aWidth', new THREE.BufferAttribute(width, 1));
  g.setAttribute('aBirth', new THREE.BufferAttribute(birth, 1));
  g.setAttribute('aArc', new THREE.BufferAttribute(arc, 1));
  g.setAttribute('aDepth', new THREE.BufferAttribute(depth, 1));
  g.setAttribute('aPig', new THREE.BufferAttribute(pig, 3));
  g.setIndex(new THREE.BufferAttribute(index, 1));
  return g;
}

export class BranchForest extends Structure {
  constructor(shared, polys, start, lookBias = 0) {
    const own = {
      uStart: { value: start }, uFade: { value: 1 }, uShed: { value: 0.4 }, uLookBias: { value: lookBias },
    };
    super(buildRibbonGeometry(polys), branchVert, branchFrag, { ...shared, ...own }, { renderOrder: 3 });
    this.own = own;
    this.polys = polys;
  }
}
