// Web Audio API Judicial Audio Synthesis

class JudicialAudioEngine {
  private ctx: AudioContext | null = null;
  public isMuted: boolean = false;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Realistic Wooden Judicial Gavel Strike (ضربة مطرقة القاضي)
  playGavel() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // 1. Transient Impact (High Wood Snap)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(320, now);
      osc1.frequency.exponentialRampToValueAtTime(80, now + 0.08);

      gain1.gain.setValueAtTime(1.0, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.1);

      // 2. Resonant Body Thud (Low Oak Resonance)
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(140, now);
      osc2.frequency.exponentialRampToValueAtTime(45, now + 0.28);

      gain2.gain.setValueAtTime(0.85, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now);
      osc2.stop(now + 0.38);

      // Second strike slightly quieter after 220ms
      setTimeout(() => {
        if (!this.ctx) return;
        const now2 = this.ctx.currentTime;
        const oscEcho = this.ctx.createOscillator();
        const gainEcho = this.ctx.createGain();
        oscEcho.type = 'triangle';
        oscEcho.frequency.setValueAtTime(260, now2);
        oscEcho.frequency.exponentialRampToValueAtTime(70, now2 + 0.07);

        gainEcho.gain.setValueAtTime(0.6, now2);
        gainEcho.gain.exponentialRampToValueAtTime(0.001, now2 + 0.15);

        oscEcho.connect(gainEcho);
        gainEcho.connect(this.ctx.destination);
        oscEcho.start(now2);
        oscEcho.stop(now2 + 0.18);
      }, 210);

    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  // Soft judicial chime for UI navigation
  playChime() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.26);
    } catch (e) {
      console.warn('Audio chime error:', e);
    }
  }

  // Verdict Pronounced Fanfare (نغمة صدور الحكم)
  playVerdictFanfare() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const notes = [440, 554.37, 659.25, 880]; // A major arpeggio
      notes.forEach((freq, idx) => {
        const delay = idx * 0.1;
        const now = (this.ctx?.currentTime || 0) + delay;
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(now);
        osc.stop(now + 0.42);
      });
    } catch (e) {
      console.warn('Audio fanfare error:', e);
    }
  }

  toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

export const judicialAudio = new JudicialAudioEngine();
