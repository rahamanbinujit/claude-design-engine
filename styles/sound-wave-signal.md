# Sound Wave / Signal Analysis

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Best for:** Impact posts, output vs noise narratives, system capability demonstrations, signal-to-noise metaphors, "everyone does X, I do Y" positioning, any content where the metaphor is "most output is noise, this system's output clips the instrument."

## Concept
A signal analysis readout where a single waveform flatlines across most of the canvas but erupts into a massive amplitude spike at center. The "66" sits at the peak amplitude. Skill labels are scattered in the flatline zones (common, noise-floor) vs clustered at the peak (rare, clipping). The headline is split BY the waveform: dim observation above, bold declaration below.

## Layout Structure (1080x1350)

| Zone | Position | Content |
|------|----------|---------|
| **Tag** | Top-left (58px) | "Signal Analysis" in mono red 60%, 4px letter-spacing, red dot |
| **Timecode** | Top-right (58px) | 00:06:06.660 in mono 12% white |
| **Headline 1** | Top (92px) | "Most people" at 52px weight-300 16% white |
| **Headline 1b** | Below | "make noise." at 34px weight-300 italic 13% white |
| **Amplitude scale** | Left (280px) | +66dB to -66dB, 7 ticks, red at extremes |
| **Waveform** | Middle (270-710px) | SVG mirrored pair + secondary harmonic |
| **Flatline labels** | Noise zones | Common skills at 8-12% white, 7.5px mono |
| **Peak labels** | Outside curves | Rare skills at 28-40% red, 7-7.5px mono |
| **Stat** | Center of peak | "66" at 200px #C83C32 with triple glow |
| **Frequency ruler** | Below waveform (675px) | 0Hz-20kHz, 6 ticks, 8% white |
| **Headline 2** | Below ruler (700px) | "I make impact." at 64px weight-700, "impact." red |
| **Secondary stats** | Below (810px) | 5 / 2 / 10x at 42px bold with audio deltas |
| **Body** | Lower (940px) | Observation 28% + red rule + conclusion italic 55% |
| **Data panel** | Right lower (940px) | Amplitude/Frequency/Signal/Noise Floor/Status in 7.5px mono |
| **Identity** | Bottom (42px from bottom) | Name + role |

## Waveform Specs

**Main waveform (mirrored pair):**
- Stroke: 2.8px, linear gradient (6-8% white edges, 15-55-70% red center)
- Baseline: y=490px (horizontal center of waveform zone)
- Peak amplitude: upper to y=274, lower to y=706 (~430px total peak-to-peak)
- Shape: flatline with micro-noise on edges, exponential curve to center spike
- Flatline noise: 0.5px vertical ticks, +/-2px, 4-7% white

**Secondary harmonic:**
- Stroke: 1px, 18% red
- Same shape, slightly less extreme (upper to y=326, lower to y=654)

**Grid:**
- Horizontal lines: y=350,420,490,560,630 at 3-4% white, 0.5px
- Vertical time markers: x=200,350,540,730,880 dashed at 2.5% white (center at 6% red)

## Typography Decisions

| Element | Size | Weight | Color | Position Meaning |
|---------|------|--------|-------|-----------------|
| "Most people" | 52px | 300 | 16% white | Above waveform = looking down at noise floor |
| "make noise." | 34px | 300 italic | 13% white | Size drop = signal dropping |
| "I make impact." | 64px | 700 | 94% white, "impact." red | Below waveform = output side, bold = amplitude |
| Body observe | 20px | 300 | 28% white | Same frequency = same noise floor |
| Body conclude | 20px | 400 italic | 55% white | Found resonance = natural amplification |

## Color Map

| Element | Color | Why |
|---------|-------|-----|
| Flatline waveform | 6-8% white | Noise floor, indistinguishable from silence |
| Peak waveform | 70% red | Maximum amplitude, approaching clipping |
| Flatline skills | 8-12% white | Noise-floor amplitude, common, unremarkable |
| Peak skills | 28-40% red | Danger zone, instrument warning, rare |
| Peak glow | 16-22% red radial | Heat signature of maximum output |
| Amplitude scale extremes | 45% red | The measurements that matter |
| Grid lines | 3-4% white | Recording paper, barely visible structure |

## Key Metaphor Elements

1. **Flatline = noise** -- common skills register at noise-floor amplitude
2. **Spike = signal** -- rare skills clip the instrument
3. **Headline split by waveform** -- viewer must cross the visual spike to get from "noise" to "impact"
4. **Mirrored waveform = eye shape** -- the signal sees you, the stat is the pupil
5. **STATUS: CLIPPING** -- the system exceeds the instrument's measurement range
6. **Resonance** -- not pushing harder, but finding the natural frequency where everything amplifies

## Reuse Notes

- Swap skill labels for any domain (e.g., common marketing tactics vs system-level strategies)
- Swap "66" for any stat (revenue, clients, skills, output)
- The headline pattern "Most people [verb] [noun]. / I [verb] [noun]." is flexible
- The waveform shape can be adjusted: wider spike = broader capability, narrower spike = laser focus
- Add more harmonics for complexity, remove for simplicity

---

*Claude Design Engine by Rahaman Bin Ujit*
