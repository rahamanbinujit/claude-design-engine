# Style: Mutant Heritage Serif

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Classic typography "hacked" with CSS transforms. Individual letters get subtle rotations and skews, one key word gets extreme treatment (heavy skew + red), and ghost-letter shadows create depth. The poster feels like heritage editorial design that's been reengineered with glitch-era energy. Best for positioning, disruption, and contrast posts.

## Example
Example: Mutant Heritage Serif poster

## Layout (1080x1350)

```
┌──────────────────────────────┐
│ // TAG (mono, faded)         │
│                              │
│ Your marketing               │
│ team is  one                 │
│ person                       │
│   (letters mutated,          │
│    one word EXTREME red)     │
│                              │
│ ── ─ ─── ─  MUTATED         │
│ (fragmented divider)         │
│                              │
│ Body text. 66 skills across  │
│ two brands. No team.         │
│                              │
│ 66    10x    1               │
│ (ghost shadows behind stats) │
│                              │
│ ▌ Pull quote with mutant     │
│   inline word                │
│                              │
│ AUTHOR          EDITION // N │
└──────────────────────────────┘
```

## Structure

### Tag
- Font: Space Mono, 13px, letter-spacing 5px, uppercase
- Color: #FFFFFF at 40% opacity
- Red "//" prefix (#C83C32)

### Headline — The Core of the Style
- Font: Space Grotesk 700, 86px, line-height 1.02, letter-spacing -3px
- Every letter is an inline-block so it can be individually transformed
- **Subtle mutations** on 5-7 letters: rotate(2-4deg), skewX(3-6deg), translateY(2-5px), occasional opacity drops to 0.6-0.7
- **Ghost letters**: Select characters get a ::before pseudo with data-char attr, offset 6px/4px in #C83C32 at 15% opacity, skewed
- **Extreme mutation word**: One word gets #C83C32, skewX(-14deg) rotate(-3deg), larger font-size (92px), with a skewed underline
- **Strikethrough mutation**: Another word gets a red ::after line at 50% height (strikethrough effect), skewed, suggesting "the old way is crossed out"

### Fragmented Divider
- 4 line segments at different widths and angles
- Mix of white (12% opacity) and one red segment (40% opacity)
- "MUTATED" label in Space Mono 10px, red at 25% opacity

### Body Text
- Font: Space Grotesk 300, 24px, line-height 1.65
- Color: #F5F5F5 at 80% opacity
- Key phrases in bold 500 weight, full white

### Stats Row
- Font: Space Grotesk 700, 104px, letter-spacing -5px
- Individual digit mutations (rotate, skew)
- **Ghost shadow**: Absolute positioned duplicate behind each stat in #C83C32 at 8% opacity, offset 8px right / 5px down, skewX(-6deg)
- Labels: Space Mono 12px, letter-spacing 3px, uppercase, 30% opacity

### Pull Quote
- Font: Space Grotesk 400, 24px, 55% opacity
- 3px red left border (#C83C32)
- Key word gets inline skew (-8deg) + ghost shadow

### Edge Decorations
- **Glitch marks**: Monospace text ("MUTATE", "// REWRITE", version number) rotated 90deg, red at 18% opacity
- **Mutation scatter**: Tiny red rectangles (2-3px x 10-20px) at 6% opacity, scattered at various angles
- **Crop marks**: Corner L-shapes, white at 6% opacity

### Author Bar
- Left: Name (Space Mono 12px, 35% opacity) + Designation (11px, 20% opacity)
- Right: Edition label + red dot

## Brand Compliance
- Fonts: Space Grotesk + Space Mono only
- Colors: #0A0A0A bg, #FFFFFF text, #F5F5F5 secondary, #C83C32 accent
- Designation: "Senior Marketing Executive" (always)
- Author bar at bottom (always)

## When to Use
- Positioning claims ("Your team is one person")
- Disruption/contrast messaging
- Posts that challenge the status quo
- Reframing old concepts in new ways

## Technical Notes
- Puppeteer export: use `headless: 'shell'` mode (not `true` or `'new'`)
- Avoid repeating-conic-gradient at small tile sizes (kills GPU)
- Ghost letters use `data-char` attribute + ::before for the offset shadow
- All mutations via CSS transform only (no text-shadow approach)

---

*Claude Design Engine by Rahaman Bin Ujit*
