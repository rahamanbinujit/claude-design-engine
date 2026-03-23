---
name: deep-sea-pressure
quality-score: 4
status: KEEP
source: v130
---

# Deep Sea Pressure

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Bathymetric cross-section poster. The ocean's depth zones ARE the visual hierarchy.**

## Concept
The poster simulates a bathymetric (ocean depth) survey. 5 depth zones darken from faint blue-black (sunlight zone) to pure black (hadal zone). Text, skills, and data are positioned at the depth that matches their meaning. Surface-level things live at the surface. Deep things live at depth. The stat sits at the absolute deepest point, glowing like a bioluminescent creature under crushing pressure.

## When to Use
- Depth/expertise posts ("I go deeper than most")
- Surface vs. deep contrast posts
- Pressure/resilience posts ("thriving under pressure")
- Skill depth / system complexity posts
- "Most people vs. I" contrast framing

## Specs

### Canvas
- 1080x1350, #0A0A0A background

### Depth Zones (5 horizontal bands, top to bottom)
| Zone | Position | Height | Background |
|------|----------|--------|------------|
| Sunlight | top: 0 | 200px | linear-gradient 180deg, rgba(20,35,60,0.25) to rgba(12,22,40,0.18) |
| Twilight | top: 200px | 200px | rgba(12,22,40,0.18) to rgba(8,14,28,0.12) |
| Midnight | top: 400px | 280px | rgba(8,14,28,0.12) to rgba(5,8,16,0.06) |
| Abyssal | top: 680px | 280px | rgba(5,8,16,0.06) to transparent |
| Hadal | top: 960px | 390px | Pure #0A0A0A |

### Zone boundary lines
- Horizontal 1px lines at zone transitions
- Opacity decreasing with depth: 4% -> 3.5% -> 2.5% -> 1.5% white

### Zone labels (right-aligned)
- 8px Space Mono, uppercase, 3px letter-spacing
- Dimming: 22% -> 16% -> 10% -> 7% white
- Format: "ZONE NAME // DEPTH RANGE"

### Depth scale (left side)
- Vertical 1px ruler line at x:42px, gradient 6% to 2% white
- Tick marks: 12px wide, 6% white, at each zone boundary + midpoints
- Depth numbers: 7px Space Mono, 10% white, 1px letter-spacing

### Sonar scan lines
- ~12 horizontal lines across full width
- 1.5% white, irregularly spaced

### Pressure readings (right side)
- 7px Space Mono, 2px letter-spacing
- Transition from white (8%) at surface to red (30%) at depth
- Values: 1 ATM -> 100 ATM -> 250 ATM -> 400 ATM -> 1,086 ATM

### Descent line
- Vertical dashed line at center (x:540)
- 22% red, 4px dash / 12px gap
- Spans from sunlight zone to abyssal zone
- Arrow at bottom: 35% red triangle

### Headline: Surface text
- Position: top-left, INSIDE the sunlight zone (~72px from top)
- Font: 52px Space Grotesk, weight 300
- Color: 28% white (dim, fading, forgettable)
- Example: "They swim / at the surface."
- Key word slightly brighter (38%)

### Headline: Deep text
- Position: lower-left, INSIDE the hadal zone (~920px from top)
- Font: 56px Space Grotesk, weight 700
- Color: 95% white (visible in total darkness)
- Key word: #C83C32 with 40px + 80px red glow
- Example: "I operate / at depth."

### Stat ("66")
- Position: bottom-left, absolute deepest point (bottom: 68px)
- Font: 160px Space Grotesk, weight 700
- Color: #C83C32
- Glow: 60px / 120px / 200px red text-shadow (bioluminescent)
- Label below: 9px Space Mono, 5px letter-spacing, 30% white

### Skill labels
- Surface skills: 8px Space Mono, 10% white, scattered loosely in sunlight/twilight zones (common skills everyone has)
- Deep skills: 8px Space Mono, 7-14% red, scattered in midnight/abyssal zones (rare, bioluminescent skills)

### Bioluminescent particles
- 8-12 tiny dots (2-3px) in deep zones
- Red, 6-22% opacity
- Scattered randomly = deep-sea organisms

### Sonar rings (around stat)
- Ring 1: 280px diameter, solid 6% red
- Ring 2: 380px diameter, dashed 3.5% red

### Atmospheric elements
- Ghost stat: 500px, 1.2% white, centered vertically
- Red ambient glow: radial-gradient from bottom-left, 8% red
- Corner L-brackets: 16px, 6% white
- Tag: top-left, 8px Space Mono, 45% red, with glowing red dot
- Bottom metadata: right-aligned, 7px Space Mono, 10% white

## Typography Decisions
The entire poster is a typography-as-meaning exercise:
1. **Surface text** is light (300) and dim (28%) because surface work IS lightweight and forgettable
2. **Deep text** is bold (700) and bright (95%) because depth requires force and creates visibility through self-generated light
3. **The weight shift from 300 to 700** IS the pressure differential between 1 ATM and 1,086 ATM
4. **Text vertical position = ocean depth = meaning** -- nothing is placed for "layout balance," everything is placed where it belongs in the metaphor
5. **"66" glows like bioluminescence** because at hadal depths, the only light comes from organisms that adapted to produce their own

---

*Claude Design Engine by Rahaman Bin Ujit*
