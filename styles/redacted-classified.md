# Style: Redacted Classified

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5 — KEEP
**Best for:** Provocative positioning/flex posts, contrarian takes, "secret sauce" content, mystery/curiosity hooks, one-person-army narratives

---

## Concept

Classified government document simulation on dark bg. The design looks like a redacted intelligence report — what's hidden creates as much intrigue as what's visible. Reader fills in the blanks, creating engagement through curiosity.

## Layout Structure (1080x1350)

```
[RED CLASSIFICATION BAR — "CLASSIFIED" — 52px height]
  REF: FOS-2026-XXXX  |  CLEARANCE: LEVEL X     [TOP SECRET stamp]
  SUBJECT: TITLE HERE

  72px mixed-weight headline
  with ████ redacted bars.
  ███ more redacted.

  Body text with ████ inline redactions
  and visible key phrases in white bold.

  ┌─────────────┬─────────────┬─────────────┐
  │ STAT LABEL  │ STAT LABEL  │ STAT LABEL  │
  │ 66          │ 1           │ 5+          │
  └─────────────┴─────────────┴─────────────┘

  ▌ ANALYST NOTE
  ▌ "Recommend immediate classification.
  ▌  Subject's ████ exceed benchmarks."

  —— RAHAMAN BIN UJIT · SENIOR MARKETING EXECUTIVE
                                        PAGE 1 OF 1
[RED CLASSIFICATION BAR — "CLASSIFIED" — 52px height]
```

## Key Elements

### 1. Classification Bars (Top + Bottom)
- Full-width #C83C32 red bars, 52px height
- "CLASSIFIED" in Space Mono, 15px, weight 700, letter-spacing 12px, white
- Frames the entire poster like a real classified document

### 2. Redacted Bars (The Core Effect)
- Inline `<span>` blocks with solid background, matching height to text line
- **White bars** (#F5F5F5): standard redactions
- **Red bars** (#C83C32): accent redactions for emphasis
- Vary widths: short (120px), medium (200px), long (320px), xl (440px)
- In headline: bars replace words to create curiosity ("what ███ couldn't")
- In body text: inline redactions with matching bg+text color hide actual words

### 3. Document Metadata
- **Ref line:** Space Mono, 12px, 25% opacity white, letter-spacing 2px
  - Format: `REF: FOS-2026-XXXX  |  CLEARANCE: LEVEL X`
- **Subject line:** Space Mono, 13px, 40% opacity, uppercase, letter-spacing 1px
  - "SUBJECT:" label at 25% opacity

### 4. Headline
- Space Grotesk, 72px, mixed weights (300 light + 700 bold)
- Line height 1.1
- Redacted bars integrated inline with text
- 300 weight for setup lines, 700 for impact lines

### 5. Body Text
- 20px, weight 400, line-height 1.9, 65% opacity white
- `.visible` class: white, weight 500 — key phrases stand out
- Inline redacted spans hide supporting words
- Creates visible/hidden interplay — a reading game

### 6. Stats Form
- 3-column CSS grid with 1px borders (8% opacity white)
- Each cell: 24px padding, 2% white bg
- Labels: Space Mono, 10px, letter-spacing 3px, 30% opacity
- Values: 42px, weight 700
- Key stat in #C83C32 with red text-shadow glow (30px, 40% opacity)

### 7. TOP SECRET Stamp
- Circular double-ring (outer 3px, inner 2px border)
- Red at 20-30% opacity
- Rotated -18deg
- Space Mono, 14px, weight 700, letter-spacing 4px
- Position: top-right area, not overlapping headline

### 8. Analyst Memo Note
- Red left border (3px, 40% opacity)
- Background: 1.5% white
- Label: Space Mono, 10px, "ANALYST NOTE"
- Text: 18px italic, 50% opacity, with inline redactions
- `.visible` spans for key phrases

### 9. Background
- Faint ruled lines: repeating-linear-gradient, 60px intervals, 1.8% opacity white
- Faded watermark text (380px, 1.5% opacity) — optional

### 10. Identity
- Red bar (28x3px) + Space Mono name/role (12px, 35% opacity, letter-spacing 3px)
- Page number: bottom-right, Space Mono, 11px, 15% opacity

## Color Usage
- **#0A0A0A** — document bg
- **#C83C32** — classification bars, accent redacted bars, stamp, stat glow, memo border
- **#F5F5F5** — standard redacted bars, inline redactions
- **#FFFFFF** — headline, key stat values, visible body text phrases
- White at various opacities for metadata hierarchy

## Typography
- **Space Grotesk 300/700** — headline (mixed weights)
- **Space Grotesk 400/500** — body text
- **Space Mono 400/700** — ALL metadata (ref, subject, labels, identity, page number, stamp)

## Content Strategy
The redacted bars should hide words that the reader can INFER from context. The visible text + redacted gaps = the reader's brain fills in the blanks, creating deeper engagement than just reading plain text. What you hide is as important as what you show.

**Good redaction patterns:**
- "What ███ couldn't" — reader guesses "teams/companies/agencies"
- "Output increased by ████" — reader imagines a big number
- "Subject's ████ exceed benchmarks" — capabilities implied but unstated

## File Size
390KB PNG at 4x Puppeteer export. Very efficient — no JPEG conversion needed.

## Never
- Don't make bars all the same width (vary for realism)
- Don't redact so much that the message is lost
- Don't use the stamp at high opacity (keep it subtle, like a faded real stamp)
- Don't skip the classification bars — they're the framing device that sells the concept

---

*Claude Design Engine by Rahaman Bin Ujit*
