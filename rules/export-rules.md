# Export Rules

> Non-negotiable rules for exporting designs. Follow these exactly to ensure professional output every time.

---

## Resolution: Always 4x

```javascript
deviceScaleFactor: 4  // ALWAYS. No exceptions.
```

| CSS Size | Output at 4x |
|---|---|
| 1080x1080 | 4320x4320px |
| 1080x1350 | 4320x5400px |
| 1280x720 | 5120x2880px |
| 794x1123 | 3176x4492px |

**Why 4x?** Social media platforms compress images. Starting at 4x ensures the final compressed version still looks sharp. At 2x, text can look blurry after platform compression. At 1x, it looks amateur.

---

## Font Loading: Always Wait

```javascript
await new Promise(r => setTimeout(r, 2500));
```

**Always wait 2500ms after page load.** Google Fonts load asynchronously. If you screenshot before fonts are ready, you get system fallback fonts (Times New Roman, Arial) instead of your brand fonts.

---

## Clipping: Match Exactly

```javascript
clip: {
  x: 0,
  y: 0,
  width: 1080,   // Must match CSS body width
  height: 1080   // Must match CSS body height
}
```

**CSS body dimensions MUST match Puppeteer viewport dimensions MUST match clip dimensions.** Any mismatch = cropped or scaled output.

---

## Format: PNG for Posts, PDF for Documents

| Output | Format | Why |
|---|---|---|
| Social media posts | PNG | Lossless compression, sharp text |
| Carousels (LinkedIn) | PDF | Single file upload, platform preference |
| Carousels (Instagram) | PNG (per slide) | Platform requires individual images |
| Thumbnails | PNG or JPG | PNG for text clarity, JPG for photo-heavy |
| Reports/docs | PDF | Multi-page support, professional |

---

## After Export: Always Open

After exporting ANY design, ALWAYS open the image immediately. Never wait for the user to ask "let me see it." Show it proactively.

```bash
open output.png        # macOS
xdg-open output.png   # Linux
start output.png      # Windows
```

---

## File Naming

```
output/
  YYYY-MM-DD-topic-name.png     # Single poster
  YYYY-MM-DD-topic-name/        # Carousel
    slide-01.png
    slide-02.png
    ...
  YYYY-MM-DD-topic-name.pdf     # PDF document or carousel
```

---

## Pre-Export Checklist

- [ ] Body width/height in CSS matches viewport
- [ ] `box-sizing: border-box` is set globally
- [ ] Google Fonts URL is correct and loads all needed weights
- [ ] `overflow: hidden` on body/container
- [ ] 2500ms wait after page load
- [ ] `deviceScaleFactor: 4`
- [ ] Clip dimensions match viewport
- [ ] Output filename follows naming convention
- [ ] `printBackground: true` for PDF exports

---

*Claude Design Engine by Rahaman Bin Ujit*
