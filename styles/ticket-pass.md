---
name: ticket-pass
description: Event ticket / boarding pass. White ticket object on dark surface with box-shadow depth. Violet header stripe, circular headshot badge, detail field grid, perforated tear line with semicircle notches, warmer stub section. Outfit + JetBrains Mono.
status: KEEP
quality-score: 4.5
niche: Event ticket / Boarding pass
---

# Ticket / Boarding Pass Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Palette
- **Surface bg:** Near-black `#1C1C1E`
- **Ticket face:** Off-white `#FAFAF7`
- **Stub:** Warm paper `#F0EDE5`
- **Primary accent:** Electric violet `#7C5CFC`
- **Secondary:** Warm amber `#F5A623`
- **Text on ticket:** `#1A1A1A`

## The Ticket Object
```css
.ticket {
  background: #FAFAF7;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.15);
}
```
The ticket is a PHYSICAL OBJECT sitting on a dark surface.

## Perforation Technique
```css
/* Semicircle notches */
.perf-left, .perf-right {
  width: 24px; height: 24px;
  background: #1C1C1E; /* matches bg */
  border-radius: 50%;
}
/* Dashed line between */
.perf-line { border-top: 2px dashed rgba(26,26,26,0.10); }
```

## Typography
- **Header stripe:** JetBrains Mono, 10px, weight 700, 4px letter-spacing, white on violet
- **Pre-title:** JetBrains Mono, 11px, 3px letter-spacing, 30% black
- **Title:** Outfit, 64px, weight 800, -0.03em
- **Subtitle:** Outfit, 18px, weight 300, 40% black
- **Field labels:** JetBrains Mono, 8px, 3px letter-spacing, 25% black
- **Field values:** Outfit, 22px, weight 700 (violet for primary, amber for highlight)
- **Stub title:** JetBrains Mono, 9px, weight 700, 4px letter-spacing, 20% black
- **Stub quote:** Outfit, 20px, weight 300, italic, 50% black. Bold words weight 700 normal.

## Layout
- Ticket on dark bg with 80px margins all sides
- Violet header stripe (full width of ticket, rounded top)
- Pre-title + title + subtitle
- Circular headshot centered (200px, violet border)
- 3x2 detail field grid
- Tear line (notches + dashed line)
- Stub section (warmer paper)
- Barcode + numbering on stub
- Credits on stub

## Best For
- "Admit one" / exclusive access posts
- Event/launch announcements
- "Your invitation" messaging
- Personal brand as an experience you attend
- Any post that benefits from the "exclusive event" framing

---

*Claude Design Engine by Rahaman Bin Ujit*
