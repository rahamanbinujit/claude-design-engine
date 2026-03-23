# Style: Neo-Brutalist

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Intentionally "undesigned" but highly structured. White cards with thick borders and hard solid shadows on dark bg. Raw monospace labels create a terminal/data aesthetic. Exposed grid lines and corner markers add structural honesty. Brutalist utility meets brand polish. Best for systems/data/process content, tech-builder positioning, "raw truth" takes.

## Example
Example: Neo Brutalist poster

## Layout (1080x1350)

```
┌──────────────────────────────┐
│ 001                1080x1350 │  ← corner markers (mono, 11px, 15% opacity)
│                              │
│ // SYSTEM REPORT             │  ← top label (mono, 16px, red, underlined)
│                              │
│ ┌──────────────────────────┐ │
│ │ // OUTPUT                │▓│  ← brutalist card (#F5F5F5, 5px white border)
│ │                          │▓│     + 12px solid red hard shadow (no blur)
│ │ BOLD HEADLINE            │▓│
│ │ with red accent words.   │▓│  ← 72px Space Grotesk 700, red on key words
│ │                          │▓│
│ └──────────────────────────┘▓│
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│                              │
│ ┌────────┐ ┌────────┐ ┌────┐│
│ │ 66     │ │ 10x    │ │ 1  ││  ← stat blocks (3px white border, no fill)
│ │ LABEL  │ │ LABEL  │ │ LBL││     numbers: mono 52px, labels: mono 14px
│ └────────┘ └────────┘ └────┘│
│                              │
│ Monospace body text.         │  ← mono 22px, 70% opacity
│                              │
│ ─────────────────────────────│  ← 3px border-top, 10% opacity
│ Name                // TAG   │  ← author left, red-bordered tag right
│ DESIGNATION                  │
│ V29                     2026 │  ← corner markers
└──────────────────────────────┘
```

Grid lines at 25%, 50%, 75% (both axes) — 1px, 6% opacity white.

## Structure

### Brutalist Card (Hero Element)
- Background: `#F5F5F5` (off-white)
- Border: `5px solid #FFFFFF`
- Shadow: `12px 12px 0px #C83C32` (hard, zero blur — this is critical)
- Text color: `#0A0A0A` (dark on light card)
- Card label: Space Mono, 14px, `#C83C32`, uppercase, 3px letter-spacing
- Headline: Space Grotesk, 72px, weight 700, line-height 1.05, letter-spacing -2px
- Red accent: `#C83C32` on key words

### Stat Blocks
- Background: transparent
- Border: `3px solid #FFFFFF`
- Number: Space Mono, 52px, weight 700, white (red accent on key digit)
- Label: Space Mono, 14px, uppercase, 50% opacity, 2px letter-spacing

### Monospace Labels
- All labels use `// prefix` (e.g., "// System Report", "// Output", "// AI Systems")
- Space Mono, uppercase, `#C83C32`
- Letter-spacing: 2-4px

### Corner Markers
- Position: absolute, all 4 corners (20px inset)
- Space Mono, 11px, 15% opacity
- Content: reference number, dimensions, version, year

### Exposed Grid Lines
- 1px lines at 25%, 50%, 75% on both axes
- White, 6% opacity
- Full width/height, pointer-events: none

### Bottom Bar
- Border-top: `3px solid rgba(255,255,255,0.1)`
- Author: Space Grotesk, 22px, weight 600
- Designation: Space Mono, 14px, 40% opacity, uppercase
- Tag: Space Mono, 14px, `#C83C32`, `2px solid #C83C32` border, 8px 16px padding

## Colors
- Background: `#0A0A0A`
- Card: `#F5F5F5`
- Card border: `#FFFFFF`
- Hard shadow: `#C83C32`
- Text on card: `#0A0A0A`
- Text on bg: `#FFFFFF`
- Accent: `#C83C32`
- Subdued text: `rgba(255,255,255,0.5)` or `rgba(255,255,255,0.7)`

## Typography
- Headline: Space Grotesk, 72px, 700
- Stat numbers: Space Mono, 52px, 700
- Body: Space Mono, 22px, 400
- Labels: Space Mono, 14-16px, uppercase
- Corner marks: Space Mono, 11px

## Rules
- Hard shadows ONLY (zero blur) — never soft/gaussian drop shadows
- No gradients anywhere
- No rounded corners — everything sharp/rectangular
- Monospace for ALL supporting text (only headline uses Space Grotesk)
- `//` prefix on all labels — creates code/terminal feel
- White borders, not subtle — minimum 3px
- Card shadow must be solid red offset, not black

## Best For
- Systems/data/process content
- Tech-builder positioning posts
- "Raw truth" / no-BS takes
- Stats-heavy posts
- AI/automation content
- Dashboard/report-style presentations

## File Size
Typically 200-400KB PNG (very efficient — no textures or grain).

---

*Claude Design Engine by Rahaman Bin Ujit*
