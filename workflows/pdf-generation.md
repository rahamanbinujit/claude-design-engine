# PDF & Document Generation Workflow

Generate pixel-perfect PDFs, reports, presentations, and multi-page documents using HTML + CSS + Puppeteer.

---

## Core Principle

**Never generate PDFs directly.** Always follow this pipeline:

```
Design in HTML/CSS -> Export with Puppeteer -> Get pixel-perfect PDF
```

| Approach | Problem |
|---|---|
| Direct PDF libraries (jsPDF, pdfkit) | Poor typography, alignment nightmares |
| Markdown to PDF | No design control, generic look |
| Canvas/PIL | Manual pixel math, no text reflow |
| **HTML + Puppeteer** | **Full CSS power, precise alignment, scalable** |

---

## The 3-Zone Layout

Every page follows this structure:

```
+----------------------------------+
|          TOP ZONE                |  <- Header, section label, page number
|          (fixed height)          |
+----------------------------------+
|                                  |
|         MIDDLE ZONE              |  <- Main content (flex: 1)
|         (flexible, fills space)  |
|                                  |
+----------------------------------+
|         BOTTOM ZONE              |  <- Footer, branding, page info
|         (fixed height)           |
+----------------------------------+
```

```css
.page {
  width: 794px;        /* A4 width */
  height: 1123px;      /* A4 height */
  padding: 60px;
  display: flex;
  flex-direction: column;
  page-break-after: always;
  overflow: hidden;
}
.page:last-child { page-break-after: avoid; }

.top-zone {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  margin-bottom: 32px;
}

.middle-zone {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.bottom-zone {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid rgba(0,0,0,0.1);
}
```

---

## Common Document Sizes

| Format | CSS Width | CSS Height | At 4x |
|---|---|---|---|
| A4 | 794px | 1123px | 3176x4492 |
| Letter | 816px | 1056px | 3264x4224 |
| Presentation (16:9) | 1920px | 1080px | 7680x4320 |
| Social Square | 1080px | 1080px | 4320x4320 |

---

## Typography for Documents

```css
/* Report headline */
h1 {
  font-size: 42px;
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.15;
}

/* Section heading */
h2 {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.2;
}

/* Sub-heading */
h3 {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
}

/* Body text */
p {
  font-size: 13px;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(0,0,0,0.7);
}

/* Metadata / footer */
.meta {
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(0,0,0,0.4);
}
```

---

## Page Types

### Cover Page
- Full-bleed background (dark or branded)
- Large title with tight letter-spacing
- Subtitle / description
- Author name + date at bottom
- No header/footer bars

### Content Page
- Header: section label + page number
- Body: headings + paragraphs + optional data blocks
- Footer: brand name + page number

### Data Page
- Stat blocks using flexbox grid
- Charts via CSS (bar charts, progress bars)
- Key metrics highlighted with accent color

### Summary / CTA Page
- Key takeaways listed
- Call-to-action
- Contact information

---

## Multi-Page CSS

```css
/* Force page breaks between sections */
.page {
  page-break-after: always;
  page-break-inside: avoid;
}

/* Never break inside these elements */
.stat-block,
.data-table,
.quote-block {
  page-break-inside: avoid;
}
```

---

## Export

```bash
node scripts/export-pdf.js document.html output.pdf
```

**Critical settings:**
- `printBackground: true` (includes colors and backgrounds)
- `margin: 0` (you control margins in CSS)
- `preferCSSPageSize: true` (respect your CSS dimensions)
- Wait 2500ms for fonts before export

---

*Claude Design Engine by Rahaman Bin Ujit*
