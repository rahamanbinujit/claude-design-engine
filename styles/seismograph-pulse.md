# Seismograph Pulse

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Tested:** v75a (score 3), v75b (score 4, KEEP)
**Best for:** Data-heavy posts, system/scale themes, "measure everything" messaging, any content where a number tells the story

## Concept
A horizontal SVG seismograph/heartbeat pulse line runs full-width across the poster. Mostly flat baseline with micro-tremors, spiking dramatically at the center where the stat number is positioned. The stat overlaps the spike peak. Grid paper background creates a scientific instrument aesthetic. Scientific instrument meets data poster.

## Layout (1080x1350)
- **Background:** #0A0A0A with grid paper overlay
- **Top zone (0-560px):** Mono annotation + headline + body text
- **Middle zone (580-980px):** SVG seismograph pulse with stat number overlapping peak
- **Bottom zone (980-1350px):** Secondary stats + author bar

## Grid Paper
- Minor grid: 40px spacing, 1px lines at 2% white
- Major grid: 200px spacing (every 5th line), 1px lines at 4% white
- Creates subtle graph paper texture across entire poster

## Typography
- **Top annotation:** "// SEISMIC DATA RECORDER -- CHANNEL 01" or similar, 9px Space Mono, 15% white, 2px letter-spacing, uppercase
- **Headline:** 78px Space Grotesk bold, -3.5px tracking, 0.94 line-height. Dim non-key words at 18% white, accent word in #C83C32
- **Body:** 23px Space Grotesk, 28% white, 520px max-width, 1.5 line-height
- **Stat number:** 200px Space Grotesk bold, #C83C32, -8px letter-spacing, text-shadow glow (80px at 30% red + 160px at 10% red)
- **Stat label:** 11px Space Mono, 16% white, 7px letter-spacing, uppercase

## SVG Seismograph Pulse
- **Viewbox:** 0 0 1080 400, preserveAspectRatio="none"
- **Baseline:** y=260 (within the 400px height), dashed reference line at 3% white
- **Micro-tremors:** Baseline points vary 2-4px randomly (e.g., 260, 261, 259, 262, 258)
- **Main spike:** Center of poster (x ~455-660), peaks at y=4 (amplitude ~256px). Sharp rise, sharp fall, with a secondary bounce/undershoot below baseline (y=340-350) before aftershock recovery
- **Main line:** 2px stroke, #C83C32 at 55% opacity, round linecap/linejoin
- **Glow line:** Same path, 8px stroke at 6% opacity (renders behind main line)
- **Aftershock line:** Secondary channel, dampened version of spike (peaks at ~y=100 vs y=4), 1px stroke at 15% opacity
- **Gradient fill:** Polygon under spike area, linear gradient (top: 100% red, bottom: 0% red) at 8% opacity

## Axis Labels
- "AMPLITUDE" -- 8px mono, 10% white, rotated -90deg, left edge
- "BASELINE" -- 7px mono, 8% white, near baseline on left
- "TIME →" -- 8px mono, 10% white, bottom-right

## Stat Placement
- **Critical:** The stat number overlaps the peak of the spike. Positioned at the spike's highest point, centered horizontally
- The stat IS the data point -- this is the core visual innovation
- Label sits just below the stat number

## Secondary Stats
- 44px Space Grotesk weight-600, 42% white
- 9px Space Mono labels, 10% white
- Left-aligned with 100px gap between items

## Author Bar
- 1px border-top at 4% white
- Name: 13px weight-500, 28% white, 3px letter-spacing, uppercase
- Title: 9px Space Mono, 8% white
- Right side: Scientific metadata ("RICHTER: 6.6 / DEPTH: 0KM / EPICENTER: SYSTEM CORE"), 7px mono, 7% white

## Noise Texture
- SVG fractalNoise, 2.5% opacity, 128px tile size

## Customization Rules
- **Spike amplitude scales with stat magnitude:** bigger number = taller spike. For small numbers (1-10), spike to y=100. For medium (10-50), spike to y=40. For large (50+), spike to y=4
- **Aftershock intensity also scales:** larger stats get more pronounced aftershock
- **Grid paper is essential** -- without it, the seismograph loses its instrument context
- **Never remove micro-tremors** -- they make the line feel alive vs static
- **The gradient fill under the spike is subtle but important** -- it creates visual weight at the focal point

## What Works
- Stat overlapping the spike peak = stat IS the data point
- Grid paper + axis labels sell the scientific aesthetic
- Micro-tremors on baseline prevent static feel
- Glow line behind main line adds subtle depth
- Aftershock secondary line adds realism
- Gradient fill under spike creates visual weight

## What to Avoid
- Don't make the spike too small -- it needs to be dramatic (at least 200px amplitude)
- Don't put body text below the seismograph -- it competes with the pulse line
- Don't use too many axis labels -- 3 max (amplitude, baseline, time)
- Don't make the grid too visible -- it's texture, not content

---

*Claude Design Engine by Rahaman Bin Ujit*
