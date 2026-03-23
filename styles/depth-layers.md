# Depth Layers

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Concept:** Camera depth-of-field meets data poster. Three typographic layers at different "distances" create a Z-depth illusion, with the main content in sharp focus at the mid-layer while ghost text blurs into the background and foreground.

**When to use:** Reveal posts, capability demonstrations, technical insights, and any content where the metaphor is "focused clarity emerging from layers of complexity."

---

## Layout Specs

### Canvas
- 1080x1350, #0A0A0A background
- Radial vignette: ellipse 55%x50% at 50% 45%, transparent center to rgba(0,0,0,0.35) edges

### Layer 1 — Farthest (Background Ghost Text)
- One keyword from headline (e.g., "SYSTEM") at 180-200px bold uppercase
- Color: 3-4% white
- Filter: blur(1-1.5px)
- Position: top-center, slightly cropped
- Optional Layer 1b: second word rotated 90deg on edge, 2.5% white, blur(1.8px), for spatial variety

### Layer 2 — Mid (In-Focus Content)
- **Headline:** 72-76px bold uppercase, alternating dim (14% white) and bright (92% white) lines, key phrase in #C83C32
- **Stat number:** 220-240px bold #C83C32, below headline
- **Stat label:** 11px Space Mono, red 45%, letter-spacing 4px
- **Supporting stats:** 46-48px bold 40% white, right-aligned, with 9px mono labels at 18% white
- **Body text:** 22-24px weight-300, 28% white, line-height 1.55
- Position: vertically centered zone (top: 340-740px)

### Layer 3 — Closest (Foreground Ghost Text)
- Same keyword as Layer 1 repeated at 240-260px bold uppercase
- Color: 4-5% white
- Filter: blur(0.8-1.2px)
- Position: bottom area, extending beyond canvas edges (left: -40 to -60px)
- Creates "foreground bokeh" effect

### Depth Connection Lines
- 2-3 dashed vertical lines (1px, 2.5-4% white) linking layer positions
- Dash pattern: 4-6px on, 8-14px off
- Suggest spatial connections between layers

### Focal Plane Indicator
- Thin horizontal line at headline zone (around top: 450px)
- Linear gradient: transparent edges to red center (12-16% opacity)
- Label: "Focal Plane // f/1.4" in 7px mono, red 22%

### Metadata
- **Top right:** "LAYER: 1/3 // DEPTH: 0.4m" + "FOCUS: MID // APERTURE: f/1.4" in 8px mono 10% white
- **Bottom right:** "DEPTH MAP: 3 LAYERS // RENDER: [date]" in 8px mono 10% white

### Author Bar
- Bottom, left-aligned: name 13px bold 50% white, title 9px mono 20% white
- 1px border-top at 6% white, 18px padding-top

### Standard Elements
- Corner L-brackets: 22px, 1px, 5% white (top-left, bottom-right)
- SVG noise: 2.5-3% opacity
- No drop shadows, no gradients on elements

---

## Key Principles
1. **Three distinct blur levels** create the DOF illusion — background blurred, mid sharp, foreground blurred
2. **Same word repeated across layers** reinforces the depth metaphor (word appears at 3 distances)
3. **Vignette is essential** — darkened edges create atmospheric depth like a camera lens
4. **Focal plane line** adds the photographic HUD feel without being decorative
5. **Keep Layer 3 cropped** — extending beyond canvas suggests closeness to the "camera"
6. Ghost text should be barely visible (3-5% white) — it's atmosphere, not content

---

*Claude Design Engine by Rahaman Bin Ujit*
