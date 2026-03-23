# Sketch Mix Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5
**Best for:** Personal brand posts, positioning statements, "about me" content, thought leadership

## Concept
Hand-drawn SVG sketch annotations layered over clean Space Grotesk typography on dark background. The contrast between analog imperfection (wobbly lines, dashed circles, bracket annotations, handwritten notes) and digital precision (clean type, structured grid, brand colors) creates a distinctive, human, scroll-stopping feel.

## Layout
- **Format:** 1080x1350 (4:5 portrait)
- **Base:** Type-hero layout (headline-driven, no photo)
- **Structure:** Tag top-left, massive headline center-left, subtext below, stats row bottom, footer with red line + name

## Typography
- **Headline:** Space Grotesk, 92px, weight 300 (light) + 700 (bold) mixed
- **Accent word:** Space Grotesk 700, #C83C32
- **Subtext:** Space Grotesk 300, 24px, line-height 1.7, opacity 0.7
- **Stats numbers:** Space Grotesk 700, 56px
- **Labels/Tag:** Space Mono, 13-14px, uppercase, letter-spacing 2-3px, opacity 0.4-0.5

## Colors
- **Background:** #0A0A0A
- **Primary text:** #FFFFFF
- **Secondary text:** #F5F5F5 at reduced opacity
- **Accent:** #C83C32 (red) — used on ONE element only (the accent word + its underline)
- **Sketch elements:** #F5F5F5 at 10-25% opacity (white, very subtle)

## Sketch Elements (SVG)
All sketch elements use SVG with `stroke-linecap: round; stroke-linejoin: round` for hand-drawn feel.

### 1. Wavy Underline (strongest element)
- Under the accent word
- Color: #C83C32, stroke-width 3
- Two overlapping wavy paths (Q curves) for thickness variation
- Second path at 0.4 opacity for sketch effect

### 2. Dashed Ellipse
- Around the headline or key phrase
- Color: #F5F5F5, opacity 0.12
- stroke-dasharray: "8 6" for hand-drawn dashed feel
- Large, loose ellipse (not tight crop)

### 3. Bracket Annotation
- Right side of headline area
- Color: #F5F5F5, opacity 0.1
- Curly bracket shape via Q curves
- Suggests "grouping" the headline lines

### 4. Arrow + Text Note
- Small arrow pointing to key element
- Color: #F5F5F5, opacity 0.18
- Accompanied by tiny Space Mono annotation text (e.g., "this part")
- Annotation text at 11px, opacity 0.15

### 5. Checkmark / Star Decorations
- Tiny marks near stats (checkmark on main stat, star on secondary)
- Color: #F5F5F5, opacity 0.15-0.2
- Very small (16-20px)
- Positioned absolute, slightly offset from the stat number

## Key Rules
- Sketch elements must be SUBTLE (10-25% opacity) — they add personality, not noise
- All sketch strokes use round linecaps for organic feel
- Only the wavy underline uses red (#C83C32); all other sketches use white at low opacity
- The hand-drawn elements should feel like someone annotated a clean poster with a pen
- Never more than 4-5 sketch elements total — restraint is key
- Background "10" element at 2% opacity for subtle depth (same as type-hero)

## Faded BG Element
- Large number or word related to headline content
- Font-size 420px, opacity 0.02
- Positioned bottom-right
- Adds subtle depth without competing

## Spacing
- Container padding: 80px 72px
- Gap between stats: 64px
- Subtext margin-top: 48px
- Footer padding-top: 56px
- Footer red line: 48px wide, 2px height

## Export
- Puppeteer, deviceScaleFactor: 4
- 1080x1350 viewport, clip to exact dimensions
- Wait 3000ms after load for font rendering
- Result: ~253KB PNG (well under 1MB, no JPEG conversion needed)

---

*Claude Design Engine by Rahaman Bin Ujit*
