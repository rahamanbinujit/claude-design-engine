# Torn Paper Edge

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5
**Best for:** Hidden potential, trapped ideas, uncovering truths, "what's underneath," revealing insights, before/after transformations

## Concept
Two-layer composition where the foreground layer has a dramatic torn/ripped right edge, revealing a second layer beneath. Analog destruction on digital canvas. The tear creates narrative depth -- content literally hidden "beneath the surface."

## Layout Specs
- **Canvas:** 1080x1350, #0A0A0A background
- **Underlayer:** Right 35% of canvas, #141414 background with subtle vertical line texture (repeating-linear-gradient, 1.5% white opacity, 40px spacing)
- **Main layer:** Full canvas with clip-path torn right edge, oscillating between 69.5%-74.5% width across ~60 polygon points
- **Content zone:** Left 65% of canvas (within the main torn layer)

## Torn Edge
- CSS clip-path polygon with ~60 jagged points
- X values oscillate between 69.5% and 74.5% (5% amplitude for dramatic rip)
- Y values increment by ~1-1.5% each point
- Variation should feel irregular, not rhythmic

## Paper Fibers
- 14-16 small lines along the tear edge
- Size: 13-22px long, 1.5px thick
- Color: alternating white (7% opacity) and red (8% opacity)
- Rotation: varied angles (-28deg to +30deg)
- Position: scattered along the tear line at ~80px vertical intervals

## Tear Glow
- 8% wide gradient strip on the underlayer side of the tear
- Linear gradient: 2% white opacity to transparent (left to right)
- Creates subtle light bleed effect

## Peek-Through Content (Underlayer)
- **Stat echo:** Same stat as main layer but larger (110px), red, 35% opacity -- ghosted version
- **Hidden quote:** Small italic text in mono (11px, 10% white opacity) -- secret message revealed by the tear
- **Layer label:** "Layer 02 // Beneath" in 9px mono, 6% white opacity

## Main Layer Content
1. **Layer label:** "Layer 01 // Surface" -- 9px mono, 8% white, top-left
2. **Tag:** Mono 11px, 25% white, with red dot (8px, 70% opacity)
3. **Headline:** 74px Space Grotesk bold, -2.5px tracking, white. Key word in #C83C32 red
4. **Body text:** 24px Space Grotesk, 42% white opacity, 1.7 line-height
5. **Red rule:** 100px wide, 3px tall, 50% red opacity separator
6. **Stat block:** Number at 100px bold red, label in 12px mono, 25% white, 3px letter-spacing
7. **Author bar:** Bottom, mono, 6% white border-top, name left + title right

## Color Palette
- Main bg: #0A0A0A
- Underlayer: #141414
- Text: #FFFFFF (headlines), rgba(255,255,255,0.42) (body)
- Accent: #C83C32
- Fibers: rgba(255,255,255,0.07) + rgba(200,60,50,0.08)

## Never
- Don't make the tear edge smooth or regular -- it must feel organic/jagged
- Don't make underlayer too bright -- max #161616
- Don't put too much content on the underlayer -- it should feel like a peek, not a second poster
- Don't use drop shadows on the tear edge

---

*Claude Design Engine by Rahaman Bin Ujit*
