# Obsidian Slab

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


Premium dark poster style inspired by polished volcanic glass. Luxury watch ad meets data poster.

## When to Use
- Premium/luxury positioning posts
- "One person" authority content
- System reveals, capability showcases
- Any post where understated confidence is the tone
- High-end personal branding moments

## Key Elements

### Surface Sheen (the polish)
- Diagonal linear-gradient (155deg): white peaks at 3.5% opacity around 48% position
- Radial-gradient ellipse (80% 40%): positioned upper-right area, white at 1.8% opacity
- Creates subtle light catch across the dark surface -- must be noticeable but never bright

### CSS Text Reflection (the signature)
- Duplicate last 1-2 headline lines, flipped via `transform: scaleY(-1)`
- Mask: `linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 70%)`
- Height: ~90px, margin-top: 6px
- Creates polished glass mirror effect -- this is what makes the style unique

### Red Divider (the slab edge)
- 1px line at rgba(200,60,50,0.22)
- Blurred glow behind it: 5px, linear-gradient peaking at 15% red center
- Separates headline zone (above) from data zone (below)

### Matte Stat Number
- 200px bold, rgba(255,255,255,0.85)
- ZERO glow, ZERO shadow, ZERO effects -- pure flat matte finish
- Contrast with the reflective headline creates visual tension

### Typography
- Headline: 80px bold, -3.5px tracking, 0.94 line-height
- Dim words at 16% white, accent in #C83C32, key words full white
- Body: 23px at 28% white, 560px max-width
- Secondary stats: 44px bold at 40% white
- All labels: Space Mono, 8-10px, 10-20% white, 3-6px letter-spacing

### Metadata
- Series label top: "OBSIDIAN SERIES / NO. XXX" at 9px mono, 13% white
- Data strip bottom: material/finish metadata at 7.5px mono, 10% white
- Corner L-brackets: 20px, 1px, 4.5% white
- Author bar: 1px border-top at 6% white

### Background
- #0A0A0A base
- SVG noise at 2.5% opacity

## Specs
- Canvas: 1080x1350
- Export: Puppeteer, deviceScaleFactor 4, wait 3000ms
- Output: JPEG 95% (PNG runs ~16MB)

## Reference
- Example: V81B Obsidian Slab poster (source)
- Example: V81B Obsidian Slab poster (final)

---

*Claude Design Engine by Rahaman Bin Ujit*
