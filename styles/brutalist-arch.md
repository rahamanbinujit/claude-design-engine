---
name: brutalist-arch
description: Brutalist architecture poster. Concrete bg with formwork lines and tie holes. Photo framed as recessed window opening. Verdigris copper green accent (patina = endurance). Work Sans extreme weight contrast. Architectural metadata. Every element references real construction.
status: KEEP
quality-score: 4.5
niche: Brutalist architecture
---

# Brutalist Architecture Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Palette
- **Concrete bg:** `#D5CFC6`
- **Dark concrete:** `#8A847B`
- **Shadow/text:** `#2A2724`
- **Verdigris accent:** `#5B8C6A` (oxidized copper patina)
- **Formwork wood:** `#9C8B72`
- **Window reveal:** `#C0BAB0`

## Material Storytelling
The background IS a poured concrete wall:
- **Formwork lines:** 1px horizontal lines at 90px intervals (4% black) = wood plank imprint
- **Tie holes:** 8px circles at formwork intersections (6% black) = metal form tie points
- **Concrete texture:** Overlapping radial gradients at varying warmths
- **Expansion joint:** 2px vertical line at center = structural control joint

## Window-as-Frame
Photo sits inside a RECESSED window opening:
```css
.window-recess {
  background: #2A2724;
  box-shadow: inset 4px 4px 20px rgba(0,0,0,0.3), inset -2px -2px 10px rgba(0,0,0,0.15);
}
.window-reveal { border: 4px solid #C0BAB0; } /* concrete edge */
.window-shadow { /* shadow cast below window */ }
```
Photo treatment: `saturate(0.7) brightness(0.9) contrast(1.1)` -- slightly muted, architectural

## Typography
- **Whisper:** Work Sans, 24px, weight 200, 35% dark
- **Headline:** Work Sans, 84px, weight 900, dark. Green accent on key word.
- **Body:** Work Sans, 16px, weight 300, 45% dark
- **Metadata:** IBM Plex Mono, 8-10px, 12-20% dark
- **Stats:** Work Sans, 40px, weight 900 (green for primary)
- **Stat labels:** IBM Plex Mono, 8px, 3px letter-spacing, 25% dark

## Architectural Metadata
- Section reference: "Section A-A /// Elevation"
- Grid coordinates: real location
- Level marker: "▽ FFL +0.000" (finished floor level)
- Drawing/version labels

## Best For
- "Built to last" / durability messaging
- Honest/transparent posts ("no cladding, no veneer")
- Systems architecture posts
- Long-term thinking / endurance content
- Posts where the tone is solid, unyielding, truthful

---

*Claude Design Engine by Rahaman Bin Ujit*
