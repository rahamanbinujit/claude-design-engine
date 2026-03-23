# Style: After-Dark Luxury

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
Ultra-premium, restrained poster with warm amber/gold accent on matte black. Ultra-thin 200-weight headlines create an elevated, editorial mood. Maximum whitespace, minimum elements. Best for thought-leadership, reflective insights, or systems-thinking posts.

## Example
Example: Systems Thinking poster

## Layout (1080x1350)

```
┌──────────────────────────────┐
│ TAG (mono, amber, spaced)    │
│                              │
│ Ultra-thin headline          │
│ with amber accent word.      │
│                              │
│ ── (short amber divider)     │
│                              │
│                              │
│                              │
│ Body text (light, 300wt)     │
│                              │
│ 66        14h        1       │
│ LABEL     LABEL      LABEL   │
│                              │
│                              │
│ Name                    041  │
│ TITLE                        │
└──────────────────────────────┘
```

## Structure

### Top Tag
- Font: Space Mono, 13px, 400 weight
- Letter-spacing: 4px, uppercase
- Color: #D4A574 at 90% opacity
- Purpose: Category label

### Headline
- Font: Space Grotesk, 72px, **200 weight** (ultra-thin)
- Line-height: 1.1, letter-spacing: -1px
- Color: #F5F5F5
- Accent word in warm amber: #D4A574, also 200 weight
- No glow, no shadow -- purity of thin type is the effect

### Divider
- Width: 64px, height: 1px
- Background: #D4A574 at 50% opacity
- Margin-top: 8px from headline

### Body Text
- Font: Space Grotesk, 26px, 300 weight
- Line-height: 1.65, letter-spacing: 0.2px
- Color: rgba(245, 245, 245, 0.7)
- Max-width: 720px
- Short, punchy. 2-3 sentences max.

### Stats Row
- Flex row, gap: 80px
- Stat number: Space Grotesk, 64px, 200 weight, #D4A574, letter-spacing: -2px
- Stat label: Space Mono, 12px, uppercase, letter-spacing: 3px, rgba(245,245,245,0.4)

### Bottom Bar
- Flex, space-between, align items flex-end
- Left: Author name (Space Grotesk 16px 400, #F5F5F5, letter-spacing 1px) + title (Space Mono 11px, rgba(245,245,245,0.35), letter-spacing 2px, uppercase)
- Right: Corner mark (Space Mono 11px, rgba(212,165,116,0.3), letter-spacing 2px)

### Ambient Glow (optional)
- Subtle radial gradient positioned top-right
- rgba(212, 165, 116, 0.06) center, transparent at 70%
- 500x500px, offset -120px from corner
- Barely perceptible warmth -- NOT a visible glow

## Colors
- Background: #0A0A0A (matte black)
- Text: #F5F5F5 (off-white, not pure white)
- Accent: #D4A574 (warm amber/gold) -- replaces red entirely
- Muted: rgba(245,245,245) at 0.35-0.7 for secondary elements

## Fonts
- Headlines: Space Grotesk 200 (ultra-thin -- this IS the style)
- Body: Space Grotesk 300
- Tags/labels/metadata: Space Mono 400

## Padding
- Container: 80px top/bottom, 72px left/right
- Generous breathing room between all sections

## When to Use
- Thought-leadership posts (systems, strategy, philosophy)
- Reflective or introspective content
- Posts where the insight is quiet but powerful
- When you want to feel premium, not aggressive
- NOT for hype posts, announcements, or high-energy content

## When NOT to Use
- High-energy announcements (use bold-split or similar)
- Posts with photos (this is a type-only style)
- Quick tips or listicles (too much restraint for casual content)

## Export
- HTML, Puppeteer, 1080x1350 CSS, deviceScaleFactor: 4
- Output: 4320x5400px PNG
- Wait 3000ms for fonts before screenshot
- File typically under 600KB (text-only, dark bg)

---

*Claude Design Engine by Rahaman Bin Ujit*
