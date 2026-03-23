# AI Image Generation Workflow (Gemini + nano-banana)

The hybrid approach: use AI to generate photographic elements, then compose them into pixel-perfect layouts with HTML/CSS.

**This is the secret weapon.** AI generates the photos. Code controls the layout. You get the best of both worlds.

---

## Setup

### 1. Install nano-banana MCP Server

Add the nano-banana MCP server to your Claude Code configuration. This gives Claude access to Google's Gemini image generation.

**In your Claude Code MCP settings, add:**
```json
{
  "mcpServers": {
    "nano-banana": {
      "command": "npx",
      "args": ["-y", "nano-banana@latest"]
    }
  }
}
```

### 2. Get a Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Create a free API key
3. When you first use image generation, Claude will ask for your key
4. The key is stored locally — never shared or committed

**Important:** Never commit your API key to version control. The `.gitignore` in this repo excludes config files with keys.

---

## The Hybrid Workflow

```
[1] Generate photos with AI (Gemini via nano-banana)
         |
[2] Build layout in HTML/CSS (your brand, your style)
         |
[3] Embed AI photos into the HTML via <img> tags
         |
[4] Export with Puppeteer at 4x resolution
```

### Why Hybrid?

| Approach | Result |
|---|---|
| AI image alone | Great photos, terrible text/layout/typography |
| HTML/CSS alone | Great layout, no photos (just shapes and text) |
| **Hybrid** | **AI-quality photos + pixel-perfect layout + brand typography** |

---

## Capabilities

### Generate New Images
Create photographic elements from text descriptions:
- Product shots
- Lifestyle photography
- Portraits and headshots
- Abstract backgrounds
- Scene compositions

**Prompt tips for best results:**
```
"Professional headshot of a [person description], studio lighting,
 shallow depth of field, Canon 85mm f/1.4, warm color grading"
```

Include camera/lens details, lighting setup, and color grading for cinematic quality.

### Edit Existing Images
Modify any image file:
- Remove backgrounds
- Change colors/mood
- Add or remove elements
- Style transfer
- Composite multiple images

### Continue Editing
Iteratively improve the last generated image:
- "Make the lighting warmer"
- "Remove the background"
- "Add more contrast"
- "Change the shirt color to blue"

### Reference-Based Generation
Use existing images as references:
- Style transfer from reference photos
- Consistent character generation
- Brand-consistent imagery

---

## Integration with Design Styles

### For Poster Styles That Need Photos

**Bold Split** (comparison with two photos):
1. Generate photo 1: `"Professional developer at desk, blue-toned lighting, side profile"`
2. Generate photo 2: `"AI robot working at desk, red-toned lighting, same angle"`
3. Embed both in the bold-split HTML template
4. Export at 4x

**Hero Character** (person as focal point):
1. Generate or edit a face photo with background removed
2. Embed in hero-character HTML with your brand typography
3. The HTML controls text placement, the photo provides the human element

**Photo Split** (editorial photo + text):
1. Generate a contextual photo for the topic
2. Place in the photo panel of the split layout
3. HTML handles all typography and branding

### For Backgrounds and Textures
- Generate abstract textures: `"Kraft paper texture, warm beige, subtle grain, high resolution"`
- Generate mood backgrounds: `"Dark moody gradient, deep navy to black, subtle noise"`
- Use as CSS `background-image` in your HTML templates

---

## Best Practices

### Photo Generation Prompts

**Be specific about:**
- Camera and lens (Canon 85mm, Sony 24-70mm)
- Lighting (studio, natural, golden hour, neon)
- Color grading (warm, cool, desaturated, film)
- Composition (centered, rule of thirds, close-up)
- Mood (professional, dramatic, casual, energetic)

**Bad prompt:** "a person working"
**Good prompt:** "Professional marketer working on laptop in modern office, warm ambient lighting, shallow depth of field, Sony 35mm f/1.8, warm color grading, shot from slightly above"

### Workflow Order
1. Generate ALL photos FIRST, before touching HTML
2. Review and iterate photos until they're right
3. THEN build the HTML layout around them
4. Never try to fix photo issues with CSS

### File Management
Save generated images in your design folder:
```
designs/YYYY-MM-DD-topic/
  photo-1.png          <- AI-generated photo
  photo-2.png          <- AI-generated photo
  design.html          <- HTML layout embedding the photos
  output.png           <- Final exported design
```

---

## Prompt Library

### Professional Headshots
```
"Professional headshot of a [age] year old [description], wearing [clothing],
studio lighting with softbox, shallow depth of field, Canon 85mm f/1.4,
warm neutral background, corporate but approachable"
```

### Product/Tech Shots
```
"[Product] on clean dark surface, dramatic rim lighting from behind,
subtle red accent light, product photography style, 4K, sharp focus"
```

### Abstract Backgrounds
```
"Abstract [color] gradient with subtle noise texture, smooth transitions,
[mood] feeling, suitable as poster background, high resolution"
```

### Lifestyle/Scene
```
"[Person description] in [setting], [activity], [lighting type],
[camera/lens], [color grading], candid documentary style"
```

---

*Claude Design Engine by Rahaman Bin Ujit*
