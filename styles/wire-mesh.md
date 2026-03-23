---
name: wire-mesh
source: v108
quality-score: 4
status: KEEP
best-for: convergence/gravitational pull, systems-as-force, "everything revolves around X" messaging, singularity/one-system posts
---

# Wire Mesh Gravity Well

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


SVG wireframe 3D perspective grid warping toward center convergence point where the stat sits as gravitational mass. General relativity meets data poster.

## Concept
The poster IS a gravity well. Every wireframe line bends toward the stat number at the center -- it's the mass distorting spacetime. The viewer feels the pull.

## Layout Structure (1080x1350)

### Background
- `#0A0A0A` base
- SVG wireframe mesh with three element types:
  1. **Concentric ellipse rings** centered on stat position (cx:540, cy:756). 17 rings from rx:520 (outer, 6% white, 1px) down to rx:56 (event horizon). Spacing tightens inward -- outer rings 40-60px apart, inner rings 8-14px apart. Opacity increases inward: 6% outer to 13% inner.
  2. **Radial spoke lines** -- 16 lines from center to canvas edges at 4-5% white, 0.7-0.8px. Every 22.5 degrees.
  3. **Warped bezier grid lines** -- 9 horizontal + 8 vertical. Quadratic bezier (Q) curves with control points pulled toward the convergence center. Opacity 5-8%, stroke 0.8-1px.
- **Event horizon ring** at rx:56: 1.8px stroke at 25% red + 6px glow stroke at 8% red
- **Radial gradient mask** fades mesh edges (60% radius, 100% center to 15% edge)
- **Convergence glow**: 700px radial gradient, 14% red center, fading through 6%/2% to transparent

### Text Hierarchy
1. **Headline** (top: 80px, left: 72px) -- upper third, flat spacetime above the well
   - Dim line: 52px weight-300, 16% white (whisper/observation)
   - Main line: 82px weight-700, 93% white (bold claim)
   - Accent word: 82px weight-700, #C83C32 with 60%/25% red glow (the concept word)
2. **Stat** (centered on convergence point, cx:540 cy:756) -- the gravitational mass
   - Number: 260px weight-700, #C83C32 with 100px/40px red glow
   - Label: 10px Space Mono, 45% red, 6px letter-spacing
3. **Body** (bottom: 160px, left: 72px) -- grounding/conclusion
   - 22px weight-300, 28% white, line-height 1.6
   - Italic emphasis: 45% white
4. **Identity bar** (bottom: 56px) -- red dot + name left, role right

### Metadata
- Top corners: 8px Space Mono, 10% white (FIELD: ACTIVE / SYS-066)
- Left edge rotated -90deg: 7px Space Mono, 8% white (MASS/CURVATURE/HORIZON/FIELD)
- Right edge rotated 90deg: 7px Space Mono, 8% white (CONVERGENCE/DISTORTION/OBSERVER)
- Bottom center: 7px Space Mono, 8% white (duplicate mass data)
- Corner L-brackets: 22px, 1px, 5% white

### Typography Decisions (Why Text Goes Where)
- **Headline in upper third** = "flow" reading path. Text lives in undistorted spacetime above the gravity well. The claim is made BEFORE the viewer encounters the proof.
- **Dim opening line** (weight-300, 16%) = a gentle observation, the thought hasn't reached its conclusion yet. Light weight = preliminary.
- **Bold main line** (weight-700, 93%) = certainty building. The sentence gains mass as it progresses.
- **Red accent word with glow** = the payoff. Red because it's the gravitational concept made visible. The period is emphatic.
- **Stat at exact center of all rings** = the MASS causing every line to bend. Position IS the concept. Isolation strategy: generous space around it (the mesh IS the space).
- **Body at bottom third** = "grounding" per typography-mastery. After the gravitational journey down through the well, you land at the conclusion.
- **Edge metadata rotated** = whispered system data, physics parameters only close readers find.

## Technical Notes
- SVG mesh inside an `<svg>` with viewBox matching canvas size
- Use `<mask>` with `<radialGradient>` to fade mesh edges
- All mesh elements inside the masked `<g>`
- Convergence glow is a CSS `radial-gradient` div, z-index above mesh, below text
- Export: Puppeteer `headless: 'shell'`, `protocolTimeout: 120000`, `deviceScaleFactor: 4`, wait 2500ms
- File size: 15MB PNG / 2.4MB JPEG 95%

## Content Adaptation
- Change the convergence metaphor to match post topic:
  - Skills post: "Everything pulls toward one point of mass." / stat: 66
  - Revenue post: "Everything orbits one number." / stat: $X
  - Output post: "One system. Infinite pull." / stat: 10x
- The mesh structure stays constant -- only headline text, stat number, and body text change
- Keep the physics metadata consistent with the stat (MASS = stat number)

---

*Claude Design Engine by Rahaman Bin Ujit*
