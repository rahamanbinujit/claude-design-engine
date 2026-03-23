# Star Chart Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Based on:** v119 (Astronomical Star Chart)
**Quality Score:** 4 (Self)
**Best for:** Generalist/polymath positioning, "skills as a system" posts, capability showcases, pattern-recognition narratives

---

## Core Concept
The poster simulates an astronomical observation chart. Individual skills are rendered as stars of varying magnitudes scattered across a dark canvas. Connected by thin constellation lines, they form a recognizable pattern -- a constellation. The hero stat sits at the brightest star (the supergiant) at the center nexus where all lines converge. The metaphor: isolated skills look random. Connected, they form a system only you can see.

## Visual Specs

### Background
- `#0A0A0A` solid dark
- Celestial grid: 0.5px lines at 3% white, horizontal + vertical
- 2 dashed ecliptic arcs (one white 4%, one red 3%) -- gentle curves across the star field
- 250 background field stars (0.5-2px, 2-7% white, randomly scattered)

### Star Field (66 Stars)
- **Supergiant (mag -6.6):** 12px red dot, `box-shadow: 0 0 8px rgba(200,60,50,0.6), 0 0 20px rgba(200,60,50,0.3), 0 0 40px rgba(200,60,50,0.1)`. 4 diffraction spikes (40px, 0.8px, 15% red). Positioned at central nexus.
- **Bright (mag 2):** 5-6px white, `box-shadow: 0 0 4px rgba(255,255,255,0.4), 0 0 12px rgba(255,255,255,0.15)`. 65-85% opacity.
- **Medium (mag 3):** 3-4px white, 40-55% opacity.
- **Dim (mag 4):** 2-2.5px white, 18-28% opacity.
- **Faint (mag 5):** 1.2-1.7px white, 10-16% opacity.

### Constellation Lines
- Standard: 1px, 8% white
- Lines touching central nexus: 1.5px, 12% red
- Lines form a connected network shape (NOT a simple shape -- a branching structure with main spine, upper branch, lower branch, left extension)

### Named Stars
- 10-12 key stars labeled with skill domain names (VIDEO, EDITING, DESIGN, STRATEGY, AI SYSTEMS, MARKETING, ANALYTICS, GROWTH, AUTOMATION, CONTENT)
- Labels: Space Mono 7px, 15% white, uppercase, 2px letter-spacing
- Positioned offset from star dot (right + 6px)

### Finder Circle
- Dashed red circle (80px radius) around central nexus/stat
- Crosshair ticks at 0/90/180/270 degrees (12% red, 1px)

### Coordinate System
- RA labels along bottom (0h-24h): Space Mono 6px, 8% white
- Declination labels along right (+90 to -90): Space Mono 6px, 7% white

## Typography

### Tag (top-left)
- "Observation Log" or "Star Chart"
- Space Mono 9px, #C83C32 80%, 4px letter-spacing
- Red dot (6px) with glow before text

### Headline
- **Line 1:** 58px Space Grotesk weight-300, 16% white. The dim observation ("They see scattered skills.")
- **Line 2:** 70px Space Grotesk weight-700, 95% white. The bold declaration ("I see a constellation.")
- **Accent word:** #C83C32 with `text-shadow: 0 0 40px rgba(200,60,50,0.4), 0 0 80px rgba(200,60,50,0.15)`

### Constellation Name
- Space Mono 8px, 45% red, 5px letter-spacing
- Format: "Systema Majoris // 66 Stars // Epoch J2026"

### Hero Stat
- 240px Space Grotesk weight-700, #C83C32
- Triple-layer red glow (60px/130px/220px)
- Label: Space Mono 9px, 22% white, 6px letter-spacing ("Stars Mapped")
- Centered on nexus star position

### Body Text
- 21px Space Grotesk weight-300, 32% white, line-height 1.65
- Italic emphasis at 55% white

### Catalog Data (right column)
- Space Mono 7px, 8% white (highlight entries at 30% red)
- Entries: Catalog, Mag, Class, Visibility, Epoch

### Stats Row
- Numbers: 44px weight-700, 80% white (red for accent stats)
- Labels: Space Mono 8px, 18% white, 3px letter-spacing

### Pull Quote
- 18px weight-300, 28% white
- 2px red-left border (30% red), 18px padding-left
- Bold text at 50% white, weight-500

### Magnitude Legend
- Vertical stack, 4 rows: mag 5-6 (2px dot), mag 2-3 (4px), mag 1 (6px), mag -6.6 (8px red with glow)
- Labels: Space Mono 6px, 10% white

### Author Bar
- Name: Space Mono 10px, 28% white, 3px letter-spacing
- Designation: Space Mono 7px, 10% white
- Catalog number: Space Mono 7px, 8% white, right-aligned

## Layout (1080x1350)
```
[32px margin]
[52px] Tag
[92px] Headline (2 lines)
[280px] Constellation name
[300-780px] Star field with constellation + hero stat at center
[810px] Body text (left) + Catalog data (right)
[950px] Stats row
[1050px] Red rule
[1080px] Pull quote (left) + Magnitude legend (right)
[bottom 48px] Author bar
[32px margin]
```

## When to Use
- Posts about being a generalist/polymath ("one person, many skills")
- Capability showcases where the CONNECTION between skills matters
- "Pattern recognition" narratives -- seeing what others miss
- System-building posts where the whole > sum of parts

## Key Design Decisions
1. Stars scattered in space = skills look random to outsiders
2. Constellation lines = the connections only the builder sees
3. Brightest star at nexus = the central capability everything connects through
4. Finder circle = scientific precision, "I've located the pattern"
5. Dim headline + bold headline = the gap between looking and seeing

---

*Claude Design Engine by Rahaman Bin Ujit*
