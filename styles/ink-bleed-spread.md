# Ink Bleed Spread

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Style ID:** ink-bleed-spread
**Quality Score:** 4/5 — KEEP
**Best for:** Thought leadership, philosophy, systems-thinking, wisdom posts. Analog warmth on digital dark canvas.

---

## Concept
Headline text with CSS text-shadow simulating ink bleeding/spreading on paper. Multiple shadow layers at varying offsets and opacities create a letterpress over-impression effect. Body text stays crisp for contrast. A single asymmetric ink splatter element adds organic warmth.

## Specs

### Canvas
- **Size:** 1080x1350 (4:5 portrait)
- **Background:** #0A0A0A
- **Export:** Puppeteer, headless: 'shell', deviceScaleFactor: 4, wait 3000ms

### Typography
- **Tag:** Space Mono, 13px, uppercase, letter-spacing: 3px, rgba(255,255,255,0.25)
- **Headline:** Space Grotesk, 82px, weight 700, line-height 1.05, letter-spacing: -2px, #FFFFFF
- **Red accent word:** #C83C32 with its own bleed shadow stack
- **Body:** Space Grotesk, 24px, weight 300, line-height 1.65, rgba(255,255,255,0.55) -- NO shadows (crisp)
- **Stat number:** Space Grotesk, 72px, weight 700, #C83C32 with bleed shadows
- **Stat label:** Space Mono, 14px, uppercase, rgba(255,255,255,0.3)
- **Author:** Space Mono, 12px, uppercase, letter-spacing: 2px, rgba(255,255,255,0.2)

### Ink Bleed Effect (Headline)
```css
text-shadow:
  /* Layer 1 - close soft spread */
  1px 1px 3px rgba(255,255,255,0.15),
  -1px -1px 3px rgba(255,255,255,0.08),
  /* Layer 2 - wider spread */
  2px 0px 5px rgba(255,255,255,0.06),
  0px 2px 5px rgba(255,255,255,0.06),
  -2px 0px 5px rgba(255,255,255,0.04),
  0px -2px 5px rgba(255,255,255,0.04),
  /* Layer 3 - outermost halo */
  3px 1px 8px rgba(255,255,255,0.03),
  -1px 3px 8px rgba(255,255,255,0.03);
```

### Ink Bleed Effect (Red Accent)
```css
text-shadow:
  1px 1px 3px rgba(200,60,50,0.3),
  -1px -1px 3px rgba(200,60,50,0.15),
  2px 0px 6px rgba(200,60,50,0.12),
  0px 2px 6px rgba(200,60,50,0.12),
  -2px 0px 6px rgba(200,60,50,0.08),
  0px -2px 6px rgba(200,60,50,0.08),
  3px 2px 10px rgba(200,60,50,0.06),
  -2px 3px 10px rgba(200,60,50,0.06);
```

### Ink Splatter
- **Primary:** radial-gradient ellipse, #C83C32, border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%, filter: blur(2px), opacity: 0.35
- **Secondary:** smaller nearby splatter, opacity: 0.25
- **Dots:** 3-4 scattered ink dots (3-6px circles, #C83C32, opacity: 0.10-0.15)
- **Placement:** asymmetric, upper-right quadrant (away from headline)

### Texture Overlay
- Subtle horizontal lines: repeating-linear-gradient, 0deg, transparent 3px then rgba(255,255,255,0.005) 1px
- pointer-events: none

### Layout
- Padding: 100px 80px
- Vertical flow: tag > headline > body > [rule] > stat > author
- Rule: 60px wide, 1px, rgba(255,255,255,0.08)
- Bottom bar: author left, edition marker right

## Key Principles
1. Headline BLEEDS, body stays CRISP -- this contrast is the whole concept
2. Ink splatter is organic and asymmetric -- never centered, never regular
3. Keep splatter subtle (30-35% opacity) -- it's a texture accent, not a focal element
4. Red accent word gets warmer/stronger bleed than white text
5. Paper texture is barely visible -- just enough to prevent flat-digital feel
6. Generous whitespace throughout -- the breathing room sells the editorial quality

---

*Claude Design Engine by Rahaman Bin Ujit*
