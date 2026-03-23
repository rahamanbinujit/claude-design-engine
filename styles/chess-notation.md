# Chess Notation

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Concept:** The poster is a chess position diagram. The content IS a game being won. Strategic depth visualized as board control.

**When to use:** Strategic positioning claims, competitive advantage posts, "seeing ahead" narratives, system mastery, calculated moves, outsmarting competition.

---

## Structure

| Zone | Content | Position |
|------|---------|----------|
| Tag | "Founder's Gambit" or game name | Top-left, mono 9px, red dot prefix |
| Headline L1 | The amateur's view (dim, light) | Below tag, 60px weight-300, 16% white |
| Headline L2 | The grandmaster's answer (bold, bright) | Below L1, 74px weight-700, 95% white, key number in red |
| Board | 8x8 grid with alternating squares | Center, 640x640px, top: 340px |
| Stat | The dominant number | Centered on board at d5 (queen position), 260px bold red with glow |
| Notation | Move history | Left column, 8px mono, key moves highlighted red |
| Body | The punchline | Bottom-third, 22px weight-300, italic emphasis |
| Meta | Game metadata | Bottom, mono 7px |

## Specs

### Board
- Size: 640x640px, centered horizontally, top: 340px
- Light squares: rgba(255,255,255, 0.018)
- Dark squares: rgba(255,255,255, 0.0)
- Grid lines: 1px, rgba(255,255,255, 0.025)
- Outer border: 1px, rgba(255,255,255, 0.05)
- Path squares (diagonal winning sequence): rgba(200,60,50, 0.04) normal, 0.07 strong
- Coord labels: 9px Space Mono, 12% white. Files (a-h) below, Ranks (1-8) left side

### Attack Lines (SVG)
- Diagonals + rank/file from queen position (280, 280 within board)
- Stroke: rgba(200,60,50, 0.08), 0.7px, stroke-dasharray: 3,7
- Rank/file lines slightly dimmer at 0.06

### Queen Control
- Outer ring: 120px, 1.5px border, rgba(200,60,50, 0.18), border-radius: 50%
- Inner ring: 60px, 1px border, rgba(200,60,50, 0.12)
- Box-shadow: 0 0 30px rgba(200,60,50, 0.06) on outer

### Piece Dots
- White pieces: 8px, rgba(255,255,255, 0.10), 1px border at 0.06
- Red pieces: 8px, rgba(200,60,50, 0.30), 1px border at 0.15, box-shadow glow
- 5-6 white + 4-5 red dots at strategic positions

### Stat
- Font: Space Grotesk 260px bold #C83C32
- Letter-spacing: -10px
- Text-shadow: 0 0 100px rgba(200,60,50, 0.30), 0 0 200px rgba(200,60,50, 0.12)
- Label: 9px Space Mono, rgba(200,60,50, 0.50), 6px letter-spacing

### Move Notation
- Font: Space Mono 8px, rgba(255,255,255, 0.08)
- Line-height: 2.2
- Key moves: rgba(200,60,50, 0.30)
- Final move: rgba(200,60,50, 0.60) bold
- Format: "1. e4 e5" etc, ending with checkmate notation

### Typography Decisions
- **Headline L1 (dim/light):** Weight-300 = amateur's hesitation. 16% white = fading, surface-level. These are the people who react.
- **Headline L2 (bold/bright):** Weight-700 = grandmaster certainty. 95% white = absolute clarity. The weight shift IS the skill gap.
- **Red number in headline:** The scope of vision. How many moves ahead you see.
- **"66" on board center:** The queen dominates from the center. The stat IS the most powerful piece.
- **Move notation left:** Game record = narrative flow. History of decisions. Final checkmate in red = the inevitable conclusion.
- **Body italic:** Emotional truth after strategic proof.

### Ambient Elements
- Red glow: radial-gradient centered on board, rgba(200,60,50, 0.03), 500px radius
- Elo watermark: right side, 10px mono, 6% white ("ELO 2800+ / RATING: GM")
- Checkmate badge: between headline and board, 8.5px mono, 50% red, flanked by 25px red lines
- Corner brackets: 16px, 1px, 6% white
- SVG noise: 2.5% opacity

## Export
- 4320x5400px PNG (1080x1350 at 4x) via Puppeteer
- JPEG 95% for LinkedIn (~2MB)
- Wait 3000ms for font loading

## Headline Variations
- "They see the next move. / I see all 66."
- "Everyone plays the opening. / I already know the endgame."
- "They memorize moves. / I memorize systems."
- "The board has 64 squares. / I control 66 skills."

---

*Claude Design Engine by Rahaman Bin Ujit*
