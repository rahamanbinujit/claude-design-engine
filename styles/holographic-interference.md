# Style: Holographic Interference

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Two sets of SVG concentric circles from opposing corners create a moire interference pattern across the poster. The headline sits in the "calm" zone where interference is sparse. The stat number sits at the densest convergence node with prismatic holographic text-shadow. Optics meets data poster. Best for convergence narratives, synthesis themes, and "separate forces combining into something greater" posts.

## Example
Example: Holographic Interference poster

## Layout (1080x1350)

```
Source A (dot) ─────────────────────────────────────
│ META (8px mono, 10% white)                        │
│                                                    │
│ They Said (68px, 300, 14% white)                   │
│ One Person (76px, 700, 92% white)                  │
│ Cannot Run (76px, 700, #C83C32)                    │
│ A System (76px, 700, 92% white)                    │
│        [calm zone — sparse interference]           │
│                                                    │
│              ~~~~ moire zone ~~~~                  │
│                    66                              │
│            (260px, prismatic glow)                 │
│           AI SKILLS DEPLOYED                       │
│              ~~~~ moire zone ~~~~                  │
│                                                    │
│ Two wave sources. One convergence point.           │
│ The interference was always constructive.          │
│                                                    │
│ META (centered, 8px mono)                          │
│ ─────────────────────────────────────              │
│ Rahaman Bin Ujit           Source A/B coords       │
─────────────────────────────────── Source B (dot)
```

## Key Elements

### Interference Pattern (Background)
- **Source A:** 55 concentric circles from (0,0), spacing 32px
- **Source B:** 55 concentric circles from (1080,1350), spacing 32px
- Strokes: 0.5-0.8px, opacities 0.05-0.10 (peak at mid-range)
- Where both sources overlap densely, natural moire pattern emerges
- 3 red interference rings at convergence zone (r:180/220/260)

### Source Indicators
- 8px white dots at top-left (28,28) and bottom-right corners
- Subtle glow (12px white), labels in 7px mono ("Source A/B")

### Prismatic Stat
- 260px bold #C83C32
- 7-layer text-shadow: red glow (primary), purple shift (4px, 10%), blue shift (2px, 8%)
- Creates holographic color separation effect

### Spectral Band
- 200px horizontal gradient at stat height
- rgba(200,60,50) cycling 0.04 to 0.08 opacity

### Prismatic Refraction Lines
- 1px horizontal gradients above/below stat
- Color cycle: transparent > red > purple > blue > transparent at 3-6%

### Convergence Glow
- 600px radial gradient centered on stat
- rgba(200,60,50,0.08) center, fading to transparent

### HUD Elements
- Wavelength scale: right edge, 400-700nm in 7px mono 9% white with tick marks
- Coherence meter: left edge vertical, rotated 180deg
- Node marker: 6px red dot with glow + "NODE 66" label
- Bottom meta: wavelength, pattern, fringes, coherence

## Typography

| Element | Size | Weight | Color | Position |
|---|---|---|---|---|
| Meta top | 8px mono | 400 | 10% white | Top, spread |
| Headline dim | 68px | 300 | 14% white | Upper-left calm zone |
| Headline bright | 76px | 700 | 92% white | Upper-left calm zone |
| Headline red | 76px | 700 | #C83C32 | Upper-left calm zone |
| Stat number | 260px | 700 | #C83C32 + prismatic | Center convergence |
| Stat label | 10px mono | 400 | red 45% | Below stat |
| Body | 23px | 300 | 28% white | Bottom-third left |
| Author name | 13px | 500 | 45% white | Bottom bar |
| Author role | 8px mono | 400 | 18% white | Bottom bar |

## Text Placement Logic
1. Headline in **calm zone** (upper-left) where interference is sparse = clarity before complexity
2. Dim "They Said" = fading objection lost in the wave pattern
3. "66" at **densest interference node** = convergence point, everything meets here
4. Prismatic shadow = holographic, existing in multiple dimensions
5. Body at **bottom-third** = grounding, explaining the metaphor
6. Source labels at **extreme corners** = origins are tiny, convergence matters

## Best For
- Convergence narratives ("everything came together")
- Synthesis themes ("combining skills/inputs into one system")
- "Separate forces creating something greater" posts
- Scientific/precision aesthetics
- Achievement posts with a "constructive" energy

## Colors
- Background: #0A0A0A
- Primary accent: #C83C32 (brand red)
- Text: 14-92% white (hierarchy via opacity)
- Prismatic shifts: purple rgba(120,60,200), blue rgba(50,140,220) at 6-10%
- Interference lines: 5-10% white

## File Size
- PNG: ~16.5MB (4x scale, 4320x5400px)
- JPEG 95%: ~2.7MB

---

*Claude Design Engine by Rahaman Bin Ujit*
