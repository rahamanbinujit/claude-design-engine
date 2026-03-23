---
name: comic-book
description: Pop art comic book / manga panel. Ben-Day halftone dots, speech bubbles with tails, thought bubbles, yellow SFX starburst, thick black borders, caption boxes, speed lines. Multiple narrative voices in one design. Bangers + Permanent Marker fonts.
status: KEEP
quality-score: 4.5
niche: Comic book / Pop art
---

# Comic Book Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Palette
- **Background:** Aged paper `#FFF8E7`
- **Black:** `#1A1A1A` (outlines, everything)
- **Red:** `#E23636` (halftone zone, accent text)
- **Blue:** `#2B5EA7` (panels, accent text)
- **Yellow:** `#FFD93D` (SFX, starburst, caption boxes)
- **White:** `#FFFFFF` (speech/thought bubbles)

## Comic Elements

### Speech Bubble
```css
.speech-bubble {
  background: #FFF; border: 4px solid #1A1A1A; border-radius: 50px;
}
.speech-bubble::after { /* black tail */ border-top: 28px solid #1A1A1A; }
.speech-bubble::before { /* white fill */ border-top: 22px solid #FFF; z-index: 1; }
```

### Ben-Day Halftone Dots
```css
background-image: radial-gradient(circle, rgba(26,26,26,0.06) 1px, transparent 1px);
background-size: 8px 8px;
```

### SFX Text (BOOM!, POW!, etc.)
Bangers font, 88px, colored fill + 4-direction text-shadow for outline:
```css
text-shadow: 4px 4px 0 #1A1A1A, -1px -1px 0 #1A1A1A, 1px -1px 0 #1A1A1A, -1px 1px 0 #1A1A1A;
```
SVG starburst polygon behind.

### Speed Lines
24 absolutely-positioned lines radiating at 15deg intervals from center, 1.5px, 6% black.

## Typography
- **SFX/Headlines:** Bangers, 36-88px (THE comic font)
- **Narrative:** Permanent Marker, 18-24px
- **Captions:** Courier Prime, 14px, weight 700 (narrator voice)
- **Thought:** Permanent Marker, 16px (internal monologue)
- **Stat numbers:** Bangers, 56px
- **Labels:** Courier Prime, 10px, weight 700

## Narrative Voices (what makes this unique)
Comics have MULTIPLE voices in one design:
1. **Narrator** (yellow caption box): "MEANWHILE..."
2. **Dialogue** (speech bubble): "One person. 66 skills."
3. **Thought** (thought bubble): "what if I built it all?"
4. **SFX** (starburst): "BOOM!"
5. **Closing** (Permanent Marker): "The origin story..."

## Photo Treatment
- `filter: grayscale(1) contrast(1.8) brightness(1.1)` = extreme B&W = comic art
- 4px black border frame
- Speed lines radiate from behind photo

## Best For
- Fun/irreverent personal brand posts
- Origin story posts
- Achievement announcements with humor
- Any post that benefits from NARRATIVE structure (setup → hero → punchline)
- Pattern interrupt -- nobody expects a comic on LinkedIn

---

*Claude Design Engine by Rahaman Bin Ujit*
