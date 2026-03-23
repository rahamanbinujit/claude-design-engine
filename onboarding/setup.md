# Brand Onboarding

Ask the user these questions in order. Save all answers to `brand.config.json` in the project root.

---

## Questions

### 1. Identity
- **What's your name?** (as it should appear on designs)
- **What's your title/designation?** (e.g., "CEO at Acme", "Design Lead", "Content Creator")
- **Do you have a logo or avatar?** If yes, ask for the file path. If no, skip — designs will work without one.

### 2. Platform
- **What platform are you primarily designing for?**
  - LinkedIn (default: 1080x1080 or 1080x1350)
  - Instagram (1080x1080 or 1080x1350)
  - YouTube (thumbnails: 1280x720)
  - Twitter/X (1200x675)
  - Multiple (ask which is primary)

### 3. Typography
- **What's your display/headline font?** (the bold, attention-grabbing one)
  - If they don't know, suggest: Inter, Space Grotesk, Poppins, Montserrat, Outfit
  - Ask if they want serif (editorial feel) or sans-serif (modern/clean)
- **What's your body/secondary font?**
  - If they don't know, suggest pairing based on their headline choice
- **Do you want a monospace accent font?** (for tags, labels, metadata)
  - Suggest: Space Mono, JetBrains Mono, IBM Plex Mono, Fira Code

### 4. Colors
- **What's your primary background color?**
  - Light (warm paper, clean white, off-white)
  - Dark (deep black, charcoal, navy)
  - If they don't know: "Do you want your brand to feel warm/organic or bold/dramatic?"
- **What's your primary text color?**
  - Auto-suggest based on background (dark bg = light text, light bg = dark text)
  - Encourage warm variants over pure black/white
- **What's your accent color?** (the ONE color that pops — used on key elements)
  - If they don't know, suggest based on their industry/vibe
  - Red = bold/urgent, Blue = trust/tech, Green = growth/health, Orange = energy/creative, Purple = premium/creative

### 5. Brand Vibe
- **Which word best describes your brand's visual feel?**
  - Organic/Handmade (paper textures, handwritten elements, imperfect)
  - Clean/Minimal (lots of white space, geometric, precise)
  - Bold/Editorial (dark backgrounds, strong typography, dramatic)
  - Playful/Creative (bright colors, rounded shapes, casual)
  - Premium/Luxury (dark tones, subtle textures, refined typography)

### 6. Content Style
- **What type of content do you mostly create?**
  - Thought leadership / opinions
  - Educational / how-to / tutorials
  - Data / stats / insights
  - Personal stories / behind-the-scenes
  - Product / service promotion
  - Mix of the above

### 7. Logo & Branding Elements
- **Where should your name/logo appear?** (default: bottom-left)
  - Bottom-left (most common)
  - Bottom-right
  - Top-left
  - Minimal (just name, no logo on every post)
- **What size should it be?** (default: small/subtle)
  - Small/subtle (recommended)
  - Medium
  - Prominent

---

## After Collecting Answers

Generate a `brand.config.json` file in the project root with this structure:

```json
{
  "identity": {
    "name": "User's Name",
    "designation": "Their Title",
    "logo_path": "path/to/logo.png or null",
    "logo_position": "bottom-left",
    "logo_size": "small"
  },
  "platform": {
    "primary": "linkedin",
    "default_width": 1080,
    "default_height": 1080
  },
  "typography": {
    "display_font": "Space Grotesk",
    "display_weights": [700],
    "body_font": "Inter",
    "body_weights": [300, 400, 500, 600],
    "mono_font": "Space Mono",
    "mono_weights": [400, 700],
    "google_fonts_url": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap"
  },
  "colors": {
    "background": "#0A0A0A",
    "text_primary": "#FFFFFF",
    "text_secondary": "rgba(255,255,255,0.6)",
    "text_muted": "rgba(255,255,255,0.35)",
    "accent": "#C83C32",
    "accent_glow": "rgba(200,60,50,0.5)",
    "card_bg": "rgba(255,255,255,0.05)",
    "card_border": "rgba(255,255,255,0.08)"
  },
  "style": {
    "vibe": "bold-editorial",
    "content_type": "thought-leadership",
    "border_radius": "12px",
    "base_padding": "40px",
    "grid_unit": 8
  }
}
```

**Important:** Compute all derived colors automatically:
- `text_secondary` = primary text at 60% opacity
- `text_muted` = primary text at 35% opacity
- `card_bg` = opposite of background at 5% opacity
- `card_border` = opposite of background at 8% opacity
- `accent_glow` = accent color at 50% opacity
- `google_fonts_url` = auto-construct from chosen fonts + weights

After saving, confirm: "Your brand is configured. You can now design anything. Try: 'Design a LinkedIn post about [topic]'"
