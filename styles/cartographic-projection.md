# Cartographic Projection

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5 — KEEP
**Metaphor:** Mercator map projection distortion. The stat is the north pole — the singularity where the projection breaks. Skill labels stretch with latitude, mirroring how Mercator distorts area.

## When to Use
- "Breaking the map" narrative posts
- Posts about operating where conventional frameworks fail
- Skill/system reveals where the quantity IS the point
- Posts about being unmappable, uncategorizable, beyond conventional measurement
- Any post where the metaphor is "everyone stays in the comfortable middle, I went to the extreme"

## Specs

### Canvas
- 1080x1350px, #0A0A0A background

### Mercator Grid (SVG, upper 70% of canvas)
- 13 vertical longitude lines at ~80px intervals (evenly spaced — longitude doesn't distort in Mercator)
- Stroke: 0.035-0.05 white, 0.6-0.8px. Center meridian dashed at 0.05 white
- Horizontal latitude lines with INCREASING vertical spacing toward the pole:
  - Equator (y=640): dashed, 0.07 white, 1px — the reference line
  - 10°N (y=580), 20°N (y=515), 30°N (y=440): subtle white, increasing brightness
  - 40°N (y=355): 0.05 white — distortion noticeable
  - 50°N (y=260): 0.055 white — significant stretch
  - 60°N (y=190): RED dashed boundary, 0.12 red, 1px — extreme distortion threshold
  - 70°N (y=130), 80°N (y=85): 0.06-0.08 red — polar zone
- South latitudes: mirror but dimmer, fade out by 30°S

### Distortion Visualization
- Grid cell rectangles at equator: 78x58px (nearly square = no distortion)
- Grid cell rectangles at 40°N: 78x94px (stretched tall = distorted)
- Vertical stretch arrows at 60°N: 0.12 red, showing pull direction
- Scale bar comparison: "1:1 SCALE" at equator (60px white bar) vs "2:1 DISTORTION" at 60°N (120px red bar)
- Pole crosshair: 20px cross + 3px circle, 0.2 red

### Skill Labels (City Names on the Map)
- POLAR ZONE (y:90-160): 9px mono, 0.35 red, letter-spacing 5px, font-weight 700
  - AI SYSTEMS, CONTENT SYSTEMS, SALES PIPELINE
  - Maximum stretch — text IS the distortion
- HIGH LATITUDE (y:200-340): 8.5px mono, 0.22 white, letter-spacing 3px
  - GROWTH ENGINE, AUTOMATION, STRATEGY, BRAND SYSTEMS
- MID LATITUDE (y:380-530): 8px mono, 0.14 white, normal letter-spacing
  - ANALYTICS, COPYWRITING, SEO, VIDEO EDITING, PHOTOGRAPHY
- EQUATORIAL (y:560-760): 7.5px mono, 0.09 white, normal letter-spacing
  - SOCIAL MEDIA, BASIC DESIGN, EMAIL, TEMPLATES, CANVA, SCHEDULING, HASHTAGS, REPOSTS, CAPTIONS, POSTING
  - Crowded — 10 labels in a small band (everyone maps here)
- Each label has a 3px dot marker before it

### Key Technique: Letter-Spacing as Distortion
The signature element: skill label letter-spacing PHYSICALLY increases with latitude.
- Equator: 0px (undistorted, compact)
- Mid: 1.5px
- High: 3px (stretched)
- Polar: 5px (maximum stretch — like Greenland appearing Africa-sized)
This IS the data visualization. The typography IS the distortion.

### Latitude Labels
- Along right edge of grid
- 6-7px Space Mono, letter-spacing 1px
- Brightness increases with latitude: 0° at 0.1 white → 60°N at 0.25 red (bold)
- 60°N is the threshold label — bold, red, larger (7px)

### Polar Glow
- Elliptical radial gradient, 700x500px, centered above stat
- rgba(200,60,50,0.09) center to transparent at 70%

### Stat ("66")
- 200px bold #C83C32, centered at pole position (y~155)
- Triple text-shadow glow: 80px + 160px red
- "/// Singularity ///" above (8px mono, 0.35 red)
- "AI Skills Deployed" below (8.5px mono, 0.16 white)

### Distortion Warning
- Centered at y=345, between grid and headline
- 7px mono, 6px letter-spacing, 0.3 red
- "/// MAXIMUM DISTORTION ZONE ///"

### Headline (Bottom Third)
- Line 1: "Everyone maps the same territory." — 48px, weight-300, 0.18 white (dim observation)
- Line 2: "I mapped where the projection breaks." — 64px, weight-700, 0.92 white, "breaks." in #C83C32
- Red rule: 55px x 2.5px, 0.5 red
- Body: dim line (0.28 white) + italic bright line (0.52 white)

### Secondary Stats
- 3 stats in a row above headline (bottom: 490px)
- Numbers: 38px bold 0.85 white
- Labels: 8px mono 0.16 white

### Data Panel
- Bottom-right, aligned with headline
- 7.5px mono, 0.12 white / 0.38 red values
- PROJECTION, SCALE, DATUM, DISTORTION, COVERAGE

### Projection Metadata
- Top-right corner
- 7.5px mono, 0.12 white / 0.4 red values

### Standard Elements
- Ghost "66": 480px, 0.012 white
- Corner brackets: 18px, 0.06 white
- Left accent stripe: 3px x 260px, red gradient top-to-bottom
- SVG noise: 2.5% opacity
- Identity bar: name left + role right, bottom

## Text Placement Philosophy
The poster is organized as a map from pole (top) to equator (middle). The stat lives at the pole — the point where the projection mathematically cannot represent reality. Skills are scattered as city names, with their visual treatment (opacity, size, letter-spacing) determined by their latitude = their rarity. The headline lives in the bottom third (grounding position) and looks UP at the distorted polar zone above. The weight shift from 300 (equatorial comfort) to 700 (polar extremity) mirrors the distortion gradient itself.

---

*Claude Design Engine by Rahaman Bin Ujit*
