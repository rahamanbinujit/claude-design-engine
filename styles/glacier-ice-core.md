# Glacier Ice Core

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5 -- KEEP
**Metaphor:** Ice core stratigraphy / glaciological cross-section. Skills are layers of ice compressed over time. Surface layers are thick and easy to read (common skills). Deep layers are compressed, ancient, and require drilling through everything above to reach (rare skills). There are no shortcuts.

## When to Use
- "Depth of experience" narrative posts
- Sequential skill building, foundation-first arguments
- "You can't skip steps" positioning
- Accumulated expertise, compounding knowledge
- Any post where the argument is "surface is easy, depth takes time"
- Career progression / layered complexity posts

## Specs

### Canvas
- 1080x1350px, #0A0A0A background

### Core Cylinder (SVG, centered)
- 200px wide, ~680px tall, centered horizontally
- Thin vertical edge lines (0.6-0.8px, 6% white)
- Elliptical caps top and bottom (4px ry, 6% white)
- Contains ALL annual layer lines, bubbles, isotope markers, temperature profile, fracture lines

### Annual Layers (the key visual structure)
- ~55 horizontal lines across the core width
- **Surface zone (0-150px):** 4 lines at 35-40px spacing, 3-3.5% white, 0.5px -- thick, well-spaced, easy
- **Mid zone (150-350px):** 9 lines at 16-22px spacing, 4-5% white, 0.5px -- moderate compression
- **Deep zone (350-480px):** 15 lines at 6-9px spacing, 5.5-7.5% white, 0.5px -- tight, hard to separate
- **Ancient zone (480-530px):** 18 lines at 2-4px spacing, rgba(200,60,50, 0.04-0.08), 0.5px -- densest, red-tinted
- The spacing gradient IS the argument. Viewer reads the compression before understanding the metaphor.

### Air Bubbles
- Surface: 3-4px circles, 4-4.5% white stroke, 0.4px -- visible, round, fresh air trapped
- Mid: 1.5-2px circles, 3-3.5% white -- smaller, compressed
- Deep: 1-1.2px ellipses (flattened), 2-2.5% white -- barely visible, squeezed
- Ancient: 0.3-0.8px ellipses, rgba(200,60,50, 0.04) -- clathrate hydrates, the air has crystallized

### Drill Line
- 1px dashed center line through entire core
- rgba(200,60,50, 0.05), 3px dash / 10px gap
- The path of the drill = the path of effort

### Bedrock Interface
- Red dashed line at core bottom (4px dash, rgba(200,60,50, 0.12))
- "BEDROCK INTERFACE" label at 5px mono, rgba(200,60,50, 0.12)

### Skill Labels (outside the core)
- Alternating left and right sides of the core
- Connected by thin horizontal lines (1px, 2-6% white/red) reaching the core edge
- 7.5px Space Mono, uppercase, 1.5px letter-spacing
- **Surface skills:** 8% white (SOCIAL MEDIA, TEMPLATES, EMAIL, CANVA, SCHEDULING)
- **Mid skills:** 13% white (ANALYTICS, COPYWRITING, SEO, VIDEO EDITING, PHOTOGRAPHY)
- **Deep skills:** 20% white (GROWTH ENGINE, AUTOMATION, STRATEGY, BRAND SYSTEMS)
- **Ancient skills:** 30% red (AI SYSTEMS, CONTENT SYSTEMS, SALES PIPELINE)
- Brightness increases with depth = rarity increases with depth

### Stat "66"
- 160px bold #C83C32, centered, positioned at bottom of core
- Outer glow: 360px radial, 10% red
- Inner glow: 200px radial, 18% red
- "/// Core Sample ///" above at 7.5px mono 10% white
- "AI Skills Archived" below at 7.5px mono, rgba(200,60,50, 0.25)

### Depth Ruler (left)
- 0m to 3200m with major ticks (16px, 6% white) and minor ticks (8px)
- Labels at 7px mono, 12% white
- Deep labels transition to rgba(200,60,50, 0.3)
- Deepest label (3200m) at 700 weight, rgba(200,60,50, 0.45)

### Age Ruler (right)
- Present to 800k yr
- Labels at 7px mono, 9% white
- Deep labels transition to red, boldest at 800k yr

### Scientific Detail
- Temperature profile: thin dashed SVG curve (0.6px, 6% red) running along right interior of core
- Isotope markers (d18O values) at 4 depths along core interior, 4-6% white/red
- Fracture lines in deep ice: 0.4px, 3-4% white/red, slight angles
- Zone labels centered in core: "Firn / Recent Snow", "Transition Zone", "Compressed Ice", "Ancient Archive"

### Headline
- Line 1: "Everyone reads the surface layer." -- 52px, weight 300, 17% white, letter-spacing -1px
- Line 2: "I drilled to the [archive.]" -- 64px, weight 700, 93% white, letter-spacing -2px
- "archive." in italic #C83C32
- Positioned below the core with clear separation

### Body
- Light line: 19px weight 300, 25% white
- Red rule: 48px wide, 1.5px, 35% red
- Italic line: 19px weight 400 italic, 50% white

### Data Panel (bottom right)
- 7px Space Mono, 1px letter-spacing, uppercase
- Keys at 9% white, values at rgba(200,60,50, 0.32)
- CORE / DEPTH / AGE / LAYERS / METHOD / PRESERVATION

### Standard Elements
- Tag top-left: red dot + "Ice Core Analysis" at 8px mono
- Method note top-right: 3 lines at 7px mono, 9% white
- Ghost "66" at 500px, 0.8% white, centered
- Corner brackets at 28px from edges, 6% white
- Identity bar: name left, role right, 4% border-top
- SVG noise at 2.5%

## Text Placement Philosophy
The weight shift from 300 to 700 IS the compression -- light surface snow becoming dense ancient ice. The dim headline describes what everyone does (reads the surface). The bold headline describes what the system does (drills to the archive). "archive." in red connects the word to the ancient red zone of the core. The body text delivers the core insight: you cannot skip layers in an ice core.

---

*Claude Design Engine by Rahaman Bin Ujit*
