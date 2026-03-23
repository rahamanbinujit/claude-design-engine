#!/usr/bin/env node

/**
 * Claude Design Engine — PDF Export Script
 * Created by Rahaman Bin Ujit
 *
 * Usage: node export-pdf.js <input.html> <output.pdf> [width] [height]
 *
 * Examples:
 *   node export-pdf.js document.html report.pdf                  # A4 size
 *   node export-pdf.js carousel.html slides.pdf 1080 1080        # Square slides
 *   node export-pdf.js carousel.html slides.pdf 1080 1350        # Portrait slides
 */

const puppeteer = require('puppeteer');
const path = require('path');

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Claude Design Engine — PDF Export');
  console.log('Created by Rahaman Bin Ujit\n');
  console.log('Usage: node export-pdf.js <input.html> <output.pdf> [width] [height]');
  console.log('');
  console.log('  input.html   Path to your HTML document');
  console.log('  output.pdf   Path for the exported PDF');
  console.log('  width        CSS width in pixels (default: 794 for A4)');
  console.log('  height       CSS height in pixels (default: 1123 for A4)');
  console.log('');
  console.log('Common sizes:');
  console.log('  794x1123     A4 page');
  console.log('  816x1056     US Letter');
  console.log('  1080x1080    Square slides (LinkedIn carousel)');
  console.log('  1080x1350    Portrait slides');
  console.log('  1920x1080    Presentation (16:9)');
  process.exit(1);
}

const inputFile = path.resolve(args[0]);
const outputFile = path.resolve(args[1]);
const width = parseInt(args[2]) || 794;
const height = parseInt(args[3]) || 1123;

(async () => {
  console.log(`\nExporting PDF: ${path.basename(inputFile)}`);
  console.log(`Page size: ${width}x${height}px`);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Set viewport for rendering
  await page.setViewport({
    width: width,
    height: height,
    deviceScaleFactor: 4
  });

  // Load the HTML file
  await page.goto(`file://${inputFile}`, { waitUntil: 'networkidle0' });

  // Wait for fonts to load
  await new Promise(r => setTimeout(r, 2500));

  // Export as PDF
  await page.pdf({
    path: outputFile,
    width: `${width}px`,
    height: `${height}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
    displayHeaderFooter: false
  });

  console.log(`\nExported: ${outputFile}`);
  console.log('Done.');

  await browser.close();
})();
