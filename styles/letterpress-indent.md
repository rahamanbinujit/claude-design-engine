# Letterpress Indent

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Aesthetic:** Analog letterpress printing meets dark minimal poster. Tactile, craft, premium.

## Core Concept
Text appears physically pressed into a matte-black surface using CSS text-shadow debossing. The text fill color is near-invisible (6-8% white); all dimensionality comes from shadow highlights. Supported by analog printing artifacts: plate marks, ink splatters, registration marks, type specimens, press metadata.

## Specs

### Canvas
- 1080x1350, #0A0A0A background
- Paper texture: repeating-linear-gradient, 2px lines at 0.3% white
- Plate mark: 1px border at 2% white, inset 55px from edges
- SVG noise at 2.8% opacity

### Debossed Text Effect (the core technique)
```css
/* For white debossed text */
.debossed {
  color: rgba(255,255,255,0.06);  /* Nearly invisible fill */
  text-shadow:
    0px 2px 0px rgba(255,255,255,0.20),   /* Bottom highlight (light from above) */
    0px -1px 0px rgba(0,0,0,1),            /* Top shadow (pressed edge) */
    1px 3px 1px rgba(255,255,255,0.04);    /* Depth extension */
}

/* For red accent debossed text */
.accent {
  color: rgba(200,60,50,0.50);   /* Dimmed red fill */
  text-shadow:
    0px 2px 0px rgba(255,255,255,0.13),
    0px -1px 0px rgba(0,0,0,1),
    1px 3px 1px rgba(200,60,50,0.05);
}

/* For stat number debossed */
.stat-number {
  color: rgba(200,60,50,0.42);
  text-shadow:
    0px 3px 0px rgba(255,255,255,0.16),
    0px -2px 0px rgba(0,0,0,1),
    2px 4px 1px rgba(200,60,50,0.04),
    0px 5px 10px rgba(0,0,0,0.35);   /* Extra depth for large text */
}
```

### Typography
- **Headline:** Space Grotesk 700, 86-88px, uppercase, -3px tracking, 0.90 line-height
- **Body:** Space Grotesk 400, 23px, 26% white, 560px max-width
- **Mono metadata:** Space Mono 400, 7-9px, 5-10% white, uppercase, 2px letter-spacing

### Narrative Elements
- **Press metadata:** "PLATE: CARBON STEEL / INK: CUSTOM RED + BLACK" at top, 9px mono
- **Ink splatters:** 4-6 small circles (2-5px) at 5% white, scattered near headline
- **Registration marks:** "+" in 4 corners at 4.5% white, 22-24px from edges
- **Type specimen:** Full alphabet + numerals + font name at 8px mono, 5% white, fills mid-section
- **Red impression line:** 140px wide, 1px height, 30% #C83C32
- **Press run:** "PRESS RUN: 001 / STOCK: 300GSM BLACK / SINGLE IMPRESSION" at 7px mono
- **Edition:** "Edition 001 of 001 / Letterpress Original" aligned right

### Stat Treatment
- Number: 200px bold, debossed red (technique above)
- Label: 11px mono, 13% white, 6px letter-spacing
- Secondary stats: 44px bold, debossed white (6% fill, 18% highlight)

## Best For
- Craft/quality messaging ("built with care")
- Analog-meets-digital themes
- Premium positioning posts
- "One of one" / exclusivity narratives
- Builder/maker content
- Quiet confidence themes

## Key Rules
1. The debossed illusion ONLY works if text fill is nearly invisible (6-8%). If fill is too bright, it reads as regular text with a glow, not pressed-in text.
2. Bottom highlight (positive Y offset) is critical -- it simulates light catching the lower edge of the indent.
3. Top shadow (negative Y offset, pure black) simulates the pressed edge blocking light.
4. Accent words use dimmed red (50% opacity), NOT full #C83C32 -- they must also look pressed in.
5. Type specimen row is essential to fill the gap between body and stat while staying in-concept.
6. Keep analog artifacts subtle (2-5% opacity range) -- they should feel discovered, not announced.

---

*Claude Design Engine by Rahaman Bin Ujit*
