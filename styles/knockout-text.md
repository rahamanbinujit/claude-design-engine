# Knockout Text Reveal

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Type:** Typography-first hero style
**Tested:** V39 | Score: 4/5 | KEEP
**Best for:** Bold identity/positioning posts, "build" messaging, tech-premium feel, verb-driven statements

---

## Core Concept

Giant text where the letterforms become windows into gradient/color/texture. The poster background stays solid dark (#0A0A0A), but the text reveals what's "behind" it via `background-clip: text`. The text IS the design -- it's both the message and the visual.

Key differentiator from chrome-gradient: knockout-text uses TWO different gradients on TWO words, creating conceptual contrast (fire vs metal, passion vs precision). Chrome-gradient applies one metallic gradient to a single accent word.

## Technique

```css
/* Red/fire gradient knockout */
.knockout-word {
  font-size: 260px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -6px;
  line-height: 0.88;
  background: linear-gradient(
    140deg,
    #6B0F08 0%, #C83C32 12%, #FF6B5E 22%, #FFB3AC 30%,
    #C83C32 40%, #4A0A06 55%, #C83C32 65%, #FF6B5E 75%,
    #C83C32 85%, #3A0804 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Chrome/metallic gradient knockout */
.knockout-word-2 {
  font-size: 220px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -4px;
  line-height: 0.88;
  background: linear-gradient(
    140deg,
    #888 0%, #FFF 15%, #999 30%, #FFF 45%,
    #666 60%, #F5F5F5 75%, #AAA 90%, #FFF 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Layout Structure

1. **Tag** — Space Mono 13px, 35% opacity, top-left with `//` red accent
2. **Knockout hero zone** — Two stacked words with different gradient knockouts (positioned at ~160px from top)
3. **Ambient glow** — Radial gradient (red, 12% opacity, 60px blur) behind text
4. **Body text** — Space Grotesk 300 weight, 28px, 50% opacity, below hero
5. **Red separator** — 80px wide, 3px, 80% opacity
6. **Stats row** — 3 stats with Space Mono labels
7. **Bottom bar** — Author left, version right
8. **Vertical accent line** — Right edge, red gradient fade

## Gradient Pairing Ideas

| Word 1 Gradient | Word 2 Gradient | Conceptual Contrast |
|---|---|---|
| Red/fire (#C83C32 spectrum) | Chrome/metallic (white-gray) | Passion vs precision |
| Warm amber (#D4A574) | Cool blue (#4A90D9) | Creative vs analytical |
| Red/fire | Red/fire (same) | Pure emphasis, no contrast |
| Chrome | Chrome | Unified premium |

## Rules

- Font size: 220-280px for hero words. Must fit on 1080px canvas with 60px padding each side.
- Always test text fits before export -- long words overflow easily at these sizes.
- Multi-stop gradients with dark valleys (#3A0804, #4A0A06) create the strongest "liquid" banding effect.
- Ambient glow behind text is subtle (12% opacity max) -- the gradient in the text should do the heavy lifting.
- Works best with short, punchy words (BUILD, SCALE, SHIP, AUTOMATE, SYSTEMS, GROWTH).
- File size: gradient text + dark bg = large PNGs (5MB+). Always convert to JPEG 95%.

## Reference

- Example: Knockout Text poster
- Dimensions: 1080x1350 (4:5 portrait)
- Export: 4320x5400 at deviceScaleFactor 4

---

*Claude Design Engine by Rahaman Bin Ujit*
