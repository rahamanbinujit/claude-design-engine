# Circuit Board Trace

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Concept:** Electronics PCB engineering meets data poster. The poster is a printed circuit board, and the content IS the system being traced. One critical red path connects all components through a central junction node.

**When to use:** Systems-builder positioning, "many parts one system" messaging, technical infrastructure content, AI/automation reveals, any content where the metaphor is "every component connects through one critical path."

## Layout (1080x1350, #0A0A0A bg)

### Zones (top to bottom)
1. **Headline zone** (top:80px) -- Split sizing: stat number at 120px red + descriptor at 56px weight-300. Board designation in 9px Space Mono red 30%
2. **Component trace zone** (top:250px to 800px) -- SVG PCB traces with passive network + critical red path connecting named nodes
3. **Junction node** (center, ~660px) -- Convergence point where all traces meet. Concentric rings at 8% and 4% red
4. **Stat zone** (top:520px) -- Large stat number at 260px bold #C83C32 at junction center
5. **Body text** (top:900px) -- 22px weight-300, 28% white. Bridge between stat and resolution
6. **Resolution** (bottom:165px) -- "One system." with bold/light weight contrast (One = 700, system = 300)
7. **Meta bar** (bottom:40px) -- Board/trace/test metadata + identity

### SVG Trace Network (Signature Element)

#### Passive Traces (background)
- Right-angle paths (horizontal + vertical lines with 90deg turns) at 3-5% white, 1px stroke
- 6-8 trace clusters scattered across poster (top-left, top-right, mid-left, mid-right, lower-left, lower-right)
- Each cluster: 2-3 connected line segments forming an L or Z shape
- Component pads: 3px circles at 4-5% white at trace endpoints

#### Critical Path (RED -- the hero)
- One continuous trace from top edge to bottom edge through the board
- 2px stroke at 10-14% rgba(200,60,50)
- Connects named component nodes: CPU, MEM, I/O, SYS, OUT
- Each node: 6px circle pad at 22% red fill + 18% red stroke + 1.5px stroke-width
- Path uses right-angle turns only (no diagonals)

#### Junction Node (convergence)
- 12px circle at 28% red fill + 22% red stroke + 2px stroke-width
- Concentric outer ring at 24px, 8% red, 1px stroke
- Second outer ring at 40px, 4% red, 0.5px stroke
- Secondary branch traces feed into junction from left and right edges

### Component Labels
- 9px Space Mono bold, rgba(200,60,50,0.45)
- 3px letter-spacing, uppercase
- Positioned next to their pads (like PCB silkscreen markings)
- Active nodes on critical path: CPU, MEM, I/O, SYS, OUT
- Passive nodes off-path: INT, BUS, REG (at 16% white, non-bold)

### Headline (Size Pacing)
- Stat number: 120px bold #C83C32 with 60px/120px red glow, letter-spacing -5px
- Descriptor: 56px weight-300, 80% white, letter-spacing -1px
- The number on its own line, the word below = big pause then context
- Subtitle: 9px Space Mono, rgba(200,60,50,0.30), letter-spacing 4px

### Stat Number
- 260px bold #C83C32
- Letter-spacing: -10px
- Text-shadow: 80px at 40%, 160px at 18%, 240px at 8%
- Label below: 10px Space Mono, red 40%, letter-spacing 5px

### Resolution
- "One" at 58px weight-700, 92% white (emphasis on singularity)
- "system." at 58px weight-300, 65% white (gentle resolution)
- Weight contrast = emotional arc: bold answer + light acceptance

### Standard Elements
- Corner L-brackets: 20x20px, 1px, 6% white
- SVG noise: feTurbulence 0.65, 2.5% opacity
- Meta bar: 1px border-top 6% white, 8px Space Mono 12% white
- Identity: name 13px weight-600 50% white + title 9px Space Mono 20% white

## Text Placement Decisions (Typography Mastery)

1. **"66" headline at top-left** = Authority/announcement position. The number leads because on a circuit board, component count is the first spec you check. 120px vs 56px size contrast creates a dramatic PAUSE between the data and its context.

2. **Component labels (CPU/MEM/I/O) along critical path** = System/data voice in mono. Each is a whisper-level silkscreen marking -- positioned right next to its pad, exactly like a real PCB. The viewer discovers nodes as they trace the path.

3. **"66" stat at junction center** = Isolation + center position = significance. This is the main IC (integrated circuit) of the board. Every trace converges here. The concentric rings create structured space around it -- not empty, but organized.

4. **Body text at 900px** = Transitional zone between the data revelation (stat) and the emotional resolution. "Every trace connects to one board." echoes the visual path the eye just followed.

5. **"One system." at bottom-third** = Grounding/conclusion per typography-mastery. After all the complexity above (66 components, dense traces, multiple nodes), this is the quiet landing. Weight contrast (bold "One" + light "system.") = certainty on the count, gentleness on the concept.

6. **Reading path** = Eye enters at top-left (headline), follows the red trace downward through nodes, converges at junction (stat), continues down through body, lands at resolution. The critical path IS the reading path. The poster's visual structure mirrors its narrative structure.

## File Sizes
- PNG: ~7MB (needs JPEG conversion)
- JPEG 95%: ~1.9MB

## Example Headline Variations
- "66 components. / One system."
- "66 skills. / One board."
- "Built different. / Traced the proof."
- "Every trace leads somewhere. / Mine lead here."

---

*Claude Design Engine by Rahaman Bin Ujit*
