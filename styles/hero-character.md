---
name: hero-character
quality-score: 4
status: KEEP
---

# Hero Character Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


Single oversized letter as sculptural background element, bleeding off the canvas edge. Content overlaid with type-hero hierarchy.

## Specs

- **Format:** 1080x1350 (4:5)
- **Background:** #0A0A0A
- **Hero character:** 900px Space Grotesk Bold, positioned to bleed off top-right (top: -120px, right: -80px)
  - Layer 1 (fill): rgba(200, 60, 50, 0.08)
  - Layer 2 (stroke): -webkit-text-stroke 3px rgba(200, 60, 50, 0.3)
  - Choose brand-relevant letter (A for AI, M for Marketing, etc.)
- **Glow:** 650px radial gradient behind character, rgba(200, 60, 50, 0.2)
- **Headline:** 86px mixed-weight (300 light / 700 bold), max-width 750px
- **Accent word:** Red #C83C32 with triple text-shadow glow (40px/80px/120px)
- **Tag:** Space Mono 13px, 4px letter-spacing, uppercase, 40% white opacity
- **Red accent line:** 3px wide, 60px tall, 60% opacity
- **Pullquote:** 22px, weight 300, 55% white opacity
- **Stats row:** 4 stats, 42px bold numbers (red for key stats), Space Mono 11px labels
- **Identity:** Name 15px weight 600, title Space Mono 11px uppercase
- **Echo character:** 48px stroke-only version of hero letter in bottom-right, ties the motif

## When to Use

- AI/brand identity/positioning posts
- Posts where a single letter is brand-relevant (A=AI, X=10x, etc.)
- Bold statement posts that need architectural depth without photos
- Premium editorial feel with subtle brand texture

## Key Learnings

- Two-layer technique (fill + stroke) creates more depth than either alone
- Character must bleed off canvas edge (crop by overflow:hidden) to feel sculptural
- Glow behind the character adds atmosphere without competing with text
- Echo character in footer creates visual bookend
- Iteration 1 was too subtle (stroke 2px/15%, fill 4%). Minimum: stroke 3px/30%, fill 8%
- Character should NOT compete with headline -- it's architectural, like a watermark with substance

---

*Claude Design Engine by Rahaman Bin Ujit*
