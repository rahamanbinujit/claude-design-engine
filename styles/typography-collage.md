# Typography Collage

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Headline words scattered as cut-out newspaper clippings on a dark wall. Intentional disorder resolving into a clean stat conclusion. Cut-and-paste meets data poster.

## When to Use
- Contrarian takes and "they doubted me" narratives
- Proof-of-work posts
- Scattered evidence assembled into undeniable conclusions
- Bold declaration posts where chaos-to-clarity is the visual arc

## Canvas
- 1080x1350px, #0A0A0A background

## Typography
- Headline fragments: Space Grotesk 700, uppercase, sizes vary per word (42-128px)
- Stat: Space Grotesk 700, 240px, #C83C32
- Body: Space Grotesk 300, 23px, 28% white
- Metadata: Space Mono 400, 8px, 10% white
- Stat label: Space Mono 400, 11px, red 40%, letter-spacing 6px

## Fragment System
Each headline word is a separate positioned element with:
- Unique size (42-128px range), rotation (-11deg to +5deg), and opacity
- Double-border edges: ::before at 7% white, ::after at 3% white (rough cut effect)
- Faint background fill: 2% white (or 4% red for the dominant word)
- No two fragments share the same size, rotation, or opacity

### Word Hierarchy
| Role | Size | Color | Effect |
|---|---|---|---|
| Dominant (key word) | 120-130px | #C83C32 | Red glow (text-shadow 100px at 18%), red border at 15% |
| Bright (supporting) | 80-96px | 85-92% white | Stronger border at 9-10% white |
| Dim (context) | 42-62px | 14-22% white | Faint border at 4-5% white |
| Crossed out | 36-40px | 18-22% white | Red strikethrough (2.5px, 40% red) |

## Analog Texture Elements

### Tape Strips
- 5 strips, 48-65px wide, 10px tall
- Background: 4% white
- Top border: 1px 6% white, bottom border: 1px 2% white
- Placed at various angles (6-18deg) across fragment edges

### Pin Dots
- 3 red circles, 5px diameter
- Color: 25% red with 6px red glow at 15%
- Placed near fragment corners suggesting push-pins

### Collage Debris
- 4 single letters scattered in background
- 65-120px, 2-2.5% white, heavily rotated (12-20deg)
- Adds depth without competing with headline

### Micro-Fragments
- 6 ghost words (contextual: "claim", "proof", "evidence", etc.)
- 8px Space Mono, 9% white, 4% white border, 4px letter-spacing
- Scattered at various rotations

## Connection Lines
- 4 dashed SVG lines linking related word fragments
- 1px, 3.5-4.5% white, stroke-dasharray: 3-5, 6-9

## Layout Flow
1. Top: Mono metadata
2. Upper 2/3: Scattered word fragments (the collage zone)
3. Center-bottom: Stat number (clean, large, the conclusion)
4. Below stat: Body text
5. Bottom: Author bar

## Standard Elements
- Corner L-brackets: 22px, 1px, 5% white
- SVG noise: 3% opacity
- Author bar: 1px border-top 6% white, name 13px 50% white, title 9px mono 20% white

## Key Principle
The collage zone is chaos. The stat zone is order. The visual arc is "scattered evidence resolving into undeniable proof."

---

*Claude Design Engine by Rahaman Bin Ujit*
