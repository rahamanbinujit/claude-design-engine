# Carousel Design Workflow

Multi-slide content for LinkedIn, Instagram, and other platforms. Carousels get 596% more engagement than plain text — this is the highest-impact format.

---

## Format Specs

| Platform | Dimensions | Max Slides | Format |
|---|---|---|---|
| LinkedIn | 1080x1080 or 1080x1350 | 20 | PDF or images |
| Instagram | 1080x1080 or 1080x1350 | 10 | Images |
| Twitter/X | 1080x1080 | 4 | Images |

**Best practice:** 1080x1350 (4:5 portrait) takes more screen real estate on mobile. Use it when the platform supports it.

---

## Carousel Structure

### Optimal Length: 6-12 slides

```
Slide 1: HOOK         <- Stop the scroll. Problem or bold statement.
Slide 2: CONTEXT      <- Why this matters. Set up the value.
Slides 3-N: CONTENT   <- One idea per slide. The actual value.
Slide N+1: SUMMARY    <- Key takeaway. The "screenshot this" slide.
Last Slide: CTA       <- What to do next. Follow, save, share, comment.
```

---

## Design Consistency Rules

### Every slide shares:
- Same background color
- Same font families
- Same padding (consistent on all 4 sides)
- Same bottom zone (slide number, optionally name/logo)
- Same border-radius values

### What varies between slides:
- Content (obviously)
- Layout within the middle zone
- Accent color placement (one per slide, on the key element)
- Optional pattern interrupt on slide 2 (slightly different bg/color to prevent drop-off)

---

## Slide Templates

### Hook Slide (Slide 1)
```
+----------------------------------+
| TAG (small, muted)               |
|                                  |
|                                  |
|    BIG BOLD                      |
|    HEADLINE                      |
|    that makes them stop          |
|                                  |
|                                  |
| Name + Logo            Swipe ->  |
+----------------------------------+
```
- Headline: 56-72px, display font, weight 700
- Key word in accent color
- Include swipe indicator (arrow or text) on first slide
- Tag/category label at top

### Content Slide (Slides 2-N)
```
+----------------------------------+
| NUMBER / SECTION LABEL           |
|                                  |
|  POINT TITLE                     |
|  (bold, 32-40px)                 |
|                                  |
|  Supporting text that            |
|  explains the point.             |
|  (14-16px, secondary color)      |
|                                  |
|                         [01/08]  |
+----------------------------------+
```
- One idea per slide
- Max 30 words per slide
- Slide number in bottom corner

### Summary Slide
```
+----------------------------------+
| RECAP                            |
|                                  |
|  1. First point                  |
|  2. Second point                 |
|  3. Third point                  |
|  4. Fourth point                 |
|                                  |
|  "Screenshot this"               |
|                                  |
| Name                    [07/08]  |
+----------------------------------+
```

### CTA Slide (Last)
```
+----------------------------------+
|                                  |
|                                  |
|  Found this useful?              |
|                                  |
|  -> Follow for more              |
|  -> Save for later               |
|  -> Share with someone           |
|     who needs this               |
|                                  |
|                                  |
| Name + Logo             [08/08]  |
+----------------------------------+
```

---

## HTML Structure for Carousels

Build all slides in a single HTML file. Each slide is a `.page` div.

```html
<body>
  <div class="page" id="slide-1">
    <!-- Hook slide -->
  </div>
  <div class="page" id="slide-2">
    <!-- Content slide -->
  </div>
  <!-- ... more slides -->
</body>
```

```css
.page {
  width: 1080px;
  height: 1080px;    /* or 1350px for portrait */
  overflow: hidden;
  page-break-after: always;
  display: flex;
  flex-direction: column;
  padding: 48px;
}
```

---

## Export Options

### Option 1: Individual PNGs (Instagram, Twitter)
```bash
node scripts/export-carousel.js carousel.html output-dir/ 1080 1080
```
Exports each `.page` as a separate PNG file.

### Option 2: PDF (LinkedIn)
```bash
node scripts/export-pdf.js carousel.html carousel.pdf
```
Exports all pages as a single PDF document.

---

## Pro Tips

1. **Pattern interrupt on slide 2:** Change the background slightly (e.g., accent tint) to prevent users from swiping away after the hook
2. **Directional cues:** Subtle arrows or "Swipe" text on early slides encourages completion
3. **Visual flow:** Make design elements "bleed" across slide boundaries — a line or shape that continues onto the next slide
4. **Consistent numbering:** Show slide count (01/08) so users know how much content is left
5. **The hook is everything:** If slide 1 doesn't stop the scroll, the other 11 slides don't exist

---

*Claude Design Engine by Rahaman Bin Ujit*
