# Color Theory for Social Media Design

> Color is information, not decoration. Every color choice should serve a purpose.

---

## The 3-Color Rule

Every design should use a maximum of 3-4 colors:

1. **Background** — The canvas. Sets the mood.
2. **Text** — Primary content. High contrast against background.
3. **Accent** — ONE highlight. Used on the SINGLE most important element.
4. **Secondary text** (optional) — Primary text at reduced opacity.

That's it. If you're reaching for a 5th color, remove one.

---

## Background Strategies

### Light Backgrounds (Approachable, Educational)
```css
/* Warm white — never pure #FFFFFF */
background: #F2E8D5;  /* Kraft paper */
background: #FAFAF5;  /* Off-white */
background: #F5F0E8;  /* Warm cream */
```
- Feels friendly, open, accessible
- Best for: educational content, personal posts, carousel slides
- Pair with: dark text (#1A1410 or similar), warm accent

### Dark Backgrounds (Bold, Editorial, Authority)
```css
/* Deep dark — never pure #000000 */
background: #0A0A0A;  /* Near-black */
background: #111111;  /* Soft dark */
background: #1A1410;  /* Warm dark */
```
- Feels authoritative, dramatic, premium
- Best for: thought leadership, stats posts, bold statements
- Pair with: white/off-white text, bright accent (red, amber, blue)

### Why No Pure Black or White?
Pure #000000 and #FFFFFF create harsh contrast that feels digital and cold. Warm variants create subtle warmth that feels more human and professional.

---

## Text Color Hierarchy

Use opacity to create text hierarchy, not different colors:

```css
/* On dark backgrounds */
--text-primary: #FFFFFF;                    /* 100% — headlines */
--text-secondary: rgba(255,255,255,0.6);   /* 60% — body text */
--text-muted: rgba(255,255,255,0.35);      /* 35% — labels, metadata */
--text-ghost: rgba(255,255,255,0.15);      /* 15% — decorative */

/* On light backgrounds */
--text-primary: #1A1410;                   /* 100% — headlines */
--text-secondary: rgba(40,30,20,0.55);     /* 55% — body text */
--text-muted: rgba(40,30,20,0.35);         /* 35% — labels, metadata */
--text-ghost: rgba(40,30,20,0.15);         /* 15% — decorative */
```

**Rule:** Use warm-based RGBA (brown-tinted, not blue-gray) for text opacity.

---

## Accent Color Psychology

Your accent color sends a message. Choose intentionally:

| Color | Psychology | Best For |
|---|---|---|
| **Red** (#C83C32) | Bold, urgent, powerful | Tech, marketing, contrarian content |
| **Blue** (#2563EB) | Trust, stability, calm | Finance, SaaS, professional services |
| **Green** (#16A34A) | Growth, health, success | Health, sustainability, growth metrics |
| **Orange** (#EA580C) | Energy, creativity, warmth | Creative, startup, design content |
| **Purple** (#7C3AED) | Premium, creative, innovative | Luxury, creative agencies, innovation |
| **Yellow** (#EAB308) | Optimism, attention, clarity | Education, tutorials, highlights |
| **Amber** (#D97706) | Warm, inviting, human | Personal brand, coaching, lifestyle |
| **Cyan** (#06B6D4) | Fresh, modern, tech | Tech, AI, developer content |

### Accent Color Rules
1. **ONE accent element per design.** Not two. Not "a little here and there." ONE.
2. Apply accent to the MOST important element (key word, key stat, key button)
3. Accent glow (on dark backgrounds): `text-shadow: 0 0 20px rgba(accent, 0.4)`
4. Accent can be used for: text color, underline, border, background of a pill/badge

---

## Color Combinations That Work

### Dark + Red (Bold Authority)
```css
--bg: #0A0A0A;
--text: #FFFFFF;
--accent: #C83C32;
```

### Dark + Amber (Warm Premium)
```css
--bg: #0A0A0A;
--text: #F5F0E6;
--accent: #D4A853;
```

### Kraft + Charcoal + Red (Organic)
```css
--bg: #F2E8D5;
--text: #1A1410;
--accent: #C83C32;
```

### White + Dark + Blue (Clean Tech)
```css
--bg: #FAFAFA;
--text: #111827;
--accent: #2563EB;
```

### Dark + Neon Green (Hacker/Dev)
```css
--bg: #0A0A0A;
--text: #E5E5E5;
--accent: #22C55E;
```

---

## No-Go Rules

1. **No gradients on elements.** Gradients only for subtle background effects.
2. **No cold grays.** All grays should be warm (brown-based, not blue).
3. **No more than 1 accent color.** If you need variety, use opacity levels of the same color.
4. **No neon on light backgrounds.** Neon/glow effects only work on dark.
5. **No competing bright colors.** Two bright colors = visual noise.

---

## Contrast Guidelines

Minimum contrast ratios for readability:
- **Headlines:** 4.5:1 minimum (WCAG AA)
- **Body text:** 7:1 recommended (WCAG AAA)
- **Labels:** 3:1 minimum (if non-essential)

**Quick test:** If you squint and can't read it, contrast is too low.

---

*Claude Design Engine by Rahaman Bin Ujit*
