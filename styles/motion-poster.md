# Style: Motion Poster

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Overview
CSS-animated type-hero poster with 5 layered animation effects. Designed for GIF/video export to maximize LinkedIn feed attention. The static key frame alone is a strong poster; animations add engagement lift. Combines pulsing glow, floating particles, scan line, staggered text reveals, and drifting background elements. Best for bold positioning statements, AI/tech content, and any post where stopping the scroll is critical.

**Important:** Static key frame export via Puppeteer captures the visual foundation. Full motion (GIF/video) requires headless browser screen recording + ffmpeg conversion -- a future enhancement. LinkedIn supports GIF autoplay in feed.

## Example
Example: "I build AI systems that do more."

## Layout (1080x1350, 4:5 portrait)

```
+------------------------------+
| TAG (mono, top-left)         |  <- fadeSlideIn 0.2s delay
|                              |
|  I build                     |  <- 88px, weight 300, fadeSlideIn 0.5s
|  AI systems         [v-line] |  <- 88px, weight 700, fadeSlideIn 0.8s
|  that do more.       red 2px |  <- 88px, weight 700, "more." = red + glow pulse
|              [GLOW ORB]      |  <- pulsing red radial glow (4s breathe cycle)
|  -- red divider (grows) --   |  <- lineGrow animation 1.5s delay
|                              |
|  Subtitle / pull quote       |  <- 22px, weight 300, fadeSlideIn 1.8s
|                              |
|  66    10x    1              |  <- stats row, staggered fadeSlideIn 2.1-2.5s
|  SKILL OUTPUT PERSON         |
|                              |
|  . . .                       |  <- floating particles drift upward (7-10s cycles)
|                              |
|  Name + Title      [MOTION]  |  <- fadeSlideIn 2.8s delay
+------------------------------+
```

Background layers (behind content, z-index < 10):
- Faded "AI" text (600px, 1.8% opacity) with slow drift/scale animation (12s)
- Red glow orb (500px radial gradient, pulsing scale+opacity, 4s)
- White glow orb (300px, offset right, 5s cycle)
- Horizontal scan line (1px red gradient, sweeps top-to-bottom, 6s)
- 7 floating particles (3-5px dots, staggered speeds 6-10s)

## Animation Layers (5 total)

### 1. Pulsing Red Glow Orb
- `radial-gradient(circle, rgba(200,60,50,0.25) 0%, transparent 70%)`
- 500px diameter, centered behind headline
- Keyframes: scale 1 -> 1.15, opacity 0.4 -> 1.0, 4s ease-in-out infinite
- Creates atmospheric "breathing" light source

### 2. Accent Word Glow Pulse
- Applied to the red accent word via `text-shadow`
- Keyframes: subtle glow (20px/40px spread) -> strong glow (30px/60px/100px spread), 3s cycle
- Makes the key word literally pulse with energy

### 3. Floating Particles
- 7 small dots (3-5px), red and white variants at low opacity
- Each has unique left position, animation-delay, and duration (6-10s)
- Float upward with slight horizontal drift
- Fade in at 10%, fade out at 90% of journey

### 4. Horizontal Scan Line
- 1px height, `linear-gradient(90deg, transparent, rgba(200,60,50,0.3), transparent)`
- Sweeps from top to bottom over 6s, linear infinite
- Adds subtle tech/digital feel without being heavy

### 5. Background Text Drift
- Faded "AI" at 600px, 1.8% opacity
- Slow drift: translate shifts by ~2-3%, scale shifts by 1.03, 12s cycle
- Creates parallax depth without competing with content

## Staggered Content Reveals
All content uses `fadeSlideIn` (opacity 0 + translateY 30px -> visible):
- Tag: 0.2s delay
- Headline line 1: 0.5s
- Headline line 2: 0.8s
- Headline line 3: 1.1s
- Divider line grow: 1.5s
- Subtitle: 1.8s
- Stats (3 items): 2.1s, 2.3s, 2.5s
- Footer: 2.8s

Total reveal sequence: ~3.4s. Capture key frame at 5s for peak glow + all elements visible.

## Typography
- **Headline:** Space Grotesk, 88px, mixed weights (300 light for "I build", 700 bold for "AI systems" and "that do")
- **Accent word:** #C83C32 with animated glow pulse
- **Tag:** Space Mono, 14px, 4px letter-spacing, uppercase, 40% opacity
- **Subtitle:** Space Grotesk, 22px, weight 300, 55% opacity
- **Stats number:** Space Grotesk, 42px, weight 700
- **Stats label:** Space Mono, 12px, 2px letter-spacing, uppercase, 35% opacity
- **Identity:** Space Grotesk 16px name + Space Mono 11px role

## Colors
- Background: #0A0A0A
- Text: #FFFFFF (headlines), rgba(255,255,255,0.85) for light-weight lines
- Accent: #C83C32 (accent word, glow orb, particles, scan line, divider)
- Muted: rgba(255,255,255,0.35-0.55) for subtitles, labels, tag

## Best For
- Bold positioning/statement posts ("I build X that does Y")
- AI/tech content where the digital/motion aesthetic reinforces the message
- Any post where maximum feed attention is needed
- Posts that will eventually be exported as GIF for higher engagement

## File Size
- PNG: ~1.2MB (convert to JPEG 95%)
- JPEG 95%: ~792KB
- Note: static export. GIF would be larger (2-5MB typical for 4s loop at 15fps)

## Future Enhancement
To convert to actual GIF/video:
1. Use Puppeteer to record the page as video frames (or use a headless browser recording tool)
2. ffmpeg to convert frames to GIF (optimized palette) or MP4
3. Target: 4s loop, 15fps, 1080x1350, < 5MB for LinkedIn

---

*Claude Design Engine by Rahaman Bin Ujit*
