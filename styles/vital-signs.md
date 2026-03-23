# Vital Signs Monitor Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4
**Verdict:** KEEP

## Concept
The poster simulates a bedside ICU vital signs monitor. 5 standard vital channels (HR, ABP, SpO2, RESP, TEMP) show normal readings in dim white. A 6th custom channel (SKILL INDEX) shows an exponential surge in red that overwhelms the scale. The monitor's own alarm system classifies the reading as "CRITICAL (HIGH)" and "OFF SCALE."

The metaphor: everything conventional about this person is stable, ordinary, within limits. The unconventional output has no upper limit on the instrument's scale.

## Visual Specs

### Canvas
- 1080x1350px, #0A0A0A background

### Monitor Area (Top 65%)
- 6-channel waveform display with SVG traces
- Medical paper grid: horizontal lines at 0.03 white, vertical at 0.022 white
- Channel separators: 0.03 white (normal), 0.08 red (critical)
- Left accent stripe (3px) gradient peaking at red at skill channel zone

### Normal Channels (5)
- HR: ECG sinus rhythm, 0.14 white, 1.4px stroke
- ABP: Arterial waveform, 0.10 white, 1.1px
- SpO2: Plethysmograph, 0.08 white, 0.9px
- RESP: Slow sine, 0.07 white, 0.9px
- TEMP: Nearly flat, 0.05 white, 0.7px
- Readout values: 30px font, 0.18 white
- Channel labels left: 8px mono, 0.13 white

### Critical Channel (SKILL INDEX)
- Exponential surge: flat baseline 40% of width, then exponential rise
- Stroke: 2.8px, 0.58 #C83C32, Gaussian blur glow filter
- Wide ambient glow: 18px stroke, 0.07 red, wider blur
- Peak marker: 4.5px red dot (0.70) with 3 concentric rings
- "66" readout: 62px bold, 0.90 #C83C32, 40px/80px text-shadow glow
- Channel label: 9px mono bold, 0.55 red
- "ALERT: OFF SCALE" badge: red border 0.30, red text 0.60, dark bg
- UPPER LIMIT threshold: dashed line at 0.05 red
- "CRITICAL / HIGH" labels at peak: 6.5px/6px mono, 0.45/0.32 red

### Alarm Limits
- Each readout has HI/LO values in 5.5px mono
- Normal channels: 0.06 white
- Critical channel: "HI -- / LO 0" at 0.25 red (no upper limit)

## Typography

### Headline Pair
- "Vitals: stable." -- 46px, weight-300, 0.15 white (clinical routine)
- "Output: critical." -- 66px, weight-700, 0.93 white; "critical." in italic #C83C32 (alarm state)

### Body
- Line 1: 19px, weight-300, 0.25 white (clinical summary)
- Red rule: 55px wide, 1.5px, 0.35 red
- Line 2: 19px, weight-400 italic, 0.52 white (the insight)

### Punchline
- 17px italic, 0.40 white
- Pattern: "66 skills active. 5 vitals normal. One reading off the chart."

## Standard Elements
- Tag top-left: "/// Vital Signs Monitor /// Epoch 2026.0"
- Patient ID top-right: "PT. SYS-066" in red
- REC indicator with red dot: "MONITORING"
- Time axis: -8:00 to NOW (NOW in red)
- Data panel bottom-right: Patient/HR/BP/SpO2/Skill Index/Status
- Ghost "66" at 500px/0.016 red
- Ghost "VITAL" at 340px/0.006 white rotated -8deg
- Corner brackets, SVG noise 3%
- Identity bar bottom-right

## Text Placement Logic
- Normal channels occupy top 82% of monitor = the standard, the expected
- Critical channel at bottom 18% but surge dominates visually = the exception overwhelms the rule
- Right readout panel: normal values small/dim, "66" massive/glowing = size hierarchy IS clinical hierarchy
- Headline below divider = clinical assessment. "Stable" whispered, "critical" shouted
- The weight shift 300->700 = routine charting to emergency response

---

*Claude Design Engine by Rahaman Bin Ujit*
