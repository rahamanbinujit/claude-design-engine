# Style: Redacted Document

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5 — KEEP
**Best for:** Secret-knowledge posts, insider-info themes, "what they don't tell you" hooks, data transparency, conspiracy-meets-corporate content

---

## Concept

Declassified government document on dark bg -- more minimal and editorial than the v27 "Redacted Classified" style. No full-width red classification bars. Instead, uses rotated classification stamps, a thin document frame, and a faint red margin line for a subtler, more authentic document feel. The white redaction bars on dark bg create visual intrigue through absence. The stat is "the one truth they couldn't hide."

## How It Differs from Redacted Classified (v27)
- No full-width red bars at top/bottom (subtler framing)
- Rotated classification stamps instead of bars
- Faint red margin line on left edge (document margin feel)
- Stacked headline lines with redaction bars inline
- Scattered memo-style redaction lines as texture
- More minimal overall -- closer to editorial design

## Layout Structure (1080x1350)

```
[Document frame — 1px at 5% white, 64px inset from edges]
[Red margin line — left edge, 1px, 6% red]

  CLASSIFIED [stamp, rotated -2deg]  LEVEL 5 [stamp, rotated 1.2deg]
  ────────────────────────────────────
  SECTION 1.0 — SUBJECT BRIEF

  The ██████ To Building                    DOC-2024-XXXX
  Systems That
  ██████████ You
  [REDACTED]  [REDACTED]

  ────────────────────────────────────

  Body text with ████████ inline
  redactions and visible narrative.

  REF: INTERNAL MEMO ████████ DATE: ████
  SUBJECT: ██████████████████
  ████ APPROVED BY ██████████████

  ────────────────────────────────────

  // UNREDACTED DATA POINT
  66
  SKILLS AUTOMATED
  One system. Zero burnout.

  5         2         10x
  INTEGRATIONS  BRANDS   OUTPUT

  ──────────────────────────────────
  Rahaman Bin Ujit           CLEARANCE: GRANTED
  SENIOR MARKETING EXECUTIVE ACCESS: FULL

                CONFIDENTIAL — PAGE 01
```

## Key Elements

### 1. Document Frame
- 1px border at 5% white, inset 64px from poster edges
- Inner padding: 48px top/bottom, 52px left/right
- Faint red margin line: 1px at 6% #C83C32 opacity, left edge

### 2. Classification Stamps
- "CLASSIFIED": Space Mono, 12px, weight 700, #C83C32, letter-spacing 4px, 2px red border at 50% opacity, rotate(-2deg)
- "LEVEL 5": Space Mono, 9px, weight 700, #C83C32, 1.5px border at 35% opacity, rotate(1.2deg), 60% overall opacity
- Both inline, stamps feel hand-applied

### 3. Redaction Bars (Headline)
- White (#FFFFFF) rectangles covering ghost text (visibility: hidden)
- Bar extends 6px past text on each side
- "[REDACTED]" label below each bar: Space Mono, 9px, bold, #C83C32, letter-spacing 1.5px
- Stack headline into explicit lines to prevent label overlap

### 4. Headline
- Space Grotesk, 74px, weight 700, line-height 1.05, letter-spacing -3px
- Max-width 860px
- 1-2 words redacted per headline (not more -- message must still be readable)

### 5. Body Text + Inline Redactions
- 23px, weight 400, line-height 1.6, 33% opacity white
- Inline redactions: background rgba(255,255,255,0.88), matching text color, padding 1px 8px
- 3-4 inline redactions max

### 6. Texture Redaction Lines
- 3 rows of memo-style fragments: Space Mono, 8px, 9% white
- Mixed with white bars (11px height, 56-180px widths)
- Simulates redacted memo fields (REF, DATE, SUBJECT, APPROVED BY)
- Creates document texture without overwhelming

### 7. Stat Section — "The Unredacted Truth"
- Label: "// UNREDACTED DATA POINT" in Space Mono, 9px, 55% #C83C32
- Number: 152px bold, #C83C32, letter-spacing -8px
- Unit: Space Mono, 11px, 22% white, letter-spacing 3px
- Context line: 17px, 18% white

### 8. Secondary Stats
- 36px bold, 45% white
- Labels: Space Mono, 8px, 13% white, letter-spacing 1.5px
- Flex row with 56px gap

### 9. Author Bar
- Border-top 1px at 6% white
- Name: 14px, weight 600, 40% white
- Title: Space Mono, 8px, 13% white, letter-spacing 2px
- Clearance metadata right-aligned: Space Mono, 7px, 30% #C83C32

### 10. Background
- SVG feTurbulence noise texture at 2% opacity
- Page footer: "CONFIDENTIAL — PAGE 01" centered bottom, 7px mono, 7% white

## Color Usage
- **#0A0A0A** — document bg
- **#FFFFFF** — headline text, redaction bars
- **rgba(255,255,255, various)** — body text (33%), metadata hierarchy
- **#C83C32** — stamps, [REDACTED] labels, stat number, clearance text, margin line
- **rgba(255,255,255,0.88)** — inline body redactions

## Typography
- **Space Grotesk 700** — headline
- **Space Grotesk 400** — body text, stat context
- **Space Mono 400/700** — ALL metadata, stamps, labels, redaction labels, author info

## Content Strategy
- Redact words that the reader can infer from context -- creates a reading game
- The stat must be the ONLY fully unredacted large element -- "the truth they couldn't hide"
- Max 2 words redacted in headline, 3-4 inline in body
- Stamps and memo lines add atmosphere but shouldn't compete with content

## File Size
1.9MB JPEG at 95% (from 5MB PNG). Dark bg with white bars + noise texture = larger files.

## v79 Evolution (2026-03-20, Score 4)

v79b tested a **dark-on-dark variant** -- redaction bars are DARK (8% white bg, 4% white border, transparent text) instead of white. This inverts the original concept: instead of bright white bars hiding text, the redacted words vanish into near-blackness, matching the dark bg. Key additions:

- **Paragraph numbering** (1.1, 1.2) at 8px mono 8% white -- adds bureaucratic authenticity
- **Secondary stats in bordered form fields** -- 1px border at 4% white grid cells with field labels (7px mono 10% white) above numbers (42px at 38% white). Reads as actual document form fields.
- **Approved stamp** -- 28px bold mono at 8% #C83C32, 3px border at 6% red, rotated -12deg. Very subtle background artifact.
- **Stat flanking bars** -- 45x52px blocks in #C83C32 at 20% opacity flanking the "66", creating the "partially unredacted field" effect
- **Stat label with extending line** -- 9px mono label followed by flex:1 line at 4% white
- **Hole punches** -- 3 circles (13px, 3.5% white border) on left edge
- **Classification stamp** uses mixed case "Declassified" (not all-caps) for subtlety

Both variants (white-bar v70 and dark-bar v79) are valid. Use white bars for higher contrast/drama, dark bars for subtlety/mystery.

- Example: Redacted Document poster

## Never
- Don't redact so much that the message is lost
- Don't make all redaction bars the same width
- Don't skip the [REDACTED] label under headline bars (it's what sells the concept)
- Don't let [REDACTED] labels overlap the next headline line (use stacked explicit lines)
- Don't make stamps too large or high-opacity (they're background texture)
- Don't use smart quotes/apostrophes in headlines (use "Cannot" not "Can't")

---

*Claude Design Engine by Rahaman Bin Ujit*
