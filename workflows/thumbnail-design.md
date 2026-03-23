# YouTube Thumbnail Design Workflow

Thumbnails are the single most important factor in YouTube CTR. A great thumbnail can 10x a video's performance.

---

## Specs
- **Dimensions:** 1280x720 (16:9)
- **Export:** 5120x2880 at 4x scale
- **File size:** Under 2MB recommended
- **Format:** PNG (for text clarity) or JPG (for photo-heavy)

---

## The Rules

### 1. Study Before You Design
**ALWAYS search for real thumbnails in the same niche first.**
- Look at what top creators in this topic use
- Study what's getting high view counts
- Extract patterns (face placement, text style, colors)
- Never design a thumbnail from imagination

### 2. Maximum 4-5 Words
If you can't say it in 4-5 words, you're saying too much. The thumbnail is a billboard, not a blog post.

Good: "I Quit My Job"
Bad: "Why I Decided To Leave My Corporate Job After 5 Years"

### 3. The Glance Test
A thumbnail must communicate its message in under 2 seconds at phone size. If you have to squint or think, it fails.

### 4. Face = Clicks
Thumbnails with expressive human faces consistently outperform faceless thumbnails. If you have a face photo, use it.

### 5. Contrast is King
The thumbnail will be tiny (120x67px) on most screens. Colors need EXTREME contrast to be readable.

---

## Layout Patterns

### Pattern 1: Face + Text (Most Common)
```
+----------------------------------------+
|                                        |
|   BIG TEXT        [FACE               ]|
|   (3-4 words)    [with expression     ]|
|                   [taking up 40%+     ]|
|                                        |
+----------------------------------------+
```
- Face on right, text on left (or vice versa)
- Face takes up 40%+ of the frame
- Text: 3-4 words maximum, ultra-bold
- Background: solid color or blurred

### Pattern 2: Before/After Split
```
+----------------------------------------+
|    BEFORE     |     AFTER              |
|               |                        |
|  [old/bad]    |   [new/good]           |
|               |                        |
|    (red)      |     (green)            |
+----------------------------------------+
```

### Pattern 3: Object/Screenshot Focus
```
+----------------------------------------+
|                                        |
|        [OBJECT / SCREENSHOT]           |
|                                        |
|     BIG TEXT AT BOTTOM                 |
|                                        |
+----------------------------------------+
```

### Pattern 4: Text Only (Bold Statement)
```
+----------------------------------------+
|                                        |
|       MASSIVE                          |
|       BOLD                             |
|       TEXT                             |
|                                        |
+----------------------------------------+
```

---

## Typography for Thumbnails

- **Font size:** 72-120px minimum (must be readable at 120px width)
- **Weight:** 800-900 (extra bold / black)
- **Font choices:** Impact, Montserrat Black, Anton, Oswald, Bebas Neue
- **Outline/stroke:** 3-4px black outline on white text, or vice versa
- **Drop shadow:** Adds depth and readability over photos
- **NEVER use more than 2 lines of text**

```css
.thumbnail-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 96px;
  font-weight: 900;
  color: #FFFFFF;
  text-shadow:
    3px 3px 0 #000,
    -3px -3px 0 #000,
    3px -3px 0 #000,
    -3px 3px 0 #000;
  line-height: 1.0;
  text-transform: uppercase;
}
```

---

## Color Rules for Thumbnails

- Use colors that CONTRAST with YouTube's white/dark interface
- **Best performing:** Yellow, Red, Blue backgrounds
- **Avoid:** White backgrounds (disappear on YouTube's white mode)
- Limit to 2-3 colors maximum
- Key words in a contrasting color (e.g., yellow text on blue bg)

---

## Face Photo Guidelines

If using a face/cutout:
1. Use `rembg` or similar tool to remove background
2. Expression should match the video's emotion (shock, excitement, curiosity)
3. Face should be large enough to read the expression at thumbnail size
4. Position face on one side, text on the other
5. Slight tilt or angle adds energy

---

## Self-Review for Thumbnails

Before exporting, test these:

1. **Shrink test:** View at 120x67px. Can you read the text? Can you see the face expression?
2. **Glance test:** Look for 1 second. What's the message? If unclear, simplify.
3. **Scroll test:** Would this stop YOUR scrolling in a YouTube feed?
4. **Competitor test:** Place next to competitor thumbnails. Does it stand out?

---

## Export

```bash
node scripts/export-png.js thumbnail.html output.png 1280 720
```

Output: 5120x2880px PNG at 4x resolution.

---

*Claude Design Engine by Rahaman Bin Ujit*
