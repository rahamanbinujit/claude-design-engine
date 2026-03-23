# Style: Neon Wire Outline

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Headline rendered as thin outlined strokes only (no fill) with red glow/bloom behind the outlines simulating neon tube lighting. One key word filled solid red as the single accent -- the contrast between outlined and filled is the focal point. Ultra-minimal supporting content lets the neon headline breathe. Moody, cinematic, atmospheric. Best for bold statement/positioning posts, builder identity, and dark atmospheric mood.

## Example
Example: "THE FUTURE BELONGS TO BUILDERS"

## Layout (1080x1350, 4:5 portrait)

```
┌──────────────────────────────┐
│ ┌─                        ─┐│  ← corner wire accents (1px red, 25%)
│                              │
│                              │
│        ╔═══════════╗         │  ← ambient radial red glow (6%, 60px blur)
│        ║ OUTLINED  ║         │  ← 88px, stroke 2px white, color transparent
│        ║ HEADLINE  ║         │     text-shadow: 4-layer red glow
│        ║  FILLED   ║         │  ← ONE word filled #C83C32, no stroke
│        ╚═══════════╝         │
│                              │
│        ──── wire ────        │  ← red wire separator (glow)
│                              │
│        Body text here        │  ← Space Mono 22px, 55% opacity
│        second line           │
│                              │
│           91%                │  ← stat: wire-outlined (stroke 1.5px)
│        OF STARTUPS           │  ← mono 14px, 35% opacity, uppercase
│                              │
│                              │
│  NAME                  DATE  │  ← author bar, bottom
│  TITLE                       │
│ └─                        ─┘│  ← corner wire accents
└──────────────────────────────┘
```

## Key CSS Techniques

### Neon Wire Text (the hero effect)
```css
.neon-headline {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 88px;
  line-height: 1.05;
  letter-spacing: -2px;
  color: transparent;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.9);
  text-shadow:
    0 0 7px rgba(200, 60, 50, 0.4),
    0 0 20px rgba(200, 60, 50, 0.25),
    0 0 42px rgba(200, 60, 50, 0.15),
    0 0 80px rgba(200, 60, 50, 0.08);
}
```

### Filled Accent Word (breaks the outline pattern)
```css
.filled {
  color: #C83C32;
  -webkit-text-stroke: 0;
  text-shadow:
    0 0 10px rgba(200, 60, 50, 0.5),
    0 0 30px rgba(200, 60, 50, 0.3),
    0 0 60px rgba(200, 60, 50, 0.15);
}
```

### Ambient Glow (behind headline zone)
```css
.ambient-glow {
  width: 700px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(200, 60, 50, 0.06) 0%, transparent 70%);
  filter: blur(60px);
}
```

### Wire Line Separator
```css
.wire-line {
  width: 240px;
  height: 1px;
  background: rgba(200, 60, 50, 0.5);
  box-shadow:
    0 0 6px rgba(200, 60, 50, 0.3),
    0 0 15px rgba(200, 60, 50, 0.15);
}
```

### Corner Wire Accents
```css
.corner {
  position: absolute;
  width: 40px;
  height: 40px;
  border-color: rgba(200, 60, 50, 0.25);
  /* apply border-top/left or border-bottom/right per corner */
}
```

## Rules
- **ONE filled word** -- everything else outlined. The filled word is the accent.
- **No drop shadows, no gradients on elements** -- only text-shadow for the neon glow effect.
- **Stat numbers also wire-outlined** (stroke 1.5px) for consistency.
- **Body text: Space Mono**, solid white at low opacity (55%). Does NOT use the outline effect.
- **Author bar: bottom**, understated (40% opacity name, 25% opacity title).
- **Headline minimum 72px** -- the neon effect needs size to breathe.
- **Maximum 4 text-shadow layers** on the glow -- more than 4 becomes muddy.
- **Ambient glow opacity max 6%** -- it should suggest light, not flood it.
- **Corner accents are optional** -- skip if the poster is content-heavy.

## Best For
- Bold positioning statements ("The future belongs to builders")
- Builder identity posts
- Single powerful claim with one supporting stat
- Atmospheric/cinematic dark mood content
- Posts where the headline IS the entire message

## Avoid Using For
- Stats-heavy posts (too many outlined numbers compete)
- Carousel slides (effect is per-slide expensive, better for single images)
- Posts requiring photos (neon + photo = visual conflict)

---

*Claude Design Engine by Rahaman Bin Ujit*
