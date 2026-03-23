# Topographic Contour

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5 — KEEP
**Metaphor:** Cartographic survey / elevation mapping. The stat is the mountain peak; contour lines radiate outward like a topographic map.

## When to Use
- "Climbing/building" narrative posts
- Achievement milestones ("I built X from nothing")
- System architecture reveals
- Any post where the metaphor is "reaching the peak" or "surveying what you've built"
- Data-driven achievement content where the stat IS the summit

## Specs

### Canvas
- 1080x1350px, #0A0A0A background

### Contour Field (SVG, full poster)
- 12 nested irregular closed SVG paths, centered on the stat number position
- Outermost ring spans nearly full poster (~1100x1000px)
- Innermost peak ring ~90x60px
- Contour spacing gets tighter toward center (steeper terrain = closer contours, like real topo maps)
- Stroke widths: outer 0.8px, inner 1.0-1.3px
- Opacity progression: outer 4.5% white, progressing to inner 14% white
- Two red accent contours:
  - ELV 30 boundary: 14% red (#C83C32), 1.2px stroke (the "danger zone" threshold)
  - ELV 66 peak: 22% red (#C83C32), 1.3px stroke (the summit)
- Peak summit crosshair: circle r=3 at 28% red + 20px cross lines at 22% red

### Secondary Ridge (optional)
- 2-3 smaller contour rings in upper-right quadrant
- 3.5-4% white, 0.7px stroke
- Adds cartographic depth without competing with main peak

### Peak Glow
- Radial gradient div, 500x500px, centered on stat area
- rgba(200,60,50,0.06) center to transparent at 70%
- z-index below content, above background

### Elevation Labels (SVG text)
- Positioned along contour edges (left side, following the contour line)
- 7.5-8px Space Mono, letter-spacing 1.5px
- Standard contours: 10-14% white
- Red contours (ELV 30, ELV 66): 22-28% red, font-weight 700
- Labels: ELV 10 / ELV 15 / ELV 20 / ELV 30 / ELV 40 / ELV 50 / ELV 66

### Coordinate Grid
- 5 tick marks per edge (10px lines, 0.7px stroke, 4% white)
- Coordinate labels: 6.5px Space Mono, 6% white
- Use geographic coordinates relevant to content (default: 22.5N/88.4E for West Bengal)

### Typography
- Headline: 78px Space Grotesk Bold, -3.5px tracking, 0.93 line-height
- Dimmed words: 16% white | Red accent: #C83C32 | Bright: 95% white
- Body: 22px weight-300, 28% white, max-width 480px
- Stat: 200px bold #C83C32
- Secondary stats: 44px 40% white

### Meta Labels
- Top: "Survey: Sys-XXX / Datum: WGS84 / Contour Int: 5m / Peak: XX" — 9px mono, 14% white
- Side (rotated 90deg): "Topographic / Survey: Sys-XXX / Elevation Mapping / Peak: XX" — 7px mono, 8% white
- Data strip: "Structure: Contour / Datum: WGS84 / Interval: 5m / Peak Elv: XX / Survey: Active" — 7.5px mono, 10% white

### Standard Elements
- Corner L-brackets: 22px, 1px, 4.5% white
- Author bar: 1px border-top 6% white, name 11px 35% white, title 8px mono 12% white
- SVG noise: fractalNoise 0.85 baseFrequency, 2.5% opacity

## v101 Refinements (2026-03-20)
- Replaced ellipse-based contours with hand-drawn closed SVG paths (cubic bezier curves) for organic irregularity
- Added ridge spurs (NW: 3 parallel lines, SE: 2 lines) and saddle feature (NE: 2 lines) for geological realism
- Elevation labels get dark bg padding (rgba(10,10,10,0.8)) for readability against contour lines
- Terrain zone labels on right edge: FOOTHILL / TREELINE / RIDGELINE / SUMMIT
- Summit marker: CSS triangle (24x18px, red 35%) above the stat, with "SUMMIT: XXXXm" label
- Body copy should tie to the climbing/terrain metaphor (e.g., "The terrain was never flat. I climbed anyway.")
- Bottom meta adds PROJECTION and SCALE fields for cartographic depth
- Key learning: perfect ellipses look mechanical; organic closed paths with irregular curves feel like real terrain

## v113 Refinements (2026-03-20)
- Completely new approach to contour lines: open-ended bezier paths (not closed shapes) forming a mountain silhouette viewed from below, not above
- 20+ organic SVG `<path>` elements with Q curves for natural irregularity
- Contour opacity progression: outermost 2.5% white to summit zone rgba red (7-25%)
- Summit zone contours transition from white to red -- color shift encodes altitude
- Dashed route line (stroke-dasharray: 5 9) from base camp marker to summit dot adds narrative journey
- Base camp marker: small open circle with filled center dot (bottom-left)
- Summit flag: "SUMMIT" tag in 7.5px mono red + thin vertical pole
- Headline split into emotional typography: "Everyone else is still at" (300-weight, 14% white = vulnerable whisper) + "base camp." (700-weight, 88% white = bold anchor)
- Headline positioned at bottom-left = literally at the base of the canvas, grounded
- "One system. One person." right-aligned in mono = asymmetric disruption, system voice punchline
- Real geographic coordinates (27.4N-28.2N, 87.6E-88.2E) for cartographic authenticity
- Compass indicator (N + needle) top-right, scale bar bottom-right
- Key typography mastery insight: the vertical scroll down the poster IS the altitude drop from summit to base camp -- reading order mirrors the topographic story
- File size: 1.7MB PNG / 446KB JPEG 95%

## v131 Refinements (2026-03-20)
- Returned to plan-view topographic map (looking DOWN at the mountain, not sideways profile)
- ~22 concentric elliptical contour rings (major at 1000m intervals + sub-contours at 500m) for high-density cartographic realism
- Contour brightness gradient: 5% white (1000m outermost) increasing to 12% white (7000m) then transitioning to red inside death zone
- **Death zone boundary at 8000m**: 2.2px red dashed line (35% red, 10/5 dash) with 6px glow ring = THE dividing line
- 4 inner death zone contours (8200-8848m) in red 13-25%
- 17 skill labels at 4 elevation bands: valley (7.5-9% white), mid-altitude (11-14% white), high-altitude (16-20% white), death zone (22-30% red)
- Skill labels slightly rotated (-6 to +5 deg) to follow terrain contour = organic cartographic feel
- Full elevation ruler (left side) with 9 major ticks, labels dimming with depth, death zone band indicator
- Ridge lines (5 dashed lines from summit), triangulation markers (5 survey triangles), north arrow, scale bar
- Headline: "They stay in the valley." (300, 18% white) / "I built at altitude." (700, 95% white, "altitude." in red)
- Body: "I operate where the contours close." = the cartographic insight that the steepest terrain is where contour lines merge
- Data panel: ELEVATION 8,848m (Everest height) / CONTOUR INT 66m / ZONE DEATH ZONE
- Key typography mastery: "They stay in the valley." is dim because valleys are forgettable. "altitude." is red because it sits in the death zone. The weight shift 300->700 IS the elevation change from gentle to steep.
- 9.5MB PNG / 2.3MB JPEG 95%

## Reference Files
- Example:  poster — Original version (ellipse-based)
- Example:  poster — Refined version (organic path-based, ridge spurs, terrain labels)
- Example: Topographic Contour poster (mountain silhouette, route line, emotional typography split)
- Example: Topographic Contour poster (plan-view, death zone boundary, 22 contour rings, 4-band skill labels)

---

*Claude Design Engine by Rahaman Bin Ujit*
