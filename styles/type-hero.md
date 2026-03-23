# Style: Type Hero

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Typography IS the design. Massive headline dominates, no photo needed. Subtle background elements (faded number, ambient glow) add depth without clutter. Best for thought leadership, bold statements, and posts where the words carry all the weight.

## Example
Example: "One person. The output of ten."

## Layout (1080x1350, 4:5 portrait)

```
┌──────────────────────────────┐
│ TAG (tiny, faded, top-left)  │
│                              │
│                     [FADED   │
│  MASSIVE HEADLINE   BG NUM]  │
│  with red accent             │
│  word.                       │
│                              │
│  ─── gradient rule ───       │
│                              │
│  Pullquote subtext with      │
│  bold white key phrase.      │
│                              │
│                              │
│                              │
│  Name + Title     ── line    │
└──────────────────────────────┘
```

## Key Rules
- No photo. Typography IS the design.
- Headline must be 88px+ (massive, scroll-stopping)
- ONE word/phrase in red accent with strong glow
- Faded background number (500px, 2% opacity) — only when number is meaningful to headline
- Pullquote uses font-weight 300 (light) for contrast with bold headline
- Bold white `<strong>` inside pullquote for key phrase
- Line accent in footer (not dot) — more editorial

## Typography

```
TAG            → Space Mono, 12px, 700, uppercase, letter-spacing: 2.5px, 30% opacity
HEADLINE       → Space Grotesk, 88px, 700, line-height: 1.02, letter-spacing: -4px
HEADLINE (ALT) → Mixed weights: key phrases 700 bold, connecting words 300 light. Creates editorial reading rhythm. Same 88px size.
ACCENT WORD    → #FF5A4A, text-shadow: 0 0 15px rgba(200,60,50,0.6), 0 0 40px rgba(200,60,50,0.35), 0 0 80px rgba(200,60,50,0.15)
PULLQUOTE      → Space Grotesk, 30px, 300, color: #666, line-height: 1.5
PULLQUOTE BOLD → #FFFFFF, font-weight: 600
AUTHOR NAME    → Space Mono, 11px, 700, #888, uppercase, letter-spacing: 1px
AUTHOR TITLE   → Space Mono, 10px, 400, #555
```

## Background Elements

### Faded Number
- Font: Space Grotesk, 500px, 700
- Color: rgba(255,255,255,0.02) — barely visible, adds depth
- Position: absolute, top 50%, right -40px
- Only use when a number from the headline can be the bg element

### Ambient Glow
- Radial gradient from center-bottom
- rgba(200,60,50,0.08) center → transparent at 70%
- Size: 800x800px
- Adds warmth without being noticeable

### Grain Texture (Optional)
- SVG feTurbulence, opacity 0.04, mix-blend-mode: overlay
- Note: Very subtle at 4x export. Consider canvas-based grain for stronger effect.

## Divider Rule
- Full width, 1px height
- Gradient: rgba(200,60,50,0.5) → rgba(200,60,50,0.1) → transparent
- Separates headline from pullquote

## Footer
- Line accent: 48px wide, 2px height, #C83C32 with glow
- Not dot. Line is more editorial.
- Same author info as all styles

## Colors
- Background: #0A0A0A
- Text: #FFFFFF
- Accent: #FF5A4A (with strong glow)
- Subtext: #666666
- Muted: #555555, #888888

## When to Use
- Thought leadership / bold statements
- Data-driven posts where one number is the story
- "I did X" personal achievement posts
- Any post where the words alone are powerful enough
- NOT for posts that need a photo for credibility (use photo-split)
- NOT for comparison/contrast posts (use bold-split)

## Export
- CSS: 1080x1350
- Puppeteer deviceScaleFactor: 4
- Wait 2500ms for fonts
- Convert to JPEG 95% (PNG exceeds 1MB)
- Final: ~870KB JPEG

---

*Claude Design Engine by Rahaman Bin Ujit*
