# Skill: Photo Integration

> How to combine AI-generated or real photos with HTML/CSS layouts for professional hybrid designs.

---

## The Hybrid Method

AI is great at photos, terrible at typography and layout.
HTML/CSS is great at typography and layout, has no photos.

**Combine them:**
1. Generate/select photos FIRST
2. Build layout SECOND
3. Embed photos into HTML
4. CSS controls everything else

---

## Core Techniques

### 1. Photo as Panel Element
The photo fills a defined area in your layout:

```html
<div class="photo-panel">
  <img src="generated-photo.png" alt="">
  <div class="photo-label">LABEL TEXT</div>
</div>
```

```css
.photo-panel {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
}

.photo-panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* Fills space, crops overflow */
}

/* Gradient overlay for text on photos */
.photo-panel::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
}

.photo-label {
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 2;
  color: white;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
```

### 2. Photo as Background
The photo IS the background, with content overlaid:

```css
.hero-bg {
  background-image: url('generated-photo.png');
  background-size: cover;
  background-position: center;
  position: relative;
}

/* Dark overlay for text readability */
.hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);  /* Adjust opacity as needed */
}

.hero-bg .content {
  position: relative;
  z-index: 2;  /* Above the overlay */
}
```

### 3. Photo with Cutout (No Background)
For face photos or product shots on clean backgrounds:

```css
.cutout-container {
  display: flex;
  align-items: center;
}

.cutout-photo {
  width: 45%;
}

.cutout-photo img {
  max-width: 100%;
  height: auto;
  /* Assumes background already removed via AI editing */
}

.text-content {
  flex: 1;
  padding-left: 32px;
}
```

**To remove backgrounds:** Use the nano-banana edit_image tool with prompt "remove the background, keep only the person/object, transparent background"

### 4. Photo in Custom Shape
CSS clip-path crops photos into non-rectangular shapes:

```css
/* Circle crop */
.circle-photo {
  clip-path: circle(45%);
}

/* Diagonal crop */
.diagonal-photo {
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
}

/* Rounded rectangle (alternative to border-radius) */
.shaped-photo {
  clip-path: inset(0 round 20px);
}
```

### 5. Side-by-Side Photo Comparison
For before/after or contrast posts:

```css
.comparison {
  display: flex;
  gap: 16px;
}

.comparison .panel {
  flex: 1;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
}

.comparison .panel img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
```

---

## AI Photo Prompt Formulas

### Cinematic Portraits
```
"[Person description], [expression], [clothing],
 [camera] [lens] [aperture],
 [lighting type], [color grading],
 [setting/background]"
```

Example:
```
"Professional woman in her 30s, confident expression, navy blazer,
 Canon EOS R5 85mm f/1.4,
 natural window light from left, warm film color grading,
 modern office with blurred background"
```

### Product/Object Shots
```
"[Object] on [surface],
 [lighting setup], [key light direction],
 [accent light color], product photography,
 [background description], sharp focus"
```

### Abstract Textures
```
"[Material/texture type], [color palette],
 [mood], high resolution, seamless,
 suitable as [poster/web] background"
```

---

## Photo Quality Checklist

Before embedding a photo in your design:

- [ ] Resolution high enough for 4x export?
- [ ] Subject clearly visible and well-lit?
- [ ] Background appropriate (or removed)?
- [ ] Color grading matches your brand mood?
- [ ] No AI artifacts (weird fingers, distorted text, blurry areas)?
- [ ] Will it work at the size you're using it? (don't stretch a small photo)

If any item fails, re-generate or edit the photo. Never try to fix photo problems with CSS.

---

## File Management

```
designs/YYYY-MM-DD-topic/
  photos/
    hero.png           ← AI-generated hero photo
    headshot.png        ← AI-generated or real headshot
    background.png      ← Generated texture/background
  design.html           ← Layout embedding the photos
  output.png            ← Final export
```

**Always generate photos FIRST, save them, THEN build the HTML around them.** Don't try to generate photos mid-layout.

---

*Claude Design Engine by Rahaman Bin Ujit*
