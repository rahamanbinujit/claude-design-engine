# Story Format — Design Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Self-score:** 4.5/5
**Best for:** LinkedIn stories, Instagram stories, short-form vertical content, mobile-first announcements

---

## Dimensions
- **Canvas:** 1080 x 1920px (9:16 aspect ratio)
- **Export:** Puppeteer deviceScaleFactor: 4 (4320 x 7680px native)
- **File format:** PNG for graphics (<1MB), JPEG 95% if larger

## Layout Structure
- **Safe zone:** Keep all key content between y:200 and y:1700 (avoid top/bottom 15%)
- **Headline area:** Centered vertically around y:500-850 (the natural eye-landing zone)
- **Stat stack:** Vertical (not horizontal) — suits tall format. Around y:1150-1450
- **Identity/footer:** Bottom area, y:1600-1760
- **Tag/category:** Top area with vertical accent line, y:160-320

## Typography
- **Headline:** Space Grotesk, 96px, mixed weights (300 light + 700 bold)
- **Subtext:** Space Grotesk, 26px, weight 300, opacity 0.7
- **Stats numbers:** Space Mono, 52px, weight 700
- **Stats labels:** Space Grotesk, 22px, weight 300, opacity 0.5
- **Tag:** Space Mono, 18px, letter-spacing 4px, uppercase, opacity 0.5
- **Footer name:** Space Grotesk, 24px, weight 600
- **Footer title:** Space Mono, 16px, letter-spacing 2px, uppercase, opacity 0.4

## Colors
- **Background:** #0A0A0A
- **Primary text:** #FFFFFF
- **Secondary text:** #F5F5F5
- **Accent (single):** #C83C32 with glow (text-shadow: 0 0 60px rgba(200,60,50,0.6), 0 0 20px rgba(200,60,50,0.35))

## Structural Elements
- **Vertical accent line:** 3px wide, 120px tall, #C83C32, left side (x:80)
- **Divider:** 60px wide, 3px tall, #C83C32, opacity 0.6, separates content from footer
- **Faded bg number:** 600px font-size, 2% opacity, positioned right side partially off-canvas

## Spacing
- **Left/right padding:** 80px
- **Between sections:** 100-150px vertical gaps
- **Stats gap:** 40px between items

## Key Principles
1. The tall format naturally provides generous whitespace — do not fill it
2. Content flows top-to-bottom: tag > headline > subtext > stats > identity
3. Vertical stat stack reads like a dashboard feed
4. Center safe zone keeps content visible even with platform UI overlays
5. Mixed font weights (light/bold) create editorial drama in the headline
6. One red accent element only (the accent word in headline)
7. Structural red elements (line, divider) are secondary and subtle

## Adaptation Notes
- This is the type-hero style adapted for 9:16 vertical
- Can combine with other styles: glitch-text accent, sketch-mix annotations, bento-grid stat cards
- For photo versions, use duotone treatment in the upper 40% zone with text below

---

*Claude Design Engine by Rahaman Bin Ujit*
