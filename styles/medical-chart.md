---
name: medical-chart
description: Electronic health record / medical chart. Hospital header, patient card, vital signs cards, SVG trend graph, ICD diagnosis codes, treatment plan with checkboxes, doctor's handwritten note. Skills reframed as medical conditions.
status: KEEP
quality-score: 5
niche: Medical / EHR dashboard
---

# Medical Chart Style

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


## Palette
- **Background:** Clinical white `#F8F9FA`
- **Primary:** Medical blue `#2563EB`
- **Positive:** Vitals green `#10B981`
- **Warning:** Amber `#F59E0B`
- **Critical:** Red `#EF4444`
- **Border:** `#E5E7EB`
- **Muted text:** `#9CA3AF`
- **Dark text:** `#1A1D23`

## Content Mapping
| Medical Element | Maps To |
|----------------|---------|
| Patient name | Name (surname, given) |
| MRN | System ID (SYS-066) |
| Vitals | Key stats with status badges |
| Trend graph | Growth over time (SVG polyline) |
| Diagnoses + ICD codes | Skills/traits as clinical findings |
| Treatment plan | Process/method as prescriptions |
| Doctor's note | Personal insight (Caveat handwriting) |

## Diagnosis Format (the star element)
```
Z66.0    Acute Hyperskilling Syndrome         [Critical]
F10.X    Compulsive System Building           [Moderate]
R66.1    Elevated Output Levels               [Stable]
```
ICD-style codes (alphanumeric) + clinical name + severity badge

## Treatment Plan (with story)
- ✓ Administer 18x AI Systems — integrated, daily
- ✓ Apply Content therapy — 14 sessions completed
- ✓ ~~Hire a team~~ → Build a system instead (crossed out = pivot)
- ☐ Continue monitoring. No upper limit detected. (unchecked = ongoing)

## SVG Trend Graph
```svg
<polyline points="0,120 75,115 ... 900,15" stroke="#2563EB" stroke-width="2.5"/>
<polygon points="..." fill="url(#blueGrad)" opacity="0.15"/> <!-- area fill -->
```

## Best For
- "Diagnosed with ambition" humor posts
- Growth/progress tracking content
- Treatment plan / prescription for success
- Any post where clinical language adds authority + humor
- Dashboard-style stat presentations

---

*Claude Design Engine by Rahaman Bin Ujit*
