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
  "/about",
  "/contact"
];

async function waitForPreview() {
  const deadline = Date.now() + 15000;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(`http://127.0.0.1:${PORT}/`);
      if (response.ok) return;
    } catch {
      // The Vite preview process is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error("Vite preview did not become ready within 15 seconds.");
}

async function stopPreview(preview) {
  if (!preview || preview.exitCode !== null || preview.killed) return;

  console.log("Stopping preview server...");
  preview.kill();
  await new Promise((resolve) => {
    preview.once("exit", resolve);
    setTimeout(resolve, 2000);
  });
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
      headless: true
    });
    const page = await browser.newPage();

    for (const route of routes) {
      console.log(`Prerendering ${route}...`);
      await page.goto(`http://127.0.0.1:${PORT}${route}`, { waitUntil: "networkidle0", timeout: 30000 });
      const html = await page.content();
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
