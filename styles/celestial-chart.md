---
name: celestial-chart
experiment: v210
status: KEEP
quality-score: 4
---

# Celestial Star Chart Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Astronomical celestial atlas / star chart. Skills mapped as constellations on a circular star chart, with the builder as the central pole star. Deep navy background with cream stars and gold accents.

## Color Palette
- Background: `#070B1A` (deep navy-black)
- Chart inner: `#0D1428` (slightly lighter navy, radial gradient)
- Stars/text: `#E8DCC0` (warm cream)
- Borders/accents: `rgba(180, 160, 120)` at various opacities (muted gold)
- Constellation colors (soft, desaturated):
  - AI Systems: `rgba(140, 175, 220)` (steel blue)
  - Content: `rgba(200, 170, 100)` (warm gold)
  - Video: `rgba(160, 200, 160)` (sage green)
  - Marketing: `rgba(200, 130, 130)` (dusty rose)
  - Brand: `rgba(180, 150, 200)` (lavender)
  - Analytics: `rgba(200, 180, 120)` (amber)
  - Sales: `rgba(160, 180, 180)` (teal-grey)

## Typography
- **Title:** Cormorant Garamond 300, 42px, letter-spacing 8px, uppercase
- **Constellation labels:** Cormorant Garamond 600, 11-12px, letter-spacing 2-3px, uppercase
- **Descriptive/italic text:** IM Fell English italic, 13-15px
- **Metadata/counts:** JetBrains Mono 300, 8-9px, letter-spacing 1-4px

## Layout Rules (1080x1350)
- Double border frame (outer 1px + inner 0.5px, muted gold)
- Corner ornaments (simple L-bracket SVG)
- Title zone: top 15% with plate number, title, divider, subtitle
- Central circular chart: ~720px diameter, centered
- Concentric declination rings at 120/190/260px radius
- Right ascension crosshairs (vertical, horizontal, two diagonals)
- Tick marks every 10/30 degrees around circle edge
- Legend row below chart with colored dots + labels
- Footer: quote + metadata + credits

## Key Techniques
- SVG constellation lines at 0.8px stroke, 35% opacity
- Stars as circles with varying radius (2.5-4.5px) and opacity (0.7-0.95) for magnitude
- Background stars (tiny, 0.7-1.2px, 15-35% opacity) for depth
- Central pole star with triple-circle glow (6px/3px/1.5px)
- `paint-order: stroke` with dark stroke (4-5px) on ALL text for halos over lines
- Subtle noise texture overlay at 8% opacity
- Linear gradients for dividers (transparent to gold to transparent)

## Best For
- Personal brand storytelling (skills as constellations)
- "One person, many skills" narrative
- Scientific/intellectual positioning
- Dark, premium aesthetic posts

## What Makes It Work
- The circular chart IS the design -- everything else serves it
- Constellations have different sizes proportional to skill counts
- Central pole star (the builder) anchors everything
- Scientific precision (tick marks, coordinates, cardinal directions) creates authenticity
- Muted constellation colors prevent visual chaos on dark background
- The metaphor is natural: skills as stars, connected into constellations, orbiting one observer

---

*Claude Design Engine by Rahaman Bin Ujit*
