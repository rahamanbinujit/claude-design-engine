# Tidal Force Field

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Concept:** The poster simulates gravitational spaghettification around a singularity. Vertical strip lines converge at center, text letters are physically displaced by tidal forces, the stat is stretched vertically and compressed horizontally. Skills orbit at different distances, with proximity = importance. Everything bends toward the center.

**Best for:** Posts about intensity, commitment, going all-in, being too deep to turn back, gravitational pull of mastery, "past the point of no return" themes, overwhelming capability.

---

## Specs

| Property | Value |
|---|---|
| **Size** | 1080x1350 |
| **Background** | #0A0A0A |
| **Primary font** | Space Grotesk |
| **Mono font** | Space Mono |
| **Key color** | #C83C32 (red) |

## Layout Structure

### Vertical Strip Lines (Spacetime Curvature)
- ~22 vertical SVG lines symmetrically placed around center (x=540)
- Spacing: 90px at edges, narrowing to 6px at center
- Opacity: 2.5% white at edges, increasing to 20% red at center
- Stroke width: 0.5px at edges, 1.5px at center
- The converging lines create the visual signature of curved spacetime

### Horizontal Compression Bands
- 8 dashed horizontal lines near the stat zone
- Narrowing spacing toward center (tidal squishing)
- Opacity: 2.5-5% (subtle, felt not seen)

### Event Horizon Ellipses
- Outer: 380x500px, 1px border at 10% red
- Inner: 220x320px, 1px border at 16% red
- Rotated "EVENT HORIZON" label at 22% red, 7px mono
- Vertical ellipses (taller than wide) matching the spaghettification axis

### Singularity Glow
- Outer: 420x700px radial gradient, 14% red center fading to transparent
- Core: 160x300px radial gradient, 22% red center
- Both vertically elongated (matching stretch direction)

### Force Arrows
- 3 pairs of horizontal compression arrows from each side, converging at center
- 2 vertical extension arrows pulling up/down from center
- 5-10% red opacity
- Tick marks on center line like a ruler being stretched

## Typography Rules

### Headline — Three-Line Gravitational Arc
1. **Line 1:** Observation of the distant. 62px weight-300 20% white. NO letter displacement. Undistorted = safely far away.
2. **Line 2:** The approach. 70px weight-700 92% white. Individual letter spans with 1-3px vertical displacement. Slight wobble as gravity starts pulling.
3. **Line 3:** Past the event horizon. 72px weight-700 italic #C83C32. Individual letter spans with 0-22px displacement in a WAVE pattern. Maximum spaghettification. The word closest to the singularity has the most extreme displacement.

**The key effect:** Displacement INCREASES from line 1 to line 3, mapping the gravitational gradient.

### Stat — Spaghettified Number
- 300px bold #C83C32
- `transform: scaleY(1.35) scaleX(0.82)` — vertically stretched, horizontally compressed
- Triple text-shadow glow (80px/30%, 160px/12%, 20px-offset/8%)
- Positioned at exact center = the singularity IS the center
- "/// Singularity ///" prefix in 9px mono at 35% red
- Descriptive label below in 9px mono at 22% white

### Skill Labels — Orbital Distance Hierarchy
- **FAR orbit** (edges): 8px mono, 8% white. Common skills. Undistorted.
- **MID orbit** (between edge and center): 8px mono, 14% white. Active skills.
- **NEAR orbit** (close to stat): 8px mono, 25% red, scaleY(1.15). Rare skills being pulled in and stretched.

### Body Text
- Observation: 20px weight-300 28% white
- Red rule separator: 55px x 3px at 45% red
- Subtitle/tagline: 20px weight-500 italic 55% white

### Data Panel
- 8px mono, 10% white, right-aligned, line-height 2.2
- Active/hot values in 30% red
- Fields: FIELD, MASS, SCHWARZSCHILD RADIUS, TIDAL FORCE, STATUS, ESCAPE VELOCITY, OBSERVER

## Supporting Elements
- Ghost "66" at 500px with scaleY(3.0) scaleX(0.4) at 0.7% white
- Left accent stripe: 3px, opacity gradient peaking at singularity height
- Corner brackets at 6% white
- Distortion band: full-width gradient tint across stat zone (2-4% red)
- Compression/stretch text markers with arrow/triangle glyphs
- SVG noise overlay at 2.5%

## Example Headlines
- "They orbit safely." / "I crossed the" / "event horizon."
- "They watch from a distance." / "I fell into" / "the singularity."
- "Safe distance is comfortable." / "But gravity pulls" / "the committed."

## File Size Reference
- PNG: ~14MB (4x deviceScaleFactor)
- JPEG 92%: ~1.4MB

---

*Claude Design Engine by Rahaman Bin Ujit*
