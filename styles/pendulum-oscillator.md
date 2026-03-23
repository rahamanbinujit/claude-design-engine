---
name: pendulum-oscillator
version: v136
quality-score: 4
---

# Pendulum Oscillator

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Concept:** The poster IS a harmonic oscillator. A pendulum with ghosted afterimages showing the full swing arc. Ghost bobs crowd at the extremes (slow, stalled, stuck) and thin out near the center equilibrium (fast, max velocity). The active pendulum sits at the equilibrium point where all kinetic energy converges. The metaphor: everyone oscillates between extremes without finding the natural frequency.

**Best for:** Focus/balance posts, "I found my rhythm" narratives, anti-oscillation themes, system coherence, natural frequency/resonance metaphors.

## Layout

- **1080x1350** (4:5 portrait)
- **Background:** #0A0A0A solid black
- **Pivot:** Top-center (540, 120) with 4px mounting circle + bracket lines
- **Pendulum arc:** Faint dashed arc from -66deg to +66deg, 580px radius
- **Ghost pendulums:** 18 total (9 per side). Dense 4deg spacing at extremes, sparse 7-10deg spacing near center. Strokeless filled circles with Gaussian blur filter (4px) for ethereal afterimage look. Opacity 0.025 at extremes to 0.055 near center. Size 12px at extremes to 8px near center.
- **Active pendulum:** At 0deg (equilibrium). Arm 1.5px red 22% with glow. Outer ring 22px red stroke 2px + glow. Inner fill 8px red 60%.
- **Stat:** Centered at equilibrium point. 220px bold #C83C32, -8px letter-spacing. "/// Resonance ///" label above (9px mono, 55% red). "AI Skills in Phase" below (9px mono, 35% white). Red glow 360px radial 14% + 180px inner 22%.
- **Headline dim:** Top-left (72px inset). "Everyone / swings." at 54px weight-300 18% white. Positioned near the LEFT extreme = where the pendulum stalls.
- **Headline bold:** Below dim headline. "I found the / frequency." at 70px weight-700 95% white, "frequency." in #C83C32 italic. Positioned at center reading flow = the equilibrium.
- **Formula:** Top-right. "T = 2pi sqrt(L/g)" at 11px mono 10% white with red-highlighted mathematical symbols.
- **Energy labels:** At left extreme: "PE = MAX / KE = 0" rotated to follow arm angle. At equilibrium: "PE = 0 / KE = MAX".
- **Velocity arrows:** Horizontal bidirectional arrows at equilibrium bob, with "V = MAX" label.
- **Angle markers:** -66deg and +66deg arc segments with degree labels.

## Skill Labels

- **Extreme clusters** (dense, dim, common): 7px mono, 9-11% white. Left: SOCIAL MEDIA, TEMPLATES, EMAIL, CANVA, SCHEDULING. Right: BASIC DESIGN, TRENDS, REPOSTING, HASHTAGS.
- **Mid-arc** (transitional): 7.5px mono, 14-16% white. ANALYTICS, COPYWRITING, SEO, VIDEO EDITING, PHOTOGRAPHY.
- **Equilibrium** (red-tinted, max energy): 7.5-8px mono, 22-30% red. AI SYSTEMS, AUTOMATION, STRATEGY, CONTENT SYSTEMS, GROWTH ENGINE.

## Typography Decisions

| Element | Font | Size | Weight | Color | Position | WHY |
|---------|------|------|--------|-------|----------|-----|
| Tag | Space Mono | 9px | 400 | 55% red | Top-left | Lab notebook header = measured experiment |
| Headline dim | Space Grotesk | 54px | 300 | 18% white | Top-left | Near the extreme = stalled, no momentum, stuck |
| Headline bold | Space Grotesk | 70px | 700 | 95% white | Below dim | Equilibrium = maximum kinetic energy, resonance |
| "frequency." | Space Grotesk | 70px | 700 italic | #C83C32 | In bold headline | Natural frequency = the tuned state |
| Stat | Space Grotesk | 220px | 700 | #C83C32 | At equilibrium center | WHERE all energy converges |
| Body dim | Space Grotesk | 21px | 300 | 30% white | Bottom third | The observation of oscillation |
| Body italic | Space Grotesk | 21px | 400 italic | 58% white | Below rule | The resolution = tuning the length |
| Formula | Space Mono | 11px | 400 | 10% white | Top-right | The governing equation |
| Data panel | Space Mono | 7.5px | 400 | 12% white / 38% red | Bottom-right | Physics parameters |

## Key Visual Principles

1. **Ghost density = time spent.** Dense afterimages at extremes = pendulum lingers here (slow). Sparse near center = pendulum races through (fast). This is the actual time-position distribution of a real pendulum.
2. **Glow filter on ghost bobs** = ethereal afterimages, not UI elements. No strokes. Just soft filled circles with 4px Gaussian blur.
3. **Energy gradient** in skill labels: common skills at the extremes (potential energy, stalled), rare skills at equilibrium (kinetic energy, in motion).
4. **The formula** T = 2pi*sqrt(L/g) contains the entire argument: you don't push harder, you adjust the LENGTH until the period matches the natural frequency.

## Metadata Template

```
PERIOD: 6.6s
AMPLITUDE: 66 DEG
FREQUENCY: NATURAL
DAMPING: ZERO
LENGTH: OPTIMAL
MODE: RESONANCE
```

## Adaptations

- Change amplitude angle for different stat values
- Swap skill labels to match any domain
- Adjust ghost count for more/fewer afterimage positions
- Can add damping visualization (decreasing amplitude envelope) for "decay" narratives
- Can add multiple pendulums (coupled oscillators) for "synchronization" narratives

---

*Claude Design Engine by Rahaman Bin Ujit*
