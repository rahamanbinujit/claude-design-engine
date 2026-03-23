# Spotlight Isolation

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Tested:** V37 | **Quality Score:** 4 | **Status:** KEEP

## Concept
Single radial gradient spotlight on dark background illuminating ONLY the key phrase. Everything outside the spotlight circle fades to near-invisible. Theatrical single-light-source drama -- like a stage spotlight picking out one actor in darkness.

## When to Use
- Provocative question posts ("What did you build?")
- Single-idea focus posts where ONE thing matters
- Dramatic emphasis / high-conviction statements
- Motivational/challenge posts
- "Cut through the noise" messaging

## Key Specs

### The Spotlight (layered radial gradients)
```css
/* Inner warm glow */
radial-gradient(
  ellipse 360px 320px at 540px 460px,
  rgba(200, 60, 50, 0.18) 0%,
  rgba(200, 60, 50, 0.08) 40%,
  transparent 70%
)
/* Outer light spill */
radial-gradient(
  ellipse 600px 520px at 540px 460px,
  rgba(255, 255, 255, 0.03) 0%,
  transparent 60%
)
```

### 5-Level Opacity Hierarchy (critical)
| Level | Element | Opacity | Purpose |
|-------|---------|---------|---------|
| 1 | Ghost words | 3% | Atmospheric depth, corners |
| 2 | Dim tag / footer | 6-10% | Barely there context |
| 3 | Stat label | 25% | Secondary info |
| 4 | Support text | 40-45% | Readable but receding |
| 5 | Headline | 100% white + red accent | The spotlight target |

### Ghost Words
- 4 words scattered in corners at 80-140px
- Rotated slightly (-8deg to +6deg)
- Related to the topic (BUILD, SHIP, SCALE, LEARN)
- `rgba(255, 255, 255, 0.03)` -- must be barely perceptible

### Typography
- **Headline:** Space Grotesk 700, 80-90px, white with one red accent word
- **Support:** Space Grotesk 400, 24-26px, 40-45% white opacity
- **Tag line:** Space Mono, 15-16px, 10% white opacity, uppercase, letter-spacing 3-4px
- **Stat number:** Space Grotesk 700, 68-72px, `#C83C32`
- **Stat label:** Space Mono, 14-15px, 25% white opacity, uppercase

### Layout
- Content centered vertically and horizontally
- Spotlight gradient centered on the headline area (not dead center of canvas)
- Generous padding: 72-80px sides, 80px top/bottom
- Ultra-dim author name + hashtag at bottom, 6-8% opacity

## Rules
- NO spotlight ring/border -- it looks like a UI element
- NO drop shadows on text
- Ghost words must NOT compete with headline -- keep at 3% max
- Spotlight center should align with headline, not canvas center
- The glow should be subtle enough to feel atmospheric, not like a literal red circle
- Support text must be readable on mobile (40%+ opacity minimum)

## Best Dimensions
- 1080x1350 (portrait feed) -- primary
- 1080x1080 (square) -- works with tighter vertical spacing

---

*Claude Design Engine by Rahaman Bin Ujit*
