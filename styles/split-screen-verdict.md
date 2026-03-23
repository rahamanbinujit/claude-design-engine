---
name: split-screen-verdict
quality-score: 4
status: KEEP
best-for: claim-vs-proof posts, accusation-vs-evidence, "they said X but I proved Y" narratives, us-vs-them positioning
---

# Split Screen Verdict

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


Courtroom verdict aesthetic. Poster divided vertically into two halves: the CLAIM (left, weak) vs the PROOF (right, dominant). A verdict line separates them.

## Core Concept
The layout IS the argument. Left side = the accusation (fading, dismissed). Right side = the evidence (undeniable, bold). The vertical divide = the moment of judgment.

## Typography as Meaning
- **Claim text RIGHT-aligned** toward the verdict line = gravitating toward its own defeat
- **Proof stat LEFT-aligned** in its zone = confronting the claim directly across the divide
- **Scale contrast**: 52px claim vs 220px proof = whisper vs shout
- **Weight contrast**: 300 (uncertain) vs 700 (certain)
- **Ghost words** at far edges = the original claim fading from memory

## Specs

### Canvas
- 1080x1350, #0A0A0A bg

### The Verdict Line
- 2px vertical at 50%, rgba(255,255,255,0.06)
- Red glow bar at ~45% height: 62x4px, #C83C32, 55% opacity, 50px/100px box-shadow
- "VERDICT" label rotated -90deg, 9px Space Mono, rgba(200,60,50,0.40), letter-spacing 8px

### Left Zone (The Claim)
- Padding: 80px 40px 80px 60px
- Text: right-aligned (leans toward verdict line)
- Headline: 52px, weight-300, rgba(255,255,255,0.28)
- "cannot run" line: weight-400, 38% white, CSS line-through (rgba(200,60,50,0.45), 2px)
- X marks: 44px/32px, 2px red lines at 50%/40% opacity, crossing at 45deg/-45deg
- Ghost words: 160px, weight-700, 3.5% white, positioned at canvas edges
- Meta: 8px Space Mono, 15% white, letter-spacing 4px, right-aligned
- Status block: 9px Space Mono, 13% white, letter-spacing 3px

### Right Zone (The Proof)
- Padding: 80px 60px 80px 50px
- Hero stat: 220px, weight-700, #C83C32, 100px/40px red glow text-shadow
- Stat label: 10px Space Mono, rgba(200,60,50,0.40), letter-spacing 6px
- Confirm line: 120x2px, rgba(200,60,50,0.30)
- Evidence row: 3 items, 36px weight-700 numbers (85% white), 7px mono labels (25% white)
- Body: 20px, weight-300, 35% white. Key phrase weight-500 at 70% white.
- "PROVEN" stamp: 14px Space Mono, rotated -12deg, 15% red border, upper-right

### Identity Bar
- 70px height, border-top 1px 4% white
- Name: 12px, weight-500, 35% white
- Role: 7px Space Mono, 15% white
- Case number: right-aligned

### Details
- Corner L-brackets: 18px, 1px, 4% white
- SVG noise: 3% opacity

## Content Best Suited For
- "They said X. I proved Y." posts
- Claim vs evidence / myth vs reality
- Positioning where you disprove a common belief
- Stats-backed contrarian takes
- Before/after achievement reveals

---

*Claude Design Engine by Rahaman Bin Ujit*
