# Seismograph Trace

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Best for:** Signal-vs-noise narratives, impact demonstrations, system capability posts, "most people do X, this system does Y" positioning, any content where the metaphor is "hours of baseline noise punctuated by a single event that registers globally."

## Concept
A seismograph drum recorder trace that runs flat (baseline noise) across the canvas, then erupts into massive oscillations at center. The waveform follows real seismological structure: P-wave arrival (small, fast) → S-wave (larger, slower) → Surface wave ERUPTION (widest, tallest peaks) → exponential decay → flatline. The "66" sits above the peak as the magnitude reading. Skill labels are scattered in the flatline zones (common, noise-floor) vs clustered at the eruption zone (rare, clipping).

## Layout Structure (1080x1350)

| Zone | Position | Content |
|------|----------|---------|
| **Tag** | Top-left (58px) | "Seismograph Readout" in mono red 60%, 4px letter-spacing, red dot |
| **Station ID** | Top-right (58px) | STA: SYS-066 in mono 12% white |
| **REC** | Below tag (80px) | REC 24H in mono red 40%, red dot |
| **Headline 1** | Top (100px) | "Most signals are noise." at 52px weight-300 17% white |
| **Time labels** | Above trace (188px) | 00:00 through 10:00, P/S arrival times in red |
| **Amplitude scale** | Left (228px) | +6.6 to -6.6, red at extremes |
| **Magnitude scale** | Right (228px) | Mw 6.6 to Mw 0.0, red at extremes |
| **Stat prefix** | Above stat (193px) | "/// Magnitude ///" mono red 30% |
| **Stat** | Above peak (205px) | "66" at 170px #C83C32 with dual glow |
| **Stat suffix** | Below stat (368px) | "AI Skills Deployed" mono 25% white |
| **Waveform** | Middle (200-810px) | SVG trace with gradient stroke + glow filter |
| **Skill labels** | Along waveform | 4 zones: flatline, mid-tremor, eruption, peak |
| **Headline 2** | Below waveform (855px) | "This one moved the needle." at 66px weight-700 |
| **Secondary stats** | Below (960px) | 5 / 2 / 10x at 42px bold |
| **Body** | Lower (1060px) | Observation 26% + red rule + conclusion italic 50% |
| **Data panel** | Right lower (1055px) | Station/Magnitude/Depth/Intensity/Instrument/Status |
| **Identity** | Bottom (42px from bottom) | Name + role |

## Waveform Specs

**Main trace:**
- Stroke: 2.8px, linearGradient (7% white at flatline edges → 18-70% red at eruption center)
- Baseline: y=305 (horizontal center of trace zone)
- Structure: Flatline micro-noise (+/-1px) → P-wave onset (amplitude grows 5→35px, short wavelength ~12px) → S-wave (amplitude grows 35→100px, medium wavelength ~20px) → Surface wave PEAK (amplitude 175px, wavelength ~36px) → Exponential decay → Flatline
- Peak-to-peak spacing MUST be wide enough that individual oscillation cycles are readable (never merge into solid mass)
- Glow filter: Gaussian blur stdDeviation=2.5

**Secondary channel:**
- Stroke: 1.0px, separate gradient (2% white → 6-14% red → 2% white)
- Same phase structure, ~70% amplitude of main trace
- Opacity: 0.5

**Paper grid:**
- Horizontal lines: 0.5px, 2-3.5% white, major every 3rd at 3.5%
- Vertical time grids: 0.5px dashed, 1.8% white (event markers at 5% red)

## Typography Decisions

| Element | Size | Weight | Color | Position Meaning |
|---------|------|--------|-------|-----------------|
| "Most signals are noise." | 52px | 300 | 17% white | Above trace = the flatline observation, light = the insignificance of noise |
| "This one moved the needle." | 66px | 700 | 94% white, "needle." italic red | Below trace = conclusion after eruption, 66px echoes the stat |
| Body observe | 19px | 300 | 26% white | Baseline noise description |
| Body conclude | 19px | 400 italic | 50% white | The event that registers globally |

## Color Map

| Element | Color | Why |
|---------|-------|-----|
| Flatline trace | 7% white | Noise floor, indistinguishable from baseline |
| Peak trace | 70% red | Maximum amplitude, instrument clipping |
| Flatline skills | 10% white | Common, noise-level signal |
| Mid-tremor skills | 16% white | Noticeable but not an event |
| Eruption skills | 38% red | Large oscillations approaching clip |
| Peak skills | 55% red | Clipping the instrument |
| P/S/Surface markers | 6-12% red dashed | Seismological phase arrivals |
| Paper lines | 2-3.5% white | Drum recorder paper texture |

## Key Metaphor Elements

1. **Flatline = noise floor** -- common skills register at baseline amplitude
2. **Eruption = the event** -- rare skills cause oscillations that clip the instrument
3. **P/S/Surface wave structure** -- skill building follows seismological progression: detect (P), shear through (S), reshape the surface (Surface)
4. **"needle." in red** -- the seismograph needle itself, moved by the event
5. **STATUS: CLIPPING** -- the system exceeds the instrument's measurement range
6. **"registers on every station"** -- a Mw 6.6 event is recorded globally, not locally

## Reuse Notes

- Swap skill labels for any domain
- Swap "66" for any stat (revenue, clients, skills, output)
- The headline pattern "Most [noun] are [adjective]. / This one [verb] the [noun]." is flexible
- Waveform envelope can be adjusted: wider eruption = sustained impact, narrower = sudden spike
- P/S/Surface markers can be relabeled for different phase metaphors
- Add more seismograph channels (3-channel broadband) for complexity

---

*Claude Design Engine by Rahaman Bin Ujit*
