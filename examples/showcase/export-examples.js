const puppeteer = require('puppeteer');
const path = require('path');

const examples = [
  { html: 'example-1-poster.html', png: 'example-1-poster.png' },
  { html: 'example-2-stats.html', png: 'example-2-stats.png' },
  { html: 'example-3-brutalist.html', png: 'example-3-brutalist.png' },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });

  for (const ex of examples) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });
    await page.goto(`file://${path.resolve(__dirname, ex.html)}`, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 2500));
    await page.screenshot({
      path: path.resolve(__dirname, ex.png),
      clip: { x: 0, y: 0, width: 1080, height: 1080 },
      type: 'png'
    });
    console.log(`Exported: ${ex.png}`);
    await page.close();
  }

  await browser.close();
  console.log('Done.');
})();
