# Audio Waveform

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Best for:** Achievement posts, noise-vs-signal narratives, capability demonstrations, output/impact statements, "standing out from the crowd" messaging, any content where the metaphor is "everyone else is background noise, this is the signal that registered."

## Concept
A horizontal audio waveform where the stat IS the peak event. 210 vertical bars span the middle zone -- most are short noise-floor bars at low opacity, one dramatic cluster of tall red bars at center IS the signal. The "66" overlays the peak cluster. Audio engineering metadata frames the poster as a mixing console readout. The concept: most output is noise (short dim bars), real output is signal (tall red bars that nearly clip).

## Layout Structure (1080x1350)

| Zone | Position | Content |
|------|----------|---------|
| **Tag** | Top-left (68px) | "// Signal Analysis" in mono red 50%, 4px letter-spacing |
| **Rec indicator** | Top-right (42px) | Red dot (7px) with glow + "Recording" in mono red 50% |
| **Headline 1** | Top (100px) | "Most people" dim + "make noise." bold with red accent |
| **Headline 2** | Below (268px) | "I make signal." bold with red accent. 90px GAP from headline 1 = silence |
| **Channel label** | Above waveform (370px) | "Ch.01 // Mono // 48kHz / 24-bit" in 7px mono 10% white |
| **Clip indicator** | Top of waveform (390px) | Red box + "-0.1 dB // Peak" centered |
| **Waveform** | Middle (390-830px) | 210 bars centered, noise floor + peak cluster + stat overlay |
| **Stat** | Center of waveform | "66" at 180px #C83C32 with glow, peak labels above/below |
| **VU meter** | Left edge (400px) | 13 horizontal bars, white-to-red gradient = level meter |
| **dB scale** | Right edge (400-820px) | 0dB to -inf, top entries in red = hot zone |
| **Secondary stats** | Below waveform (880px) | 5 / 2 / 10x at 44px bold with labels and deltas |
| **Spectrum** | Below stats (982px) | 180 thin bars, frequency distribution, red mid-range |
| **Body** | Lower (1055px) | Two lines: observation (30% white) + conclusion (52% italic) |
| **Data panel** | Near bottom (1148px) | Sample rate, bit depth, peak, session info in 7px mono |
| **Identity** | Bottom (38px from bottom) | Name + role |

## Waveform Specs

- **Total bars:** 210, width 2.5px, gap 2px, border-radius 1px
- **Noise floor:** 3-18px height, rgba(255,255,255, 0.07) quiet / 0.12 medium
- **Occasional bumps:** 18-46px at 12% white for texture (~12% probability)
- **Peak cluster:** 28 bars centered, heights 60-400px
  - Inner bars (intensity > 0.6): `signal-peak` class, #C83C32, box-shadow 6px/16px red glow
  - Outer bars: `signal` class, rgba(200,60,50,0.70), box-shadow 3px
- **Buildup/decay zone:** 18 bars flanking peak, graduated heights 8-70px, transitioning from red to white
- **Center line:** 1px, 5% white, full width
- **Peak glow:** Radial gradient 350x440px, rgba(200,60,50,0.06)

## Typography

- **Tag:** Space Mono, 9px, rgba(200,60,50,0.50), letter-spacing 4px
- **Headline dim:** Space Grotesk, 54px, weight-300, 18% white
- **Headline bold:** Space Grotesk, 72px, weight-700, 92% white
- **Headline signal:** Space Grotesk, 76px, weight-700, 95% white (slightly larger/brighter than noise line)
- **Red accent words:** #C83C32 with text-shadow 50-60px/100-120px glow
- **Stat number:** Space Grotesk, 180px, weight-700, #C83C32 with 80px/160px glow
- **Stat labels:** Space Mono, 9px, red 40-45%, letter-spacing 4-6px
- **Secondary stats:** Space Grotesk, 44px, weight-700, 88% white
- **Stat labels:** Space Mono, 8px, 18% white, letter-spacing 3px
- **Body line 1:** Space Grotesk, 22px, weight-300, 30% white
- **Body line 2:** Space Grotesk, 22px, weight-400, 52% white, italic
- **Metadata:** Space Mono, 7px, 10% white, highlights in red 28%

## Atmospheric Elements

- **VU meter left edge:** 13 horizontal bars (width 10px), stacked vertically. Bottom 9 in white 4-12%, top 4 in red 15-40%
- **dB scale right edge:** 0dB to -inf labels, 0dB/-3dB in red 30%, rest at 10% white
- **Clip indicator:** Red 6px box (50% opacity, glow) + mono label centered above peak
- **Recording dot:** 7px red with box-shadow glow, top-right
- **Frequency spectrum:** 180 bars (2px wide), freq distribution (low=tall, high=short). Mid-range bars (index 40-90) in red 12%, rest in white 4%
- **Faded bg "66":** 500px, 1.2% white, behind stat zone
- **Corner L-brackets:** 22px, 1px, 5% white
- **SVG noise:** 2.5%

## Color Usage

- Background: #0A0A0A
- Peak bars + stat + accent words: #C83C32
- Noise floor bars: white 7-12%
- VU meter: gradient white-to-red
- dB hot zone: red 30%
- Body text: white 30% / 52%
- Metadata: white 10%

## Key Design Principles

1. The 90px GAP between "make noise." and "I make signal." is the most important decision -- silence between noise and signal
2. The waveform IS the poster -- the contrast between flat noise floor and dramatic peak cluster IS the visual argument
3. "66" exists at the point of maximum amplitude -- position = meaning
4. Red is used as both warning color (clipping) and identity color -- being in the red zone is the POINT
5. The signal line is slightly larger/brighter than the noise line (76px vs 72px) = the signal has more amplitude
6. VU meter and dB scale frame the waveform as professional audio equipment, not decoration
7. Frequency spectrum adds a secondary data layer -- the signal's energy is in the human sweet spot
8. Audio metaphor extends to secondary stats: channels, tracks, gain (not generic labels)

## File Size

- PNG: ~15.26MB
- JPEG 95%: ~2.17MB (use this for LinkedIn)

## Reference

- v121a: first iteration, noise bars too faint, headlines too close
- v121b: final (Example: V121B poster)
- Score: 4/5

---

*Claude Design Engine by Rahaman Bin Ujit*
