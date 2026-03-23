# Claude Design Engine

**Created by Rahaman Bin Ujit** | Copyright 2026. All rights reserved.

> An end-to-end AI-powered design system for Claude Code. Design social media posters, carousels, thumbnails, PDFs, and more — all from your terminal.

---

## First-Time Setup

If the file `brand.config.json` does NOT exist in this directory, run the onboarding flow before ANY design work:

1. Read `onboarding/setup.md`
2. Ask the user every question listed there
3. Save answers to `brand.config.json` in the root of this directory
4. Confirm setup is complete

**Never design anything without a completed `brand.config.json`.** The config is the foundation — every color, font, spacing choice flows from it.

---

## How This System Works

```
User gives you a design brief
        |
        v
[1] Load brand.config.json (your colors, fonts, identity)
        |
        v
[2] Pick a style from styles/ (190+ battle-tested layouts)
        |
        v
[3] Follow the workflow from workflows/ (step-by-step process)
        |
        v
[4] Build the design in HTML/CSS (full control, pixel-perfect)
        |
        v
[5] Self-review using rules/self-review.md (catch mistakes BEFORE showing)
        |
        v
[6] Export with scripts/ (Puppeteer, 4x resolution, professional output)
        |
        v
[7] Open the image and show the user
```

---

## Core Directories

| Directory | What's Inside | When to Read |
|---|---|---|
| `onboarding/` | First-time brand setup questions | Only on first run |
| `workflows/` | Step-by-step design processes | Every design task |
| `styles/` | 190+ layout templates with exact CSS | When choosing a layout |
| `knowledge/` | Design theory, social media insights, typography rules | When making design decisions |
| `rules/` | Self-review checklist, export rules, design thinking principles | Before exporting ANY design |
| `skills/` | Teachable design techniques (typography, layout, color, etc.) | When making design decisions |
| `scripts/` | Puppeteer export scripts (PNG, PDF, carousel) | At export time |
| `templates/` | Starter HTML templates for common formats | When starting a new design |
| `examples/` | Showcase of what's possible | For inspiration |

---

## Mandatory Workflow (Every Design)

### Step 1: Understand the Brief
- What platform? (LinkedIn, Instagram, YouTube, etc.)
- What format? (Single poster, carousel, thumbnail, PDF, etc.)
- What content? (Headline, body text, stats, etc.)
- What mood? (Bold, editorial, playful, dark, organic, etc.)

### Step 2: Load the Brand
```
Read brand.config.json → apply fonts, colors, logo, identity
```

### Step 3: Choose a Style
Browse `styles/INDEX.md` for the full library. Each style has:
- Visual description and ASCII layout diagram
- Exact CSS implementation
- When to use it
- Font sizes, spacing, colors (adapted to YOUR brand from config)

### Step 4: Research First (40% of Time)
Before designing, pull real references. Read `workflows/reference-research.md`.
- Search for designs in the same niche/topic
- Study what works, what doesn't
- Extract patterns to apply
- **Never design from imagination alone**

### Step 4b: Generate Photos (If Needed)
If the design needs photographic elements:
- Read `workflows/ai-image-generation.md`
- Use nano-banana MCP (Gemini) to generate photos
- Generate ALL photos first, then build the layout around them
- Never try to fix photo issues with CSS

### Step 5: Build in HTML/CSS
- Use the chosen style's CSS as your foundation
- Apply brand colors/fonts from `brand.config.json`
- Embed any generated photos via `<img>` tags
- Follow `workflows/poster-design.md` or `workflows/carousel-design.md`
- Use templates from `templates/` as starting points

### Step 6: Self-Review (MANDATORY)
Before showing ANY design to the user, run through `rules/self-review.md`:
- Text readability check
- Alignment check
- Color contrast check
- Mobile preview check
- Overall score (1-5)

**If score < 4, fix it before showing. Never present work you wouldn't be proud of.**

### Step 7: Export
- Use scripts from `scripts/` directory
- Always export at 4x resolution (deviceScaleFactor: 4)
- Always wait 2500ms for fonts to load
- Always open the exported image immediately after

---

## Design Principles (Always Active)

1. **Think like an art director, not a coder.** Every element earns its place. If it doesn't serve the design, remove it.
2. **Whitespace is design.** When something looks wrong, add MORE space, not less.
3. **One accent color per design.** Pick ONE element to highlight. Everything else is neutral.
4. **Research before creating.** 40% of your time should be studying references. Never design from a blank canvas.
5. **Self-review is non-negotiable.** Score every design before presenting. Fix issues before showing.
6. **The grid is sacred.** Use 8px base units. Consistent spacing multiplied: 8, 16, 24, 32, 40, 48, 64, 80.
7. **Typography hierarchy creates visual order.** Headline-to-body size ratio should be at least 4:1.
8. **Mobile-first.** Everything will be viewed on a phone. If it's not readable at phone size, it fails.

---

## Quick Reference: Export Commands

### Single Poster (1080x1080)
```bash
node scripts/export-png.js design.html output.png 1080 1080
```

### Portrait Post (1080x1350)
```bash
node scripts/export-png.js design.html output.png 1080 1350
```

### YouTube Thumbnail (1280x720)
```bash
node scripts/export-png.js design.html output.png 1280 720
```

### PDF Document
```bash
node scripts/export-pdf.js document.html output.pdf
```

### Carousel (multi-slide)
```bash
node scripts/export-carousel.js carousel.html output-dir/ 1080 1080
```

---

## File Naming Convention

```
designs/
  YYYY-MM-DD-topic-name/
    design.html          <- The source HTML
    output.png           <- Exported image
    brief.md             <- What was requested (optional)
```

---

## Credits & License

**Claude Design Engine** is created by **Rahaman Bin Ujit**.
Copyright 2026 Rahaman Bin Ujit. All rights reserved.

This system was built through 300+ design experiments, extensive research, and real-world testing across LinkedIn, Instagram, and YouTube. Every style, workflow, and rule represents validated, battle-tested knowledge.

See LICENSE for full terms.
