# Oscilloscope / CRT Signal Display Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Origin
v221 experiment. Niche #52. Inspired by vintage Tektronix oscilloscopes and CRT test equipment.

## When to Use
- Growth/trajectory messaging ("rising signal", "increasing amplitude")
- Signal vs noise positioning
- Technical/engineering aesthetic
- Dark-mode feed content (stands out in light-mode LinkedIn feeds)
- Data-driven personal brand
- "My output speaks" messaging

## Visual DNA
- **Background:** Pure black #0a0a0a with #050a05 screen area
- **Primary color:** Phosphor green #00FF41 with glow (text-shadow: 0 0 8px, 0 0 20px at 30%)
- **Secondary color:** Amber #FFB000 with glow (for second channel / accent data)
- **Dim text:** rgba(0,255,65,0.4) with subtle glow
- **Bezel:** 28px #1a1a1a frame with #2a2a2a outline, 12px border-radius

## Typography
- **Headlines:** VT323 (Google Fonts) -- pixelated CRT bitmap feel, 58px+
- **Technical labels:** Share Tech Mono -- authentic monospace instrument readouts
- **All text:** Must have phosphor glow via text-shadow

## Key Elements
1. **CRT Bezel** -- Dark gray frame around the "screen" area
2. **Grid** -- Minor grid (6% green, ~26px) + major grid (15% green, ~128px) + center crosshair dashed
3. **Waveform traces** -- SVG paths with feGaussianBlur glow filter. Cubic bezier for smooth waves, L-path for pulse/square waves
4. **Ghost trace** -- Previous sweep at 8% opacity behind main trace
5. **Scanlines** -- repeating-linear-gradient 2px transparent / 2px 15% black
6. **Vignette** -- radial-gradient ellipse, transparent center 50%, black 60% at outer
7. **Curvature shadow** -- inset box-shadow 80px for CRT curvature illusion
8. **Trigger indicator** -- Green dot (8px) with glow + "TRIG'D" label
9. **Measurement cursors** -- Amber dashed vertical lines
10. **Station markers** -- Hollow circles on data points, filled dot on current/final

## Layout Structure
```
┌─────────────────────────────┐
│ BEZEL                       │
│ ┌─────────────────────────┐ │
│ │ MODEL      BANDWIDTH    │ │  <- Top panel (clear space)
│ │ HEADLINE   CH READOUTS  │ │  <- Main text (clear space above waveform)
│ │                         │ │
│ │ ~~~WAVEFORM TRACES~~~   │ │  <- Center: SVG grid + traces + markers
│ │ ▁▂▃▅▆▇ PULSE WAVE      │ │
│ │                         │ │
│ │ FREQ PANEL (4 items)    │ │  <- Below waveform (clear space)
│ │ [DATA] [DATA] [DATA]    │ │  <- Bordered data blocks
│ │ ── RAHAMAN ──           │ │  <- Bottom identity
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

## Rules
- ALL text in clear black space -- never on the waveform/grid area
- SVG layering: L1=grid, L2=waveforms+traces, L3=markers, HTML text=topmost
- Glow filter on ALL colored SVG elements
- Max 2 channels (2 colors). More = cluttered
- Model number should parody real scope brands (Tektronix, Keysight, etc.)
- Technical labels must use real oscilloscope terminology (TIME/DIV, VOLTS/DIV, COUPLING, TRIGGER)

## Content Mapping
| Oscilloscope Element | Rahaman's System |
|---|---|
| Rising waveform | Career trajectory / growth |
| Pulse peaks | Skill acquisition milestones |
| Channel 1 | Primary domain (career/output) |
| Channel 2 | Secondary metric (skills/frequency) |
| TIME/DIV | Career timespan |
| VOLTS/DIV | Output multiplier |
| Trigger level | Threshold crossed |
| Model number | Personal identifier (RBU-YYYY) |

## Score: 4/5
Strong dark-mode aesthetic. Authentic CRT feel. Good metaphor mapping. Dual-trace concept tells a clear story.

---

*Claude Design Engine by Rahaman Bin Ujit*
