---
name: broken-grid-overlap
quality-score: 4/5
status: KEEP
---

# Broken Grid Overlap

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Two content blocks colliding at an intersection zone. The overlap IS the design.**

---

## When to Use
- Debate / contrast posts (question vs answer, myth vs reality)
- Stat-reveal posts (provocative question + data that answers it)
- Provocative takes with data backing
- Before/after or problem/solution framing
- Any post where two ideas visually "clash"

## Layout Structure

```
┌─────────────────────────────┐
│                             │
│  ┌──────────────┐           │
│  │ // TAG       │           │
│  │ HEADLINE     │           │
│  │ (mixed wt)   │           │
│  │         ┌────┼───────┐   │
│  └─────────┼────┘       │   │
│            │ BIG STAT   │   │
│            │ mono label │   │
│            └────────────┘   │
│                             │
│  Supporting text            │
│  ─────────                  │
│                             │
│  Author / Role              │
└─────────────────────────────┘
```

## Specs

### Canvas
- 1080x1350 (4:5 portrait)
- Background: #0A0A0A

### Block A (Headline Panel)
- Position: upper-left, offset from edges (top: 100px, left: 80px)
- Width: ~680px
- Border: 1px solid rgba(255,255,255,0.08)
- Padding: 55px 50px 70px
- z-index: 2

### Block B (Red Stat Panel)
- Position: overlaps Block A by ~60px vertically
- Offset right from Block A (left: 340px)
- Width: ~640px
- Background: #C83C32 (solid, no gradient)
- Padding: 55px 55px 65px
- z-index: 3 (sits ON TOP of Block A)

### Collision Details
- White line (3px, 50% opacity) at exact intersection edge
- Small cross mark (+) at collision corner (16x16px, 35% opacity white)
- These marks are z-index: 10-11

### Structural Grid Lines
- Faint lines (3% white opacity, 1px) running vertical and horizontal
- Creates scaffolding / architectural feel
- NOT decorative -- implies the grid that's being broken

### Typography
- Tag: Space Mono, 13px, uppercase, 0.2em letter-spacing, 40% white
- Headline: Space Grotesk 700, 88px, line-height 1.02, letter-spacing -0.035em
- Headline weight contrast: one word in 400 weight at 40% opacity (the "soft" word)
- Stat: Space Grotesk 700, 140px, white on red
- Stat label: Space Mono, 15px, uppercase, 0.15em letter-spacing, 80% white
- Body text: Space Grotesk 400, 24px, 40% white, bold words at 85%

### Supporting Elements
- Block C (body text): positioned below overlap zone, left-aligned
- Anchor line: 200px horizontal rule, 10% white, under Block C
- Edge accent: 4px vertical bar on right edge, ~500px tall, 20% red opacity (flat, no gradient)
- Author bar: bottom-left, name 16px 50% white, role Space Mono 11px 25% white

## Key Rules
1. The overlap must be deliberate and visible -- not accidental
2. Block B (red) always sits ON TOP of Block A (dark) -- red dominates
3. ONE red accent only (the red block itself)
4. No gradients, no shadows -- flat blocks colliding
5. The "thin" headline word creates tension between bold and light
6. Bottom third should breathe -- generous whitespace below the action
7. Grid lines must be barely visible (3%) -- structural, not decorative

## Content Formula
- Block A = The provocative question or setup (headline)
- Block B = The answer / data / stat (red panel)
- Block C = The implication / takeaway (supporting text)
- The visual collision mirrors the intellectual collision in the content

---

*Claude Design Engine by Rahaman Bin Ujit*
