# Style: Bold Split

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Dark, editorial poster with a bold headline and two side-by-side photo panels. Minimal text, maximum impact. Best for comparison posts, before/after, or contrasting two ideas.

## Example
Example: AI Pay Gap poster

## Layout (1080x1080)

```
┌──────────────────────────────┐
│ TAG (tiny, faded)            │
│                              │
│ BOLD HEADLINE                │
│ with red glow accent.        │
│                              │
│ ┌────────────┐ ┌────────────┐│
│ │            │ │            ││
│ │  PHOTO 1   │ │  PHOTO 2   ││
│ │            │ │            ││
│ │  [label]   │ │  [label]   ││
│ └────────────┘ └────────────┘│
│                              │
│ Logo + Name        ● shape   │
└──────────────────────────────┘
```

## Structure

### Top Tag
- Font: Space Mono, 12px, 700 weight
- Letter-spacing: 2.5px, uppercase
- Color: #F5F5F5 at 50% opacity
- Purpose: Category label (e.g., "THE AI PAY GAP")

### Headline
- Font: Space Grotesk, 58px, 700 weight
- Line-height: 1.1, letter-spacing: -2px
- Color: White #FFFFFF
- Key phrase in red with glow:
  - Color: #FF5A4A
  - text-shadow: 0 0 12px rgba(200,60,50,0.5), 0 0 30px rgba(200,60,50,0.25)

### Photo Panels
- Two side-by-side, equal width
- Gap: 18px between panels
- Border-radius: 14px
- Images: object-fit cover, fill entire panel
- Gradient overlay at bottom: linear-gradient(to top, rgba(0,0,0,0.6), transparent) covering 40% height
- Labels: Space Mono, 11px, 700, uppercase, letter-spacing 1.5px
  - Positive label: Red pill (#C83C32 bg, white text)
  - Negative label: Light pill (#F5F5F5 bg, black text)
  - Centered at bottom of each photo, border-radius 100px

### Bottom Bar
- Flex, space-between, vertically centered
- Left: Logo (40x40, border-radius 8px) + Name (Space Grotesk 14px 600) + Title (Space Mono 10px 400, #666)
- Right: Small decorative circle
  - Size: 28x28px
  - Background: radial-gradient(circle at 40% 40%, #FF5A4A, #C83C32)
  - Glow: box-shadow 0 0 18px rgba(200,60,50,0.6), 0 0 40px rgba(200,60,50,0.3)

## Colors
- Background: #0A0A0A
- Text: #FFFFFF
- Accent: #FF5A4A (bright) / #C83C32 (base)
- Glow: rgba(200,60,50) at varying opacities
- Muted: #666 for secondary text, #F5F5F5 at 50% opacity for tag

## Fonts
- Headings/body: Space Grotesk (300-700)
- Tags/labels/metadata: Space Mono (400, 700)

## Padding
- Poster padding: 52px all sides
- Generous breathing room between sections

## When to Use
- Comparison posts (AI vs no AI, before vs after, old way vs new way)
- Stat-driven posts where one number is the hero
- Any post with two contrasting ideas or personas

## Export
- HTML → Puppeteer, 1080x1080 CSS, deviceScaleFactor: 4
- Output: 4320x4320px PNG
- Wait 2500ms for fonts before screenshot

---

*Claude Design Engine by Rahaman Bin Ujit*
