# Astronomical Parallax

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5 -- KEEP
**Metaphor:** Stellar parallax / trigonometric distance measurement. Two observation points (creative + technical) converge on a target star. Depth is only measurable from two perspectives.

## When to Use
- "Two skills / two perspectives" narrative posts
- Dual expertise, interdisciplinary advantage
- Depth perception, seeing what others can't
- "I combine X and Y" positioning
- Any post where the argument is "one viewpoint is flat, two create dimension"

## Specs

### Canvas
- 1080x1350px, #0A0A0A background

### Star Field (SVG, full canvas)
- ~65 background stars scattered across canvas (0.5-1.6px radius, 3-13% white)
- These are the FIXED reference frame -- they don't shift
- 10 brighter reference stars (1.3-1.6px, 9-13% white) for visual anchoring
- Celestial coordinate grid: 3 vertical RA lines + 3 horizontal Dec lines at 2.5% white

### Target Star (the stat)
- Positioned upper-third, centered at approximately (540, 380)
- Glow layers: 120px radial at 4% red, 60px at 8% red, 25px at 12% red
- Star point: 3.5px red circle + 1.8px white center dot
- 4-point diffraction spikes (vertical + horizontal at 15% red, diagonal at 8% red)
- Stat number at 200px bold #C83C32, positioned above star center
- Text glow: same number at 12% red with large blur filter
- Sublabels below: "/// PARALLAX TARGET ///" at 8px mono 14% white + "AI SKILLS DEPLOYED" at 7px mono 10% white

### Convergence Triangle (the key geometric structure)
- Earth orbit: dashed ellipse at bottom (rx=320, ry=80), 7% white, 1px stroke
- Sun at orbit center: 4.5px dot, 14% white
- Position A (left, x=220): 6px dot, 22% white, labeled "POSITION A" + metaphorical label (e.g., "CREATIVE")
- Position B (right, x=860): 6px dot, 22% white, labeled "POSITION B" + metaphorical label (e.g., "TECHNICAL")
- 2 AU baseline: dashed line connecting positions, 9% white
- Sightlines: solid lines from each position to target star, 10% white, 0.8px -- these form the VISIBLE TRIANGLE
- Extension lines: dashed past target to apparent positions, 5% white
- Crossing lines (red): from each position to opposite apparent position, 6% red, dashed

### Apparent Position Shift
- Two dashed circles (2.5px, 16% white) flanking the target star (~35px offset each side)
- Labels: "APPARENT POS A" / "APPARENT POS B" at 6.5px mono, 16% white
- Red dashed arc connecting them: 30% red, 1px
- Parallax angle label centered: "p = 66 mas" at 7px mono, 45% red

### Distance Ruler
- Vertical dashed line right side (x=980), from orbit to star, 8% white
- Tick marks at top and bottom, 12% white
- Rotated label: "d = 15.15 PARSECS" at 7px mono, 14% white

### Skill Labels (at distance zones)
- Far-field (common): 6-7% white, scattered wide across canvas edges
- Mid-field (moderate): 9-10% white, moderate distance from center
- Near-field (rare): 13-14% white, closer to convergence zone
- Target zone (rarest): 18-22% red, clustered near the parallax star
- All at 6.5px Space Mono, letter-spacing 1.5px

### Formula
- Bottom-left: "d = 1/p" at 8px italic mono, 14% white
- Supporting lines explaining variables at 6.5px, 9% white

### Headline (bottom-third)
- Line 1: ~52px, weight 300, 18% white -- the single-perspective limitation
- Line 2: ~66px, weight 700, 95% white -- the dual-perspective breakthrough
- Key word in #C83C32 italic (typically "depth" or equivalent)

### Body Text
- Below headline, 18px weight 300, 30% white
- Second line italic, 55% white

### Standard Elements
- Tag top-left: "Parallax Measurement" + red dot, 9px mono, 35% white
- Corner brackets: 18px, 8% white
- Data panel top-right: 7.5px mono, labels 14% white, values 38% red
- Secondary stats: right-aligned above headline, 38px bold 88% white + 7.5px mono labels
- Ghost stat: 480px, 1.2% white
- Left accent stripe: 3px wide, red gradient
- Identity bar bottom: name 11px 600-weight 30% white + title 7.5px mono 14% white
- SVG noise: 2.5%

## Signature Technique
The CONVERGENCE TRIANGLE formed by two sightlines meeting at the target star is the dominant visual structure. It creates a natural V-shape that draws the eye upward from the baseline to the stat. The triangle IS the argument: two separated viewpoints create a measurement instrument that neither viewpoint alone can provide.

## Adaptation Notes
- The two "positions" can be relabeled for any dual-perspective concept (CREATIVE/TECHNICAL, STRATEGY/EXECUTION, CONTENT/DISTRIBUTION, etc.)
- The wider the baseline (farther apart the positions), the stronger the visual triangle
- Background stars must remain FIXED and dim -- they are the constant that makes the nearby star's shift measurable
- The parallax angle label is critical -- it names the measurement that proves depth

---

*Claude Design Engine by Rahaman Bin Ujit*
