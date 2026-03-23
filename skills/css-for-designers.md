# Skill: CSS for Designers

> The essential CSS patterns for building professional designs. You don't need to learn all of CSS — just these patterns.

---

## The Only CSS You Need

### 1. The Reset
Every HTML design starts with this. Non-negotiable.

```css
* { margin: 0; padding: 0; box-sizing: border-box; }
```

`box-sizing: border-box` means padding is included in width/height calculations. Without it, a 1080px element with 40px padding becomes 1160px wide.

### 2. The Canvas
Set exact dimensions on `body` to match your export size.

```css
body {
  width: 1080px;
  height: 1080px;     /* or 1350 for portrait */
  overflow: hidden;    /* nothing bleeds outside */
  background: #0A0A0A;
  font-family: 'Your Font', sans-serif;
}
```

### 3. Flexbox for Everything

**Vertical stack (most common):**
```css
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 48px;
}
```

**Horizontal row:**
```css
.row {
  display: flex;
  gap: 24px;
}
.row > * { flex: 1; }  /* Equal width children */
```

**Space between (header/footer bars):**
```css
.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

**Center everything:**
```css
.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**Fill remaining space:**
```css
.fills-space { flex: 1; }
```

### 4. Spacing with Gap
Use `gap` between siblings. Never margin for spacing between sibling elements.

```css
/* GOOD — gap */
.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* BAD — margin */
.list > * {
  margin-bottom: 16px;
}
.list > *:last-child {
  margin-bottom: 0;  /* Have to undo the last one */
}
```

### 5. Text Styling Patterns

```css
/* Headline */
.headline {
  font-family: 'Display Font', sans-serif;
  font-size: 64px;
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1.05;
  color: #FFFFFF;
}

/* Body text */
.body {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255,255,255,0.6);
}

/* Tag / Label */
.tag {
  font-family: 'Mono Font', monospace;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(255,255,255,0.4);
}

/* Accent glow (dark bg only) */
.accent {
  color: #C83C32;
  text-shadow:
    0 0 20px rgba(200,60,50,0.5),
    0 0 60px rgba(200,60,50,0.25);
}
```

### 6. Cards

```css
.card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 32px;
}
```

### 7. Images

```css
/* Fill a container */
img {
  width: 100%;
  height: 100%;
  object-fit: cover;    /* Crops to fill, maintains aspect ratio */
  border-radius: 12px;
}

/* Circular avatar */
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
```

### 8. Gradient Overlays (on photos)

```css
.photo-container {
  position: relative;
}

.photo-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  border-radius: 0 0 12px 12px;
}
```

### 9. Pill Badges

```css
.pill {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: var(--accent);
  color: #FFFFFF;
}
```

### 10. CSS Grid (for Bento layouts)

```css
.bento {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}

/* Make an element span 2 columns */
.span-2 { grid-column: span 2; }

/* Make an element span full width */
.full-width { grid-column: 1 / -1; }
```

---

## Loading Google Fonts

Always load fonts in the `<head>` of your HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

**How to construct the URL:**
1. Go to [fonts.google.com](https://fonts.google.com)
2. Pick your fonts
3. Select the specific weights you need (don't load ALL weights)
4. Copy the `<link>` tag

**Weights to load:**
- Display font: just 700 (and maybe 300 for mixed-weight headlines)
- Body font: 300, 400, 500, 600, 700 (flexibility)
- Mono font: 400, 700

---

## Clip-Path Shapes

For non-rectangular photo crops:

```css
/* Circle */
clip-path: circle(50%);

/* Diagonal cut */
clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

/* Hexagon */
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
```

---

## Position: Absolute (Decorative Only)

Only use `position: absolute` for decorative elements that overlay the layout:

```css
/* Corner markers, grid lines, watermarks */
.decorative {
  position: absolute;
  top: 20px;
  left: 20px;
  pointer-events: none;  /* Don't interfere with layout */
}
```

**NEVER use absolute positioning for layout.** That's what flexbox is for.

---

## Practice Exercises

1. **Flexbox Only:** Build a poster using only `display: flex`, `gap`, and `padding`. No margins, no absolute positioning.
2. **3-Zone Template:** Create the 3-zone layout from scratch. Put a headline in the middle, tag at top, name at bottom. Center the headline vertically.
3. **Card Grid:** Build a 3-column bento grid with CSS Grid. Make the first card span full width.
4. **Font Loading:** Load 3 Google Fonts and use each for its intended role (display, body, mono).

---

*Claude Design Engine by Rahaman Bin Ujit*
