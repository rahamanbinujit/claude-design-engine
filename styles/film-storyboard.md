---
name: film-storyboard
source: v156
quality-score: 4
status: KEEP
---

# Film Storyboard

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Concept
The poster is a 6-panel film storyboard. 5 panels contain dim, ghosted scene descriptions of mundane work life. The 6th panel breaks the grid -- red border, overflow, the stat glowing at maximum emphasis. The metaphor: everyone follows the same script, but the director changes the outcome.

## Layout
- **Canvas:** 1080x1350, #0A0A0A
- **Headline:** Top, left-aligned. Two lines.
  - Line 1: Weight 300, 25% white (the given)
  - Line 2: Weight 700, full white (the twist)
- **Storyboard grid:** 2 columns x 3 rows, 16px gap, 72px padding
- **Panels 1-5:** 1px border at 6% white, rounded 6px corners
  - Scene number top-left (8px mono, 12% white)
  - Camera direction top-right (7px mono, 8% white, "STATIC")
  - Scene description centered (10px mono, 10% white, with location header at 9px/6%)
- **Panel 6 (break):** 2px #C83C32 border, 4% red bg tint
  - Bleeds into adjacent panel (negative margins)
  - Stat at 140px bold #C83C32 with 60px glow
  - Label below stat (11px mono, 50% white)
  - Camera direction: "PUSH IN" in red

## Film Elements
- Sprocket holes on left/right edges (10x16px, 1px border at 4% white)
- Thin aspect ratio bars at storyboard boundaries (3px, 3% white)
- Frame counter top-right (9px mono, 8% white): FRM / FPS / TC
- REC indicator with red dot (8px mono, 40% red)
- Thin vertical rules between sprockets and content (1px, 3% white)

## Typography
- **Headline:** Space Grotesk, 52px, -1px letter-spacing
- **Scene descriptions:** Space Mono, 10px, 1.7 line-height
- **Location headers:** Space Mono, 9px, 2px letter-spacing, uppercase
- **Scene numbers:** Space Mono, 8px, 2px letter-spacing, uppercase
- **Camera directions:** Space Mono, 7px, 1.5px letter-spacing, uppercase
- **Stat:** Space Grotesk, 140px, weight 700, -6px letter-spacing
- **Production metadata:** Space Mono, 8px, 1.5px letter-spacing, uppercase

## Narrative Logic
- Each panel tells a vignette of mundane work (office scenes, meetings, conferences)
- Camera direction "STATIC" on mundane panels = nothing changes
- Camera direction "PUSH IN" on break panel = the camera moves toward the subject
- The weight shift from 300 headline to 700 headline = the narrative pivot
- The break panel's overflow = the story can't be contained by conventional structure

## Colors
- Background: #0A0A0A
- Text: White at varying opacities (6% to 100%)
- Accent: #C83C32 (break panel border, stat, camera direction, REC dot)
- Red bg tint: rgba(200, 60, 50, 0.04)

## Best For
- Narrative/storytelling posts
- "Everyone does X, I do Y" contrast posts
- Skill/capability showcases
- Posts about breaking conventions or doing things differently

---

*Claude Design Engine by Rahaman Bin Ujit*
