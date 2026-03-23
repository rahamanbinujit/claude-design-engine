#!/usr/bin/env node

/**
 * Claude Design Engine — PNG Export Script
 * Created by Rahaman Bin Ujit
 *
 * Usage: node export-png.js <input.html> <output.png> [width] [height] [scale]
 *
 * Examples:
 *   node export-png.js design.html poster.png                    # 1080x1080 at 4x
 *   node export-png.js design.html poster.png 1080 1350          # 1080x1350 at 4x
 *   node export-png.js design.html thumb.png 1280 720            # YouTube thumbnail
 *   node export-png.js design.html poster.png 1080 1080 2        # 2x scale (not recommended)
 */

const puppeteer = require('puppeteer');
const path = require('path');

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Claude Design Engine — PNG Export');
  console.log('Created by Rahaman Bin Ujit\n');
  console.log('Usage: node export-png.js <input.html> <output.png> [width] [height] [scale]');
  console.log('');
  console.log('  input.html   Path to your HTML design file');
  console.log('  output.png   Path for the exported PNG');
  console.log('  width        CSS width in pixels (default: 1080)');
  console.log('  height       CSS height in pixels (default: 1080)');
  console.log('  scale        Device scale factor (default: 4)');
  console.log('');
  console.log('Common sizes:');
  console.log('  1080x1080    LinkedIn/Instagram square');
  console.log('  1080x1350    LinkedIn/Instagram portrait (4:5)');
  console.log('  1280x720     YouTube thumbnail (16:9)');
  console.log('  1200x675     Twitter/X image');
  process.exit(1);
}

const inputFile = path.resolve(args[0]);
const outputFile = path.resolve(args[1]);
const width = parseInt(args[2]) || 1080;
const height = parseInt(args[3]) || 1080;
const scale = parseInt(args[4]) || 4;

(async () => {
  console.log(`\nExporting: ${path.basename(inputFile)}`);
  console.log(`Size: ${width}x${height} CSS → ${width * scale}x${height * scale}px output`);
  console.log(`Scale: ${scale}x`);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Set viewport to match design dimensions
  await page.setViewport({
    width: width,
    height: height,
    deviceScaleFactor: scale
  });

  // Load the HTML file
  await page.goto(`file://${inputFile}`, { waitUntil: 'networkidle0' });

  // Wait for fonts to load (critical for Google Fonts)
  await new Promise(r => setTimeout(r, 2500));

  // Export as PNG
  await page.screenshot({
    path: outputFile,
    clip: {
      x: 0,
      y: 0,
      width: width,
      height: height
    },
    type: 'png'
  });

  console.log(`\nExported: ${outputFile}`);
  console.log(`Resolution: ${width * scale}x${height * scale}px`);
  console.log('Done.');

  await browser.close();
})();
