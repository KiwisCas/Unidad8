const HINTS = {
  1: ['mueve el cursor para pintar', 'despacio concentra · rápido dispersa · clic breve: agua', 'mantén pulsado para abrir la ruptura'],
  2: ['despacio: siembras vetas y atraes la red · rápido: las disuelves', 'remueve el cuadro como tinta en agua · clic breve: perturbación', 'mantén pulsado en una zona libre para el encuentro'],
  3: ['pinta: vetas, red y un eco en canon responden a tu trazo', 'mientras se abre, guía la expansión con el cursor', 'cuando el lienzo se llene, cambiará de color'],
};

/** Capa mínima de texto: introducción, pistas discretas, avisos y cursor. */
export class Overlay {
  constructor() {
    this.intro = document.getElementById('intro');
    this.hint = document.getElementById('hint');
    this.toastEl = document.getElementById('toast');
    this.soundBtn = document.getElementById('sound');
    this.cursor = document.getElementById('cursor');
    this.hintsOn = true;
    this.hintTimer = 0;
    this.toastTimer = 0;
  }

  hideIntro() { this.intro.classList.add('gone'); }

  setPhase(phase) {
    this.hint.innerHTML = HINTS[phase].map((t) => `<span>${t}</span>`).join('');
    this.showHints(10);
  }

  showHints(seconds) {
    if (!this.hintsOn) return;
    this.hint.classList.add('on');
    clearTimeout(this.hintTimer);
    this.hintTimer = setTimeout(() => this.hint.classList.remove('on'), seconds * 1000);
  }

  toggleHints() {
    this.hintsOn = !this.hintsOn;
    clearTimeout(this.hintTimer);
    this.hint.classList.toggle('on', this.hintsOn);
  }

  toast(text, ms = 3000, cls = '') {
    this.toastEl.textContent = text;
    this.toastEl.className = 'on ' + cls;
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => (this.toastEl.className = cls), ms);
  }

  setSound(on) { this.soundBtn.textContent = on ? 'sonido · sí' : 'sonido · no'; }

  moveCursor(x, y, charge, visible) {
    const c = this.cursor;
    c.style.transform = `translate(${x}px, ${y}px) scale(${1 - charge * 0.55})`;
    c.style.opacity = visible ? String(0.55 + charge * 0.45) : '0';
    c.style.setProperty('--charge', charge.toFixed(3));
  }
}
