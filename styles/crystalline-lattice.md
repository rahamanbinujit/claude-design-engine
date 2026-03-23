---
name: crystalline-lattice
version: v127
quality-score: 4
---

# Crystalline Lattice

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Concept:** The poster IS a molecular crystal structure. Atoms (circles) connected by bonds (lines) in a hexagonal lattice pattern. Most atoms are dim (common elements). The central stat atom is red and larger -- the rare element that gives the crystal its properties. Remove it and the structure collapses.

**Best for:** System/capability posts, "one person doing many things" narratives, interconnection themes, irreplaceability concepts.

## Layout

- **1080x1350** (4:5 portrait)
- **Background:** #0A0A0A solid black
- **Headline:** Top-left (72px from edges), two lines with weight contrast
  - Line 1: 42px, weight 300, 35% white (vulnerability, question)
  - Line 2: 42px, weight 700, 95% white, key word in italic #C83C32 (consequence, answer)
- **Body text:** Below headline, 16px weight 400, 25% white
- **Central stat:** Dead center of canvas, 260px bold #C83C32, -8px letter-spacing. Radial red glow behind (15% opacity). "SKILLS" label below in 11px Space Mono, 6px letter-spacing, 35% white
- **Lattice:** SVG hexagonal bond network spanning full canvas. Bonds and nodes fade from dim (4-6% white) at edges to brighter (10-18% white) near center. Center-adjacent bonds glow red (12% opacity + Gaussian blur filter)
- **Element labels:** Positioned at lattice nodes. 18px Space Grotesk weight 600 at 50% white (symbol), 7px Space Mono at 15% white (name). Use 2-letter abbreviations (Mk, Ct, Ai, Ds, etc.)
- **Orbital rings:** 3 concentric ellipses around center. Inner: solid red 8% opacity. Middle: dashed white 3%. Outer: dashed white 3%, wider dash gap
- **Periodic table card:** Bottom-right, 160px wide, 1px border rgba(200,60,50,0.4). Contains atomic number (10px mono), element symbol (56px bold red), element name (9px mono), mass (8px mono)
- **Metadata:** Bottom-left, 4 lines of 9px Space Mono at 12% white, 2px letter-spacing. Lattice parameters and system identifiers

## Typography Decisions

- **Headline position = narrative entry.** Top-left because it's where the eye starts. The story begins before the viewer even sees the lattice.
- **Weight 300 vs 700 = vulnerability vs consequence.** "Remove one element" is light (gentle, hypothetical). "The structure collapses" is bold (definitive, unavoidable). The weight shift IS the emotional turn.
- **Italic red on "collapses" = the moment of impact.** The one word that changes everything gets the one color that demands attention.
- **"66" at center = isolation strategy.** Maximum empty space in the orbital rings around it. The space IS the emphasis. The number is the nucleus of the entire visual system.
- **Element symbols = discovery layer.** Small enough to not compete with the stat, large enough to reward closer inspection. The lattice is not decorative -- each node IS a skill.

## Color Map

- Background: #0A0A0A
- Primary text: rgba(255,255,255,0.95)
- Dim text: rgba(255,255,255,0.35)
- Whisper text: rgba(255,255,255,0.12-0.15)
- Accent: #C83C32
- Red glow: rgba(200,60,50,0.12-0.15)
- Bonds outer: rgba(255,255,255,0.04)
- Bonds mid: rgba(255,255,255,0.06)
- Bonds center: rgba(200,60,50,0.12) + blur filter
- Nodes: gradient from 6% to 18% white, center node 80% red

## Fonts

- Space Grotesk 300/400/600/700
- Space Mono 400

## Export

- PNG: ~6.75MB at 4320x5400 (deviceScaleFactor 4)
- JPEG: ~1.4MB at quality 90

---

*Claude Design Engine by Rahaman Bin Ujit*
