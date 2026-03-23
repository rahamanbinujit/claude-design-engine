# Neon Noir

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Tested:** V30 | **Quality Score:** 4 | **Status:** KEEP

## Concept
Single neon-glow element on matte dark background. "Neon sign on black wall" aesthetic. The glow IS the design. Everything non-neon stays completely dark and flat, creating extreme contrast between the one luminous element and the surrounding darkness.

## When to Use
- Bold positioning/statement posts
- Builder identity, "I build" messaging
- Cinematic dark mood posts
- Tech/systems content that needs edge
- Night-mode aesthetic posts

## Key Specs

### The Neon Element (ONE of these, not all)
- **Outline box:** 1.5px border, `#C83C32`
- **Underline:** 2px height, `#C83C32`
- **Vertical line:** 2px width, `#C83C32`

### Neon Glow (multi-layer box-shadow)
```css
box-shadow:
  0 0 6px #C83C3290,
  0 0 16px #C83C3250,
  0 0 50px #C83C3225,
  0 0 100px #C83C3212,
  inset 0 0 6px #C83C3220,
  inset 0 0 16px #C83C3210;
```

### Text Glow (for accent words)
```css
text-shadow:
  0 0 10px #C83C3270,
  0 0 25px #C83C3235,
  0 0 50px #C83C3218;
```

### Ambient Wall Glow (light spill)
```css
.ambient-glow {
  background: radial-gradient(ellipse, #C83C3212 0%, #C83C3208 30%, transparent 70%);
  filter: blur(60px);
}
```

### Background
- `#0A0A0A` matte dark, completely flat
- Faded bg text (320px, `#0D0D0D`) for subtle depth
- NO grain, NO texture -- matte is the point

### Typography
- Headline: Space Grotesk 700, 76px, white
- Accent word: `#C83C32` with text-shadow glow
- Subtext: Space Grotesk 300, 23px, `#888`
- Labels: Space Mono 11px, `#444`

### Layout
- Neon box frames the headline (primary focal point)
- Secondary neon accents: underline or vertical edge line (max 2 secondary)
- Pull quote with red left border as secondary content block
- Stats row below
- Identity at bottom

## Rules
- ONLY ONE primary neon element (the box or one line -- not multiple boxes)
- Secondary neon accents are thin and subtle (2px max)
- Everything non-neon must be matte: no other glows, no other bright elements
- No corner dots or UI-like decorations -- keep it organic/atmospheric
- Ambient glow is mandatory -- without it, the neon looks like a CSS border, not a neon tube
- The 100px outer glow layer is what sells the "neon sign" feel

## File Size
Compresses well: ~500KB PNG (no texture/grain to inflate file size).

---

*Claude Design Engine by Rahaman Bin Ujit*
