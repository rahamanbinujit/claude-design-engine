# Layered Depth Planes

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Tested:** V38 | **Quality Score:** 4 | **Status:** KEEP

## Concept
Three distinct depth layers simulating parallax in a static image. Far background has giant ghost text providing texture, mid-ground has decorative geometric shapes adding spatial interest, foreground has sharp readable content that pops. The depth hierarchy creates visual richness without clutter.

## When to Use
- Systems/infrastructure/process posts
- Layered-concept messaging ("layers of strategy", "depth of thought")
- Posts about building complex things
- Content where the theme involves multiple levels or dimensions
- Marketing systems, automation, tech stack posts

## Key Specs

### Layer 1: Far Background (z-index: 1)
```css
/* Giant repeating words at ghost opacity */
font-size: 220px;
font-weight: 700;
color: rgba(255, 255, 255, 0.03);  /* 3% opacity -- barely visible */
text-transform: uppercase;
letter-spacing: -8px;
/* Stagger vertically every ~260px */
/* Use 2 alternating words that relate to the post theme */
```

### Layer 2: Mid-Ground Geometry (z-index: 2)
```css
/* Mix of shapes at low opacity */
/* Large circle: 400px, border 1px rgba(200,60,50,0.12), top-right overflow */
/* Medium circle: 240px, same border style, bottom-left overflow */
/* Vertical hairlines: 1px wide, 500-600px tall, rgba(200,60,50,0.06) */
/* Crosshair: 60px, 1px white lines at 6% opacity */
/* Dot cluster: 3x3 grid, 3px dots, rgba(200,60,50,0.15) */
/* All shapes partially off-canvas for natural feel */
```

### Layer 3: Foreground Content (z-index: 3)
```css
/* Sharp, full-opacity content */
.tag: Space Mono, 14px, #C83C32, uppercase, letter-spacing 4px
.headline: Space Grotesk 700, 82px, #FFFFFF, letter-spacing -2px
.headline .accent: #C83C32  /* 1-2 accent words */
.body-text: Space Grotesk 400, 24px, rgba(255,255,255,0.5)
.separator: 60px wide, 1px, rgba(200,60,50,0.4)
.stat-number: Space Grotesk 700, 52px, #FFFFFF
.stat-label: Space Mono, 13px, rgba(255,255,255,0.35), uppercase
```

### Bottom Bar
```css
position: absolute; bottom: 60px; left/right: 80px;
.author: Space Mono, 12px, rgba(255,255,255,0.25), uppercase, letter-spacing 3px
```

## Layout
- 1080x1350px, #0A0A0A background
- Content padding: 100px top/bottom, 80px sides
- Headline max-width: 850px
- Body text max-width: 700px
- Stat row: flex, gap 80px
- 40px gap between tag and headline
- 50px gap between headline and body
- 50px gap between separator and stats

## Rules
- Background words must relate to the post theme
- Never more than 2 alternating words in Layer 1
- Mid-ground shapes should partially overflow canvas edges
- No drop shadows anywhere
- No gradient overlays
- Red accent used sparingly: tag, 1-2 headline words, separator, dot cluster
- Stats row optional -- can be replaced with CTA or quote

## File Size
387KB PNG at 4x scale -- very efficient. No JPEG conversion needed.

---

*Claude Design Engine by Rahaman Bin Ujit*
