---
name: tape-measure
origin: v162
quality-score: 4
status: KEEP
best-for: measurement-breaking posts, exceeding expectations, unmeasurable value, potential vs metrics
---

# Tape Measure

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


A vertical tape measure instrument on the right side that literally runs out of measurement at the stat number. The poster IS a measurement device that breaks. Left-right split: narrative text (left) vs instrument (right).

## Layout

- **Canvas:** 1080x1350, #0A0A0A
- **Left 60%:** Headline block + stat number + metadata
- **Right side:** Vertical tape measure track with tick marks
- **Connector:** Dashed horizontal line linking stat to tape marker

## Tape Measure (Right)

- Track: 52px wide, rgba(255,255,255,0.04) bg, 0.08 border, ~1100px tall
- Major ticks: every 10 units, 36px wide, 0.35 white, 2px height
- Minor ticks: between majors, 18px wide, 0.16 white
- Micro ticks: smallest, 10px wide, 0.09 white
- Tick labels: Space Mono 9px, 0.25 white, right of track
- Red marker at stat position: solid #C83C32, 68x28px, left-pointing arrow, dual glow
- Ticks FADE after marker (0.3 to 0.05 opacity) -- measurement ends
- Ghost next-major mark barely visible (0.06 opacity) -- never reached
- "OFF SCALE" vertical text below marker: 9px mono, 0.65 red

## Typography

- Line 1 (their claim, quiet): 52px, weight-300, 0.35 white
- Line 2 (their certainty, loud): 72px, weight-700, 0.92 white
- 40px gap (silence = emphasis)
- Line 3 (the contradiction): 38px, weight-300, italic, #C83C32
- Stat number: 120px, weight-700, rgba(200,60,50,0.85), text-shadow glow
- Body: 17px, weight-400, 0.40 white
- Mono metadata: 9px, 0.12 white, red on key values

## Connector

- Dashed line (1.5px, 0.25 red) from stat to tape track
- 8px red dots at both endpoints with glow
- Links the number (narrative) to the position (instrument)

## Colors

- Background: #0A0A0A
- Primary text: white at varying opacities (0.35 / 0.92)
- Accent: #C83C32 (punchline, marker, stat, off-scale label)
- Metadata: 0.08-0.12 white

## Typography-Mastery Decisions

1. Light weight = false confidence / quiet limitation
2. Bold weight = loud, incorrect certainty
3. Silence gap before punchline = isolation emphasis
4. Red italic punchline = emotional voice, same color as marker (visual thread)
5. Right-aligned tape = tension placement, disruption of reading flow
6. Fading ticks = narrative pacing through visual decay

---

*Claude Design Engine by Rahaman Bin Ujit*
