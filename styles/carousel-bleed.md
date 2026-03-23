# Carousel Bleed

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Multi-slide carousel with visual elements flowing seamlessly across slide boundaries, forcing the viewer to swipe.**

## When to Use
- Narrative/argument carousels (Problem / Solution / Result)
- Story-driven content that builds across slides
- Any carousel where you want maximum swipe-through rate

## Format
- **Slide size:** 1080x1350px (4:5 portrait, optimal for LinkedIn carousels)
- **Slides:** 3-5 slides typical
- **Export:** Individual PNGs per slide, combine into PDF for LinkedIn upload

## Bleed Techniques (use 2-3 per carousel)

### 1. Cut-off Text (STRONGEST)
- Text that ends mid-word at the right edge of a slide
- The incomplete word creates genuine curiosity ("producti" → swipe to see "productive?")
- Place at bottom third of the slide, extending past the right boundary

### 2. Shapes Cut at Edges
- Circles, rectangles, or abstract shapes positioned so half is visible on one slide, half on the next
- Use red-bordered circles (`border: 2px solid rgba(200, 60, 50, 0.25)`) for brand consistency
- Match position: if circle is at `right: -300px` on slide N, it should be at `left: -300px` on slide N+1

### 3. Diagonal Stripe
- A wide stripe (120px height) rotated -8deg that exits one slide and enters the next
- Use brand red at low opacity (0.15) so it's atmospheric, not distracting
- Gradient: solid in the middle, fading at the edges

### 4. Horizontal Line Thread
- A thin red line (2px) at the SAME Y position across all slides
- Creates a structural thread that ties the carousel together
- Gradient: fade in on slide 1, solid on middle slides, fade out on last slide

## Layout Structure

### Consistent Elements (every slide)
- **Slide tag:** Top-left, Space Mono 13px, uppercase, 3px letter-spacing, 40% opacity ("THE PROBLEM", "THE SOLUTION", "THE RESULT")
- **Slide number:** Top-right, Space Mono 14px, 30% opacity ("01 / 03")
- **Progress pips:** Bottom-right, 3 horizontal bars (28x4px), active = #C83C32, inactive = 15% white
- **Identity:** Bottom-left, red dot + name in Space Mono (slides 1-2), full name + title (last slide)
- **Padding:** 80px on all sides

### Slide-Specific
- **Slide 1 (Hook):** Big headline (82px mixed weight), setup text, cut-off text at bottom, arrow swipe hint at right edge
- **Slide 2 (Core):** Solution headline (78px), stats row, arrow swipe hint
- **Slide 3 (CTA):** Payoff headline (72px), capability list with red arrow icons, pull quote with red left border, full identity

## Typography
- Headlines: Space Grotesk, mixed weights (300 light + 700 bold), red glow on accent word
- Subtext: Space Grotesk 22px, weight 300, 50% opacity
- Tags/labels: Space Mono 13px, uppercase, 40% opacity
- Stats: Space Grotesk 52px bold red numbers, Space Mono 13px labels

## Colors
- Background: #0A0A0A (all slides, consistent)
- Text: #FFFFFF (headlines), rgba(255,255,255,0.85) for light weight, rgba(255,255,255,0.6) for body
- Accent: #C83C32 with glow (text-shadow: 0 0 60px/120px/180px at decreasing opacity)
- Bleed elements: rgba(200,60,50,0.15-0.5) — subtle, atmospheric

## Swipe Hint
- Right edge of non-final slides: chevron arrow (24x24px, 2px white border-right + border-bottom, rotated -45deg)
- 50% opacity, vertically centered

## File Sizes
- Expect 350-600KB per slide PNG at 4x (efficient, no conversion needed)

## Key Rules
- Bleed elements must match EXACTLY at boundaries (same Y position, mirrored X position)
- Never put critical content in the bleed zone (right 60px) — it may get cropped
- Background depth text (faded 2% opacity, 300-380px) adds premium feel — use content-relevant numbers/words
- Each slide must work as a standalone visual AND as part of the sequence

---

*Claude Design Engine by Rahaman Bin Ujit*
