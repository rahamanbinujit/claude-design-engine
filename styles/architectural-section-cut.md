# Style: Architectural Section Cut

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Summary
Dark building section drawing (side elevation, cut in half). Multi-story structure where typical floors have identical repetitive "DESK" layouts, but ONE floor is highlighted in red as the "system floor" -- densely packed with functional zones (AI, Content, Strategy, etc.). The stat "66" appears as a section callout bubble. Headlines are positioned AT the floors they describe: dim text at typical floors, bold text at the system floor.

## Specs
- **Size:** 1080x1350
- **Background:** #0A0A0A
- **Accent:** #C83C32 (system floor border, zone labels, headline accent, callout stat)
- **Fonts:** Space Grotesk (headlines), Space Mono (labels, metadata, elevation markers)
- **Structure:** 7 floors + ground, 4 structural columns, floor slabs at 130px intervals

## Key Elements
- **Typical floors:** Room dividers (4% white), "DESK" labels repeated (9% mono), "TYPICAL FLOOR" labels (5% white) -- mundane repetition
- **System floor:** 1.5px red border (25% red), 3% red bg fill, radial glow. 14 functional zones as dashed-border cells with mono labels (50% red)
- **Section cut markers:** A-A circles with dashed vertical cut line (left edge)
- **Elevation markers:** Right edge, +00.00m to +28.00m, system floor values tinted red
- **Floor numbers:** Left edge (FL1-FL7, GF), system floor in red
- **Ground:** Solid line + 45-degree hatch pattern below
- **Scale bar:** Bottom-right, segmented with "0 5 10m" label
- **66 callout:** Section callout bubble (120x80px, red border) right of building at system floor level, connected by leader line
- **Noise:** SVG fractalNoise at 3%

## Typography Placement (Critical)
- **"Same building."** -- 300 weight, 36px, 22% white. Positioned AT a typical floor level, among the DESK labels. The text lives in the mundane space it describes.
- **"Different floor plan."** -- 700 weight, 48px, 92% white, "floor plan." in #C83C32. Positioned at/below the system floor. The text emerges FROM the exceptional space.
- The vertical distance between the two headlines = the gap between ordinary and extraordinary.
- Mono metadata (7px, 8% white) at bottom-left: PROJECT / SECTION / SCALE / FLOOR / CAPACITY / STATUS

## When to Use
- Posts about differentiation, standing out, having a different internal structure than everyone else
- "Same on the outside, different on the inside" narratives
- System/capability posts where the point is density vs. emptiness

## Source
v157-architectural-section. Score 4. KEEP.

---

*Claude Design Engine by Rahaman Bin Ujit*
