// Writes public/_redirects from src/data/redirects.ts so the host-level
// redirects and the in-app <Navigate> routes can never disagree.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { activeRedirects, wildcardRedirects } from "../src/data/redirects";

const rules = [...activeRedirects, ...wildcardRedirects];
const lines = rules.map((r) => `${r.from} ${r.to} 301`);
writeFileSync(resolve("public/_redirects"), lines.join("\n") + "\n");
console.log(`_redirects written (${rules.length} rules)`);
