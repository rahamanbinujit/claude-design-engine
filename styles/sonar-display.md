# Style: Submarine Sonar Display

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Niche:** Military sonar / submarine detection screen
**Tested:** v236 | Score: 4 | KEEP
**Palette:** Deep navy #0a1628, phosphor green #00FF41 (varying opacities), black accents
**Fonts:** Orbitron (headlines/values -- futuristic military), Share Tech Mono (labels/data -- terminal monospace)

## Key Elements

1. **Sonar circle** -- Centered SVG with concentric range rings, crosshair lines, sweep line, center point
2. **Sweep glow** -- Conic gradient simulating rotating sweep arm (green cone, ~30deg arc)
3. **Blip markers** -- Pulsing circles at different sizes/opacities representing skill domains as detected contacts
4. **Leader lines** -- Thin lines connecting blips to labels positioned in clear dark space
5. **Side data readouts** -- Flanking the sonar with military-style readings (DEPTH, RANGE, BEARING, etc.)
6. **Scanline overlay** -- Subtle repeating gradient for CRT screen effect
7. **Header/footer bars** -- Thin status bars with system info and navigation data
8. **Detection log** -- Bottom section with CONTACT entries listing capabilities

## Layout Structure

```
[HEADER BAR: system name + status]
[SIDE DATA LEFT]  [SONAR CIRCLE 700px]  [SIDE DATA RIGHT]
[BOTTOM: Name + Role + Headline + Detection Log]
[FOOTER BAR: version + stats]
```

## SVG Layering (Critical)

- Layer 1: Range rings, crosshairs, sweep line (background structure)
- Layer 2: Blip markers, center point (data points)
- Layer 3: Leader lines + text labels (annotations -- topmost)

## Content Mapping

| Sonar Element | Content Meaning |
|---|---|
| Center point | Rahaman (the operator) |
| Blip markers | Skill domains (contacts detected) |
| Range rings | Depth of expertise |
| Sweep line | Continuous scanning/awareness |
| Bearing 066 | 66 skills reference |
| Depth 66M | Operating at depth |
| ACTIVE mode | Always building |

## Rules

- ALL text on clear dark navy background only -- never on the sweep glow or ring lines
- Blip labels use leader lines to clear space (never placed directly on the sonar grid)
- Side readouts positioned in clear margins flanking the sonar
- Phosphor green only -- no other accent colors. Opacity variation creates hierarchy
- Scanlines at 1.5% max -- visible but not distracting
- Animations (pulse) on blips add life to the static concept

## Best For

- Surveillance/awareness messaging
- Solo operator positioning
- Dark-mode feed content (stands out in light-mode feeds)
- Military precision aesthetic
- "I see everything" narrative
- Systematic approach positioning
- Tech-forward personal brand

---

*Claude Design Engine by Rahaman Bin Ujit*
