import * as THREE from 'three';
import { FullscreenPass, rawMaterial } from '../gl/FullscreenPass.js';
import { densityFrag } from '../shaders/passes.js';

/**
 * Lee una versión reducida del lienzo y la segmenta en zonas de pigmento
 * (máximos locales + partición de Voronoi). Las zonas son la materia prima
 * de la ruptura: cada forma digital sabe de qué mancha procede.
 */
export class RegionAnalyzer {
  constructor(renderer) {
    this.renderer = renderer;
    this.u = { tWet: { value: null }, tDry: { value: null }, uTexel: { value: new THREE.Vector2() } };
    this.pass = new FullscreenPass(rawMaterial(densityFrag, this.u));
    this.rt = null;
  }

  ensure(aspect) {
    const gw = 144, gh = Math.max(40, Math.round(144 / aspect));
    if (this.rt && this.rt.width === gw && this.rt.height === gh) return;
    this.rt?.dispose();
    this.rt = new THREE.WebGLRenderTarget(gw, gh, {
      type: THREE.UnsignedByteType, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
      depthBuffer: false, generateMipmaps: false,
    });
    this.buf = new Uint8Array(gw * gh * 4);
  }

  analyze(wet, dry, aspect) {
    this.ensure(aspect);
    const { width: gw, height: gh } = this.rt;
    this.u.tWet.value = wet;
    this.u.tDry.value = dry;
    this.u.uTexel.value.set(1 / gw, 1 / gh);
    this.pass.render(this.renderer, this.rt);
    this.renderer.readRenderTargetPixels(this.rt, 0, 0, gw, gh, this.buf);
    this.renderer.setRenderTarget(null);
    const n = gw * gh;
    const dens = new Float32Array(n);
    const absb = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      absb[i * 3] = this.buf[i * 4] / 255 * 4;
      absb[i * 3 + 1] = this.buf[i * 4 + 1] / 255 * 4;
      absb[i * 3 + 2] = this.buf[i * 4 + 2] / 255 * 4;
      dens[i] = this.buf[i * 4 + 3] / 255 * 2;
    }
    return new Analysis(gw, gh, aspect, dens, absb);
  }
}

export class Analysis {
  constructor(gw, gh, aspect, dens, absb) {
    this.gw = gw; this.gh = gh; this.aspect = aspect;
    this.dens = dens; this.absb = absb;
    this.zoneId = new Int16Array(gw * gh).fill(-1);
    this.zones = [];
    this.computeZones();
  }

  cell(x, y) {
    const i = Math.min(this.gw - 1, Math.max(0, Math.floor(x / this.aspect * this.gw)));
    const j = Math.min(this.gh - 1, Math.max(0, Math.floor(y * this.gh)));
    return j * this.gw + i;
  }
  cellQ(i, j) { return [(i + 0.5) / this.gw * this.aspect, (j + 0.5) / this.gh]; }
  densAt(x, y) { return this.dens[this.cell(x, y)]; }
  zoneAt(x, y) { return this.zoneId[this.cell(x, y)]; }
  absAt(x, y) { const c = this.cell(x, y) * 3; return [this.absb[c], this.absb[c + 1], this.absb[c + 2]]; }
  totalDensity() { let s = 0; for (const d of this.dens) s += d; return s / this.dens.length; }
  /** Fracción del lienzo cubierta por pigmento visible. */
  coverage(thr = 0.12) { let c = 0; for (const d of this.dens) if (d > thr) c++; return c / this.dens.length; }

  /** Gradiente de densidad en unidades de lienzo. */
  gradAt(x, y, out = [0, 0]) {
    const hx = this.aspect / this.gw, hy = 1 / this.gh;
    out[0] = (this.densAt(x + hx, y) - this.densAt(x - hx, y)) / (2 * hx);
    out[1] = (this.densAt(x, y + hy) - this.densAt(x, y - hy)) / (2 * hy);
    return out;
  }

