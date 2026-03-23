# Bento Grid Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4.5/5
**Best for:** Stats posts, portfolio showcases, data-heavy content, "what I built" posts

---

## Layout Structure

```
┌──────────────────────────────────────────┐
│  HERO CARD (full width)                  │
│  Tag (mono, red) + Headline (72px)       │
│  Mixed weights: 300 light + 700 bold     │
│  Faded bg number (280px, 2% opacity)     │
├────────────┬──────────────┬──────────────┤
│  STAT 1    │  STAT 2      │  STAT 3      │
│  Label     │  (red border │  Label       │
│  Number    │   accent)    │  Number      │
│  Desc      │              │  Desc        │
├────────────────────────────┬─────────────┤
│  QUOTE CARD (2fr)          │ IDENTITY    │
│  Quote mark + italic text  │ Line accent │
│                            │ Name + Role │
├────────────────────────────┴─────────────┤
│  FOOTER (Founder OS / 2026)              │
└──────────────────────────────────────────┘
```

## Specs

### Canvas
- **Size:** 1080 x 1350px (4:5 portrait)
- **Background:** #0A0A0A
- **Padding:** 48px all sides

### Cards
- **Background:** #111111
- **Border radius:** 20px
- **Gap between cards:** 16px
- **No shadows, no gradients**

### Accent Card (ONE per poster)
- **Background:** #111111 (same as other cards)
- **Border:** 2px solid #C83C32
- **Number color:** #C83C32 with text-shadow glow (0 0 30px rgba(200,60,50,0.4))

### Typography
- **Tag:** Space Mono, 13px, letter-spacing 3px, uppercase, #C83C32
- **Headline:** Space Grotesk, 72px, -2px tracking
  - Light words: weight 300, color #F5F5F5
  - Bold words: weight 700, color #FFFFFF
  - Red accent word: #C83C32 with glow
- **Stat labels:** Space Mono, 13px, uppercase, rgba(255,255,255,0.5)
- **Stat numbers:** Space Grotesk, 56px, weight 700, -2px tracking
- **Stat descriptions:** Space Grotesk, 16px, weight 400, rgba(255,255,255,0.4)
- **Quote text:** Space Grotesk, 22px, italic, #F5F5F5
- **Name:** Space Grotesk, 18px, weight 600
- **Role:** Space Mono, 11px, uppercase, rgba(255,255,255,0.4)
- **Footer:** Space Mono, 11px, uppercase, rgba(255,255,255,0.2)

### Decorative Elements
- **Quote mark:** 64px, bold, rgba(200,60,50,0.3)
- **Line accent:** 32px wide, 3px tall, #C83C32, 2px radius
- **Faded bg number:** 280px, weight 700, rgba(255,255,255,0.02)

## Rules
1. ONE accent card per poster (red border) -- never more
2. All cards same bg (#111111) -- accent is border only
3. Stat numbers should be real data, not decorative
4. Quote card should contain the core message/CTA
5. Identity card is always bottom-right, small
6. Gaps must be uniform (16px) everywhere
7. Works best with 3 stats -- can adapt to 2 or 4 by changing grid-template-columns

## Variations
- **2-stat version:** grid-template-columns: 1fr 1fr (wider cards)
- **4-stat version:** grid-template-columns: repeat(4, 1fr) (narrower, reduce padding)
- **No quote row:** Remove bottom row, let stats row expand
- **Carousel:** Each card becomes its own slide, maintaining the visual language

---

*Claude Design Engine by Rahaman Bin Ujit*
