/**
 * Degradación progresiva: si el tiempo de cuadro se mantiene alto, baja un nivel
 * de calidad (resolución de render, de simulación y subpasos).
 */
export class PerformanceMonitor {
  constructor(onChange) {
    this.onChange = onChange;
    this.tier = 0;
    this.avg = 1 / 60;
    this.slowFor = 0;
    this.cooldown = 4;
  }

  sample(dt) {
    this.avg += (dt - this.avg) * 0.05;
    this.cooldown -= dt;
    if (this.cooldown > 0) return;
    if (this.avg > 1 / 42) this.slowFor += dt; else this.slowFor = Math.max(0, this.slowFor - dt);
    if (this.slowFor > 2.5 && this.tier < 2) {
      this.tier++;
      this.slowFor = 0;
      this.cooldown = 5;
      this.onChange(this.tier);
    }
  }
}

export const QUALITY = [
  { pixelRatio: 2, simMax: 1100, substeps: 2, footEvery: 2 },
  { pixelRatio: 1.5, simMax: 860, substeps: 2, footEvery: 3 },
  { pixelRatio: 1, simMax: 680, substeps: 1, footEvery: 4 },
];
