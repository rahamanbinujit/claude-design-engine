# Darkroom Exposure Test Strip

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Niche:** Analog photography / Darkroom printing
**Experiment:** v248
**Quality Score:** 4/5
**Status:** KEEP

## Concept
A photographic darkroom test strip where graduated tonal bands (light to dark) each carry a message. The "perfect exposure" band is the hero — highlighted with red accent. Exposure times annotated on the left margin, photographer's handwritten notes on the right. Darkroom processing metadata in the footer.

## Visual DNA
- **Palette:** Warm cream paper (#F2EDE4) + 7-step grayscale from #EDE8DF to #0D0C0B + single red accent (#C83C32)
- **Typography:** Space Mono (data/headlines) + Special Elite (handwritten annotations)
- **Layout:** 3-column — exposure times | tonal strip bands | margin notes
- **Texture:** Subtle paper grain, chemical stain effects, sprocket holes
- **Key detail:** Red accent ONLY on the "best" band (left bar, circle mark, exposure time)

## Structure
```
[HEADER: test proof number | film/aperture/grade info]

[2s ] [LIGHT BAND — whisper text          ] [too light    ]
[4s ] [MED-LIGHT — emerging text          ] [highlights   ]
[8s ] [MID BAND — readable text           ] [midtones     ]
[16s] [■ HERO BAND — HEADLINE ● red mark  ] [✓ best       ]
[32s] [DARK BAND — supporting text        ] [rich shadows ]
[64s] [DARKER — fading text               ] [losing detail]
[128s][DARKEST — infinity symbol           ] [blocked up   ]

[grayscale bar]                    [zone system scale]
[AUTHOR NAME]              [dev/fix/print metadata]
[ROLE]
```

## When to Use
- Content about experimentation, iteration, finding what works
- "Building alone" / solo founder narrative
- Process-oriented messaging (trying, failing, perfecting)
- Any content with a progression or journey theme

## Rules
- Always 7 bands (matches classic zone system)
- Exposure times double each step (2, 4, 8, 16, 32, 64, 128)
- Band 4 (center) is always the hero — the "correct exposure"
- Red accent ONLY on the hero band
- Annotations use handwriting font (Special Elite) for authenticity
- Darkroom metadata (developer, fixer, temp, time) adds credibility
- Text on light bands = dark color; text on dark bands = white color

---

*Claude Design Engine by Rahaman Bin Ujit*
