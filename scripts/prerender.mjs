import puppeteer from "puppeteer-core";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

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
  "/blog",
  "/blog/pet-vs-pp-cups",
  "/blog/cup-lid-compatibility-guide",
  "/blog/bubble-tea-cup-sizes-guide",
  "/blog/how-to-import-plastic-cups-from-china",
  "/blog/pet-cup-weight-cost-guide",
  "/blog/cup-sealing-film-machine-guide",
  "/blog/paper-vs-pla-cups-guide",
  "/blog/cup-caliber-standardization-guide",
  "/blog/square-injection-pp-cups-branding",
  "/blog/pet-cup-capacity-carton-planning-guide",
  "/blog/injection-pp-cup-model-weight-guide",
  "/blog/cup-lid-weight-caliber-guide",
  "/blog/paper-cup-wall-types-guide",
  "/blog/u-shape-fat-cup-guide",
  "/blog/strawless-sipper-lids-guide",
  "/blog/injection-vs-thermoformed-cups",
  "/blog/large-format-30-32oz-cups-guide",
  "/blog/leak-proof-takeaway-cups-and-carriers",
  "/blog/us-standard-98mm-pet-cups-guide",
  "/blog/pet-cups-cold-chain-performance",
  "/blog/hot-drink-cup-selection-guide",
  "/blog/custom-printed-cups-guide",
  "/blog/coffee-cup-sizes-guide",
  "/blog/food-grade-cups-fda-guide",
  "/blog/cup-accessories-sleeves-carriers-guide",
  "/blog/clear-vs-frosted-pp-cups-guide",
  "/blog/cup-moq-small-order-guide",
  "/blog/smoothie-and-slush-cup-sizes-guide",
  "/blog/sustainable-cup-sourcing-guide",
  "/blog/cafe-cup-buying-guide",
  "/blog/cup-custom-printing-methods-guide",
  "/blog/pet-dessert-cups-sourcing-guide",
  "/blog/u-shape-pet-vs-pp-cups-comparison",
  "/blog/pet-cup-printing-design-guide",
  "/about",
  "/contact"
];

async function waitForPreview() {
  const deadline = Date.now() + 20000;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(`http://127.0.0.1:${PORT}/`);
      if (response.ok) {
        // Give the server an extra second to settle
        await new Promise(r => setTimeout(r, 1000));
        return;
      }
    } catch {
      // The Vite preview process is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error("Vite preview did not become ready within 20 seconds.");
}

async function stopPreview(preview) {
  if (!preview || preview.exitCode !== null || preview.killed) return;

  console.log("Stopping preview server...");
  preview.kill();
  // Ensure the process is truly dead
  try {
    process.kill(preview.pid, 0);
    preview.kill('SIGKILL');
  } catch (e) {}

  await new Promise((resolve) => {
    preview.once("exit", resolve);
    setTimeout(resolve, 2000);
  });
}

async function renderRoute(page, route, maxRetries = 2) {
  for (let i = 0; i <= maxRetries; i++) {
    try {
      console.log(`Prerendering ${route} (Attempt ${i + 1})...`);
      await page.goto(`http://127.0.0.1:${PORT}${route}`, { 
        waitUntil: "networkidle0", 
        timeout: 45000 
      });
      
      const html = await page.content();
      
      // Basic sanity check: content should be reasonably long and contain the brand name
      if (html.length > 2000 && html.includes("Claropack")) {
        return html;
      }
      
      console.warn(`⚠️  Render for ${route} seems too short or missing brand keyword. Retrying...`);
    } catch (err) {
      console.error(`❌  Failed to render ${route}:`, err.message);
      if (i === maxRetries) throw err;
    }
    // Exponential backoff
    await new Promise(r => setTimeout(r, 1000 * (i + 1)));
  }
}

async function run() {
  let preview;
  let browser;

  try {
    console.log("Starting preview server...");
    preview = spawn(
      process.execPath,
      [path.resolve(__dirname, "../node_modules/vite/bin/vite.js"), "preview", "--host", "127.0.0.1", "--port", PORT.toString()],
      { stdio: "inherit" }
    );
    await waitForPreview();

    browser = await puppeteer.launch({
      executablePath: CHROME_PATH,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    for (const route of routes) {
      const html = await renderRoute(page, route);
      const filePath = path.join(DIST_DIR, route === "/" ? "index.html" : `${route}/index.html`);
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, html);
      console.log(`Saved to ${filePath}`);
    }
  } catch (err) {
    console.error("Prerender failed:", err);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
    await stopPreview(preview);
  }
}

run();
