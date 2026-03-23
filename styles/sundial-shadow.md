# Style: Sundial Shadow

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Dark gnomonic sundial poster where a vertical gnomon casts a long diagonal shadow across the canvas. The shadow IS the measurement -- its length represents the stat "66" with tick marks along its edge. Time-as-metaphor: the gnomon stands still, the shadow extends. Astronomy/timekeeping meets data visualization.

## Example
Example: Sundial Shadow poster

## Layout (1080x1350)

```
+------------------------------+
| TAG (mono)          ID (red) |
|                          66  |  <-- "66" at shadow tip, upper-right
|                     .---*    |  <-- shadow tip with concentric rings
|                .---'         |  <-- shadow line (red, glowing)
|           .---'              |  <-- measurement ticks along shadow
|      .---'                   |
|  |--'                        |  <-- gnomon tip (white dot)
|  |                           |
|  |   (hour lines radiate)    |  <-- dashed lines from gnomon base
|  |                           |
|  O   MONO DATA STRIP         |  <-- gnomon base with rings
|                              |
| ~~~~~~~~~~~~divider~~~~~~~~~ |
|                              |
| They timed everything.       |  <-- 44px, weight 300, dim
| except growth.               |  <-- 64px, weight 700, "growth." italic red
|                              |
| Body text                    |
| Punchline                    |
|                    DATA PANEL|
+------------------------------+
```

## Structure

### Background
- `#0A0A0A` solid black
- SVG noise filter at 3% opacity
- Ghost "SHADOW" at 380px, 0.006 white, rotated -8deg
- Ghost "66" at 160px, 0.04 red, canvas center

### The Gnomon (left third, x=200)
- Vertical line from (200,780) to (200,380), 2.5px white (0.55), with subtle glow
- Base: filled circle (5px, 0.12 white) + 2 concentric rings (12px, 22px)
- Tip: filled circle (3px, 0.25 white) + ring (7px)
- Height annotation: vertical rotated mono text on left side
- Declination angle arc with degree label

### The Shadow (diagonal, lower-left to upper-right)
- Core line: 2.2px, #C83C32 at 0.38 opacity
- Glow: 12px width with Gaussian blur filter
- Penumbra: 28px and 22px wide at 0.025/0.020 red
- Extends from gnomon tip (200,380) to (920,200)
- Bleeds beyond canvas edge as dashed line to (1100,155)
- "STILL EXTENDING" label at canvas edge, 0.35 red

### Measurement Ticks (along shadow)
- Every 10 units: perpendicular tick marks + mono number labels
- Opacity gradient: 10-50 in white (0.09 to 0.15), 60 in red (0.22), 66 in red (0.35)
- Progressive brightening = increasing significance

### "66" at Shadow Tip
- 150px bold red at 0.16 opacity with glow filter
- Positioned at upper-right where shadow currently ends
- Shadow tip marker: 4.5px red dot (0.50) + 3 concentric rings

### Hour Lines (radiating from gnomon base)
- 9 dashed lines representing different hours
- Past hours (upper-left): white 0.045-0.062
- Current shadow direction: red 0.10
- Future hours (lower-right): white 0.022-0.035
- Roman numeral labels at line tips (VI-XIV)

### Mono Data Strip (below gnomon)
- GNOMON: ACTIVE (white 0.12)
- HOUR ANGLE: -23.4 (red 0.22)
- DECLINATION: NORTH (white 0.12)
- STATUS: EXTENDING (red 0.20)

### Text Zone (below divider at 920px)
- Red gradient divider (linear-gradient, transparent edges)
- **Headline 1:** 44px, weight 300, 14% white = passive observation
- **Headline 2:** 64px, weight 700, 93% white, key word in italic #C83C32 with text-shadow glow
- **Body:** 15.5px, weight 300, 22% white, italic line at 38%
- **Punchline:** 14px, weight 400, italic, 30% white
- **Data panel:** bottom-right, mono 8px, 10% white, status value in red 50%

## Colors
- Background: #0A0A0A
- White elements: rgba(255,255,255, varying)
- Red accent: #C83C32 / rgba(200,60,50, varying)

## Fonts
- Space Grotesk: headlines, ghost text, "66"
- Space Mono: tags, labels, data panel, measurement marks

## Core Concept
The gnomon (person/system) is fixed. The shadow (output/growth) moves and extends. Time reveals what clocks cannot measure. The shadow bleeds beyond the frame = still growing, uncapturable by conventional instruments.

## Best For
Posts about unmeasurable growth, patience, compounding effort, the gap between what clocks track and what actually matters.

---

*Claude Design Engine by Rahaman Bin Ujit*
