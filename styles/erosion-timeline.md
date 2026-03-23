---
name: erosion-timeline
description: Text erodes top-to-bottom across headline lines. Fully intact at top, dissolving to dust at bottom. Pristine stat survives below a divider line. Decay curve + timeline + half-life bar add scientific rigor. Time-decay meets data poster.
quality-score: 4
best-for: proof-over-opinion posts, time-validates-results messaging, "doubters were wrong" content, any post where opinions decay but results persist
---

# Erosion Timeline

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Concept:** Opinions erode over time. Results don't. The headline text physically decays line-by-line from intact to dust, while the stat number below a divider remains pristine and untouched.

---

## Structure

### Canvas
- 1080x1350px, #0A0A0A background
- SVG noise at 2.5% opacity
- Corner L-brackets at 30px inset

### Headline Zone (top: 140px, left: 72px)
4 headline lines, each at a different erosion stage:

1. **Line 1 (Intact):** 76px, weight-700, 90% white. No clip-path. The opinion at full strength.
2. **Line 2 (Cracking):** 76px, weight-700, 55% white. CSS crack lines (2px dark bars at ~3deg angles) cutting through text. Hairline fractures.
3. **Line 3 (Eroding):** 76px, weight-700, split into two groups:
   - First word: 25% white, jagged clip-path (irregular polygon edges), 4px letter-spacing
   - Second word: 14% white, heavier clip-path (more aggressive polygon), 8px letter-spacing
4. **Line 4 (Dust):** 76px, weight-700, 5% white, aggressive clip-path (barely-there polygon), 14px letter-spacing. Nearly invisible.

### Scattered Debris
- 6-8 single letter fragments (actual characters from eroded words) positioned below/right of lines 3-4
- Font sizes 8-28px, opacities 2.5-7% white, rotated at varied angles (-25 to +30deg)
- 10-12 dust particles: rectangles 2-6px, opacities 1.5-6% white

### Divider (top: 530px)
- Horizontal gradient line: left transparent -> center/right red (20% opacity)
- Label left: "DECAYED" at 7px mono, 8% white
- Label right: "WHAT SURVIVED" at 7px mono, 30% red

### Stat Zone (top: 570px)
- Label: 10px mono, red 35%, 4px letter-spacing
- Number: 280px, weight-700, #C83C32, -14px letter-spacing
- Radial glow behind: 350x220px, 7% red
- Sub-label: 10px mono, 16% white with red separator slashes

### Decay Curve (top: 810px)
- SVG polyline: exponential decay from top-left to bottom-right
- Stroke: 1.5px, 8% white
- Filled polygon below at 1.5% white
- Start dot: 3px, 15% white (opinion at full strength)
- End dot: 2px, 25% red (opinion at near-zero)
- Label: "OPINION STRENGTH" at 6px mono

### Timeline Axis (top: 870px)
- Horizontal line: 6% white
- Major ticks: 16px tall, 12% white
- Minor ticks: 8px tall, 6% white
- Labels: "DAY 1" / "MONTH 3" / "YEAR 1" / "NOW" at 8.5px mono
- "NOW" in red 50%, weight-700

### Half-Life Bar (top: 1070px)
- Label: "Opinion remaining" at 7px mono, 10% white
- Track: 300px wide, 3px tall, 3% white
- Fill: 40px, gradient red 25% to red 5%
- Marker: 1px, 9px tall, red 30%
- Value: "~0%" at 7px mono, red 25%

### Body Text (top: 940px)
- Line 1: 23px, weight-300, 26% white
- Line 2: 23px, weight-300, italic, 48% white (brighter = emphasis)

### Material Analysis (right side, top: 600px)
- 8px mono, 9% white, right-aligned, line-height 2.4
- Key values slightly brighter (16% white)
- Red values for MATERIAL and SURVIVOR (30% red)
- Fields: MATERIAL / HALF-LIFE / CURRENT / RESIDUE / SURVIVOR

### Integrity Scale (right edge, top: 150px)
- Vertical labels: 100% / 75% / 50% / 25% / 0%
- Decreasing opacity matching erosion stages
- 7px mono, 65px spacing

### Identity Bar (bottom: 50px)
- Name: 13px, weight-600, 28% white
- Title: 8px mono, 10% white, uppercase
- Mark: 7.5px mono, red 18%

---

## Typography Mastery Decisions

| Element | Position | Why |
|---------|----------|-----|
| Line 1 (intact) | Top, left-aligned | Authority position. The opinion begins with full conviction. |
| Line 2 (cracking) | Below line 1 | Time has passed. Cracks = first weakness. Still readable. |
| Line 3 (eroding) | Below line 2 | More time. Clip-path erosion = structural failure. Letters separating. |
| Line 4 (dust) | Below line 3, near-invisible | The conclusion dissolved. Opinions built on weak premises don't last. |
| Letter fragments | Right of lines 3-4 | Physical debris. The word's atoms, now disconnected. |
| Divider | 530px horizontal | THE SURVIVAL LINE. Above = decayed. Below = survived. |
| "66" stat | Below divider, large and pristine | The survivor. Untouched by erosion. Maximum contrast with text above. |
| Decay curve | Above timeline | Scientific proof of the erosion process. Data validates visual. |
| Timeline | Near bottom | Grounds decay in real time. "Now" in red = present moment verdict. |
| Body text | Bottom-third | Grounding/conclusion. "Opinions have a half-life. Results don't." |

---

## Color Usage
- White at decreasing opacities = erosion stages (90% -> 55% -> 25% -> 14% -> 5%)
- Red #C83C32 = what survives (stat, "NOW", material labels)
- The gradient from white-to-invisible IS the erosion
- Red remains constant = permanence

## Best Content Fit
- "They said X, but Y proved them wrong" posts
- Proof-of-work / track record posts
- Time-validates-results messaging
- Doubt-to-proof narrative arcs
- Any post contrasting temporary opinions with permanent results

---

*Claude Design Engine by Rahaman Bin Ujit*
