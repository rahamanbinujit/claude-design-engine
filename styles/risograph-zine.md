---
name: risograph-zine
description: 2-color risograph print / DIY zine. mix-blend-mode:multiply creates authentic ink overlap. Misregistered color layers. Transparent ink opacity. Recycled cream paper. Registration marks. Print edition metadata.
status: KEEP
quality-score: 4.5
niche: Risograph / Zine printing
---

# Risograph / Zine Print Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Palette
- **Paper:** Recycled cream `#F0EAD6`
- **Ink 1 (Blue):** Riso blue `#0060B1` at 55-70% opacity
- **Ink 2 (Pink):** Fluorescent pink `#FF5588` at 50-60% opacity
- **Overlap:** Purple (automatic via multiply blend)
- **Overprint (Black):** `#2A2A2A` (sharpest layer, full opacity)

## Core Technique: mix-blend-mode:multiply
```css
.blue-shape {
  background: #0060B1;
  opacity: 0.70;
  mix-blend-mode: multiply;
}
.pink-shape {
  background: #FF5588;
  opacity: 0.50;
  mix-blend-mode: multiply;
}
```
Where shapes overlap = automatic purple ink mixing. This IS risograph.

## Misregistration Effect
Same text rendered twice -- once in ink color (offset 3px), once in black (sharp):
```css
.blue-ghost { color: #0060B1; opacity: 0.50; mix-blend-mode: multiply; top: 305px; left: 63px; }
.headline { color: #2A2A2A; top: 300px; left: 60px; } /* sharp overprint */
```
The 3px offset simulates the paper shifting between riso passes.

## Typography
- **Headline:** DM Sans, 96px, weight 900, uppercase, -0.03em
- **Stat number:** DM Sans, 260px, weight 900, pink multiply
- **Bar text:** Chivo Mono, 13px, weight 900, 6px letter-spacing, cream on blue
- **Labels:** Chivo Mono, 9-10px, weight 700, 4px letter-spacing
- **Body/Quote:** DM Sans, 18px, weight 400

## Print Elements
- **Registration mark:** 12px circle (1px border) + crosshair lines
- **Halftone dots:** radial-gradient in ink color, 12px grid, 15% opacity multiply
- **Paper grain:** SVG noise at 6% multiply
- **Edition number:** "Edition: 66/100"
- **Print specs:** "Riso Blue + Fluorescent Pink on Recycled Cream 90gsm"

## Best For
- DIY / indie / maker posts
- "Built by hand" messaging
- Anti-corporate / anti-polished aesthetic
- Creative process / craft posts
- Any content where imperfection = authenticity = credibility

---

*Claude Design Engine by Rahaman Bin Ujit*
