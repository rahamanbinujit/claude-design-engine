# Obsidian Luxury

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Origin:** 2026 "Obsidian" design trend. Tested v73b.
**Vibe:** Premium matte-black surface. Typography weight contrast carries everything. Pure restraint.
**Best for:** Premium positioning posts, quiet confidence themes, luxury brand content, "less is more" messaging, restraint-as-message content.

## Layout
- 1080x1350, #0A0A0A bg
- Three sections: headline+body (top), stat (middle), author (bottom)
- No grid, no columns -- single left-aligned flow
- Generous whitespace between sections (justify-content: space-between)

## Surface Simulation
- 3 radial gradient "sheen zones" simulating matte vs gloss surface contrast
- Sheen 1: 700px ellipse, top-left, 4.5% white opacity
- Sheen 2: 550px ellipse, mid-right, 5% white opacity
- Sheen 3: 450px ellipse, bottom-center, 3% white opacity
- These create barely-perceptible depth -- the eye feels them more than sees them

## Typography
- **Headline:** Space Grotesk, weight 300, 84px, uppercase, letter-spacing +8px, line-height 1.1, color rgba(255,255,255,0.82)
- **Bold anchor word:** ONE word in weight 700, color #FFFFFF -- creates dramatic contrast against the thin surrounding text
- **Body:** Space Grotesk, weight 300, 24px, rgba(255,255,255,0.26), line-height 1.7, max-width 600px
- **Stat label:** Space Grotesk, weight 300, 16px, rgba(255,255,255,0.20), uppercase, letter-spacing 14px
- **Secondary stat numbers:** Weight 300, 42px, rgba(255,255,255,0.40)
- **Secondary stat labels:** Weight 300, 11px, rgba(255,255,255,0.15), uppercase, letter-spacing 6px
- **Author name:** Weight 300, 14px, rgba(255,255,255,0.28), uppercase, letter-spacing 6px
- **Author title:** Weight 300, 10px, rgba(255,255,255,0.12), uppercase, letter-spacing 4px

## Color Rules (CRITICAL)
- Red used ONLY on: stat number + one thin horizontal accent line
- No red on headlines, body, labels, or any other element
- Accent line: 140px wide, 1px height, rgba(200,60,50,0.4)
- Everything else: shades of white at varying opacity (82%, 40%, 28%, 26%, 20%, 15%, 12%)

## Stat Number
- 210px, bold 700, #C83C32
- Engraved/debossed effect via text-shadow:
  - 1px 1px 0px rgba(255,255,255,0.08) -- highlight edge
  - -1px -1px 0px rgba(0,0,0,0.95) -- shadow edge
  - 0px 3px 4px rgba(0,0,0,0.6) -- depth shadow
- Letter-spacing -8px, line-height 0.82

## Structural Elements
- 1px separator above author bar at 4% white
- No mono annotations, no structural labels, no metadata
- No decorative elements -- typography weight IS the design

## What NOT to Do
- No Space Mono anywhere (breaks the luxury feel)
- No structural labels or annotations
- No more than 2 font weights (300 + 700)
- No gradients on elements
- No borders, boxes, or containers
- No decorative elements beyond the sheen zones
- Never use more than one red element besides the stat

---

*Claude Design Engine by Rahaman Bin Ujit*
