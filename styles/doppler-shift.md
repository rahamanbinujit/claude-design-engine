# Doppler Shift

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Category:** Physics / Spectroscopy
**Concept:** Text itself demonstrates the Doppler effect -- approaching text is blue-tinted and compressed, receding text is red-tinted and expanded. The poster IS a spectrograph.
**Best for:** Motion/direction messaging, "everything moves toward me" positioning, reference frame arguments, speed vs direction content, center-of-gravity claims.

---

## Layout (1080x1350)

- **Background:** #0A0A0A with subtle spectral gradient overlay (blue 6% left edge, red 6% right edge)
- **Observer axis:** Vertical dashed line at x=540 (10% white) with "OBSERVER" label. This is the reference frame.
- **Absorption lines:** ~23 vertical 1px lines across full height. Blue cluster LEFT (tighter spacing 8-15px, 6-12% blue). Red cluster RIGHT (wider spacing 20-40px, 7-13% red). 3 neutral at center (3-4% white). The spacing IS the measurement.
- **Wave visualization:** SVG sine waves. Left: compressed oscillations (20px wavelength, blue 22%). Center: transition (white 8%). Right: stretched oscillations (120px wavelength, red 22%).
- **Spectrum bar:** 4px horizontal gradient blue-to-red with center pointer triangle.

## Typography Rules

### Approaching text (LEFT, BLUE)
- Left-aligned
- Blue tint: rgba(70,120,220, 0.85 fading to 0.55)
- Letter-spacing: -3px to -1px (COMPRESSED)
- Weight: 700
- Size: 64px
- The compression = blueshift

### Neutral text (CENTER)
- Center-aligned
- Mono, 11px, 18% white
- Letter-spacing: 10px
- The still point

### Receding text (RIGHT, RED)
- Right-aligned
- Red tint: 45% dimming to 95% #C83C32
- Letter-spacing: 6px expanding to 14px per character (EXPANDED)
- Weight: 700
- Size: 74px
- The expansion = redshift

### Key principle
The entire headline IS one Doppler experiment. Read left to right = complete spectral shift from blue-compressed to neutral to red-expanded.

## Stat
- "66" at 240px bold #C83C32, centered at observer position
- Triple red glow (100px/200px)
- "Observer Position" label above

## Supporting Elements
- Direction arrows: "APPROACHING" left (blue 30%), "RECEDING" right (red 30%)
- Wavelength labels: "380-500nm" left, "620-750nm" right
- Spectrum bar with blueshift/redshift labels
- Physics-themed stat deltas (+wavelengths, +frequencies, +amplitude)
- Instrument panel: SRC/VEL/SHIFT/CLASS

## Brand
- Fonts: Space Grotesk (headlines, body), Space Mono (labels, metadata)
- Colors: #0A0A0A bg, #FFFFFF text, #C83C32 red accent, rgba(50,90,200) blue accent
- SVG noise 2.5%, corner brackets, accent stripe, identity bar

## Export
- 4320x5400px PNG (deviceScaleFactor: 4)
- JPEG 95% for delivery (~2.2MB)

---

*Claude Design Engine by Rahaman Bin Ujit*
