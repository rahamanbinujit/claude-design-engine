---
name: travel-poster
description: Vintage airline/tourism poster. CSS-only illustrated sunset scene (gradient sky, radial sun, banding lines, mountain silhouettes, water reflection). Abril Fatface display serif. Warm peach + teal + cream. Aspirational, warm, inviting.
status: KEEP
quality-score: 4.5
niche: Retro travel / Tourism poster
---

# Retro Travel Poster Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Palette
- **Sky:** Deep blue `#1E3A5F` → purple `#6B5B7B` → peach `#F2A065` → coral `#E86F5C` → orange `#D4553E`
- **Water:** Dark teal `#15374A` → `#122E40` → `#0F2536`
- **Text:** Cream `#FFF5E6`
- **Accent:** Warm peach `#F2A065`
- **Mountain silhouettes:** `#0F2536`

## The Illustrated Scene (all CSS, no images)
```
SKY: 8-stop linear-gradient (180deg) from deep blue to sunset colors
SUN: 320px radial-gradient circle at horizon (cream center → peach → coral → transparent)
SUN GLOW: 500px radial gradient at 20% opacity behind sun
BANDING LINES: 5 horizontal bars through sun (4-10px height, increasing opacity 0.3→0.7)
MOUNTAINS: CSS border-trick triangles (border-left + border-right transparent, border-bottom solid)
WATER: linear-gradient from dark teal to deeper teal
SHIMMER: Thin vertical radial gradient reflection below sun
```

## Typography
- **Destination title:** Abril Fatface, 120px, cream with subtle text-shadow. THE vintage tourism font.
- **Subtitle:** Josefin Sans, 16px, weight 200, 14px letter-spacing, uppercase, 50% cream
- **Tagline:** Josefin Sans, 28px, weight 300, 55% cream. Accent word in weight 600 italic peach.
- **Stats:** Abril Fatface, 42px, peach primary / cream secondary
- **Stat labels:** Josefin Sans, 10px, weight 300, 3px letter-spacing, 30% cream
- **Vintage band:** Josefin Sans, 13px, weight 200, 6px letter-spacing, 20% cream

## Layout
- 1080x1350, gradient sky bg
- Title centered at top (in the sky)
- Illustrated scene occupies middle 40%
- Text zone below horizon (water area)
- Stats as horizontal card strip
- Vintage text band with decorative lines
- Credits at very bottom

## Best For
- Journey/growth/aspiration posts
- "Building something beautiful" messaging
- Career milestone celebrations
- Optimistic, warm-toned content
- Any post where the mood is forward-looking, adventurous, hopeful

---

*Claude Design Engine by Rahaman Bin Ujit*
