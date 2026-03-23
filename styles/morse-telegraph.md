# Morse Telegraph

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Category:** Data-instrument poster
**Format:** 1080x1350 (4:5 portrait)
**Background:** #0A0A0A
**Fonts:** Space Grotesk (headlines), Space Mono (labels/metadata)
**Colors:** White (dim/noise zone), #C83C32 red (signal zone), brand palette

## Concept
Signal vs noise. The canvas is divided into two zones by a horizontal transmission line. Above = noise (dim, scattered, white morse patterns encoding common/surface-level skills). Below = signal (bold, focused, red morse patterns encoding deep/rare skills). The morse code is real -- each pattern spells out an actual skill name.

## Visual Elements
- **Morse patterns:** Dots (6px circles) and dashes (20px rounded rects) encoding skill names. Noise zone at 9% white. Signal zone at 22% red (standard) or 38% red (bright-signal).
- **Morse labels:** 7px Space Mono above each pattern identifying the decoded word. Noise zone at 16% white. Signal zone at 38% red.
- **Transmission line:** Horizontal gradient line at ~y=780 (transparent -> red 35% center -> transparent). 1px with 3px glow blur.
- **Waveform SVG:** At transmission line height. Flatline noise (left/right, 10% white) with signal burst center section (35% red, zig-zag amplitude peaks).
- **Signal strength bars:** Top-right. 7 ascending bars, first 4 dim (6% white), last 3 active (30% red).
- **Telegraph key:** Bottom-center. Tiny red contact point (3px with 12px/30px glow) + gradient arm.
- **Corner L-brackets:** 7% white, 20px.
- **Left accent stripe:** 3px, gradient peaking at transmission line height.
- **Ghost "66":** 600px, 1.3% white, centered behind.
- **Red ambient glow:** Radial gradient at transmission line height, 6% red.
- **SVG noise:** 2.5% opacity.

## Typography Placement
1. **"They broadcast noise."** -- Top-left, 52px, weight-300, 14% white. "n o i s e." with 8px letter-spacing = the word physically disintegrates like a degraded signal. Lives IN the noise zone surrounded by scattered dim morse patterns.
2. **"I transmit signal."** -- At ~y=700 (just above transmission line), 58px, weight-700, 93% white. "signal." in #C83C32 with 40px+80px red glow. The text sits ON the signal path. Weight jump from 300 to 700 IS the signal-to-noise ratio.
3. **Body** -- At ~y=870. Dim lines (22% white) describing the noise behavior + red rule + italic bright lines (50% white) describing the signal behavior.
4. **"66"** -- 180px bold #C83C32, bottom-left, with 60px/120px glow. Morse encoding (-.... -....) below in 8px red dots/dashes at 50% with glow.
5. **Secondary stats** -- Bottom-right, 36px bold 85% white, with signal-themed deltas (+channels, +frequencies, +amplitude).

## When to Use
- Signal-to-noise messaging
- Clarity/focus content
- Anti-noise positioning ("cut through the clutter")
- Communication/broadcasting metaphors
- Quality over quantity arguments
- "While everyone else is loud, I'm clear"

## Tested
v132 (2026-03-20). Score: 4. 13MB PNG / 2.0MB JPEG 95%. KEEP.

---

*Claude Design Engine by Rahaman Bin Ujit*
