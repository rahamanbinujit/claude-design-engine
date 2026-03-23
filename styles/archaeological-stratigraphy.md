# Archaeological Stratigraphy

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Best for:** Depth-based narratives, skill rarity/depth metaphors, "most people stop here" positioning, foundation/bedrock metaphors, excavation/discovery posts, any content where the argument is "the valuable thing is buried deep and most people don't dig far enough."

## Concept
A trench section drawing (archaeological cross-section) showing layered strata from surface to bedrock. Each stratum represents a different depth of capability. Common skills are found at the surface (abundant, easily excavated), rare skills are found deep below the excavation limit (requiring commitment most people lack), and the deepest stratum contains the foundational artifact. The visual gradient from dim-white surface to bright-red bedrock IS the rarity argument.

## Layout Structure (1080x1350)

| Zone | Position | Content |
|------|----------|---------|
| **Tag** | Top-left (52px) | "Stratigraphic Section" in mono red 55%, 4px letter-spacing, red dot |
| **Catalog ID** | Top-right (52px) | Exc. SYS-066 in mono red 40% |
| **Trench header** | Inside SVG top (14px) | Trench/Section/Scale notation, grid labels A-H |
| **Depth scale** | Left margin (22-695px) | 0.0m to 6.6m, white-to-red transition |
| **Strata layers** | SVG zone (90-790px) | 6 horizontal strata with organic boundary lines |
| **Stratum labels** | Right side of SVG | STR I-VI with sublabels |
| **Skill artifacts** | Scattered in strata | Circles with mono labels, opacity increasing with depth |
| **Excavation limit** | ~60% depth | Red dashed line (1.8px, 0.28 red) |
| **"66" stat** | Bedrock center | 150px bold red (0.16) with dual glow |
| **Headline 1** | 815px | "They dig at the surface." at 44px weight-300 15% white |
| **Headline 2** | 872px | "I excavated to bedrock." at 62px weight-700 93% white, "bedrock." italic red |
| **Body** | 968px | Observation 24% + red rule + conclusion italic 50% |
| **Punchline** | 1108px | Three-number compression, italic 32% |
| **Data panel** | Right 968px | Excavation report metadata |
| **Identity** | Bottom 42px | Name + role |

## Strata Specs

| Stratum | Depth | Fill Opacity | Boundary Stroke | Skills | Color |
|---------|-------|-------------|----------------|--------|-------|
| I (Surface) | 0-80px | 0.028 white | 0.10 white, 0.8px | None (disturbed) | White |
| II (Common) | 80-200px | 0.035 white | 0.12 white, 0.9px | 6 common, dense | White 0.11-0.14 |
| III (Mid) | 200-310px | 0.042 white | 0.13 white, 1.0px | 5 mid, fewer | White 0.15-0.18 |
| IV (Transitional) | 310-420px | 0.050 white | 0.14 white, 1.0px | 2 transitional | White 0.18-0.22 |
| V (Rare) | 420-540px | 0.035 red | 0.18 red, 1.2px | 3 rare | Red 0.26-0.28 |
| VI (Bedrock) | 540-700px | 0.055 red | N/A (bottom) | 1 apex (AI Systems) | Red 0.38-0.45 |

**Boundary lines:** Organic/undulating Q-curves (quadratic bezier), never straight. ~3-8px vertical variation. Opacity increases with depth.

**Texture patterns:** Each stratum has a fill pattern (topsoil=stipple, clay=horizontal lines, gravel=scattered circles, bedrock=cross-hatch). Patterns are very subtle (0.02-0.04 opacity).

## Artifact Markers
- Common: 3.5px circle, 0.14 white stroke, 0.7px width
- Mid: 4px circle, 0.18 white stroke, 0.8px width
- Rare: 5px circle, 0.28 red stroke, 1.1px width, filled inner (0.04 red)
- Apex: 7px circle, 0.38 red stroke, 1.4px width, triple concentric rings (14px dashed, 22px dotted)

**Scattered finds:** Small rotated rectangles (pottery shards) and triangles (flint) in upper strata. Density decreases with depth (common = lots of fragments, deep = pristine complete artifacts).

## Key Visual Elements
- **Excavation limit line:** Red dashed line at ~60% depth. 1.8px, rgba(200,60,50,0.28), dasharray 10/6. With "/// EXCAVATION LIMIT ///" label. This is the boundary where most people stop.
- **"66" in bedrock:** 150px bold, rgba(200,60,50,0.16). Dual elliptical glow (inner 180x45 at 0.10, outer 360x70 at 0.07). Surrounded by dashed excavation bracket.
- **Depth scale:** Left margin, 0.0m to 6.6m. White labels at surface, transitioning to red at depth. 6.6m in bold red.
- **Excavation grid:** 8 vertical dashed lines (A-H), 0.025 white.

## Typography Decisions
- Headline 1 is the surface observation: light, dim, easy truth
- Headline 2 is the depth claim: bold, bright, with key word in italic red matching the bedrock color
- The weight transition 300->700 IS the depth transition: casual surface -> committed excavation
- Body text: first line is the universally true statement (dim, regular), second line in italic is the thesis (brighter, conviction)
- Punchline compresses the whole poster into three numbers

## What Makes This Style Work
1. **Natural metaphor:** Everyone intuitively understands that depth = difficulty = rarity
2. **The excavation limit line:** Creates a clear "most people stop here" boundary -- the most powerful single element
3. **Progressive revelation:** The poster gets brighter/redder as you look down, pulling the eye toward the deepest layer
4. **Archaeological authenticity:** Stratum labels, depth scales, Harris Matrix notation, artifact markers -- it reads as a real section drawing
5. **The "66" is not placed, it's found:** The stat exists IN the bedrock, it was discovered, not declared

---

*Claude Design Engine by Rahaman Bin Ujit*
