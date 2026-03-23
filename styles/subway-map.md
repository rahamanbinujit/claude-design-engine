---
name: subway-map
description: Transit system map aesthetic. One red line connects all stations (skills/domains). Dim specialist lines dead-end after 2-3 stops. The map IS the argument.
quality-score: 4
status: KEEP
---

# Subway Map Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Concept
The poster is designed as a transit system map. One red line (the "Founder Express") connects ALL stations while dim specialist lines each serve only 2-3 stops. The visual contrast between the long continuous red line and the short dead-end lines IS the argument. Transit design meets capability data.

## When to Use
- Generalist vs specialist arguments
- System coverage / range of skills
- "I do everything" positioning
- Connection and integration stories
- Any post where breadth of capability is the point

## Specs

### Canvas
- 1080x1350, #0A0A0A background
- Grid dot pattern: 0.5px dots at 2% white, 40px spacing
- Zone boundary dashed lines at 2% white
- Ghosted zone labels (ZONE 1, 2, 3) at 60px, 1.8% white

### The Red Line (Hero)
- Stroke: #C83C32, 5px, 70% opacity
- Glow layer: rgba(200,60,50,0.06), 22px stroke behind main line
- Path: 90-degree turns only (transit convention), snaking through poster
- Terminal markers: 18px rounded rect at start/end

### Station Hierarchy
- **Major interchange:** 9px circle, 3px red stroke, 95% opacity + 14px outer ring at rgba(200,60,50,0.18). Label: 10px mono, red 50%, bold
- **Regular station:** 7px circle, 2.5px red stroke, 85% opacity. Label: 9px mono, 28% white
- **Minor station:** 5px circle, 2px red stroke, 75% opacity. Label: 7.5px mono, 20% white
- All stations: fill #0A0A0A (dark center), stroke #C83C32

### Dim Specialist Lines
- 5 lines (A-E), each 2-3 stations only
- Stroke: 4px, 7-14% white (decreasing opacity per line)
- Station dots: 4px, 12-16% white stroke
- "SPECIALIST" labels at terminus in 7px mono, 12% white
- Dead-end abruptly -- no continuation

### Text Placement
- **Tag** "Transit Authority" top-left, 9px mono, red 80%
- **Headline** top-left below tag:
  - Line 1 (dim observation): 54px weight-300, 18% white
  - Line 2 (bold declaration): 70px weight-700, 95% white, key phrase in #C83C32 with glow
- **Legend** top-right: line swatches (20px) with labels (7px mono)
- **Stat** bottom-left: 200px bold #C83C32, with glow
- **Body** bottom: 21px weight-300/400, 32%/55% white
- **Station data** bottom-right: 8px mono, 10% white

### Typography Decisions
- Headline dim line = the specialist's limitation (fading, narrow)
- Headline bold line = the generalist's declaration (bright, confident)
- Red accent on "every stop" = the words are colored in the route color because the speaker IS the route
- Stat below map = conclusion AFTER evidence (you see the route, then the count)

### Corner Brackets
- 24px L-brackets, 1px, 8% white, 32px from edges

### Identity Bar
- Bottom-right: name 11px/600/30% white + title 7px mono/12% white

## File Reference
- HTML: Example: V120B poster
- PNG: Example: V120B poster
- JPEG: Example: V120B poster

---

*Claude Design Engine by Rahaman Bin Ujit*
