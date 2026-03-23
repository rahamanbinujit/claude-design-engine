---
name: chess-game
description: Chess / game theory. CSS board with Unicode pieces, move notation pairing chess moves with career moves, evaluation bar, engine analysis format. Crimson Pro serif + Fira Code mono. Deep strategic metaphor.
status: KEEP
quality-score: 5
niche: Chess / Game theory
---

# Chess / Game Theory Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Palette
- **Paper:** Aged ivory `#F8F4ED`
- **Text:** Near-black `#1C1916`
- **Dark square:** Walnut `#5C4A3A`
- **Light square:** Maple `#E8DECE`
- **Accent:** Red-brown `#8B3A2A`
- **Gold:** Tournament `#B8963E`
- **Notation gray:** `#8A8278`

## Chess Board (CSS Grid)
```css
.board { display: grid; grid-template-columns: repeat(4, 80px); }
.sq-l { background: #E8DECE; } /* light squares */
.sq-d { background: #5C4A3A; } /* dark squares */
.piece { font-size: 42px; } /* Unicode chess symbols */
```
Pieces: ♔♕♖♗♘♙ (white) ♚♛♜♝♞♟ (black)

## Move Notation (the strongest element)
Pair real chess notation with metaphor words:
```
1. e4   Learn       |  Opening theory = learning
5. O-O  Compound    |  Castling = securing + activating
8. d5!  66.         |  Brilliant move = breakthrough stat
9. Qd3  ∞           |  Queen development = infinite potential
```
Use `!` for brilliant moves, `?` for mistakes, `!!` for exceptional.

## Evaluation Bar
```css
.eval-bar { background: #5C4A3A; height: 32px; border-radius: 4px; }
.eval-fill { width: 66%; background: #E8DECE; } /* white's advantage */
```
Label: "+6.6" (engine evaluation score)

## Typography
- **Opening name:** Crimson Pro, 46px, weight 700. Italic red-brown on accent word.
- **ECO code:** Fira Code, 10px, weight 500, red-brown at 60%
- **Subtitle:** Crimson Pro, 17px, weight 300, italic, 35% black
- **Move numbers:** Fira Code, 12px, weight 300, 15% black
- **Move notation:** Fira Code, 14px, weight 500. Key moves in red-brown or gold, weight 700.
- **Analysis headline:** Crimson Pro, 42px, weight 800. Gold on verdict word.
- **Stats:** Crimson Pro, 32px, weight 800 (red for primary, gold for output)

## Stat Mapping
| Chess Term | Means |
|-----------|-------|
| Squares | Skills |
| Boards | Brands |
| Lines | Systems/integrations |
| Tempo | Output multiplier |
| Player | Operator |

## Best For
- Strategy/long-game posts
- "Every move matters" messaging
- Patient, intellectual positioning
- Career retrospective as a game record
- Any post where the metaphor is strategic thinking over time

---

*Claude Design Engine by Rahaman Bin Ujit*
