# Skill: Layout & Composition

> How to arrange elements so the design feels intentional, balanced, and professional.

---

## Core Techniques

### 1. The 3-Zone System
Every design has exactly 3 vertical zones. This is the foundation of consistent layout.

```
┌──────────────────────────┐
│       TOP ZONE           │  ← Small: tag, category, date
│       (fixed height)     │
├──────────────────────────┤
│                          │
│      MIDDLE ZONE         │  ← Large: hero content (flex: 1)
│      (fills remaining)   │
│                          │
├──────────────────────────┤
│      BOTTOM ZONE         │  ← Small: name, logo, metadata
│      (fixed height)      │
└──────────────────────────┘
```

```css
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 48px;
}
.top { /* auto height */ }
.middle { flex: 1; display: flex; flex-direction: column; justify-content: center; }
.bottom { /* auto height */ }
```

**Why it works:** The middle zone with `flex: 1` absorbs all available space. Content centers vertically. Top and bottom are anchored. Nothing overlaps. Works for every format.

### 2. The 8px Grid
All spacing is a multiple of 8. No exceptions.

```
Valid:   8, 16, 24, 32, 40, 48, 56, 64, 72, 80px
Invalid: 13, 17, 25, 35, 42, 55px
```

**Apply it:**
```css
.container { padding: 48px; }     /* 48 = 8 × 6 ✓ */
.sections { gap: 24px; }          /* 24 = 8 × 3 ✓ */
.cards { gap: 16px; }             /* 16 = 8 × 2 ✓ */
.card { padding: 32px; }          /* 32 = 8 × 4 ✓ */
.card { border-radius: 16px; }    /* 16 = 8 × 2 ✓ */
```

**The eye detects inconsistency subconsciously.** Grid-aligned designs feel "right" even when you can't explain why.

### 3. Focal Point First
Every design has ONE dominant element. The eye goes there first. Everything else is supporting.

```
Strong focal point:     Weak focal point:
┌──────────────┐        ┌──────────────┐
│              │        │ TEXT  TEXT    │
│  BIG TEXT    │        │  text  text  │
│              │        │ TEXT  TEXT    │
│  small text  │        │  text  text  │
│              │        │ TEXT  TEXT    │
└──────────────┘        └──────────────┘
```

**How to create a focal point:**
- Make it 4x bigger than everything else
- Give it the accent color
- Give it the most whitespace around it
- Place it at the visual center (slightly above mathematical center)

### 4. Whitespace as Design Element
The empty space IS the design. It's not "unused area."

```css
/* Amateur — cramped, everything touching */
.container { padding: 16px; }
.sections { gap: 8px; }

/* Professional — breathing room, confident */
.container { padding: 48px; }
.sections { gap: 32px; }
```

**Whitespace communicates:**
- Premium/luxury brands use the MOST whitespace
- Cramped designs feel cheap and desperate
- When something looks wrong, add MORE space first

### 5. Flexbox for Everything
Use flexbox for ALL layout. Never `position: absolute` for layout (only for decorative overlays).

```css
/* Side-by-side elements */
.row { display: flex; gap: 24px; }
.row > * { flex: 1; }  /* Equal width */

/* Stacked elements */
.column { display: flex; flex-direction: column; gap: 16px; }

/* Space between */
.bar { display: flex; justify-content: space-between; align-items: center; }

/* Centered content */
.hero { display: flex; align-items: center; justify-content: center; }
```

**Use `gap` instead of `margin`** for spacing between siblings. Gap is cleaner, more predictable, and doesn't cause margin collapse issues.

### 6. Consistent Padding
Same padding value on all 4 sides of every container. Different padding values = subtle but visible inconsistency.

```css
/* WRONG — asymmetric, looks off */
.container { padding: 32px 48px 24px 48px; }

/* RIGHT — uniform, feels balanced */
.container { padding: 48px; }
```

### 7. The Rule of Asymmetry
Perfect center alignment can feel static. Intentional asymmetry creates energy:

```
Centered (safe but static):     Left-aligned (dynamic):
┌──────────────────┐            ┌──────────────────┐
│                  │            │ TAG              │
│   BIG HEADLINE   │            │                  │
│                  │            │ BIG HEADLINE     │
│   body text      │            │ THAT FILLS       │
│                  │            │ LEFT SIDE        │
│   Name           │            │                  │
└──────────────────┘            │ body text here   │
                                │                  │
                                │ Name       Logo  │
                                └──────────────────┘
```

Left-align by default. Center only for short headlines (1-3 words) or CTA slides.

---

## Layout Patterns Cheat Sheet

### Single Message
```
┌──────────────┐
│ tag          │
│              │
│ HEADLINE     │
│ subtitle     │
│              │
│ name    logo │
└──────────────┘
```

### Stat + Context
```
┌──────────────┐
│ tag          │
│              │
│ 10x          │  ← Giant number
│ ___          │  ← Red line
│ context line │
│              │
│ name         │
└──────────────┘
```

### Two Columns
```
┌──────────────────┐
│ tag              │
│                  │
│ HEADLINE         │
│                  │
│ ┌─────┐ ┌─────┐ │
│ │ A   │ │ B   │ │
│ └─────┘ └─────┘ │
│                  │
│ name        logo │
└──────────────────┘
```

### Bento Grid
```
┌──────────────────┐
│ ┌──────────────┐ │
│ │  HERO CARD   │ │
│ ├────┬────┬────┤ │
│ │ S1 │ S2 │ S3 │ │
│ ├────┴──┬─┴────┤ │
│ │ QUOTE │ NAME │ │
│ └───────┴──────┘ │
└──────────────────┘
```

---

## Practice Exercises

1. **3-Zone Everything:** Take any design and identify the 3 zones. If you can't, the layout needs restructuring.
2. **Grid Audit:** Check all spacing values in a design. Are they all multiples of 8?
3. **Focal Point Test:** Squint at your design. What do you see first? If the answer is "everything equally," there's no focal point.
4. **Whitespace Challenge:** Take a cramped design. Double all padding and gap values. Compare.

---

*Claude Design Engine by Rahaman Bin Ujit*
