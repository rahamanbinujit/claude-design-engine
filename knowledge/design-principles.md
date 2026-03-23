# Design Principles

> The mindset behind great design. These principles apply to every format, every platform, every brief.

---

## Principle 1: Think Like an Art Director, Not a Coder

You're not "generating HTML." You're DESIGNING. Every element must earn its place.

**Before adding any element, ask:**
- Does this serve the message?
- Does this create visual interest?
- Would a professional designer include this?
- Can I remove this and still communicate the same thing?

If the answer to the last question is "yes" — remove it.

---

## Principle 2: Whitespace Is the Most Expensive Material

The empty space around elements is just as designed as the elements themselves.

```
Amateur approach:  Fill every pixel with content
Professional:      Use space to create importance
```

**When something looks wrong, the fix is almost always MORE space, not less.** Add padding. Increase gaps. Remove elements. Let the design breathe.

Whitespace communicates:
- Confidence (we don't need to fill every corner)
- Hierarchy (the surrounded element must be important)
- Sophistication (luxury brands use the most whitespace)

---

## Principle 3: One Message, One Design

A poster with 3 messages is a poster with 0 messages. Every design communicates exactly ONE thing:
- One headline
- One stat
- One emotion
- One call to action

If you have multiple messages, you need a carousel (one message per slide).

---

## Principle 4: Research Before Creating

**40% of your design time should be research.**

Amateur workflow: blank canvas -> create -> hope it works
Professional workflow: study 5 references -> extract patterns -> create informed design

The difference in output quality is dramatic. See `workflows/reference-research.md` for the full process.

---

## Principle 5: The Grid Is Sacred

Every element snaps to an invisible grid. Use consistent multiples of a base unit.

```
Base unit: 8px
Valid spacing: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80px
Invalid spacing: 13, 17, 35, 42, 55px
```

If your padding is 40px, your gaps should be 8, 16, 24, or 40 — not 17 or 35.

**CSS tools for grid alignment:**
- `display: flex` + `gap` for spacing between siblings
- Consistent `padding` values on containers
- `box-sizing: border-box` everywhere

---

## Principle 6: Visual Hierarchy Through Contrast

Create hierarchy through extreme differences, not subtle ones:

| Dimension | Bad (subtle) | Good (extreme) |
|---|---|---|
| Size | 32px vs 24px | 72px vs 14px |
| Weight | 500 vs 400 | 700 vs 300 |
| Opacity | 100% vs 80% | 100% vs 35% |
| Color | Text vs slightly darker text | Neutral vs bright accent |

**The eye should have NO CHOICE about what to read first.** If the hierarchy isn't immediately obvious, the contrast isn't extreme enough.

---

## Principle 7: Consistency Is Quality

Consistency signals professionalism. Inconsistency signals carelessness.

**Be consistent in:**
- Border radius (pick ONE value: 0, 8, 12, or 50%)
- Spacing values (always multiples of base unit)
- Font sizes (stick to your type scale)
- Color usage (same opacity levels across all secondary text)
- Padding (same on all 4 sides of a container)

**The moment you have border-radius: 4px in one place and 16px in another, the design looks unpolished.**

---

## Principle 8: Constraints Enable Creativity

The best designs come from tight constraints:
- Only 3 colors
- Only 2 fonts
- Only 1 accent element
- Only 40 words maximum

Constraints force you to make every element work harder. A design with 10 font sizes looks chaotic. A design with 4 font sizes looks intentional.

---

## Principle 9: Design for the Worst Case

Your design will be:
- Viewed on a 4-inch phone screen
- Surrounded by other content in a scrolling feed
- Glanced at for 1-2 seconds maximum
- Compressed by the platform's algorithm

Design for ALL of these simultaneously:
- Big enough text for small screens
- High enough contrast to stand out in a feed
- Clear enough hierarchy for a 1-second glance
- Clean enough vectors to survive compression

---

## Principle 10: Self-Review Is Non-Negotiable

Every design must pass a quality gate before presentation. See `workflows/self-review.md`.

**Never rationalize a mediocre design.** "It's fine because the user is in a rush" — no. "It's good enough" — no. If you wouldn't be proud of it, fix it.

The self-review system exists because:
- We are biased toward our own work
- Problems are easier to fix before showing than after
- One bad design erodes trust in the entire system
- Quality compounds — every good design raises the bar

---

## The Design Mindset Checklist

Before starting any design:
- [ ] I understand the ONE message this design communicates
- [ ] I've researched 3-5 references
- [ ] I've chosen a style that matches the content and mood
- [ ] I know the target platform and dimensions

While designing:
- [ ] Every element earns its place (would I remove this?)
- [ ] Typography hierarchy is extreme (4:1+ ratio)
- [ ] Spacing is consistent and generous
- [ ] Only ONE accent color on ONE element

Before exporting:
- [ ] Self-review score is 4 or higher
- [ ] Design passes the phone-size test
- [ ] Design passes the 1-second glance test
- [ ] All technical specs are correct (dimensions, fonts, scale)

---

*Claude Design Engine by Rahaman Bin Ujit*
