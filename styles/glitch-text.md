# Glitch Text Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Best for:** AI/tech/disruption content, "I build AI systems" positioning, digital native themes

---

## Layout
- **Format:** 1080x1350 (4:5 portrait)
- **Base:** Type-hero layout (headline dominant, no photo)
- **Structure:** Tag top > Headline > Whitespace > Subtext + Stats > Divider > Footer

## Typography
- **Headline:** Space Grotesk, 92px, mixed weights (300 for "I build", 700 for "AI systems.")
- **Accent word:** Last word in headline gets the glitch RGB split treatment
- **Tag:** Space Mono, 16px, red, uppercase, letter-spacing 4px, prefixed with "//"
- **Subtext:** Space Grotesk, 26px, weight 300, rgba(255,255,255,0.6)
- **Stats:** Space Mono, 44px bold (numbers), 14px uppercase (labels)

## Colors
- **Background:** #0A0A0A
- **Primary text:** #FFFFFF / #F5F5F5
- **Red accent:** #C83C32 (on the glitch word only)
- **Cyan channel:** #00FFFF (glitch split, never standalone)
- **Red channel:** #FF2020 (glitch split, never standalone)

## The Glitch Effect (Core Technique)

### RGB Channel Split on Accent Word
```css
.glitch-word {
  color: #C83C32;
  position: relative;
  display: inline-block;
}

.glitch-word::before,
.glitch-word::after {
  content: 'WORD_HERE';  /* Must match the word */
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}

.glitch-word::before {
  color: #00FFFF;
  left: -6px;
  top: 2px;
  mix-blend-mode: screen;
  clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
  opacity: 0.8;
}

.glitch-word::after {
  color: #FF2020;
  left: 6px;
  top: -2px;
  mix-blend-mode: screen;
  clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
  opacity: 0.8;
}
```

### Supporting Glitch Elements
- **Text-shadow on headline line:** `-2px 0 rgba(0,255,255,0.12), 2px 0 rgba(200,60,50,0.12)` — subtle RGB bleed
- **Glitch bars:** 2-3 thin horizontal lines (2-3px height) displaced 5-8px horizontally. Cyan or red at 10-12% opacity
- **Scan lines:** `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 4px)` — full overlay, pointer-events: none
- **Stats text-shadow:** Micro RGB split at 0.08 opacity for cohesion

## Rules
- Glitch effect ONLY on the accent/action word (last word in headline)
- Minimum 6px offset for visibility at 4x Puppeteer export
- clip-path splits word into top 40% and bottom 40% (middle 20% gap = the original red word shows through cleanly)
- mix-blend-mode: screen is mandatory (additive blending makes cyan/red glow on dark bg)
- Scan lines are nearly invisible but add subliminal CRT texture
- Do NOT animate — this is a static poster, not a web page
- Do NOT use drop shadows or gradients (never-again rule)
- Red accent limited to the glitch word + minor touches (tag, divider, stat accent)

## Spacing
- Padding: 80px sides, 80px top, 60px bottom
- Gap between tag and headline: 40px
- Gap between headline block and subtext: generous (flex justify-content: space-between)
- Stats row: 80px gap between stat columns
- Stats margin-top from subtext: 60px

## File Size
- Expect 300-400KB PNG at 4x export
- No JPEG conversion needed (under 1MB)

---

*Claude Design Engine by Rahaman Bin Ujit*
