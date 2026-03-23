# RF Spectrum Allocation Chart Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Niche:** Radio Frequency Spectrum Allocation Chart (FCC/NTIA style)
**Tested:** v242 | **Quality Score:** 4/5 | **Status:** KEEP

## Visual DNA
- Dense horizontal colored band rows filling a bordered chart area
- Each row subdivided into 2-5 variable-width colored segments
- 11 service categories, each with a unique color
- Seeded PRNG for deterministic, reproducible layouts
- No text inside the chart area -- pure color blocks
- All labels in clear margin zones (header, legend, footer)
- Government document aesthetic (doc numbers, revision dates, allocation authority)

## Color Palette
- Background: #FAFAF8 (warm off-white)
- Strategy: #2D5F8A (steel blue)
- Content: #C83C32 (red -- brand accent)
- Design: #6B8E5A (sage green)
- Video: #8B6BAE (purple)
- Marketing: #D4943A (amber)
- AI Systems: #3A8F8F (teal)
- Social: #CC7B8E (dusty rose)
- Operations: #7A8B6E (olive)
- Finance: #5A7A9A (slate blue)
- Development: #9A7A5A (warm brown)
- Personal: #6A6A8A (cool gray)

## Typography
- Space Grotesk: title, name, big number
- Space Mono: all labels, metadata, legend, doc IDs

## Key Techniques
- shade() function: +-28px brightness variation per service for tonal variety
- Seeded PRNG (seed=42): deterministic segment distribution
- 33 rows x 2-5 segments each, pool of 330 segments (5x service cycle)
- Thin white borders between segments (0.3px) and rows (0.5px)
- 4-column CSS grid legend with color swatches + counts

## Best For
- "Full spectrum" / comprehensive capability messaging
- "No gaps, no dead frequencies" positioning
- Dense information-rich aesthetic
- Government authority metaphor
- Systems-coverage narrative
- Light-mode feed content

## Structure
```
[Header zone - clear bg]
  Doc ID label
  "One Person. Full Spectrum." title
  Subtitle with revision number
  "66" big number (top-right)

[Spectrum chart - bordered area]
  33 rows of dense colored segments
  No text inside

[Legend zone - clear bg]
  4-column grid: color swatch + service name + count

[Footer zone - clear bg]
  Rahaman / Senior Marketing Executive
  Document reference numbers
```

---

*Claude Design Engine by Rahaman Bin Ujit*
