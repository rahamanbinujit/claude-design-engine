# Diagonal Slice

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5
**Status:** KEEP

## Concept
A bold diagonal line cuts the poster from top-left to bottom-right, dividing it into two distinct tonal zones. The diagonal creates dynamic tension that breaks the static grid expectation. Content is placed on both sides, respecting the boundary. The red accent line itself is the hero element.

## When to Use
- Contrast/comparison posts (us vs them, old vs new, problem vs solution)
- Duality content where two opposing ideas coexist
- Positioning posts that pit Rahaman's approach against the norm
- Any post with a clear "this side / that side" narrative

## Specs

### Canvas
- 1080x1350px (4:5 LinkedIn portrait)
- Dark zone: #0A0A0A (top-left triangle)
- Light zone: #181818 (bottom-right triangle)

### The Diagonal Line (Hero)
- 5px solid #C83C32
- Angle: 42deg from top-left
- Glow: box-shadow 0 0 30px rgba(200,60,50,0.5), 0 0 60px rgba(200,60,50,0.2)
- clip-path on light zone: polygon(100% 68%, 100% 100%, 0% 100%)

### Dark Zone Content (Top-Left)
- Tag: Space Mono 14px, 4px letter-spacing, 35% opacity
- Headline: Space Grotesk 82px, 700 weight, -2px tracking
  - Dim words: 40% opacity white
  - Normal words: 100% white
  - Accent word: #C83C32 with red glow (40px/80px shadows at 0.6/0.25)
- Body text: Space Grotesk 22px, 300 weight, 55% opacity, max-width 520px

### Light Zone Content (Bottom-Right)
- Stat number: Space Grotesk 120px, 700 weight, -4px tracking
- Stat label: Space Mono 15px, 3px letter-spacing, 40% opacity
- Stat sub: Space Grotesk 18px, 300 weight, 35% opacity

### Decorative Elements
- Cross marks (+): Space Mono 22px, #C83C32 at 45% opacity, placed along diagonal path
- Ghost text: Space Mono 13px, 6px letter-spacing, 6% opacity white, rotated 42deg (same as diagonal)
- Hairlines: 1px lines parallel to diagonal at 6% opacity, offset -40px/+40px/+90px from main line
- Ambient glow: radial-gradient rgba(200,60,50,0.08) centered at diagonal midpoint

### Footer
- Author name: Space Grotesk 16px, 500 weight, 50% opacity, bottom-left
- Title: Space Mono 11px, 2px letter-spacing, 20% opacity

## Key Learnings
- Light zone needs minimum #181818 to be visibly distinct from #0A0A0A (original #111 was too subtle)
- Dim headline text needs minimum 0.40 opacity to be readable
- Cross marks along diagonal at 0.45 opacity add editorial detail without clutter
- The diagonal angle (42deg) creates a natural reading flow: headline top-left, stat bottom-right
- Ambient red glow at the diagonal center adds warmth and draws the eye to the intersection

## File Size
- PNG: ~1.5MB (convert to JPEG)
- JPEG 92%: ~1.0MB

---

*Claude Design Engine by Rahaman Bin Ujit*
