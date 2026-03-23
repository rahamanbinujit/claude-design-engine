# Ransom Note Collage

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Type:** Typography layout style
**Tested:** V43 (original), V74 (refined) | Score: 4/5 | KEEP
**Best for:** Provocative/confrontational hooks, attention-grabbing feed posts, bold claims that benefit from visual aggression, debate-starting content

---

## Core Concept

Each headline word is a separate "cutout" -- independently sized, rotated, and treated with different background/color combos. The result feels like a letterpress patchwork or ransom note: organized chaos that still reads clearly. Clean mono body text below provides visual relief. Stats echo the cutout treatment as mini patches.

## Technique

### Word Treatments (5 types, mix and match)

```css
/* Type A: Bare text on dark bg */
.bare-white {
  color: #FFFFFF;
  background: transparent;
}

/* Type B: Dark text on red card */
.red-card {
  color: #0A0A0A;
  background: #C83C32;
  padding: 14px 28px;
}

/* Type C: Dark text on white card */
.white-card {
  color: #0A0A0A;
  background: #FFFFFF;
  padding: 12px 26px;
}

/* Type D: Dark text on off-white card */
.offwhite-card {
  color: #0A0A0A;
  background: #F5F5F5;
  padding: 12px 30px;
}

/* Type E: Outlined (no fill) */
.outlined {
  color: #F5F5F5;
  background: transparent;
  border: 2.5px solid #F5F5F5;
  padding: 10px 24px;
}
```

### Positioning Rules

- **Absolute positioning** for every word (flexbox makes it too tidy)
- Font sizes vary: 64px to 130px per word. The "money" word (key stat/number) gets the biggest
- Rotations: -2.5deg to 3deg. Vary per word. Never all same direction
- Overlap slightly OK between adjacent words (adds depth)
- Reading order must still be clear: top-left to bottom-right flow

### Layout Zones (1080x1350)

```
[  HEADLINE ZONE: top 120px to ~700px  ]
[       Scattered word cutouts         ]
[                                      ]
[  --- thin red divider (0.4 opacity) ---  ]
[                                      ]
[  BODY ZONE: ~800px to ~950px         ]
[  Space Mono, 22px, centered, 0.6 op  ]
[                                      ]
[  STAT ZONE: ~970px to ~1100px        ]
[  3 cutout patches echoing headline   ]
[                                      ]
[  AUTHOR BAR: bottom 55px             ]
```

### Stat Patches

Stats use the same card treatments as headline words:
- One white card (rotate -2deg)
- One red card (rotate 1.5deg)
- One outlined (rotate -1deg)
- Each: 52px number + 12px mono label

### Texture Details

- Subtle grain overlay (fractalNoise, 0.035 opacity)
- Optional "tape marks": 40x6px white bars at 0.08 opacity, rotated 30-60deg, placed near word edges

## Key Rules

1. Never fewer than 6 words in the headline scatter -- needs enough pieces for collage effect
2. Always mix at least 3 different treatment types in the headline
3. Body text MUST be clean mono -- the chaos needs a calm zone
4. Rotations should feel random but never exceed 3deg (more = unreadable)
5. The biggest word should be the most important (the "10x", the number, the punchline)
6. Red cards max 2 in headline -- more dilutes impact

## Color Palette

Same brand palette, but each word gets a different combo:
- `#0A0A0A` background
- `#FFFFFF` / `#F5F5F5` for light cards and text
- `#C83C32` for red cards and accent text
- No new colors. Brand only.

## V74 Refinement: Editorial Variant

V74 introduced a more editorial/minimal variant vs V43's punkier approach:

### Key Differences from V43
- **No solid card fills** -- uses bordered containers and subtle bg fills (2-3.5% white) instead of opaque red/white cards
- **Flex-wrap layout** instead of absolute positioning -- still reads as chaotic due to per-word rotations and size variation
- **Wider rotation range** -- -3deg to +3.5deg (vs V43's -2.5 to 3deg)
- **Weight variation** as additional chaos axis -- 300 to 700 weight (V43 used uniform bold)
- **Opacity variation** per word (18-100% white) adds hierarchy depth

### V74 Word Treatment Types
```css
/* Type A: Bold red bordered */
.red-bordered {
  color: #C83C32;
  border: 2px solid rgba(200,60,50,0.35);
  padding: 8px 22px;
  font-weight: 700;
}

/* Type B: Light weight with subtle fill */
.subtle-fill {
  color: rgba(255,255,255,0.8);
  background: rgba(255,255,255,0.035);
  padding: 10px 20px;
  font-weight: 300;
}

/* Type C: Mid-weight with bottom border */
.underlined {
  color: rgba(255,255,255,0.4);
  border-bottom: 2px solid rgba(255,255,255,0.06);
  font-weight: 600;
}

/* Type D: Bold white bordered */
.white-bordered {
  color: #FFFFFF;
  background: rgba(255,255,255,0.03);
  border: 1.5px solid rgba(255,255,255,0.08);
  font-weight: 700;
}

/* Type E: Bare faded */
.bare-faded {
  color: rgba(255,255,255,0.3);
  font-weight: 400;
}

/* Type F: Mono bordered */
.mono-bordered {
  font-family: 'Space Mono', monospace;
  color: rgba(255,255,255,0.18);
  border: 1.5px solid rgba(255,255,255,0.05);
  font-weight: 700;
}
```

### V74 Unique Details
- **Scissors cut line**: dashed 1px border at 4% white with scissors unicode character
- **"ASSEMBLED FROM:" label**: 9px mono at 7% white, top of poster
- **Fake source names**: "THE DAILY SIGNAL / WEEKLY BUILD / MIDNIGHT REVIEW / FIELD NOTES VOL.3" etc at 6% white
- **Paper fragments**: 5 tiny scattered rectangles (12-28px) at 2% white, various rotations
- **Crop marks**: + symbols in 4 corners at 5% white
- **Stat in bordered container**: rotated -2.2deg with 2px red border at 30% opacity
- **Edition label**: "CUT #074 / PASTE / PRINT / EDITION: SINGLE" at 5% white

### When to Use Which Variant
- **V43 (punk)**: When the message needs maximum visual aggression, debate-starting, loud/bold hooks
- **V74 (editorial)**: When the message needs controlled provocation, more sophisticated chaos, editorial feel with zine energy

---

*Claude Design Engine by Rahaman Bin Ujit*
