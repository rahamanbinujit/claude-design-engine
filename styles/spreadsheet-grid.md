# Spreadsheet Grid

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Style ID:** spreadsheet-grid
**Quality Score:** 4/5 — KEEP

## Concept
Poster laid out as a brutalist spreadsheet/data table. Deadpan corporate aesthetic subverted for personal brand. Part of the 2026 "Brute Force" design trend — heavy structure, black-and-white palette with sparse color hits, blunt and honest.

## Specs

### Canvas
- **Size:** 1080x1350 (4:5)
- **Background:** #0A0A0A
- **Fonts:** Space Grotesk (headings, body) + Space Mono (metadata, annotations, row/col labels)

### Grid Structure
- **Layout:** CSS Grid, 4 columns: 48px row-number gutter + 3 data columns (flexible)
- **Rows:** 1 column-header row + 8 data rows (adjust count as needed)
- **Cell borders:** 1px solid white at 7% opacity
- **Column header row:** slightly lighter bg (3% white), Space Mono 13px, 25% white text, bottom border at 12% white
- **Row number gutter:** Space Mono 12px, 18% white, centered, bg at 1.5% white, right border at 12% white

### Key Elements

1. **Formula Bar** (top, above grid)
   - Cell reference box: mono 12px, 30% white, 4% bg, 8% border
   - Formula content: mono 12px, 20% white, underline border
   - Shows the "selected" cell's content as a formula string

2. **Red Header Row** (one row only)
   - Full #C83C32 background
   - Contains the first line of the headline in bold white
   - "STR" or type annotation in corner

3. **Selected Cell** (one cell only)
   - 2px outline in blue-white (rgba(180,200,255,0.6))
   - Subtle 4% blue-white background tint
   - Creates the "active cell" spreadsheet interaction feel

4. **Red Left Border** (accent)
   - 3px solid #C83C32 left border on one key cell
   - Draws the eye like a spreadsheet conditional format

5. **Cell Annotations**
   - Tiny mono 9px labels in cell corners at 10% white
   - Shows data types: "TEXT", "STR", "INT", "B4" (cell refs)
   - Adds authentic spreadsheet detail

6. **Status Bar** (bottom, below grid)
   - Mono 10px at 15% white
   - Left: "SHEET 1 OF 1"
   - Center: "CELLS: 32  ROWS: 8  COLS: 3"
   - Right: "FOUNDER_OS.xlsx"

### Content Layout (row by row)
| Row | Content | Notes |
|-----|---------|-------|
| 1 | Tag/category | Red mono, spans all columns |
| 2 | Empty spacer | Authentic spreadsheet feel |
| 3 | Headline part 1 | RED BG header row |
| 4 | Headline part 2 | Selected cell effect |
| 5 | Headline part 3 | Red left border accent |
| 6 | Stats | Multi-column: number + labels |
| 7 | Body text / quote | Subdued, 55% white |
| 8 | Author + date | Mono, bottom of grid |

### Typography
- **Headline:** Space Grotesk 700, 64px, white, -1px tracking
- **Stat number:** Space Grotesk 700, 110px
- **Stat label:** Space Mono 14px, 40% white, 1px tracking
- **Body text:** Space Grotesk 24px, 55% white, 1.5 line-height
- **Author:** Space Mono 12px, 35% white, 2px tracking
- **Designation:** Space Mono 10px, 20% white, 1.5px tracking

## Best For
- Data-driven posts (stats, metrics, numbers)
- Systems-thinking content
- "Corporate subversion" aesthetic
- Process/structure posts
- AI/tech/engineering topics

## Adapt Tips
- Adjust row count (6-10 rows) based on content density
- The red header row should always contain the most provocative line
- The selected cell should highlight the most important word
- Use multi-column layouts for stats row (data naturally lives in cells)
- Formula bar content can change to match the post theme
- Status bar filename should be thematic ("FOUNDER_OS.xlsx", "MARKETING_AI.csv", etc.)

---

*Claude Design Engine by Rahaman Bin Ujit*
