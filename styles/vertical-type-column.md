# Style: Vertical Type Column

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
A bold colored vertical column runs the full height of the left (or right) edge, containing a single keyword set vertically. This pillar acts as a structural anchor that breaks horizontal monotony and creates an asymmetric frame for the main content. The column is a color block (brand red) with large white vertical text reading bottom-to-top. Editorial, architectural feel.

## Example
Example: "Your marketing team is 10 people. Mine is one." poster

## Layout (1080x1350)

```
┌───┬──────────────────────────┐
│   │ TAG (mono, red)          │
│   │                          │
│ F │ BOLD HEADLINE            │
│ U │ with accent words        │
│ T │                          │
│ U │ ─── divider              │
│ R │                          │
│ E │ Body text paragraph      │
│   │                          │
│   │ 66    5    2             │
│   │ stat  stat stat          │
│   │                          │
│   ├──────────────────────────│
│   │ Name          Designation│
└───┴──────────────────────────┘
  ^
  Red column (120px wide)
  Vertical text (80px, bold, white)
  writing-mode: vertical-rl
  rotated 180deg (reads bottom-to-top)
```

## Specs

### Vertical Column
- **Width:** 120px
- **Height:** Full poster height (1350px)
- **Background:** #C83C32 (brand red)
- **Text:** 80px Space Grotesk 700, white, uppercase
- **Letter-spacing:** 12px
- **Writing mode:** `writing-mode: vertical-rl; transform: rotate(180deg);`
- **Alignment:** Centered in column

### Main Content Area
- **Offset:** 120px from left
- **Padding:** 80px top/bottom, 70px right, 60px left (from column edge)
- **Vertical alignment:** Center

### Tag
- Space Mono 16px, #C83C32, uppercase, letter-spacing 4px

### Headline
- Space Grotesk 700, 72px, line-height 1.1
- Accent words in #C83C32

### Body Text
- Space Grotesk 400, 26px, line-height 1.6, #F5F5F5 at 85% opacity

### Stats Row
- Number: Space Grotesk 700, 52px, white
- Label: Space Mono 14px, uppercase, letter-spacing 2px, 60% opacity

### Bottom Bar
- Height: 80px, border-top: 1px rgba(255,255,255,0.1)
- Name: Space Grotesk 600, 18px, left-aligned
- Designation: Space Mono 13px, 50% opacity, right-aligned

### Optional: Subtle Grid Line
- 1px vertical line at 160px left, rgba(255,255,255,0.04)

## Best For
- Statement posts with a thematic keyword (FUTURE, BUILD, SCALE, SHIP, etc.)
- Posts where a single word captures the post's essence
- Any content where asymmetric framing adds editorial weight

## Variations
- **Right-side column:** Mirror the layout, column on right edge
- **Wider column (160px):** For shorter words needing larger type (100px+)
- **Two columns:** Left and right pillars framing centered content (use sparingly)
- **Column word as stat:** Instead of a theme word, use a number ("66", "10x")

## Never
- Column width below 100px (text gets cramped)
- Column text below 60px (unreadable vertically)
- More than one word in the column (defeats the pillar concept)
- Column on both sides simultaneously unless very intentional

---

*Claude Design Engine by Rahaman Bin Ujit*
