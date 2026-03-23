# Contact Sheet / Film Strip Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Niche:** Analog photography contact sheets
**Tested:** v213 (2026-03-21)
**Quality Score:** 4 — KEEP
**Best for:** Skills portfolio, capability inventory, editorial curation narratives

## Visual DNA

| Element | Specification |
|---------|--------------|
| Canvas | 1080x1350px |
| Background | Warm paper #F5F0E8 (cream/light beige) |
| Primary text | #0A0A0A at varying opacities |
| Accent | #C83C32 (red grease pencil marks) |
| Typography | Courier Prime (lab/film data), Space Mono (frame labels), Space Grotesk (headlines) |

## Core Elements

### Film Strip Grid
- 7 horizontal strips, 10 frames each (70 slots, 66 exposed)
- Frame size: 88x62px with 0.8px border at 16% opacity
- Frame bg: rgba(10,10,10,0.07) — subtle gray
- Sprocket holes on both sides (8x5px, 12% opacity, 3 per strip)
- Frame numbers below each frame in 7px Courier Prime
- 4px gap between frames, 16px between strips

### Grease Pencil Marks (the key visual layer)
- **Red circles** on "select" frames: 2.5px #C83C32 border, border-radius 50%, slight rotation (-3deg), 70% opacity
- **X marks** on "reject" frames: 2.5px diagonal lines at 22% opacity
- **THE select** (frame 66): Thicker 3.5px circle, 90% opacity, red checkmark, "PRINT" annotation, red-tinted background
- Circles go on rare/valuable skills; X marks on commodity/generic skills

### Lab Header
- Top left: Roll identifier, film stock (Kodak TRI-X 400), format (35mm), "SELECTS MARKED" in red
- Top right: Processing date, photographer name, frame count
- 11px Courier Prime at 45% opacity

### Film Edge Markings
- "KODAK 5063 TX SAFETY FILM 066" along top edge
- "END OF ROLL" along bottom of last strip
- 7px Courier Prime at 15% opacity

### Empty Frames (end of roll)
- Dashed borders, 3% opacity bg, showing the roll continues but these frames are unexposed yet

## Headline Structure
1. "They shot one roll." — 36px / weight 300 / 18% opacity (the crowd's attempt)
2. "Every frame exposed." — 52px / weight 700 / 88% opacity (the undeniable result)
3. "66 selects. One photographer." — 34px / weight 500 / italic / red (the impossibility)

## Metaphor Mapping
| Photography Term | Meaning |
|-----------------|---------|
| Contact sheet | Full portfolio review |
| Frame | Individual skill |
| Exposed | Built and working |
| Keeper / Select | Valuable, production-ready skill |
| Reject (X mark) | Commodity/generic skill everyone has |
| Roll 066 | The person's complete capability set |
| PRINT annotation | The one that defines the system |
| 100% keeper rate | The impossible stat |
| End of roll (empty frames) | Room for more, still shooting |

## What Makes It Work
- Warm paper palette is a strong departure from dark backgrounds
- The editorial judgment (circles vs X marks) tells a story of curation
- Analog photography metaphor resonates: everyone understands "keepers per roll"
- The impossibility of 100% keeper rate IS the hook
- Dense grid of 66 frames creates visual impact through repetition
- Grease pencil marks are the ONLY color — maximum accent impact

---

*Claude Design Engine by Rahaman Bin Ujit*
