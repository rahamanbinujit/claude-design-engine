# Cloud Chamber

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Category:** Scientific instrument / Particle physics
**Experiment:** v151
**Quality Score:** 4 / KEEP
**Best for:** Posts about seeing hidden patterns, identifying what others miss, going beyond surface observation, systems thinking, AI/data analysis

---

## Concept

A Wilson cloud chamber where supersaturated vapor reveals particle tracks from a central interaction vertex. Each particle type leaves a distinctive signature based on charge, mass, and energy. The central stat sits at the collision vertex -- the point of maximum energy where everything originates. Skills map to particle types: common skills are background noise (straight cosmic rays), rare skills are the spiraling, decaying, pair-producing events that require expertise to identify.

## Visual Structure

- **1080x1350**, #0A0A0A background
- **Chamber zone** (top 65%): faint 0.5px border, radial fog gradient, contains all SVG tracks
- **Text zone** (bottom 35%): headlines, stats, body, data panel
- Red divider separates zones

## Key Elements

### Particle Tracks (SVG)
- **Electron spiral** (white, 0.14 opacity, 0.6px): curves LEFT in B-field, tightening spiral as energy lost
- **Positron spiral** (red, 0.16 opacity, 0.6px): curves RIGHT (opposite charge), mirror of electron
- **Alpha particle** (white, 0.30 opacity, 2px): THICK, SHORT, STRAIGHT -- heavy ionization, short range
- **Muon** (red, 0.11 opacity, 0.35px): THIN, LONG, barely curved -- minimum ionizing
- **Pair production V** (gamma dashed line -> e+e- fork): invisible gamma creates matter
- **Pion decay kink** (track changes direction): circled in red at the kink point
- **Background cosmic rays** (0.02 opacity, 0.2px): straight lines crossing entire chamber = noise
- **Vapor halos**: duplicate wider paths with feGaussianBlur 0.4, very low opacity (0.015-0.03)

### Interaction Vertex
- Bright hot point: 0.8px white-pink center, 2.5px red glow with blur
- Red crosshair lines: 0.5px, gradient fading from center
- Stat "66" centered at vertex: 120px bold #C83C32, triple glow

### Skill Label Zones
- BACKGROUND (9% white): straight/short tracks, common skills
- CURVED (16% white): moderate curvature tracks, mid skills
- DECAY (35% red): at kink/pair points, rare skills
- VERTEX (50% red): nearest to collision, peak skills

### Instrument Frame
- B-field indicator: circled-cross + Tesla value (top-left)
- Chamber readout: pressure, temperature, medium, saturation (top-right)
- Momentum scale: GeV ruler (left edge)
- Ambient condensation dots (0.02-0.035 opacity, 0.15-0.3px)

## Typography

- **Dim headline**: 50px, weight 300, 15% white -- passive observation ("They see tracks in the fog.")
- **Bold headline**: 64px, weight 700, 93% white -- identification ("I identified the [red italic]particle.[/]")
- **Body**: 19px weight 300 / italic, observation then insight
- **Tag**: "Cloud Chamber Analysis" mono 8px
- **Data panel**: mono 7px, white keys / red values

## Text Placement Meaning

- **"particle."** in red = the discovered entity, colored by the vertex glow
- Weight shift 300->700 = observation to identification
- Dim headline below chamber = spectator looking at results from outside
- Bold headline = physicist's conclusion after measurement
- "66" at vertex = the event counter, all tracks radiate FROM it

## Colors / Fonts

- Background: #0A0A0A
- Primary accent: #C83C32 (positron tracks, vertex, rare skills)
- White tracks: electrons, alphas, common particles
- Fonts: Space Grotesk (headlines), Space Mono (metadata), Playfair Display italic (key word)

---

*Claude Design Engine by Rahaman Bin Ujit*
