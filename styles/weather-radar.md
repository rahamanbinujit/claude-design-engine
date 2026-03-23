# Weather Radar

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Style:** weather-radar
**Best for:** Scanning/detection metaphor, "seeing what others miss" positioning, omniscience/awareness, systems builder who monitors everything, capability detection content

---

## Core Concept

The poster simulates a radar display -- concentric range rings emanate from the center where the stat sits as the origin/operator position. Blip contacts (skills, integrations) appear as dots on the radar field. The radar metaphor communicates: "I have detection capability that others lack."

---

## Layout Structure (1080x1350)

```
[TAG: red dot + "Radar Active"]          [BEARING DATA: range/contacts/status]
[HEADLINE: 3 lines, mixed weight]

                    [RADAR FIELD]
              [concentric SVG rings]
            [crosshairs through center]
          [white blips on outer rings]
        [red blips clustered near center]
              [dashed event horizon]
                   [STAT: 66]
              [CONTACTS DETECTED]

[5]  [2]  [10x]
[SECONDARY STATS]

[BODY: 2 lines]
[DATA PANEL: mono metadata]
[IDENTITY BAR]
```

---

## Specifications

### Radar Field
- **Center:** cx:540, cy:730
- **Rings:** 8 concentric circles, r:55 to r:440, 55px intervals
- **Ring stroke:** 0.7-1.0px, 6-10% white (peak at mid-range r:275 at 10%)
- **Crosshairs:** Cardinal (6% white, 0.7px) + diagonal (4% white, 0.6px)
- **Event horizon:** Dashed red ring at r:48 (25% red, 2px, dash 5/4) + inner r:36 (10% red)
- **Range ticks:** Along horizontal axis at ring intersections, 0.6px, 8% white
- **Range labels:** "10/20/30" at tick positions, 8px Space Mono, 14% white

### Blip Contacts
- **White distant:** 10 dots on outer rings, 3-3.5px radius, 9-14% white
- **Red close:** 5 dots clustered near stat, 4-4.5px radius, 42-50% red, animated opacity pulse (2.8-4s)
- **Glow halos:** 10-12px radius circles around red blips, 6-8% red stroke, 0.5px
- **Blip labels:** 8px Space Mono, uppercase. Red labels near close blips (SKL-05, INT-02, BRD-02, MKT-10x, SYS-66 at 45% red). White labels near distant blips (SIG-14, SIG-22, etc. at 18% white)

### Sweep Effect
- **Sweep arm:** SVG gradient line from center toward upper-left, 2px, 35% to 0% red
- **Conic glow trail:** 820px circle, conic-gradient from -55deg, peaking at 14% red over ~40deg arc
- **Center glow:** 600px radial gradient, 16% red center fading to transparent

### Typography
- **Tag:** "Radar Active" -- 9px Space Mono, 6px letter-spacing, 45% red, red dot with glow
- **Headline line 1:** 52px weight-300, 16% white (dim surface-level whisper)
- **Headline line 2:** 78px weight-700, 92% white (bold statement)
- **Headline line 3:** 78px weight-700, #C83C32 with 55%/25% red text-shadow glow (the radar emission)
- **Stat:** 260px weight-700, #C83C32, centered at radar center, 55%/25% red glow
- **Stat label:** 10px Space Mono, 8px letter-spacing, 45% red
- **Secondary stats:** 40px weight-700, 85% white with 8px Space Mono labels at 18% white
- **Body line 1:** 22px weight-300, 30% white
- **Body line 2:** 22px weight-400 italic, 50% white

### Atmospheric Elements
- **Left edge scan indicator:** 3px wide, full radar height, gradient peaking red at center
- **Bearing data:** Top-right, 8px Space Mono, 14% white with red-highlighted values
- **Ghost text:** "66" at 440px, 2% white, centered behind radar
- **Corner L-brackets:** 22px, 1px, 5% white

---

## Colors
- Background: #0A0A0A
- Primary accent: #C83C32
- Text: white at varying opacities
- Blips: white (distant) / red (close)

## Fonts
- Space Grotesk (headline, stat, body)
- Space Mono (tag, labels, data, metadata)

---

## Content Best Fit
- Scanning/detection: "I see what others miss"
- Omniscience/awareness: "I monitor everything"
- Systems builder positioning: "66 skills detected"
- Opportunity detection: "This one detects opportunities"
- Signal in noise: "Most scan the surface. I scan everything."

---

*Claude Design Engine by Rahaman Bin Ujit*
