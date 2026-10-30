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
    this.cooldown = 3;
  }

  sample(dt) {
    this.avg += (dt - this.avg) * 0.05;
    this.cooldown -= dt;
    if (this.cooldown > 0) return;
    // Cuadros de más de ~21 ms sostenidos durante 1,5 s: bajar un nivel.
    if (this.avg > 1 / 48) this.slowFor += dt; else this.slowFor = Math.max(0, this.slowFor - dt * 0.5);
    if (this.slowFor > 1.5 && this.tier < QUALITY.length - 1) {
      this.tier++;
      this.slowFor = 0;
      this.cooldown = 3;
      this.avg = 1 / 60;
      this.onChange(this.tier);
    }
  }
}

// pixelRatio se limita además al del dispositivo. En pantallas densas, 1.5 ya es nítido:
// el detalle de la acuarela lo pone la simulación, no la resolución de render.
export const QUALITY = [
  { pixelRatio: 1.5, simMax: 1024, substeps: 2, rdIterations: 4 },
  { pixelRatio: 1.25, simMax: 860, substeps: 2, rdIterations: 3 },
  { pixelRatio: 1, simMax: 720, substeps: 1, rdIterations: 3 },
  { pixelRatio: 0.85, simMax: 600, substeps: 1, rdIterations: 2 },
];
