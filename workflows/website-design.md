# Website & Landing Page Design Workflow

Design complete websites, landing pages, and web UIs with professional aesthetics. The same design principles that make a great poster make a great website.

---

## What You Can Design

| Type | Description |
|---|---|
| **Landing pages** | Single-page marketing sites with hero, features, CTA |
| **Portfolio sites** | Personal brand showcase with projects and bio |
| **Product pages** | Feature highlights, pricing, testimonials |
| **Blog layouts** | Article pages with typography-focused reading experience |
| **Dashboards** | Data-rich interfaces with cards, stats, charts |
| **Documentation** | Clean, navigable docs with sidebar and content |
| **Coming soon pages** | Pre-launch with email capture |
| **Link-in-bio pages** | Social media link aggregator |

---

## The Website Design Pipeline

```
Brief → Brand Config → Reference Research → Wireframe → Build → Responsive → Review → Deploy
```

### Step 1: Understand the Brief
- What's the purpose? (convert visitors, showcase work, inform, capture leads)
- What pages are needed? (single page or multi-page)
- What content do they have? (copy, images, testimonials, pricing)
- What's the vibe? (minimal, bold, editorial, playful, corporate)
- Any reference sites they like?

### Step 2: Load Brand Config
```
Read brand.config.json → apply fonts, colors, identity
```

### Step 3: Research References
Before designing, study 3-5 real websites in the same niche:
- What layout patterns do the best sites use?
- How do they structure the hero section?
- What's the scroll flow? (hero → social proof → features → CTA)
- How do they handle mobile?

### Step 4: Plan the Sections

Every effective landing page follows this flow:

```
┌────────────────────────────────────┐
│           NAVIGATION               │ ← Logo left, links right, CTA button
├────────────────────────────────────┤
│                                    │
│            HERO SECTION            │ ← Big headline, subtitle, primary CTA
│    (above the fold — most important)│   Optional: hero image or demo
│                                    │
├────────────────────────────────────┤
│         SOCIAL PROOF               │ ← Logos, testimonials, stats, "as seen in"
├────────────────────────────────────┤
│                                    │
│          FEATURES / VALUE          │ ← 3-4 key benefits with icons/visuals
│                                    │
├────────────────────────────────────┤
│         HOW IT WORKS               │ ← 3 steps, numbered, simple
├────────────────────────────────────┤
│        TESTIMONIALS                │ ← Real quotes with names/photos
├────────────────────────────────────┤
│          PRICING                   │ ← 2-3 tiers, one highlighted
├────────────────────────────────────┤
│            FAQ                     │ ← Common objections, answered
├────────────────────────────────────┤
│         FINAL CTA                  │ ← Repeat the main action
├────────────────────────────────────┤
│           FOOTER                   │ ← Links, social, copyright
└────────────────────────────────────┘
```

**Not every page needs all sections.** Pick what serves the goal.

---

## Step 5: Build the HTML/CSS

### Base Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link href="GOOGLE_FONTS_URL" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      /* Load from brand.config.json */
      --bg: #0A0A0A;
      --text: #FFFFFF;
      --text-secondary: rgba(255,255,255,0.6);
      --text-muted: rgba(255,255,255,0.35);
      --accent: #C83C32;
      --card-bg: rgba(255,255,255,0.05);
      --card-border: rgba(255,255,255,0.08);
      --radius: 12px;
      --font-display: 'Space Grotesk', sans-serif;
      --font-body: 'Inter', sans-serif;
      --font-mono: 'Space Mono', monospace;
    }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font-body);
      line-height: 1.6;
    }

    /* === MAX WIDTH CONTAINER === */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* === SECTION SPACING === */
    section {
      padding: 80px 0;
    }

    @media (max-width: 768px) {
      section { padding: 48px 0; }
    }
  </style>
</head>
<body>
  <!-- Sections here -->
</body>
</html>
```

### Navigation

```html
<nav>
  <div class="container nav-inner">
    <div class="logo">Brand Name</div>
    <div class="nav-links">
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
      <a href="#cta" class="nav-cta">Get Started</a>
    </div>
  </div>
</nav>
```

```css
nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: rgba(10,10,10,0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--card-border);
  padding: 16px 0;
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.nav-links a:hover { color: var(--text); }

.nav-cta {
  background: var(--accent) !important;
  color: white !important;
  padding: 8px 20px;
  border-radius: 8px;
  font-weight: 600;
}
```

### Hero Section

```html
<section class="hero">
  <div class="container">
    <div class="hero-tag">YOUR CATEGORY</div>
    <h1 class="hero-headline">
      Your bold headline with<br>
      <span class="accent">one accent</span> word.
    </h1>
    <p class="hero-subtitle">
      One or two sentences explaining the value proposition.
      Keep it short. Keep it clear.
    </p>
    <div class="hero-ctas">
      <a href="#" class="btn-primary">Primary CTA</a>
      <a href="#" class="btn-secondary">Secondary CTA</a>
    </div>
  </div>
</section>
```

```css
.hero {
  padding: 160px 0 80px;  /* Extra top padding for fixed nav */
  text-align: center;
}

.hero-tag {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--accent);
  margin-bottom: 24px;
}

.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

.hero-ctas {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn-primary {
  background: var(--accent);
  color: white;
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: opacity 0.2s;
}

.btn-secondary {
  background: var(--card-bg);
  color: var(--text);
  border: 1px solid var(--card-border);
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
}

.accent { color: var(--accent); }
```

### Feature Grid

```css
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  padding: 32px;
}

.feature-card h3 {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}

.feature-card p {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.6;
}
```

---

## Step 6: Responsive Design

**Every website must work on mobile.** Key breakpoints:

```css
/* Desktop: default styles (1200px+ container) */

/* Tablet */
@media (max-width: 1024px) {
  .container { max-width: 768px; }
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Mobile */
@media (max-width: 768px) {
  .container { padding: 0 16px; }
  section { padding: 48px 0; }
  .features-grid { grid-template-columns: 1fr; }
  .hero-headline { font-size: 32px; letter-spacing: -1px; }
  .hero-ctas { flex-direction: column; align-items: center; }
  .nav-links { display: none; } /* Use hamburger menu */
}
```

**Mobile rules:**
- Stack columns vertically
- Reduce font sizes (but keep hierarchy ratios)
- Increase touch targets (minimum 44px)
- Reduce padding but maintain breathing room
- Use `clamp()` for fluid typography

---

## Step 7: Self-Review for Websites

Run through `workflows/self-review.md` PLUS these web-specific checks:

- [ ] Does the hero communicate the value in 5 seconds?
- [ ] Is there a clear CTA above the fold?
- [ ] Does it look good on mobile (320px width)?
- [ ] Is the navigation functional and readable?
- [ ] Are interactive elements (buttons, links) obvious?
- [ ] Is the scroll flow logical? (problem → solution → proof → CTA)
- [ ] Are all fonts loaded?
- [ ] No horizontal scroll on any screen size?

---

## Website Dimensions for Export

If you need to screenshot a website design (not deploy it):

```bash
# Full page screenshot
node scripts/export-png.js website.html screenshot.png 1440 900

# Mobile view
node scripts/export-png.js website.html mobile.png 375 812
```

---

*Claude Design Engine by Rahaman Bin Ujit*
