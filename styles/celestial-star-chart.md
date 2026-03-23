---
name: celestial-star-chart
experiment: v150
quality-score: 4
status: KEEP
---

# Celestial Star Chart -- Style Spec

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Core Concept
Astronomical star chart where each star is a skill and constellations are skill clusters forming a system. The poster simulates a celestial survey: concentric grid, coordinate labels, ecliptic arc, constellation lines, scattered field stars. The central metaphor: stars are common (everyone has skills), but constellations require an astronomer who sees the PATTERN and draws the lines. "66" sits at the chart center as the pole star -- the fixed reference point.

## Visual Elements

### Celestial Grid
- 4 declination ellipses centered on chart midpoint (0.016-0.028 opacity, 0.4-0.6px)
- 4 primary RA lines through center (0.016-0.022 opacity, 0.4-0.5px)
- 2 supplementary dashed RA lines (0.010 opacity, 0.3px, dash 3,8)
- Grid center at approximately (540, 480) -- upper portion of poster

### Constellations (SVG)
- **Common-skill constellations (white):** 6 groups positioned at chart PERIPHERY
  - Stars: 2.0-3.0px radius, 0.22-0.45 opacity white, brightest stars get glow filter
  - Lines: 0.06-0.09 opacity white, 0.5-0.7px stroke
  - Labels: 8px Space Mono, 0.13 opacity white, letter-spacing 2.5px
  - Examples: MARKETING, ANALYTICS, CONTENT, VIDEO, STRATEGY, GROWTH

- **Rare-skill constellations (red):** 3 groups positioned at chart CENTER and LOWER zones
  - Stars: 2.0-4.0px radius, 0.25-0.60 opacity #C83C32, brightest with glow filter
  - Lines: 0.07-0.16 opacity red, 0.6-0.9px stroke
  - Labels: 8-9px Space Mono, 0.25-0.35 opacity #C83C32, letter-spacing 2.5-3px
  - AI SYSTEMS = largest constellation (7 stars), brightest, at dead center
  - AUTOMATION and BRAND = secondary red constellations, lower quadrants

### Ecliptic
- Dashed red bezier arc sweeping diagonally across chart
- 0.07-0.08 opacity #C83C32, 0.8px stroke, dash 5,10
- Small "ECLIPTIC" label at arc start in 7px mono, 0.16 red

### Scattered Field Stars
- 40+ unnamed stars at varying positions across entire chart zone
- Sizes: 0.4-1.4px radius (smaller = more distant)
- Opacities: 0.03-0.16 (dimmer = more distant)
- 10+ "deep field" stars at 0.4px/0.03 opacity for extreme depth
- No lines connecting these -- they're uncataloged ambient light

### Coordinate Labels
- RA labels along left edge: 0h, 4h, 8h, 12h, 16h in 7px mono, 0.07 white
- DEC labels along top: +60, +30, 0, -30, -60 in 7px mono, 0.06 white
- Small tick marks below DEC labels (0.04 opacity, 0.5px)

### Stat ("66")
- 160px bold #C83C32, centered at chart midpoint
- Elliptical radial glow behind: 400x300px, 7% red center -> transparent
- "Cataloged Stars" label below in 10px Space Mono, 0.20 white, letter-spacing 4px

### Chart/Text Divider
- 1px horizontal line at ~890px (66% of poster height)
- Gradient: transparent -> 5% white -> 8% red center -> 5% white -> transparent
- Separates the visual argument (sky) from the verbal argument (ground)

## Typography

### Tag (top-left)
- "/// Celestial Survey /// Epoch 2026.0"
- 10px Space Mono, letter-spacing 3px, 0.20 white
- "Epoch 2026.0" in 0.40 red

### Catalog ID (top-right)
- "Cat. SYS-066"
- 10px Space Mono, letter-spacing 2px, 0.35 red

### Headline (below divider, ~930px)
- Whisper: 46px Space Grotesk weight-300, 0.15 white, letter-spacing -1px
- Bold: 62px Space Grotesk weight-700, 0.93 white, letter-spacing -2px
- Accent word in italic #C83C32

### Body (below headline)
- 17px Space Grotesk weight-300, 0.20 white
- Italic accent phrase at 0.42 white

### Punchline (below red separator)
- 16px Space Grotesk weight-300 italic, 0.35 white
- Format: "[stat] stars. [count] constellations. One astronomer."

### Data Panel (bottom-right, aligned with body)
- 9px Space Mono, letter-spacing 1.5px, 0.12 white
- Values in 0.45 red
- 4 rows: Chart / Stars / Constellations / Observer

### Identity Bar (bottom, 48px from edge)
- Name: 9px Space Mono, letter-spacing 3px, 0.10 white
- Role: 8px Space Mono, letter-spacing 2px, 0.07 white

## Layout Zones
- **Chart zone (top 65%):** Stars, constellations, grid, ecliptic, stat, coordinates
- **Text zone (bottom 35%):** Headline, body, punchline, data panel, identity
- Ghost text ("CHART") at 480px/0.8% white, rotated -8deg, behind chart
- Corner brackets at 36px from edges, 20x20px, 0.05 white

## Color Coding Logic
- White stars/constellations = common, accessible, anyone can see them
- Red stars/constellations = rare, deep, require knowing where to look
- The progression from periphery (white, common) to center (red, rare) = the skill depth gradient

## When to Use This Style
- Pattern-recognition / systems-thinking posts
- "Seeing what others miss" positioning
- Skill connection narratives (the value is in the connections, not individual parts)
- Builder positioning where insight > raw capability
- Any content where the metaphor is "individual parts are common, the pattern is rare"

## File Sizes
- PNG: ~1.1MB
- JPEG 92%: ~610KB

---

*Claude Design Engine by Rahaman Bin Ujit*
