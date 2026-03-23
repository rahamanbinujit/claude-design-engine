---
name: atc-radar
description: Air traffic control radar display. CRT phosphor green on dark green-black. Range rings, sweep glow, flight blips with callsigns, flight strip, comms log, instrument readouts. Real-time operational aesthetic.
status: KEEP
quality-score: 4.5
niche: Aviation / ATC radar
---

# ATC Radar Display Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Palette
- **Screen bg:** Dark green-black `#0A1A0A`
- **Phosphor green:** `#33FF66` (classic CRT)
- **Amber data:** `#FFBB33` (key targets/values)
- **Red alert:** `#FF4444` (ACTIVE/LIVE indicators)
- **Dim green:** At 4-8% opacity for grid/atmosphere

## Radar Elements
- **Range rings:** 4 concentric circles (200-800px), 1px green at 4-8%
- **Crosshairs:** Full-width/height lines at 4% green
- **Sweep glow:** conic-gradient from 200deg (transparent → 6% green → 2% → transparent)
- **Scanlines:** repeating-linear-gradient 4px (3% black stripes for CRT texture)

## Flight Blips
- **Green blips:** 6px circles, #33FF66 with 8px box-shadow glow, 50% opacity labels
- **Key target:** 10px amber circle with 16px+40px dual glow, amber label
- **Callsign format:** `SKL-018 FL350` (category-count altitude)
  - SKL = Skills, CNT = Content, VID = Video, MKT = Marketing, BRD = Brand, ANA = Analytics

## Communications Log (unique element)
```
22:14:03 SYS-066 cleared direct, all frequencies, maintain FL660
22:14:08 SYS-066 roger, maintaining FL660. 66 contacts under management.
22:14:15 TOWER   SYS-066, you are cleared for unlimited operations.
```
Timestamp (dim) + callsign (amber) + instruction (brighter green)

## Typography
- **Terminal:** Share Tech Mono (THE aviation/military terminal font)
- **Headline:** Exo 2, 52px, weight 700, green with text-shadow glow
- **Flight strip:** Share Tech Mono, 16px, green/amber/red variants
- **Readouts:** Share Tech Mono, 36px, green with 12px glow
- **Comms:** Share Tech Mono, 11px, color-coded by role

## Best For
- Operations/management posts ("managing the airspace")
- Systems monitoring / real-time operations
- "Everything under control" messaging
- Any post where the metaphor is managing many moving parts simultaneously

---

*Claude Design Engine by Rahaman Bin Ujit*
