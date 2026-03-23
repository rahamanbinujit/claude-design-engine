# Safety Data Sheet (SDS/MSDS) Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Origin
v214 experiment. Inspired by real OSHA/GHS Safety Data Sheets -- the 16-section regulatory documents that classify hazardous materials.

## Visual DNA
- **Background:** #FAFAF8 warm off-white (institutional paper)
- **Palette:** Black #1A1A1A primary text, #C83C32 red hazard accent, #444-#888 gray hierarchy
- **Typography:** IBM Plex Mono / Space Mono for body (regulatory document feel), Space Grotesk for headlines and product name
- **Layout:** Full-width sections with numbered section headers (SEC. 1, SEC. 2, etc.), composition data tables, key-value data rows
- **Signature elements:** Red left-edge hazard stripe, red DANGER signal word banner, GHS diamond pictograms (rotated squares with red border and white fill), composition table with CAS numbers, ghost "66" watermark

## Structure
1. **Header block** (2px black border): Document title "SAFETY DATA SHEET" + product name at 42px bold + SDS number and date
2. **Signal word banner** (red bg, white text): "DANGER" + hazard classification
3. **GHS pictogram row**: 5 diamond-shaped hazard symbols with labels
4. **Numbered sections** (SEC. 1 through SEC. 11, skip non-relevant ones): Identification, Hazard ID, Composition table, Exposure Controls, Toxicological Information
5. **Headline block** (2px black border-top): Three-line headline hierarchy (dim observation, bold statement, italic red punchline) + body text
6. **Footer**: SDS reference number + author name/role

## Key Rules
- The composition table is critical -- it lists real skills as "chemical components" with CAS numbers, concentrations, and classifications
- Section numbers don't need to be sequential -- skip to relevant SDS sections (1, 2, 3, 8, 11) for density without clutter
- GHS diamonds are 45-degree rotated squares, NOT circles
- Signal word banner must be full-width red with white text
- All text on clear cream/white background (the DANGER banner is the one exception -- it's a standard SDS element)
- Ghost "66" as large faint watermark adds depth without interfering

## Best For
- "What one person can build" positioning
- Systems/compound metaphor (treating skills as chemical components)
- Regulatory/institutional authority aesthetic
- Light palette designs (contrast to dark-bg experiments)
- Content about dangerous disruption, replacing teams, being uncontainable

## Metaphor
The person's skillset IS a hazardous compound. It has so many active components that it requires its own Safety Data Sheet. The hazard classification ("Hazardous to conventional career paths") had to be invented because nothing in the existing catalog matches it. The SDS format -- normally reserved for dangerous chemicals that must be handled carefully -- elevates a person's capabilities to the level of regulated substance.

---

*Claude Design Engine by Rahaman Bin Ujit*
