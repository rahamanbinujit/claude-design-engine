# Style: Photo Split

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Clean two-zone layout. Photo on top, text on solid dark background below. No overlap between text and photo. Best for posts where Rahaman's photo adds personal credibility ("I built this" stories).

## Layout (1080x1350, 4:5 portrait)

```
┌──────────────────────────────┐
│ TAG (top-left, over photo)   │
│                              │
│      PHOTO AREA (520px)      │
│      Face clearly visible    │
│      Gradient fade to black  │
│                              │
├──────────────────────────────┤
│                              │
│  HEADLINE (large, bold)      │
│  with red accent text        │
│                              │
│  ── divider                  │
│                              │
│  Subtext line                │
│                              │
│  STAT  STAT  STAT            │
│  before/after comparison     │
│                              │
│  Logo + Name       ● glow   │
└──────────────────────────────┘
```

## Key Rules
- Photo and text NEVER overlap
- Photo area: top 38% of poster (520px of 1350px)
- Gradient only at bottom of photo (fades into dark bg)
- All text sits on solid #0A0A0A background below
- Face must be clearly visible, no dark overlay on face

## Font Sizes (MOBILE-FIRST)
- Tag: 14-16px Space Mono
- Headline: 60-68px Space Grotesk Bold
- Subtext: 22-26px Space Grotesk Regular
- Stats before: 18-20px
- Stats after: 20-24px Space Grotesk Bold, red
- Stats label: 12-14px Space Mono
- Author name: 17-18px
- Author title: 12-13px Space Mono

## Colors
- Background: #0A0A0A
- Text: #FFFFFF
- Accent: #FF5A4A (bright red for emphasis)
- Glow: rgba(200,60,50) at varying opacities
- Muted: #555 for secondary text

## Export
- CSS: 1080x1350
- Puppeteer deviceScaleFactor: 4 (high quality render)
- Resize to 1080x1350 via sips
- Convert to JPEG 95% for LinkedIn
- Final: ~200-500KB

## When to Use
- "I built this" posts (personal credibility)
- Career stories with professional photo
- Any post where showing the person adds authority
- NOT for pure data/typography posts (use bold-split for those)

---

*Claude Design Engine by Rahaman Bin Ujit*
