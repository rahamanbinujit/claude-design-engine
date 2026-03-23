# Redaction Dossier

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Concept
The poster looks like a declassified intelligence document. Ruled paper background, redacted text bars, classification stamps, and folder tabs create the feel of a secret dossier being revealed. Intelligence briefing meets data poster.

## When to Use
- "Secret weapon" reveals, behind-the-scenes system posts
- Contrarian takes ("they said X, but here's the truth")
- Any post where the metaphor is "classified information now being revealed"
- System architecture reveals, hidden process breakdowns

## Background
- #0A0A0A base
- SVG ruled lines: 0.5px, 2.5% white, 28px vertical spacing, spanning x:50 to x:1030
- Vertical margin line: 1px, 6% red opacity, at x:42px from top:130px (like old-school ruled paper)
- CLASSIFIED watermark: 140px bold, 3% white, rotated -35deg, centered on poster

## Document Elements
- **Folder tab** (top-right): 3% white bg, 7% white border, 8px/16px padding, "FILE: 066" in 9px mono 25% white
- **Case header** (top-left): case number 9px mono 14% white, date stamp 8px mono 10% white, clearance level 8px mono 30% red
- **TOP SECRET stamp**: 2px red border at 18% opacity, 4px border-radius, rotated -5deg, text 14px mono bold 30% red, 5px letter-spacing
- **Staple marks**: two 3x18px rectangles, 5% white, on left edge at top:60px and top:180px
- **Page fold**: bottom-right corner, 50x50px diagonal gradient to 1.5% white

## Headline
- 72px bold, letter-spacing: 4px (typewriter/report feel), line-height: 0.93
- Contrast pattern: key phrases bright 95%, secondary dim 16%, accent in #C83C32
- The wide letter-spacing is critical -- it distinguishes this style from others

## Body Text
- 22px weight-300, 28% white, max-width 540px
- Inline redacted bars: 10-14px tall rectangles (white 8% or red 12%) replacing "censored" words
- Creates the feel of information being withheld

## Stat Number
- 200px bold #C83C32, rotated -3deg
- Rubber stamp border: 2px red at 12% opacity, 6px border-radius, surrounding the number
- The rotation + border makes it look officially stamped/approved

## Peripheral Elements
- **Evidence blocks**: redacted paragraph placeholders (3-4 horizontal bars, 10px tall, 3% white, varying widths)
- **Handwritten annotation**: 8px mono, 18% red, slightly rotated (-3deg), e.g. "verify this" with arrow
- **APPROVED stamp**: 80px circular border (2px red 10%), rotated 12deg, "APPROVED" 8px mono bold 20% red
- **Section labels**: "Section 4.2 -- Redacted" in 7px mono 8% white above evidence blocks

## Standard Elements (shared across styles)
- Meta top: 9px mono 14% white, classification/case/status metadata
- Side text: 7px mono 8% white, rotated 90deg
- Data strip: 7.5px mono 10% white, bottom of poster
- Corner L-brackets: 22px, 1px, 4.5% white
- Author bar: 1px border-top 6% white, name 13px 50% white, title 8px mono 18% white
- SVG noise: 2.5% opacity

## Color Usage
- Red (#C83C32) for: stat number, classification stamps, clearance text, accent redacted bars, annotation text
- White varying opacity for: ruled lines, evidence blocks, folder tab, staples, headline
- The red elements should feel like rubber stamps and security markings

## Key Differentiators
- Wide letter-spacing (4px) on headline gives typewriter feel
- Inline redacted bars in body text (unique to this style)
- Multiple stamp/seal elements (TOP SECRET, APPROVED, rubber stamp border on stat)
- Ruled paper background + margin line
- The concept is "information being revealed" not just "information being displayed"

---

*Claude Design Engine by Rahaman Bin Ujit*
