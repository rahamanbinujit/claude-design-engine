# Data-Vis Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5 | **Status:** KEEP | **First used:** V32

## Concept
Data visualization as the hero element. Instead of displaying a stat as text ("66 skills"), visualize it as a chart element -- dot matrix grid, progress bar, radial gauge. The data IS the poster. Communicates the number visually before text is even read.

## Best For
- Stats-heavy posts (quantified achievements, data reveals)
- System/capability posts ("66 skills", "5 integrations", "10x output")
- Any post where one number is the main message

## Layout Structure
```
[TAG — mono, red, uppercase, letter-spacing 4px]

[HEADLINE — 64px bold, number in red]
[SUBLINE — 24px, 60% opacity]

        [DOT MATRIX GRID — 640x640, centered]
        [10x10 grid of circles]
        [Filled = #C83C32 with glow]
        [Empty = #2A2A2A with border]

        [STAT CALLOUT — big number + label]

[AUTHOR BAR — name + dot + title, bottom]
```

## Specs
- **Canvas:** 1080x1350 (4:5), #0A0A0A bg
- **Dot grid:** 10x10, 640x640px, gap 12px, centered
- **Filled dots:** #C83C32, box-shadow 0 0 8px rgba(200,60,50,0.25)
- **Empty dots:** #2A2A2A, 1px border #333333
- **Headline:** Space Grotesk 64px 700, number in #C83C32
- **Subline:** Space Grotesk 24px 400, #F5F5F5 at 60% opacity
- **Stat number:** 96px 700 #C83C32, denominator 48px 400 #F5F5F5 at 50%
- **Stat label:** Space Mono 18px, #F5F5F5 at 50%
- **Tag:** Space Mono 16px, #C83C32, uppercase, letter-spacing 4px
- **Author:** Space Grotesk 18px 600 name + Space Mono 13px title at 40%
- **Padding:** 80px top/bottom, 72px sides

## Variations
- **Dot matrix** (default): 10x10 grid, filled count = stat value. Best for X-out-of-100 type stats.
- **Progress bar:** Horizontal track with filled portion. Best for percentage/completion stats.
- **Radial gauge:** Circular arc fill. Best for single percentage stats.
- **Bar chart:** Simple horizontal bars comparing 2-3 values. Best for comparison stats.

## Key Learnings
- Grid must be large enough to dominate (560-640px) -- it IS the hero
- Unfilled dots need visible contrast from background (use #222222+ with border, not #1A1A1A)
- Don't double-represent the same data (e.g., dot grid AND progress bar showing same stat)
- Dot glow adds subtle depth without violating no-drop-shadow rule
- Generates via JavaScript (loop creating dot elements), keeps HTML clean
- V36 refinement: 560px grid with stronger glow (16px), #222 empty dots with #333 border, legend labels below grid, bottom bar with stat left + author right. More minimal text focus -- "data as art" where the grid IS the poster with minimal supporting copy.
- Smaller grid (560px) still reads well and leaves more room for headline/stats
- Legend below grid helps interpretation without cluttering the visual

## Reference
- Example: Data Vis poster / `v32-data-vis.jpg` (original)
- Example: Dot Matrix Grid poster / `v36-dot-matrix-grid.png` (refined, minimal text variant)

---

*Claude Design Engine by Rahaman Bin Ujit*
