---
name: telescope-viewfinder
quality-score: 4
status: KEEP
best_for: looking-vs-seeing metaphor, focus/clarity messaging, observation/resolution posts, "everyone else sees noise, I see signal" positioning, depth-of-vision content
---

# Telescope Viewfinder

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Concept:** The poster simulates looking through a telescope eyepiece. A large circle divides the canvas into two zones: the void outside (where "everyone" exists, unable to see) and the resolved field inside (where the observer sees clearly). The stat sits at the crosshair intersection -- the exact point of focus.

**Core metaphor:** Looking vs seeing. The telescope resolves what the naked eye cannot. The eyepiece circle IS the dividing line between the two.

---

## Visual Structure

### Eyepiece Circle (center of poster)
- **840px diameter** circle centered at (540, 640)
- **Main ring:** 2px solid, 14% white
- **Inner ring:** 0.5px solid, 6% white (7px inset)
- **Outer housing ring:** 3px solid, 4% white (7px outset)
- **Vignette:** Sharp radial-gradient fade. 88% transparent -> 92% at 65% opacity -> 95% at 92% opacity -> 98% full black. The edge must feel crisp like looking through an actual eyepiece, not a soft blur.

### Crosshair Reticle
- **Horizontal + vertical lines:** 1px, 10% white
- **Center gap:** 12% of line length (clear zone for stat)
- **Gradient fade** at both ends (transparent at edges of circle)
- **Major tick marks** every ~100px: 12px long, 14% white
- **Minor tick marks** between majors: 6px long, 8% white
- **Magnification scale labels** at major ticks: -30 to +30, 7px mono, 10% white

### Range Rings (concentric inside eyepiece)
- **Ring 1 (inner):** 260px, 1px dashed, 6% white. Label: 10'
- **Ring 2 (mid):** 520px, 1px dashed, 5% white. Label: 20'
- **Ring 3 (outer):** 780px, 0.5px dashed, 3.5% white. Label: 30'
- Labels in 8px mono, 12% white

### Field Stars
- **Large/bright (6 stars):** 3-4px, 10-13% white, some with box-shadow glow halos
- **Medium (10 stars):** 2-2.5px, 7-9% white
- **Dim field (14 stars):** 1-1.5px, 4-5% white
- Scattered throughout the eyepiece field = what everyone mistakes for random noise

### Scanning Brackets (around target)
- **4 corner brackets** framing the stat zone
- 28px size, 2px solid, 40% red
- Creates a "target lock" visual

### Center Glow
- 350px radial gradient, 14% red at center, transparent at 70%
- Positioned behind the stat

---

## Typography / Text Placement

### Outside the Eyepiece (the void)

**Tag:** "Observation Report" at top-left. 9px mono, red 55%, 3px letter-spacing. Red dot indicator (6px, with glow).

**Headline:** "Everyone / looks." at 56px, weight-300, 16% white. Positioned top-left at (80, 60). These words exist in the DARK, outside the instrument. Dim weight = weak, unfocused vision. They can't access what the telescope reveals. The position outside the circle IS their limitation.

### Inside the Eyepiece (the resolved field)

**"I SEE."** at 44px, weight-700, 93% white, 10px letter-spacing, uppercase. Centered horizontally, positioned ABOVE the stat. Bold = certainty through the instrument. Wide letter-spacing = deliberate, each letter isolated. The eyepiece ring IS the dividing line between these two headlines.

### At the Crosshair Intersection

**Stat "66"** at 200px bold #C83C32 with triple red glow (80/160/240px). Positioned at exact crosshair center. Everything points here: crosshairs converge, range rings center, scanning brackets frame, glow emanates.

**Stat label:** "AI Skills Resolved" at 9px mono, red 55%, 6px letter-spacing. Below stat.

**"Target Acquired" badge:** Below stat label. 1px red border (30%), dark bg (70% opacity), red indicator dot (5px with 8px glow), 8px mono text at red 65%.

### Bottom Zone (outside eyepiece)

**Secondary stats:** 5 / 2 / 10x at 42px bold 88% white. Labels at 8px mono 20% white. Deltas in optics vocabulary: "+5 resolved", "+2 confirmed", "+10x magnified" at 7px mono red 40%.

**Body text:** "Everyone else points the telescope at the sky / and sees scattered dots." at 21px weight-300, 30% white. Red rule (55px, 30% red). "I adjusted the focus. / And resolved a system." at 21px italic, 58% white.

**Observer log panel** (right-aligned): OBS / MAG / APERTURE / SEEING / TARGET / CLASS data rows at 7px mono, 12% white, values in red 35%.

---

## Ambient Elements

- **Focus ring data** around eyepiece perimeter: top/bottom at 10% white, left/right rotated at 18% red
- **Lens flare:** Subtle ellipse at upper-right of eyepiece, 2.5% white radial gradient, rotated -30deg
- **Rec indicator:** Top-right inside eyepiece. 6px red dot with glow + "Recording" at 7px mono red 40%
- **Faded BG "66"** at 500px, 1.2% white
- **Left accent stripe:** 3px, gradient peaking at eyepiece center height (22% red peak)
- **Corner L-brackets:** 16px, 1px, 6% white
- **SVG noise:** 2.5%
- **Identity bar:** Bottom-right

---

## Color Application

| Element | Color |
|---|---|
| Eyepiece rings | White 4-14% |
| Crosshairs + ticks | White 8-14% |
| Range rings | White 3.5-6% (dashed) |
| Field stars | White 4-13% |
| Headline outside | White 16% (dim = can't see) |
| Headline inside | White 93% (bright = resolved vision) |
| Stat + scanning brackets + glow | #C83C32 at various opacities |
| Focus ring text | White 10% / Red 18% |
| Observer data | White 12% / Red 35% |

---

## When to Use

- "Everyone else sees noise, I see signal" messaging
- Focus / clarity / vision metaphors
- Looking vs seeing (surface vs depth)
- "I resolved what others couldn't" positioning
- Observation / discovery / detection framing
- Any post where the argument is about depth of vision, not just effort

## Key Design Principle

The eyepiece circle is the poster's central architectural element. It physically separates two worlds: the void (where unfocused observers exist) and the resolved field (where the trained eye sees clearly). Every text placement decision reinforces this boundary. Text outside is dim and powerless. Text inside is bright and certain. The circle IS the argument.

---

*Claude Design Engine by Rahaman Bin Ujit*
