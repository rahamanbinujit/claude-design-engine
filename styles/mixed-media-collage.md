# Mixed Media Collage Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5
**Best for:** Storytelling posts, problem-solution content, "behind the scenes" thought leadership, posts where supporting context lives in "notes" and "scraps"

## Concept
Torn paper fragments with tape strips and hand-drawn annotations layered on dark background. The analog scrapbook/collage aesthetic contrasts with clean digital typography. Inspired by 2026's "Anti-AI Crafting" trend -- deliberately imperfect, tactile, human. Multiple information layers (paper scraps carry supporting text, dark bg carries the main headline).

## Layout
- **Format:** 1080x1350 (4:5 portrait)
- **Upper zone (0-45%):** Torn paper fragments with supporting content (problem statement, key stats, notes)
- **Middle zone (45-75%):** Main headline on dark bg, large and bold
- **Lower zone (75-100%):** Stats row + identity footer on dark bg
- **Paper fragments:** 2-3 pieces at different angles, different sizes, held by tape strips

## Paper Fragments
- **Background:** #F5F5F5 or #EDEDED (slight variation between pieces)
- **Shape:** CSS clip-path polygon with irregular edges (simulate torn paper)
- **Rotation:** Each piece rotated 2-5 degrees, alternating directions
- **Shadow:** box-shadow 6-8px 8-12px 20-40px rgba(0,0,0,0.4-0.6)
- **Details:** Notebook ruled lines via repeating-linear-gradient (28-30px spacing, rgba blue-gray at 0.25 opacity)
- **Staining:** Subtle radial gradients for aged paper feel (rgba red at 0.06, rgba black at 0.04)

## Tape Strips
- **Background:** rgba(255, 235, 180, 0.35) -- semi-transparent yellow
- **Size:** 90-120px wide, 22-28px tall
- **Rotation:** Various angles (-15deg to 12deg)
- **Position:** Over paper edges, as if holding them in place
- **Backdrop-filter:** blur(1px) for slight frosted effect

## Typography
- **Headline:** Space Grotesk, 80-88px, weight 700 + 300 mixed (on dark bg)
- **Accent word:** Space Grotesk 700, #C83C32 with red glow text-shadow
- **Paper text:** Space Mono, 14px, monospace, #0A0A0A (on paper fragments)
- **Paper accent:** Space Grotesk 300 italic, 22px, #C83C32 (handwritten-style labels on paper)
- **Stat callout on paper:** Space Mono 700, 40px, #0A0A0A (bold number on its own paper scrap)
- **Stats row:** Space Grotesk 700 36px numbers + Space Mono 12px uppercase labels
- **Identity:** Space Mono 12px, uppercase, letter-spacing 3px, opacity 0.4

## Hand-Drawn SVG Annotations
- **Wavy underline:** Under accent text, red (#C83C32), stroke-width 3, Q-curve zigzag
- **Dashed arrow:** Connecting paper scraps to headline, #F5F5F5 at 0.4 opacity, stroke-dasharray "8 6"
- **Bracket:** Next to stats row, white at 0.25 opacity, stroke-width 2
- **X-marks:** Scattered decorative elements, white at 0.1-0.15 opacity
- **Red marker circle:** Border 3px solid rgba(200,60,50,0.7), border-radius 50%, slight rotation

## Colors
- **Dark bg:** #0A0A0A
- **Paper:** #F5F5F5 (main), #EDEDED (secondary), #E8E4DF (accent scrap)
- **Text on dark:** #FFFFFF
- **Text on paper:** #0A0A0A
- **Red accent:** #C83C32
- **Tape:** rgba(255, 235, 180, 0.35)

## Texture
- Canvas-generated grain overlay: 256px tile, mix-blend-mode overlay, 8% opacity
- Note: grain adds file weight (~2MB JPEG at 95%)

## File Size
- PNG: ~6-7MB (grain texture is incompressible)
- JPEG 95%: ~2MB
- Acceptable for LinkedIn (max 5MB) and Instagram

## When to Use
- Problem-solution posts (problem on paper scrap, solution in headline)
- "Here's what I learned" posts (learnings as paper notes)
- Portfolio/case study posts (stats on paper scraps, positioning in headline)
- Posts where layered information creates narrative depth

## When NOT to Use
- Clean/minimal stat posts (use minimaximalist or type-hero)
- Photo-driven posts (use photo-split or duotone)
- Posts needing small file size (grain adds weight)

## Reference
- V18: Example: Mixed Media Collage poster
- Export: Example: Mixed Media Collage poster

---

*Claude Design Engine by Rahaman Bin Ujit*
