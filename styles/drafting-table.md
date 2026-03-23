---
name: drafting-table
version: V122
quality-score: 4
status: KEEP
best-for: precision/measurement positioning, "can't be measured by conventional standards" messaging, technical credibility, engineering/systems builder identity, dimensioned comparisons
---

# Drafting Table

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


Technical drawing / engineering blueprint aesthetic. The poster simulates a dimensioned technical drawing where headline words are MEASURED by dimension lines, and the stat is the CRITICAL DIMENSION.

---

## Core Concept

Every word is dimensioned like a technical drawing measurement. Dimension lines with extension lines and arrows sit ABOVE the headline, showing each word's "measurement value." The visual argument: the individual measures as 1, but the system measures as 66. The dimension line PROVES the scale difference.

---

## Specs

### Canvas
- **Size:** 1080x1350 (4:5 portrait)
- **Background:** #0A0A0A
- **Export:** Puppeteer, deviceScaleFactor: 4, wait 3000ms

### Background Layer (SVG)
- **Center lines:** Vertical + horizontal at canvas center, dash-dot pattern (20 5 3 5), 3% white, 0.5px
- **Construction grid:** Quarter lines (270, 810 vertical; 337, 1012 horizontal), dashed (8 4), 2.5% white
- **Ruler ticks:** Top edge + left edge, major ticks every ~108px at 6-8% white, center tick slightly taller at 8%
- **Border lines:** 0.5px at 4% white along top and left edges

### Dimension Lines (the hero mechanism)
- **Structure:** Extension lines (vertical, 0.5px, 6% white) rise from each headline word up to a horizontal dimension line with arrow endpoints
- **Arrow style:** Small filled triangles at each end of the dimension line
- **Dimension values:** Centered on the dimension line in Space Mono, 11px, 25% white
- **Layering:** Shortest dimension (word 1) at bottom, longest (word 3) at top -- creates a visual staircase
- **Key ratio:** Word 1 = 1, Word 2 = 1, Word 3 = 66. The WIDEST dimension line has the system's measurement.
- **System dimension:** Slightly brighter (18% white, 1.2px stroke) than individual dimensions

### Stat Dimension Lines (RED)
- **Axis 1:** Right-side vertical dimension line with red arrows + rotated "66" label
- **Axis 2:** Bottom horizontal dimension line with red arrows + "SYS-066" label
- **Color:** rgba(200,60,50,0.5) for lines, rgba(200,60,50,0.7) for labels
- **Arrows:** Red filled triangles

### Revision Cloud
- Dashed red ellipse around the stat area
- stroke: rgba(200,60,50,0.1-0.12), 1.2-1.5px, dasharray: 8 4 3 4
- Marks the stat as the CRITICAL DIMENSION

### Typography

**Headline (3 stacked words):**
- Font: Space Grotesk, uppercase
- Words 1-2: 88px, weight 300, 35% white (dim = individually insignificant)
- Word 3: 112px, weight 700, 100% white (bold = the system, the declaration)
- Letter-spacing: -2px
- Line-height: 1.0
- Left-aligned at 72px padding

**Stat:**
- Font: Space Grotesk, 220px, weight 700, #C83C32
- Letter-spacing: -8px, line-height: 0.85
- Label: Space Mono, 13px, 30% white, letter-spacing 4px

**Body:**
- Font: Space Grotesk, 20px, weight 400, 45% white
- Line-height: 1.6
- Italic emphasis in rgba(200,60,50,0.6) weight 500
- Max-width: 520px

**Top Meta:**
- Space Mono, 9-10px, 20% white, letter-spacing 3px
- Drawing number in red (40% red)
- Split left/right: DWG + SCALE + REV (left) / DATE + TOL (right)

**Title Block (bottom-right):**
- Bordered rectangle (1px, 8% white)
- Space Mono, 8px, 18% white, letter-spacing 2px
- Fields: SCALE, DWG NO., REV, TOL, STANDARD, STATUS
- STATUS value in red (50% red): "OFF SCALE"

**Footer:**
- Space Mono, 9px, 15% white, letter-spacing 3px
- Bottom-left

### Reading Order
1. Top meta (sets frame: "this is a technical document")
2. Dimension lines above headline (the measurement apparatus)
3. Headline cascade: ONE (1) -> PERSON (1) -> SYSTEM (66)
4. Stat "66" in red (the critical dimension)
5. Revision cloud (flags it as important)
6. Body text (the editorial conclusion)
7. Title block (the drawing's identity)

---

## Text Placement Logic

1. **Dimension lines ABOVE headline** = the measurement apparatus looking DOWN at the words. The lines are the evaluator; the words are the subject.
2. **"ONE" and "PERSON." light/dim** = dimensioned as insignificant. Their short dimension lines (value: 1) reinforce their smallness.
3. **"SYSTEM." bold/bright** = the dimensioned heavyweight. Its WIDE dimension line (value: 66) proves what the typography shows.
4. **"66" with dual-axis red dimensions** = critical dimension, measured from every angle. Red = engineering markup for revisions and critical notes.
5. **Revision cloud** = the drafter circled this and said "CHECK THIS."
6. **Body at bottom-third** = grounded conclusion. "Off the drawing" = exceeded conventional measurement.
7. **Title block bottom-right** = authentic technical drawing convention. "STATUS: OFF SCALE" = the final verdict.

---

## Best For
- Posts about precision, measurement, quantification
- "They can't measure what I do" messaging
- Technical credibility / engineering identity
- Systems builder positioning
- Dimensioned comparisons (individual vs system)
- Any content where conventional standards don't apply

---

## Adaptations
- **Different stats:** Change dimension values and the critical dimension number
- **Different headlines:** Keep the 3-word pattern: [small thing] [small thing] [BIG THING] with corresponding dimension line widths
- **More dimensions:** Add more dimension lines for more words, each with its measurement
- **Angle dimensions:** Add angular dimension arcs for rotated elements
- **Section views:** Add section cut lines (dash-long dash) through the poster for "cross-section" messaging

---

*Claude Design Engine by Rahaman Bin Ujit*
