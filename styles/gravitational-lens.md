# Gravitational Lens — Style #100

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**The Century Style. Poster as physics simulation.**

## Concept
A gravitational lensing effect where the central stat (66) acts as a singularity -- a point of such density that everything around it warps. Light rays curve, background objects stretch into arcs, text distorts as it approaches the event horizon. The poster IS a physics diagram.

## When to Use
- Gravitational pull/influence metaphors
- Singularity/convergence posts
- Density/depth messaging ("one person, 66 skills")
- "Everything orbits around one system" positioning
- Any content where accumulated mass creates its own field of influence

## Layout Structure
- **1080x1350** (4:5 portrait)
- **Headline zone:** top 80px, left-aligned, flat spacetime (undistorted)
- **Gravitational field:** center canvas (~395-900px), all lensing effects live here
- **Stat singularity:** dead center of field, maximum isolation
- **Bottom zone:** body + stats + identity, grounded below the field
- **Edge metadata:** rotated observer instrument data on left/right edges

## Typography
- **Headline whisper:** Space Grotesk, 48px, weight-300, 14% white
- **Headline claim:** Space Grotesk, 82px, weight-700, 93% white
- **Headline accent:** Space Grotesk, 82px, weight-700, #C83C32 with 50%/20% red glow
- **Stat number:** Space Grotesk, 200px, weight-700, #C83C32, triple red glow (80/160/240px)
- **Stat label:** Space Mono, 10px, letter-spacing 6px, 50% red
- **Body:** Space Grotesk, 20px, weight-300, 30% white. Italic emphasis at 50% white
- **Stats row:** 38px bold white, 9px mono labels
- **Observer data:** Space Mono, 7px, 16% white, red values at 40%
- **Edge metadata:** Space Mono, 7px, 12% white, rotated 90deg

## Visual Elements

### Accretion Disk (3 rings)
1. **Inner ring:** 560px circle, 2.5px border with directional opacity (top brightest at 50% red, sides 28-38%, bottom dimmest at 12%). Box-shadow glow (60px/18% + 120px/10%). Inner ::after ring at 18px inset, warm tones (255,140,100).
2. **Outer ring:** 640px circle, 1.2px border at 14% red, box-shadow 80px/8%.
3. **Ghost ring:** 720px circle, 0.8px border at 8% red.

### Photon Sphere
- 380px circle, 1.2px border in warm white (255,200,160) at 18%, box-shadow 20px/22% + 50px/10% red.

### Event Horizon
- 420px circle, radial gradient from solid #0A0A0A center to transparent. Creates the dark void.

### Gravity Glow
- 800px radial gradient: 20% red center -> 10% at 30% -> 4% at 50% -> transparent.

### SVG Light Rays (8 paths)
- Quadratic bezier curves entering from edges, bending around center (540,675).
- Wide deflection rays: 5% white, 0.8px stroke.
- Mid rays: 8-10% white, 0.8-1.0px stroke.
- Grazing rays (closest to photon sphere): 16% red, 1.2px stroke.

### Einstein Ring Arcs
- Curved SVG paths above and below the field at 10-12% white, 0.8-0.9px stroke.
- Represent lensed images of background objects.

### Lensed Stars
- Elongated SVG ellipses (rx:14-16, ry:2.5-3.5) near the field.
- White at 10-12% opacity, red at 10% for closest ones.
- 1.5px Gaussian blur filter.
- Rotated to align tangent to the field.

### Warped Ghost Text
- 2-3 text elements near the gravitational field.
- CSS transforms: scaleY(0.4-0.7) + scaleX(1.15-1.5) + skewX = gravitational distortion.
- 6% white opacity, decreasing toward event horizon.
- Content relates to the physics: "everything bends" / "toward one point" / "of infinite density"

### Background Century Mark
- "100" at 600px, 1.8% white, centered, z-index 0.

### Decorative
- Crosshair at singularity (0.5px, 18% red)
- Corner L-brackets (20px, 6% white)
- Left accent stripe (3px, gradient peaking red at gravity center height)
- "STYLE // 100" marker top-right (9px mono, 45% red)
- Schwarzschild labels at field boundaries (7px mono, 30% red)
- SVG noise overlay at 3% opacity

## Text Placement Philosophy
1. Headline lives in **flat spacetime** above the lens -- undistorted, calm, readable
2. Ghost text near the field is **being lensed** -- physically warped by CSS transforms
3. Stat at **singularity center** -- the mass that warps everything, maximum isolation
4. Body at **bottom-third** -- grounded conclusion past the gravitational field
5. Observer data on **edges** -- the astronomer's telescope readout, whispered

## Color Palette
- Background: #0A0A0A
- Primary accent: #C83C32 (red -- the color of the accretion disk, mass, energy)
- Warm accent: rgba(255,140,100) (inner accretion ring -- hotter material)
- Photon sphere: rgba(255,200,160) (warmest point, closest to event horizon)
- Text: white at various opacities (14% whisper to 93% bold)

## File Sizes
- PNG: ~3.7MB (4x Puppeteer export)
- JPEG 95%: ~0.92MB (recommended for LinkedIn)

## Origin
Style #100 -- the century mark. Created 2026-03-20. First design to simulate gravitational physics as a visual metaphor for skill density.

---

*Claude Design Engine by Rahaman Bin Ujit*
