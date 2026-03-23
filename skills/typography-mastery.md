# Skill: Typography Mastery

> The single most impactful design skill. Master typography and your designs look professional even with the simplest layouts.

---

## Core Techniques

### 1. The Weight Contrast Technique
Never use medium weights. Go extreme: 300 (light) paired with 700 (bold).

```css
/* WRONG — boring, no contrast */
h1 { font-weight: 500; }
p  { font-weight: 400; }

/* RIGHT — dramatic, creates rhythm */
h1 { font-weight: 700; }
.light-word { font-weight: 300; }  /* Mix within the same headline */
```

**Apply it:** In every headline, split words into light and bold. The bold words carry the message. The light words are connective tissue.

```html
<h1>
  <span class="light">The future of</span>
  <span class="bold">marketing</span>
  <span class="light">is</span>
  <span class="bold accent">AI.</span>
</h1>
```

### 2. The 4:1 Hierarchy Rule
Your headline should be at least 4x larger than your body text. This creates instant visual order.

```
Headline:  64px  (reads first — 0.5 seconds)
Body:      14px  (reads second — if they care)
Label:     10px  (reads third — or never)
Ratio: 64/14 = 4.6:1 ✓
```

**Common failure:** Headlines at 28px, body at 16px = 1.75:1 ratio. No hierarchy. Eyes wander.

### 3. Letter-Spacing Inversion
Large text = tight. Small text = wide. Always.

```css
/* Large headlines — TIGHT tracking */
.headline-72px { letter-spacing: -2px; }
.headline-120px { letter-spacing: -5px; }
.giant-300px { letter-spacing: -12px; }

/* Small labels — WIDE tracking */
.label-11px {
  text-transform: uppercase;
  letter-spacing: 0.15em;
}
```

**Why:** Large characters have natural spacing that looks loose. Tightening them creates density and impact. Small uppercase text needs air to be readable.

### 4. Line-Height Control
Headlines: tight (1.0-1.1). Body: generous (1.5-1.7). Labels: none (1.0).

```css
.headline { line-height: 1.05; }  /* Lines almost touching — creates a block */
.body     { line-height: 1.65; }  /* Comfortable reading rhythm */
.label    { line-height: 1.0; }   /* Single line, no extra space */
```

### 5. The Accent Word
One word in your headline gets the accent color. Choose the word that carries the most meaning.

```css
.accent {
  color: var(--accent-color);
  /* On dark backgrounds, add glow: */
  text-shadow: 0 0 20px rgba(var(--accent-rgb), 0.4),
               0 0 60px rgba(var(--accent-rgb), 0.2);
}
```

**Rule:** If you accent more than one word, you've accented zero words. The power is in singularity.

### 6. Font Pairing
Maximum 3 fonts. Each has a role:

| Role | Type | Examples |
|---|---|---|
| **Display** | Bold, attention-grabbing | Space Grotesk 700, Montserrat 800, Playfair Display |
| **Body** | Clean, readable | Inter, DM Sans, Source Sans Pro |
| **Mono** | Technical, label feel | Space Mono, JetBrains Mono, Fira Code |

**Pairing rule:** Match the "skeleton" (geometric + geometric, humanist + humanist) but contrast the weight and style.

### 7. Text as Architecture
Think of text blocks as rectangular shapes in your layout, not as "content to read." The visual shape of a text block matters:

- A 3-line headline creates a wide rectangle
- A 1-line headline creates a thin bar
- A paragraph creates a block
- A label creates a pill

Arrange these shapes for visual balance before worrying about the words.

---

## Practice Exercises

1. **Weight Mixing:** Take any sentence. Split it into light (300) and bold (700) words. Does the bold text alone tell the story?
2. **Scale Extreme:** Design a poster with only 2 font sizes: 120px and 11px. Nothing in between.
3. **Accent Choice:** Given a headline of 8 words, which ONE word gets the accent? Try different choices — the best one changes the meaning.
4. **Tracking Test:** Set the same text at -3px, 0px, and 0.15em letter-spacing. See how each changes the feeling.

---

*Claude Design Engine by Rahaman Bin Ujit*
