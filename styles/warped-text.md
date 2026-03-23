# Style: Warped Text

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
CSS transform-based dimensional distortion on a single accent phrase, while everything else stays clean and editorial. The warped word physically pushes forward from the flat plane, creating visual tension that draws the eye to the key message. Combines skewX, perspective, and rotateY for a controlled 3D warp effect. Best for bold statement posts where one phrase needs to leap off the feed.

## Example
Example: "One person. The output of an entire team."

## Layout (1080x1350, 4:5 portrait)

```
+------------------------------+
| TAG (mono, top-left)    *RED |
|                              |
|                              |
|  One person.                 |  <- 82px, weight 300 (light)
|  The output of               |  <- 82px, weight 700 (bold)
|  an entire team.             |  <- 92px, weight 700, RED, WARPED
|      /skewX(-14deg)/         |     transform: skewX(-14deg) perspective(400px) rotateY(6deg)
|                              |     red glow: text-shadow 40px/80px
|  | Subtext pull quote        |  <- 24px, weight 300, 55% opacity, red left border
|  | in muted tone             |
|                              |
|  66    5     2     1         |  <- stats row, red accents on key numbers
|  SKILL INT   BRAND PERSON    |  <- mono 12px labels
|                              |
|  Name + Title          [--]  |  <- identity bar + red line accent
+------------------------------+
```

## Key Technique: The Warp

The entire style hinges on ONE warped element. Only the accent phrase gets transformed:

```css
.warped-word {
  display: inline-block;
  color: #C83C32;
  transform: skewX(-14deg) perspective(400px) rotateY(6deg);
  transform-origin: left bottom;
  font-size: 92px;
  font-weight: 700;
  text-shadow:
    0 0 40px rgba(200, 60, 50, 0.6),
    0 0 80px rgba(200, 60, 50, 0.2);
}

/* Dimensional shadow behind the warp */
.warped-word::after {
  content: attr(data-text);
  position: absolute;
  top: 4px;
  left: 6px;
  color: rgba(200, 60, 50, 0.15);
  z-index: -1;
  transform: skewX(-3deg);
  filter: blur(2px);
}
```

## Supporting Elements

- **Decorative skewed lines**: 1px lines with `skewX(-14deg)` scattered across composition, echoing the warp motif. Low opacity (15% red gradient).
- **Faded bg text**: Large text element (480px) also skewed at -12deg for cohesion. 2% opacity.
- **Red atmospheric glow**: Radial gradient orb (500px, 12% opacity, 60px blur) behind headline area.

## Rules

1. **Only ONE element gets warped** -- the rest stays perfectly clean. That contrast IS the design.
2. Warp angle: skewX between -10deg and -18deg. Below -10 is invisible; above -18 looks broken.
3. The warped word must be the RED accent word -- it carries color AND dimension.
4. Dimensional shadow (::after) is mandatory -- it sells the 3D depth illusion.
5. Decorative skewed lines must match the same skewX angle as the accent word for visual cohesion.
6. Mixed font weights (300/700) in the headline lines leading up to the warped word create editorial rhythm.
7. Pull quote with red left border provides the explanatory context below the bold headline.

## Best For
- Bold statement posts ("I replaced an entire team", "One system. Zero limits.")
- Posts where a single phrase is the punchline
- AI/tech builder positioning content
- Any post where you want one line to physically stand out from the flat feed

## File Size
~824KB PNG at 4320x5400px (4x export). Efficient -- no JPEG conversion needed.

## Variations to Try
- Stronger skew (-18deg) for more aggressive tension
- skewY instead of skewX for vertical warp
- Warped word scaling slightly larger (1.05x) to amplify the "pushing forward" effect
- Combining with png-grain overlay for tactile texture on the flat bg

---

*Claude Design Engine by Rahaman Bin Ujit*
