# Observatory Logbook Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Origin:** v250 (milestone experiment) — Astronomical Observatory Logbook
**Quality Score:** 4 | **Status:** KEEP

## Visual DNA
- Aged cream paper (#F0E8D8) with ruled lines and red margin line
- Large dark FOV (field-of-view) circle as HERO — telescope eyepiece view of night sky
- Constellation lines connecting skill-stars inside the FOV circle
- Handwritten observation values (Caveat) vs typed field labels (Courier Prime)
- Magnitude-based hierarchy (brighter = more important)
- Greek letter catalog system (α, β, γ...)
- Observatory stamps, crosshairs, compass labels
- Blue margin annotations, aging stains

## Color Palette
- **Background:** #F0E8D8 (aged observatory paper)
- **Dark sky:** #0A0A14 → #1A1A32 (radial gradient inside FOV)
- **Ink:** #3A3020 (dark brown-black)
- **Labels:** #8B7748 (field brown)
- **Annotations:** #2860A0 (blue ink)
- **Accent:** #C83C32 (red — magnitude highlight, margin line)
- **Stars:** #FFFFFF (varying opacity for magnitude)
- **Constellation lines:** #6688CC at 30% opacity

## Typography
- **Special Elite:** Headers, stamps, name — typewriter authority
- **Caveat 600-700:** Handwritten values, titles, notes — personal observation
- **Courier Prime:** Field labels, metadata, table data — scientific precision
- **Playfair Display 900:** Ghost watermark only

## Key Techniques
1. FOV circle: 520px, 2.5px border, radial gradient dark bg, overflow hidden
2. SVG 3-layer system inside circle: lines → stars → labels
3. Stars: varying radius (1-6px) and opacity (0.15-1.0) for magnitude simulation
4. Crosshairs: 0.5px red at 25% opacity, centered
5. Ruled paper: repeating-linear-gradient 34px spacing, 8% opacity
6. Red margin line: 1.5px at 20% opacity, left side
7. Aging stains: radial-gradient circles, 6-8% opacity brown

## Metaphor Map
| Astronomy Concept | Rahaman's System |
|---|---|
| Open cluster | 66 skills working together |
| Stars | Individual skills |
| Magnitude | Skill importance/development level |
| Constellation lines | How skills connect |
| Solo observer | One-person operation |
| FOV = 360° | Full-picture perspective |
| Telescope = Discipline × Curiosity | What powers the observation |
| "Cluster brightens" | Compound growth |

## Best For
- Solo-builder narrative
- Scientific authority aesthetic
- Compound growth messaging
- High-contrast hero element (dark circle on light bg)
- Document authenticity posts
- "One observer, 66 stars" positioning

---

*Claude Design Engine by Rahaman Bin Ujit*
