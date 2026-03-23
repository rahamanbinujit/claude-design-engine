# Specimen Sheet

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Style:** Type foundry specimen sheet meets data poster
**Mood:** Clinical, precise, typographic craft, analytical
**Best for:** Typography-related posts, "building systems" messaging, craft/precision content, posts about details mattering, examining/dissecting something

## Layout

- 1080x1350, #0A0A0A bg
- Three-zone vertical layout: specimen scale (top) / headline + body (middle) / stat with metrics + specimen details (bottom)

## Specimen Scale (Top Zone)

- One key word (e.g., "System") rendered at 3 stacked sizes to demonstrate the typeface
- 120px bold 95% white (largest, fully bright)
- 80px bold 35% white (medium, faded)
- 50px bold 15% white (smallest, ghosted)
- Size annotations on the right: 9px Space Mono 18% white ("120px", "80px", "50px")
- Thin connecting lines from word edge to annotation: 1px 7% white, ~100px wide
- Label above: "Type Specimen / Space Grotesk Bold" at 8px mono 12% white

## Headline (Middle Zone)

- 64px bold, -3px tracking, 0.95 line-height
- Dim words 16% white, key phrase #C83C32, bright words 92% white
- Separated from specimen by 1px 5% white divider
- Body text: 21px weight-300 26% white, 460px max

## Stat Number with Character Metrics Overlay

- Stat: 200px bold #C83C32
- Five horizontal metric lines running through the number:
  - Ascender: 1px solid 8% white (top -8px)
  - Cap Height: 1px solid 25% red (top 10px) -- THE signature line
  - X-Height: 1px DASHED 12% white (top 75px)
  - Baseline: 1px solid 14% white (top 148px)
  - Descender: 1px solid 7% white (top 175px)
- Lines extend ~380px wide (past the number)
- Labels via ::before pseudo-elements on right end of each line:
  - 7px mono uppercase
  - Cap Height label at 35% red (brightest), Baseline at 20% white, X-Height at 18% white, Ascender at 12% white, Descender at 10% white

## Character Set Strip

- "AaBbCcDdEeFfGgHh 0123456789" at 14px Space Grotesk 8% white
- Select glyphs highlighted in 20% red
- Label: 7px mono 8% white "Character Set / Space Grotesk Regular 400"
- 1px 3.5% white border-top separator

## Weight Strip

- Five "Aa" samples at weights 300/400/500/600/700
- Each at 18px 12% white with 6.5px mono label below
- Active weight (Bold 700) highlighted: 35% red text, 18% red label

## Standard Elements

- Meta top: "Weight: 700 / Tracking: -3.5 / Leading: 0.93 / Foundry: Sys-066"
- Side text rotated 90deg: "Specimen / Foundry: Sys-066 / Type: Display / Weight: Variable"
- Data strip: font metrics in mono
- Corner L-brackets (22px, 1px, 4.5% white)
- Author bar with 1px 6% white border-top
- SVG noise 2.5%

## Key Principles

1. The specimen scale IS the visual centerpiece -- it must read as a foundry catalog, not just big text
2. The metric overlay on the stat number adds authentic typographic anatomy
3. The dashed x-height line breaks visual monotony among the metric lines
4. Cap height line in red ties the metrics to the brand color
5. Character set and weight strip are supporting evidence of the specimen concept
6. Everything is about precision and craft -- the clinical analysis of letterforms

---

*Claude Design Engine by Rahaman Bin Ujit*
