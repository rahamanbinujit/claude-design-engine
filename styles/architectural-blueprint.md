# Style: Architectural Blueprint

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Summary
Dark technical floor plan poster simulating a real architectural drawing. Rooms represent skill domains with hierarchy via color. Structural column grid with "66" at the core intersection. Full architectural notation: dimension lines, section markers, door swing arcs, scale bar, title block, north arrow.

## Specs
- **Size:** 1080x1350
- **Background:** #0A0A0A
- **Accent:** #C83C32 (red for structural elements, rare-skill rooms, core column)
- **Fonts:** Space Grotesk (headlines, body), Space Mono (labels, data, room IDs, grid markers)
- **Grid:** Structural column grid (circled letter/number markers) with dashed gridlines at 2% white. Core intersection gridlines tinted red.

## Visual Elements
- **Building envelope:** Double-line wall (outer 2px at 10% white, inner 0.5px at 4% white)
- **Central corridor:** Horizontal band connecting all rooms, filled at 1.2% red opacity
- **Rooms:** 8 rooms in 2 rows of 4, each with mono label, room number, square footage
- **Room hierarchy:** Rare skills in red (0.4-0.5 opacity), common skills dim white (0.18), mid skills white (0.25-0.3)
- **Door openings:** Wall gaps with dashed quarter-circle swing arcs
- **Interior wall gaps:** Openings between adjacent rooms showing interconnection
- **Furniture:** Subtle room-specific symbols (server racks, conference table, desk, gear icons)
- **"66":** At grid intersection C-3, inside a column marker square with cross-hairs. Dual radial glow. Label "COL C-3 / CORE"
- **Dimension lines:** Top and right edges with measurements and tick marks
- **Section markers:** Circled "A" at both corridor ends (red tinted)
- **North arrow:** Top-right corner
- **Scale bar:** Alternating black/white bars with "SCALE 1:66"
- **Title block:** Bottom-right, bordered, with project number, sheet, revision, date

## Typography
- **Tag:** "/// Architectural Drawing ///" mono 11px, 22% white, top-left
- **Drawing number:** "Dwg A-066" mono 11px, red, top-right
- **Dim headline:** 52px, weight 300, 16% white -- the tenant's perspective
- **Bold headline:** 64px, weight 700, 93% white -- the architect's declaration
- **Red italic accent:** Last word "building." in italic #C83C32
- **Body:** 18px, weight 300, 22% white (statement) + italic 45% white (thesis)
- **Data panel:** Mono 9px, right-aligned, 13% white with red values for key metrics

## Concept
The building IS the system. Most people rent one room (one skill). The architect designed every room, every corridor, every load path. The structural core column at grid C-3 carries the most load -- it's the foundation everything else depends on. The floor plan shows interdependence: wall gaps between rooms, all doors opening to the central corridor, no dead ends.

## When to Use
Best for "systems thinking" content, posts about breadth of capability, interconnected skills, the difference between specialists and generalists, building infrastructure vs renting tools.

---

*Claude Design Engine by Rahaman Bin Ujit*
