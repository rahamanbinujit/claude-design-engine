# Surveillance HUD

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4
**Best for:** System capability posts, omniscience/awareness themes, competitive positioning, "I do what others don't" posts, AI surveillance, tech-paranoia

## Concept
The poster IS a security camera feed. The viewer is looking at a surveillance monitor, not a poster. The stat ("66") is the subject being watched -- the TARGET at feed center with reticle lock. Skills are detected objects with AI bounding boxes and confidence scores. Detection lines converge on the target. 360-degree coverage, zero blind spots.

## Layout (1080x1350)
- **Background:** #0A0A0A
- **Feed zone** (top 60%, 68-668px): bordered camera feed containing all surveillance elements
- **Status bar** (676px): thin red divider
- **Alert strip + system status** (688px): mono text row
- **Headline zone** (726px): passive/active pair
- **Body zone** (920px): observation + insight
- **Punchline** (1100px): three-number italic
- **Data panel** (920px, right side): surveillance readout
- **Identity bar** (bottom 38px)

## Camera Feed (970x600px)
- **Border:** 1px solid rgba(255,255,255,0.035)
- **CRT vignette:** radial-gradient, transparent 50% to rgba(0,0,0,0.55) 100%
- **Scan lines:** repeating-linear-gradient, 2px transparent + 0.5px at 0.007 white
- **Grid:** 3x3 rule-of-thirds at 0.010 white
- **Timestamp:** top-left, mono 8.5px, 0.18 white
- **REC dot:** top-right, 6px red circle, 5px/12px glow, "REC" at 0.50 red mono
- **Camera ID:** bottom-left, mono 7.5px, 0.10 white
- **Frame count:** bottom-right, mono 7.5px, 0.08 white

## Target (stat)
- 200px bold #C83C32, centered in feed
- **Reticle:** 240px circle, 1px rgba(200,60,50,0.07)
- **Targeting ticks:** 4 cardinal 16px lines at 0.10 red
- **Red haze:** 380x280px radial, 0.020 red center
- **"SUBJECT IDENTIFIED"** below reticle, mono 7.5px, 0.28 red
- **"SUBJECTS CATALOGED: 66 / 66"** mono 7px, 0.09 white

## Detection Bounding Boxes (3 + 1 tiers)
| Tier | Count | Border | Label | Confidence | Position |
|------|-------|--------|-------|------------|----------|
| COMMON | 6 | 0.045 white | 0.08 white | 0.22-0.34 | Canvas edges |
| MID | 4 | 0.08 white | 0.14 white | 0.55-0.63 | Mid-range |
| RARE | 3 | 0.12 red + 6px glow | 0.35 red | 0.79-0.86 | Near center |
| ALERT | 1 | 0.20 red + 10px/25px glow | 0.55 red bold | 0.97 | Near center, not overlapping stat |

Each box: label above (mono 6.5px, padded), confidence below-right (mono 6px)

## SVG Connection Lines
Dashed lines from detections converging on "66" center:
- Common: 0.015 white, 0.5px, dash 4/8
- Mid: 0.025 white, 0.5px, dash 3/6
- Rare: 0.04 red, 0.7px, dash 3/5
- Alert: 0.06 red, 0.8px, dash 2/4

## Typography
| Element | Size | Weight | Color | Notes |
|---------|------|--------|-------|-------|
| Headline passive | 48px | 300 | 0.13 white | The common observation |
| Headline active | 66px | 700 | 0.93 white | Last word italic #C83C32 |
| Body observation | 19px | 300 | 0.22 white | Factual, dim |
| Body insight | 19px | 400 italic | 0.48 white | After 55px red rule |
| Punchline | 17px | 400 italic | 0.35 white | Three-number compression |
| Data labels | 6.5px mono | 400 | 0.09 white | Whispered metadata |
| Data values | 7px mono | 400 | 0.18 white / 0.42 red | Status readout |
| Alert text | 7px mono | 400 | 0.25 red | With red diamond icon |

## Data Panel Rows
SYSTEM, SUBJECTS, TRACKED, THREATS, COVERAGE, BLIND SPOTS, FEED, OPERATOR
- Red values for: SYSTEM (SYS-066), THREATS (ELEVATED), BLIND SPOTS (0), OPERATOR (SINGLE)

## Atmosphere
- Ghost text: "SURV" at 400px/0.005 white, rotated -8deg
- SVG noise: 2.5%, fractalNoise 0.65
- Corner brackets: 22px, 1.5px, 0.07 white
- Zone separator: 490px, linear-gradient red 0.04

## Adaptable Variables
- Stat number, skill names, confidence values
- Headline pair (any passive/active observation contrast)
- Camera ID designation
- Threat level and alert text

## Tone
The viewer is the surveillance operator. They see what the system sees. Everything is being recorded, timestamped, cataloged. The paranoia is quiet -- not alarm bells, but the calm certainty of total coverage.

---

*Claude Design Engine by Rahaman Bin Ujit*
