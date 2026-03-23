# Zine Collage Cutlines

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Style ID:** zine-collage-cutlines
**Quality Score:** 4/5 — KEEP
**Best for:** Personal brand, positioning, manifesto, opinion posts

## Concept
Poster divided into 4-6 irregular zones by hand-drawn-style SVG wavy cut lines. Each zone holds one piece of content (headline / stat / quote / tag). Zones have slightly different background shades. Zine-style controlled chaos with overlapping elements at zone boundaries. Soft brutalism meets editorial paste-up.

## Specs

### Dimensions
- 1080x1350px (4:5 LinkedIn portrait)
- Export: Puppeteer, deviceScaleFactor: 4, headless: 'shell'

### Zone System
- 6 zones with CSS `clip-path: polygon()` for irregular boundaries (NOT clean rectangles)
- Zone shades (subtle differentiation): #080808, #0A0A0A, #0F0F0F, #111111, #141414
- One zone uses solid #C83C32 red as accent panel
- Zone content types: tag, hero stat, headline, quote, stats grid, author bar

### SVG Cutlines (the defining feature)
- Hand-drawn wavy paths using Q (quadratic) curves -- imperfect, organic
- Main line: white, 3px stroke, 20-22% opacity, stroke-linecap: round
- Echo/shadow line: red #C83C32, 1.5px stroke, 12-14% opacity, dashed (stroke-dasharray varies per line)
- 3 horizontal cuts + 2 vertical cuts (vertical only span their section, not full height)
- Lines must wave -- amplitude 20-40px, period ~200px, each line unique

### Intersection Markers
- Where horizontal and vertical cuts cross: red circle (r=6, 35% opacity) + crosshair lines
- Creates registration mark / print alignment energy

### Boundary Chaos Elements
- Tick marks: short perpendicular lines along cuts (10% white opacity)
- X-marks: at 2-3 random boundary points (red, 25% opacity, slight rotation)
- "CUT HERE ---" and "--- FOLD LINE" labels: Space Mono, 10-11px, red 50% opacity, slight rotation
- Tape fragments: semi-transparent bordered rectangles at zone boundaries (6% white opacity bg, 1px border)
- Red tape blocks at vertical cuts: red bg 8% opacity, slight rotation
- Stray scratch marks and dots scattered lightly

### Typography
- Headlines: Space Grotesk 700, 72-76px, white, letter-spacing -2.5px
- Red accent word in headline
- Stats: Space Grotesk 700, 160-170px for hero stat
- Tags: Space Mono, 13px, 4px letter-spacing, red border
- Labels: Space Mono, 11-13px, uppercase, 30-50% opacity
- Quote: Space Grotesk 400 italic, 24-25px, red left border

### Crop Marks
- All 4 corners: thin crosshair lines (24px, 10% white opacity)

## What Makes It Work
- The wavy imperfect cuts are the hero -- they create the entire visual identity
- Irregular clip-paths prevent the clean-grid trap (zones must NOT be rectangles)
- Tape fragments and stray marks sell the hand-assembled feel
- Shade differentiation between zones creates depth without color
- The red panel zone provides the one bold accent moment
- Content stays fully readable despite the chaos -- chaos is in the STRUCTURE, not the text

## Never
- Clean straight dividers (defeats the concept)
- More than 6 zones (gets cluttered)
- Symmetric zone sizes (kills the zine energy)
- Overlapping text across zones (readability first)
- Headline below 60px

---

*Claude Design Engine by Rahaman Bin Ujit*
