# Stacked Planes

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Best for:** Layered system posts, architecture/process reveals, multi-component content, "building in layers" messaging, systematic construction tone

## Concept
Four overlapping translucent card-planes stacked at progressive offsets (bottom-right direction), creating genuine spatial depth through nothing more than bordered rectangles and transparency. The front plane holds all content. Back planes peek out as visible layered edges. One plane uses red (#C83C32) border as brand accent. Edge highlights on top and left edges simulate light catching on physical card edges.

## Specs

### Canvas
- 1080x1350, #0A0A0A background

### Planes (4 total, front to back)
- **Plane 1 (front):** 865x970px, position (0,0), 1px border rgba(255,255,255,0.13), bg rgba(255,255,255,0.03). Contains all content. Top edge highlight: linear-gradient peaking at 16% white. Left edge highlight: peaking at 10% white. Subtle inner radial glow.
- **Plane 2 (red accent):** 840x935px, offset 40px right/down, 1px border rgba(200,60,50,0.28), bg rgba(200,60,50,0.018). Red edge highlights: top 22%, left 16%.
- **Plane 3:** 815x900px, offset 80px, 1px border rgba(255,255,255,0.10), bg rgba(255,255,255,0.022). Top edge highlight at 10%.
- **Plane 4 (deepest):** 790x870px, offset 120px, 1px border rgba(255,255,255,0.08), bg rgba(255,255,255,0.02). Top edge highlight at 6%.
- All planes: border-radius 3px.

### Layer Labels
- "Layer 01" through "Layer 04" at 8.5px Space Mono, letter-spacing 3.5px, uppercase
- Positioned in exposed bottom-right strips of each back plane
- Opacities: 22% (Layer 01), 30% red (Layer 02), 16% (Layer 03), 12% (Layer 04)

### Depth Annotations (SVG)
- Measurement brackets on right and bottom edges showing total offset (120px)
- 0.7px stroke at 7% white, tick marks at ends, measurement label in 6.5px mono at 9% white

### Typography
- Headline: 78px Space Grotesk bold, -3.5px tracking, 0.93 line-height
- Dim words at 16% white, key phrase in #C83C32, action words at 95% white
- Body: 22px at 28% white, 540px max-width
- Stat: 200px bold #C83C32, -8px tracking
- Stat label: 10px mono at 20% white, 5px letter-spacing
- Secondary stats: 44px bold at 40% white with 8px mono labels at 12%

### Metadata
- Meta top: 9px mono at 14% white ("Layers: 4 / Depth: Spatial / Composition: Stacked")
- Vertical depth annotation: 7px mono at 11% white, writing-mode vertical-rl
- Data strip: 7.5px mono at 10% white
- Corner L-brackets: 22px, 1px, 4.5% white

### Author Bar
- 1px border-top at 6% white
- Name: 13px semibold at 45% white
- Title: 8px mono at 12% white, uppercase, 2px letter-spacing

### Texture
- SVG fractalNoise at 2.5% opacity

## Key Design Rules
1. The red Plane 2 is the signature element -- never make all planes the same color
2. Offset direction is always bottom-right (each plane shifts right and down)
3. Edge highlights go on top and left edges only (light source is top-left)
4. Content lives ONLY on front plane (Plane 1)
5. Back planes are empty except for layer labels
6. Total offset (120px) must be large enough that all 4 plane edges are clearly visible
7. Plane borders must be strong enough to read at feed-scroll speed (8-28% range)

---

*Claude Design Engine by Rahaman Bin Ujit*
