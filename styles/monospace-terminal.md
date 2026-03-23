# Monospace Terminal

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.



## Concept
Entire poster styled as a CLI terminal — monospace font, command prompts, system output, log entries. One element deliberately breaks the terminal metaphor: the headline in Space Grotesk bold at 80px+, creating a jarring sans-serif vs monospace contrast that becomes the focal point.

## When to Use
- Tech-builder identity posts
- AI/systems/automation positioning
- Developer-audience content
- "I build" messaging
- Any post where the "systems builder" identity needs visual reinforcement

## Layout Structure
1. **Terminal title bar** — Top edge. Three dots (red + 2 dim), monospace label ("founder-os :: terminal")
2. **Terminal frame** — 1px border, 48px inset from edges
3. **Prompt lines** — Red ">" symbol + monospace command text (16px)
4. **Output lines** — Dimmer monospace (14px, 20% white) showing system responses
5. **THE BREAK** — 80-85px Space Grotesk bold headline. Full white. Red accent on key word. This is the hero.
6. **Log section** — Bottom area. Timestamps + key:value pairs. Stats shown as system log entries. Blinking cursor on last entry.
7. **Author bar** — Bottom. Name left, session ID right.

## Typography
- **Headline (the break):** Space Grotesk 700, 80-85px, white #FFFFFF, letter-spacing -3px
- **Prompt commands:** Space Mono 400, 16px, white 50% opacity
- **Prompt symbol:** Space Mono, #C83C32
- **Output lines:** Space Mono 400, 14px, white 20% opacity
- **Log entries:** Space Mono 400, 14px, timestamps 12% / keys 35% / values #C83C32 bold
- **Title bar:** Space Mono 400, 11px, white 25%
- **Author:** Space Grotesk 600, 14px, white 35%

## Colors
- Background: #0A0A0A
- Text: #FFFFFF at varying opacities (12% to 100%)
- Accent: #C83C32 (prompt symbols, accent words, log values, title bar dot)
- No other colors

## Atmosphere Effects
- **Scanlines:** 4px repeating linear-gradient, white 0.8% opacity — subtle CRT texture
- **CRT glow:** Radial gradient, white 1.5% opacity, centered, large radius — simulates screen light bleed
- **Headline glow:** Faint red radial gradient behind headline at 7% opacity, 40px blur

## Key Design Rules
1. The headline MUST use Space Grotesk — this is the whole point (breaking the monospace metaphor)
2. Everything else MUST be Space Mono — commit to the terminal aesthetic
3. Prompt lines should feel like real CLI commands, not generic text
4. Log entries use real-looking timestamps
5. The blinking cursor adds life (CSS animation, step-end)
6. Red accent used sparingly: prompt symbol, one headline word, log values
7. Content hierarchy through opacity, not size (except the headline break)

## File Size
624KB PNG at 4320x5400 (4x export). Compresses well due to dark bg + minimal color.

## Reference
Example: Monospace Terminal poster

---

*Claude Design Engine by Rahaman Bin Ujit*
