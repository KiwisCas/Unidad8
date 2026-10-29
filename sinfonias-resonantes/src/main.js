import './style.css';
import { ExperienceController } from './core/ExperienceController.js';
import { Overlay } from './ui/Overlay.js';

const canvas = document.getElementById('stage');
const overlay = new Overlay();

try {
  const exp = new ExperienceController(canvas, overlay);
  const intro = document.getElementById('intro');
  const begin = () => exp.begin();
  intro.addEventListener('click', begin);
  intro.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') begin(); });
  document.getElementById('sound').addEventListener('click', () => exp.toggleMute());
  if (import.meta.env.DEV) window.__exp = exp;
} catch (err) {
  console.error(err);
  const f = document.getElementById('fatal');
  f.textContent = 'Esta obra necesita WebGL2 con texturas de coma flotante. Prueba con un navegador de escritorio actualizado.';
  f.classList.add('on');
}
