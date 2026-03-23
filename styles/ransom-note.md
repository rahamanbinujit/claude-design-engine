# Ransom Note

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Vibe
Collage punk meets editorial meets dark poster. Controlled chaos. Each headline word looks clipped from a different source -- different size, weight, rotation, opacity. The deliberate disorder of the headline contrasts with clean, ordered data below. Punk-editorial tension.

## When to Use
- Contrarian/defiance posts ("they said X but I did Y")
- Rule-breaking content
- Bold statements against convention
- Rebellious energy with data-backed proof

## Canvas
- 1080x1350px, #0A0A0A background
- SVG noise at 2.5%
- Corner L-brackets (22px, 1px, 4.5% white)

## Headline (The Core Effect)
Each word is a separate `<span>` with unique styling:
- **Font sizes:** Range 66-96px across words. Important words (action words, punchline) get larger sizes.
- **Font weights:** Range 300-700. Filler words lighter, power words bolder.
- **Rotation:** Range -2.8deg to +2.8deg. Must be at LEAST 1deg to be visible. Alternate positive/negative.
- **Vertical offset:** translateY range 3-8px. Creates deliberate misalignment.
- **Opacity:** Range 42-97% white. Filler words dimmer, key words bright.
- **Key word in #C83C32** with 1px red border (25% opacity) and red bg (4%). This is the visual anchor.
- **Strikethrough word:** One word gets `text-decoration: line-through` in red (55% opacity, 3px thick) for defiance.
- **Bordered words:** 2-3 words get thin border boxes (1px, 7-8% white) with padding, like cut paper edges.
- **Punchline word** gets 2px red bottom border (45%) and largest size.

## Collage Texture Elements
- **Tape strips:** 3 translucent rectangles (50-60px wide, 12-14px tall), bg 1.8% white, border 1px 2.5% white, slight rotation. Placed near headline zone.
- **Clip marks:** 4 diagonal lines (22-35px, 1px, 7% white) scattered around headline.
- **Redacted bars:** Strip of 4 horizontal bars (12px tall, 4% white bg), two with red tint (8%). "REDACTED" label in 7px mono 8% white.

## Body Text
- 22px, weight 300, 28% white, 540px max-width
- Clean and readable -- contrast with chaotic headline

## Stat Number
- 200px bold, #C83C32
- Clean and ordered -- deliberate contrast with headline chaos

## Secondary Stats
- 44px bold, 40% white
- Mono labels below: 8px, 12% white, 2px letter-spacing

## Meta & Data
- Meta top: "Source: Classified / Assembled: Manually / Type: Ransom" -- 9px mono, 14% white
- Side text (rotated 90deg): 7px mono, 8% white
- Data strip: "Weight: 300-700 / Tracking: Variable / Leading: Mixed" -- 7.5px mono, 10% white

## Author Bar
- 1px border-top at 6% white
- Name: 10px mono, 30% white, 3px letter-spacing
- Role: 8px mono, 12% white, 2px letter-spacing

## Key Rules
1. Rotations MUST be 1deg+ to be visible. Under 1deg reads as straight.
2. The contrast between chaotic headline and ordered stat section IS the design. Don't make stats chaotic too.
3. Keep readability -- the words are misaligned but still fully legible.
4. The red accent word in its border box is the visual anchor of the headline.
5. Tape strips and clip marks should be subtle (under 2% bg opacity) -- texture, not distraction.

---

*Claude Design Engine by Rahaman Bin Ujit*
