# Phylogenetic Cladogram

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Category:** Scientific visualization / Evolutionary biology
**Mood:** Systematic, ancestral, interconnected
**Best for:** Posts about skill stacking, compound growth, interconnected systems, "everything I know comes from one source"

---

## Visual Specs

- **Canvas:** 1080x1350, #0A0A0A background
- **Fonts:** Space Grotesk (headings), Space Mono (labels, metadata)
- **Colors:** White (common skills), Red #C83C32 (rare skills, root, ancestry)

## Structure

### Cladogram Zone (top 63%)
- Rooted rectangular cladogram reading left-to-right (root at left edge, tips at right)
- Root node: red circle (r=5, 0.40 opacity) with glow ring (r=10, 0.12 stroke) at far left
- Main trunk: 2.5px red line from root to first divergence
- Branching convention: vertical lines = divergence events, horizontal lines = lineage persistence
- Synapomorphy diamonds (rotated 45deg squares, 8x8px) at each internal node
- Bootstrap support values (7-7.5px Space Mono) near key nodes

### Three Clades
1. **Common (upper, white):** Early-diverging, faint (0.05-0.18 opacity, 0.8-1.8px lines), 7+ taxa
2. **Intermediate (middle, brighter white):** Mid-diverging (0.06-0.20 opacity), 5 taxa
3. **Rare (lower, red):** Latest-diverging (0.12-0.30 red opacity, 1-2.5px lines), 5 taxa
4. **Apex taxon:** Deepest branch, thickest (2.5px), brightest node (0.55), triple glow, largest label

### Terminal Nodes
- Circles at x=700 (common: r=2.5-3, white; rare: r=3.5-5, red)
- Labels at x=718, Space Mono 9-11px, opacity hierarchy matches branch importance

### Supporting Elements
- Time axis: faint dashed vertical lines (T-4 through NOW)
- Scale bar: bottom-left, "0.1 substitutions/site"
- Ghost stat at root position (160px, 0.10 red)
- Ghost word ("TAXA") at 340px, 0.008 white, rotated -8deg
- Corner brackets, SVG noise 3%

### Text Zone (bottom 37%)
- Red gradient divider at ~855px
- Dim headline (44px, 300 weight, 0.14 white): the null hypothesis
- Bold headline (60px, 700 weight, 0.92 white): the phylogenetic claim, key word in italic red
- Body text (15px, 0.20-0.35 white): thesis + insight in italic
- Punchline (14px, italic, 0.28 white): three-number compression
- Data panel (bottom-right): Taxa, Topology, Method, Bootstrap, Outgroup

## Narrative Logic
- Root = common ancestor = origin of all capabilities
- Branch thickness = evolutionary signal strength
- Branch position (top to bottom) = divergence depth (common to rare)
- Time axis (left to right) = chronological skill acquisition
- Bootstrap values = confidence in shared ancestry
- "Outgroup: None" = no external reference exists for this system

---

*Claude Design Engine by Rahaman Bin Ujit*
