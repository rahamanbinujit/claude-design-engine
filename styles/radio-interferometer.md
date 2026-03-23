---
name: radio-interferometer
experiment: v154
quality-score: 4
status: KEEP
---

# Radio Interferometer Array -- Style Spec

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Core Concept
Radio interferometer array plan view where each dish antenna is a skill and all signal lines converge on a single focal point (the synthesized aperture). The central metaphor: a single dish hears noise, but an array of dishes correlated across baselines resolves a signal no individual antenna could ever detect. 66 dishes create 2,145 unique baselines, synthesizing an aperture that cannot be replicated by any other array configuration.

## Visual Elements

### UV-Plane Grid
- 5 concentric ellipses centered on focal point (540, 370)
- Radii: 70/55, 140/110, 220/170, 320/245, 440/330
- Opacity gradient: innermost 0.030, outermost 0.014
- Stroke: 0.4px white
- Cross-hairs: dashed lines through focal (0.018 white, dash 3,8)

### Focal Point (Correlator)
- Center dot: 4.5px radius, #C83C32 at 0.50 opacity
- Ring 1: 9px radius, 0.18 red, 0.8px stroke
- Ring 2: 18px radius, 0.07 red, 0.5px stroke
- Ring 3: 30px radius, 0.03 red, 0.4px stroke
- Radial gradient glow: 90x70px ellipse, 14% red center -> 0
- "SYNTHESIZED APERTURE" label below in 7px mono, 0.28 red, letter-spacing 3px

### Common Dishes (Outer Ring, White)
- 7 dishes at canvas edges (corners, far sides)
- Antenna ring: 15-18px radius, 0.10-0.13 white, 1.0-1.2px stroke
- Subreflector: 5-6px radius, 0.06-0.08 white, 0.5-0.6px stroke
- Feed: 2px radius, 0.15-0.20 white fill
- Labels: 7px Space Mono, 0.09-0.11 white, letter-spacing 2px
- Signal lines: dashed to focal, 0.05 white, 0.7px, dash 4,14
- Skills: SOCIAL, CONTENT, EMAIL, TEMPLATES, SCHEDULING, DESIGN, CANVA

### Intermediate Dishes (Mid-Ring, Brighter White)
- 5 dishes at mid-distance from focal
- Antenna ring: 22px radius, 0.18 white, 1.5px stroke
- Subreflector: 8px radius, 0.11 white, 0.7px stroke
- Feed: 2.8px radius, 0.28 white fill
- Labels: 8px Space Mono, 0.16 white, letter-spacing 2px
- Signal lines: dashed to focal, 0.07 white, 0.9px, dash 3,10
- Skills: ANALYTICS, COPYWRITING, SEO, VIDEO, PHOTOGRAPHY

### Rare Dishes (Inner Cluster, Red)
- 5 dishes near focal point (asymmetric pentagon layout)
- Antenna ring: 24-30px radius, 0.28-0.38 #C83C32, 1.8-2.5px stroke
- Subreflector: 9-12px radius, 0.16-0.24 red, 0.8-1.0px stroke
- Feed: 3.5-5px radius, 0.45-0.58 red fill
- Glow filter: 4px Gaussian blur on fill, 0.08-0.10 red
- Labels: 8-10px Space Mono, 0.35-0.50 red, letter-spacing 2-3px
- Signal lines: dashed to focal, 0.12-0.18 red, 1.3-2.0px, dash 2,6-8
- Signal glow: parallel line with 2px blur filter, 3-5px width, 0.05-0.07 red
- AI SYSTEMS = largest (30px), brightest (0.38 stroke), thickest signal (2.0px), offset upper-right of focal
- Skills: GROWTH, AUTOMATION, STRATEGY, BRAND, AI SYSTEMS

### Rare-Zone Haze
- Radial gradient centered on focal: 200x160px ellipse
- 0.025 red center fading to 0

### Baselines (Inter-Dish Lines)
- Common-common pairs: 0.016-0.022 white, 0.3px, dash 2,16
- Intermediate-intermediate: 0.018 white, 0.3px, dash 2,14
- Long cross-array: 0.012 white, 0.3px, dash 1,20
- Rare-rare inner network: 0.05-0.06 red, 0.5-0.6px, dash 2,10

### UV Coverage Arcs
- 4 dashed bezier curves showing Earth rotation synthesis
- 0.014-0.018 white, 0.3-0.4px, dash 2,6-8

### Baseline Annotations
- Mono 6px, 0.07 white (common) / 0.12 red (rare)
- Format: "B=320m", "B=1,120m"

## Text Zone (Below Divider at 830px)

### Passive Line
- "A single dish hears noise."
- 44px Space Grotesk, weight 300, 14% white
- Position: left-aligned at 64px margin

### Active Line
- "An array resolves the signal."
- 62px Space Grotesk, weight 700, 93% white
- "signal." in italic #C83C32
- Letter-spacing: -1.5px

### Body
- 15px weight 400, 22% white, line-height 1.65
- Key insight in italic at 35% white
- Max-width: 620px

### Punchline
- "66 dishes. 2,145 baselines. One synthesized aperture."
- 14px italic, 30% white

## Data Panel (Bottom-Right)
- 8px Space Mono, letter-spacing 2px
- Rows: ARRAY SYS-066 / DISHES 66 / BASELINES 2,145 / CONFIG Y-ARRAY / APERTURE SYNTHESIZED / RESOLUTION UNMATCHED (red)

## Ambient Elements
- Ghost "ARRAY" at 340px, 0.006 white, rotated -8deg
- "66" ghost at 160px, 0.04 red, centered on focal
- Corner brackets: 24px, 0.08 white, 28px inset
- Top-left tag: "/// INTERFEROMETRIC SURVEY /// EPOCH 2026.0"
- Top-right tag: "ARR. SYS-066" in red
- UV label bottom-left: "UV COVERAGE: 88.7% FILLED"
- Baseline label bottom-right: "MAX BASELINE: 1,420m / RESOLUTION: 0.3 arcsec" in red

## The Metaphor (Why It Works)
A single radio dish receives all frequencies at once -- pure noise. But place 66 dishes at specific positions, correlate their signals across 2,145 unique baselines, and the noise resolves into an image no single dish could ever produce. The array's power comes not from the size of any individual antenna, but from the DISTANCES BETWEEN them. Every pair creates a baseline. Every baseline samples one spatial frequency. Together, they fill the UV plane -- the complete Fourier description of the source. Remove one dish and you lose n-1 baselines. The image degrades. Add one dish and you gain n new baselines. The resolution sharpens. The synthesized aperture is the size of the entire array, not any single component.

---

*Claude Design Engine by Rahaman Bin Ujit*
