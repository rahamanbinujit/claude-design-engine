---
name: rx-label
experiment: v211
quality-score: 4.5
status: KEEP
---

# Rx Label / Prescription Bottle Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Concept
Pharmacy prescription label — clinical information architecture applied to founder/personal brand content. Dense, functional, every element has a specific pharmaceutical purpose.

## Palette
- Background: warm off-white #F0EDE6 (pharmacy bag)
- Label: pure white #FFFFFF
- Borders: near-black #1A1A1A
- Accent: pharmacy orange #E85D26 (header bar, strength, key values)
- Warning yellow: #FFF3CD border #E0C36A
- Warning red: #F8D7DA border #D4848A
- Warning blue: #D1ECF1 border #9AC9D4
- Text: #1A1A1A primary, #666 secondary, #888 tertiary, #999 quaternary

## Typography
- **Drug name (hero):** Inter 900, 52px, uppercase, 2px letter-spacing
- **Patient name:** Inter 800, 32px
- **Data values:** JetBrains Mono 700, 15-22px
- **Field labels:** JetBrains Mono 400, 9-10px, uppercase, 1.5px spacing, #888
- **Directions:** Inter 600, 20px
- **Warnings:** Inter 700, 11px, uppercase
- **Footer/meta:** JetBrains Mono 400, 10-11px

## Layout Structure
1. **Pharmacy header bar** (orange bg, white text) — brand + location
2. **Rx info row** (4 grid cells) — Rx#, dates, DEA
3. **Patient section** — name + DOB + prescriber
4. **Drug section** (light gray bg) — HERO: drug name + generic + strength + form
5. **Directions** — labeled, multi-line
6. **Warning stickers** — 3 colored badges, horizontal
7. **Composition table** — ingredients with dashed dividers + amounts
8. **Qty/Refills/Days row** (3 grid cells)
9. **Footer** — barcode + NDC + pharmacist + lot info

## Key Design Rules
- Every section bordered with 1.5px #1A1A1A
- Grid cells within rows also bordered
- ONE accent color only (orange) — used sparingly on header + key values
- Barcode is CSS div bars, not an image
- Warning stickers use authentic pharmaceutical color coding
- Monospace for ALL data fields — clinical precision aesthetic
- Sans-serif (Inter) for names + drug name + directions only

## Content Mapping
- Drug name = system/brand metaphor
- Generic name = parenthetical description
- Strength (mg) = total skills/components
- Active ingredients = skill domains with mg = count
- Directions = operating philosophy
- Warnings = clever side effects
- Qty = total skills, Refills = unlimited, Days = 365
- NDC = unique identifier, Lot# = one-of-one
- RPh = real name + title

## Best For
- Founder/solopreneur positioning
- "One-person system" messaging
- Skill breakdowns with numbers
- Clever, format-authentic content

---

*Claude Design Engine by Rahaman Bin Ujit*
