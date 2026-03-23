# Circuit Board / PCB Layout Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Niche:** Printed Circuit Board design / Electronics hardware
**Experiment:** v225
**Status:** KEEP

## Visual Identity
- Dark green solder mask background (#1A5C2A) with subtle fiberglass texture (repeating-linear-gradient at 0.015 opacity)
- Gold/amber copper traces (#C8A84E, #B4A050) for pathways, pads, vias
- Black (#0D0D0D) IC chip packages with gray borders
- Cream (#E8E4D0) silkscreen text layer

## Typography
- **Share Tech Mono** -- all silkscreen labels, reference designators, metadata (technical precision)
- **Exo 2 900** -- board title, IC chip names (modern engineering authority)
- All-caps with wide letter-spacing throughout
- Sizes: Board title 28px, IC names 13px, IC values 20px, ref designators 8-9px, metadata 7-8px

## Composition Rules
- Central CPU/processor anchors the design (largest IC package)
- Peripheral ICs radiate outward connected by copper traces
- Traces route at 90-degree angles (PCB convention)
- Board edge with 2px border, mounting holes at 4 corners
- Power rails (VCC, GND) as thick horizontal traces top/bottom
- Data bus as parallel traces in bottom zone
- Fiducial marks at corners (circle-in-circle)

## Component Library
- **IC Chips:** Black rectangle with pin notch (half-circle top), side pins (gold rectangles), ref designator above
- **CPU:** Larger IC with pins on all 4 sides
- **Resistors:** Color-banded rectangles (brown/gold/black stripes)
- **Capacitors:** Two parallel horizontal lines (top/bottom borders)
- **Test Points:** Gold circles with radial gradient
- **Vias:** Small circles (fill or stroke-only) scattered for density
- **Crystal Oscillator:** Rounded rectangle with frequency label
- **Edge Connector:** Vertical strip with horizontal pin pads

## Trace Width Hierarchy
1. Power rails: 4px (0.3 opacity)
2. Main signal traces: 3px
3. Secondary signal: 2-2.5px
4. Routing/ground fill: 1-1.5px (0.15-0.2 opacity)

## Content Mapping
- Each skill domain = IC chip with PCB-authentic name
- Skill count = component value number
- CPU = the founder/system core with total skill count
- Crystal frequency = total skills (66MHz)
- Data bus width = DATA[0:65]
- Board part number = SYS-066

## What Makes This Work
- Extreme authenticity -- every element exists on real PCBs
- The "circuit" metaphor maps perfectly to interconnected skills
- Green + gold color palette is instantly recognizable as "circuit board"
- Dense but organized -- PCBs are information-rich by nature
- Technical aesthetic appeals to builder/engineer audience

---

*Claude Design Engine by Rahaman Bin Ujit*
