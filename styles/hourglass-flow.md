---
name: hourglass-flow
quality-score: 4
status: KEEP
date: 2026-03-21
---

# Hourglass Flow

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Concept:** A stylized hourglass where scattered skills fall through a single-person bottleneck and accumulate as a unified system. Time + patience + constraint = compound output.

**Best for:** Patience/process/accumulation content, "how does one person do it all" positioning, systems builder who compounds skills, any post about daily consistent effort, constraint-as-advantage narratives.

---

## Visual Structure

- **Canvas:** 1080x1350, #0A0A0A
- **Hourglass:** Two SVG triangles (inverted top, normal bottom) meeting at a narrow neck. Three nested outlines for depth (8%, 4.5%, 3% white). Outer solid, inner solid, innermost dashed.
- **Neck:** 6 horizontal red constriction lines at varying opacity (0.18-0.40), plus a radialGradient red glow. This is the focal tension point.
- **Falling stream:** 6px vertical gradient bar connecting neck to lower chamber (white-to-red gradient).
- **Upper chamber:** Dashed horizontal level lines narrowing toward neck. Scattered SVG particles (1-1.5px circles, 4-7% white).
- **Lower chamber:** Solid horizontal level lines getting progressively brighter red toward bottom (0.05 to 0.13). SVG particles in red tones. radialGradient red glow.
- **Ghost 66:** 500px at 1.5% opacity red, offset behind main content.

---

## Typography System

| Element | Font | Size | Weight | Color | Position | Meaning |
|---------|------|------|--------|-------|----------|---------|
| "They asked" | Space Grotesk | 52px | 300 | 16% white | Top-left | The crowd's whisper, a question from outside |
| Scattered skills | Space Mono | 9px | 400 | 6-11% white | Throughout upper chamber, slight rotations | Chaos, raw unprocessed inputs falling |
| "how one person" | Space Grotesk | 68px | 700 | 90% white | Center, at the neck | The constraint itself, bold = undeniable fact |
| "/// through one mind ///" | Space Grotesk | 28px | 300 | 35% white, 12px letter-spacing | Center, below neck text | The mechanism, whispered |
| "66" | Space Grotesk | 240px | 700 | #C83C32 | Center, bottom-third | Accumulated weight, grounded, transformed |
| "/// skills accumulated ///" | Space Mono | 10px | 400 | 50% red, 5px letter-spacing | Below "66" | Data label |
| "holds this much." | Playfair Display | 48px | 400 italic | #C83C32 | Left, below stat | Emotional resolution, the answer |
| Body text | Space Grotesk | 18px | 300/500 | 30-50% white | Left, bottom area | Method revealed after seeing the result |
| Secondary stats | Space Grotesk / Space Mono | 36px / 8px | 700 / 400 | 80% white / 18% white | Right-aligned, opposite "66" | Supporting evidence, sidebar annotation |
| Data strip | Space Mono | 8px | 400 | 10% white | Bottom, full width | System telemetry |
| Identity | Space Grotesk + Space Mono | 13px / 8px | 600 / 400 | 45% / 15% white | Bottom bar | Attribution |

---

## Narrative Reading Order

1. **"They asked"** -- the question arrives first, light and uncertain
2. **Scattered skills** -- the viewer sees what's falling (chaos, abundance)
3. **Hourglass shape** -- the structural constraint becomes visible
4. **"how one person"** -- the impossible bottleneck, bold and centered
5. **Falling stream** -- the eye follows the flow down through the neck
6. **"66"** -- the accumulated result, massive and red, the payoff
7. **"holds this much."** -- emotional resolution, italic serif = feeling
8. **Body + data** -- the method and metadata, for those who want to understand

---

## Key Techniques

- **Chaos-to-order transformation:** Upper chamber words are scattered, rotated, varying opacity. Lower chamber words are aligned, compressed, uniform. The hourglass neck is the transformation boundary.
- **Progressive density:** Level lines in lower chamber get brighter and wider toward the bottom = visible accumulation growing.
- **Constraint as drama:** The neck constriction (red glow, tight horizontal lines) is the most visually intense part of the hourglass structure. The constraint is not hidden -- it's celebrated.
- **Position = meaning:** Every text element's vertical position maps to its role in the story (question at top, constraint at middle, answer at bottom).

---

*Claude Design Engine by Rahaman Bin Ujit*
