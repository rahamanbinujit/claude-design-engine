# Style: Lighthouse Beam

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Summary
Dark maritime poster with a lighthouse structure at left emitting a visible red beam cone sweeping across the canvas. Illuminated vessel dots appear in the beam zone; dark vessels are invisible outside it. The beam reveals what darkness hides. Typography descends from dim to bold to red italic, mirroring the narrative arc of darkness to revelation.

## Specs
- **Size:** 1080x1350
- **Background:** #0A0A0A
- **Accent:** #C83C32 (beam, light source, vessel glow, reveal headline, ghost stat)
- **Fonts:** Space Grotesk (headlines, body), Space Mono (labels, data strip, coordinates, author role)
- **Grid:** Subtle nautical chart grid (vertical 108px spacing at 1.2% white, horizontal 135px at 0.8% white)

## Visual Elements
- **Lighthouse:** Tapered base (clip-path polygon, 36px wide, 360px tall), lantern room (56px wide, 28px), gallery platform (68px, 1.5px border), dome (32px radius top). Positioned at left ~120px. Three faint red horizontal stripes.
- **Light source:** 16px radial gradient at lantern, rgba(200,60,50,1) center to transparent. Triple box-shadow (30/60/120px spread).
- **Beam cone:** Layered approach: outer cone (clip-path polygon, 20% red fading to transparent), inner core (12% to transparent, narrower), plus 1px center line (50% red fading). 900px reach from lighthouse.
- **Vessels (lit):** 17 dots, 4-5px, red-tinted (45-60% opacity), subtle glow. Scattered in beam zone.
- **Vessels (dark):** 10 dots, 3px, 2.5% white. Invisible without the beam.
- **Ghost "66":** 180px, weight 700, 8% red opacity. Bottom-right, in the beam's far reach.
- **Horizon line:** 1px gradient (0 to 7% white center to 0). Positioned at bottom 520px.
- **Sea zone:** Below horizon, subtle gradient to 0.8% white.

## Typography (Position = Meaning)
- **Tag:** "/// Maritime Chart ///" mono 10px, 5px letter-spacing, 13% white. Top-left authority slot, whisper volume.
- **Chart number:** "Chart NM-066" mono 10px, red 45%. Top-right.
- **Dim headline:** "The dark hides" -- 52px, weight 300, 13% white. The text IS darkness. Barely visible = embodying what it describes.
- **Bold headline:** "everything." -- 82px, weight 700, 90% white, -4px tracking. Size jump from 52 to 82 = darkness EXPANDING. The period is finality.
- **Reveal headline:** "The beam reveals 66." -- 38px, weight 500, italic, #C83C32. "66." at 50px/700/normal. Red = the beam's color bleeding into the text. This IS the turn.
- **Body text:** Right-aligned, in the illumination zone. Statement at 16px/300/20% white. Thesis in italic 14px/400/38% white. Position = revelation (lives where light reaches).
- **Data strip:** Mono 8.5px on the horizon line. Key/value pairs with red accent on values. Position = the boundary between seen and unseen.
- **Author bar:** Bottom-grounded. Name 13px/500/28% white. Role mono 9px/11% white uppercase.

## Concept
The lighthouse IS the personal brand. It doesn't chase ships -- it stands still and makes everything visible. The beam IS the system (marketing + AI + content) that creates reach. 66 vessels = 66 skills made visible. Without the beam, they exist but no one knows. The dark vessels outside the beam prove this: capability without visibility is invisible.

## When to Use
Best for posts about visibility, personal branding, building in public, the difference between having skills vs being seen, "standing still while the world comes to you," compound reach, the lighthouse principle (attract don't chase), and making the invisible visible.

---

*Claude Design Engine by Rahaman Bin Ujit*
