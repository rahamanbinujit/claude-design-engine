# Chrome Gradient

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Type:** Text effect style (can layer onto any layout)
**Tested:** V34 | Score: 4/5 | KEEP
**Best for:** Premium positioning, tech authority, bold statement posts, luxury feel

---

## Core Concept

Metallic/chrome gradient on a single accent word via CSS `background-clip: text`. The rest of the text stays flat white, creating a chrome-vs-matte contrast that makes the accent word feel like polished metal.

## Technique

```css
.chrome {
  font-size: 120px;
  font-weight: 700;
  background: linear-gradient(
    180deg,
    #666666 0%,
    #FFFFFF 12%,
    #555555 25%,
    #F8F8F8 38%,
    #333333 50%,
    #FFFFFF 62%,
    #777777 75%,
    #FFFFFF 88%,
    #999999 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 40px rgba(255,255,255,0.15));
  letter-spacing: -2px;
}
```

## Key Rules

1. **Multi-stop gradient is essential** -- minimum 8-10 stops alternating dark (#333-#666) and light (#FFF-#F8F8F8) to create visible metallic banding
2. **Only ONE word/phrase gets chrome treatment** -- overusing it kills the effect
3. **Chrome word should be slightly larger** than surrounding text (120px vs 92px) to amplify the premium feel
4. **Surrounding text stays flat white** -- the contrast is what sells the effect
5. **Stats can carry a simpler chrome gradient** (4 stops) for visual cohesion
6. **Subtle red radial glow** behind the chrome word adds warmth without competing
7. **drop-shadow with white glow** (not box-shadow) creates ambient light spill around the metallic text
8. **Compresses extremely well** -- 0.35MB PNG at 4320x5400. No JPEG conversion needed.

## Layout Structure (from V34)

```
[Tag: mono, red, uppercase, 14px]

[Context line: mono, 16px, 35% opacity]
[Hero line 1: 92px, flat white]
[CHROME WORD: 120px, metallic gradient]
[Hero line 2: 92px, flat white]
[Red accent line: 64px wide, 3px]
[Subtext: 24px, 50% opacity]

[Stats row: chrome gradient numbers + mono labels]
[Divider: 1px, 8% opacity]
[Identity: name + title + red circle mark]
```

## When to Use

- Premium/luxury positioning posts
- Tech authority statements ("I build X")
- Bold single-statement posts where one word needs to feel expensive
- Pairs well with type-hero base layout

## When NOT to Use

- Casual/personal storytelling posts
- Posts with photos (chrome competes with imagery)
- Multi-stat/data-heavy posts (use data-vis or bento-grid instead)

## Variations to Explore

- Horizontal gradient (left-to-right chrome) for wider words
- Chrome on a number instead of a word (e.g., "10x" in metallic)
- Combining with blur-depth bg for double premium effect

---

*Claude Design Engine by Rahaman Bin Ujit*