  computeZones() {
    const { gw, gh, dens } = this;
    const thr = 0.09;
    const blur = new Float32Array(gw * gh);
    for (let j = 0; j < gh; j++) for (let i = 0; i < gw; i++) {
      let s = 0, c = 0;
      for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
        const x = i + di, y = j + dj;
        if (x < 0 || y < 0 || x >= gw || y >= gh) continue;
        s += dens[y * gw + x]; c++;
      }
      blur[j * gw + i] = s / c;
    }
    const cand = [];
    for (let k = 0; k < gw * gh; k++) if (blur[k] > thr * 1.5) cand.push(k);
    cand.sort((a, b) => blur[b] - blur[a]);
    const R = Math.max(5, Math.round(gw * 0.05));
    const seeds = [];
    for (const k of cand) {
      const i = k % gw, j = (k / gw) | 0;
      if (seeds.every((s) => (s[0] - i) ** 2 + (s[1] - j) ** 2 > R * R)) seeds.push([i, j]);
      if (seeds.length >= 14) break;
    }
    if (!seeds.length) return;

    const stats = seeds.map(() => ({ count: 0, sx: 0, sy: 0, sxx: 0, syy: 0, sxy: 0, A: [0, 0, 0], d: 0, ds: [] }));
    const maxD2 = (R * 3.5) ** 2;
    for (let j = 0; j < gh; j++) for (let i = 0; i < gw; i++) {
      const k = j * gw + i;
      if (dens[k] < thr) continue;
      let best = -1, bd = maxD2;
      for (let s = 0; s < seeds.length; s++) {
        const d2 = (seeds[s][0] - i) ** 2 + (seeds[s][1] - j) ** 2;
        if (d2 < bd) { bd = d2; best = s; }
      }
      if (best < 0) continue;
      this.zoneId[k] = best;
      const st = stats[best];
      const [x, y] = this.cellQ(i, j);
      st.count++; st.sx += x; st.sy += y; st.sxx += x * x; st.syy += y * y; st.sxy += x * y;
      st.A[0] += this.absb[k * 3]; st.A[1] += this.absb[k * 3 + 1]; st.A[2] += this.absb[k * 3 + 2];
      st.d += dens[k]; st.ds.push(dens[k]);
    }

    const cellArea = (this.aspect / gw) * (1 / gh);
    const g = [0, 0];
    stats.forEach((st, id) => {
      if (st.count < 6) {
        for (let k = 0; k < this.zoneId.length; k++) if (this.zoneId[k] === id) this.zoneId[k] = -1;
        return;
      }
      const cx = st.sx / st.count, cy = st.sy / st.count;
      const vxx = st.sxx / st.count - cx * cx, vyy = st.syy / st.count - cy * cy, vxy = st.sxy / st.count - cx * cy;
      const tr = vxx + vyy, det = vxx * vyy - vxy * vxy;
      const l1 = tr / 2 + Math.sqrt(Math.max(0, tr * tr / 4 - det));
      const l2 = Math.max(1e-6, tr - l1);
      st.ds.sort((a, b) => a - b);
      const zone = {
        id, center: [cx, cy], count: st.count, area: st.count * cellArea,
        axis: 0.5 * Math.atan2(2 * vxy, vxx - vyy),
        major: Math.sqrt(l1) * 2, minor: Math.sqrt(l2) * 2,
        A: st.A.map((v) => v / st.count), meanDens: st.d / st.count,
        shardThr: st.ds[Math.floor(st.ds.length * 0.45)],
        radius: 0, boundary: [],
      };
      for (let j = 0; j < gh; j++) for (let i = 0; i < gw; i++) {
        const k = j * gw + i;
        if (this.zoneId[k] !== id) continue;
        const [x, y] = this.cellQ(i, j);
        zone.radius = Math.max(zone.radius, Math.hypot(x - cx, y - cy));
        const edge = (i > 0 && dens[k - 1] < thr) || (i < gw - 1 && dens[k + 1] < thr) ||
          (j > 0 && dens[k - gw] < thr) || (j < gh - 1 && dens[k + gw] < thr);
        if (edge) {
          this.gradAt(x, y, g);
          const l = Math.hypot(g[0], g[1]) || 1;
          zone.boundary.push([x, y, -g[0] / l, -g[1] / l]);
        }
      }
      this.zones.push(zone);
    });
  }
}
