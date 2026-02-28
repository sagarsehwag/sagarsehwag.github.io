#!/usr/bin/env node
/**
 * Generate og-image.png for social sharing using HTML + Playwright.
 * Run: node scripts/generate-og-image.mjs
 * Requires: npm install playwright
 */

import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const htmlPath = join(root, 'scripts', 'og-image.html');
const publicDir = join(root, 'public');
const outputPath = join(publicDir, 'og-image.png');

const PORT = 3791;

function getPhotoSection() {
  const candidates = [
    ['profile-picture.png', 'png'],
    ['photo.jpg', 'jpeg'],
    ['photo.jpeg', 'jpeg'],
    ['photo.png', 'png'],
    ['photo.webp', 'webp'],
    ['og-image-original.png', 'png'],
  ];
  for (const [filename, mime] of candidates) {
    const photoPath = join(publicDir, filename);
    if (existsSync(photoPath)) {
      const data = readFileSync(photoPath, 'base64');
      return `<div class="photo"><img src="data:image/${mime};base64,${data}" alt="" /></div>`;
    }
  }
  return '';
}

async function main() {
  if (!existsSync(htmlPath)) {
    console.error('og-image.html not found');
    process.exit(1);
  }

  let html = readFileSync(htmlPath, 'utf-8');
  const photoSection = getPhotoSection();
  html = html.replace('{{PHOTO_SECTION}}', photoSection);

  const server = createServer((req, res) => {
    if (req.url === '/og' || req.url === '/og/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
      return;
    }
    res.writeHead(404);
    res.end();
  });

  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Serving OG template at http://localhost:${PORT}/og`);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto(`http://localhost:${PORT}/og`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  if (!existsSync(publicDir)) {
    mkdirSync(publicDir, { recursive: true });
  }

  await page.screenshot({ path: outputPath, type: 'png' });
  console.log(`Generated ${outputPath}`);

  await browser.close();
  server.close();
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
