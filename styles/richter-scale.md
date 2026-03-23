---
name: richter-scale
source: v164
status: KEEP
quality-score: 4
---

# Richter Scale Readout

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Concept
A vertical Richter magnitude scale (0-10) with horizontal bars extending rightward at each magnitude. Lower magnitudes have tiny bars (3-18px). At magnitude 6.6, the bar extends the FULL WIDTH of the canvas -- an immediate, visceral demonstration of logarithmic/exponential growth. The visual gap between "normal" (mag 1-5) and "this" (mag 6.6) is the entire argument.

## When to Use
- Posts about exponential growth, compounding, non-linear thinking
- "My skills/output are in a different category" messaging
- Data-heavy stat showcases where the NUMBER is the story
- Contrasting ordinary vs extraordinary

## Canvas
- 1080x1350px, #0A0A0A background

## Layout Structure
1. **Vertical scale** (left edge, y=100 to y=780): magnitude 0 at bottom, 10 at top. Scale line with gradient (white at low mags, red at high mags). Zone color strips: green (0-3), yellow (3-5), red (5-10).
2. **Magnitude bars** (extending rightward from scale): width grows exponentially. Mag 1 = 3px, mag 6.6 = 910px (full width). Bars above mag 6.6 are dashed (theoretical, not yet reached).
3. **"66" / stat number** (140px, bold red) at the right end of the full-width bar. Triple glow.
4. **Skill labels** at each magnitude tier, opacity/color matching the zone.
5. **Energy multiplier labels** on right edge (1x to 3,981,072x).
6. **Headline zone** below the bars.
7. **Data panel** at bottom.

## Typography
- **Tag header:** "/// Richter Scale Readout ///" mono 8px, 16% white + "Magnitude X.X" in red
- **Dim header:** wide letter-spacing (4.5px), 300 weight, 12% white, uppercase
- **Headline dim:** 48px, weight 300, 15% white = the linear observation
- **Headline bold:** 52px, weight 700, 93% white = the exponential conclusion
- **Key word:** Playfair Display italic, red (#C83C32) = the emotional term
- **Body:** 17px, weight 300 at 22% white + italic at 44% white
- **Data panel:** mono 6.5px, 9% white labels, 20-45% values
- **Skill labels:** mono 6-8px, opacity scales with magnitude tier

## Colors
- Background: #0A0A0A
- Low magnitudes: white 6-20%
- High magnitudes: #C83C32 (red) 18-50%
- The 6.6 bar: red gradient 45% to 95%
- Zone strips: green/yellow/red at 6-8%
- Energy multiplier at 6.6: red 45% bold

## Key Visual Decisions
- Bars are the STAR. The visual difference between a 3px bar and a 910px bar IS the argument. No words needed.
- Scale is logarithmic: magnitudes 0-5 are cramped at the bottom, 5-10 spread wide at the top. This physically shows how logarithmic compression hides exponential differences.
- Reference bars at mag 7-8 are dashed = theoretical territory, not yet reached but visible.
- Gap annotation between mag 5 and 6.6 bars shows "398x GAP" -- the chasm between normal and this.
- "LINEAR EQ: INCOMPUTABLE" in data panel = the punchline.

## Narrative Arc
1. Eye enters at header (top) = the instrument identification
2. Eye follows the scale down, seeing tiny bars at each magnitude
3. Eye hits the 6.6 bar -- FULL WIDTH RED -- visual shock
4. Eye follows the bar to "66" at the right edge = the measurement
5. Eye drops to headline = "Linear minds underestimate exponential people."
6. Body delivers the physics: "four million times a magnitude one event"
7. Data panel closes with "LINEAR EQ: INCOMPUTABLE" = mic drop

## File Reference
- Example: Richter Scale poster

---

*Claude Design Engine by Rahaman Bin Ujit*
