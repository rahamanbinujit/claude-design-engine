# Fractured Glass

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Tested:** V28 | **Quality Score:** 4/5 | **Status:** KEEP

## Concept
Shattered glass / prism refraction aesthetic. Crack lines radiate from an impact point, shard panels create tonal variation, and text fragments are offset through prismatic clip-path slicing. Best when content involves disruption, broken systems, or paradigm shifts.

## Visual Elements

### Crack Network
- Single impact point (small radial glow, red-tinted)
- 5-7 crack lines radiating outward at varied angles
- Lines: 1-1.5px width, rgba(200, 60, 50, 0.35)
- Varied lengths (280px-600px) for organic feel

### Shard Panels
- 3-4 clip-path polygon shapes on right side of poster
- Subtle tonal fills: rgba(200, 60, 50, 0.04-0.06) or rgba(255, 255, 255, 0.02-0.03)
- Linear gradients within shards for glass-like light variation
- Optional backdrop-filter: brightness(1.05-1.08) for subtle glass distortion

### Shard Edge Highlights
- 2-3 thin lines (1px) along fracture edges
- Linear gradient from rgba(200, 60, 50, 0.5) to transparent
- Simulate light catching glass edges

### Prismatic Text Fragments
- Applied via ::before and ::after pseudo-elements
- `content: attr(data-text)` duplicates the text
- Each pseudo-element gets a different clip-path polygon (left shard / right shard)
- Offset via transform: translate(4-6px, 2-4px) in opposite directions
- Opacity: 0.2-0.35 in red/warm tones
- Creates "broken glass refraction" on key words

## Layout
- 1080x1350 (4:5)
- #0A0A0A background
- Content left-aligned with generous padding (72-80px)
- Fracture elements concentrated on right side (doesn't compete with text)
- Tag (Space Mono, 14px, red, uppercase, letter-spacing 3px) at top
- Headline: 82px+ Space Grotesk bold, mixed weights
- Stat block: large number + label
- Fractured divider line (segmented, not solid)
- Body text: 26px, rgba(245, 245, 245, 0.7)
- Footer: name + "Senior Marketing Executive" at bottom-left

## When to Use
- "Your X is broken" / disruption content
- Before/after transformation posts
- Posts about fixing broken systems
- AI replacing outdated processes
- Any "shattered assumptions" messaging

## File Size
- Typically 0.5-0.8 MB PNG (efficient, no conversion needed)

## Reference
- HTML: Example: Fractured Glass poster
- PNG: Example: Fractured Glass poster

---

*Claude Design Engine by Rahaman Bin Ujit*
