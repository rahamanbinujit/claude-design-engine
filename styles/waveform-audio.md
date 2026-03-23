# Waveform Audio

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Category:** Data visualization / Audio engineering
**Best for:** "Building something powerful" posts, system reveals, productivity content, "turning up the volume" or "the signal is clear" metaphors
**Quality Score:** 4/5 — KEEP

---

## Core Concept
The poster background features an SVG audio waveform visualization — 200 thin vertical bars creating a sound wave pattern with a realistic audio envelope. The stat number anchors below the waveform. A playback progress line marks a position along the wave. Audio engineering metadata (frequency, dB, channels, timecodes) frames the waveform.

## Specs

### Waveform Bars
- **Count:** 200 bars
- **Width:** 1.2px each, spaced ~4.56px apart (fills 912px SVG viewBox)
- **Height:** Varies by envelope position, max ~200px in SVG space
- **Envelope shape:** Quiet intro (0-15%) → Build (15-35%) → Peak (35-55%) → Sustain (55-75%) → Decay (75-100%)
- **Random variation:** Each bar multiplied by random 0.4-1.0x for natural texture
- **Non-peak fill:** `rgba(255,255,255, 0.07 + envelope * 0.10)` — ranges from 7% to 17%
- **Peak zone fill (33-53%):** `rgba(200,60,50, 0.22)` — red at 22%
- **Mirror bars:** Below center line, 30% height of main bar. White: `0.025 + env * 0.03`. Red: 8%
- **Center line:** 0.5px at 4.5% white

### Peak Glow
- Radial gradient ellipse behind peak zone
- Position: 30% left, 20% top, 25% width, 60% height
- Color: `rgba(200,60,50, 0.06)` to transparent at 70%

### Playback Line
- 1px vertical line, `#C83C32` at 35% opacity
- `box-shadow: 0 0 8px rgba(200,60,50,0.12)`
- Playback head: downward triangle 10x6px, red at 50%
- Position: ~36% along waveform (adjustable per content)

### Timecodes
- Start (00:00), Current (red 35%), End (03:42)
- 8px Space Mono, 12% white (current in red)

### Audio Metadata
- **Frequency ticks (left edge):** 20k / 10k / 5k / 1k / 200 / 20 Hz — 6.5px mono 12% white
- **dB scale (right edge):** 0dB / -6 / -12 / -24 / -inf — 6.5px mono 12% white
- **Channel indicators:** L/R active (red dot 35%), C/Sub inactive (white dot 8%) — 7px mono 10% white

### Layout
- **Canvas:** 1080x1350px, `#0A0A0A` bg
- **Headline:** 78px bold, -3.5px tracking, 0.93 line-height. Top section.
- **Body:** 22px weight-300, 28% white, 480px max-width
- **Waveform:** Centered vertically at ~480px top, 260px height
- **Stat number:** 200px bold `#C83C32`, below waveform
- **Secondary stats:** Right-aligned, 44px 40% white

### Meta Labels
- **Top:** "Track: 01 / BPM: 066 / Duration: 03:42 / Sample Rate: 48kHz" — 9px mono 14% white
- **Side (rotated 90deg):** "Waveform / Track: Sys-066 / Channel: Stereo / Bit Depth: 24" — 7px mono 8% white
- **Data strip (bottom):** "Format: WAV / Channels: 2 / Sample Rate: 48kHz / Bit Depth: 24 / Codec: PCM" — 7.5px mono 10% white

### Standard Elements
- Corner L-brackets: 22px, 1px, 4.5% white
- Author bar: 1px border-top 6% white
- SVG noise: 2.5%

## Iteration Notes
- v89a: Waveform too faint at 4-10% opacity. Score 3.
- v89b: Boosted to 7-17% white / 22% red. Added peak glow. Score 4. KEEP.

---

*Claude Design Engine by Rahaman Bin Ujit*
