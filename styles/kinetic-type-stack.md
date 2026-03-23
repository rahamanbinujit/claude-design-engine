# Kinetic Type Stack

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Style ID:** kinetic-type-stack
**First tested:** v59
**Quality Score:** 4/5 — KEEP
**Best for:** Bold opinions, career advice, founder mindset, provocative statements -- any post where the words carry all the visual weight.

---

## Core Concept
Typography IS the design. No images, no illustrations. A headline is split word-by-word, stacked vertically, with each word progressively larger -- creating a cascading waterfall of scale that builds to a visual and emotional climax. The largest word is the red accent. Alternating horizontal offsets create diagonal energy. Mono annotations showing font sizes add a meta-design/editorial layer.

## Layout (1080x1350)

### Background
- Solid #0A0A0A, no textures, no gradients

### Tag (top)
- Space Mono, 13px, letter-spacing 3px, uppercase
- 30% white opacity
- Position: top 72px, left 80px
- Format: `// topic label`

### Type Stack (hero)
- Position: top ~180px, left 80px
- Each word on its own line, stacked vertically with 6px gap between rows
- **Progressive scaling:** start ~44px, end ~118px (5 words ideal, 4-6 acceptable)
- Suggested scale: 44 → 58 → 74 → 92 → 118 (roughly 1.25-1.3x multiplier per step)
- **The last/largest word is ALWAYS #C83C32 red** -- this is the climax
- All other words: #FFFFFF
- Font: Space Grotesk, 700 weight, uppercase, letter-spacing -0.02em, line-height 1.05
- **Horizontal offsets:** alternate left/right, varying 10-40px (e.g., 0, +30, -20, +40, -10)
- Avoid perfect alignment -- the offsets create kinetic energy

### Size Annotations
- Space Mono, 11px, 15% white opacity (red word's annotation at 25% red opacity)
- Positioned at baseline of each word, after the word text
- Show the font-size value: "44px", "58px", etc.
- Subtle -- these are a design detail, not a focal point

### Vertical Scale Line (optional)
- 1px line on right side, gradient from 3% white to 15% red
- Tick marks at each word's vertical position
- Reinforces the "scale system" concept

### Rule Line
- Position: below type stack with generous whitespace (~780px from top)
- 120px wide, 1px, #C83C32 at 40% opacity
- Left-aligned at 80px

### Body Text
- Position: below rule, ~820px from top
- Space Grotesk, 24px, 400 weight, 50% white opacity
- Line-height 1.55, left 80px, right margin ~120px
- 1-3 lines, supporting the headline's point

### Stat Block
- Position: ~1000px from top, left 80px
- Number: Space Grotesk, 88px, 700 weight, #C83C32
- Label: Space Mono, 13px, 25% white, 2px letter-spacing, uppercase
- 8px gap between number and label

### Author Bar (bottom)
- Position: bottom 64px, left/right 80px
- Border-top: 1px solid rgba(255,255,255,0.06), padding-top 20px
- Left: "RAHAMAN BIN UJIT" — Space Mono, 12px, 2px letter-spacing, 30% white
- Right: "SENIOR MARKETING EXECUTIVE" — Space Mono, 11px, 1px letter-spacing, 18% white

## Rules
1. The headline MUST be 4-6 words. Each word gets its own line.
2. The LAST word is always the red accent at the largest size.
3. Offsets must vary -- never align all words to the same left edge.
4. Keep body text minimal (1-3 lines). The type stack is the hero.
5. No images, no icons, no illustrations. Pure typography.
6. No drop shadows, no gradients, no glow effects.

## Content That Works
- "STOP BUILDING FOR SOMEONE ELSE." (career/founder)
- "YOUR STRATEGY IS NOT A STRATEGY." (business critique)
- "NOBODY CARES ABOUT YOUR PRODUCT." (marketing truth)
- "THE MARKET REWARDS SPEED." (startup advice)

---

*Claude Design Engine by Rahaman Bin Ujit*
