---
name: forensic-evidence-board
quality-score: 4/5
best-for: connections, systems-thinking, pattern-recognition, big-picture, seeing-what-others-miss
---

# Forensic Evidence Board

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


Detective's evidence board aesthetic. Red string web converging on a central suspect node. Each piece of evidence (skill card) is a clue. The connections between them solve the case.

---

## Visual Elements

### Canvas
- 1080x1350, #0A0A0A background
- SVG noise overlay at 2.5% opacity
- Corner brackets at 36px inset, 1px, 6% white

### Evidence Cards (Skill Nodes)
- 10-14 cards scattered asymmetrically with varied rotation (1-4 degrees)
- Each card: `Space Mono`, uppercase, 10px title, 7px evidence number
- Red pushpin (10px circle, #C83C32, 6px glow) centered above each card
- Card border: 1px, 5% white (common) or 18% red (rare)
- Card background: 1.5% white (common) or 4% red (rare)

### Card Hierarchy (spatial + visual)
| Zone | Position | Skills | Text Color | Border |
|------|----------|--------|------------|--------|
| Common | Top rows | Social Media, Templates, Email | 35% white | 5% white |
| Mid | Sides | Analytics, Copywriting, SEO, Video | 50% white | 5% white |
| Rare | Bottom rows | Automation, AI Systems, Brand Systems | 70% red | 18% red |

### Red String Web (SVG Paths)
- **Primary strings** (card to center): Quadratic bezier paths, #C83C32, 1-1.2px stroke, 0.12-0.25 opacity. Rare skill strings are thicker/brighter.
- **Cross-connections** (card to adjacent card): 0.6px stroke, 0.06-0.10 opacity. Creates web density.
- **Diagonal connections** (non-adjacent cards): 0.4px stroke, 0.04-0.06 opacity. Background web.
- **Long-range "aha" connections**: 0.3px dashed (6 10), 0.04 opacity. The insight connections.

### Central Node ("66")
- Centered in the evidence board area (above headline)
- "66" at 68px bold #C83C32 with text-shadow glow (30px/60px)
- Triple ring: inner 160px (2px, 25% red), offset ring 170px (1px, 12% red, rotated 3deg), outer ring 200px (1px, 6% red)
- Offset ring creates "hand-drawn" circled-suspect effect
- "Primary Suspect" label below in mono 7px, 4px letter-spacing, 40% red

### "SOLVED" Ghost Stamp
- 80px, 700 weight, 12px letter-spacing, 4% red opacity
- Rotated -15deg, centered behind node
- Barely visible -- discovered on close inspection

### Evidence Tape Separator
- 1px horizontal line at 8% red spanning full width
- Mono label above: "/// Classification: Pattern Confirmed ///"
- Divides evidence board from conclusion area

---

## Typography

### Tag (top-left)
- `Space Mono` 8px, uppercase, 3px letter-spacing, 18% white
- "/// Case File: Pattern Recognition ///"

### Case Number (top-right)
- `Space Mono` 8px, uppercase, 2px letter-spacing, 30% red

### Headline Pair
- **Dim line:** `Space Grotesk` 52px, weight 300, 17% white, -1px letter-spacing
- **Bold line:** `Space Grotesk` 64px, weight 700, 93% white, -2px letter-spacing
- Key word in italic #C83C32
- The weight shift from 300 to 700 = shift from collecting to connecting

### Body
- Main: `Space Grotesk` 18px, weight 300, 22% white, max-width 600px
- Red rule: 40px x 1px, 30% red
- Italic closer: 17px, weight 300, italic, 40% white

### Data Panel (right-aligned)
- `Space Mono` 8px, uppercase, 1.5px letter-spacing, 10% white
- Key values in 35% red
- CASE / EVIDENCE / CONNECTIONS / WITNESSES / STATUS / METHOD

### Summary Stats
- Numbers: `Space Grotesk` 32px, weight 700, 8% white (or 20% red for key numbers)
- Labels: `Space Mono` 7px, uppercase, 2px letter-spacing, 12% white

### Identity Bar
- Name: `Space Grotesk` 11px, weight 500, 3px letter-spacing, 20% white
- Role: `Space Mono` 8px, 2px letter-spacing, 10% white

---

## Text Placement Logic

1. **Tag at top-left** = the case file designation. Mono voice = official forensic record.
2. **Evidence cards scattered with rotation** = active investigation, not a neat filing system. Spatial position mirrors investigation timeline: common skills at top (examined first), rare skills at bottom (discovered later).
3. **Red strings converging** = the visual argument. Every clue points to one pattern. Brighter strings from rare skills = harder to find, more important.
4. **"66" at center** = the primary suspect. Everything connects to it. The rings = circled on the board, the moment the detective identifies the pattern.
5. **Dim headline above bold headline** = the amateur vs the expert. Collecting (passive, dim, light) vs seeing the pattern (active, bright, bold).
6. **Key word in italic red** = the red string made verbal. The word IS the string.
7. **Summary stats** = the forensic report metrics. Numbers speak for themselves.

---

## Concept

Most investigators see individual pieces of evidence. They catalog, file, and organize. But the case isn't solved by collecting evidence -- it's solved by seeing the CONNECTIONS between evidence. The red string web IS the insight. "66" skills, 847 connections, one pattern.

---

*Claude Design Engine by Rahaman Bin Ujit*
