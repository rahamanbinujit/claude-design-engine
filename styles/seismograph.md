# Seismograph

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Best for:** Achievement posts, system activation narratives, before/after transformations, capability demonstrations, "quiet vs. explosive output" messaging, any content where the metaphor is "everything was baseline until this system activated and registered as a seismic event."

## Concept
A 5-channel seismograph readout where 4 channels show flat baseline noise and ONE channel (Channel 5: SYS-OUTPUT) erupts into a massive seismic event. The "66" is the magnitude reading at the epicenter of the eruption. Seismology metadata frames the poster as a recording station readout. The concept: most output registers as background noise, but the system's output is a seismic event that nearly broke the instrument.

**Evolution:** v99/v110 used a single trace. v128 uses 5 stacked channels (BHZ, BHN, BHE, SHZ, SYS-OUTPUT) like a real multi-channel seismograph drum recorder, making the contrast between baseline and eruption far more dramatic.

## Layout Structure (1080x1350)

| Zone | Position | Content |
|------|----------|---------|
| **Tag** | Top-left (62px) | "Seismic Event Log" in mono red 60%, 4px letter-spacing, red dot |
| **Rec indicator** | Top-right (58px) | Red dot (7px) with glow + "Recording" in mono red 50% |
| **Headline 1** | Top (100px) | "Everything was quiet." at 54px weight-300 18% white |
| **Headline 2** | Below (116px gap) | "Until the system activated." at 70px weight-700 94% white, "system" in red |
| **Instrument panel** | Below headline (292px) | Channel listing + station ID in 8px mono 14% white |
| **Richter bar** | Left edge (350px) | 8 segments graduating red-to-white (intensity scale) |
| **Traces** | Middle (320-880px) | SVG 5-channel seismograph, 560px height |
| **Stat** | Center of eruption (480px) | "66" at 230px #C83C32 with triple glow, labels above/below |
| **Mag scale** | Right side (340px) | 6.6 to 0.0, top entries hot red |
| **Secondary stats** | Below traces (930px) | 5 / 2 / 10x at 44px bold with seismology deltas |
| **Body** | Lower (1055px) | Two lines: observation (30%) + conclusion (58% italic) |
| **Data panel** | Right lower (1055px) | Station/Event/Depth/Type/Status in 7.5px mono |
| **Identity** | Bottom (42px from bottom) | Name + role |

## Seismograph Trace Specs

### Grid
- 9 vertical + 5 horizontal lines at 4% white, 0.5px stroke
- Paper feed marks like a drum recorder

### Channel 1-4 (Baseline)
- **Stroke:** 0.9-1.3px, white at 7-12% opacity (dimmer for lower channels)
- **Baseline noise:** 2-4px oscillations, flat
- **Sympathetic response:** At event time, amplitude increases to 30-60px on CH1-2, 20-40px on CH3-4
- **Labels:** "CH1 BHZ" through "CH4 SHZ" at 9px mono, 10-16% white
- **"BASELINE"** ghost labels at 5-7% white in quiet zone

### Channel 5: SYS-OUTPUT (The Eruption)
- **Pre-event:** 18% red opacity, 1.3px, flat baseline
- **Buildup:** 40% red, 1.8px, rapid amplitude increase over ~30px horizontal
- **Main eruption:** #C83C32, 2.8px stroke with Gaussian blur glow filter (stdDeviation: 5)
  - Peak amplitude: ~480px displacement (baseline at y=504, peak at y=20)
  - Rapid oscillations: zigzag pattern between y=20 and y=360 over ~65px horizontal
  - Gradually decreasing amplitude toward decay
- **Ambient glow:** 8% red, 12px stroke, wide Gaussian blur (stdDeviation: 16)
- **Post-eruption decay:** Aftershock oscillations (8-15px), 35% red
- **Post-event baseline:** Returns to 18% red, flat
- **Label:** "CH5 SYS" at 10px mono, 55% red, bold

### Arrival Lines
- **P-wave:** Dashed line at event onset, 6% white, label "P-WAVE" at 16% white
- **S-wave:** Dashed line at eruption peak, 12% red, label "S-WAVE" at 40% red

### Shock Rings
- 3 concentric dashed circles from epicenter point (CH5 baseline at eruption center)
- Radii: 45px / 100px / 170px
- Opacity: 10% / 6% / 4% red, 0.5-0.8px stroke

### Time Axis
- 10 ticks from 00:00 to 01:20
- Event time "00:33" highlighted in red 35%
- All others at 8% white, 7px mono

## Stat Treatment
- "66" at 230px bold #C83C32 centered over eruption
- Triple red glow: 80px / 160px / 260px
- "/// Magnitude ///" above: 9px mono red 55%, 6px letter-spacing
- "AI Skills Deployed" below: 9px mono red 55%, 5px letter-spacing

## Typography Decisions

| Element | Size | Weight | Opacity | Why |
|---------|------|--------|---------|-----|
| Headline 1 | 54px | 300 | 18% white | The silence before. Light = calm, stillness. Dim = fading, already past tense. |
| Headline 2 | 70px | 700 | 94% white | The event. Bold = seismic force. "system" in red = source of the earthquake. |
| Body line 1 | 22px | 300 | 30% white | Observation. The 4 flat channels summarized. |
| Body line 2 | 22px | 400 italic | 58% white | The technician's astonishment. Emotional voice. |
| Stat | 230px | 700 | 100% red | The magnitude reading at peak displacement. |
| Labels | 7-9px | 400/700 | 10-55% | Instrument data. Dimmer = less important. CH5 brightest. |

## Color Usage
- **#0A0A0A** background = the recording paper, dark like a seismograph drum
- **#C83C32** = the eruption, the event, the signal. Everything red is part of the same event.
- **White at varying opacity** = the baseline world, the instruments, the before/after
- **Red glow** = seismic energy radiating from the epicenter

## Key Design Principles
1. The 5-channel layout IS the argument. 4 flat lines + 1 erupting line = the contrast is self-evident.
2. Sympathetic response on CH1-2 = even baseline channels felt the event.
3. Red continuity: "system" in headline -> Channel 5 trace -> "66" stat -> shock rings -> time marker = one red thread.
4. The 300-to-700 weight shift in headline = the transition from quiet to event.
5. P-wave before S-wave = seismological accuracy adds credibility.
6. Aftershock oscillations in decay zone add scientific authenticity.
7. Richter scale bar and magnitude scale provide measurement context.
8. HUD elements add scientific credibility without cluttering.
9. No decorative elements beyond the seismological metaphor.

## File Size
- PNG: ~4.6MB
- JPEG 95%: ~1.66MB (use this for LinkedIn)

## Reference
- Original: v99 (single trace)
- Refined: v110b (single trace, enhanced)
- Evolved: 5-channel multi-trace version
- Score: 4/5

---

*Claude Design Engine by Rahaman Bin Ujit*
