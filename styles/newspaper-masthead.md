# Style: Newspaper Masthead

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Poster mimics a broadsheet newspaper front page. Dark bg with editorial rules (double/triple lines), masthead banner with publication name, volume/date/edition metadata, two-column body layout with thin column divider, BREAKING label, pull quote with red border, and stat callout. Gives content instant editorial authority -- reads as "newsworthy" rather than promotional. Best for bold positioning claims, stat reveals, announcements, and AI/tech proclamations.

## Example
Example: "One Person Built What Used to Take a Team of 12"

## Layout (1080x1350, 4:5 portrait)

```
┌──────────────────────────────┐
│ ═══════════════════════════  │  <- top double rule (3px + 1px)
│ Vol.I No.51   Mar 20, 2026  │  <- date row: mono 11px, 30% white
│                              │     3 items spaced across width
│    THE FOUNDER PRESS         │  <- masthead: 58px Space Grotesk 700
│                              │     14px letter-spacing, uppercase
│  AI Systems · Marketing ·   │  <- tagline: mono 11px, 22% white
│ ═══════════════════════════  │  <- triple rule separator (3px + 1px)
│                              │
│ ██BREAKING██ ─────────────   │  <- red bg label + extending red line
│                              │
│  One Person Built What       │  <- headline: 72px Space Grotesk 700
│  Used to Take a Team of 12  │     red accent on key phrase
│     ────── ◆ ──────         │  <- diamond ornament rule separator
│                              │
│  Lead text...  │  66         │  <- two columns with 1px divider
│  Body text...  │  AI SKILLS  │     left: 22px lead + 17px body
│                │  DEPLOYED   │     right: 110px stat + mono label
│  "Pull quote"  │             │     pull quote: 3px red left border
│                │  context    │     secondary stats at bottom
│                │  ┌──┬──┐   │
│                │  │ 5│ 2│   │  <- 2-col mini stat grid
│                │  └──┴──┘   │
│ ═══════════════════════════  │  <- bottom rule (2px)
│ RAHAMAN BIN UJIT    A1 FINAL│  <- author + edition info
└──────────────────────────────┘
```

## Specs

### Background
- `#0A0A0A` solid

### Typography
| Element | Font | Size | Weight | Color |
|---|---|---|---|---|
| Date row | Space Mono | 11px | 400 | white 30% |
| Masthead title | Space Grotesk | 58px | 700 | white 100% |
| Tagline | Space Mono | 11px | 400 | white 22% |
| BREAKING label | Space Mono | 11px | 700 | white on #C83C32 |
| Headline | Space Grotesk | 72px | 700 | white, key phrase red |
| Lead text | Space Grotesk | 22px | 400 | white 75% |
| Body text | Space Grotesk | 17px | 300 | white 38% |
| Pull quote | Space Grotesk | 19px | 500 | white 60%, italic |
| Stat number | Space Grotesk | 110px | 700 | white 100% |
| Stat label | Space Mono | 12px | 400 | white 30% |
| Stat context | Space Grotesk | 18px | 400 | white 50% |
| Secondary stat | Space Grotesk | 36px | 700 | white 100% |
| Secondary label | Space Mono | 10px | 400 | white 30% |
| Author name | Space Grotesk | 14px | 600 | white 45% |
| Author role | Space Mono | 10px | 400 | white 20% |
| Edition | Space Mono | 10px | 400 | white 18% |

### Rules & Dividers
- **Top double rule:** 3px white 60% + 1px white 25%, 5px gap
- **Triple rule (under masthead):** 3px white 60% + 1px white 20%, 8px gap
- **Column divider:** 1px white 15%, full column height
- **Diamond ornament:** 6px white 20% square rotated 45deg, flanked by 1px white 12% lines
- **Bottom rule:** 2px white 15%

### Layout Rules
- Padding: 52px top, 64px sides, 60px bottom
- Masthead centered, date row flex space-between
- Letter-spacing on masthead: 14px
- BREAKING label: 4px letter-spacing, 5px 14px padding, with extending red line (opacity 0.3)
- Two-column grid: 50/50, 36px padding each side of divider
- Pull quote anchored to bottom of left column (margin-top: auto)
- Secondary stats: 2-col grid at bottom of right column (margin-top: auto)

### Color Accents
- BREAKING label bg: `#C83C32`
- Headline accent word: `#C83C32`
- Pull quote left border: 3px `#C83C32`
- BREAKING extending line: `#C83C32` at 30%

## Best For
- Bold positioning claims ("I built what took 12 people")
- Stat reveals and data announcements
- Industry takes and hot opinions
- Product launches framed as "news"
- Career milestone announcements

## Avoid
- Posts with multiple images/photos (this is a text-dominant layout)
- Casual/personal posts (the editorial format implies authority and gravity)
- Lists longer than 3-4 items (use filmstrip or bento instead)

---

*Claude Design Engine by Rahaman Bin Ujit*
