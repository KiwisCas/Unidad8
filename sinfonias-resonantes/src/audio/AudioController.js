import { clamp, lerp } from '../util/math.js';

// Progresiones armónicas por fase (4 voces, Hz). Cambian cada compás largo (~8,5 s).
const PROG = {
  1: [ // La menor: Am9 – Fmaj7 – C – G6
    [220, 261.63, 329.63, 493.88], [174.61, 220, 261.63, 329.63],
    [130.81, 196, 329.63, 392], [196, 246.94, 293.66, 329.63],
  ],
  2: [ // Bloque tenso: La con segundas menores, casi inmóvil
    [110, 116.54, 164.81, 174.61], [110, 116.54, 155.56, 174.61],
  ],
  3: [ // Re mayor resuelto: Dmaj9 – Bm11 – Gmaj7 – A6sus
    [146.83, 185, 220, 329.63], [123.47, 146.83, 220, 329.63],
    [98, 146.83, 185, 246.94], [110, 164.81, 185, 246.94],
  ],
};
const TENSION = [880, 932.33, 1318.51, 1396.91];
const RESOLVED = [880, 987.77, 1318.51, 1174.66];
const BPM = 112;
const BAR = 60 / BPM * 16; // 4 compases de 4/4 por acorde

/**
 * Síntesis procedural con Web Audio API.
 *  I  : colchón armónico (La menor) + aire y agua + notas del acorde ligadas al trazo.
 *  II : bloque tenso, pulso grave, crepitar de la red, chasquidos al nacer cada línea.
 *  III: la armonía se resuelve (Re mayor), campanas cuantizadas al pulso, volumen menor.
 *  Umbral: tono ascendente + latido. Ruptura: secuencia propia (zumbido, impacto,
 *  descomposición digital, silencio, nacimiento de la red).
 */
export class AudioController {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.lastPluck = 0;
    this.queue = [];
    this.step = 0;
    this.phase = 1;
    this.chordIdx = 0;
    this.lastGesture = {};
    this.state = { tech: 0, hybrid: 0, agitation: 0, charge: 0 };
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
    // "duck": silencios dramáticos (ruptura) sin tocar el nivel general.
    this.duck = ctx.createGain();
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -20; comp.ratio.value = 3; comp.attack.value = 0.01; comp.release.value = 0.3;
    this.master.connect(this.duck).connect(comp).connect(ctx.destination);

    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this.impulse(3.6);
    const rv = ctx.createGain(); rv.gain.value = 0.55;
    this.reverb.connect(rv).connect(this.master);
    this.dry = ctx.createGain(); this.dry.connect(this.master);
    this.send = ctx.createGain(); this.send.connect(this.reverb);
    this.noise = this.noiseBuffer(4);

    // Aire y agua.
    const src = ctx.createBufferSource(); src.buffer = this.noise; src.loop = true;
    this.bedBP = ctx.createBiquadFilter(); this.bedBP.type = 'bandpass'; this.bedBP.frequency.value = 700; this.bedBP.Q.value = 0.9;
    const bedLP = ctx.createBiquadFilter(); bedLP.type = 'lowpass'; bedLP.frequency.value = 2600;
    this.bedGain = ctx.createGain(); this.bedGain.gain.value = 0;
    src.connect(this.bedBP).connect(bedLP).connect(this.bedGain);
    this.out(this.bedGain, 0.5, 0.8);
    src.start();

    // Colchón armónico: 4 voces × 2 osciladores desafinados, filtro con respiración lenta.
    this.padFilter = ctx.createBiquadFilter(); this.padFilter.type = 'lowpass'; this.padFilter.frequency.value = 900; this.padFilter.Q.value = 0.7;
    this.padGain = ctx.createGain(); this.padGain.gain.value = 0;
    this.padFilter.connect(this.padGain);
    this.out(this.padGain, 0.35, 1);
    this.padVoices = PROG[1][0].map((f) => [-7, 7].map((cents, k) => {
      const o = ctx.createOscillator(); o.type = k ? 'triangle' : 'sawtooth';
      o.frequency.value = f; o.detune.value = cents;
      const g = ctx.createGain(); g.gain.value = k ? 0.6 : 0.35;
      o.connect(g).connect(this.padFilter); o.start();
      return o;
    }));

    // Pulso grave.
    this.pulseOsc = ctx.createOscillator(); this.pulseOsc.type = 'sawtooth'; this.pulseOsc.frequency.value = 55;
    this.pulseFilt = ctx.createBiquadFilter(); this.pulseFilt.type = 'lowpass'; this.pulseFilt.Q.value = 9; this.pulseFilt.frequency.value = 300;
    this.pulseVCA = ctx.createGain(); this.pulseVCA.gain.value = 0;
    this.synthBus = ctx.createGain(); this.synthBus.gain.value = 0;
    this.pulseOsc.connect(this.pulseFilt).connect(this.pulseVCA).connect(this.synthBus);
    this.out(this.synthBus, 0.8, 0.3);
    this.pulseOsc.start();

