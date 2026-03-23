---
name: pressure-gauge
version: v114
format: 1080x1350
---

# Pressure Gauge

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Engineering instrument reading as poster. The gauge IS the proof. No opinion overrides an instrument reading.**

## Visual Structure

### Gauge (SVG, centered at ~540, 740)
- **Outer bezel arc:** semicircle 180deg to 0deg, stroke 3px, 10% white
- **Main gauge arc:** radius 300px, stroke 2px, 12% white
- **Inner arc:** radius 270px, stroke 1px, 5% white
- **Horizontal baseline:** 1px, 5% white, connecting the two ends

### Tick Marks
- **Major ticks (0-100 by 10):** outer r=310 to inner r=275, stroke 2-2.5px
  - Normal zone (0-50): white 14-18%
  - Redline zone (60-100): red 35-45%, thicker
- **Minor ticks (every 5):** outer r=305 to inner r=285, stroke 1.2px
  - Normal zone: white 8%
  - Redline zone: red 20-26%
- **Tick labels:** Space Mono, 11-12px
  - Normal zone: white 16-20%
  - Redline zone: red 40-50%

### Redline Zone (60-100)
- **Wedge fill:** pie slice from center to arc, rgba red 4.5%
- **Red arc overlay:** same path as main arc but red 18%, 2.5px stroke
- Creates a distinct warm zone that the needle sits inside

### Needle
- **Main needle:** 2.5px, #C83C32, 90% opacity, from hub to value position
- **Glow layer:** 8px stroke, 15% opacity, Gaussian blur
- **Hub:** 14px dark circle with 2px white border (12%) + 5px red center dot
- **Tip marker:** 5px red dot (80%) + 14px dashed ring (red 20%)

### Ambient
- Radial gradient glow behind gauge: 14% red center, 350px radius, fading to 0
- SVG noise at 2.5%

## Typography Placement

### Tag (top-left, 72px down)
- Space Mono, 10px, letter-spacing 4px, red 45%
- System voice: "Performance Reading"

### Headline (upper zone, above gauge, 115px down)
- Line 1: "They said one person" -- 52px, weight 300, 15% white = fading opinion
- Line 2: "maxes out" -- 78px, weight 700, 92% white = their confidence
- Line 3: "at ten." -- 78px, weight 700, #C83C32 = the contested limit (red = same as redline zone, creating visual thread)
- Position ABOVE gauge = claim exists before evidence

### Stat (gauge center pivot, 700px down)
- "66" at 200px, weight 700, #C83C32 with triple glow (100px/50px/20px)
- "Skills Deployed" -- Space Mono, 11px, letter-spacing 6px, red 50%
- Position at mechanical center = the reading IS truth

### Redline Label (near needle tip)
- Space Mono, 10px, letter-spacing 2px, red 50%
- Red dot indicator with glow
- Confirms needle is in danger zone

### Stat Row (bottom third, ~260px from bottom)
- 3 items centered: 36px bold white (82%) numbers + 8px mono labels (18%)
- Supporting evidence: what the 66 is made of

### Body (bottom, ~195px from bottom)
- Line 1: "The gauge disagrees." -- 23px, weight 300, 30% white = quiet, factual
- Line 2: italic, 23px, weight 400, 50% white = editorial conclusion

### Meta Strip
- Space Mono, 8px, letter-spacing 2px, 10% white
- "Unit: Skill / Max: 100 / Reading: 66 / Status: Redline"

## Reading Order
1. Bold red "at ten." headline catches eye
2. Eye drops to gauge arc structure
3. Follows needle to "66" at center
4. Absorbs stat row context
5. Lands on body conclusion
6. Meta strip rewards close inspection

## Best For
- Quantified capability posts
- "Off the charts" / exceeding limits messaging
- Performance/output data reveals
- Any content where the metaphor is "their limit was my starting point"
- Engineering/measurement precision aesthetic

## Key Insight
The pressure gauge is an AUTHORITY FIGURE. It doesn't argue, it measures. Placing "66" at the mechanical pivot says: this is an instrument reading, not an opinion. The redline zone creates the tension -- the needle SHOULD be in the danger zone, and it is, and the system keeps running.

---

*Claude Design Engine by Rahaman Bin Ujit*
