# Typography Rules

> Typography is 80% of design. Master these rules and your designs will look professional even with simple layouts.

---

## The Type Scale

Establish a strict hierarchy. Never eyeball font sizes.

### Recommended Scale

| Role | Size Range | Weight | Spacing | Line Height |
|---|---|---|---|---|
| Hero/Giant | 120-420px | 700-900 | -6 to -18px | 0.85-0.95 |
| Headline | 48-72px | 700 | -2 to -3px | 1.0-1.1 |
| Subhead | 24-36px | 600 | -1px | 1.2 |
| Body | 13-18px | 400 | 0 | 1.5-1.7 |
| Label/Tag | 10-13px | 400-700 | 0.12-0.18em | 1.0 |
| Metadata | 9-11px | 400 | 0.10-0.15em | 1.0 |

### The 4:1 Rule
The ratio between your headline and body text should be at least 4:1.

```
Good:  64px headline / 14px body = 4.6:1
Bad:   32px headline / 16px body = 2:1 (no hierarchy)
Great: 96px headline / 14px body = 6.9:1 (strong hierarchy)
```

---

## Letter-Spacing Rules

### Headlines: TIGHT (negative values)
Large text needs tight tracking to look cohesive. The larger the text, the tighter the tracking.

```css
/* 48px headline */
letter-spacing: -1px;

/* 72px headline */
letter-spacing: -2px;

/* 120px+ hero text */
letter-spacing: -4px to -8px;

/* 300px+ giant text */
letter-spacing: -12px to -18px;
```

### Labels & Tags: WIDE (positive em values)
Small uppercase text needs wide tracking for readability.

```css
/* Tags and labels */
text-transform: uppercase;
letter-spacing: 0.12em;  /* minimum */
letter-spacing: 0.18em;  /* comfortable */
letter-spacing: 0.25em;  /* very airy */
```

### Body Text: DEFAULT (zero or minimal)
Body text should use default tracking. Don't touch it.

```css
letter-spacing: 0;  /* or just don't set it */
```

---

## Font Pairing Rules

### The 2-3 Font Rule
Never use more than 3 fonts in a design. Ideal setup:

1. **Display font** — for headlines (bold, attention-grabbing)
2. **Body font** — for readable text (clean, neutral)
3. **Mono font** — for tags, labels, metadata (optional, technical feel)

### Pairing Strategies

**Sans + Sans (Modern/Tech)**
- Display: Space Grotesk, Outfit, Montserrat
- Body: Inter, DM Sans, Nunito
- Mono: Space Mono, JetBrains Mono

**Serif + Sans (Editorial/Premium)**
- Display: Playfair Display, Merriweather, Lora
- Body: Inter, Source Sans Pro, Open Sans
- Mono: IBM Plex Mono

**Handwritten + Sans (Organic/Personal)**
- Display: Caveat, Patrick Hand, Kalam
- Body: Inter, Nunito, Quicksand
- Mono: Courier New (classic)

**Display + Neutral (Bold/Statement)**
- Display: Anton, Bebas Neue, Oswald
- Body: Inter, Roboto
- Mono: Space Mono, Fira Code

### Weight Contrast
Use extreme weight contrast within a single font family:
- Light (300) + Bold (700) creates rhythm and hierarchy
- Never use medium weights (400-500) for headlines — they're boring
- Ultra-light or ultra-bold — commit to one extreme

---

## Font Size for Different Contexts

### Social Media Posts (1080px width)
```
Headline:     48-72px
Subhead:      24-32px
Body:         14-18px (minimum 13px for mobile readability)
Tag/Label:    10-13px
Metadata:     9-11px
```

### YouTube Thumbnails (1280px width)
```
Hero text:    72-120px (must read at 120px thumbnail width)
Secondary:    36-48px
```

### PDF Documents (794px A4 width)
```
Title:        42-52px
H2:           28px
H3:           18px
Body:         13px
Metadata:     10px
```

---

## Typography Techniques

### Mixed Weight Headlines
Combine light (300) and bold (700) weights in a single headline for rhythm:

```html
<h1>
  <span style="font-weight: 300">The future of</span>
  <span style="font-weight: 700">design</span>
  <span style="font-weight: 300">is</span>
  <span style="font-weight: 700; color: var(--accent)">code.</span>
</h1>
```

### Accent Word Treatment
Highlight ONE word in accent color. Apply to the most important word:

```css
.accent-word {
  color: var(--accent);
  /* Optional glow for dark backgrounds: */
  text-shadow: 0 0 20px rgba(var(--accent-rgb), 0.4);
}
```

### Uppercase Labels
Small text benefits from uppercase + wide tracking:

```css
.label {
  font-family: var(--mono-font);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.5;
}
```

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| All text the same size | Create extreme contrast (4:1+ ratio) |
| Medium weights everywhere | Use 300 and 700 only. Skip 400-500 for headlines |
| Positive letter-spacing on headlines | Use negative values (-1px to -3px) |
| Too many fonts | Maximum 3. Usually 2 is enough |
| Body text too small | Minimum 13px at 1080px width |
| No tracking on uppercase labels | Add letter-spacing: 0.12em minimum |
| Centered text blocks | Left-align for readability. Center only for headlines |

---

*Claude Design Engine by Rahaman Bin Ujit*
