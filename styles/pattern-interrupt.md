# Pattern Interrupt Carousel

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Type:** Multi-slide carousel (3+ slides)
**Quality Score:** 4/5
**Status:** KEEP

## Concept

Dark-to-light-to-dark color inversion across carousel slides. Slide 2 inverts to off-white (#F5F5F5) background with dark text, breaking the visual pattern established by slide 1's dark (#0A0A0A) bg. Slide 3 returns to dark. The sudden brightness shift re-engages the brain and prevents slide 2 drop-off.

## When to Use

- Problem / Proof / Solution carousels
- Hook / Data / CTA sequences
- Any 3-slide carousel where slide 2 carries the strongest data or proof point
- Posts with impressive stats that deserve a "reveal" moment

## Structure

| Slide | Background | Text Color | Purpose | Tone |
|-------|-----------|------------|---------|------|
| 1 | #0A0A0A (dark) | #FFFFFF | Hook / Problem | Atmospheric, provocative |
| 2 | #F5F5F5 (light) | #0A0A0A | Data / Proof / Reveal | Clean, bright, authoritative |
| 3 | #0A0A0A (dark) | #FFFFFF | Resolution / CTA | Bold, closing |

## Design Specs

### Slide 1 (Dark Hook)
- 82px mixed-weight headline (300 light + 700 bold)
- Red accent word with glow (text-shadow: 0 0 40px rgba(200,60,50,0.6))
- Subtle subtext at 26px, 55% white opacity
- Subtle red radial glow behind headline (blur 60px)
- Vertical red gradient line bleeding from right edge

### Slide 2 (Light Interrupt)
- Red accent bar at top (6px, full width) -- signals the shift
- Large red stat number (120px, #C83C32) as hero
- Faded bg number (600px, 3% opacity) for depth
- Stats row (56px numbers, mono labels)
- Pull quote with red left border (3px)
- Vertical red gradient line from left edge (mirrored from slide 1)

### Slide 3 (Dark Resolution)
- 78px mixed-weight CTA headline
- Red accent word with glow
- Capabilities bullet list (red dots, 22px text)
- CTA box: red border (1px, 40% opacity), dark red bg tint (4% opacity), 12px radius
- Full identity bar: name + title + progress pips
- Stronger red glow (blur 80px, 20% opacity)

## Consistent Elements Across All Slides
- Slide numbering: "01 / 03" in Space Mono, 14px, 30% opacity
- Progress pips: 3px height, active pip is red + wider (40px vs 24px)
- Swipe hint on slides 1-2 (arrow + "SWIPE" text)
- Vertical red gradient accent line (alternating sides for visual flow)
- Brand fonts: Space Grotesk (headlines/body), Space Mono (labels/meta)
- Brand red: #C83C32

## Key Principle
The interrupt works because of CONTRAST. The light slide must feel genuinely different -- not just slightly lighter, but fully inverted. Use it for the slide with the strongest proof/data. The brain pays attention when patterns break.

## Never
- Use the light bg on slide 1 (defeats the purpose -- interrupt must come AFTER establishing the pattern)
- Use more than one light slide in a row (dilutes the interrupt)
- Use gradient transition between dark and light (the hard cut IS the point)

---

*Claude Design Engine by Rahaman Bin Ujit*
