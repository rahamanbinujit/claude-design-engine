# Clip-Path Shapes Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5

## Concept
Geometric clip-path shapes (diamond, parallelogram, hexagon, triangle) arranged as a compositional cluster, serving as visual motif on dark backgrounds. Shapes act as decorative geometric elements or photo containers.

## Specs

### Layout
- 1080x1350 (4:5 portrait)
- Content left-aligned (80px left padding)
- Shape cluster positioned top-right
- Type-hero base with geometric decoration

### Shape Cluster (top-right)
- **Diamond (main):** 320px, clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%), grid pattern inside (20px grid, 3% white opacity)
- **Parallelogram:** 220x200px, clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%), diagonal line pattern inside
- **Hexagon:** 180px, clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)
- **Red triangle accent:** 100px, polygon(50% 0%, 100% 100%, 0% 100%), opacity 0.35
- **Outline diamond:** 140px, ::before with 5% white opacity fill
- All shapes have red-tinted gradient overlays (15-25% opacity) for brand cohesion
- Shapes use slightly lighter bg than body (#222-#2e vs #0A0A0A)

### Floating Elements
- 3 small geometric shapes (12-24px) scattered between cluster and content
- Diamond, hexagon, triangle clip-paths at 20-50% red opacity

### Typography
- Tag: Space Mono 13px, uppercase, #C83C32, letter-spacing 3px
- Headline: Space Grotesk 84px, mixed weights (300 light / 700 bold), line-height 0.94
- Accent word: #C83C32 with red glow (40px/80px text-shadow)
- Subtext: 21px, weight 300, 55% white opacity
- Stats: 44px bold numbers, Space Mono 11px labels

### Identity Bar
- Diamond-shaped mark (42px, clip-path diamond, solid #C83C32) echoing the shape motif
- Name 15px weight 600, role Space Mono 11px uppercase

### Colors
- Background: #0A0A0A
- Shape fills: #222-#2e with red gradient overlays
- Red accent: #C83C32
- Text: #FFFFFF / rgba(255,255,255,0.35-0.55)

## When to Use
- Tech/systems/builder positioning posts
- AI and engineering content
- Posts about building complex systems
- When you want geometric visual interest without photos

## With Real Photos
Clip the photo inside the shapes using the same clip-path values. Add a red-tinted ::after overlay for brand consistency. Grid/line patterns layer on top of photos for texture.

## File Size
~977KB PNG (efficient, no grain overlay)

---

*Claude Design Engine by Rahaman Bin Ujit*
