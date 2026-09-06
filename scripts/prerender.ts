// Prerenders every route in src/data/routes.ts into static dist/<route>/index.html
// files using headless Chrome, so crawlers see fully rendered <head> tags and
// JSON-LD that the SPA otherwise injects at runtime.
//
// This is a separate build step (`npm run build:static`) invoked AFTER
// `vite build`. It never touches the normal `build` script/output pipeline.

import { createServer } from "http";
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve, join, extname } from "path";
import puppeteer from "puppeteer";
import { siteRoutes } from "../src/data/routes";

const DIST_DIR = resolve("dist");
const PORT = 4173;
const BASE_URL = `http://127.0.0.1:${PORT}`;

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function startServer() {
  const server = createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
      let filePath = join(DIST_DIR, urlPath);

      if (urlPath === "/" || !extname(urlPath)) {
        const candidate = join(DIST_DIR, urlPath, "index.html");
        filePath = existsSync(candidate) ? candidate : join(DIST_DIR, "index.html");
      }

      if (!existsSync(filePath)) {
        filePath = join(DIST_DIR, "index.html"); // SPA fallback
      }

      const ext = extname(filePath);
      const body = readFileSync(filePath);
      res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
      res.end(body);
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });

  return new Promise<import("http").Server>((resolvePromise) => {
    server.listen(PORT, () => resolvePromise(server));
  });
}

async function main() {
  if (!existsSync(DIST_DIR)) {
    console.error("dist/ not found. Run `vite build` before prerendering.");
    process.exit(1);
  }

  console.log(`Prerendering ${siteRoutes.length} routes...`);

  const server = await startServer();
  console.log(`Static server listening on ${BASE_URL}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let failed = false;

  try {
    const page = await browser.newPage();

    for (const route of siteRoutes) {
      const url = `${BASE_URL}${route.path}`;
      try {
        await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
        // Give React a moment to settle any async head/JSON-LD updates.
        await new Promise((r) => setTimeout(r, 150));

        const html = await page.content();

        const outDir = route.path === "/" ? DIST_DIR : join(DIST_DIR, route.path);
        mkdirSync(outDir, { recursive: true });
        writeFileSync(join(outDir, "index.html"), `<!doctype html>\n${html}`);

        console.log(`✓ ${route.path} -> ${join(outDir.replace(DIST_DIR, "dist"), "index.html")}`);
      } catch (err) {
        failed = true;
        console.error(`✗ Failed to prerender ${route.path}:`, err);
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  if (failed) {
    console.error("Prerendering finished with errors.");
    process.exit(1);
  }

  console.log("Prerendering complete.");
}

main().catch((err) => {
  console.error("Prerender script crashed:", err);
  process.exit(1);
});
