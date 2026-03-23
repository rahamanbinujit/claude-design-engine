# Seismograph Line

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Category:** Data / Impact / Scientific Instrument
**Best for:** Data-driven posts, breakthrough moments, before/after comparisons, impact metrics, "the moment everything changed" narratives
**Tested:** v64b (Score 4/5, KEEP)

## Concept
A single continuous SVG polyline runs horizontally across the poster like a seismograph/heartbeat reading. Mostly flat with low-amplitude noise, then a dramatic spike at the stat position. The headline connects to the visual metaphor (flatline vs spike, calm vs impact). Scientific instrument aesthetic with subtle grid, scale marks, timestamps, and channel annotations.

## Layout (1080x1350)
- **Tag:** Top-left, 11px Space Mono, 6px letter-spacing, 28% white
- **Headline:** Below tag, 78px Space Grotesk bold, -2.5px tracking, accent phrase in #C83C32
- **Seismograph band:** Full-bleed (edge-to-edge, negative margins), 320px tall
- **Stat:** Positioned above spike peak, 140px bold #C83C32 with 11px mono label
- **Timestamps:** Below seismo band, 9px mono, 14% white, active timestamp in red 35%
- **Body text:** 24px, 42% white, max-width 780px
- **Secondary stats:** Row of 3, 38px bold white numbers, 10px mono labels at 25% white
- **Author bar:** Bottom, 15px name at 50% white, 10px title at 20% white, 6% white border-top

## The Seismograph Line
Built as SVG polyline segments:

1. **Calm left section:** White at 18% opacity, 2px stroke. Low-amplitude noise (3-5px vertical variation). ~40% of width.
2. **Pre-spike buildup:** White at 25% opacity, 2.5px stroke. Growing amplitude (10-40px swings). ~10% of width.
3. **The spike:** #C83C32 at 90% opacity, 3px stroke. Dramatic zigzag -- alternating high peaks and low valleys. Reaches near top of band (~30px from top). ~10% of width.
4. **Spike down + aftershock:** #C83C32 at 65% opacity, 2.5px stroke. Diminishing oscillations returning toward baseline. ~10% of width.
5. **Post-spike settling:** White at 20% opacity, 2px stroke. Brief transition. ~5% of width.
6. **Calm right section:** White at 10% opacity, 1.5px stroke. Flat, fading. ~25% of width.

### Glow effect
Two additional polylines behind the spike zone (same path):
- 10px stroke at 6% #C83C32 opacity
- 20px stroke at 3% #C83C32 opacity
Creates subtle red halo without using drop shadows.

### Peak marker
A 1px vertical gradient line (red 20% to 3%) behind the spike zone, full height of the band.

## Grid & Annotations
- **Background grid:** 9 vertical + 9 horizontal lines at 1.8% white, 0.5px. Center lines slightly brighter (2.5%).
- **Baseline:** Dashed line at seismo midpoint, 3% white, dasharray 6,12.
- **Scale labels:** Left edge of seismo band: +100, +50, 0, -50 in 8px mono at 8% white.
- **Timestamps:** 7 evenly spaced below seismo band. The one aligned with the spike is tinted red.
- **Channel info:** Top-right corner. "REC CH-01" with small red dot (5px, 55% opacity). "250 SPS" below.
- **Side annotations:** Rotated 90deg on left/right edges, 8px mono at 8% white. Instrument-style labels.

## Color Specs
| Element | Color | Opacity |
|---|---|---|
| Background | #0A0A0A | 100% |
| Headline | #FFFFFF | 100% |
| Accent text | #C83C32 | 100% |
| Calm line | #FFFFFF | 10-18% |
| Spike line | #C83C32 | 65-90% |
| Spike glow | #C83C32 | 3-6% |
| Body text | #FFFFFF | 42% |
| Grid lines | #FFFFFF | 1.8-2.5% |
| Annotations | #FFFFFF | 8-14% |
| Stat number | #C83C32 | 100% |
| Active timestamp | #C83C32 | 35% |

## Typography
| Element | Font | Size | Weight | Tracking |
|---|---|---|---|---|
| Tag | Space Mono | 11px | 400 | 6px |
| Headline | Space Grotesk | 78px | 700 | -2.5px |
| Stat number | Space Grotesk | 140px | 700 | -5px |
| Stat label | Space Mono | 11px | 400 | 5px |
| Body | Space Grotesk | 24px | 400 | 0 |
| Secondary stat | Space Grotesk | 38px | 700 | -1px |
| Timestamps | Space Mono | 9px | 400 | 1px |
| Scale/annotations | Space Mono | 8px | 400 | 3px |

## Headline Writing Guide
The headline should mirror the seismograph metaphor. Use contrast between calm/flat and spike/impact:
- "Most Teams Flatline. Mine Spiked."
- "The Signal Was Always There. Nobody Was Listening."
- "Noise for Months. Then One Spike Changed Everything."
- "Everyone Saw a Flatline. I Saw a Pattern."

## Notes
- The seismo band goes full-bleed (negative left/right margins equal to container padding) for maximum visual impact
- The spike should feel dramatic but not cartoonish -- 8-14 alternating peaks/valleys with diminishing amplitude
- Keep the calm sections genuinely calm (3-5px noise max) so the spike contrast is stark
- The stat number sits ABOVE the spike, not overlapping it
- File size stays small (~473KB) due to SVG-based graphics

---

*Claude Design Engine by Rahaman Bin Ujit*
