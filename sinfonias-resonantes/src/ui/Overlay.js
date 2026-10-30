const HINTS = {
  1: ['mueve el cursor para pintar', 'despacio concentra · rápido dispersa · clic breve: agua', 'mantén pulsado para abrir la ruptura'],
  2: ['tu gesto ya no pinta: engendra líneas que la red absorbe', 'clic breve: perturbación', 'mantén pulsado en una zona libre para el encuentro'],
  3: ['pinta: vetas, red y un eco en canon responden a tu trazo', 'mientras se abre, guía la expansión con el cursor', 'cuando el lienzo se llene, cambiará de color'],
  hands: ['C: manos · índice = pincel · pinza = trazo fino', 'abrir la palma de golpe · girar la muñeca · puño', 'separa las manos para la ruptura · júntalas para el encuentro'],
};

/** Capa mínima de texto: introducción, pistas discretas, avisos y cursor. */
export class Overlay {
  constructor() {
    this.intro = document.getElementById('intro');
    this.hint = document.getElementById('hint');
    this.toastEl = document.getElementById('toast');
    this.soundBtn = document.getElementById('sound');
    this.handsBtn = document.getElementById('handsBtn');
    this.video = document.getElementById('cam');
    this.handsEl = document.getElementById('hands');
    this.ring = document.getElementById('ring');
    this.tips = Array.from({ length: 10 }, () => {
      const d = document.createElement('div');
      d.className = 'tip';
      this.handsEl.appendChild(d);
      return d;
    });
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

  setHands(state) {
    this.handsBtn.textContent = state === 'on' ? 'manos · sí' : state === 'loading' ? 'manos · …' : 'manos · no';
    this.video.classList.toggle('on', state === 'on');
    if (state === 'on') {
      this.hint.innerHTML = HINTS.hands.map((t) => `<span>${t}</span>`).join('');
      this.showHints(12);
    }
  }

  /** Yemas visibles y anillo de progreso entre las dos manos durante una pose de umbral. */
  drawHands(src, charge, poseHold) {
    const hands = src.enabled ? src.hands : [];
    let k = 0;
    for (const h of hands) {
      h.tips.forEach((t, i) => {
        const d = this.tips[k++];
        if (!d) return;
        d.style.transform = `translate(${t[0]}px, ${t[1]}px)`;
        d.style.opacity = '1';
        d.classList.toggle('pen', i === 1 && (h.pointing || h.pinch));
      });
    }
    for (; k < this.tips.length; k++) this.tips[k].style.opacity = '0';
    if (hands.length === 2 && src.poseMid) {
      const size = Math.max(60, src.poseSep * window.innerWidth * 0.9);
      const r = this.ring.style;
      r.width = r.height = `${size}px`;
      r.transform = `translate(${src.poseMid[0] - size / 2}px, ${src.poseMid[1] - size / 2}px)`;
      r.opacity = src.pose ? '0.9' : '0.18';
      this.ring.style.setProperty('--p', poseHold ? charge.toFixed(3) : '0');
      this.ring.style.setProperty('--c', src.pose === 'together' ? '255, 215, 160' : '200, 220, 255');
    } else {
      this.ring.style.opacity = '0';
    }
  }

  setSound(on) { this.soundBtn.textContent = on ? 'sonido · sí' : 'sonido · no'; }

  moveCursor(x, y, charge, visible) {
    const c = this.cursor;
    c.style.transform = `translate(${x}px, ${y}px) scale(${1 - charge * 0.55})`;
    c.style.opacity = visible ? String(0.55 + charge * 0.45) : '0';
    c.style.setProperty('--charge', charge.toFixed(3));
  }
}
