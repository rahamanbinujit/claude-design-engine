# Surveillance Grid

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Concept:** The poster is a CCTV monitoring wall. A 3x4 CSS Grid divides the canvas into 12 camera feed panels. Only 3 are active (content-filled, red-bordered). The rest are dead (dark, static noise, "NO SIGNAL"). The stat sits in the center cell with a targeting crosshair. The metaphor: evidence captured on camera.

**Best for:** Proof-of-system posts, monitoring/tracking themes, capability reveals, "here's what I built" content.

## Specs

- **Canvas:** 1080x1350, #0A0A0A
- **Grid:** CSS Grid 3x4. Rows: 340/340/380/290px. Columns: equal thirds.
- **Cell borders:** 1px solid rgba(255,255,255,0.035)
- **Active cells (3):** border-color rgba(200,60,50,0.14), box-shadow inset 0 0 30px rgba(200,60,50,0.02)
- **Dead cells:** background rgba(0,0,0,0.25), SVG turbulence static noise at 4% opacity

## Layout Map

| R1 C1-2 (HEADLINE, spans 2 cols) | R1 C3 (dead, NO SIGNAL) |
| R2 C1 (dead, OFFLINE) | R2 C2 (STAT, active hero) | R2 C3 (secondary stats) |
| R3 C1 (dead, NO SIGNAL) | R3 C2-3 (BODY TEXT, spans 2 cols) |
| R4 C1-3 (AUTHOR BAR, spans all) |

## Typography

- **Headline:** Space Grotesk 70-74px bold uppercase. Dim words 16% white, key phrase #C83C32, bright words 95% white.
- **Stat:** 210px bold #C83C32, centered in cell.
- **Stat label:** Space Mono 10px, 22% white, letter-spacing 3px.
- **Secondary stats:** 46px bold 40% white + 8px mono labels 16% white.
- **Body:** 23px weight-300, 28% white, line-height 1.6.

## Surveillance Elements

- **REC indicator:** 7px red dot (65% opacity) with box-shadow glow (0 0 8px rgba(200,60,50,0.3)) + "REC" 9px mono bold red 50%. Top-right of active cells.
- **CAM labels:** "CAM-01 // ACTIVE" in 8px mono, red 35% on active, 7.5px mono 8% white on dead.
- **Timestamps:** 7.5px mono 10% white, bottom-right of every cell. Active: "2026.03.20 // 14:22:08". Dead: "--:--:--" or "LAST: 03:14:22".
- **NO SIGNAL:** 11px mono 7% white, letter-spacing 5px, centered in dead cells.
- **Crosshair on stat:** 200px square. Horizontal + vertical 1px lines at red 18%. 4 corner L-brackets (18px, 1.5px, red 25%).

## Scan Line

- Position: top 510px (roughly mid-poster, crossing the stat row).
- 1.5px, rgba(200,60,50,0.12).
- Triple box-shadow glow: 15px at 6%, 40px at 3%.

## Overlays

- **Interlace:** repeating-linear-gradient, 6px spacing, rgba(0,0,0,0.04).
- **SVG noise:** fractalNoise baseFrequency 0.65, opacity slope 0.025.
- **Static noise (dead cells):** SVG turbulence baseFrequency 0.9, opacity slope 0.04.

## Standard Elements

- **Meta top:** "FEED: 12 / ACTIVE: 03 / STATUS: MONITORING" -- 9px mono 14% white, centered.
- **Side text:** rotated 90deg, 7px mono 8% white.
- **Data strip:** 7.5px mono 10% white, flex space-between.
- **Corner L-brackets:** 24px, 1px, 5% white.
- **Author bar:** name 13px 50% white, title 9px mono 20% white. Monitoring status right-aligned with feeds/active/recording.

---

*Claude Design Engine by Rahaman Bin Ujit*
