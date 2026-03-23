# Radar Sweep

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Style ID:** radar-sweep
**Quality Score:** 4/5 — KEEP

## Concept
Dark poster with a radar/surveillance HUD aesthetic. A single radar sweep beam radiates from the lower-left corner via CSS conic-gradient. Concentric range circles and ghost blips create depth. A primary blip with glow rings marks the key stat. Military/surveillance aesthetic that communicates detection, precision, and foresight. Part of the 2026 "Surveillance Design" trend.

## Specs

### Canvas
- **Size:** 1080x1350 (4:5)
- **Background:** #0A0A0A
- **Fonts:** Space Grotesk (headings, body) + Space Mono (metadata, scan data, labels)

### Radar System Layer

1. **Origin Point:** Bottom-left area (bottom: 100px, left: -100px container offset)
2. **Concentric Range Circles**
   - 7 circles from 280px to 1600px diameter
   - `border: 1px solid rgba(255,255,255, 0.07)` (inner circles)
   - Fade to 0.02 opacity on outermost circles
   - All centered on origin via bottom/left offset = -radius
3. **Sweep Beam** (conic-gradient from origin)
   - Trail: `conic-gradient(from 258deg at 0% 100%, ...)` — 45deg wide, 1-8% red opacity
   - Main beam: `conic-gradient(from 280deg at 0% 100%, ...)` — narrow peak at 18% red opacity
   - Leading edge line: 2px wide, 900px long, red gradient (50% → 0%), rotated -61deg from origin
4. **Axis Lines**
   - Vertical: 1px, bottom to top, white gradient 10% → 2%
   - Horizontal: 1px, left to right, white gradient 10% → 2%
5. **Range Labels**
   - Space Mono 9px, 15% white, positioned along vertical axis
   - Values: 100, 200, 300, 400, 500

### Blip Elements

1. **Primary Blip** (marks the stat)
   - 8px red dot (#C83C32)
   - box-shadow: 0 0 6px 60%, 0 0 20px 30%, 0 0 40px 10%
   - Outer ring: 32px, 1px border at 25% red opacity
   - Inner ring: 20px, 1px border at 15% red opacity
   - Connector line: 30px horizontal, 20% red, links blip to stat number

2. **Ghost Blips** (scattered old returns)
   - 4px white dots at 6% opacity (3-4 of these)
   - 3px red dots at 8% opacity (2-3 of these, slightly faded)
   - Scatter across upper-right quadrant of the radar field

### Content Structure

1. **Tag** (top-left): `// SIGNAL DETECTED` — Space Mono 11px, 3px letter-spacing, 50% red
2. **System Info** (top-right): Mono 9px, 12% white, right-aligned — radar version, lat/long coords
3. **Headline:** 76px Space Grotesk bold, -2px letter-spacing, 1.08 line-height. Accent word in #C83C32 with `text-shadow: 0 0 40px rgba(200,60,50,0.15)`
4. **Body Text:** 23px Space Grotesk, 1.75 line-height, 40% white
5. **Divider:** 80px horizontal line, 30% red opacity
6. **Stat Number:** 110px Space Grotesk bold, #C83C32, -3px letter-spacing, `text-shadow: 0 0 60px rgba(200,60,50,0.2)`
7. **Stat Label:** Space Mono 12px, 22% white, 2.5px letter-spacing, uppercase
8. **Scan Readout** (bottom-right): Mono 9px, 10% white, right-aligned, line-height 2 — technical data (cycle, range, freq, mode, targets)
9. **Status Indicator:** 5px red dot with glow + "ACTIVE SCAN" mono label at 35% red
10. **Author Bar** (bottom): 6% white border-top, mono name left (11px, 30% white) + role right (9px, 15% white)
11. **Corner Marks:** 16px registration crosshairs (+ shape) at 8% white in 3 corners

## Best For
- Discovery / detection / insight posts
- Trend-spotting, "I saw it first" content
- Data-driven findings, market intelligence
- Strategic foresight, competitive analysis
- Any post where the metaphor is "scanning the landscape and finding signal in noise"

## Never
- Animate the sweep (static poster only)
- Use more than 1 primary blip (keep focus singular)
- Make range circles too bright (max 7% opacity)
- Add too many ghost blips (5-7 max, scatter naturally)

---

*Claude Design Engine by Rahaman Bin Ujit*
