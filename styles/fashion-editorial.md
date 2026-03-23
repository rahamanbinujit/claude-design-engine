---
name: fashion-editorial
description: Vogue/i-D inspired fashion editorial lookbook. Photo bleeds off 3 edges, dissolves into parchment bg. Cormorant Garamond weight-300 serif. Deep burgundy accent. Two-world composition (photo left, text right). The most sophisticated photo integration in the library.
status: KEEP
quality-score: 5
niche: Fashion editorial / Lookbook
---

# Fashion Editorial Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Palette
- **Background:** Warm parchment `#F7F5F0`
- **Text:** Rich black `#1C1C1C`
- **Accent:** Deep burgundy `#6B1D2A`
- **Secondary:** Blush pink `#D4A5A0`
- **Whisper:** Warm taupe `#B5ADA3`

## Typography
- **Headline:** Cormorant Garamond, 56px, weight 300. Elegant, light, editorial.
- **Accent word:** Cormorant Garamond, italic, weight 400, burgundy
- **Deck:** Cormorant Garamond, 18px, weight 300, italic, taupe
- **Category tag:** Libre Franklin, 9px, weight 700, 5px letter-spacing, uppercase, burgundy
- **Stat numbers:** Cormorant Garamond, 44px, weight 600
- **Stat labels:** Libre Franklin, 11px, weight 300, taupe
- **Pull quote:** Cormorant Garamond, 22px, weight 300, italic. Bold words in weight 600 normal.
- **Credits:** Libre Franklin, 7-8px, 700/300 weight, 2-3px letter-spacing

## Layout
- 1080x1350, parchment bg
- Photo: left 62%, bleeding off left/top/bottom edges
- Photo-to-bg dissolve: linear-gradient fade on right 14% of photo zone
- Right column: 340px wide, 60px from right edge
- Vertical flow: category tag → headline → deck → accent rule → stats stack → pull quote → credits
- Ghost issue number top-right

## Photo Treatment
- `filter: grayscale(0.85) contrast(1.15) brightness(1.0)` -- near-B&W with slight warmth
- object-position varies by photo (center 25% for portraits)
- Photo IS the design -- it occupies 62% of the canvas
- Best photos: profile shots, looking away, contemplative, editorial mood

## Key Technique: Photo Dissolve
```css
.photo-right-fade {
  position: absolute;
  top: 0; left: 52%; width: 14%; height: 100%;
  background: linear-gradient(90deg, transparent 0%, #F7F5F0 100%);
}
```
This creates a seamless photo-to-background transition without a hard edge.

## Best For
- Profile/identity posts ("this is who I am")
- Contemplative/reflective content
- Thought leadership with editorial authority
- Career milestone reflections
- Any post where the mood is quiet confidence, not loud proclamation

---

*Claude Design Engine by Rahaman Bin Ujit*
