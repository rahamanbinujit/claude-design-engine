# Style: Blur Depth

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Cinematic depth-of-field effect. Large gaussian-blurred radial gradient shapes create atmospheric bokeh behind razor-sharp typography. The contrast between soft, out-of-focus background and crisp text creates visual tension and premium feel. Best for bold positioning statements, thought leadership, and AI/tech content.

## Example
Example: "I build AI systems that replace entire teams."

## Layout (1080x1350, 4:5 portrait)

```
┌──────────────────────────────┐
│ TAG (mono, top-left)    ●RED │  ← blurred red glow shape (upper-right)
│                         GLOW │
│                              │
│  I build                     │  ← 92px, weight 300 (light)
│  AI systems              ●   │  ← 92px, weight 700, red + text glow
│  that replace            WHT │  ← subtle white blur shape (center)
│  entire teams.           GLOW│  ← 92px, weight 700
│                              │
│  Subtext line in             │  ← 26px, weight 300, 55% opacity
│  muted tone                  │
│                              │
│  66    5     2          ●RED │  ← blurred red glow (lower-left)
│  SKILL INT   BRANDS     GLOW │
│                              │
│  ── red divider line ──      │
│  Name + Title         [R]    │
└──────────────────────────────┘
```

## Specs

### Background Layer (blurred, z-index: 0)
- Container: `filter: blur(80px)` on entire layer
- Red glow 1 (upper-right): 500x500px, `radial-gradient(circle, rgba(200,60,50,0.35) 0%, transparent 70%)`
- Red glow 2 (lower-left): 350x350px, `radial-gradient(circle, rgba(200,60,50,0.2) 0%, transparent 70%)`
- White glow (center): 400x400px, `radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)`
- Warm accent (bottom-right): 300x300px, `radial-gradient(circle, rgba(200,60,50,0.12) 0%, transparent 70%)`

### Typography (sharp, z-index: 2)
- Headline: Space Grotesk 92px, mixed weights (300 light + 700 bold), letter-spacing -2px
- Red accent word: `#C83C32` with triple text-shadow glow (40px/80px/120px at decreasing opacity)
- Subtext: Space Grotesk 26px, weight 300, 55% white opacity
- Stats: 42px bold numbers (red), 13px Space Mono uppercase labels (40% opacity)
- Tag: Space Mono 14px, 3px letter-spacing, 50% opacity, `//` prefix in red

### Depth Elements
- Faded bg text: 420px bold, 2% white opacity (z-index: 1, between blur and content)
- Red divider line: 48x2px, `#C83C32`

### Identity (bottom)
- Name: Space Grotesk 18px, weight 600
- Designation: Space Mono 12px uppercase, 40% opacity, 2px letter-spacing
- Logo mark: 40x40px bordered square, 8px radius

## When to Use
- Bold positioning/identity statements
- AI/tech content where atmosphere matters
- Posts where you want premium cinematic feel
- Works well with type-hero content structure

## Combinations
- Can layer `png-grain` on top for added texture (will increase file size)
- Mixed weights from type-hero carry over naturally
- Red accent glow ties both layers (bg blur + text glow) together

## File Size
723KB PNG at 4320x5400px — efficient because blur shapes compress well (smooth gradients = high compression).

---

*Claude Design Engine by Rahaman Bin Ujit*
