# Stacked Bars Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Source experiment:** V25
**Quality Score:** 4/5

## Concept
Content organized in 5-6 horizontal bands of varying height, alternating between #111111 and #0A0A0A backgrounds. One band is a full-width red (#C83C32) accent bar highlighting the key stat. The layout feels like a dashboard or data report -- structured, systematic, scannable.

## Structure (top to bottom)

| Band | Height | Background | Content |
|------|--------|------------|---------|
| 1 — Tag bar | ~80px | #111111 | Red dot + category label (Space Mono, 13px, uppercase, letter-spacing 3px) |
| 2 — Headline | Flex/largest | #0A0A0A | Hero headline (82px, mixed weight 300/700), subtitle (22px, 45% opacity) |
| 3 — Red accent | ~140px | #C83C32 | Key stat number (88px bold white) + stat label (20px) |
| 4 — Stats row | ~160px | #111111 | 3-4 stat blocks in equal columns, divided by 1px vertical lines (8% opacity) |
| 5 — Pull quote | ~200px | #0A0A0A | Italic quote (24px, 70% opacity) with red left border (3px, 40% opacity) |
| 6 — Identity | ~90px | #111111 | Name (15px, 600 weight) + role (Space Mono, 11px uppercase) + red bar accent |

## Key Design Decisions
- **Alternating tones:** #111111 and #0A0A0A create subtle band separation without visible borders
- **1px divider lines** at 4% opacity between bands (barely there, just enough structure)
- **Red accent bar** is the only full-color element -- draws eye immediately to key stat
- **Left edge stripe** (4px) runs full height with varying opacity, solid red aligned to the accent bar band
- **Stat dividers** are 1px vertical lines at 8% opacity, spanning 70% of band height
- **Quote marks** are decorative (120px, 15% red opacity) positioned behind the quote text

## Typography
- Headline: Space Grotesk, 82px, mixed 300/700 weights, -2px letter-spacing
- Accent word: #C83C32 with red glow (text-shadow 60px/120px spread)
- Subtitle: Space Grotesk, 22px, 400 weight, 45% white opacity
- Stat numbers: Space Grotesk, 42px (row) / 88px (red bar), 700 weight
- Labels: Space Mono, 11-13px, uppercase, 35% opacity, 2-3px letter-spacing
- Quote: Space Grotesk, 24px, 400 italic, 70% opacity
- Identity: Space Grotesk 15px 600 + Space Mono 11px uppercase

## Best For
- **Stats-heavy positioning posts** (showing numbers, achievements, capabilities)
- **System/process posts** (the banded structure visually reinforces "structured system")
- **Dashboard-style data reveals** (each band = a data row)
- Posts where the KEY stat needs to dominate (the red bar makes one number unmissable)

## File Size
~0.40MB PNG (very efficient -- no textures, no grain, pure CSS layout)

## Variations to Try
- Double-height red bar for more dramatic stat emphasis
- Gradient fade between bands instead of hard alternation
- Adding a photo band (band with a full-bleed image, no text)
- Thin red stripe bands (8px) as visual separators between content bands

---

*Claude Design Engine by Rahaman Bin Ujit*
