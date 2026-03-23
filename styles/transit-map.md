---
name: transit-map
description: Transit/subway system map style inspired by Vignelli's 1972 NYC subway map. Strict 45°/90° angles, distinct colored route lines, transfer station markers, dark header/footer.
---

# Transit Map Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Palette
- Background: #F5F3EE (cream/off-white, like real transit maps)
- Header/Footer: #1A1A2E (dark navy)
- Route lines: 7 distinct saturated colors, one per line
- Station dots: same color as route line
- Transfer stations: white circle with dark stroke
- Text: #2A2A3A on cream, white on dark

## Typography
- Headlines: Inter 800, 28px, wide letter-spacing (0.12em)
- Station names: Inter 500, 9.5px
- Transfer labels: Inter 700, 10.5px
- Metadata: JetBrains Mono 400, 8-9px

## Composition
- 3-zone vertical: dark header (transit authority branding) → cream map area → dark legend
- SVG polylines at strict 45° and 90° angles only (Vignelli rule)
- Station dots: small circles (r=5) on route lines
- Transfer stations: larger white circles (r=9) with dark stroke
- Routes fill the canvas, not geographically accurate — schematic
- Subtle grid pattern on cream background

## Key Principles
- Each route line = one distinct color, no gradients
- Consistent station marker size throughout
- Single typeface family (Inter) for unity, mono for metadata
- "You Are Here" marker for storytelling
- Legend with color bars, line names, and station counts
- Transfer stations at skill intersections

## Best For
- Skill system visualization
- Career path mapping
- "How it all connects" storytelling
- Portfolio/capability overviews

## Never
- Geographic accuracy — this is a schematic
- More than 8-9 route colors
- Curved lines (45°/90° only)
- Heavy text — let the map be visual

---

*Claude Design Engine by Rahaman Bin Ujit*
