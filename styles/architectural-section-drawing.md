# Style: Architectural Section Drawing (Building Cutaway)

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Summary
Light-background architectural cross-section poster treating the one-person system as a multi-story building. Full technical drawing conventions: dimension lines, hatching patterns, level markers, scale bar, north arrow, title block. Each floor is a skill domain with rooms labeled as individual skills. The metaphor: from outside it looks like one building, but the section reveals 66 rooms inside.

## Specs
- **Size:** 1080x1350
- **Background:** #F2EDE6 (warm architectural paper)
- **Accent:** #C44B3F (level markers, section cut line, headline accent)
- **Text:** #1A1A1A (primary), #888/#999 (secondary), #aaa (tertiary)
- **Fonts:** Playfair Display (title 42px, ghost 66), DM Mono (all technical labels/dimensions), DM Sans (headline 26px)
- **Structure:** 6 floors + foundation, cavity walls, floor slabs, roof with slope

## Key Elements
- **Building structure:** Cavity walls (double lines with brick hatching), floor slabs (5px thick), dashed partition walls, roof with insulation hatching
- **Floors:** LVL 6 Strategy (top), LVL 5 AI Systems, LVL 4 Marketing, LVL 3 Creative, LVL 2 Production, LVL 1 Foundation
- **Room labels:** 7px DM Mono at 60% opacity -- decorative density showing skill volume (50+ skills)
- **Level markers:** Right side, red triangles pointing to floor lines, leader lines to "LVL X / DOMAIN" labels
- **Dimension lines:** Left side, tick marks at each floor, elevation values (+7.200 to +1.200)
- **Hatching patterns:** Concrete (45deg diagonal), brick (running bond), insulation (wavy), earth (cross-hatch)
- **Material legend:** Bottom, 4 swatches with labels
- **Architectural details:** Windows (with mullions), door with swing arc, staircase with treads/arrows, foundation below ground
- **Section cut:** Red dashed A-A' line through building center (25% opacity)
- **Ghost 66:** 280px Playfair Display at 6% red opacity behind building center
- **Annotation callouts:** Leader lines from building elements to labels in clear margin space
- **Title block:** Bottom right corner box with DWG NO / SECTION / SCALE / DATE
- **North arrow + scale bar:** Top right

## Headline Treatment
- "From the outside, it looks like one building." (bold black)
- "The section reveals 66 rooms inside." ("66 rooms inside" in red bold)

## What Makes It Work
- The section-drawing metaphor is immediately understood: one building from outside, complex interior revealed
- Authentic architectural drawing conventions make it recognizable as a technical document
- Staircase = one person moving through all floors (vertical circulation)
- Foundation floor (discipline, faith, fitness) literally supports everything above
- Decorative skill labels create visual density without requiring readability
- Material hatching patterns add authentic texture

## Best For
- Hidden complexity messaging
- "More than meets the eye" positioning
- Technical/engineering aesthetic
- Systems-within-systems metaphor
- One-person-as-infrastructure concept

## Experiment
- **Version:** v220
- **Quality Score:** 4
- **Status:** KEEP

---

*Claude Design Engine by Rahaman Bin Ujit*
