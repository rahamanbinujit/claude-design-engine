---
name: packaging-product
description: Luxury product packaging / unboxing aesthetic. CSS 3D product box on pure white bg. Gold foil text via gradient background-clip. Deep green stats. Spec grid, ingredients list, regulatory info, barcode. Treats personal brand as a premium product.
status: KEEP
quality-score: 4.5
niche: Packaging / Product design
---

# Packaging Product Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Palette
- **Background:** Pure white `#FFFFFF`
- **Text:** Near-black `#1A1A1A`
- **Gold foil:** Multi-stop gradient `#C9A84C → #E8D5A0 → #C9A84C → #A88830 → #C9A84C`
- **Accent:** Deep green `#1A3D2E`
- **Metadata:** Warm stone `#B5A898`
- **Borders:** Light gray `#E8E8E8`
- **Box face:** Off-white `#FAFAF8`

## The 3D Product Box (CSS only)
```css
.box-front {
  transform: rotateY(-8deg) rotateX(2deg);
  box-shadow: 12px 12px 40px rgba(0,0,0,0.06), 2px 2px 8px rgba(0,0,0,0.03);
}
.box-side {
  transform: rotateY(72deg) translateZ(-2px);
  transform-origin: left center;
  background: linear-gradient(180deg, #F0EDE8, #E8E4DE);
}
```
- Perspective: 1200px on container
- Shadow beneath: radial gradient ellipse

## Gold Foil Text Effect
```css
background: linear-gradient(135deg, #C9A84C 0%, #E8D5A0 30%, #C9A84C 50%, #A88830 70%, #C9A84C 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

## Typography
- **Box brand:** Manrope, 12px, weight 300, 8px letter-spacing, gold foil
- **Box product:** Manrope, 48px, weight 800
- **Headline:** Manrope, 32px, weight 200/700 contrast
- **Spec numbers:** Manrope, 32px, weight 700, deep green
- **Spec labels:** Inconsolata, 9px, 2px letter-spacing, stone
- **Ingredients:** Manrope, 11px, weight 300/600, 30-50% black
- **Regulatory:** Inconsolata, 8px, 15% black

## Layout
- Product box hero in upper 50%
- Gold divider
- Centered headline + body
- 3x2 spec grid with thin borders
- Ingredients section
- Regulatory info + barcode at bottom

## Content Mapping
- **Box label** = Brand name
- **Spec grid** = Key stats
- **Ingredients** = Skill breakdown with personality
- **Regulatory** = Manufacturing info (NET WT, MFG, LOT, BATCH)
- **Barcode** = CSS bars at varying heights

## Best For
- Product launch posts (treating yourself as the product)
- "What's inside" breakdowns
- Premium/luxury positioning
- Systems/capabilities posts
- Any content where the metaphor is "I am a premium product, here are my specs"

---

*Claude Design Engine by Rahaman Bin Ujit*
