---
name: magnetic-field
experiment: v140
quality-score: 4
status: KEEP
---

# Magnetic Field — Style Spec

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Core Concept
SVG dipole magnetic field lines flowing from north pole to south pole. The stat sits between the poles as the magnetic mass generating the invisible force field. Iron filing dots scatter along field lines, clustered denser near poles. Physics metaphor: accumulated skills create an invisible field that pulls everything into alignment.

## Visual Elements

### Field Lines (SVG paths)
- 24 field lines total (12 mirrored left/right pairs)
- Inner pairs: red (rgba 200,60,50 at 0.11-0.18 opacity), 1.1-1.5px stroke
- Outer pairs: white (rgba 255,255,255 at 0.05-0.08 opacity), 0.8-1.0px stroke
- 4 external return line pairs curving OUTSIDE the poles (completing the magnetic circuit)
- All lines are bezier curves from north pole (top) to south pole (bottom)
- Directional arrow chevrons on field lines at midpoints

### Pole Markers
- North pole (top center): red ring with glow + "Source" mono label
- South pole (bottom center): white dim ring + "Output" mono label
- Labels are 10px Space Mono, letterspaced

### Iron Filing Dots
- 30+ dots scattered along field lines
- Red cluster near north pole (3px, 0.25-0.30 opacity, some with glow)
- White along mid-field (2-2.5px, 0.07-0.10 opacity)
- Dim at outer edges (2px, 0.04-0.05 opacity)

### Red Ambient Glow
- Radial gradient behind stat, 700x500px ellipse
- Peak 14% opacity center, fading to transparent at 70%

### Ghost Text
- Single letter "B" (for B-field) at 440px, 1.8% opacity, rotated -90deg

## Typography

### Headline (3 lines, center-aligned)
1. "Some people attract attention" -- 48px, weight 300, 16% white (whisper)
2. "I create" -- 82px, weight 700, 93% white (bold claim)
3. "fields." -- 82px, weight 700, #C83C32 with 40px/80px red glow (payoff)

### Stat
- "66" at 260px, weight 700, #C83C32, 80px/160px red glow
- "Field Strength" label in 11px Space Mono, red 50%, letterspaced

### Body (center-aligned)
- "Attention is borrowed. Influence is generated." -- 22px, 300, 30% white
- "The field was always there. They just never had the instruments." -- 22px, 400, 50% white, italic

### Secondary Stats Row
- 5 / 2 / 10x at 38px bold 85% white
- Labels in 9px Space Mono, 25% white

### Data Panel (top-right)
- Field: Dipole / Strength: 66T / Alignment: Total / Polarity: N-S
- 8px Space Mono, 12% white, red highlights

## Layout Zones
- Top: Field indicator (red dot + "Active Field") + Data panel
- Upper-third: North pole marker + Headline block
- Center: Stat "66" between poles (THE MASS)
- Lower-third: South pole marker + Body text
- Bottom: Stats row + Identity bar

## Text Placement Logic
- Headline ABOVE the field = surface observation exists outside the force
- "fields." in red = the word mirrors the field lines (same color = same thing)
- "66" at exact center between poles = the generating mass
- Body BELOW south pole = conclusion after the field passes through
- Field flows top-to-bottom = vertical reading order IS the field direction

## Best For
- Invisible-influence positioning
- "I don't chase attention, I generate it" messaging
- Field/force/pull/attraction metaphors
- Systems builder as magnetic source
- Any content where the metaphor is "I create invisible forces others can't see but everyone feels"

## File Sizes
- PNG: 8.49MB
- JPEG 95%: 2.17MB

## Brand Compliance
- Fonts: Space Grotesk (headings), Space Mono (labels)
- Colors: #0A0A0A bg, #FFFFFF text, #C83C32 red accent
- 1080x1350 (4:5 LinkedIn)

---

*Claude Design Engine by Rahaman Bin Ujit*
