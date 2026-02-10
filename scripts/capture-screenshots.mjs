import { chromium } from "playwright";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "screenshots");
const url = "https://sagarsehwag.vercel.app";

async function capture(browser, viewport, prefix) {
  const ctx = await browser.newContext({ viewport, colorScheme: "dark" });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  // Dark mode full page
  await page.screenshot({ path: join(outDir, `${prefix}-dark-full.png`), fullPage: true });

  // Switch to light mode - button contains text " light "
  await page.getByRole("button", { name: /light/i }).click();
  await page.waitForTimeout(500);

  // Light mode full page
  await page.screenshot({ path: join(outDir, `${prefix}-light-full.png`), fullPage: true });

  await ctx.close();
}

async function run() {
  const browser = await chromium.launch();

  await capture(browser, { width: 1280, height: 800 }, "desktop");
  await capture(browser, { width: 390, height: 844 }, "mobile");

  await browser.close();
  console.log("Screenshots saved to public/screenshots/");
}

run().catch(console.error);
