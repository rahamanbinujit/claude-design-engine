# Skill: Color Application

> Color is information, not decoration. Learn to use it with surgical precision.

---

## Core Techniques

### 1. The One-Accent Rule
Every design gets ONE accent color on ONE element. Not two. Not "a little here and there."

```css
/* ONE accent — powerful */
.key-word { color: #C83C32; }

/* Multiple accents — diluted, chaotic */
.word1 { color: #C83C32; }
.word2 { color: #C83C32; }  /* NO — accent on two things = accent on nothing */
.stat { border: 2px solid #C83C32; }  /* NO — that's a third accent */
```

**How to choose which element gets the accent:** Pick the ONE thing you want the viewer to remember. That gets the color.

### 2. Opacity-Based Hierarchy
Don't use different colors for text levels. Use the SAME color at different opacities:

```css
/* On dark backgrounds */
--headline:  rgba(255,255,255, 1.0);    /* 100% — primary */
--body:      rgba(255,255,255, 0.6);    /* 60%  — secondary */
--label:     rgba(255,255,255, 0.35);   /* 35%  — tertiary */
--ghost:     rgba(255,255,255, 0.15);   /* 15%  — decorative */

/* On light backgrounds */
--headline:  rgba(26,20,16, 1.0);       /* 100% — primary */
--body:      rgba(40,30,20, 0.55);      /* 55%  — secondary */
--label:     rgba(40,30,20, 0.35);      /* 35%  — tertiary */
--ghost:     rgba(40,30,20, 0.15);      /* 15%  — decorative */
```

**Why warm, not pure?** `rgba(40,30,20)` has warm brown undertones. `rgba(128,128,128)` is cold blue-gray. Warm always feels more human and premium.

### 3. No Pure Black, No Pure White
Pure `#000000` and `#FFFFFF` create harsh, digital-feeling contrast.

```css
/* WRONG — harsh, cold */
background: #000000;
color: #FFFFFF;

/* RIGHT — warm, refined */
background: #0A0A0A;   /* Near-black with warmth */
color: #F5F0E6;        /* Off-white with warmth */
```

The difference is subtle but the feeling is dramatically different. Premium brands never use pure extremes.

### 4. Dark vs Light Background Selection

| Choose Dark When... | Choose Light When... |
|---|---|
| Bold statement / authority | Educational / approachable |
| Stats / data impact | Personal stories |
| Thought leadership | How-to / tutorials |
| Tech / AI content | Organic / handmade feel |
| Dramatic contrast needed | Warm, inviting mood |

### 5. The Glow Technique (Dark Backgrounds Only)
On dark backgrounds, accent colors can glow. This creates depth and draws the eye.

```css
.accent-glow {
  color: var(--accent);
  text-shadow:
    0 0 20px  rgba(var(--accent-rgb), 0.6),  /* Tight glow */
    0 0 60px  rgba(var(--accent-rgb), 0.3),  /* Medium spread */
    0 0 120px rgba(var(--accent-rgb), 0.15); /* Wide ambient */
}
```

**Three layers:** tight (sharp halo), medium (color spread), wide (ambient glow). Never just one layer — it looks flat.

### 6. Card & Container Colors

```css
/* Dark theme cards */
.card {
  background: rgba(255,255,255, 0.05);   /* Barely visible lift */
  border: 1px solid rgba(255,255,255, 0.08); /* Ghost border */
}

/* Light theme cards */
.card {
  background: rgba(255,250,240, 0.6);    /* Warm translucent white */
  border: 1px solid rgba(40,30,20, 0.08); /* Ghost border */
}

/* Accent card (ONE per design) */
.accent-card {
  border: 2px solid var(--accent);       /* Solid accent border */
  /* OR */
  background: rgba(var(--accent-rgb), 0.06); /* Accent tint */
}
```

### 7. Contrast Testing
Text must be readable. Minimum contrast ratios:

```
Headlines:     4.5:1  (WCAG AA)
Body text:     7:1    (WCAG AAA recommended)
Decorative:    3:1    (if non-essential)
```

**Quick test:** Squint at the design. If you can't read the text while squinting, contrast is too low.

---

## Color Palette Construction

### Method: Start With 3 Colors

1. **Background** — your canvas (dark or light)
2. **Text** — high contrast against background
3. **Accent** — emotional punch (ONE element only)

Then derive everything else through opacity:

```
Background: #0A0A0A
├── Text Primary:   #FFFFFF (100%)
├── Text Secondary: rgba(255,255,255, 0.6)
├── Text Muted:     rgba(255,255,255, 0.35)
├── Text Ghost:     rgba(255,255,255, 0.15)
├── Card BG:        rgba(255,255,255, 0.05)
├── Card Border:    rgba(255,255,255, 0.08)
├── Accent:         #C83C32
├── Accent Glow:    rgba(200,60,50, 0.5)
└── Accent Tint:    rgba(200,60,50, 0.06)
```

**All 9 colors derived from just 3 base colors.** This is how consistency works.

---

## Practice Exercises

1. **One Accent Challenge:** Design a poster using only 3 colors: background, text, and ONE accent element. The design should still feel complete.
2. **Opacity Scale:** Create 4 lines of text using the same base color at 100%, 60%, 35%, and 15% opacity. See how hierarchy emerges from opacity alone.
3. **Warm vs Cold:** Create the same layout twice: once with warm neutrals (#1A1410, #F2E8D5) and once with cold neutrals (#000000, #FFFFFF). Feel the difference.
4. **Glow Layers:** Add a text glow using 1 layer, then 2 layers, then 3 layers. See how depth builds.

---

*Claude Design Engine by Rahaman Bin Ujit*
