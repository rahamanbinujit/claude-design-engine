# Stencil Cutout

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Type:** Typography effect style (can layer onto any layout)
**Tested:** V42 | Score: 4/5 | KEEP
**Best for:** Bold statement posts, systems/process content, industrial/builder aesthetic, authority positioning

---

## Core Concept

Three-layer typography hierarchy: solid white headline words + one red "stencil cutout" accent word with a horizontal bridge cut through it + ghost outlined word. The accent word appears punched out of metal, revealing red light behind the cuts. Industrial, utilitarian, bold.

## Technique

### Three-Layer Type Hierarchy

```css
/* Layer 1: Solid white (primary words) */
.stencil-text {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 130px;
  line-height: 0.92;
  letter-spacing: -4px;
  text-transform: uppercase;
  color: #FFFFFF;
}

/* Layer 2: Red cutout (accent word) */
.stencil-text .cutout {
  display: inline-block;
  position: relative;
  color: transparent;
  background: linear-gradient(180deg, #C83C32 0%, #e04a3f 50%, #C83C32 100%);
  -webkit-background-clip: text;
  background-clip: text;
  filter: drop-shadow(0 0 30px rgba(200, 60, 50, 0.6))
          drop-shadow(0 0 60px rgba(200, 60, 50, 0.3));
  letter-spacing: 8px;
  font-size: 140px;  /* slightly larger than surrounding text */
}

/* Layer 3: Ghost outlined (de-emphasized word) */
.outline-word {
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.12);
}
```

### Stencil Bridge Cut

The signature element. A horizontal bar through the accent word simulating the bridges that hold stencil letterforms together.

```css
.stencil-text .cutout::before {
  content: '';
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  height: 6px;
  background: #0A0A0A;
  z-index: 2;
}
```

### Optional: Horizontal Line Texture Overlay

Subtle scan lines across the cutout word for additional industrial texture.

```css
.stencil-text .cutout::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 18px,
    rgba(10, 10, 10, 0.15) 18px,
    rgba(10, 10, 10, 0.15) 19px
  );
  z-index: 1;
}
```

### Red Glow Layer (Behind Text)

```css
.glow-layer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 200px;
  background: radial-gradient(ellipse at center,
    rgba(200, 60, 50, 0.45) 0%,
    rgba(200, 60, 50, 0.15) 45%,
    transparent 75%);
  filter: blur(50px);
  z-index: 0;
}
```

## Key Rules

1. **Only ONE word gets the cutout treatment.** The stencil word is the hero. Multiple cutout words dilute the effect.
2. **Bridge cut at 45% from top.** This position crosses the midline of most uppercase letterforms where stencil bridges naturally sit.
3. **Cutout word should be slightly larger** (140px vs 130px) to emphasize its hero status.
4. **Ghost outlined word is for de-emphasis.** Use it on the least important word in the headline (e.g., "NOT" in "BUILD SYSTEMS NOT TASKS").
5. **Red glow must be wider than the word** to create ambient light spill, not a tight halo.

## Content Pairing

Works best with:
- Three-word statements ("BUILD SYSTEMS NOT TASKS")
- Imperative/action headlines
- Systems, process, automation, builder messaging
- Content where one word carries the core meaning

## File Size

Exports around 1MB PNG (convert to JPEG 95% for ~860KB). The glow adds size.

## Reference

Example: Stencil Cutout poster

---

*Claude Design Engine by Rahaman Bin Ujit*
