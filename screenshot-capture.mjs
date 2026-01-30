import { chromium } from 'playwright';

async function captureScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const baseUrl = 'http://localhost:3000';
  const pages = [
    { path: '/', name: 'home' },
    { path: '/products', name: 'products' },
    { path: '/cases', name: 'cases' },
    { path: '/news', name: 'news' },
    { path: '/about', name: 'about' },
    { path: '/service', name: 'service' },
    { path: '/join', name: 'join' },
    { path: '/contact', name: 'contact' },
  ];

  const outputDir = './screenshots';
  const fs = await import('fs');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const p of pages) {
    try {
      console.log(`Capturing: ${p.name}...`);
      await page.goto(`${baseUrl}${p.path}`, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000); // Wait for animations
      await page.screenshot({ path: `${outputDir}/${p.name}.png`, fullPage: true });
      console.log(`  ✓ Saved: ${outputDir}/${p.name}.png`);
    } catch (err) {
      console.error(`  ✗ Failed: ${p.name} - ${err.message}`);
    }
  }

  await browser.close();
  console.log('\nDone! Screenshots captured.');
}

captureScreenshots();
