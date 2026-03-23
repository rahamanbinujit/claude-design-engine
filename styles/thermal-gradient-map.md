# Thermal Gradient Map

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Concept
Scientific thermal imaging meets data visualization. The poster simulates a thermal scan with the stat number as the "heat source anomaly" at the center, surrounded by isothermal contour lines radiating outward. Cold-to-hot narrative flow: headline lives in the cold zone (top), stat in the hot zone (center-bottom).

## When to Use
- Performance metrics and system output posts
- "High intensity" or "high impact" themes
- Data-driven content where the stat is the hero
- AI/automation results and efficiency posts
- Any post with a strong central number/metric

## Layout (1080x1350)
- **Background:** #0A0A0A
- **Heat spot:** Radial gradient behind stat (14% #C83C32 center, fading to transparent over 750px). Inner glow layer 320px at 10% red for depth.
- **Contour rings:** 15-16 SVG ellipses radiating from stat center. Inner 4 rings in red tones (18% to 7% red opacity). Transition rings in white (4% to 2.5%). Outer rings fading (2% to 1.2%). Index contours every 5th ring brighter (5.5-7% white, 1.5px stroke). One dashed red accent contour (30% red, dash 6,10). Slight center offsets on some rings for organic feel.
- **Temperature scale:** Right edge, 10px wide, 560px tall gradient bar (55% red top to 2.5% white bottom, 5px border-radius). Tick marks with labels (MAX/70/50/30/10/MIN).
- **Horizontal separator:** Thermal gradient line at transition zone (transparent to 4% white to 12% red at center).

## Content Zones
1. **Cold Zone (top):** Scan metadata, headline, body text
2. **Transition Zone (middle):** Thermal readout data (6 lines of diagnostic mono text at 8px, 10% white, one line active in 30% red)
3. **Hot Zone (center-bottom):** Stat number with glow, label, secondary stats
4. **Author bar (bottom):** Standard author + thermal metadata

## Typography
- **Headline:** Space Grotesk 74px bold, -3.5px tracking, 0.92 line-height. Faded words at 18% white, accent word in #C83C32.
- **Body:** Space Grotesk 22px, 30% white, 540px max-width.
- **Stat:** Space Grotesk 172px bold, #C83C32, text-shadow glow (80px at 20% red, 160px at 8% red).
- **Mono elements:** Space Mono. Scan label 9px at 45% red. Readout lines 8px at 10% white. Zone labels 9px at 18% white / 40% red. Stat label 10px at 22% white.

## Zone Labels
- "COLD ZONE" -- 9px mono, 3px letter-spacing, 18% white (top area)
- "HOT ZONE" -- 9px mono, 3px letter-spacing, 40% red (near stat)
- "-- TRANSITION --" -- 7px mono, 2px letter-spacing, 10% white (middle)

## Key Details
- Contour elevation labels on index contours (7px mono, 6-8% white)
- Grid coordinates at four corners (7px mono, 6% white)
- Thermal readout fills the space between body text and stat
- Temperature scale has tick lines (4-6px) next to labels
- Scan metadata top-right: sensor ID, dimensions, range

## Reference
- v71b: `/Example: V71B Thermal Gradient poster
- v77b: `/Example: V77B Heat Map Gradient poster (Heat Map Gradient variant)
- Export: 1080x1350 CSS, Puppeteer deviceScaleFactor 4, JPEG 95%

---

## Variant: Heat Map Gradient Field (v77)

### Concept Difference
While the base thermal-gradient-map uses contour rings + temperature scale bar as the primary visual system, this variant emphasizes a **three-layer thermal camera gradient field** (cool blue edges, warm orange mid-zone, hot red center) with **iso-thermal contour rings** rendered as organic SVG ellipses. The thermal camera UI metaphor is stronger: crosshair targeting, sensor readings strip, "HOT ZONE DETECTED" label, color legend gradient bar.

### Layout Additions (v77)
- **Cool zone:** Radial gradients at canvas edges in rgba(72,100,140) at 4-6% opacity (blue-grey tint)
- **Warm zone:** Radial gradients at 5-6% red opacity in mid-canvas transition area
- **Hot zone:** Three nested radial gradients at 14%/22%/30% red opacity centered on stat
- **SVG contour rings:** 6 organic ellipses with slight rotation offsets (transform rotate). Outermost in cool blue (6%), transitioning to hot red (30% at innermost, 2px stroke)
- **Crosshair:** 40px span + 8px circle at hot zone center, 25% red
- **Temperature scan line:** Horizontal line through hot zone with temp labels (10C/25C/40C/55C/66C) and scale ticks, color transitioning from blue to red
- **Thermal strip:** Sensor readings row (FLIR X1, Peak: 66.0C, Avg: 34.2C, Delta: +31.8C, Mode: Active) in 8px mono
- **Color legend bar:** 460px horizontal gradient strip (cool blue to hot red) with temperature markers 0C-66C
- **"HOT ZONE DETECTED":** Bordered label (1px red border, 40% red text, 9px mono)
- **Corner thermal markers:** Coordinates + temperature readings in blue-tinted mono

### Best For
- Performance/output posts where "running hot" is the metaphor
- Systems operating at full capacity
- Any post where intensity, activity level, or peak performance is the theme
- Complements base style: use base for contour-heavy cartographic feel, use this variant for thermal camera UI feel

---

*Claude Design Engine by Rahaman Bin Ujit*
