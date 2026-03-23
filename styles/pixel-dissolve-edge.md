---
name: pixel-dissolve-edge
quality-score: 4/5
status: KEEP
---

# Pixel Dissolve Edge

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Content emerges from digital noise. Sharp center, decaying edges. The poster itself feels like a data transmission.**

---

## When to Use
- Tech/AI/systems positioning posts
- "Digital builder" identity content
- Stat-heavy single-image posts
- Bold claims that need visual authority without photos
- Futuristic/cyberpunk-adjacent tone
- Any post where you want the content to feel like it's materializing

## Layout Structure

```
┌══════════════════════════════════════┐
║▓▓▓▒▒░░                    ░░▒▒▓▓▓▓║
║▓▒░                              ░▒▓║
║░                                  ░║
║     // TAG (mono, red)              ║
║                                     ║
║     HEADLINE 74px                   ║
║     accent word in red              ║
║                                     ║
║     140px STAT   mono label         ║
║                                     ║
║     Body text 22px                  ║
║     (max 560px wide)                ║
║                                     ║
║     ── red divider (60px)           ║
║                                     ║
║     5        2        10x           ║
║     INTEG    BRANDS   OUTPUT        ║
║                                     ║
║░                                  ░║
║▓▒░  AUTHOR        DESIGNATION  ░▒▓║
║▓▓▓▒▒░░                    ░░▒▒▓▓▓▓║
└══════════════════════════════════════┘
```

## Pixel Edge Specs
- **Block size:** 16px base, +/- 3px random variation
- **Edge depth:** 12 blocks inward from each edge
- **Opacity falloff:** Quadratic -- `(1 - dist/depth)^2`
- **Corner boost:** 1.4x multiplier where two edges meet (corners get denser)
- **Red blocks:** 6% chance in outer 3 rows, using #C83C32
- **Lighter blocks:** 15% chance of #141414 for depth variation
- **Noise scatter:** 400 tiny pixels (3-8px) distributed randomly in dissolve zone
- **Seeded random:** Use deterministic seed for consistent renders

## Background
- **Vignette:** Radial gradient, transparent center (40%), 20% darkening at 65%, 60% darkening at edges
- Reinforces the "clear center, decaying edge" concept

## Typography
- **Tag:** Space Mono, 13px, 4px letter-spacing, #C83C32
- **Headline:** Space Grotesk 700, 74px, -2px letter-spacing, line-height 1.06
- **Accent word:** #C83C32 (one phrase in headline)
- **Stat:** Space Grotesk 700, 140px, -4px letter-spacing
- **Stat label:** Space Mono, 14px, 2px letter-spacing, 50% white
- **Body:** Space Grotesk 400, 22px, line-height 1.6, 60% white, max 560px
- **Secondary stats:** 36px bold numbers + 11px mono labels, 35% white
- **Author:** Space Mono, 12px, 3px letter-spacing, 35% white
- **Designation:** Space Mono, 11px, 2px letter-spacing, 20% white

## Color Palette
- Background: #0A0A0A
- Text: #FFFFFF
- Accent: #C83C32 (tag, headline accent, red divider, red pixel blocks)
- Muted text: rgba(255,255,255, 0.6 / 0.5 / 0.35 / 0.2)
- Lighter block shade: #141414

## Content Zone
- Positioned: top 140px, left 190px
- Width: 700px (centered in 1080px canvas)
- Author bar: absolute bottom 72px, full 700px width, space-between

## Key Rules
- Center 70% of poster must be completely clean -- no pixel blocks
- Pixel blocks are dark (#0A0A0A) on dark bg -- they create texture through layering and subtle shade variation
- Red blocks are sparse (6%) -- they should feel like signal fragments, not decoration
- Never let dissolve blocks overlap readable text in the content zone
- No scanlines, no gradients on elements, no drop shadows (per never-again rules)

## File Size
- Expect 200-300KB PNG at 4320x5400px (1080x1350 at 4x)
- Well under 1MB, no JPEG conversion needed

## Best Paired With
- Systems builder positioning
- AI/automation content
- "One person, many skills" narrative
- Data-forward posts with a single hero stat

---

*Claude Design Engine by Rahaman Bin Ujit*
