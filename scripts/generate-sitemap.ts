// Runs before `vite dev` and `vite build`; writes public/sitemap.xml
// from the single route table in src/data/routes.ts so it cannot drift.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { siteRoutes } from "../src/data/routes";

const BASE_URL = "https://pillarpeo.com";

const urls = siteRoutes.map((r) =>
  [
    "  <url>",
    `    <loc>${BASE_URL}${r.path}</loc>`,
    `    <lastmod>${r.lastmod}</lastmod>`,
    r.changefreq ? `    <changefreq>${r.changefreq}</changefreq>` : null,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n"),
);

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  "</urlset>",
  "",
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${siteRoutes.length} entries)`);
