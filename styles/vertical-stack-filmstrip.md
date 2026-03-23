# Vertical Stack Filmstrip

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Concept
Poster divided into 7 horizontal strips of equal height, separated by film-frame lines. Mimics a film strip or contact sheet. Each strip contains one piece of content (tag, headline word, stat, quote, author). One strip uses red bg (#C83C32) as accent. Forces sequential top-to-bottom reading. Sprocket holes on edges complete the analog film aesthetic.

## When to Use
- Step-by-step or process posts
- List-based content (each strip = one item)
- Sequential reveal / build-up posts
- Manifesto / declaration posts (one word per strip builds tension)
- Before/after comparisons

## Layout Structure
```
[SPROCKET] |  Strip 1: Tag (mono, red)              | [SPROCKET]
           |  ─────────────────────────────────────  |
[SPROCKET] |  Strip 2: Headline word 1 (86px, white) | [SPROCKET]
           |  ─────────────────────────────────────  |
[SPROCKET] |  Strip 3: Headline word 2 (RED BG, 94px)| [SPROCKET]
           |  ─────────────────────────────────────  |
[SPROCKET] |  Strip 4: Headline word 3 (86px, white) | [SPROCKET]
           |  ─────────────────────────────────────  |
[SPROCKET] |  Strip 5: Stat (130px + mono label)     | [SPROCKET]
           |  ─────────────────────────────────────  |
[SPROCKET] |  Strip 6: Pull quote (italic, red bar)  | [SPROCKET]
           |  ─────────────────────────────────────  |
[SPROCKET] |  Strip 7: Author bar                    | [SPROCKET]
```

## Specs

### Dimensions
- 1080x1350px (4:5 portrait)
- Background: #0A0A0A

### Sprocket Columns
- Width: 48px each side
- Slightly darker bg with inner border (1px, 8% white)
- Sprocket holes: 20x28px, border-radius 4px, 2px border at 18% white, 4% white fill
- ~20 holes evenly distributed per column

### Strip Separators
- Main line: 3px, rgba(255,255,255,0.25)
- Secondary lines: 1px at 8% white, 4px above and below main line
- Creates a three-line film frame boundary effect

### Content Strips
- All strips use flex, vertically centered content
- Padding: 0 80px (content area between sprocket columns)
- Each strip gets a frame number (top-right, mono 13px, 28% white)

### Red Accent Strip
- Background: #C83C32
- Largest type in the sequence (94px vs 86px for others)
- "OVEREXPOSED" label in exposure-info position
- Light-leak gradient bleed: 8px above and below strip, 15% red opacity fading to transparent

### Film Production Details
- Frame numbers: 01-07, top-right corner of each strip
- Exposure info: "f/2.8 1/500" style, bottom-left, mono 9px, 25% red opacity
- Edge marks: "KODAK 5219", "500T" rotated along sprocket columns
- Bottom center: "FOUNDER OS . MARCH 2026 . FRAME 056" mono 10px, 12% white

### Typography
- Tag: Space Mono 15px, 4px letter-spacing, red, "// " prefix
- Headline words: Space Grotesk 86px (94px on red strip), 700 weight, -2px tracking
- Stat number: Space Grotesk 130px, 700 weight, -4px tracking
- Stat label: Space Mono 14px, 2px letter-spacing, 40% white, right-aligned
- Quote: Space Grotesk 26px, italic, 70% white, 4px red left border
- Author name: Space Grotesk 16px, 600 weight, 3px letter-spacing, 60% white
- Designation: Space Mono 12px, 1.5px letter-spacing, 30% white

## Reference
- Built as v56 in Example: Filmstrip poster
- Score: 4/5

---

*Claude Design Engine by Rahaman Bin Ujit*
