// Writes public/_redirects from src/data/redirects.ts so the host-level
// redirects and the in-app <Navigate> routes can never disagree.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { redirects } from "../src/data/redirects";

const lines = redirects.map((r) => `${r.from} ${r.to} 301`);
writeFileSync(resolve("public/_redirects"), lines.join("\n") + "\n");
console.log(`_redirects written (${redirects.length} rules)`);
