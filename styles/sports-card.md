---
name: sports-card
description: Navy + gold luxury trading card aesthetic. Photo top, name middle, stats grid bottom. Gold borders, rating badge, limited edition numbering. Oswald condensed + IBM Plex Mono. Reframes personal brand as a collectible.
status: KEEP
quality-score: 4.5
niche: Sports graphics / Trading card
---

# Sports Card Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Palette
- **Background:** Deep navy `#0B1628`
- **Secondary bg:** Lighter navy `#122240`
- **Text:** Crisp white `#F0F0F0`
- **Primary accent:** Warm gold `#D4A44A`
- **Secondary accent:** Electric blue `#2E7DD6`
- **Tertiary:** Silver `#A0A8B8`

## Typography
- **Name (big):** Oswald, 72px, weight 700, uppercase, 4px letter-spacing
- **Name (first):** Oswald, 36px, weight 300, uppercase, 6px letter-spacing, 50% opacity
- **Category:** IBM Plex Mono, 10px, 5px letter-spacing, gold
- **Stats:** Oswald, 48px, weight 700 (gold primary, white secondary, blue tertiary)
- **Stat labels:** IBM Plex Mono, 8px, 3px letter-spacing, 30% silver
- **Tagline:** Barlow Condensed, 22px, weight 300, italic, 25% white

## Layout
- 1080x1350
- Photo zone: top 40% (520px), rounded top corners
- Gold shine line at photo/text boundary
- Name block below photo: category tag + first name (light) + last name (bold)
- 3x2 stats grid with thin gold dividers
- Tagline in italic condensed
- Card footer: series name + card number

## Visual Elements
- **Card border:** 1.5px gold at 15%, 12px border-radius, 32px from edge
- **Inner border:** 0.5px gold at 6%, 8px radius, 44px from edge
- **Corner marks:** 2px gold L-shapes at card border corners, 20px
- **Rating badge:** 80px circle, 2px gold border at 40%, navy bg at 75% + backdrop-filter blur
- **Gold shine:** 2px horizontal line, gradient from transparent to 50% gold to transparent
- **Diagonal pattern:** repeating-linear-gradient -45deg, 0.8% white lines at 40px intervals

## Photo Treatment
- `filter: brightness(0.95) contrast(1.1) saturate(1.1)` -- slightly boosted, not washed out
- Bottom gradient: only bottom 30% of photo, sharp falloff to navy bg
- object-position: center 20% (face in upper portion)

## Best For
- Personal brand "about me" posts
- Achievement/milestone celebrations
- "Stats" posts (skills, years, projects)
- LinkedIn intro posts
- Any post that benefits from the "collectible/rare" framing
- Gamification of personal brand

---

*Claude Design Engine by Rahaman Bin Ujit*
