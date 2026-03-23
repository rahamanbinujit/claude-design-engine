---
name: png-grain
type: overlay-technique
quality-score: 4
status: KEEP
---

# PNG Grain Overlay

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Layout-agnostic texture technique. Can be layered onto ANY style.**

## What It Is
Canvas-generated pixel noise tiled across the poster as an overlay. Adds organic, tactile warmth to flat dark backgrounds. Replaces the failed SVG feTurbulence approach (invisible at 4x Puppeteer export).

## When To Use
- Any dark bg poster that feels too flat/digital/sterile
- Combine with type-hero, asymmetric, bento-grid, or any other style
- Best on #0A0A0A or similar dark backgrounds (grain is subtle on light bg)

## Technical Specs

### Grain Generation (JavaScript in HTML)
```javascript
const size = 256;
const canvas = document.createElement('canvas');
canvas.width = size;
canvas.height = size;
const ctx = canvas.getContext('2d');
const imageData = ctx.createImageData(size, size);
const data = imageData.data;

for (let i = 0; i < data.length; i += 4) {
  const v = Math.random() * 255;
  data[i] = v;     // R
  data[i+1] = v;   // G
  data[i+2] = v;   // B
  data[i+3] = 255; // A (opacity controlled by CSS)
}

ctx.putImageData(imageData, 0, 0);
const dataURL = canvas.toDataURL('image/png');
document.getElementById('grain-overlay').style.backgroundImage = `url(${dataURL})`;
```

### CSS Overlay
```css
#grain-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  mix-blend-mode: overlay;
  opacity: 0.12;        /* 10-15% sweet spot on dark bg */
  pointer-events: none;
  z-index: 10;          /* above all content */
  background-repeat: repeat;
  background-size: 256px 256px;
}
```

## Key Parameters
| Parameter | Value | Notes |
|-----------|-------|-------|
| Tile size | 256px | Smaller = visible repetition, larger = file bloat |
| Opacity | 0.10 - 0.15 | 0.12 is default. Lower = barely there, higher = grungy |
| Blend mode | overlay | Best for dark bg. "soft-light" is gentler alternative |
| z-index | 10 | Must be above all content layers |

## Tradeoffs
- **File size increase:** Grain adds ~1-2MB to JPEG output. Per-pixel noise is inherently incompressible.
- **Always export as JPEG 95%** when using grain. PNG with grain will be 5-7MB+.
- LinkedIn max is 5MB, so JPEG 95% (~1.9MB) is safe.

## What Failed Before
- SVG feTurbulence (V2, V9): baseFrequency 0.9, opacity 0.035-0.04 — completely invisible at Puppeteer 4x deviceScaleFactor
- Canvas grain at opacity 0.04 (V9b): still too subtle
- This approach (0.12 opacity + overlay blend) is the proven solution

## Reference
- Test file: Example: Png Grain poster
- Export: Example: Png Grain poster (1.9MB JPEG 95%)

---

*Claude Design Engine by Rahaman Bin Ujit*
