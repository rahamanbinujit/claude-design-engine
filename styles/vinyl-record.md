---
name: vinyl-record
description: Vinyl record grooves aesthetic. Concentric circle grooves fill the lower canvas, with a tonearm, label area, and the stat at the needle-drop position. Music production meets data poster.
best-for: Creator/producer positioning, output-focused posts, "I make things" messaging, craftsmanship and production metaphors
---

# Vinyl Record Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Canvas
- 1080x1350 (4:5 portrait)
- Background: #0A0A0A

## Record Grooves
- ~60 concentric CSS circles centered at (540, 800), bleeding off bottom edge
- Container: 1000x1000px
- Outer spacing: 11px, inner spacing: 7px (tighter near center = "louder passage")
- Groove stroke: 0.5-0.8px
- Normal grooves: rgba(255,255,255,0.05)
- Index grooves (every 5th): rgba(255,255,255,0.09-0.10), 0.8px
- Red track groove: rgba(200,60,50,0.35), 1.5px, box-shadow 12px rgba(200,60,50,0.08)
- Second red track (subtle): rgba(200,60,50,0.15), 1px
- Record bleeds off bottom canvas = "too big for the frame" overflow energy

## Groove Shine
- Same position/size as record container, border-radius 50%
- linear-gradient(145deg, rgba(255,255,255,0.025) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.015) 100%)
- Simulates vinyl reflection under light

## Label Area
- 140px circle at record center
- Background: rgba(255,255,255,0.02)
- Border: 1px rgba(255,255,255,0.05)
- Text: "SYS-066 / SIDE A" in 7px Space Mono, 20% white, 2px letter-spacing
- Red dot indicator below text
- 6px spindle hole at dead center

## Tonearm
- Positioned upper-right, rotated -20deg from pivot
- Pivot base: 20px circle, rgba(255,255,255,0.06) bg, 1px 10% white border
- Arm: 2px wide, 240px tall, gradient 15%->6% white
- Head: 12x18px, rgba(200,60,50,0.4) bg with 50% red border, 2px radius
- Needle: 1px wide, 8px tall, rgba(200,60,50,0.6)

## Stat
- Positioned at upper edge of record (y:700), centered
- Number: 140px Space Grotesk, 700 weight, #C83C32, -5px letter-spacing
- Text-shadow: 0 0 80px rgba(200,60,50,0.25), 0 0 160px rgba(200,60,50,0.08)
- Label: 9px Space Mono, 25% white, 6px letter-spacing, uppercase
- Connector line below: 1px gradient from red 20% to transparent, 40px tall

## Typography Zones

### Tag (top-left)
- "// Now Playing" or similar vinyl/music metaphor
- 9px Space Mono, #C83C32 at 80%, 4px letter-spacing, uppercase
- 32px margin-bottom to headline

### Headline (top, 70px from top)
- 68px Space Grotesk, -2.5px letter-spacing, 0.9 line-height
- Pacing via weight contrast:
  - Dim words (what fades): weight-300, rgba(255,255,255,0.3)
  - Accent word (tension): #C83C32
  - Power line (declaration): weight-700, #FFFFFF full brightness
- The weight shift = emotional arc. Light = question/observation. Heavy = answer/declaration.

### Body (quiet zone between headline and record, ~420px)
- 19px Space Grotesk, 400 weight, 35% white, 1.65 line-height
- Explains the vinyl metaphor: grooves = skills, tracks = systems, record = output
- Italic emphasis on the payoff line

### Side Indicator (mid-right)
- "A" at 48px weight-300, 4% white (ghosted)
- "Side One" in 7px Space Mono, 8% white, 3px letter-spacing

### Track Indicator (left, aligned with stat)
- 30px red line at 30% opacity
- "Track 01" in 7px Space Mono, 15% white, 2px letter-spacing

### RPM Mark (below label area)
- "33 RPM" in 7px Space Mono, 10% white, 3px letter-spacing

### Liner Notes (bottom, 36px from bottom edge)
- Left: 3-line metadata block in 7px Space Mono, 10% white, 1.5px letter-spacing
  - "RPM: 33 / Track: 01 / Duration: 66:00"
  - "Master: Original / Catalog: SYS-066"
  - "Format: AI / Standard: None"
- Right: Author name (12px Space Grotesk, 500, 45% white) + title (7px Space Mono, 18% white, 2px letter-spacing)

## Ambient Effects
- Radial gradient: ellipse at 50% 60%, rgba(200,60,50,0.025) center, transparent at 55%
- Gives warm red undertone to record area

## Text Placement Logic
1. Tag at top = sets the metaphor (vinyl player interface voice)
2. Headline at top = album title authority. Weight contrast creates pacing.
3. Body in quiet zone = liner notes, the explanation between the title and the music
4. "66" at needle-drop position = first track, where the music starts
5. Record bleeding off bottom = overflow, too much output for the frame
6. Label area at center = identity core, the smallest/deepest text
7. Liner notes at bottom = whispered credits for close readers

## File Sizes
- PNG: ~3.3MB (4x DPI)
- JPEG 95%: ~1.4MB (use this for LinkedIn)

---

# Variant B: LP Sleeve Hybrid (v219, Niche #50 Milestone)

**Quality Score:** 4 / KEEP
**Palette:** Hybrid split -- #0A0A0A dark (vinyl) + #F5F0E8 warm cream (LP sleeve back cover)
**Fonts:** Playfair Display (titles, label number), Space Mono (catalog labels), DM Mono (metadata), Space Grotesk (track names, author)

## How It Differs from v117
- v117 = dark poster with grooves as bg texture, tonearm, stat at needle-drop
- v219 = two-tone split: realistic vinyl record top + LP sleeve back cover bottom
- v219 focuses on the TRACKLIST as the content vehicle, not the stat number
- v219 uses a warm cream sleeve section (light palette) for the text zone

## Core Concept
A vinyl LP where every skill is a track on a solo album. "66 Tracks, No Features" = no collaborators, no outsourcing. The LP sleeve back cover shows tracklist, liner notes, and credits.

## Composition
- **Two-tone vertical split:** Dark vinyl top (~62%) / cream sleeve bottom (~38%)
- **4px red divider** separates zones
- **SVG vinyl record** (920px diameter) centered, overflowing top edge
- **Red center label** (r=155, #C83C32) with curved text, "66 TRACKS"
- **Dead wax etchings** as curved text ("ONE ARTIST /// ALL TRACKS /// NO FEATURES")
- **LP sleeve** with catalog header, title, two-column tracklist (Side A/B), liner notes, credits

## Tracklist Format
- Two columns: SIDE A (Build) + SIDE B (Scale)
- Track entries: number + name (uppercase) + duration
- Key tracks highlighted in red
- Track 66 "THE SYSTEM (HIDDEN)" with "--:--" duration = the meta-system

## Best For
- Solo builder positioning, "I did it all myself" messaging
- Creative/music-culture audience, analog aesthetics
- Anti-outsource, anti-team content
- Portfolio/skill-showcase posts
- The two-tone composition is unique among all experiments

---

*Claude Design Engine by Rahaman Bin Ujit*
