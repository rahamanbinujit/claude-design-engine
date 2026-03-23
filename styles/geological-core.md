# Geological Core Sample

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5 | **Status:** KEEP

---

## What It Is
A poster divided into horizontal strata bands of subtly varying darkness, mimicking a geological core cross-section. The headline is etched into upper strata (surface opinions). The stat number sits in the deepest, warmest stratum as a valuable mineral deposit. A depth scale runs along the left edge. The reading direction IS the drill path.

## Best For
- "Proof runs deep" narratives
- Depth/substance over surface-level takes
- Discovery and uncovering themes
- Patience/long-term investment posts
- "What most people miss" content

## The Metaphor
Surface = opinions, noise, easily eroded. Depth = proof, density, permanence. The viewer drills through layers of doubt to reach undeniable evidence buried at the core.

---

## Specs

### Canvas
- 1080x1350px, #0A0A0A base

### Strata Bands
- 8-12 horizontal bands, 80-180px tall each
- Colors alternate: #090909, #0A0A0A, #0B0B0B, #0C0C0C, #0D0D0D, #0E0E0E
- Each band has a unique SVG texture (fine dots, diagonal lines, crosshatch, horizontal lines) at 2-3% white
- Boundary lines: 1px at 4-6% white between strata
- **Deposit boundary:** 2px, rgba(200,60,50,0.12) -- the red fault line

### Deposit Stratum
- Background: #0B0808 (warm dark tint, not neutral gray)
- SVG mineral pattern: red dots (rgba(200,60,50,0.03-0.04)) in repeating pattern
- 6-10 mineral fleck elements (2-4px circles, red 6-12% opacity) scattered
- Red pressure dots (3-4px, rgba(200,60,50,0.15)) clustered along deposit boundary

### Depth Scale (Left Edge)
- Vertical line: 1px, rgba(255,255,255,0.04)
- Tick marks at each boundary: 20px wide, rgba(255,255,255,0.06)
- Depth labels: 7px Space Mono, rgba(255,255,255,0.10), 1px letter-spacing
- Deposit depth label in rgba(200,60,50,0.25)

### Core Drill Line
- 2px vertical line, gradient: white 2% top -> red 12% at deposit -> white 2% bottom
- Drill bit marker: small CSS triangle (6px) in rgba(200,60,50,0.30) at deposit depth

### Core Labels (Right Edge)
- 8px Space Mono, rgba(255,255,255,0.10), 2px letter-spacing, uppercase
- Name each visible stratum: "Surface", "Topsoil", "Sediment", "Bedrock", "Dense Rock", "Deposit", "Foundation"
- Deposit label in rgba(200,60,50,0.30)

### Typography

**Headline (upper strata, ~120px from top):**
- Line 1 "They said": 52px, weight-300, rgba(255,255,255,0.14) -- surface erosion, fading
- Line 2 "one person": 80px, weight-700, rgba(255,255,255,0.92) -- etched in rock
- Line 3 "cannot run": 80px, weight-700, #C83C32 -- fault line, geological stress
- Line 4 "a system": 80px, weight-700, rgba(255,255,255,0.92)
- Letter-spacing: -3px on bold lines, -1px on light line

**Mid-depth context (~600px):**
- 18px, weight-300, rgba(255,255,255,0.20)
- Italic emphasis line at rgba(255,255,255,0.35)
- Transitional text -- the "drilling deeper" moment

**Stat (deposit stratum, ~1000px):**
- 260px, weight-700, #C83C32
- text-shadow: 0 0 120px rgba(200,60,50,0.35), 0 0 50px rgba(200,60,50,0.15)
- Radial glow behind: ellipse 500x180px, rgba(200,60,50,0.10) center
- Label below: 10px Space Mono, rgba(200,60,50,0.40), 6px letter-spacing

**Deposit tag:**
- 8px Space Mono, rgba(200,60,50,0.25), 2px letter-spacing
- "Mineral Deposit Identified / Extraction: Complete / Purity: 99.7%"

**Body (below deposit, ~1200px):**
- Line 1: 22px, weight-300, rgba(255,255,255,0.28)
- Line 2: 22px, weight-400, rgba(255,255,255,0.45), italic

### Metadata
- Top: 8px Space Mono, rgba(255,255,255,0.08), 3px letter-spacing
- Bottom: 8px Space Mono, rgba(255,255,255,0.08), 2px letter-spacing
- Format: "Core: [ID] / Depth: [X]m / Sample: Verified / Composition: [topic]"

### Standard Elements
- Corner L-brackets: 22px, 1px, 5% white
- Identity bar: bottom-right, red dot + name in 8px mono 15% white
- SVG noise: 2.5% opacity

---

## Text Placement Logic

The reading direction IS the drill path:
1. **Surface (top)** = opinions/claims -- light, eroded, fading. Weight-300.
2. **Upper rock (120-400px)** = the inscription -- bold headline etched in stone. Heavier than surface but still near the top.
3. **Mid-depth (500-700px)** = transition -- "the deeper you drill" moment. The text exists at the geological midpoint.
4. **Deposit (1000px+)** = the proof -- red, glowing, massive. The deepest text is the most important.
5. **Below deposit** = conclusion after discovery. You've found the truth.

Each vertical position carries geological meaning. Never rearrange the reading order.

---

## Adaptations

**For different stats:** Change deposit stratum position proportionally. The stat always lives in the deepest colored band.

**For different topics:** Rename strata labels to match the metaphor. E.g., for a learning post: "Surface: Tutorials", "Sediment: Practice", "Bedrock: Experience", "Deposit: Mastery".

**For carousel:** Each slide can be one stratum -- drilling deeper with each swipe. Final slide = the deposit.

---

*Claude Design Engine by Rahaman Bin Ujit*
