# Style: Chromatography Separation

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Analytical chemistry poster simulating a TLC (thin-layer chromatography) plate. Skills are chemical compounds separated by Rf value. Rare skills barely move from the origin (low Rf, high stationary phase affinity). Common skills travel far with the solvent front (high Rf). The "66" sits at the injection point -- the undifferentiated mixture before separation. Best for: differentiation posts, depth-vs-breadth, showing distinct capabilities.

## Example
Example: Chromatography Separation poster

## Layout (1080x1350)

```
+----------------------------------------------+
| [.] CHROMATOGRAPHIC ANALYSIS                  |
|   UV 254nm / Silica Gel 60                    |
|                                               |
|  -- SOLVENT FRONT --------                    |
|  |                       |                    |
|  | [faint bands]         |  TEMPLATES         |
|  | [faint bands]         |  EMAIL             |
|  | [faint bands]         |  SOCIAL MEDIA      |
|  |                       |  SEO               |
|  | [mid bands]           |  COPYWRITING       |
|  | [mid bands]           |     Everyone is    |
|  | [mid bands]           |       a mixture.   |
|  | [mid bands]           |  I separated into  |
|  | [mid bands]           |     compounds.     |
|  | [mid bands]           |                    |
|  |                       |  [body text]       |
|  | [RED bands]           |  [body italic]     |
|  | [RED bands]           |                    |
|  | [RED bands]           |  5    2    10x     |
|  |                       |                    |
|  -- ORIGIN (red dashed) --                    |
|  [injection spot]        |  [data panel]      |
|                                               |
|  66                                           |
|  Skills Injected                              |
|                                               |
|  Rahaman | SENIOR MARKETING EXECUTIVE         |
+----------------------------------------------+
```

## Specs

### Background
- `#0A0A0A` solid

### TLC Plate (left artifact)
- 320x900px rectangle at (140, 120)
- Border: 1px solid white 6%
- Fill: white 1.2%
- Plate gradient: bottom red 3% to top white 1%
- 3 vertical channel marks at 0.025 white
- Origin line: red dashed 1.5px at bottom of plate (0.45 red)
- Solvent front: white dashed 1px near top (0.10 white)
- Injection spot: 30x14px red radial gradient (0.7 red) at origin

### Separation Bands (13 bands)
- Elliptical radial gradients with Gaussian blur
- **Deep zone (Rf 0.05-0.20):** 105-120px wide, 11-14px tall, red 0.25-0.55, blur 2-3px
- **Mid zone (Rf 0.28-0.64):** 90-100px wide, 8-10px tall, white 0.10-0.18, blur 2px
- **Surface zone (Rf 0.70-0.92):** 70-85px wide, 6-8px tall, white 0.05-0.09, blur 2px
- Bands narrow and fade with increasing Rf

### Band Labels
- Right of plate at x=480, mono 8px
- Deep labels: red 50%
- Mid labels: white 20%
- Surface labels: white 12%
- Annotation lines: 0.5px horizontal from plate edge to labels

### Rf Scale (left)
- Vertical 0.5px line at x=110 (white 6%)
- 11 ticks from 0.0 (origin) to 1.0 (front), 7px mono 10% white

### Stat "66"
- 180px bold #C83C32 at origin point
- 60px + 120px red text-shadow glow
- "Skills Injected" label: 8px mono red 40%

### Headline (right side, right-aligned)
- "Everyone is a mixture." -- 48px, weight 300, white 18%
- "I separated into compounds." -- 60px, weight 700, white 92%, "compounds." in #C83C32
- Top: 440px, width: 440px

### Body (right-aligned)
- Dim observation: 19px, weight 300, white 25%
- Red rule: 50px, 1.5px, red 50%
- Italic insight: 19px, italic, white 52%

### Data Panel (bottom-right)
- METHOD / COLUMN / DETECTOR / INJECTION / RESOLUTION / PEAKS
- 7.5px mono, white 12% keys, red 38% values

### Furniture
- Tag top-left: "Chromatographic Analysis" mono 8.5px, red dot
- Ghost "66": 480px, white 1.2%
- Corner brackets: 20px, white 6%
- Identity bar bottom-left
- SVG noise 2.5%

## Typography Rules
- Headline dim (300) = the amorphousness of a mixture, undefined, blurred
- Headline bold (700) = the sharpness of resolved peaks, each compound distinct
- "compounds." in red = same red as the deepest bands on the plate
- The weight shift 300 to 700 IS the separation process
- Negative space between plate and text IS the chromatographic separation

## When to Use
- Posts about having distinct, separable skills vs generic "jack of all trades"
- Differentiation narratives
- "I'm not a generalist, I'm a system with resolved components"
- Depth/specialization messaging

## Colors
| Element | Color |
|---------|-------|
| Background | #0A0A0A |
| Deep bands | rgba(200,60,50, 0.25-0.55) |
| Mid bands | rgba(255,255,255, 0.10-0.18) |
| Surface bands | rgba(255,255,255, 0.05-0.09) |
| Stat | #C83C32 |
| Origin line | rgba(200,60,50, 0.45) |

## Fonts
- Space Grotesk 300/700 (headlines, body)
- Space Mono 400 (labels, data, metadata)

---

*Claude Design Engine by Rahaman Bin Ujit*
