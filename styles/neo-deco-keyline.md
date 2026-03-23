# Neo Deco Keyline

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


Art Deco revival with contemporary minimalism. Thin geometric keylines forming an elegant symmetrical frame around centered content. Glamorous geometry on dark canvas.

## When to Use
- Systems-thinking, craft, elegance posts
- "Premium quality" or editorial-luxury feel
- Posts about invisible infrastructure, design philosophy, refined processes
- Any content that benefits from a formal, composed aesthetic

## Specs

### Canvas
- 1080x1350, #0A0A0A background

### Frame System (SVG)
- **Outer frame:** 1px stroke at 16% white opacity, inset ~36px from edges, with stepped (L-shaped) corners
- **Inner frame:** 1px stroke at 8% white opacity, inset ~68px from edges
- **Stepped corner accents:** Two layers per corner -- outer L at 1.5px/20% white (64px arms), inner L at 1px/14% white (36px arms)
- All corners are pure right-angle geometry -- no curves

### Decorative Ornaments
- **Top center:** Double chevron (outer 18%, inner 10% white) pointing upward, flanking a red diamond (14px, 2px #C83C32 border, 4px red fill center)
- **Bottom center:** Inverted chevron mirror of top
- **Side midpoints:** Small diamond accents (10px, rotated 45deg, 14% white)
- **Horizontal deco bands:** Triple parallel lines with gradient fade at ends. Outer pair at 15% white, inner at 8%. Vertical end-cap ticks. Center red diamond (8px, 50% #C83C32 border). Placed at top and bottom of content zone.
- **Vertical side channels:** 3 parallel lines (outer at 10% white, center at 18% red) running full content height with gradient fade
- **Sunburst fan:** 7 vertical rays graduating in height (18-48px), 1.5px at 12% white, center ray 2px at 40% red. Placed below headline as decorative separator.
- **Ziggurat accents:** 5 horizontal lines in pyramid arrangement (16-40px wide), center line in red 30%, flanking the stat

### Typography
- **Tag:** Space Mono, 11px, 7px letter-spacing, 35% white, uppercase, centered
- **Headline:** Space Grotesk, 80px bold, -2px tracking, centered. Accent word in #C83C32
- **Body:** Space Grotesk, 24px light, 42% white, centered
- **Stat:** 140px bold #C83C32 with mono label (11px, 5px letter-spacing, 30% white)
- **Secondary stats:** 36px semibold, 85% white with 9px mono labels
- **Author bar:** 14px name (50% white, 4px letter-spacing) + 9px mono title (20% white), border-top 8% white

### Color Rules
- Frame and decorative elements: white at 8-20% opacity only
- Single red accent: diamond at top, center rays, ziggurat center lines, stat number, headline accent word
- Never more than one red element per decorative motif
- Red always #C83C32, never gradient, never glow

### Layout
- All content centered horizontally
- Content lives inside the inner frame with generous padding
- Vertical flow: tag > headline > sunburst > body > stat divider > stat > secondary stats > author bar
- Stat divider: two lines flanking a red diamond

## Reference
- Example: V63B Neo Deco Keyline poster
- Example: V63B Neo Deco Keyline poster

---

*Claude Design Engine by Rahaman Bin Ujit*
