/**
 * Punto de extensión para seguimiento corporal (MediaPipe Pose / ml5.js bodyPose).
 * No se carga en el prototipo; muestra cómo una nueva fuente se conecta al
 * InputController sin tocar el resto de la obra.
 *
 * Mapeo propuesto:
 *   muñeca dominante           -> injectPointer(x, y)       (pincel)
 *   brazos abiertos ~1 s       -> injectDown / injectUp      (ruptura, fase I)
 *   manos que se acercan y abren -> injectDown / injectUp    (encuentro, fase II)
 *   palmas juntas rápido       -> tap                         (perturbación)
 *
 * Uso futuro:
 *   const pose = new PoseInputSource(input, { width, height });
 *   input.addSource(pose);
 *   // en cada resultado del detector:
 *   pose.onLandmarks(landmarks);
 */
export class PoseInputSource {
  constructor(input, viewport) {
    this.input = input;
    this.viewport = viewport;
    this.holding = false;
  }

  /** landmarks: puntos normalizados [0..1] con índices de MediaPipe Pose. */
  onLandmarks(lm) {
    if (!lm) return;
    const { width, height } = this.viewport;
    const wrist = lm[16]; // muñeca derecha
    const x = (1 - wrist.x) * width, y = wrist.y * height; // espejo
    this.input.injectPointer(x, y);

    const ls = lm[11], rs = lm[12], lw = lm[15], rw = lm[16];
    const shoulder = Math.abs(ls.x - rs.x);
    const open = Math.abs(lw.x - rw.x) > shoulder * 2.6 && Math.abs(lw.y - ls.y) < 0.15;
    if (open && !this.holding) { this.holding = true; this.input.injectDown(x, y); }
    if (!open && this.holding) { this.holding = false; this.input.injectUp(x, y); }
  }
}
