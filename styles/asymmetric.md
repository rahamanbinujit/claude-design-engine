# Style: Asymmetric

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Off-grid editorial layout that breaks centered symmetry. Headline anchored upper-left, supporting text bottom-right, connected by a vertical red accent line. The diagonal reading path creates visual tension and dynamism. Feels like a premium magazine spread.

## Example
Example: "One person. The output of ten." poster

## Layout (1080x1350)

```
┌──────────────────────────────┐
│ TAG (tiny, faded)        │   │
│                          │   │
│ BOLD HEADLINE            │   │
│ Light subline            │   │
│ ACCENT word.             │ ▌ │  ← vertical red line
│                          │   │
│                          │   │
│                          │   │
│              ─── rule    │   │
│              RIGHT-ALIGNED   │
│              stats text  │   │
│                              │
│ Name + Title     ── accent   │
└──────────────────────────────┘
```

## Structure

### Top Tag
- Font: Space Mono, 12px, 700 weight
- Letter-spacing: 2.5px, uppercase
- Color: #F5F5F5 at 30% opacity
- Position: absolute, top 52px, left 52px

### Headline (Upper-Left)
- Position: absolute, top 140px, left 52px
- Max-width: 680px (leaves room for vertical accent)
- Font: Space Grotesk, 88px, mixed weights (300 light + 700 bold)
- Line-height: 1.02, letter-spacing: -4px
- Color: White #FFFFFF
- Accent word: #FF5A4A with glow
  - text-shadow: 0 0 15px rgba(200,60,50,0.6), 0 0 40px rgba(200,60,50,0.35), 0 0 80px rgba(200,60,50,0.15)

### Vertical Red Accent Line (Right Side)
- Position: absolute, right 72px, top 20%, height 55%
- Width: 2px
- Background: linear-gradient(180deg, transparent 0%, #C83C32 15%, #FF5A4A 50%, #C83C32 85%, transparent 100%)
- Glow: box-shadow 0 0 12px rgba(200,60,50,0.4), 0 0 30px rgba(200,60,50,0.15)
- Fades in and out at both ends

### Stats / Pullquote (Bottom-Right)
- Position: absolute, bottom 140px, right 120px
- Max-width: 520px
- Text-align: right
- Font: Space Grotesk, 28px, 300 weight
- Color: #666666
- Strong text: #FFFFFF, 600 weight
- Horizontal rule above stats: 180px wide, right-aligned
  - Background: linear-gradient(90deg, transparent, rgba(200,60,50,0.4))
  - Margin-bottom: 28px

### Background Number (Optional)
- Position: absolute, bottom 80px, right -30px
- Font: Space Grotesk, 420px, 700 weight
- Color: rgba(255,255,255,0.018)
- Only use when a number relates to headline content

### Ambient Glow
- Position: absolute, top 15%, left 10%
- 700x700px radial gradient
- rgba(200,60,50,0.06) center, fading to transparent
- Follows headline position (upper-left)

### Footer
- Position: absolute, bottom 0, full width
- Flex, space-between, vertically centered
- Padding: 48px 52px
- Left: Name (Space Mono 11px 700, #888, uppercase) + Title (Space Mono 10px 400, #555)
- Right: Line accent (48px x 2px, #C83C32 with glow)

## Colors
- Background: #0A0A0A
- Text: #FFFFFF
- Accent: #FF5A4A (bright) / #C83C32 (base)
- Glow: rgba(200,60,50) at varying opacities
- Muted: #666 for secondary text, #888/#555 for footer

## Fonts
- Headings/body: Space Grotesk (300 + 700 mixed weights)
- Tags/labels/metadata: Space Mono (400, 700)

## Key Design Principles
- **Diagonal reading path:** Eye moves from upper-left headline to bottom-right stats naturally
- **Intentional empty space:** The middle area is deliberately empty — the asymmetry IS the design
- **Vertical accent as spine:** The red line on the right provides structural tension and visual anchor
- **Mixed weights:** Light (300) + bold (700) in headline creates editorial reading rhythm
- **Counterweight:** Right-aligned stats balance the left-heavy headline

## When to Use
- Statement posts (bold claims, positioning, authority)
- Single-stat or pullquote posts
- Any post where visual tension adds to the message
- Posts about being different, breaking norms, standing out
- NOT for comparison posts (use bold-split instead)
- NOT for photo posts (use photo-split instead)

## Export
- HTML to Puppeteer, 1080x1350 CSS, deviceScaleFactor: 4
- Output: 4320x5400px PNG
- Wait 2500ms for fonts before screenshot

---

*Claude Design Engine by Rahaman Bin Ujit*
