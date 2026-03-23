# Skill: Website & Landing Page Design

> Build professional, responsive websites and landing pages using HTML/CSS with your brand system.

---

## Core Techniques

### 1. The Section Flow
Every landing page follows a persuasion sequence:

```
Hero (what is it?)
  → Social Proof (who uses it?)
    → Features (why is it good?)
      → How It Works (is it easy?)
        → Testimonials (does it actually work?)
          → Pricing (how much?)
            → FAQ (any objections?)
              → Final CTA (ok, I'm in)
```

You don't need all sections. But the ORDER matters — it mirrors how people make decisions.

### 2. Above-the-Fold Rule
The hero section must answer THREE questions in 5 seconds:
1. **What is this?** (headline)
2. **Why should I care?** (subtitle)
3. **What do I do next?** (CTA button)

If the visitor has to scroll to understand what you offer, you've already lost most of them.

### 3. The Max-Width Container
Never let content stretch to full screen width. Reading lines longer than 70 characters is exhausting.

```css
.container {
  max-width: 1100px;  /* Or 1200px */
  margin: 0 auto;
  padding: 0 24px;
}
```

### 4. Responsive Grid Pattern
Desktop: 3 columns. Tablet: 2 columns. Mobile: 1 column.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; }
}
```

### 5. Fixed Navigation with Blur
The modern standard for website navs:

```css
nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: rgba(10,10,10,0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
```

### 6. Fluid Typography
Use `clamp()` so text scales smoothly between mobile and desktop:

```css
h1 { font-size: clamp(32px, 5vw, 64px); }
h2 { font-size: clamp(24px, 3.5vw, 40px); }
p  { font-size: clamp(14px, 1.2vw, 18px); }
```

### 7. Section Spacing Rhythm
Consistent vertical rhythm between sections:

```css
section { padding: 80px 0; }

@media (max-width: 768px) {
  section { padding: 48px 0; }
}
```

### 8. Button Hierarchy
Two levels of buttons. Never more.

```css
/* Primary — the main action */
.btn-primary {
  background: var(--accent);
  color: white;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
}

/* Secondary — alternative action */
.btn-secondary {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  color: var(--text);
  padding: 14px 28px;
  border-radius: 8px;
}
```

### 9. Card Component
The universal building block for features, testimonials, pricing:

```css
.card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  padding: 32px;
  transition: border-color 0.2s;
}
.card:hover {
  border-color: rgba(255,255,255,0.15);
}
```

### 10. CSS Variables from Brand Config
Always use CSS custom properties so the brand is applied once, used everywhere:

```css
:root {
  --bg: /* from brand.config.json */;
  --text: /* from brand.config.json */;
  --accent: /* from brand.config.json */;
  --font-display: /* from brand.config.json */;
  --font-body: /* from brand.config.json */;
}
```

---

## Website Types & Templates

| Type | Template | Key Sections |
|---|---|---|
| Landing page | `templates/landing-page.html` | Hero, stats, features, CTA, footer |
| Portfolio | Adapt landing template | Hero, projects grid, about, contact |
| Blog post | Adapt poster-1080 template | Article with max-width prose |
| Link-in-bio | Simple centered layout | Avatar, name, link buttons |

---

## Practice Exercises

1. **Hero in 5 Seconds:** Write a hero section (headline + subtitle + CTA) that explains a product in under 5 seconds of reading.
2. **Responsive Card Grid:** Build a 3-column feature grid that stacks to 1 column on mobile. No media query should break the layout.
3. **Nav Blur Effect:** Create a fixed nav with backdrop-filter blur that feels native.
4. **Section Flow:** Plan the sections for a SaaS landing page. What order? What does each section accomplish?

---

*Claude Design Engine by Rahaman Bin Ujit*
