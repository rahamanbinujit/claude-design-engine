# Submarine Depth Gauge

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5
**Best for:** Skills-as-depth metaphor, operating-beyond-limits posts, instrument/data visualization

---

## Concept
A vintage analog depth gauge where depth = skill rarity. The needle is buried deep in the red "crush depth" zone. Most systems operate at safe, shallow depths. This one is rated for the deep.

## Layout (1080x1350)
- **Top (surface zone):** Light-weight headline, dim, whispered = safety and comfort
- **Center:** Full circular gauge (720x720) with 270deg sweep, brass bezel rings
- **Gauge zones:** Green (0-2000m, safe/common) -> Yellow (2000-4000m, moderate) -> Red (4000-6600m, crush depth/rare)
- **Needle:** Red (#C83C32), 2.5-3.5px, with glow filter, points to max depth (lower-right)
- **"66" reading:** Near needle tip, red, glowing, isolated = the singular proof
- **Skill labels:** Outside gauge at appropriate depth zones (green=surface skills, red=deep skills)
- **Bottom third:** Bold headline (700 weight), conclusion, grounded
- **Bottom edge:** Mono data strip, whispered instrument readings

## Typography
- Surface headline: Space Grotesk 300, 36px, rgba(255,255,255,0.22), letter-spacing: 1.5px
- Deep headline: Space Grotesk 700, 48px, rgba(255,255,255,0.92), "deep." in #C83C32
- Reading "66": Space Mono 700, 54px, #C83C32 with red glow (35px + 70px blur)
- Gauge numbers: Space Mono, 12-14px, zone-colored (green/yellow/red)
- Mono strip: Space Mono, 8.5px, rgba(255,255,255,0.14), letter-spacing: 2px
- Skill labels: Space Mono, 9px, zone-colored, letter-spacing: 2.5px

## Text Placement Decisions (Typography Mastery)
- **Surface headline at top** = authority position, but whispered (300 weight, dim) = ironic: the "authority" is the safe choice
- **"66" isolated near needle** = significance through space, the number IS the proof
- **Deep headline at bottom** = grounding, conclusion, resolution. Bold = decisive answer
- **"deep." in red** = the accent word carries the emotional weight, colored to match the danger zone
- **Skill labels at depth positions** = position reflects meaning (surface skills literally at surface, deep skills literally at depth)

## Visual Elements
- Brass bezel: 3 concentric rings at slightly different radii, rgba(180,160,120) at 3-6% opacity
- Zone arcs: stroke-dasharray on circle r=290, green 9%, yellow 7%, red 12% + glow
- Tick marks: 3 tiers (major 2.5px at 22% white, minor 1.2px at 9%, fine 0.8px at 4%)
- Center hub: Dark circle + red dot center
- Inner pressure rings: 3 concentric at 1-2% white
- Corner rivets: 7px, brass radial gradient
- Grain: Canvas 256px tile, 10% opacity, overlay blend

## Color Zones
- Green: rgba(70-100, 160-170, 70-100, 0.09-0.45)
- Yellow: rgba(200, 180-190, 50-60, 0.07-0.35)
- Red: rgba(200, 60, 50, 0.12-0.55)

## Atmosphere
- Background: #0A0A0A
- Depth gradient: linear-gradient 180deg, subtle blue-black tint, darker at bottom
- Overall mood: Industrial, underwater, high-pressure, controlled danger

## Mono Data Format
`DEPTH: 6,600m / PRESSURE: 660 ATM / HULL: RATED / CRUSH DEPTH: EXCEEDED / STATUS: OPERATIONAL`

---

*Claude Design Engine by Rahaman Bin Ujit*
