import { clamp, lerp } from '../util/math.js';

const PENTA = [220, 246.94, 261.63, 329.63, 392, 440, 493.88, 523.25, 659.25, 783.99, 880];
const TENSION = [880, 932.33, 1318.51, 1396.91];   // segundas menores: batidos
const RESOLVED = [880, 987.77, 1318.51, 1174.66];  // A-B-E-D: suspensión abierta
const BPM = 112;

/**
 * Síntesis procedural con Web Audio API.
 *  I  : lecho de aire filtrado + resonancias + pulsos de tono orgánicos ligados al trazo.
 *  II : pulso sintético con filtro resonante, clúster en batido, ticks de precisión.
 *  III: el clúster se resuelve, los tonos del trazo se cuantizan al pulso (FM campana).
 */
export class AudioController {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.lastPluck = 0;
    this.queue = [];
    this.step = 0;
    this.state = { tech: 0, hybrid: 0, agitation: 0 };
  }

  start() {
    if (this.ctx) { this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    const now = ctx.currentTime;

    this.master = ctx.createGain();
    this.master.gain.setValueAtTime(0, now);
    this.master.gain.linearRampToValueAtTime(this.muted ? 0 : 0.9, now + 3);
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -20; comp.ratio.value = 3; comp.attack.value = 0.01; comp.release.value = 0.3;
    this.master.connect(comp).connect(ctx.destination);

    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this.impulse(3.6);
    const rv = ctx.createGain(); rv.gain.value = 0.55;
    this.reverb.connect(rv).connect(this.master);
    this.dry = ctx.createGain(); this.dry.connect(this.master);
    this.send = ctx.createGain(); this.send.connect(this.reverb);

    this.noise = this.noiseBuffer(4);

    // Lecho orgánico: aire filtrado.
    const src = ctx.createBufferSource(); src.buffer = this.noise; src.loop = true;
    this.bedBP = ctx.createBiquadFilter(); this.bedBP.type = 'bandpass'; this.bedBP.frequency.value = 700; this.bedBP.Q.value = 0.9;
    const bedLP = ctx.createBiquadFilter(); bedLP.type = 'lowpass'; bedLP.frequency.value = 2600;
    this.bedGain = ctx.createGain(); this.bedGain.gain.value = 0;
    src.connect(this.bedBP).connect(bedLP).connect(this.bedGain);
    this.out(this.bedGain, 0.5, 0.8);
    src.start();

    // Resonancias graves.
    this.drones = [110, 164.81, 246.94].map((f, i) => {
      const o = ctx.createOscillator(); o.type = i === 2 ? 'triangle' : 'sine'; o.frequency.value = f;
      const g = ctx.createGain(); g.gain.value = 0;
      o.connect(g); this.out(g, 0.6, 0.7); o.start();
      return g;
    });

    // Pulso sintético.
    this.pulseOsc = ctx.createOscillator(); this.pulseOsc.type = 'sawtooth'; this.pulseOsc.frequency.value = 55;
    this.pulseFilt = ctx.createBiquadFilter(); this.pulseFilt.type = 'lowpass'; this.pulseFilt.Q.value = 9; this.pulseFilt.frequency.value = 300;
    this.pulseVCA = ctx.createGain(); this.pulseVCA.gain.value = 0;
    this.synthBus = ctx.createGain(); this.synthBus.gain.value = 0;
    this.pulseOsc.connect(this.pulseFilt).connect(this.pulseVCA).connect(this.synthBus);
    this.out(this.synthBus, 0.8, 0.3);
    this.pulseOsc.start();

    // Clúster de precisión.
    this.clusterBus = ctx.createGain(); this.clusterBus.gain.value = 0;
    this.out(this.clusterBus, 0.5, 0.6);
    this.cluster = TENSION.map((f) => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const g = ctx.createGain(); g.gain.value = 0.25;
      o.connect(g).connect(this.clusterBus); o.start();
      return o;
    });

    // Tono de carga (umbral).
    this.chargeOsc = ctx.createOscillator(); this.chargeOsc.type = 'sine'; this.chargeOsc.frequency.value = 160;
    this.chargeOsc2 = ctx.createOscillator(); this.chargeOsc2.type = 'triangle'; this.chargeOsc2.frequency.value = 161.5;
    this.chargeGain = ctx.createGain(); this.chargeGain.gain.value = 0;
    this.chargeOsc.connect(this.chargeGain); this.chargeOsc2.connect(this.chargeGain);
    this.out(this.chargeGain, 0.5, 0.9);
    this.chargeOsc.start(); this.chargeOsc2.start();

    this.nextStep = ctx.currentTime + 0.1;
  }

  out(node, dryAmt, wetAmt) {
    const d = this.ctx.createGain(); d.gain.value = dryAmt; node.connect(d).connect(this.dry);
    const w = this.ctx.createGain(); w.gain.value = wetAmt; node.connect(w).connect(this.send);
  }

  impulse(sec) {
    const ctx = this.ctx, len = Math.floor(ctx.sampleRate * sec);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
    }
    return buf;
  }

  noiseBuffer(sec) {
    const ctx = this.ctx, len = Math.floor(ctx.sampleRate * sec);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      b0 = 0.99765 * b0 + w * 0.099; b1 = 0.963 * b1 + w * 0.2965; b2 = 0.57 * b2 + w * 1.0526;
      d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.18;
    }
    return buf;
  }

  setMuted(m) {
    this.muted = m;
    if (!this.ctx) return;
    this.master.gain.cancelScheduledValues(this.ctx.currentTime);
    this.master.gain.setTargetAtTime(m ? 0 : 0.9, this.ctx.currentTime, 0.3);
  }

  update(dt, s) {
    if (!this.ctx) return;
    this.state = s;
    const t = this.ctx.currentTime;
    const { tech, hybrid, speed, charge, agitation } = s;
    const sp = clamp(speed / 1.5, 0, 1);
    const k = 0.15;
    this.bedGain.gain.setTargetAtTime(0.05 * (1 - 0.55 * tech + 0.4 * hybrid) + sp * 0.09, t, k);
    this.bedBP.frequency.setTargetAtTime(450 + 1600 * sp + 200 * Math.sin(t * 0.13), t, 0.2);
    this.drones.forEach((g, i) => g.gain.setTargetAtTime((0.016 - i * 0.004) * (1 - 0.6 * tech + 0.5 * hybrid), t, 0.8));
    this.synthBus.gain.setTargetAtTime(0.55 * tech * (1 - 0.35 * hybrid), t, 0.4);
    this.pulseFilt.frequency.setTargetAtTime(220 + 2000 * agitation * (1 - 0.5 * hybrid) + 300 * hybrid, t, 0.15);
    this.clusterBus.gain.setTargetAtTime(0.03 * tech * (1 - 0.4 * hybrid) * (0.5 + 0.5 * agitation), t, 0.5);
    this.cluster.forEach((o, i) => o.frequency.setTargetAtTime(lerp(TENSION[i], RESOLVED[i], hybrid), t, 1.2));
    this.chargeGain.gain.setTargetAtTime(charge * 0.05, t, 0.05);
    this.chargeOsc.frequency.setTargetAtTime(160 + charge * charge * 420, t, 0.05);
    this.chargeOsc2.frequency.setTargetAtTime(161.5 + charge * charge * 425 + charge * 6, t, 0.05);

    // Secuenciador con anticipación (semicorcheas).
    const st = 60 / BPM / 4;
    while (this.nextStep < t + 0.12) {
      this.tick(this.nextStep, this.step);
      this.nextStep += st;
      this.step = (this.step + 1) % 16;
    }
  }

  tick(time, step) {
    const { tech, hybrid, agitation } = this.state;
    if (tech > 0.05 && step % 2 === 0) {
      const acc = step % 8 === 0 ? 1 : step % 4 === 0 ? 0.6 : 0.35;
      const g = this.pulseVCA.gain;
      g.setValueAtTime(0.0001, time);
      g.linearRampToValueAtTime(0.32 * acc, time + 0.008);
      g.exponentialRampToValueAtTime(0.0001, time + 0.12 + 0.18 * hybrid);
    }
    if (tech > 0.2 && Math.random() < agitation * 0.5 * tech * (1 - 0.5 * hybrid)) this.click(time);
    if (hybrid > 0.3 && step % 2 === 0 && this.queue.length) {
      const p = this.queue.shift();
      this.pluck(time, p.freq, p.vel, p.pan, true);
    }
  }

  click(time) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource(); src.buffer = this.noise;
    const hp = ctx.createBiquadFilter(); hp.type = 'bandpass'; hp.frequency.value = 3500 + Math.random() * 3000; hp.Q.value = 6;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, time);
    g.gain.linearRampToValueAtTime(0.05, time + 0.002);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.04);
    src.connect(hp).connect(g); this.out(g, 0.6, 0.4);
    src.start(time, Math.random() * 3, 0.06);
  }

  /** Tono ligado al trazo: frecuencia por altura, timbre por densidad de pigmento. */
  stroke({ speed, x, y, density, accent }) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const interval = lerp(0.55, 0.11, clamp(speed / 1.4, 0, 1));
    if (!accent && now - this.lastPluck < interval) return;
    this.lastPluck = now;
    const idx = clamp(Math.floor(y * PENTA.length), 0, PENTA.length - 1);
    const freq = PENTA[idx] * (Math.random() < 0.15 ? 0.5 : 1);
    const vel = clamp(0.25 + speed * 0.3 + (accent ? 0.3 : 0), 0, 0.9) * (0.6 + Math.min(density, 1) * 0.4);
    const pan = clamp(x * 2 - 1, -0.9, 0.9);
    if (this.state.hybrid > 0.3) { if (this.queue.length < 4) this.queue.push({ freq, vel, pan }); }
    else if (this.state.tech < 0.5) this.pluck(now, freq, vel, pan, false, density);
  }

  pluck(time, freq, vel, pan, bell, density = 0.3) {
    const ctx = this.ctx;
    const car = ctx.createOscillator(); car.frequency.value = freq;
    const mod = ctx.createOscillator(); mod.frequency.value = freq * (bell ? 3.5 : 1.0);
    const mg = ctx.createGain();
    const idx = freq * (bell ? 1.8 : 0.3 + density * 0.8);
    mg.gain.setValueAtTime(idx, time);
    mg.gain.exponentialRampToValueAtTime(idx * 0.05 + 0.01, time + (bell ? 1.4 : 0.8));
    mod.connect(mg).connect(car.frequency);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, time);
    g.gain.linearRampToValueAtTime(0.06 * vel, time + (bell ? 0.004 : 0.02));
    g.gain.exponentialRampToValueAtTime(0.0001, time + (bell ? 2.6 : 2.0));
    const p = ctx.createStereoPanner(); p.pan.value = pan;
    car.connect(g).connect(p); this.out(p, 0.45, 0.9);
    car.start(time); mod.start(time);
    car.stop(time + 2.8); mod.stop(time + 2.8);
  }

  /** Onda de deformación: barrido descendente + soplo filtrado. */
  wave(strength = 1) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(190, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.7);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.12 * strength, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    o.connect(g); this.out(g, 0.8, 0.4); o.start(t); o.stop(t + 1);
    this.whoosh(t, 0.6, 1800, 300, 0.05 * strength);
  }

  whoosh(t, dur, f0, f1, amp) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource(); src.buffer = this.noise;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 2;
    bp.frequency.setValueAtTime(f0, t); bp.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(amp, t + dur * 0.3);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(bp).connect(g); this.out(g, 0.4, 0.9);
    src.start(t, Math.random() * 2, dur + 0.1);
  }

  /** Gota de agua limpia (clic breve en la fase I). */
  drop() {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(1300, t); o.frequency.exponentialRampToValueAtTime(520, t + 0.18);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.05, t + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
    o.connect(g); this.out(g, 0.3, 1); o.start(t); o.stop(t + 0.6);
  }

  bloom() {
    if (!this.ctx) return;
    const f = PENTA[Math.floor(Math.random() * PENTA.length)] * 2;
    if (this.queue.length < 4) this.queue.push({ freq: f, vel: 0.35, pan: Math.random() * 1.2 - 0.6 });
  }

  /** Cambio de paleta: acorde que se abre y un barrido de aire ascendente. */
  paletteShift() {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const root = [220, 246.94, 261.63, 196][Math.floor(Math.random() * 4)];
    [1, 1.5, 2, 2.25, 3].forEach((r, i) => {
      const o = ctx.createOscillator(); o.type = i % 2 ? 'triangle' : 'sine'; o.frequency.value = root * r;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t + i * 0.18);
      g.gain.linearRampToValueAtTime(0.03, t + 1.2 + i * 0.25);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 7);
      const pan = ctx.createStereoPanner(); pan.pan.value = (i / 4) * 1.4 - 0.7;
      o.connect(g).connect(pan); this.out(pan, 0.3, 1); o.start(t); o.stop(t + 7.5);
    });
    this.whoosh(t, 4, 250, 3000, 0.04);
  }

  phaseStart(n) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    if (n === 2) {
      const o = ctx.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(70, t); o.frequency.exponentialRampToValueAtTime(32, t + 3);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.25, t + 0.05);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 4);
      o.connect(g); this.out(g, 0.9, 0.5); o.start(t); o.stop(t + 4.2);
      this.whoosh(t, 5, 300, 4200, 0.06);
    } else if (n === 3) {
      [220, 329.63, 493.88, 659.25, 987.77].forEach((f, i) => {
        const o = ctx.createOscillator(); o.type = i % 2 ? 'triangle' : 'sine'; o.frequency.value = f;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(0.035, t + 2.5 + i * 0.4);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 9);
        o.connect(g); this.out(g, 0.3, 1); o.start(t); o.stop(t + 9.5);
      });
    } else if (n === 1) {
      this.queue = [];
    }
  }
}
