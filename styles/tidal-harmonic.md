---
name: tidal-harmonic
source: v160
quality-score: 4
status: KEEP
---

# Tidal Harmonic Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Concept
A tide gauge readout poster where multiple sinusoidal harmonic constituents (M2, S2, K1, O1, N2, P1) are shown as individual faint waves, with a bold superposed resultant curve showing the observed tide. One dramatic KING TIDE peak occurs where all harmonics constructively interfere. The stat sits at the peak -- the moment of total alignment.

## Metaphor
Skills are harmonic frequencies. Individually they create small oscillations. When they align (superpose), they produce a king tide -- an event no standard forecast model predicted. Watching waves is passive. Predicting the king tide requires understanding every constituent independently.

## Layout
- 1080x1350, #0A0A0A background
- Top 60%: Chart zone (tidal curves, grid, labels)
- Red gradient divider at ~810px
- Bottom 40%: Text zone (headline, body, punchline, data panel)

## Chart Elements
- **6 individual constituent curves** in white, hierarchical opacity (M2 brightest at 0.12/1.4px, P1 faintest at 0.04/0.6px)
- **Superposed resultant** at 0.30 white, 2.5px -- the dominant visual line
- **King tide peak** section in red (0.55, 2.8px) with Gaussian blur glow
- Peak dot (3.5px red 0.65) + concentric rings (8/16px)
- Elliptical ambient glow at peak (80x35 at 0.06, 160x60 at 0.025 red)
- Vertical dashed king tide marker line (0.10 red)
- Mean sea level dashed line at midpoint with MSL label
- Moon phase indicators along top (FULL/QUARTER/NEW MOON)
- Horizontal grid lines (0.025 white), vertical time divisions (dashed, 0.018)
- Constituent labels on left edge (M2-P1) with hierarchical opacity and descriptors
- Time axis along bottom (T+0h through T+30h), king tide moment in red
- Amplitude scale on right (+6.6m in red down to -4.0m)
- SPRING and NEAP labels at respective peaks/troughs

## Typography
- **Tag:** "/// Tidal Harmonic Analysis /// Epoch 2026.0" -- mono, 8.5px, white 0.16, epoch in red 0.50
- **ID:** "Harm. SYS-066" -- mono, 8.5px, red 0.50
- **Dim headline:** 44px, weight 300, white 0.14 -- "Everyone watches the waves."
- **Bold headline:** 62px, weight 700, white 0.93 -- "I predicted the" + "king tide." in italic red
- **Body:** 18px, line 1 weight 300 at 0.28, line 2 italic at 0.52
- **Punchline:** 16px, italic, white 0.45
- **Data panel:** 7px mono, labels 0.12, values 0.28, key values in red 0.45

## Key Elements
- "66" ghost at 180px/0.12 red -- positioned AT the king tide peak
- Ghost "TIDE" at 380px/0.006 white rotated -8deg
- KING TIDE label above peak in 7.5px mono red 0.55 bold
- Corner brackets (18px, 0.08 white)
- SVG noise 3%

## Why It Works
The six visible constituent waves create a scientific visualization that rewards close reading -- the viewer can trace each harmonic individually and see how they combine. The king tide peak is the unmistakable focal point, and the "66" ghost directly at the peak makes the stat feel inevitable rather than decorative. The metaphor is clean: most days, forces cancel out. Rarely, everything aligns. Prediction requires understanding every force independently.

---

*Claude Design Engine by Rahaman Bin Ujit*
