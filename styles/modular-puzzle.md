# Modular Puzzle Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5
**Best for:** Stats-heavy posts, systems/portfolio content, "what I built" posts, structured data presentations

---

## Layout Structure

```
┌──────────────────────────────────────────────┐
│  TAG BAR (full width, #111)                  │
│  Tag left (mono, red) + Ref right (mono dim) │
├──────────────────────────────┬────────────────┤
│  HERO HEADLINE (2 cols)      │  BIG STAT      │
│  68px bold, red accent word  │  (red bg block) │
│  Sub text 20px, 50% opacity  │  140px number   │
│  Red left border accent      │  mono label     │
├──────────┬───────────┬───────┴────────────────┤
│  STAT 1  │  STAT 2   │  STAT 3               │
│  #131313 │  #0F0F0F  │  #161616              │
│  52px num│  52px num  │  52px num             │
├──────────┴───────────┬────────────────────────┤
│  QUOTE (2 cols)      │  IDENTITY              │
│  Ghost " mark behind │  Name + divider + role │
│  26px, accent word   │  #1A1A1A bg            │
├──────────┬───────────┴────────────────────────┤
│  MICRO   │  CTA TEXT  │  CORNER MARK          │
│  STAT    │  center    │  dim mono             │
│  red num │            │                       │
└──────────┴────────────┴───────────────────────┘
```

## Key Specs

- **Format:** 1080x1350 (4:5 portrait)
- **Grid:** CSS Grid, 3 columns x 5 rows
- **Gaps:** 3px between all blocks (the "puzzle seams")
- **Canvas padding:** 48px all sides

## Block Background Shades

Each block gets a slightly different dark shade to create depth and separation:
- `#0D0D0D` — darkest
- `#0E0E0E`
- `#0F0F0F`
- `#111111`
- `#131313`
- `#151515`
- `#161616`
- `#1A1A1A` — lightest

The variation is subtle but creates a tangram-like puzzle feel where each block is distinct.

## Red Accent Block

One block (the big stat) uses full `#C83C32` red background with white text. This is the focal anchor of the entire composition. Place it adjacent to the hero headline for maximum contrast.

## Typography

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Tag | Space Mono | 13px | 400 | #C83C32 |
| Ref line | Space Mono | 11px | 400 | rgba(255,255,255,0.2) |
| Headline | Space Grotesk | 68px | 700 | #FFFFFF |
| Headline accent | Space Grotesk | 68px | 700 | #C83C32 |
| Sub text | Space Grotesk | 20px | 300 | rgba(255,255,255,0.5) |
| Stat numbers | Space Grotesk | 52px | 700 | #FFFFFF |
| Stat labels | Space Mono | 11px | 400 | rgba(255,255,255,0.35) |
| Big stat number | Space Grotesk | 140px | 700 | #FFFFFF |
| Quote | Space Grotesk | 26px | 400 | rgba(255,255,255,0.75) |
| Name | Space Grotesk | 15px | 600 | #FFFFFF |
| Role | Space Mono | 10px | 400 | rgba(255,255,255,0.3) |

## Design Principles

1. **One block, one purpose** — each block holds exactly one content type
2. **Subtle shade variation** — blocks are distinct through bg shade, not borders
3. **Red block as anchor** — one block breaks the dark palette entirely
4. **No drop shadows** — separation comes from gaps and shade contrast only
5. **Structural metaphor** — the puzzle layout visually communicates "system" and "modularity"

## Difference from Bento Grid

Bento grid uses rounded corners (20px radius) and larger gaps (16px) with a softer, more contemporary feel. Modular puzzle uses sharp corners and tight 3px gaps for a more precise, architectural, dashboard-like aesthetic. Puzzle also varies bg shades per block more aggressively.

## File Size

Compresses extremely well: ~300KB PNG at 4x. No JPEG conversion needed.

---

*Claude Design Engine by Rahaman Bin Ujit*
