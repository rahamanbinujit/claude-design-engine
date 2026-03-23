---
name: lab-notebook
description: Scientific lab notebook / research paper on graph paper. Four text voices (academic serif, handwritten pencil, data mono, rubber stamp). Yellow highlighter, margin annotations, red bracket, data table, signature line, peer review stamp. The most layered design in the library.
status: KEEP
quality-score: 5
niche: Scientific journal / Lab notebook
---

# Lab Notebook Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Palette
- **Graph paper:** Off-white `#F5F3EE`
- **Grid lines:** Light blue `#C4D7E8` at 20-35%
- **Ink:** Blue-black `#1E2D3D`
- **Pencil:** `#6B6560`
- **Red pen:** `#C0392B`
- **Highlighter:** `#FFF3B0` at 50%

## Graph Paper (CSS)
```css
/* Small grid (5mm) */
background: repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(196,215,232,0.20) 29px, rgba(196,215,232,0.20) 30px),
            repeating-linear-gradient(90deg, ...same...);
/* Major grid (every 5) */
background: same but 149px/150px at 0.35 opacity;
```
- Red margin line at left: 1px, rgba(192,57,43,0.15)
- 3 hole punches: 18px circles at left margin

## Four Text Voices
1. **Academic (EB Garamond):** Title 36px/700, abstract 16px/400, body 15px/300. The published paper.
2. **Handwritten (Caveat):** Margin notes 13px at rotation, conclusion 26px/600. The researcher's personal traces.
3. **Data (Inconsolata):** Table numbers 14px/700, headers 9px/700, dates 11px/500. Raw data.
4. **Stamp (Inconsolata):** "PEER REVIEWED" 14px/700 in bordered box, rotated 8deg. Institutional approval.

## Yellow Highlighter
```css
.highlight {
  background: linear-gradient(180deg, transparent 55%, rgba(255,243,176,0.50) 55%, rgba(255,243,176,0.50) 90%, transparent 90%);
}
```

## Content Structure
- **Header:** Date + experiment number, academic title, author + study type
- **Abstract:** Formatted paragraph with highlighted key phrase
- **Data table:** Domain/Count/%/Status with monospace numbers
- **Margin notes:** Pencil annotations at slight rotations (left of margin)
- **Red bracket:** Drawing attention to key data section
- **Results:** Headline + body with italic subordination
- **Handwritten conclusion:** Caveat 26px, red underline on key phrase
- **Signature:** Line + handwritten name + printed credentials
- **Peer review stamp:** Rotated, bordered, institutional

## Best For
- Evidence-based posts ("here's the data")
- Research/study format content
- Credibility-building through scientific structure
- Any post where multiple voices add depth (the paper, the notes, the review)
- "The hypothesis held" messaging

---

*Claude Design Engine by Rahaman Bin Ujit*
