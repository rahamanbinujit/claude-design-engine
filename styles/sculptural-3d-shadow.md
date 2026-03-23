# Sculptural 3D Shadow

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Concept
The stat number is a massive 3D extruded sculpture on a dark surface. CSS text-shadow layers create genuine volumetric depth -- the form feels solid, heavy, and physically present. Thin-weight headline contrasts with the brutalist sculptural stat. A ground plane line anchors the form.

## When to Use
- Impact/authority posts
- Big stat reveals
- "Built something massive" messaging
- Posts where weight and presence matter
- Single powerful number as the centerpiece

## Specs

### Canvas
- 1080x1350 (portrait)
- Background: #0A0A0A
- SVG noise: 2.5% opacity

### Typography
- **Headline:** Space Grotesk, 74px, weight 300 (thin), -3.5px tracking, 0.92 line-height
  - Dimmed words at 16% white
  - Accent word in #C83C32, weight 300
  - Key words (contrast pair) full white
- **Body:** Space Grotesk, 23px, 30% white, 1.55 line-height, 520px max-width
- **Stat number:** Space Grotesk, 280px, weight 700, #C83C32 face color, -14px letter-spacing
- **Stat label:** Space Mono, 11px, 20% white, 6px letter-spacing, uppercase
- **Mono metadata:** Space Mono, 9px, 10% white, 3px letter-spacing

### The 3D Extrusion Effect (Core Technique)
30 stacked text-shadow layers at 45-degree angle (equal x and y offset).

**Critical:** Use DARK shadows, not light. The face is solid color, shadows darken progressively toward the background color. This is what makes it look solid rather than glowy.

Shadow layer progression for #C83C32 face:
```css
text-shadow:
  1px 1px 0 rgba(160,40,30,1),   /* Near face color */
  2px 2px 0 rgba(150,38,28,1),
  3px 3px 0 rgba(140,35,26,1),
  ...                              /* Gradual darkening */
  15px 15px 0 rgba(37,10,8,1),
  ...                              /* Approaching black */
  30px 30px 0 rgba(10,3,2,1),     /* Nearly #0A0A0A */
  /* Ambient grounding shadows */
  32px 32px 15px rgba(0,0,0,0.4),
  35px 35px 30px rgba(0,0,0,0.3);
```

For white face color, use:
```css
/* Start at near-white, darken to near-black */
1px 1px 0 rgba(220,220,220,1),
...
30px 30px 0 rgba(10,10,10,1),
```

### Secondary Stats
- 52px bold, 55% white face
- 8-layer white extrusion (15% opacity front to 1% back)
- Ambient shadow at end (10px 10px 8px at 30% black)
- Right-aligned, stacked vertically with 30px gap
- 8px mono labels at 14% white, 4px letter-spacing

### Ground Plane
- 2px horizontal line at ~65% down the canvas
- Gradient: solid #C83C32 fading to transparent (left to right)
- 30% opacity
- Marks where the 3D form "meets the surface"

### Depth Caption
- Bottom-right area
- 7.5px Space Mono, 7% white
- 3 lines: Projection / Material / Surface
- Pure atmosphere text

### Author Bar
- Bottom, full width
- 1px border-top at 5% white
- Name: Space Grotesk 13px, 500 weight, 40% white
- Title: Space Mono 8px, 15% white, uppercase

## Layout Flow (top to bottom)
1. Mono metadata (9px, top)
2. Headline (74px thin, left-aligned)
3. Body text (23px, left-aligned)
4. **Stat sculpture** (280px, left-aligned, the centerpiece)
5. Ground plane line (horizontal)
6. Secondary stats (right side, vertically stacked alongside the main stat)
7. Depth caption (bottom-right)
8. Author bar (bottom)

## Key Design Rules
- Headline MUST be thin weight (300) to contrast with the heavy stat
- Stat face color must be SOLID, not translucent
- Shadow layers must darken toward background, not lighten
- Always include ambient blur shadows at the end to ground the form
- Ground plane line anchors the sculpture -- never skip it
- No grid, no annotations beyond the depth caption -- pure sculptural impact
- Keep body text above the stat, never overlapping

## Reference
- File: Example: V78B Sculptural 3D Shadow poster

---

*Claude Design Engine by Rahaman Bin Ujit*
