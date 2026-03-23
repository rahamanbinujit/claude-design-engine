# Overprint Registration

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Concept
Simulates CMYK plate misregistration / risograph misalignment. Headline and stat rendered 3 times with slight positional offsets in different colors, creating a printing-error / proof-sheet aesthetic. Body text stays crisp single-layer for contrast. Print production metadata (crosshairs, color bars, density strips, proof stamps) completes the analog production feel on a dark digital canvas.

## When to Use
- Craft-focused posts ("how it's made", behind-the-scenes)
- Systems-thinking and process posts
- Posts about precision, alignment, or attention to detail
- "Proof of work" / showing your process
- Any post where analog/print production warmth fits the message

## Specs

### Canvas
- 1080x1350, #0A0A0A background
- Space Grotesk (headings, body), Space Mono (annotations, labels)

### Three-Plate Overprint System
Each overprinted element (headline, stat, divider) is rendered 3 times:

1. **Blue-grey plate** (furthest back)
   - Color: `rgba(74, 85, 104, 0.18)` for headline, `0.12` for stat
   - Offset: -4px left, -2px up
   - z-index: 1

2. **Red plate** (middle)
   - Color: `rgba(200, 60, 50, 0.32)` for headline, `0.25` for stat
   - Accent words at `0.50` opacity
   - Offset: +5px right, +3px down
   - z-index: 2

3. **White plate** (top / main readable layer)
   - Color: `#FFFFFF` (headline), `#C83C32` (stat, accent words)
   - Position: 0,0 (no offset)
   - z-index: 3

### Headline
- 82px, bold, -3px letter-spacing, line-height 1.04
- One accent word in #C83C32

### Body Text
- 24px, 45% white opacity, NO overprint (stays crisp)
- Max-width 680px
- The contrast between overprinted headline and crisp body creates the key visual tension

### Stat
- 150px, bold, -5px letter-spacing
- Triple-plate treatment matching headline offsets (but slightly larger: 5-6px)
- Main layer in #C83C32
- 12px mono label below at 28% white

### Registration Crosshairs (Corners)
- All 4 corners, 28px size
- 3 crosshairs per corner (white, red, blue-grey) each offset to match their plate positions
- White: 1.5px lines at 22% opacity, 14px circle at 18%
- Red: 1.5px lines at 45% opacity, circle at 40%
- Blue-grey: 1.5px lines at 25% opacity, circle at 22%

### Color Registration Bar
- Top-right, 4 swatches (14x14px, 4px gap): #C83C32, #FFFFFF, #4A5568, #0A0A0A (outlined)

### Density Strip
- Bottom-right, 5 bars (18x5px, 2px gap)
- Red at 100%, 75%, 50%, 25%, 10% opacity

### PROOF Watermark
- 200px, Space Mono bold, 3.5% white opacity
- Centered, rotated -35deg, letter-spacing 50px

### Proof Stamp
- Top-right area, "Proof Rev. 03" (or similar)
- 10px Space Mono, red at 25% opacity
- 1.5px red border at 20% opacity, rotated 3deg

### Plate Labels
- "K PLATE / R PLATE / B PLATE" at top in 8px mono
- Each in its respective color at low opacity (8-12%)

### Plate Info Line
- "Plate Registration: K+R+B / Offset: +3px, -2px"
- 9px Space Mono, 12% white opacity

### Print Annotations
- Left edge (rotated -90deg): plate/proof info
- Right edge (rotated 90deg): project/date info
- Bottom center: "CMYK REGISTRATION / PROOF COPY / NOT FOR DISTRIBUTION"
- All 9px Space Mono at 10% white

### Trim Marks
- All 8 corner positions (horizontal + vertical per corner)
- 22px length, 1px, 12% white opacity

### Divider
- 120px width, 3px height
- Overprinted: white rule + red rule offset 4px/2px

### Pull Quote
- 20px italic, 38% white, red left border (3px, 40% opacity)
- Subtle red shadow offset (+2px, 12% opacity)

### Ink Overlap Zones (optional)
- Radial gradients (180px diameter, 4% red) suggesting color bleed
- 1-2 placed asymmetrically

### Author Bar
- Bottom, border-top 1px at 7% white
- Name: 11px Space Mono, 40% white, uppercase, 2px letter-spacing
- Title: 10px Space Mono, 20% white, uppercase

## Layout Flow (top to bottom)
1. Tag (red mono) + plate labels
2. Plate info line
3. Overprinted headline (3 layers)
4. Overprinted divider
5. Body text (crisp)
6. Secondary stats row (optional)
7. Overprinted stat (3 layers) + label
8. Pull quote with subtle overprint
9. Author bar

## Key Rules
- ONLY headline, stat, and divider get overprint treatment
- Body text, labels, annotations stay crisp single-layer
- Offsets must be visible (4-6px) -- too subtle kills the concept
- Red plate always offsets RIGHT and DOWN
- Blue-grey plate always offsets LEFT and UP
- Print production elements (crosshairs, bars, stamps) are supporting -- never compete with content
- PROOF watermark must stay below 4% opacity

## Reference
- v62b: `/Volumes/Extream pro/Rahaman/Claude code/Founder OS/Example: V62B Overprint Registration poster

---

*Claude Design Engine by Rahaman Bin Ujit*
