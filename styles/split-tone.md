# Split-Tone — Style Spec

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5
**Best for:** Duality/contrast posts — creative vs technical, old vs new, problem vs solution, before vs after

---

## Concept

Vertical split-tone duotone: the poster background is tinted in two contrasting color zones (left = warm, right = cool), with content spanning both halves. The layout visually encodes duality — the concept IS the design.

## Specs

### Format
- 1080x1350 (4:5 portrait)
- Base bg: #0A0A0A

### Split Background
- **Left half:** Semi-transparent warm gradient overlay (red: rgba(200, 60, 50, 0.22) with vertical gradient variation)
- **Right half:** Semi-transparent cool gradient overlay (blue: rgba(40, 80, 160, 0.22) with vertical gradient variation)
- **Center divider:** 1px line, linear-gradient top-to-bottom fading in/out at edges, rgba(255,255,255, 0.06)
- **Atmospheric glows:** Gaussian-blurred (80px) radial gradients — red glow on left (25% opacity), blue glow on right (22% opacity)

### Typography
- **Headline:** Space Grotesk, 86px, mixed weights (300 light + 700 bold)
- **Accent words:** Color-match their zone — red (#C83C32) word with red glow on left side, blue (#4A8EE0) word with blue glow on right side
- **Pullquote:** 22px, weight 300, rgba(255,255,255, 0.55), left border 3px rgba(255,255,255, 0.12)
- **Tag:** Space Mono, 13px, uppercase, 3px letter-spacing, rgba(255,255,255, 0.5)

### Stats Row
- Spatially mirror the split: red stat on left, neutral stat center, blue stat on right
- Stat numbers: 42px, weight 700, colored to match zone
- Stat labels: Space Mono, 12px, uppercase, rgba(255,255,255, 0.4)

### Decorative Elements
- **Faded bg text:** 600px, weight 700, rgba(255,255,255, 0.02) — spans both halves (e.g., "VS")
- **Vertical accent lines:** Red 2px line top-left (180px, fading down), blue 2px line bottom-right (180px, fading up)
- **Horizontal divider:** Gradient line spanning full width, transitioning from red to blue

### Identity Bar
- Gradient dot (red-to-blue linear gradient, 10px circle)
- Name: 15px, weight 600, rgba(255,255,255, 0.7)
- Title: Space Mono, 11px, uppercase, rgba(255,255,255, 0.35)

## Rules
- Atmospheric split (overlapping gradients) > hard split (50% stop). Atmospheric feels more sophisticated.
- Accent elements MUST match their spatial zone to reinforce the concept
- The duality concept should be reflected in the content (two contrasting ideas)
- Blue tone works as secondary brand accent alongside brand red — do NOT use for non-duality posts
- Keep the split subtle/atmospheric, not garish
- Blur shapes compress well, keeping file size reasonable

## File Weight
- PNG: ~1.5MB (blur gradients compress poorly in lossless)
- JPEG 95%: ~1.3MB
- Within LinkedIn's 5MB limit at both formats

---

*Claude Design Engine by Rahaman Bin Ujit*
