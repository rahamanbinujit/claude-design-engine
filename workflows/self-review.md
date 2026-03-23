# Self-Review Workflow

**Every design must pass self-review before being shown to the user.** No exceptions. This is the quality gate that separates professional output from mediocre output.

---

## The Scoring System

| Score | Label | Description | Action |
|---|---|---|---|
| 5 | **Exceptional** | Would stop someone mid-scroll. Publishable on any major account. | Ship immediately |
| 4 | **Professional** | Clean, well-executed, brand-consistent. Good enough to post. | Ship it |
| 3 | **Acceptable** | Works but has minor issues. Wouldn't embarrass you. | Fix before showing |
| 2 | **Below Standard** | Readability issues, alignment problems, or unclear hierarchy. | Must fix |
| 1 | **Broken** | Fundamentally flawed — layout broken, text unreadable, wrong vibe. | Start over |

**Minimum passing score: 4.** Never present a design that scores below 4.

---

## The Checklist

Run through every item. Be honest. Be harsh. It's better to catch problems now than after the user sees it.

### 1. Text Readability
- [ ] Can you read the headline in 1 second?
- [ ] Is body text large enough to read on a phone? (minimum 13px at 1080 width)
- [ ] Is there enough contrast between text and background?
- [ ] Does any text overlap with other elements, lines, or decorations?
- [ ] Is letter-spacing appropriate? (tight for headlines, wide for labels)

**If text overlaps background lines or decorations = automatic score 2. Fix it.**

### 2. Visual Hierarchy
- [ ] Is there ONE clear focal point? (the thing your eye goes to first)
- [ ] Is the hierarchy clear? (headline > subhead > body > metadata)
- [ ] Is the size contrast ratio at least 4:1 between headline and body?
- [ ] Does the accent color highlight the most important element?

### 3. Alignment & Spacing
- [ ] Are all elements aligned to the same grid?
- [ ] Is padding consistent on all 4 sides?
- [ ] Are spacing values multiples of the base unit (8px)?
- [ ] No floating elements that look disconnected from the layout?
- [ ] No elements touching the edges (minimum padding maintained)?

### 4. Color & Brand
- [ ] Accent color on ONE element only?
- [ ] No pure black (#000000) or pure white (#FFFFFF)?
- [ ] Colors match `brand.config.json`?
- [ ] No more than 3-4 colors total?
- [ ] Text colors at correct opacity levels?

### 5. Overall Composition
- [ ] Does the design have breathing room? (when in doubt, more space)
- [ ] Would this stop someone scrolling?
- [ ] Does it feel professional, not template-y?
- [ ] Is it appropriate for the target platform?
- [ ] Does it communicate ONE clear message?

### 6. Technical
- [ ] Body dimensions match export dimensions?
- [ ] Fonts loaded via Google Fonts?
- [ ] `box-sizing: border-box` is set?
- [ ] `overflow: hidden` on container?
- [ ] No content clipping at edges?

---

## Common Failures (and Fixes)

| Issue | Score Impact | Fix |
|---|---|---|
| Text on busy background / lines | Score 2 | Move text to clear space, or add solid background behind text |
| Text too small for mobile | Score 2 | Increase to minimum 13px body, 48px headline |
| Multiple accent colors | Score 3 | Remove all but one |
| Inconsistent padding | Score 3 | Set all sides to same value |
| No clear visual hierarchy | Score 3 | Make headline 4x bigger than body |
| White box behind text (hack) | Score 3 | Move text to empty space, use leader lines if needed |
| Elements touching edges | Score 3 | Add minimum 32px padding on all sides |
| Design feels "generated" | Score 3 | Break the grid slightly, add subtle texture, vary weights |

---

## How to Score

After running the checklist:

1. Count the number of items that PASSED
2. Note any automatic score-reducers (text overlap = auto 2)
3. Consider the overall "gut feel" — does this look like a professional designer made it?
4. Assign the score

**Be strict.** Users trust this system because it delivers quality. One bad design destroys that trust.

---

## After Scoring

- **Score 4-5:** Present to user with confidence
- **Score 3:** Fix the specific items that failed, re-score
- **Score 1-2:** Identify the fundamental issue, rebuild from scratch if needed

Never rationalize a low score. "It's fine because..." is how bad designs get shipped. Fix it.

---

*Claude Design Engine by Rahaman Bin Ujit*
