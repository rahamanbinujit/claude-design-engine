---
name: ticker-tape
quality-score: 4
status: KEEP
version: v109
best-for: proving doubters wrong, market/growth narratives, data-heavy achievement posts, "from 0 to X" stories
---

# Ticker Tape — Wall Street Data Poster

> Part of the [Claude Design Engine](https://github.com/rahamanujit/claude-design-engine) style library. Adapt colors and fonts to your `brand.config.json`.


**Concept:** The poster simulates a stock trading terminal. Diagonal ticker tape strips scroll behind the content like a live market feed. The stat is formatted as a stock price -- ticker symbol, number, delta, percentage change. The entire metaphor says: "the market (reality) has spoken, regardless of analyst (doubter) opinions."

---

## Visual Elements

### Ticker Tape Strips (Background)
- 6 diagonal strips at **-15deg rotation**, width 2400px
- Height: 30-34px, background rgba(255,255,255,0.02-0.035)
- Borders: 1px solid rgba(255,255,255,0.05-0.07)
- Font: Space Mono 9.5-10.5px, letter-spacing 1.5px
- Content: repeating ticker data "SYS +66 / SKL +5 / INT +2 / BRD 10x"
- Tape 3 (center) is hero tape: brightest, 34px, 10.5px font
- Red highlights on key ticker entries: rgba(200,60,50,0.40-0.55)
- Opacity decreases from center outward: 1.0 center to 0.30 edges

### Y-Axis Price Levels (Right Edge)
- Right-aligned at 55px from right
- 9px Space Mono, 10% white
- Levels: round numbers (0, 10, 30, 50, 66, 80)
- Active level (matching stat) in red 45%, bold
- 8px tick marks extending left from each level
- Active level has full-width horizontal gridline in red 4%

### Sparkline
- SVG polyline showing exponential growth curve
- Stroke: rgba(200,60,50,0.40), 1.8px
- Fill: linear gradient from red 12% to transparent
- Current-price dot at end: 3.5px red circle with 8px ring
- Positioned at ~810px vertical

### Horizontal Gridlines
- 6 gridlines at 1px, 2% white
- One gridline at stat height in rgba(200,60,50,0.04)

---

## Typography Hierarchy

### 1. Tag Line (Analyst Context)
- "Analyst Consensus / Downgrade" — 9px Space Mono, red 35%, letter-spacing 5px
- Position: just above headline
- **Why:** Sets the financial frame. This is a REPORT, not just a poster.

### 2. Headline (The Claim)
- "They said" — 52px, weight-300, 13% white. The fading opinion.
- "one person" — 78px, weight-700, 92% white. The subject.
- "cannot run" — 78px, weight-700, #C83C32 with red glow. The contested thesis.
- "a system." — 78px, weight-700, 92% white. What they said was impossible.
- Letter-spacing: -3.5px. Line-height: 0.92.
- Position: top-left (68px top, 60px left)
- **Why:** "They said" whispers because analyst opinions are surface noise. "Cannot run" is RED because it's the sell signal, the bet AGAINST. The entire poster exists to disprove this red word.

### 3. Ticker Symbol (Data Layer)
- "SYS" — 34px Space Mono bold, 35% white, letter-spacing 6px
- "Founder Exchange" — 9px Space Mono, 14% white
- Position: above the stat number
- **Why:** Mono font = system voice. The transition from narrative (headline) to data (stat). Like switching from an editorial to a Bloomberg terminal.

### 4. Stat Number (The Verdict)
- "66" — 280px, weight-700, #C83C32
- Letter-spacing: -16px. Line-height: 0.80.
- Text-shadow: 160px/60px red glow at 18%/10%
- Position: center-left, below headline
- **Why:** In markets, PRICE IS TRUTH. The number is the biggest element because in finance, the price always wins. Opinions are noise. Price is signal.

### 5. Delta (The Change)
- "+66.00" — 26px Space Mono bold, 50% white
- "(+6,600%)" — 15px Space Mono, 22% white
- Red triangle arrow before value
- Position: directly below stat
- **Why:** Trading convention. Price dominates, delta is subordinate. The change is the story, but the price is the verdict.

### 6. Stat Label
- "AI Skills Deployed" — 10px Space Mono, red 40%, letter-spacing 6px
- Position: below delta row
- **Why:** Translates the financial metaphor back to reality.

### 7. Price Data Strip
- "Prev Close: 0 / Open: 1 / High: 66 / Low: 1 / Vol: 5 Int / Mkt Cap: 2 Brd"
- 8px Space Mono, 12% white, "High" value in red 30%
- Position: above sparkline
- **Why:** Market metadata. Rewards close inspection.

### 8. Secondary Stats
- 5/2/10x at 44px bold, 82% white
- Ticker labels: 8px Space Mono, 16% white
- Delta values: 8px Space Mono, red 30%
- Position: below sparkline, horizontal row
- **Why:** Multiple tickers confirming the trend. Not just one data point -- a whole market moving.

### 9. Body Text (The Editorial)
- "The market corrected itself. / The analyst didn't."
- 23px weight-300, 28% white. Second line italic at 44%.
- Position: bottom-third left
- **Why:** The punchline. After all the data speaks, this is the editorial take. The italic second line is the knife twist.

---

## Color Palette (Brand)
- Background: #0A0A0A
- Primary text: rgba(255,255,255,0.92)
- Dim text: rgba(255,255,255,0.13-0.28)
- Accent: #C83C32
- Red glow: rgba(200,60,50,0.18-0.55)
- Tape bg: rgba(255,255,255,0.02-0.035)

## Fonts
- Space Grotesk (headings, body)
- Space Mono (all ticker/data/metadata elements)

## Canvas
- 1080 x 1350px (4:5 portrait)
- Export: Puppeteer 4x, JPEG 95%

---

## When to Use This Style
- "From 0 to X" achievement posts
- Proving skeptics/doubters wrong
- Growth metrics and performance data
- Any post where the numbers ARE the argument
- Market/finance metaphor posts
- "The data speaks for itself" narratives

## When NOT to Use
- Emotional/personal stories (too clinical)
- Posts without strong numbers
- Collaborative/team narratives (this style is about individual proof)

---

*Claude Design Engine by Rahaman Bin Ujit*
