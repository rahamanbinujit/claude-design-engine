---
name: cathode-oscilloscope
source: v148
quality-score: 4
status: KEEP
---

# Cathode Oscilloscope Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


Vintage CRT oscilloscope aesthetic. A complex Fourier waveform displayed on a dark CRT screen with phosphor glow, scan lines, and measurement readouts. The concept: every complex signal is the superposition of simple harmonics. Skills are frequency components contributing to one composite waveform.

## Layout

- **Canvas:** 1080x1350, #0A0A0A background
- **CRT Bezel:** Rounded rectangle (20px radius), dark fill (#050505-#080808), border 1.5px at 5% white, corner screws (8px circles with slot lines), model plate label centered at bottom
- **CRT Screen:** Inset 24px from bezel edges, 14px radius. Heavy inset box-shadow vignette (3 layers: 60px/120px/200px blur at 0.95/0.7/0.4 opacity). Background #010103. Subtle phosphor tint radial gradient at center (brand red at 1.5% opacity)
- **Scan Lines:** repeating-linear-gradient, 1.5px transparent / 1.5px at 20% black, full-screen overlay at z-index 15
- **Grid:** 10x8 divisions via SVG lines at 3.5% white, center cross at 6% white. Minor tick marks on center axes at 4% white

## Waveform

- **Composite trace:** Complex SVG path (cubic beziers) with multiple peaks/troughs at varying amplitudes -- NOT a simple sine wave. Must look like Fourier superposition. Stroke #C83C32 at 1.8px, round linecaps
- **Phosphor glow:** 4-layer drop-shadow filter (2px at 0.8, 6px at 0.4, 14px at 0.2, 30px at 0.1) all in brand red
- **Phosphor bloom:** Same path duplicated at 8px stroke width, 6% opacity, offset 1-2px down = the soft glow around the trace
- **Ghost harmonics:** 3-5 individual sine wave SVG paths behind the composite at decreasing opacity (0.06 down to 0.025). Each represents a single frequency component. Wider wavelength = lower frequency = more fundamental skill

## Measurements

- **Peak-to-peak "66":** Positioned at the amplitude measurement midpoint. Dashed vertical line with horizontal brackets at peak and trough. "66" in red mono at 28px bold, "Vpp" below at 7px dim
- **Trigger level:** Small triangle arrow at left edge of screen + dashed line
- **Readout panel:** Top-left of screen. Mono 8px. Vpp (red), Freq, Rise time, THD values
- **Spectrum bar:** Top-right of screen. 6 rows with skill labels + gradient-filled bars (width = relative amplitude). Skills ordered f1-f6 from fundamental (MARKETING) to highest harmonic (AI SYSTEMS)

## Frequency Labels

Along bottom of CRT screen. Mono 7px. Progressive brightness: common skills (f1 MARKETING) at 10% white, rare skills (f6 AI SYSTEMS) at 40% red. Labels correspond to harmonic numbers.

## Control Panel

Below bezel at ~788px top. 6 groups spaced evenly: Sweep, Gain, Trigger, Coupling, BW Limit, Mode. Each has:
- Label: mono 7px, 12% white, wide letter-spacing
- Dial: 32px circle, 1px border at 8% white, radial highlight, tick indicator line
- Value: mono 10px, 30% white. "x66" and "Composite" in red (50%)

## Typography

- **Tag:** "/// Fourier Decomposition ///" top-left. Mono 10px, 18% white, 3px letter-spacing
- **Channel ID:** "SYS-066 / Ch1" top-right. Mono 10px, 45% red
- **Headline dim:** 46px, weight 300, 15% white. The surface observer
- **Headline bold:** 60px, weight 700, 93% white. Key word in italic red. The decomposition insight
- **Body:** 17px, weight 300, 22% white. Red rule separator (36px). Italic conclusion at 42% white
- **Data panel:** Right-aligned mono 8px, 10% white. Accent rows in 30% red

## Concept Mapping

| Oscilloscope Element | What It Represents |
|---|---|
| Composite waveform | The visible output of the system -- complex, unique, hard to replicate |
| Individual harmonics | The hidden skills that combine to create the composite |
| Peak-to-peak "66" | The amplitude/power of the full system |
| Frequency components | Skill categories (f1=fundamental/common, f6=highest/rarest) |
| Phosphor glow | The energy/intensity of the signal |
| Scan lines | The analog, physical nature of the instrument |
| Control knobs | The operator's mastery of the instrument |
| Trigger level | The threshold at which the system activates |

## Headline Pattern

"Everyone reads the surface wave." (dim, 300) / "I see all 66 harmonics." (bold, 700, "harmonics." in italic red)

---

*Claude Design Engine by Rahaman Bin Ujit*
