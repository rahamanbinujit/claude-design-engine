# Stellar Spectrum — Design Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Quality Score:** 4 / 5
**Vibe:** Scientific spectroscopy, diagnostic precision, chemical uniqueness

---

## Concept
The poster simulates a stellar absorption spectrum -- a horizontal band of continuous light with dark vertical lines cut into it at specific wavelengths. Each absorption line represents a "skill element" that only this star contains. The spectrum IS the identity, unique as a chemical fingerprint. No two stars have the same absorption pattern.

## Layout (1080x1350)
- **Top zone (90-290px):** Skill labels at -72deg rotation with vertical connector lines extending down to the spectrum edge. Labels act as element identifications, like annotations on a real spectroscopy chart.
- **Wavelength ruler (290-310px):** Major ticks every 50nm (380-780nm) with minor ticks between. Horizontal line below with tick marks.
- **Spectrum band (310-590px):** The hero visual. Full-width continuous visible spectrum (CSS gradient violet-to-deep-red) with dark absorption lines cut into it. 280px tall.
- **Element symbols (600-650px):** Periodic-table-style two-letter abbreviations with wavelength sub-labels.
- **Transition zone (650-850px):** Ghost "66" at 0.035 opacity. Red gradient divider at bottom.
- **Headline (882-1050px):** Two-part headline. Light/dim observation + bold/bright declaration.
- **Body + Data (1060-1200px):** Body text left, data panel right.
- **Punchline (1210px):** One-line italic summary.
- **Identity bar (bottom 44px):** Name left, mark right.

## Spectrum Construction
```css
background: linear-gradient(
  to right,
  #1a0028 0%,    /* deep violet 380nm */
  #3a00aa 6%,    /* violet */
  #0033ff 15%,   /* blue 450nm */
  #00bbcc 27%,   /* cyan 490nm */
  #22cc44 37%,   /* green 530nm */
  #ccbb00 55%,   /* yellow 570nm */
  #ee8800 64%,   /* orange 590nm */
  #ff4400 74%,   /* red 630nm */
  #aa0000 89%,   /* deep red 680nm */
  #220000 100%   /* near-IR edge */
);
```

## Absorption Line Hierarchy
| Type | Width | Opacity | Position | Meaning |
|---|---|---|---|---|
| Trace | 1px | 0.4 | Scattered | Ambient noise, unnamed elements |
| Thin (common) | 2px | 0.6 | Violet-blue (0-25%) | Common skills, clustered, easy to detect |
| Medium (mid) | 3px | 0.78 | Green-yellow (28-56%) | Mid-tier skills, fewer, spaced |
| Heavy (rare) | 5px | 0.92 | Orange-red (60-85%) | Rare skills, isolated, prominent |
| Signature | 7px | 0.95 + red glow | Deep red (88-90%) | The defining element. Red box-shadow glow. |

## Glow Treatment
- Top/bottom spectrum edges: 40px blurred gradient matching spectrum colors at 6-10% opacity
- Signature line: triple box-shadow (3px/12px/30px blur) in brand red at 0.25/0.12 opacity
- Drop-shadow filter on spectrum container for overall ambient glow

## Label System
- Skill names above spectrum at -72deg rotation (reading upward-left)
- Vertical connector lines from label to spectrum edge
- Connector height varies (40-95px) for visual rhythm and overlap prevention
- Element symbols below spectrum in periodic-table notation (2-letter codes)
- Each element has wavelength sub-label (e.g., "486 nm")

## Color Rules
- Common skills: white at 12% opacity (labels), 14% (element symbols)
- Mid skills: white at 25% opacity (labels), 22% (element symbols)
- Rare skills: brand red at 40% opacity (labels), 40% (element symbols)
- Signature: brand red at 70% (label), 65% (element symbol)
- Headline dim: white at 14%
- Headline bold: white at 92%
- Headline accent: brand red #C83C32

## Typography
- Tag/catalog: Space Mono 9px, letter-spacing 2-3px
- Skill labels: Space Mono 7.5px, letter-spacing 1.5px
- Wavelength numbers: Space Mono 7px
- Element symbols: Space Mono 11px bold
- Headline dim: Space Grotesk 44px weight-300
- Headline bold: Space Grotesk 58px weight-700
- Body: Space Grotesk 17px weight-300/italic
- Data panel: Space Mono 7.5px
- Punchline: Space Grotesk 16px italic

## Copy Template
- **Tag:** `/// Spectral Analysis /// Stellar Classification`
- **Catalog:** `Spec. SYS-066`
- **Headline 1:** "Everyone has a spectrum." (light, dim)
- **Headline 2:** "Mine has 66 lines no one else *has.*" (bold, accent on last word)
- **Body:** "Each dark line is an element only this star contains."
- **Italic:** "Remove one line and it's a different star entirely."
- **Punchline:** "66 absorption lines. One spectrum. Zero matches in the catalog."
- **Data:** Star, Type (G2V), Lines (66), Elements, Temp (5,800 K), Class (Unique), Method (Absorption), Match (0 Known)

## When to Use
- Posts about unique skill combinations or rare capabilities
- "No one else can do this" positioning
- Identity/fingerprint metaphors
- Chemical/scientific framing of personal brand
- Comparison posts (your spectrum vs. generic spectra)

## Files
- Example: Stellar Spectrum poster

---

*Claude Design Engine by Rahaman Bin Ujit*
