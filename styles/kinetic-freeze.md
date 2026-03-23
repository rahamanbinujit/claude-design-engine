# Style: Kinetic Freeze-Frame

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Dark editorial poster simulating a freeze-frame of kinetic typography mid-motion. One hero word is stretched, skewed, and trailed by motion blur copies -- as if a screenshot was taken at the peak moment of an animation. All other text remains static for maximum contrast.

## Example
Example: "Stop doing what you can AUTOMATE"

## Layout (1080x1350)

```
+------------------------------+
| TAG (mono, faded)            |
|                              |
|                              |
| STATIC HEADLINE              |
| (clean, white, 82px)         |
|                              |
| >>>KINETIC WORD<<<           |
|   (stretched, red, blurred)  |
| ------ speed lines ------    |
|                              |
| Body text (subtle, 26px)     |
|                              |
|                              |
| [R] Name                     |
|     TITLE             (dot)  |
+------------------------------+
```

## Structure

### Tag
- Space Mono, 16px, uppercase, letter-spacing: 4px
- Color: rgba(255,255,255,0.35)

### Static Headline
- Space Grotesk, 82px, weight 700
- Color: #F5F5F5
- letter-spacing: -2px, line-height: 1.0
- Completely still -- the "normal" baseline

### Kinetic Word (HERO)
- Space Grotesk, 110px, weight 700
- Color: #C83C32
- Transform: scaleX(1.5) skewX(-8deg)
- letter-spacing: 12px
- text-shadow: 0 0 40px rgba(200,60,50,0.4) (red glow)

### Motion Blur Trails (4 layers behind kinetic word)
1. **Trail 1** (closest): left -18px, blur 4px, opacity 0.25
2. **Trail 2** (mid): left -50px, blur 12px, opacity 0.12
3. **Trail 3** (far): left -70px, blur 18px, opacity 0.08 (via ::after)
4. **Trail 4** (farthest): left -90px, blur 24px, opacity 0.05

All trails use same font-size, weight, letter-spacing, and transform as the hero word. Creates a directional blur streak suggesting rightward motion.

### Speed Lines
- Horizontal 1-1.5px lines across the canvas at the kinetic word's vertical zone
- Background: linear-gradient(to right, transparent, rgba(200,60,50,0.15), transparent)
- 5-7 lines at varying widths and positions
- Reinforce horizontal motion direction

### Body Text
- Space Grotesk, 26px, weight 300
- Color: rgba(255,255,255,0.5)
- line-height: 1.6, max-width: 700px

### Footer
- Red circle avatar (44px) with initial
- Name: Space Grotesk 18px, weight 600
- Title: Space Mono 12px, uppercase, letter-spacing 2px, rgba(255,255,255,0.35)
- Red accent dot (10px) on far right

## Rules
- ONE kinetic word only -- the rest of the text must be perfectly static
- The kinetic word should be the most important/action-oriented word (verbs work best: AUTOMATE, BUILD, SCALE, SHIP)
- Blur trails always go LEFT (suggesting rightward motion)
- Speed lines stay in the kinetic word's vertical band, not across the whole poster
- Red glow on the kinetic word adds energy without violating "no drop shadows" rule (it's glow, not shadow)
- No more than 4 blur trail layers (more = muddy)

## Best For
- Automation / speed / momentum posts
- Action-oriented content ("Stop X, Start Y")
- Posts where one verb carries the entire message
- Tech/AI efficiency messaging

## File Size Notes
- Motion blur + glow effects produce larger files (4-5MB PNG)
- Always convert to JPEG 95% (brings to ~2MB)
- The blur is visual complexity that doesn't compress as well as flat graphics

---

## Variant B: S-Curve Cascade (v91)

**Concept:** Instead of one kinetic word, ALL headline words cascade along an S-curve path with progressively increasing size (50px to 96px) and decreasing blur (3px to 0px), as if captured mid-flight. One key word (in red) has a camera freeze-frame bracket around it.

**Example:** Kinetic Freeze poster

### Headline S-Curve Cascade

| Position | Size | Opacity | Blur | Role |
|---|---|---|---|---|
| Word 1 (far) | 48-52px | 8-10% white | 3px | Distant, fading |
| Word 2 | 55-60px | 12-14% white | 2px | Approaching |
| Word 3 | 62-66px | 18-22% white | 1px | Mid-flight |
| **Word 4 (focus)** | **80-85px** | **#C83C32** | **0px** | **Frozen moment** |
| Word 5 | 84-88px | 90-95% white | 0px | Sharp, arrived |
| Word 6 | 94-98px | 95% white | 0px | Destination |

- Ghost trails (offset 20-25px behind, 3-6% white, heavier blur) on blurred words only
- Freeze bracket: 4 corner L-shapes (16px, 1.5px, red 35%) on the KEY red word
- S-curve path: top-left → arc right → swing back left (NOT a straight diagonal)

### Motion Elements
- 6-8 SVG speed lines (0.7-1.2px, 3-5% white) trailing behind cascade
- Dotted trajectory arc (1px, 3% white, dasharray 4,8) with keyframe dots
- REC indicator: red dot + "FROZEN" text top-center
- Velocity indicator: "0 → MAX" top-right

### Stat as Destination
- 200px bold `#C83C32` below the cascade — the endpoint of all motion
- Secondary stats right-aligned (44px, 40% white)

### Key Rules for Variant B
- S-curve is essential — words must NOT form a straight diagonal
- Blur: 3px → 2px → 1px → 0px (smooth progression)
- Ghost trails only on blurred words
- Freeze bracket ONLY on the red key word
- Best for multi-word headlines about momentum, achievements, or systems

---

*Claude Design Engine by Rahaman Bin Ujit*
