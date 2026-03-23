# Manuscript Annotation

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4/5
**Best for:** Proof posts, contrarian takes, claim-and-evidence content, "reviewed and verified" messaging

## Concept
The poster mimics an annotated manuscript page under academic review. Content is presented as if a reviewer has marked it up with marginal notes, circled annotations, struck-through revisions, and a sticky note. The stat feels "discovered and flagged" rather than simply presented.

## Layout
- 1080x1350, #0A0A0A background
- Main content occupies left 720px
- Right margin (past x:780) reserved for annotations
- Double red margin lines at x:780 (1.5px, red 10%) and x:786 (1px, red 6%)
- Faint horizontal ruled lines (SVG pattern, 36px spacing, 0.5px, white 2.5%) for notebook feel

## Typography
- **Headline:** 72px Space Grotesk bold, dim/red/bright hierarchy
- **Margin notes:** 9px Space Mono, white 18-20% or red 22-30%
- **Struck text:** 26px Space Grotesk weight-300, white 9%, red strikethrough
- **Replacement text:** 16px Space Grotesk italic, red 22%
- **Sticky note:** 8px Space Mono, yellow (rgba(255,240,180)) 35%
- **Meta/labels:** 7.5-9px Space Mono

## Key Elements

### 1. Double Margin Line
- Two vertical lines: 1.5px at rgba(200,60,50,0.10) and 1px at rgba(200,60,50,0.06)
- Runs full height of poster (40px from top and bottom)
- Classic manuscript/notebook margin indicator

### 2. Circled Annotation Markers
- 22px diameter circles, 1.5px border
- Red border (rgba(200,60,50,0.25)) for primary annotations
- White border (rgba(255,255,255,0.15)) for secondary
- Inline after key headline words
- Numbered 1, 2, 3 in 10px Space Mono

### 3. Margin Notes
- Positioned right of margin line at x:808
- 9px Space Mono, 20% white (or 30% red for critical notes)
- Slightly rotated (-1.5deg to +1deg) for hand-placed feel
- Each corresponds to a circled marker number
- Content: editorial commentary ("verify this claim," "contradicts consensus," "define scope")

### 4. Dashed Connector Lines (SVG)
- Connect inline markers to margin notes
- stroke-dasharray: 4,4
- Red at 8% opacity or white at 5%
- Curved paths (quadratic bezier) for organic feel

### 5. Wavy Underlines
- SVG path with quadratic bezier curves
- Under key phrases
- Red (20% opacity, 1.5px) for emphasized words
- White (8%, 1.5px) for secondary emphasis

### 6. Struck-Through Revision
- Original text in 26px, 9% white, with text-decoration: line-through
- Strikethrough color: rgba(200,60,50,0.18)
- Replacement text above in italic, red 22%
- Insertion caret "^" in red 35%

### 7. Stat Highlight Box
- 2px border, rgba(200,60,50,0.18)
- Corner emphasis marks: 16px L-shapes at 2px, red 30%
- "Flagged for review" label above in 8px mono, red 30%
- Stat feels discovered/flagged rather than simply shown

### 8. Sticky Note
- 90x75px rectangle
- Background: rgba(255,240,180,0.06)
- Border: 1px rgba(255,240,180,0.12)
- Text: 8px Space Mono, rgba(255,240,180,0.35)
- Rotated 2deg
- Content: "TODO: add proof screenshots from system"

### 9. Draft Watermark
- "DRAFT" in 160px Space Mono bold, white 2.2%
- Rotated -18deg
- Background layer (z-index: 1)

## Standard Elements
- Corner L-brackets (22px, 1px, white 4.5%)
- Meta top: "Draft: 14 / Status: Review / Editor: R.B.U."
- Data strip bottom: 7.5px mono, white 10%
- Side text rotated 90deg
- Author bar with 1px border-top white 6%
- SVG noise 2.5%
- Page number "pg. 14"

## Color Palette
- Background: #0A0A0A
- Primary text: rgba(255,255,255,0.95)
- Dim text: rgba(255,255,255,0.16)
- Red accent: #C83C32
- Annotation red: rgba(200,60,50, 0.10-0.35)
- Sticky yellow: rgba(255,240,180, 0.06-0.35)
- Body: rgba(255,255,255,0.28)
- Secondary stats: rgba(255,255,255,0.40)

## Export
- 15MB PNG at 4x scale → 2.4MB JPEG 95%

---

*Claude Design Engine by Rahaman Bin Ujit*
