---
name: library-card
description: Library card catalog. Yellowed card in walnut drawer with brass label, stacked shadows, Dewey decimal, Special Elite typewriter font, Date Due grid telling circulation story, subject headings, circulation stamps. "Never returned."
status: KEEP
quality-score: 5
niche: Library science / Card catalog
---

# Library Card Catalog Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Palette
- **Drawer bg:** Dark walnut `#3D3530`
- **Card:** Yellowed ivory `#F5EDD8`
- **Card shadow layers:** `#E8E0CC`, `#DBD3BF`, `#CEC6B2`
- **Typed text:** Faded black `#2A2420`
- **Red stamp:** `#B8352A`
- **Blue stamp:** `#2B4C7E`
- **Pencil:** `#7A746C`
- **Brass:** `rgba(184,150,90,...)`

## The Card Object
```css
.card {
  background: #F5EDD8;
  box-shadow: 3px 3px 0 #E8E0CC, 6px 6px 0 #DBD3BF, 9px 9px 0 #CEC6B2,
              0 12px 40px rgba(0,0,0,0.25);
}
```
Three stacked card shadows = a full card drawer behind the front card.

## Key Elements
- **Brass label holder:** Bordered box at top with letter-spacing text
- **Dewey Decimal:** Real classification number (658.066 = business systems)
- **Cutter number:** Author-based sub-classification (B55s)
- **Red header line:** Horizontal rule at author/title boundary
- **Ruled lines:** repeating-linear-gradient at 32px intervals
- **Thumb cut:** Dark semicircle at bottom (CSS border-radius)

## Date Due Grid (the star element)
```
| JAN 15 (blue) | FEB 02 (blue) | FEB 28 (blue) |
| MAR 05 (blue) | MAR 12 (RED)  | MAR 21 (bold) |
|               |               |               |
```
Tells the story: checked out continuously, one overdue date, still active.

## Typography
- **Typed content:** Special Elite, 13-24px (THE typewriter/catalog font)
- **Editorial:** Libre Baskerville, 22px, italic for quotes
- **Metadata/Labels:** IBM Plex Mono, 8-10px, 700 weight, letter-spacing
- **Pencil notes:** Special Elite at 50% opacity

## Stats Format
```
Total skills cataloged ............... 66
Brands in collection ................. 2
Checkout status ............ NEVER RETURNED
```
Dotted separators between label and value.

## Best For
- Knowledge/learning posts
- "In-demand" messaging (never returned = always needed)
- Catalog/inventory of capabilities
- Intellectual positioning
- Any post where the metaphor is "this knowledge is checked out by everyone"

---

*Claude Design Engine by Rahaman Bin Ujit*
