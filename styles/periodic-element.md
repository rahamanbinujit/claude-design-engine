# Periodic Element

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Style:** Chemistry meets data poster. A single undiscovered periodic table element dominates the center, surrounded by the dim ghost grid of all 118 known elements. The system is the new element -- unique, synthesized, unclassifiable.

**Best for:** "One-of-a-kind" narrative, uniqueness, creation, things that don't fit existing categories.

---

## Specs

### Background
- #0A0A0A solid
- Faded bg element symbol ("Sy") at 650px, 1.2% white, centered

### Ghost Periodic Table Grid
- 18-column x 7-row CSS grid (rows 1-7 of real elements: H through Og)
- Cell size: 48x48px, 3px gap
- Borders: 0.5px, 6% white
- Cell bg: 1.5% white
- Symbol text: 12px Space Mono bold, 9% white
- Atomic numbers: 5.5px Space Mono, 5% white, top-left of cell
- Empty cells (lanthanide/actinide gaps): no border, no bg
- Position: centered horizontally, ~290px from top
- Radial gradient fade (360x420px, #0A0A0A center to transparent) clears center zone for the element card

### Center Element Card
- 290x330px, centered
- Border: 2.5px #C83C32
- Background: rgba(200,60,50,0.025)
- Box-shadow: 80px/160px/240px red glow layers + inset 50px
- Atomic number: 16px Space Mono, red 65%, top-left
- Group label: 7px Space Mono, red 40%, top-right, uppercase
- Symbol: 130px Space Grotesk bold, #C83C32, letter-spacing -4px, text-shadow 80px/160px red glow
- Element name: 17px Space Grotesk weight-300, 55% white, letter-spacing 10px, uppercase
- Atomic mass: 32px Space Mono bold, #C83C32, letter-spacing 2px
- Mass label: 7px Space Mono, 22% white, letter-spacing 3px, uppercase

### Electron Shells (SVG)
- 3 concentric dashed ellipses centered on card
- Shell 1 (K): 195px radius, 0.8px, red 16%, dash 6,6
- Shell 2 (L): 270px radius, 0.8px, red 11%, dash 8,6
- Shell 3 (M): 340px radius, 0.8px, red 7%, dash 10,6
- Electrons: red circles with glow halos
  - Shell 1: 2 electrons, 4px, 80% opacity, 8px glow halo at 30%
  - Shell 2: 4 electrons, 3-3.5px, 45-60% opacity, 7px glow halo at 20%
  - Shell 3: 5 electrons, 2.5px, 35% opacity
- Shell labels (K/L/M) in 6px Space Mono, red 9-18%

### Classification Badge
- Above center card
- "Unclassified // Synthesized // Stable"
- 8px Space Mono, red 50%, letter-spacing 4px, uppercase
- 0.8px red 20% border, 5px 18px padding
- Dark bg (rgba(10,10,10,0.9)) to separate from grid

### Headline
- Top zone (105px from top), 60px margins
- Line 1: 58px Space Grotesk weight-300, 18% white (dim observation)
- Line 2: 72px Space Grotesk weight-700, 95% white (bold declaration)
- Key word in #C83C32 (connects to element card)

### Isotope Notation (top-right)
- Scientific shorthand: mass number / symbol / atomic number stacked
- Mass: 34px weight-300, 8% white
- Symbol: 52px bold, red 18%
- Number: 24px weight-300, 5% white

### Body Text
- Bottom third (~885px from top)
- 21px Space Grotesk weight-300, 35% white
- Italic emphasis at 60% white
- 55px red rule below (22% red)

### Secondary Stats
- 3 stat items in a row below body
- Number: 38px bold, 88% white
- Label: 7px Space Mono, 18% white, uppercase
- Delta: 7px Space Mono, red 40% (chemistry-themed: bonds, isotopes, yield)

### Properties Panel (bottom-left)
- 7px Space Mono, 10% white, letter-spacing 2px, uppercase
- Values highlighted in red 30%
- Fields: Element, Mass, Period, Half-Life, State, Synthesized

### Electron Config (bottom-right)
- 7px Space Mono, 10% white
- Shell values in red 25%

### Stability Bar
- Below element card, centered
- 180px track at 4% white, full red gradient fill
- Labels in 6px Space Mono

### Markers
- "DISCOVERED [YEAR]" rotated vertically on right side
- 8px Space Mono, red 50%, letter-spacing 4px

### Standard Elements
- Tag with red dot (top-left)
- Corner L-brackets (35px inset, 6% white)
- SVG noise overlay at 2.5%
- Ambient radial red glow (600px, 4% red)
- Identity bar (bottom-right)

---

## Metaphor Logic
- The ghost grid = the known universe, all 118 classified elements, everything already discovered
- The center element = the exception, the synthesis, the thing no existing category contains
- The radial fade = making room, displacing the known to accommodate the new
- Electron shells = bonding potential, how this element connects to other systems
- "66.000" as atomic mass = precision measurement of capability
- Atomic number "1" = there is only one of this element

## Typography Decisions
- Dim weight-300 headline = whispered absence ("not on the table")
- Bold weight-700 headline = declared creation ("built a new element")
- Red keyword in headline links visually to red element card (visual thread)
- "SYSTEMIUM" wide letter-spacing = monumental, carved into the table
- Ghost element symbols dim = ordinary, classified, unremarkable
- Center "Sy" glowing = alive, unique, impossible to ignore

---

*Claude Design Engine by Rahaman Bin Ujit*
