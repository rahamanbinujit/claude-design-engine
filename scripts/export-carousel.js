#!/usr/bin/env node

/**
 * Claude Design Engine — Carousel Export Script
 * Created by Rahaman Bin Ujit
 *
 * Exports multi-slide HTML carousels as individual PNG files.
 * Each element with class "page" or "slide" becomes a separate image.
 *
 * Usage: node export-carousel.js <input.html> <output-dir> [width] [height] [scale]
 *
 * Examples:
 *   node export-carousel.js carousel.html ./slides/ 1080 1080
 *   node export-carousel.js carousel.html ./slides/ 1080 1350
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Claude Design Engine — Carousel Export');
  console.log('Created by Rahaman Bin Ujit\n');
  console.log('Usage: node export-carousel.js <input.html> <output-dir> [width] [height] [scale]');
  console.log('');
  console.log('  input.html   Path to your carousel HTML (each slide is a .page or .slide div)');
  console.log('  output-dir   Directory for exported PNGs (created if needed)');
  console.log('  width        Slide width in CSS pixels (default: 1080)');
  console.log('  height       Slide height in CSS pixels (default: 1080)');
  console.log('  scale        Device scale factor (default: 4)');
  process.exit(1);
}

const inputFile = path.resolve(args[0]);
const outputDir = path.resolve(args[1]);
const width = parseInt(args[2]) || 1080;
const height = parseInt(args[3]) || 1080;
const scale = parseInt(args[4]) || 4;

(async () => {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`\nExporting carousel: ${path.basename(inputFile)}`);
  console.log(`Slide size: ${width}x${height} CSS → ${width * scale}x${height * scale}px`);
  console.log(`Output dir: ${outputDir}`);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Set viewport
  await page.setViewport({
    width: width,
    height: height,
    deviceScaleFactor: scale
  });

  // Load the HTML
  await page.goto(`file://${inputFile}`, { waitUntil: 'networkidle0' });

  // Wait for fonts
  await new Promise(r => setTimeout(r, 2500));

  // Find all slides (elements with class "page" or "slide")
  const slideCount = await page.evaluate(() => {
    const slides = document.querySelectorAll('.page, .slide');
    return slides.length;
  });

  if (slideCount === 0) {
    console.log('\nNo slides found. Make sure your HTML has elements with class "page" or "slide".');
    await browser.close();
    process.exit(1);
  }

  console.log(`Found ${slideCount} slides.`);

  // Export each slide
  for (let i = 0; i < slideCount; i++) {
    // Scroll to position each slide at the top
    await page.evaluate((index, slideHeight) => {
      const slides = document.querySelectorAll('.page, .slide');
      if (slides[index]) {
        slides[index].scrollIntoView({ block: 'start' });
      }
    }, i, height);

    // Small delay for rendering
    await new Promise(r => setTimeout(r, 300));

    // Get the slide's position
    const slidePos = await page.evaluate((index) => {
      const slides = document.querySelectorAll('.page, .slide');
      if (slides[index]) {
        const rect = slides[index].getBoundingClientRect();
        return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
      }
      return null;
    }, i);

    if (!slidePos) continue;

    const slideNum = String(i + 1).padStart(2, '0');
    const outputPath = path.join(outputDir, `slide-${slideNum}.png`);

    await page.screenshot({
      path: outputPath,
      clip: {
        x: slidePos.x,
        y: slidePos.y,
        width: width,
        height: height
      },
      type: 'png'
    });

    console.log(`  Exported slide ${slideNum}/${String(slideCount).padStart(2, '0')}: ${outputPath}`);
  }

  console.log(`\nDone. ${slideCount} slides exported to ${outputDir}`);
  console.log(`Resolution: ${width * scale}x${height * scale}px per slide`);

  await browser.close();
})();
