# Style: Minimaximalist

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
One element absurdly oversized (300-420px), everything else deliberately tiny (11-16px). Extreme scale contrast IS the entire design concept. No imagery, no complexity -- just one giant number or word that dominates the canvas, surrounded by vast negative space and whisper-quiet supporting text. Best for single-stat impact posts where one number tells the whole story.

## Example
Example: "10x" with tiny "One person. The output of an entire team."

## Layout (1080x1350, 4:5 portrait)

```
+------------------------------+
| TAG (13px, mono, faded)      |
|                              |
|                              |
|  GIANT                       |
|  NUMBER (420px, red, glow)   |
|  ___                         |
|  Context line (28px, light)  |
|                              |
|                              |
|                              |
|                              |
|  Pull quote (20px, italic)   |
|                              |
|  66  |  5  |  2  (mono,16px) |
|  STAT  STAT  STAT (11px)     |
|  | Name (14px)               |
|  | Role (11px, mono)         |
+------------------------------+
```

## Specs

### Giant Element (THE hero)
- Font: Space Grotesk 700
- Size: 380-420px (minimum 300px to qualify as minimaximalist)
- Color: #C83C32 (brand red)
- Letter-spacing: -18px (tight)
- Line-height: 0.85
- Text-shadow: triple-layer red glow (80px/160px/40px blur at 0.6/0.3/0.4 opacity)
- If there's a unit (x, %, +), render at 140px in #F5F5F5 (white), no glow

### Background
- #0A0A0A solid dark
- Optional: subtle radial gradient glow behind the number (rgba red, 8% opacity, 60px blur)
- NO grain, NO texture, NO decorative elements -- purity of scale contrast is the point

### Supporting Text
- Tag: Space Mono 400, 13px, uppercase, letter-spacing 3px, 40% white opacity
- Context line: Space Grotesk 300, 28px, 70% white opacity. Bold key phrase at 600 weight, 100% white.
- Pull quote: Space Grotesk 400, 20px, italic, 50% white opacity
- Stats: Space Mono 700 at 16px (values), Space Mono 400 at 11px uppercase (labels), 30% white opacity labels
- Identity: Space Grotesk 600 at 14px (name), Space Mono 400 at 11px uppercase (role)

### Red Line Accent
- 48px wide, 3px tall, #C83C32
- Placed between giant number and context line

### Identity Block
- Vertical red line (2px wide, 32px tall, 60% red opacity) + name/role text
- Always at bottom

## When to Use
- Single impressive stat (10x, 66 skills, $1M revenue, 500% growth)
- Bold numerical claims
- Data-driven positioning posts
- Any post where ONE number tells the whole story

## When NOT to Use
- Multiple stats of equal importance (use bento-grid instead)
- Posts that need imagery or photos
- Long-form content with paragraphs
- Carousel slides (scale contrast loses impact at small swipe size)

## Key Principle
The extreme scale ratio (420px vs 11px = 38:1 ratio) creates instant visual hierarchy. The eye has NO CHOICE but to read the giant element first. Everything else is footnotes. This is the design equivalent of speaking one word at maximum volume and whispering everything else.

---

*Claude Design Engine by Rahaman Bin Ujit*
