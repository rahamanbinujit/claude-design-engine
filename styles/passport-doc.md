---
name: passport-doc
description: Government passport / travel document. ID photo, field labels, ICAO MRZ, three visa stamps at different angles, gold embossed seal, watermark pattern, center spine. "Self-issued" permission metaphor. Every element serves the narrative.
status: KEEP
quality-score: 5
niche: Government document / Passport
---

# Passport / Travel Document Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Palette
- **Cover:** Navy-teal `#2C3E50` (visible at edges)
- **Page:** Cream document `#F5F0E5`
- **Stamp red:** `#C0392B`
- **Stamp blue:** `#2E6DA4`
- **Stamp green:** `#27AE60`
- **Gold emboss:** `#C9A84C`
- **MRZ text:** `#1A1A1A` at 60%

## Layout
- Cover color visible at top/bottom edges (40px)
- Cream passport page fills center
- LEFT half: ID page (photo + fields + MRZ)
- RIGHT half: Visa stamps page
- Center spine line (subtle fold)
- Bottom section spans both pages (headline + stats + full-width MRZ)

## ID Page Elements
- **Country header:** "REPUBLIC OF FOUNDERS / Professional Passport"
- **Gold seal:** SVG double circle + text (VERIFIED / SYS)
- **ID photo:** 200x260px, bordered, natural photo treatment
- **Fields:** Surname, Given Names, Designation, Date of Issue, Passport No (SYS-066)
- **MRZ:** Real ICAO format: `P<FND<BIN<UJIT<<RAHAMAN<<<<<<`

## Visa Stamps (3 types, different rotations)
1. **Red circular:** 180px circle, 3px border, "ADMITTED / 66 / DATE", rotate(-12deg)
2. **Blue rectangular:** 240px wide, 2px border, field rows, rotate(3deg)
3. **Green bordered text:** "APPROVED", 3px border, rotate(-6deg)

## Typography
- **Country name:** Source Sans 3, 13px, weight 700, 4px letter-spacing
- **ID fields labels:** Source Sans 3, 8px, weight 600, 2px spacing, 30% navy
- **ID field values:** Source Sans 3, 16px, weight 700
- **MRZ:** IBM Plex Mono, 10-12px, weight 400-600, 15-60% black
- **Headline:** Source Sans 3, 52px, weight 900
- **Stamp text:** Source Sans 3, various sizes, stamped opacity (30-50%)
- **Stats:** Source Sans 3, 32px, weight 900 (red/gold/green variants)

## Best For
- Permission/access posts ("I didn't wait for approval")
- Identity/credentials posts
- Self-made narrative
- Professional milestone announcements
- Any post where the metaphor is "I issued my own credentials"

---

*Claude Design Engine by Rahaman Bin Ujit*
