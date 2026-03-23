# Tidal Chart Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5 — KEEP
**Best for:** System depth, gravitational influence, cyclical power, force multiplier posts

---

## Concept
The poster simulates a coastal tidal survey chart. An SVG amplitude-modulated sine curve represents the tidal cycle — spring tides peak high (rare, powerful), neap tides flatten (common, weak). The stat sits at the crest of the highest spring tide. Moon phases across the top act as the gravitational ruler that controls the entire system below. Skill labels float at different water levels: above high water (always visible, always active), at the surface (active but tide-dependent), and submerged (dormant, deep, common). The metaphor: everyone else reads the tide table and reacts. This system controls the moon.

---

## Layout Specs

### Canvas
- 1080x1350px, `#0A0A0A` background

### Moon Phases (Top Edge)
- 8 phase icons arrayed across the top (new, waxing crescent, first quarter, waxing gibbous, full, waning gibbous, third quarter, waning crescent)
- 28px circles, border brightness gradient: 6% (new) to 35% (full) white
- Phase labels below each: 6px Space Mono, 12% white

### Tag
- Top-left, below moon phases: "Tidal Survey" with red dot
- 8px Space Mono, 18% white, 3px letter-spacing

### Tide Gauge (Left Vertical Scale)
- 1px vertical line, 680px height, 6% white
- Major ticks every 1.1m (0.0m to 6.6m), 12px wide, 14% white
- Minor ticks between majors, 6px wide, 7% white
- Labels: 7px Space Mono, 16% white, peak label (6.6m) in 60% red

### Reference Lines
- **Highest Astronomical Tide:** 1.5px red dashed line, 30% red, with label at right
- **Mean Water Level:** 1px white dashed line, 6% white, with label at right

### Tidal Curve (Central Artifact)
- SVG path: smooth sine wave with amplitude modulation
- Two spring tide peaks (high amplitude, y~80) flanking a neap trough (low amplitude, y~240)
- Main stroke: 1.5px, 22% white, with gaussian blur glow filter
- Spring peak segments highlighted: 2px, 50% red stroke
- Peak dots: 4px red fill (60%), 8px ring (20%)
- Tidal fill: gradient from 8% red at crest to transparent at depth
- 7 vertical time gridlines (dashed, 2.5% white)
- 8 period labels at bottom (00:00 to 18:00, 6.5px Space Mono, 8% white)

### Stat "66"
- Positioned at the crest of the first spring tide peak
- 180px Space Grotesk Bold, `#C83C32`
- Prefix: "/// High Water ///" at 8px Space Mono, 45% red
- Suffix: "AI Skills Deployed" at 9px Space Mono, 20% white
- Dual radial glow: outer 280px at 10% red, inner 180px at 18% red

### Skill Labels (3 Water Levels)
- **Above High Water** (rare, always active): 50% red, positioned near crest
  - AI SYSTEMS, CONTENT SYSTEMS, SALES PIPELINE
- **Surface** (active, moderate): 18% white, positioned at/near mean water
  - ANALYTICS, COPYWRITING, SEO, GROWTH ENGINE, AUTOMATION, STRATEGY
- **Submerged** (dormant, common): 10% white, positioned below mean water
  - SOCIAL MEDIA, TEMPLATES, EMAIL, CANVA, SCHEDULING, VIDEO EDITING, PHOTOGRAPHY, BASIC DESIGN
- All: 7px Space Mono, 2px letter-spacing, uppercase

### Headline
- **Dim line:** 50px Space Grotesk weight-300, 18% white
  - "Everyone waits for the tide to rise."
- **Bold line:** 66px Space Grotesk weight-700, 93% white
  - "I control the **moon.**" (moon in italic `#C83C32`)

### Body
- Light: 19px Space Grotesk weight-300, 25% white
- Red rule: 55px wide, 1.5px, 35% red
- Italic: 19px Space Grotesk weight-400 italic, 50% white

### Secondary Stats
- Positioned below body text
- Numbers: 40px Space Grotesk Bold, 85% white
- Labels: 7px Space Mono, 14% white
- Deltas: 7px Space Mono, 40% red

### Data Panel (Right)
- 7px Space Mono, right-aligned
- Keys: 10% white, Values: 38% red
- Entries: TIDE, PULL, PHASE, CYCLE, RANGE, TYPE

### Standard Elements
- Ghost "66": 520px, 0.8% white, centered
- Corner brackets: 20px, 6% white
- Left accent stripe: 4px, gradient peaking at crest height (15% red)
- SVG noise: 2.5% opacity
- Identity bar: bottom, name left (10px, 18% white) + role right (7px, 10% white)

---

## Text Placement Logic
1. Moon phases at top = the cause (gravitational force)
2. "66" at crest = the effect (highest water mark, the peak the system reaches)
3. Skill labels at water levels = depth as rarity (above = rare/always, surface = active, submerged = common/dormant)
4. Dim headline below chart = the passive observation from the shore
5. Bold headline = the declaration of gravitational control
6. The weight shift 300 to 700 = from passenger to force
7. "moon." in italic red = the celestial body that controls everything

---

## File References
- Example: Tidal Chart poster

---

*Claude Design Engine by Rahaman Bin Ujit*