    // Clúster agudo de precisión (batidos que se resuelven en la fase III).
    this.clusterBus = ctx.createGain(); this.clusterBus.gain.value = 0;
    this.out(this.clusterBus, 0.5, 0.6);
    this.cluster = TENSION.map((f) => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const g = ctx.createGain(); g.gain.value = 0.25;
      o.connect(g).connect(this.clusterBus); o.start();
      return o;
    });

    // Tono de umbral.
    this.chargeOsc = ctx.createOscillator(); this.chargeOsc.type = 'sine'; this.chargeOsc.frequency.value = 160;
    this.chargeOsc2 = ctx.createOscillator(); this.chargeOsc2.type = 'triangle'; this.chargeOsc2.frequency.value = 161.5;
    this.chargeGain = ctx.createGain(); this.chargeGain.gain.value = 0;
    this.chargeOsc.connect(this.chargeGain); this.chargeOsc2.connect(this.chargeGain);
    this.out(this.chargeGain, 0.5, 0.9);
    this.chargeOsc.start(); this.chargeOsc2.start();

    this.nextStep = ctx.currentTime + 0.1;
    this.nextChord = ctx.currentTime + BAR;
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
    this.master.gain.setTargetAtTime(m ? 0 : this.level(), this.ctx.currentTime, 0.3);
  }

  /** Nivel general: la fase III suena más baja. */
  level() { return 0.9 * (1 - 0.45 * this.state.hybrid); }

  get chord() { const p = PROG[this.phase]; return p[this.chordIdx % p.length]; }

  setChord(t) {
    const ch = this.chord;
    this.padVoices.forEach((pair, i) => pair.forEach((o) => o.frequency.setTargetAtTime(ch[i], t, 1.6)));
    if (this.phase === 3) this.pulseOsc.frequency.setTargetAtTime(ch[0] / 2, t, 0.4);
  }

  update(dt, s) {
    if (!this.ctx) return;
    this.state = s;
    const t = this.ctx.currentTime;
    const { tech, hybrid, speed, charge, agitation } = s;
    const phase = hybrid > 0.05 ? 3 : tech > 0.05 ? 2 : 1;
    if (phase !== this.phase) { this.phase = phase; this.chordIdx = 0; this.setChord(t); this.nextChord = t + BAR; }
    const sp = clamp(speed / 1.5, 0, 1);
    const k = 0.15;
    if (!this.muted) this.master.gain.setTargetAtTime(this.level(), t, 0.8);
    this.bedGain.gain.setTargetAtTime(0.05 * (1 - 0.55 * tech + 0.4 * hybrid) + sp * 0.09, t, k);
    this.bedBP.frequency.setTargetAtTime(450 + 1600 * sp + 200 * Math.sin(t * 0.13), t, 0.2);
    const padLevel = phase === 1 ? 0.03 : phase === 2 ? 0.018 : 0.024;
    this.padGain.gain.setTargetAtTime(padLevel, t, 1.2);
    this.padFilter.frequency.setTargetAtTime((phase === 2 ? 380 : 850) + 350 * Math.sin(t * 0.09) + 500 * sp, t, 0.5);
    this.synthBus.gain.setTargetAtTime(0.55 * tech * (1 - 0.4 * hybrid), t, 0.4);
    this.pulseFilt.frequency.setTargetAtTime(220 + 1600 * agitation * (1 - 0.5 * hybrid) + 300 * hybrid, t, 0.15);
    this.clusterBus.gain.setTargetAtTime(0.03 * tech * (1 - 0.5 * hybrid) * (0.5 + 0.5 * agitation), t, 0.5);
    this.cluster.forEach((o, i) => o.frequency.setTargetAtTime(lerp(TENSION[i], RESOLVED[i], hybrid), t, 1.2));
    this.chargeGain.gain.setTargetAtTime(charge * 0.05, t, 0.05);
    this.chargeOsc.frequency.setTargetAtTime(160 + charge * charge * 420, t, 0.05);
    this.chargeOsc2.frequency.setTargetAtTime(161.5 + charge * charge * 425 + charge * 6, t, 0.05);

    if (t > this.nextChord) { this.chordIdx++; this.setChord(t); this.nextChord = t + BAR; }

    const st = 60 / BPM / 4;
    while (this.nextStep < t + 0.12) {
      this.tick(this.nextStep, this.step);
      this.nextStep += st;
      this.step = (this.step + 1) % 16;
    }
  }

  tick(time, step) {
    const { tech, hybrid, agitation, charge } = this.state;
    if (tech > 0.05 && step % 2 === 0) {
      const acc = step % 8 === 0 ? 1 : step % 4 === 0 ? 0.6 : 0.35;
      const g = this.pulseVCA.gain;
      g.setValueAtTime(0.0001, time);
      g.linearRampToValueAtTime(0.3 * acc, time + 0.008);
      g.exponentialRampToValueAtTime(0.0001, time + 0.12 + 0.18 * hybrid);
    }
    // Crepitar de la red: la tecnología trabaja aunque no la toques.
    if (tech > 0.2 && Math.random() < (0.12 + agitation * 0.35) * tech * (1 - 0.6 * hybrid)) this.click(time, 0.03);
    // Latido mientras se sostiene un umbral.
    if (charge > 0.05 && (step === 0 || step === 3 || step === 8 || step === 11)) this.heartbeat(time, charge * (step % 8 === 0 ? 1 : 0.6));
    if (hybrid > 0.3 && step % 2 === 0 && this.queue.length) {
      const p = this.queue.shift();
      this.pluck(time, p.freq, p.vel, p.pan, true);
    }
  }

  heartbeat(time, amt) {
    const ctx = this.ctx;
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(70, time); o.frequency.exponentialRampToValueAtTime(38, time + 0.18);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, time); g.gain.linearRampToValueAtTime(0.28 * amt, time + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.25);
    o.connect(g); this.out(g, 0.9, 0.2); o.start(time); o.stop(time + 0.3);
  }

  click(time, amp = 0.05) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource(); src.buffer = this.noise;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 3000 + Math.random() * 4000; bp.Q.value = 6;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, time);
    g.gain.linearRampToValueAtTime(amp, time + 0.002);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.04);
    const p = ctx.createStereoPanner(); p.pan.value = Math.random() * 1.6 - 0.8;
    src.connect(bp).connect(g).connect(p); this.out(p, 0.6, 0.4);
    src.start(time, Math.random() * 3, 0.06);
  }

  blip(time, freq, amp, dur = 0.06, type = 'square') {
    const ctx = this.ctx;
    const o = ctx.createOscillator(); o.type = type; o.frequency.value = freq;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = freq; bp.Q.value = 3;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, time); g.gain.linearRampToValueAtTime(amp, time + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    o.connect(bp).connect(g); this.out(g, 0.5, 0.5); o.start(time); o.stop(time + dur + 0.05);
  }

  /** Una línea de la red nace del gesto (fase II): chasquido + destello agudo. */
  birth() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    if (t - (this.lastBirth || 0) < 0.07) return;
    this.lastBirth = t;
    this.click(t, 0.06);
    const ch = this.chord;
    this.blip(t, ch[Math.floor(Math.random() * ch.length)] * 8, 0.02, 0.05);
  }

  /** Nota ligada al trazo: altura por posición dentro del acorde vigente, timbre por densidad. */
  stroke({ speed, x, y, density, accent }) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const interval = lerp(0.55, 0.11, clamp(speed / 1.4, 0, 1));
    if (!accent && now - this.lastPluck < interval) return;
    this.lastPluck = now;
    const ch = this.chord;
    const oct = y < 0.33 ? 1 : y < 0.66 ? 2 : 4;
    const freq = ch[Math.floor(Math.random() * ch.length)] * oct;
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

  /** Onda / perturbación: barrido descendente + soplo filtrado. */
  wave(strength = 1) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    this.sweep(t, 190, 45, 0.9, 0.12 * strength);
    this.whoosh(t, 0.6, 1800, 300, 0.05 * strength);
  }

  sweep(t, f0, f1, dur, amp, type = 'sine') {
    const ctx = this.ctx;
    const o = ctx.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur * 0.8);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(amp, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); this.out(g, 0.8, 0.4); o.start(t); o.stop(t + dur + 0.1);
  }

  whoosh(t, dur, f0, f1, amp, q = 2) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource(); src.buffer = this.noise;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = q;
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
    const t = this.ctx.currentTime;
    this.sweep(t, 1300, 520, 0.5, 0.05);
  }

  bloom() {
    if (!this.ctx) return;
    const ch = this.chord;
    if (this.queue.length < 4) this.queue.push({ freq: ch[Math.floor(Math.random() * 4)] * 4, vel: 0.35, pan: Math.random() * 1.2 - 0.6 });
  }

  /** Sonidos de los gestos de mano; cada fase los colorea distinto. */
  gesture(type, phase, x = 0.5) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const minGap = { bloom: 0.25, twist: 0.35, pinch: 0.18, fist: 0.3 }[type] || 0.2;
    if (t - (this.lastGesture[type] || 0) < minGap) return;
    this.lastGesture[type] = t;
    const ch = this.chord;
    const pan = clamp(x * 2 - 1, -0.9, 0.9);
    if (type === 'bloom') {
      // Arpegio de cinco notas, una por dedo.
      ch.concat([ch[0] * 2]).forEach((f, i) => {
        if (phase === 2) this.blip(t + i * 0.05, f * 4, 0.025, 0.08);
        else this.pluck(t + i * 0.06, f * 2, 0.5, pan, phase === 3);
      });
    } else if (type === 'twist') {
      this.whoosh(t, 0.7, phase === 2 ? 2500 : 600, phase === 2 ? 600 : 1800, 0.05, phase === 2 ? 6 : 2);
    } else if (type === 'pinch') {
      if (phase === 2) this.blip(t, ch[1] * 8, 0.012, 0.05, 'sine');
      else this.click(t, 0.025);
    } else if (type === 'fist') {
      if (phase === 1) this.whoosh(t, 0.5, 400, 150, 0.06, 1);
      else if (phase === 2) { this.sweep(t, 120, 30, 1.2, 0.22); this.click(t, 0.1); }
      else ch.forEach((f, i) => this.pluck(t + i * 0.02, f / 2, 0.35, pan, false, 0.6));
    }
  }

  paletteShift() {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    this.chord.concat([this.chord[0] * 2]).forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = i % 2 ? 'triangle' : 'sine'; o.frequency.value = f * 2;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t + i * 0.18);
      g.gain.linearRampToValueAtTime(0.022, t + 1.2 + i * 0.25);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 7);
      const pan = ctx.createStereoPanner(); pan.pan.value = (i / 4) * 1.4 - 0.7;
      o.connect(g).connect(pan); this.out(pan, 0.3, 1); o.start(t); o.stop(t + 7.5);
    });
    this.whoosh(t, 4, 250, 3000, 0.03);
  }

  phaseStart(n) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    if (n === 2) {
      // RUPTURA. 0–0.6 s zumbido que se tensa; 0.6 s impacto (grieta + golpe grave);
      // 0.8–2.6 s el sonido se descompone en tonos digitales descendentes;
      // 2.8–4.3 s casi silencio; después nace un retumbo grave: la red.
      const hum = ctx.createOscillator(); hum.type = 'sawtooth';
      hum.frequency.setValueAtTime(70, t); hum.frequency.exponentialRampToValueAtTime(240, t + 0.6);
      const hf = ctx.createBiquadFilter(); hf.type = 'lowpass'; hf.Q.value = 8;
      hf.frequency.setValueAtTime(200, t); hf.frequency.exponentialRampToValueAtTime(2400, t + 0.6);
      const hg = ctx.createGain();
      hg.gain.setValueAtTime(0.0001, t); hg.gain.linearRampToValueAtTime(0.12, t + 0.58);
      hg.gain.setValueAtTime(0.0001, t + 0.61);
      hum.connect(hf).connect(hg); this.out(hg, 0.8, 0.3); hum.start(t); hum.stop(t + 0.7);

      const hit = t + 0.6;
      const crack = ctx.createBufferSource(); crack.buffer = this.noise;
      const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1800;
      const cg = ctx.createGain();
      cg.gain.setValueAtTime(0.0001, hit); cg.gain.linearRampToValueAtTime(0.4, hit + 0.003);
      cg.gain.exponentialRampToValueAtTime(0.0001, hit + 0.35);
      crack.connect(hp).connect(cg); this.out(cg, 0.9, 0.8); crack.start(hit, 0.5, 0.4);
      this.sweep(hit, 75, 26, 3.2, 0.3);

      for (let i = 0; i < 18; i++) {
        const f = 1760 * Math.pow(0.86, i) * (1 + (Math.random() - 0.5) * 0.04);
        this.blip(hit + 0.2 + i * 0.1, f, 0.04 * (1 - i / 20), 0.07);
        if (i % 3 === 0) this.click(hit + 0.25 + i * 0.1, 0.05);
      }
      this.duck.gain.cancelScheduledValues(t);
      this.duck.gain.setValueAtTime(1, t);
      this.duck.gain.setValueAtTime(1, t + 2.6);
      this.duck.gain.linearRampToValueAtTime(0.12, t + 3.0);
      this.duck.gain.setValueAtTime(0.12, t + 4.2);
      this.duck.gain.linearRampToValueAtTime(1, t + 6.5);
      this.whoosh(t + 4.3, 3, 60, 220, 0.09, 1);
    } else if (n === 3) {
      [220, 329.63, 493.88, 659.25, 987.77].forEach((f, i) => {
        const o = ctx.createOscillator(); o.type = i % 2 ? 'triangle' : 'sine'; o.frequency.value = f;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(0.022, t + 2.5 + i * 0.4);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 9);
        o.connect(g); this.out(g, 0.3, 1); o.start(t); o.stop(t + 9.5);
      });
    } else if (n === 1) {
      this.queue = [];
      this.duck.gain.cancelScheduledValues(t);
      this.duck.gain.setValueAtTime(1, t);
    }
  }
}
