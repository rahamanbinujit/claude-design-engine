# Barcode Identity

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Concept:** Retail-industrial product identification meets data poster. The poster looks like a scanned product -- the content IS the product being verified.

**When to use:** "What I built" posts, system capability reveals, product launches, verification/proof posts, any content where the metaphor is "this is identifiable, verified, authentic."

## Layout (1080x1350, #0A0A0A bg)

### Zones (top to bottom)
1. **Meta zone** (top:48px) — SKU/batch/product metadata in 9px Space Mono, 10-14% white
2. **Headline zone** (top:110px) — Standard dim/red/bright hierarchy, 72px bold Space Grotesk
3. **Barcode zone** (top:480px) — SVG EAN-13 barcode spanning full width (960px), 160px tall
4. **Stat zone** (top:510px) — Large stat number overlaid on barcode center with radial knockout
5. **Scan line** (top:600px) — THE HERO ELEMENT. Full-width red line with triple glow
6. **Barcode digits** (top:700px) — "0 66000 00005 2" in mono, centered
7. **Scan verified** (top:730px) — Red dot + "Scan: Verified / Authentic"
8. **Secondary stats** (top:820px) — Right-aligned, 44px white values
9. **Body text** (top:1000px) — 22px weight-300, 28% white
10. **Data strip** (bottom:100px) — Classification metadata
11. **Author bar** (bottom:40px) — Name + title, 1px border-top

### Barcode Specs
- SVG, 80+ bars at varying widths (2-7px)
- White bars at 4.5-6% opacity
- Center section bars tinted #C83C32 at 6-8% opacity (red glow zone)
- Start/center/end guard bars extend 10px taller (150px vs 140px)
- Guard bars at 6% white opacity

### Scan Line (Signature Element)
- Full width, 2px height
- Color: rgba(200,60,50,0.45)
- Box-shadow: 0 0 12px rgba(200,60,50,0.15), 0 0 30px rgba(200,60,50,0.08), 0 0 60px rgba(200,60,50,0.04)
- Scan glow zone: 18px tall, 5% red opacity gradient

### Stat Number
- 200px bold #C83C32
- Radial gradient knockout behind it: ellipse 200x140px, #0A0A0A at 95% center to transparent
- Crosshair target: 240px square, corner ticks at 20% red, axis lines at 12% red

### Peripheral Elements
- QR code fragment: 60x60px, bottom-right, 4% white
- SKU labels: top-right, 8px mono, product/batch/date
- Corner L-brackets: 22px, 1px, 4.5% white
- Side text: rotated 90deg, 7px mono, 8% white
- SVG noise: 2.5%

## Color Distribution
- Background: #0A0A0A (dominant)
- Red (#C83C32): headline accent word, stat number, scan line, center barcode bars, crosshair, scan verified label
- White: headline bright words, secondary stats, body text
- Dim white (4-18%): barcode bars, metadata, peripherals

## Template Content Slots
- Headline: 5 lines, dim/dim/red/bright/bright split
- Stat number: single large metric
- Stat label: what the metric measures
- Barcode digits: encode the stat (e.g., "0 66000 00005 2" for 66)
- Secondary stats: 3 supporting numbers
- Body text: 1-2 sentence summary
- SKU/meta: customizable product-style metadata

---

*Claude Design Engine by Rahaman Bin Ujit*
