---
name: fault-tree-analysis
source: v145
quality-score: 4
status: KEEP
---

# Fault Tree Analysis Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Concept:** An inverted reliability engineering fault tree. Root node (top event = SYSTEM FAILURE) at top, branches downward through OR/AND logic gates to leaf skill nodes. The tree proves that no single point of failure exists because AND gates require ALL sub-paths to fail simultaneously. "66" lives inside the failure node -- the number that prevents the failure from ever activating.

## Visual Language
- Engineering reliability diagram aesthetic
- Inverted tree structure (root at top, leaves at bottom)
- Boolean logic gates (AND = flat top with curved bottom, OR = curved top with flat bottom)
- Green ACTIVE status indicators on all leaf nodes
- Red-tinted borders/text for critical/rare skill nodes
- White borders/text for common skill nodes
- Cross-branch redundancy links (dashed red)
- Level depth markers on left edge (L0-L5)
- Probability annotations (P = 0.000) at each branch

## Layout Structure
```
[Tag: Reliability Engineering]     [top-left, mono 8px]
[Headline dim]                     [top zone, 48px weight-300 17% white]
[Headline bold]                    [below dim, 62px weight-700 93% white]

[P(FAILURE) = 0.000]              [centered above tree, mono 9px red 40%]

[ROOT NODE: SYSTEM FAILURE + "66"] [centered, red border, red glow]
        |
      [OR]                         [red stroke OR gate]
    /   |   \
[CREATIVE] [TECHNICAL] [STRATEGIC] [white border domain nodes]
   |         |          |
 [AND]     [AND]      [AND]       [white AND gates]
 / | \     / | \      / | \
[leaves] [leaves]   [leaves]      [skill nodes with green ACTIVE dots]
 / \       / \        / \
[deeper] [deeper]   [deeper]      [sub-skill nodes, fainter]

[Body text]                        [bottom-left, 19px]
[Data panel]                       [bottom-right, mono 7px]
[Identity bar]                     [bottom full-width]
```

## Color Rules
- Background: #0A0A0A
- Root node border: rgba(200,60,50,0.35) at 2px
- Root node glow: radial 220x120 ellipse at 12% red
- OR gate: rgba(200,60,50,0.28) stroke
- AND gates: rgba(255,255,255,0.12) stroke
- Domain node borders: rgba(255,255,255,0.10)
- Domain node text: rgba(255,255,255,0.22)
- Critical leaf borders: rgba(200,60,50,0.20-0.25)
- Critical leaf text: rgba(200,60,50,0.40-0.48)
- Common leaf borders: rgba(255,255,255,0.09)
- Common leaf text: rgba(255,255,255,0.18)
- ACTIVE indicators: rgba(80,200,80,0.30) fill, 0.18 stroke
- Tree lines: rgba(255,255,255,0.06-0.07)
- Cross-links: rgba(200,60,50,0.08) dashed
- "NO FAILURE DETECTED" badge: rgba(80,200,80,0.50) text, 0.18 border

## Typography
- Headline dim: Space Grotesk 48px weight-300, rgba(255,255,255,0.17)
- Headline bold: Space Grotesk 62px weight-700, rgba(255,255,255,0.93), key word in italic #C83C32
- "66" in root: Space Grotesk 38px weight-700, #C83C32
- Node labels: Space Mono 6.5-7.5px, letter-spacing 1-1.5px
- Gate labels: Space Mono 5-6.5px, letter-spacing 1-2px
- Probability: Space Mono 5.5px, rgba(255,255,255,0.10)
- Body: Space Grotesk 19px, weight-300 25% white + italic 48% white
- Data panel: Space Mono 7px, 10% white labels / 40% red values

## Text Placement Logic
1. **Headline at TOP** = declaration before proof. The tree below IS the evidence.
2. **"66" inside SYSTEM FAILURE node** = the stat occupies the failure position. The number IS the prevention.
3. **OR gate in red** = the vulnerability. OR means ANY branch failing propagates upward.
4. **AND gates in white** = the protection. ALL must fail simultaneously. This is where redundancy lives.
5. **Green ACTIVE dots** = visual proof of operational status. Trace any root-to-leaf path: all green.
6. **Headline weight shift 300 to 700** = structural difference between fragile and fault-tolerant.
7. **Cross-branch REDUNDANT links** = even between domains, skills compensate.

## Best For
- Resilience/redundancy messaging
- "No single point of failure" positioning
- Systems thinking content
- Engineering/reliability metaphors
- Skill diversity arguments
- Risk analysis framing

## Reference File
Example: V145B poster

---

*Claude Design Engine by Rahaman Bin Ujit*
