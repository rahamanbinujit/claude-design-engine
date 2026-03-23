# Skill: Visual Hierarchy

> Control what the viewer sees first, second, third — and what they skip entirely.

---

## Core Techniques

### 1. Size Is King
The fastest way to create hierarchy: make one thing dramatically larger.

```
STRONG hierarchy:          WEAK hierarchy:
┌──────────────────┐       ┌──────────────────┐
│                  │       │ Title Here       │
│  MASSIVE         │       │                  │
│  HEADLINE        │       │ Some body text   │
│  (72px)          │       │ that looks the   │
│                  │       │ same size as the  │
│  tiny body (14px)│       │ title above it.  │
│                  │       │                  │
└──────────────────┘       └──────────────────┘
```

**The ratio matters more than the absolute size.** 72px vs 14px (5:1) creates hierarchy. 32px vs 24px (1.3:1) creates confusion.

### 2. The Squint Test
Squint at your design until everything blurs. You should still be able to identify:
- What's the biggest element? (focal point)
- What's the grouping? (sections)
- Where does the eye go? (flow)

If everything looks like the same gray blob, there's no hierarchy.

### 3. Four Levels Only
Every design has exactly 4 levels of importance:

| Level | Visual Treatment | Example |
|---|---|---|
| **1. Hero** | Largest, boldest, accent color | The headline / main stat |
| **2. Support** | Medium size, full opacity | Subtitle / context line |
| **3. Detail** | Small, reduced opacity | Body text / descriptions |
| **4. Ambient** | Tiny, very faded | Tags, labels, metadata |

**If you have a 5th level, you have clutter. Merge two levels.**

### 4. Contrast Creates Hierarchy

You can create hierarchy through multiple dimensions simultaneously:

| Dimension | Low Priority | High Priority |
|---|---|---|
| **Size** | 11px | 72px |
| **Weight** | 300 (light) | 700 (bold) |
| **Color** | 35% opacity | 100% opacity + accent |
| **Case** | normal case | UPPERCASE |
| **Position** | edges/corners | center/above center |

**Stack these.** A hero element should be large AND bold AND full opacity AND possibly accented. A label should be small AND light AND faded AND uppercase. The more dimensions of contrast, the clearer the hierarchy.

### 5. Reading Flow
Eyes scan in predictable patterns on social media:

```
For posters / single images:
1. Center-top area first (the hook)
2. Supporting content below
3. Bottom last (branding)

For carousels / slides:
1. Top-left (start reading)
2. Across then down (F-pattern)
3. Bottom-right (swipe indicator)
```

Place your most important element in the first-scan area. Don't bury the headline at the bottom.

### 6. Whitespace Creates Emphasis
An element surrounded by MORE whitespace feels more important.

```
Low emphasis:                  High emphasis:
┌────────────────────┐        ┌────────────────────┐
│ Title              │        │                    │
│ Subtitle           │        │                    │
│ Body text here and │        │  Title             │
│ more text follows  │        │                    │
│ with no breathing  │        │                    │
│ room between them  │        │  Subtitle          │
└────────────────────┘        │                    │
                              └────────────────────┘
```

Same content. The version with space feels more premium and the title feels more important.

### 7. The "Format as Punchline" Technique
The FORMAT of a design element can be the message itself.

A number at 420px doesn't need context — the SIZE tells you it's important.
A word in red doesn't need an underline — the COLOR tells you it's the key.
A label in all-caps small monospace doesn't need a box — the TREATMENT tells you it's a category.

**Let the visual treatment DO the communication work.** Don't add redundant markers (underline + bold + red + large = amateur).

---

## Hierarchy Debugging

If your design lacks hierarchy, run this diagnostic:

1. **Cover everything except the headline.** Does it still work alone? If yes, good. If no, the headline isn't strong enough.

2. **Remove the accent color.** Is there still hierarchy? If yes, you're using multiple hierarchy tools well. If no, you're relying only on color — add size/weight contrast.

3. **Convert to grayscale.** Does the hierarchy survive? If yes, it's solid. If no, you're over-relying on color.

4. **Shrink to phone size.** Does the hierarchy survive? If yes, it works everywhere. If no, the contrasts aren't extreme enough.

---

## Practice Exercises

1. **Two-Size Challenge:** Create a poster using only 2 font sizes (e.g., 72px and 11px). Achieve clear hierarchy through size contrast alone.
2. **Grayscale Test:** Design something in color, then convert to grayscale. Does the hierarchy still work? Fix it if not.
3. **Hierarchy Removal:** Take a working design and slowly reduce all contrasts (size, weight, opacity) until the hierarchy breaks. Note the minimum contrast that works.
4. **Eye-Tracking:** Show your design to someone for 2 seconds. Ask what they saw first, second, third. Does it match your intended hierarchy?

---

*Claude Design Engine by Rahaman Bin Ujit*
