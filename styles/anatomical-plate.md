---
name: anatomical-plate
version: v212
status: KEEP
quality-score: 4
---

# Anatomical Plate Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


Vintage anatomy textbook illustration plate. Maps founder skills onto brain/body regions like a phrenology or neuroanatomy diagram.

## Visual DNA
- **Background:** Warm parchment cream #F5F0E8
- **Ink colors:** Sepia brown #5C4A32 (primary lines), #8B7355 (secondary/dashed), #A89070 (tertiary/faint)
- **Accent:** Deep red #8B3A2E (station markers, roman numerals)
- **Frame:** Double-rule border (1px outer + 0.5px inner, 4px gap)
- **Typography:** Playfair Display (title, name), EB Garamond (all labels, descriptions, captions)
- **Illustration:** SVG line art head profile with brain region divisions, cross-hatching texture, anatomical details (eye, ear, spine vertebrae)

## Composition Rules
1. Central anatomical illustration (head/body profile) dominates ~60% of canvas
2. Annotations on both sides, connected via thin leader lines (0.6px, #999)
3. Station markers: white-filled circles with red border, r=6
4. Roman numeral labels (i. through xii.) for each annotated region
5. Title at top center with letter-spacing (serif, uppercase)
6. "PLATE [number]" designation top-left
7. "Fig. 1" caption below illustration
8. Attribution bottom center with decorative rule

## SVG Layering
- Layer 1: Anatomical shapes, outline, dashed region dividers, cross-hatching
- Layer 2: Station markers (white-filled circles with colored border)
- Layer 3: Leader lines + text labels (topmost)

## Text Hierarchy
1. Title: 26px Playfair Display, 8px letter-spacing, uppercase, #3A2E20
2. Region titles: 12px EB Garamond, weight 500, #3A2E20
3. Region descriptions: 10px EB Garamond, italic, #8B7355
4. Roman numerals: 11px EB Garamond, italic, #8B3A2E
5. Captions/notes: 10-13px EB Garamond, italic, #8B7355 or #A89070

## Content Mapping
- Each brain region = one skill domain (Strategy, Marketing, Content, Creative Vision, AI Systems, etc.)
- Description under each label = specific sub-skills
- Ghost "66" decorative stat at low opacity
- Latin-style quote at bottom
- "Published MMXXVI" in Roman numerals

## What Makes It Work
- The anatomical metaphor: one body contains everything. All functions in one organism.
- Cross-hatching and dashed region lines create textbook authenticity
- Leader lines keep text on clear background (never on illustration)
- Scholarly typography (serif, italic, letter-spacing) matches the textbook format
- The "specimen" language frames the founder as something rare, studied, documented

## What to Watch
- Head illustration can look mannequin-like if too simple; add more anatomical detail (ear cartilage, jawline, muscle attachment hints)
- Keep left/right label groups balanced (similar count on each side)
- Leader lines must not cross each other
- Station markers must be clearly ON the illustration lines, not floating in empty space

---

*Claude Design Engine by Rahaman Bin Ujit*
