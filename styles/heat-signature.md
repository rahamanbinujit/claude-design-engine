# Style: Heat Signature

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Thermal imaging / infrared camera aesthetic on dark bg. Radial heat blooms create atmospheric warmth, SVG isotherm contour ellipses map intensity, and the stat number is the "hottest point" on the thermal scan with a white-to-deep-red vertical gradient. Scientific instrument UI elements (thermal scale bar, temperature readout, elevation labels, crosshair) ground the metaphor. Best for quantified achievement posts, data-driven capability content, "peak performance" messaging.

## Example
Example: Heat Signature poster

## Layout (1080x1350)

```
+-------------------------------------+
| [L]  THERMAL SCAN / PEAK: 66   [L] |
|                                     |
| They Said                           |
| One Person   <- red-orange gradient |
| Cannot Run                          |
| An Entire                           |
| System                              |
|                                     |
| Body text here.                     |
|                                     |
|   ~~66~~    <- thermal gradient     |
|   ~~  ~~       + triple glow        |
|   Skills         ELV labels   [BAR] |
|   AI System      ELV 66       HOT  |
|                               COLD  |
| 5    2    10x           66.0        |
| Int  Bra  Out           Peak        |
|                                     |
| Sensor  Palette  Range  Mode        |
|----------------------------------------|
| Rahaman Bin Ujit    Sr Marketing Exec  |
| [L]                                [L] |
+-----------------------------------------+
```

## Key Elements

### Heat Blooms (Background)
- 3-4 overlapping radial gradients in deep reds/oranges at low opacity
- Primary bloom: centered on stat area, largest (1000px+), 8-10% peak opacity
- Secondary blooms: scattered at other points, 3-5% peak opacity
- Creates thermal atmospheric warmth across dark bg

### Isotherm Contour Lines (SVG)
- 4-5 nested ellipses centered on the stat number area
- Dashed strokes, progressively tighter toward center
- Outer contours: white at 6-7% opacity
- Inner contours: red (#C83C32) at 13-18% opacity
- Elevation labels (ELV 10, ELV 30, ELV 50, ELV 66) at 8px mono, positioned along contour edges

### Crosshair
- Two 40px lines (horizontal + vertical) intersecting at heat center
- Two concentric circles (5px + 12px radius) at center
- All in red at 10-20% opacity

### Stat Number (Thermal Gradient)
- 200px bold, vertical gradient: white (top) -> warm orange -> deep red -> dark red (bottom)
- background-clip: text technique
- Triple glow: drop-shadow at 30px/60px/100px in red/orange
- This IS the "hottest point" on the thermal map

### Headline
- 78px bold, -3.5px tracking, 0.93 line-height
- Dim words at 16% white, bright words at 95% white
- Accent phrase ("One Person") in red-to-orange linear gradient with glow
- Creates secondary heat source linking to stat

### Thermal Scale Bar
- 14px wide, 180px tall, rounded corners
- Iron palette gradient: white (top/hot) -> orange -> red -> dark red (bottom/cold)
- "Hot" / "Cold" labels in 7px mono
- Positioned right side, aligned with stat

### Temperature Readout
- "66.0" in 32px mono bold, 65% red opacity
- "Peak Temperature" label in 7px mono

### Supporting Elements
- Corner L-brackets (22px, 1px, 4.5% white)
- Meta top: "Thermal Scan / Peak: 66 / Range: High" 9px mono 14% white
- Data strip: "Sensor: Active / Palette: Iron / Range: 0-66 / Mode: Thermal"
- Author bar with 1px border-top 6% white
- SVG noise at 2.5% opacity

## Color Palette
- Background: #0A0A0A
- Heat blooms: rgba(200,60,50) + rgba(255,140,60) + rgba(255,180,80)
- Contours: white (outer) to #C83C32 (inner)
- Stat gradient: #FFFFFF -> #FFC88C -> #FF8C3C -> #C83C32 -> #8C1E14
- Text: white hierarchy (16% / 28% / 95%)

## Typography
- Headline: Space Grotesk 700, 78px
- Body: Space Grotesk 400, 22px
- Mono: Space Mono 400, 7-10px (all metadata/labels)

## Best For
- Quantified achievement posts (66 skills, 10x output, etc.)
- Data-driven capability content
- "Peak performance" / "running hot" messaging
- System-building reveals where stats are the centerpiece

## Distinct From heat-map-gradient
- heat-map-gradient: uses gradient fields (cool-warm-hot zones), zone-based approach
- heat-signature: uses contour lines (isotherm ellipses), focuses on stat-as-thermal-peak, includes thermal instrument UI (scale bar, readout, crosshair)

---

*Claude Design Engine by Rahaman Bin Ujit*
