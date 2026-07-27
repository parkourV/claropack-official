import puppeteer from "puppeteer-core";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "../dist");
const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 4173;

const routes = [
  "/",
  "/products",
  "/products/pet-cold-cups",
  "/products/injection-pp-cups",
  "/products/lids-sealing-films",
  "/products/paper-pla-cups",
  "/about",
  "/contact"
];

async function run() {
  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: CHROME_PATH,
      headless: true
    });
    const page = await browser.newPage();

    for (const route of routes) {
      console.log(`Prerendering ${route}...`);
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle0", timeout: 30000 });
      const html = await page.content();
      
      const filePath = path.join(DIST_DIR, route === "/" ? "index.html" : `${route}/index.html`);
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, html);
      console.log(`Saved to ${filePath}`);
    }
  } catch (err) {
    console.error("Prerender failed:", err);
    process.exit(1);
  } finally {
    if (browser) await browser.close();
    process.exit(0);
  }
}

run();
