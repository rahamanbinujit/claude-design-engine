# Brute-Stacked Type

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Tested:** V33 | **Quality Score:** 4/5 | **Status:** KEEP

## Concept
Heavy stacked typography filling the entire canvas. Each line a different weight/size. Words ARE the layout. Deadpan, all-caps composition with spreadsheet-style structure. No imagery -- pure typographic confidence.

## When to Use
- Bold positioning/identity statements
- Provocative claims ("I don't work in X, I build the systems that replace it")
- Manifesto-style posts
- Any post where the message itself is the visual

## Specs
- **Canvas:** 1080x1350, #0A0A0A bg
- **Font:** Space Grotesk only (mono for tags/labels)
- **All caps, tight line-height (0.92-1.0)**

## Typography Rules
- **6-8 stacked lines** alternating between thin (300) and bold (700) weight
- **Size range:** 62px (smallest) to 148px (largest)
- **One red accent line** (#C83C32) at the largest size -- this is the focal point
- **Bold white lines** at 92-118px for secondary emphasis
- **Thin lines** at 0.45-0.55 opacity -- they recede, creating rhythm
- **Letter-spacing:** tighter on bold (-0.01 to 0.02em), wider on thin (0.04-0.06em)

## Structure
```
[mono tag — "// System Output" — 16px, 0.4 opacity]
[thin line — setup/context — 82px, 300 weight, 0.55 opacity]
[BOLD RED LINE — key phrase — 148px, 700 weight, #C83C32]
[bold white — continuation — 108px, 700 weight]
[thin line — bridge — 78px, 300 weight, 0.45 opacity]
[BOLD WHITE — payoff — 118px, 700 weight]
[thin line — closer — 62px, 300 weight, 0.35 opacity]
---red accent rule (3px)---
[stats row — spreadsheet grid with cell dividers]
---border---
[identity bar — name + title + version]
```

## Key Techniques
- **Weight contrast is the ONLY visual device** -- no imagery, no shapes, no effects
- **Red text-shadow glow** (80px, 0.25 opacity) on the accent line for subtle depth
- **Left vertical accent line** (2px, red gradient fading to transparent)
- **Stats row** with vertical cell dividers (1px, 0.08 opacity) for spreadsheet feel
- **Red accent rule** (3px horizontal line) separates type from stats

## File Size
~445KB PNG (very efficient -- text-only design compresses well)

## Avoid
- Adding imagery or decorative elements -- the type IS the decoration
- Making all lines the same weight -- contrast is everything
- Using more than one red accent line -- restraint creates focus
- Going below 62px on any line (never-again rule: min 60px headline)

---

*Claude Design Engine by Rahaman Bin Ujit*
