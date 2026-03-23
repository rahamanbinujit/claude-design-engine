---
name: museum-placard
description: Museum gallery wall with framed artwork (photo) and exhibition placard below. Real museum label conventions (artist, title italic, date, medium, collection). Curator's extended note. Gallery white wall as whitespace. The most institutionally authoritative format.
status: KEEP
quality-score: 5
niche: Museum / Gallery exhibition
references: Image Transfers museum labels, MGNSW exhibition labelling, Gaylord accessible labels, Pinterest museum placard boards
---

# Museum Exhibition Placard Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## The Concept
The career/system is treated as an ARTWORK on display in a museum. The photo is framed on the gallery wall. Below it, a standard museum placard provides context. A curator's note offers critical interpretation.

## Gallery Wall
- **Background:** Gallery white `#F8F7F4` with subtle warm gradient
- The wall IS the whitespace — massive, institutional, intentional

## The Artwork (Framed Photo)
```css
.artwork-frame {
  background: #1A1A1A; padding: 12px; /* dark frame */
  box-shadow: 0 4px 20px rgba(0,0,0,0.08); /* gallery lighting */
}
```
- Photo filter: brightness(0.95) contrast(1.05) saturate(0.9)
- Frame shadow below (subtle gradient, like overhead gallery light)

## Museum Label Format (from research)
Strict order, each on its own line:
1. **Artist Name** — Inter, 20px, weight 700
2. **Birth info** — Inter, 13px, weight 400, 40% opacity ("Indian, born 2003")
3. ***Title*** — Source Serif 4, 18px, italic ("*The One-Person System (Study No. 66)*")
4. **Date** — Inter, 14px, 55% opacity ("2025–2026")
5. **Medium** — Inter, 13px, weight 300, 40% opacity (list ALL components)
6. **Collection** — Inter, 12px, weight 300, 30% opacity

## Curator's Note
Source Serif 4, 15px, weight 300, 50% opacity. Bold key phrases at 70%. Reads as genuine art criticism.

## Exhibition Info
- Exhibition name in Inter 14px, weight 600, 30%
- Gallery number + dates in Inter 12px, weight 300, 20%

## Best For
- The most prestigious/authoritative positioning possible
- "My work deserves institutional recognition" messaging
- Portfolio presentations
- Career milestone posts with gravitas
- Any post where treating yourself as a museum-worthy artwork adds weight

---

*Claude Design Engine by Rahaman Bin Ujit*
