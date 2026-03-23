# Poster Design Workflow

The complete process for designing a single-image social media post (LinkedIn, Instagram, Twitter/X).

---

## The Pipeline

```
Brief -> Research -> Style -> HTML Build -> Self-Review -> Export -> Open
```

Never skip a step. Especially not research and self-review.

---

## Step 1: Understand the Brief

Before touching any code, answer:
- What's the ONE message this poster communicates?
- Who's going to see this? (platform + audience)
- What emotion should it trigger? (inspiration, curiosity, urgency, trust)
- What action should they take after seeing it? (read the caption, save, share, click)

**Rule: One poster = one message.** If you have multiple messages, you need a carousel.

---

## Step 2: Research References (40% of your time)

Read `reference-research.md` for the full process.

Quick version:
1. Search for existing designs in the same topic/niche
2. Study 3-5 references that work well
3. Extract patterns: What layout? What typography? What colors? What makes it stop-scroll?
4. Apply patterns to your design

**Never design from imagination alone.**

---

## Step 3: Choose a Style

Open `styles/INDEX.md` and pick a style that matches:
- The content type (stats? quote? comparison? announcement?)
- The mood (bold? minimal? editorial? playful?)
- The brand vibe (from `brand.config.json`)

Each style file has a complete CSS implementation. Use it as your foundation.

---

## Step 4: Build in HTML/CSS

### Load the brand config
```javascript
// Read brand.config.json for all values
const brand = require('./brand.config.json');
```

### Start from a template
Copy `templates/poster-1080.html` (or `poster-1350.html` for portrait) and modify.

### The 3-Zone Layout (use for EVERY design)

```
+----------------------------------+
|          TOP ZONE                |  <- Tag, category label
|          (fixed height)          |
+----------------------------------+
|                                  |
|         MIDDLE ZONE              |  <- Main content (flex: 1)
|         (flexible, fills space)  |
|                                  |
+----------------------------------+
|         BOTTOM ZONE              |  <- Name, logo, footer
|         (fixed height)           |
+----------------------------------+
```

```css
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px; /* from brand.config.json: style.base_padding */
}
.top-zone { /* fixed */ }
.middle-zone { flex: 1; display: flex; flex-direction: column; justify-content: center; }
.bottom-zone { /* fixed */ }
```

### Typography rules
- Headlines: display_font, 48-72px, weight 700, letter-spacing: -2px, line-height: 1.05
- Body: body_font, 13-16px, weight 400, line-height: 1.6
- Tags/labels: mono_font, 10-12px, weight 400-700, uppercase, letter-spacing: 0.15em
- Size ratio between headline and body: minimum 4:1

### Color rules
- ONE accent color per design, on ONE element only
- Never pure black (#000) or pure white (#FFF) — use warm variants
- Text secondary = primary text at 60% opacity
- Text muted = primary text at 35% opacity

### Spacing rules
- Base unit: 8px
- All spacing is a multiple of 8: 8, 16, 24, 32, 40, 48, 64, 80
- Consistent padding on ALL sides (same value)
- Use `gap` for spacing between siblings, not `margin`

---

## Step 5: Design Checklist (Before Self-Review)

- [ ] Only ONE message communicated
- [ ] Headline is readable at phone size (48px minimum)
- [ ] Accent color on exactly ONE element
- [ ] Consistent padding on all sides
- [ ] 3-zone layout used (top/middle/bottom)
- [ ] Name/designation at bottom
- [ ] No pure black or pure white
- [ ] Font weights loaded via Google Fonts URL
- [ ] Body dimensions match intended export size

---

## Step 6: Self-Review

Run through `rules/self-review.md`. Score must be 4+ before showing.

---

## Step 7: Export

```bash
node scripts/export-png.js design.html output.png 1080 1080
```

**Critical export settings:**
- `deviceScaleFactor: 4` (always)
- Wait 2500ms for fonts
- Clip to exact dimensions
- Output: 4320x4320px PNG

---

## Step 8: Open and Verify

Always open the exported image immediately. Never wait for the user to ask.

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Cramped layout | Increase padding, reduce content |
| Too many messages | Pick ONE. The rest go in the caption |
| Accent on multiple elements | Pick the MOST important one |
| Text unreadable on mobile | Increase font size, increase contrast |
| Design looks like a template | Break the grid slightly, add texture, vary spacing |
| No visual hierarchy | Make the headline 4x bigger than body text |

---

*Claude Design Engine by Rahaman Bin Ujit*
