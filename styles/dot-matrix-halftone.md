# Dot Matrix Halftone

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Concept
Print production halftone screen meets data visualization. The entire poster is covered in a subtle dot matrix grid (like a halftone printing screen), with dots increasing in size and shifting to red around the stat area, creating a "heat cluster" that draws the eye. A zoom window reveals the dot structure at magnified scale.

## When to Use
- Systems-thinking posts
- Data-driven / analytics posts
- "Hidden patterns" / attention-to-detail posts
- "Look closer" / beneath-the-surface posts
- Print/production craft posts

## Layout
- 1080x1350, #0A0A0A background
- Full-bleed dot matrix field covering entire poster
- Heat zone centered on stat area (concentric rings of increasing dot density)
- Zoom window in upper-right showing enlarged dots
- Content flows: tag > headline > body > stat (in heat cluster) > secondary stats > author bar

## Dot Matrix Field
- **Primary layer:** 1.8px dots at 6% white opacity, 12px grid spacing
- **Secondary layer:** 1px dots at 2.5% white, offset 6px (creates denser texture)
- Both layers cover the entire poster as base texture

## Heat Zone (5 concentric rings)
- Ring 1: 520px diameter, 2.2px dots at 7% red
- Ring 2: 400px, 3px dots at 13% red
- Ring 3: 280px, 4px dots at 22% red
- Ring 4: 180px, 5px dots at 32% red
- Ring 5: 100px, 5.5px dots at 45% red
- All rings use radial-gradient circles on 12px grid
- Subtle radial glow (8% red) behind center
- Centered on the stat number position

## Zoom Window
- 140x140px rectangle with 1.5px red border (40% opacity)
- Corner bracket accents (16px arms, 50% red)
- Interior: 6px dots at 55% red on 20px grid (simulating 4x magnification)
- "DETAIL 4X" label above in 9px Space Mono, 45% red
- SVG dashed connector lines (1px, 18% red, 4px dash) from dot field area to window corners
- Small red circles (2px, 25% red) at connector origin points

## Typography
- **Tag:** 11px Space Mono, 6px letter-spacing, 32% white
- **Headline:** 78px Space Grotesk bold, -2.5px tracking, key word in #C83C32
- **Body:** 24px Space Grotesk, 42% white
- **Stat:** 148px Space Grotesk bold, #C83C32
- **Stat label:** 12px Space Mono, 5px letter-spacing, 28% white
- **Secondary stats:** 38px bold white numbers, 10px mono labels

## Print Annotations
- "LPI: 85 / SCREEN: 45deg" -- top-right, 8px mono, 14% white
- "DOT GAIN: 18% / SUBSTRATE: MATTE BLACK" -- bottom-left, 8px mono, 14% white
- "HALFTONE SCREEN -- 85 LPI -- PROCESS K+R" -- left edge rotated -90deg, 7px mono, 9% white
- Grid reference marks (A1/A8/F1/F8) at corners, 7px mono, 8% white
- Dot count annotation ("8,100 DOTS / 90 x 90 GRID") below stat, 8px mono, 25% red

## Density Scale Strip
- Right edge, vertically centered
- 5 red dots graduating from 12px (100% opacity) down to 2px (10% opacity)
- "100%" and "0%" labels in 7px mono at 18% white

## Key Principles
- The dot field must be VISIBLE at normal viewing distance (6% white minimum)
- Heat zone must create clear gradient from ambient white to concentrated red
- Zoom window must show noticeably larger dots than the field (4x scale)
- Print annotations add authenticity but stay below 14% opacity
- The concept works best when the headline content mirrors the "hidden pattern" visual metaphor

## Reference
- 1.1MB PNG at 4320x5400 (4x deviceScaleFactor)

---

*Claude Design Engine by Rahaman Bin Ujit*
