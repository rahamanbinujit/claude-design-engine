# Style: Elastic Letterforms

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Dark editorial poster where individual letters in the headline are distorted via CSS transform scaleX/scaleY, creating visual rhythm through controlled typographic distortion. Red accent letters get the most dramatic stretch. Compressed letters fade in opacity. Transform value annotations add a "typography as sculpture" technical layer.

Three variants exist:
- **v95 (newest):** Single key word with varying scaleY transforms creating a waveform silhouette. Bottom-aligned letters with measurement annotations and elasticity bar chart. Typography as data visualization.
- **v65c (recommended for multi-word):** Random per-letter distortion across all headline words. Each letter gets unique transform. Annotations show values. No ghost echoes.
- **v35 (original):** Progressive stretch on one accent word with ghost echo motion trail. More narrative/directional.

## Reference Files
- v95: Example: Elastic Letterforms poster / `.html` (waveform scaleY variant)
- v65c: Example: V65C Elastic Letterforms poster / `.html`
- v35: Example: Elastic Letterforms poster

## Layout (1080x1350)

```
+------------------------------+
| TAG (mono, uppercase, dim)   |          SCALE REF
|                              |          2.2x ----
| sX:1.9        sX:2.2        |          1.6x ---
| S t r e t c h                |          1.0x --
|   sY:1.6   sX:1.7           |          0.5x -
| Y o u r                     |
| T h i n k i n g             |
|      sX:1.6     sX:2.2      |
| ___                          |
|                              |
| Body text (undistorted)      |
|                              |
| 66  (elastic digits)         |
| sX:1.3 sY:0.85 / sX:0.72   |
| AI SKILLS DEPLOYED           |
|                              |
| 5         2        10x      |
| INTEG.    BRANDS   OUTPUT   |
|                              |
|                     comp: Ag |
|                   normal: Ag |
|_____________________________ | extend: Ag
| Name / Title        tall: Ag |
+------------------------------+
```

## Typography
- **Tag:** Space Mono, 11px, 6px letter-spacing, 26% white, uppercase
- **Headline:** Space Grotesk, 100px, weight 700, one word per line, each letter individually transformed
- **Annotations:** Space Mono, 7-8px, 40% #C83C32 opacity
- **Body:** Space Grotesk, 22px, 36% white, max-width 680px, NO distortion
- **Stat:** Space Grotesk, 148px, weight 700, #C83C32
- **Stat label:** Space Mono, 12px, 5px letter-spacing, 26% white
- **Secondary stats:** Space Grotesk, 36px, weight 700, 82% white
- **Author name:** Space Grotesk, 15px, weight 700, 70% white
- **Author title:** Space Mono, 10px, 3px letter-spacing, 20% white

## The Elastic Effect (v65c — Core Technique)

Each letter wrapped in individual `<span class="letter">` with unique CSS transforms:

### Transform Categories
| Type | scaleX | scaleY | Opacity | Color | Role |
|------|--------|--------|---------|-------|------|
| **Hero stretch** | 1.6-2.2 | 1.0 | 100% | #C83C32 | Focal point, max drama |
| **Tall** | 1.0 | 1.4-1.8 | 100% | white | Vertical accent |
| **Compressed** | 0.5-0.6 | 1.0 | 50-70% | white | Rhythm valley |
| **Squashed** | 1.0-1.2 | 0.6-0.7 | 50-65% | white | Visual dip |
| **Normal** | 1.0 | 1.0 | 100% | white | Breathing room |

### Spacing Rules
- Hero stretch letters: padding-right 14-32px (proportional to stretch amount)
- Compressed letters: padding 0-4px
- Use `padding` not `margin` for spacing (prevents layout collapse)
- Each word: 2-3 distorted letters max, rest near-normal
- transform-origin: bottom center

## Stat Digits — Opposing Transforms
- First digit: scaleX(1.3) scaleY(0.85) — wide and flat
- Second digit: scaleX(0.72) scaleY(1.28) — narrow and tall
- Creates visual tension reinforcing elastic concept

## Decorative Elements
- **Scale reference strip** (top-right): 4 horizontal bars at proportional widths (2.2x/1.6x in red 32%; 1.0x/0.5x in white 9%)
- **Transform annotations**: "sX:1.9", "sY:1.6" etc. in 8px mono, 40% red, positioned above/below distorted letters
- **Type specimen** (bottom-right): 4 rows of "Ag" at compressed/normal/extended/tall with 7px mono labels at 9% white
- **Baseline grid**: 5-6 horizontal lines at 1.4% white behind headline zone
- **Red divider**: 48px wide, 2px tall, 40% opacity

## Colors
- Background: #0A0A0A
- Elastic accent letters: #C83C32
- Headlines: #FFFFFF (varied opacity per letter)
- Body text: rgba(255,255,255,0.36)
- Annotations: rgba(200,60,50,0.40)
- Identity bar border: rgba(255,255,255,0.06)

## Best Used For
- Creativity and innovation posts
- "Break the mold" / unconventional thinking
- Typography and design topics
- Flexibility and adaptability themes
- "Stretch your thinking" type messaging
- Posts about scaling, pushing limits

## File Size
~302KB PNG (efficient, no JPEG conversion needed)

## Never
- Don't stretch all letters equally (looks like generic letter-spacing)
- Don't over-compress vertically below scaleY(0.55) (unreadable)
- Don't let stretched letters overlap (generous padding-right)
- Don't distort body text (contrast with headline is the point)
- Don't use more than 3 red accent letters per word (loses impact)

---

## Variant: Progressive Stretch (v35)

One accent word has letters progressively stretched left-to-right with ghost echo layers:

```
Letter 1: scaleX(1.0)  -- anchor (normal)
Letter 2: scaleX(1.05) -- barely stretched
...
Letter 7: scaleX(2.1)  -- maximum stretch, scaleY(0.88), opacity 0.85
```

Ghost echoes (3 layers): increasing letter-spacing, blur, translateX, decreasing opacity (12%/6%/3%).
Stretch indicator lines: 3 horizontal gradients below, decreasing width and opacity.
Best for tension/pressure/stretching metaphor and "breaking point" posts.

---

## Variant: Waveform ScaleY (v95)

One key word rendered letter-by-letter with varying `scaleY()` values, all bottom-aligned, creating a waveform silhouette:

```
Letter scales: S(1.8x), Y(0.6x), S(1.2x), T(2.0x peak), E(0.8x), M(1.4x)
```

- Container: `display: flex; align-items: flex-end` (shared baseline)
- Peak letter: #C83C32, all others 95% white
- Vertical measurement lines next to peak (red 18%) and shortest (white 10%) letters with tick marks and rotated scale labels
- Elasticity bar indicator: 6 horizontal bars right-aligned, widths proportional to scale values, peak bar in red
- SVG waveform trace (1.5px, 6% white) connecting letter tops
- Dotted baseline under letters
- Headline sits above elastic word (4 lines of 72px bold, standard dim/red/bright hierarchy)
- Best for "system" posts, capability reveals, and "stretching beyond limits" metaphor
- 6.4MB PNG / 2.1MB JPEG 95%

---

*Claude Design Engine by Rahaman Bin Ujit*
