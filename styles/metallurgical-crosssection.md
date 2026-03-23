---
name: metallurgical-crosssection
version: v133
quality-score: 4
---

# Metallurgical Cross-Section

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Concept:** The poster IS a metallurgical microscope view of an alloy's grain structure. Voronoi-like crystal grain boundaries cover the canvas. Outer grains are dim white (common ferrite). Center grains glow red (the alloying elements that transform soft iron into tool steel). A hardness test diamond indentation at center provides the scientific proof. The metaphor: pure talent is soft, but 66 skills alloyed under pressure become steel.

**Best for:** Transformation/hardening narratives, "built under pressure" messaging, skill fusion themes, resilience/unbreakable concepts, materials science metaphors.

## Layout

- **1080x1350** (4:5 portrait)
- **Background:** #0A0A0A solid black
- **Headline:** Top-left (72px from edges), two lines with weight contrast
  - Line 1: 50px, weight 300, 15% white (soft, yielding, the raw material)
  - Line 2: 58px, weight 700, 93% white, key word in italic #C83C32 with glow (the hardened result)
- **Body text:** Bottom-third, two blocks separated by 48px red rule (30% opacity)
  - Dim block: 18px weight 300, 25% white (the common approach)
  - Bright block: 18px weight 400 italic, 52% white (the alloyed approach)
- **Stat:** Bottom-left, 180px bold #C83C32 with -8px letter-spacing, 60px/120px red glow. "SKILLS" label below in 10px Space Mono, 6px letter-spacing, 32% white
- **Secondary stats:** Right of main stat, 38px bold 85% white with 8px mono labels and metallurgy-themed deltas

## Grain Structure

- SVG Voronoi-like polygons covering full 1080x1350 canvas, ~80 cells in 12 rows
- Outer grains: 3.5-6% white boundaries, 0.8px stroke
- Mid grains: 6-9% white, 0.9px stroke
- Alloying zone (center band y=530-870): 14-32% RED boundaries, 1.2-1.5px stroke with Gaussian blur glow
- Core grains (y=640-770): maximum red 28-32% with glow filter
- Brightness gradient radiates from center outward

## Metallurgical Details

- **Precipitate particles:** 10+ red dots (2.5-3.8px, 28-35% red) scattered inside alloying grains
- **Inclusion particles:** 6 white dots (1-1.5px, 4-7% white) in outer grains
- **Hardness test diamond:** Diamond polygon at canvas center, 55% red stroke, with caliper measurement marks and "66 HRC" reading
- **Microscope reticle:** 480px circle at center, 1px 18% red border, crosshair lines with gradient fade, 10% inset glow
- **Scale bar:** Bottom-right, 80px bar at 28% white, "100 um" label at 22% white

## Skill Labels

- Surface skills in dim outer grains: 7-8px mono, 10-13% white (SOCIAL MEDIA, CANVA, EMAIL, etc.)
- Mid skills: 7.5px mono, 14-16% white (ANALYTICS, COPYWRITING, SEO, VIDEO)
- Alloying-zone skills in red grains: 8.5px mono, 38-45% red (AI SYSTEMS, AUTOMATION, GROWTH ENGINE, etc.)

## Instrument Panels

- **Alloy composition:** Top-right, 7.5px mono, 12% white labels with 40% red values (ALLOY, TYPE, HARDNESS, TENSILE, GRAIN SIZE, CLASS)
- **Magnification:** Right edge rotated, 8px mono 40% red (MAG 500X // ETCHANT: NITAL 2% // FIELD: BRIGHT)
- **Edge metadata:** Left/right rotated, 7px mono 10% white (alloy specs, grain boundary data)

## Typography Decisions

1. "Pure talent is soft." = weight 300 = the word IS soft, yielding, no resistance. Positioned above the grain structure = observing from outside the material
2. "Alloyed talent is steel." = weight 700 = hardness, density, resistance. "steel." in italic red = colored by the same substance as the grain boundaries. The weight shift IS the phase transformation
3. Grain structure dim-to-red = the visual argument. White boundaries = pure, soft. Red boundaries = alloyed, hard
4. Hardness test diamond = the measurement that proves the claim. 66 HRC = the 66 skills quantified as material hardness
5. Precipitate particles = tiny but critical. Each dot blocks a potential failure point

## Standard Elements

- Corner L-brackets: 8% white
- Left accent stripe: gradient peaking at grain center height
- SVG noise: 2.5%
- Ghost stat: 520px, 1.3% white, centered
- Center glow: 400px radial, 14% red
- Identity bar: bottom-right

## Technical

- 14MB PNG / 2.3MB JPEG 95%
- Puppeteer 4x export (4320x5400)
- headless: 'shell', protocolTimeout: 120000
- Wait 2500ms for fonts

---

*Claude Design Engine by Rahaman Bin Ujit*
