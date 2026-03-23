# Interference Pattern

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Category:** Background texture + optical instrument
**Mood:** Scientific precision, signal-in-noise, clarity from complexity
**Best for:** System capability reveals, precision/measurement themes, "signal in the noise" posts, data-driven claims, posts where clarity emerges from complexity

## Core Concept
Two overlapping SVG diagonal line grids at slightly different angles create a natural moire interference pattern. Where the grids cross, visual density shifts organically -- no gradients needed, pure physics. A circular clear zone in the center acts as a lens, cutting through the interference to reveal the stat number in a void of clarity.

## Specs

### Background
- `#0A0A0A` solid background
- SVG noise overlay at 2.5% opacity (feTurbulence fractalNoise)

### Moire Grids
- **Grid 1:** 120+ parallel vertical lines, rotated 45deg around canvas center, 18px spacing, 1px stroke, 5.5% white
- **Grid 2:** 120+ parallel vertical lines, rotated 50deg around canvas center, 19px spacing, 1px stroke, 4.5% white
- The 5-degree angle difference + 1px spacing difference creates visible moire interference zones
- Both grids extend well beyond the canvas bounds (-800 to 1800+) to ensure full coverage when rotated
- Both grids masked by a radial gradient that fades them to black at a circular zone (center of poster)

### Circular Clear Zone
- Centered horizontally, positioned at ~46% vertical
- Radial gradient mask: solid black at center → transparent at edges, 16% radius
- Creates a void where the stat number reads cleanly against pure #0A0A0A

### Concentric Rings
- **Outer ring:** 440px diameter, 1px, 8% white, no fill
- **Main ring:** 400px diameter, 1.5px, rgba(200,60,50,0.25), box-shadow 40px red glow at 6% + inset glow at 4%
- **Inner ring:** 350px diameter, 0.5px, rgba(200,60,50,0.12)

### Crosshairs
- Horizontal and vertical lines through circle center, 1px, 15% red
- Extend ~300px beyond the ring in each direction
- Tick marks at cardinal points: 9px length, 1px, 20% red

### Red-Tinted Interference Zone
- 16 lines at 45deg behind the stat area, 1.5px, rgba(200,60,50,0.06)
- Creates a subtle warm glow where interference meets the clear zone

### Typography
- Headline: 72px, bold, uppercase, dim (16% white) / red (#C83C32) / bright (95% white) hierarchy
- Stat: 220px, bold, #C83C32, centered in clear zone
- Stat label: 11px mono, 22% white, below stat
- Secondary stats: 44px, 40% white, right-aligned
- Body: 22px, weight-300, 28% white

### Metadata
- Frequency labels around circle: 8px mono, 10% white ("Phase: 0.00", "Amplitude: 1.0")
- Interference indicator: red dot (5px, 35% red) + "Interference Detected" 8px mono 25% red
- Meta top: "Freq A: 45.0 / Freq B: 47.0 / Delta: 2.0 / Pattern: Moire" 9px mono 14% white
- Data strip: "Signal: Constructive / Wavelength: 18px / Interference: Active / Observer: Single / Output: Amplified / Status: Resonance"
- Side text rotated 90deg, 7px mono, 8% white

### Structure
- Corner L-brackets: 22px, 1px, 4.5% white
- Author bar: 1px border-top 6% white, name 13px 50% white, designation "Senior Marketing Executive" 8px mono 20% white

## Notes
- The moire effect is subtle but visible -- it creates organic density variation without any explicit gradient or pattern
- JPEG compression makes files larger than PNG for this style (fine line patterns don't compress well) -- use PNG
- The circular void is the hero element -- the stat emerging from interference reads as "signal found in noise"
- Adjust grid opacities together (keep Grid 1 slightly stronger than Grid 2 for depth)
- Angle difference sweet spot is 4-6 degrees -- less creates no visible moire, more destroys the interference pattern

## Reference
- Example: Interference Pattern poster
- Example: Interference Pattern poster

---

*Claude Design Engine by Rahaman Bin Ujit*
