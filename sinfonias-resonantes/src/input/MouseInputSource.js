/** Mouse / puntero. Usa eventos agrupados para no perder detalle del gesto. */
export class MouseInputSource {
  constructor(el, input) {
    this.el = el;
    this.input = input;
    this.onMove = (e) => {
      const list = e.getCoalescedEvents ? e.getCoalescedEvents() : null;
      if (list && list.length) for (const c of list) input.injectPointer(c.clientX, c.clientY);
      else input.injectPointer(e.clientX, e.clientY);
    };
    this.onDown = (e) => {
      if (e.button !== 0) return;
      el.setPointerCapture?.(e.pointerId);
      input.injectPointer(e.clientX, e.clientY);
      input.injectDown(e.clientX, e.clientY);
    };
    this.onUp = (e) => { if (e.button === 0) input.injectUp(e.clientX, e.clientY); };
    this.onLeave = () => input.injectLeave();
    this.onKey = (e) => {
      if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
      const k = e.key.toLowerCase();
      if (k === 'r' || k === 'h' || k === 'm') input.injectKey(k);
    };
    this.onContext = (e) => e.preventDefault();
    el.addEventListener('pointermove', this.onMove);
    el.addEventListener('pointerdown', this.onDown);
    el.addEventListener('pointerup', this.onUp);
    el.addEventListener('pointercancel', this.onUp);
    el.addEventListener('pointerleave', this.onLeave);
    el.addEventListener('contextmenu', this.onContext);
    window.addEventListener('keydown', this.onKey);
  }

  dispose() {
    const el = this.el;
    el.removeEventListener('pointermove', this.onMove);
    el.removeEventListener('pointerdown', this.onDown);
    el.removeEventListener('pointerup', this.onUp);
    el.removeEventListener('pointercancel', this.onUp);
    el.removeEventListener('pointerleave', this.onLeave);
    el.removeEventListener('contextmenu', this.onContext);
    window.removeEventListener('keydown', this.onKey);
  }
}
