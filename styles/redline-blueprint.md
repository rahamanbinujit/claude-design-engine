# Style: Redline Blueprint

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Poster styled as a technical blueprint/architectural drawing. Dark bg with dotted grid, thin red measurement lines with tick marks and dimension labels, monospace annotations labeling each section's specs, content presented as if it's the specification sheet for a system being built. Meta-design: the poster IS its own blueprint. Best for systems builder positioning, data-heavy posts, AI/tech topics, and "how it works" content.

## Example
Example: "The AI systems your team needs but can't build"

## Layout (1080x1350, 4:5 portrait)

```
┌──────────────────────────────┐
│ ┌─                        ─┐│  <- corner crop marks (24px, red 35%)
│  80px                        │  <- left margin measurement line
│  // SYSTEM SPEC    REV 01   │  <- tag (red border) + spec label (mono)
│                              │
│  The AI systems              │  <- 72px Space Grotesk 700, white
│  your team needs             │     one word red accent
│  but can't build             │
│                              │
│  <- HEADLINE // 72px // ...  │  <- self-referential annotation (red 40%)
│  o----PERFORMANCE DATA----o  │  <- section divider (dots + dashed line)
│  01  SKILLS DEPLOYED   66   │  <- spec rows: mono key + bold value
│  02  INTEGRATIONS       5   │     row numbers at left edge (10% opacity)
│  03  BRANDS POWERED     2   │     red accent on key stats
│  04  OUTPUT MULTI.     10x  │     thin border-bottom separators (6%)
│                              │
│  ┌ NOTES ─────────────────┐ │  <- notes box: 1px border, floating label
│  │ One person. One stack. │ │     mono 13px, 30% opacity
│  │ Running what 12 did.   │ │
│  └────────────────────────┘ │
│                              │
│  RAHAMAN BIN UJIT  DWG NO.  │  <- author left, drawing number right
│  SR MKTG EXEC     DATE      │
│ └─ SPEC: 1080x1350  1:1  ─┘│  <- bottom annotations + corner marks
└──────────────────────────────┘
      +                        +  <- crosshair center marker (red 15%)
      - - - - - - - - - - - -     <- dashed section boundary lines (red 12%)
```

## Blueprint Elements (what makes it feel like a blueprint)

1. **Dotted grid bg** -- radial-gradient dots, 40px spacing, white 4% opacity
2. **Corner crop marks** -- 24px L-shapes at all 4 corners, red 35%
3. **Crosshair** -- center of poster, 40px cross, red 15%
4. **Measurement lines** -- red 60% opacity with tick marks (12px) and monospace dimension labels
5. **Dashed section boundaries** -- 1px dashed lines at section breaks, red 12%
6. **Monospace annotations** -- Space Mono 10-11px at edges, 15-25% white opacity ("REV 01", "SPEC: 1080x1350", "SCALE 1:1")
7. **Self-referential labels** -- annotations that describe the poster's own specs ("HEADLINE // 72px // SPACE GROTESK 700 // #FFFFFF")
8. **Drawing number** -- "DWG NO. RBU-YYYY-NNN" in bottom-right, Space Mono
9. **Notes box** -- thin 1px border rectangle with floating "NOTES" label above the border line

## Typography

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Tag | Space Mono | 13px | 400 | #C83C32, 1px red border |
| Headline | Space Grotesk | 72px | 700 | #FFFFFF, one word #C83C32 |
| Self-ref annotation | Space Mono | 11px | 400 | rgba(200,60,50,0.4) |
| Section divider label | Space Mono | 11px | 400 | rgba(200,60,50,0.4) |
| Spec key | Space Mono | 13px | 400 | rgba(255,255,255,0.35) uppercase |
| Spec value | Space Grotesk | 28px | 700 | #F5F5F5, highlights #C83C32 |
| Spec unit | Space Grotesk | 16px | 400 | rgba(255,255,255,0.3) |
| Row number | Space Mono | 10px | 400 | rgba(255,255,255,0.1) |
| Notes text | Space Mono | 13px | 400 | rgba(255,255,255,0.3) |
| Author | Space Mono | 12px | 400 | rgba(255,255,255,0.3) uppercase |
| Edge annotations | Space Mono | 11px | 400 | rgba(255,255,255,0.15-0.25) |

## Colors

- Background: #0A0A0A
- Primary text: #FFFFFF
- Accent: #C83C32 (measurement lines, tag, highlights)
- Blueprint elements: #C83C32 at various opacities (12-60%)
- Supporting text: white at 15-35% opacity
- Grid dots: white at 4% opacity
- Row separators: white at 6% opacity

## When to Use
- "Systems builder" positioning posts
- Data-heavy content (stats, metrics, capabilities)
- AI/tech/engineering topics
- "How I built this" breakdowns
- Any content where the meta-concept (poster = its own spec) adds meaning

## When NOT to Use
- Emotional/personal stories (too clinical)
- Photo-based posts (blueprint elements clash with photos)
- Quick casual engagement posts (too produced)

## CSS Notes
- Measurement lines: absolute positioned divs with tick marks as pseudo-elements
- Corner marks: pseudo-elements ::before (horizontal) and ::after (vertical)
- Crosshair: pseudo-elements for horizontal and vertical lines
- Notes box: relative positioned div with absolute "NOTES" label (negative top, bg matches poster to "break" the border)
- Section divider: flexbox with dots + dashed flex-grow lines + centered label

---

*Claude Design Engine by Rahaman Bin Ujit*
