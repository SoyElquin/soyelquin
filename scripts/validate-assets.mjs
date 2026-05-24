import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scanDirs = ["src", "public", "docs"];
const publicRoot = path.join(root, "public");
const assetPattern = /["'(`]((?:\/assets\/|\/og-image\.png|\/site\.webmanifest)[^"'`)\s]*)/g;
const ignoredExtensions = new Set([".md", ".pdf", ".html", ".txt"]);
const seen = new Set();
const missing = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return [full];
  });
}

for (const dir of scanDirs) {
  for (const file of walk(path.join(root, dir))) {
    const ext = path.extname(file).toLowerCase();
    if (ignoredExtensions.has(ext)) continue;
    const content = fs.readFileSync(file, "utf8");
    for (const match of content.matchAll(assetPattern)) {
      const ref = match[1];
      if (ref.startsWith("/assets/") || ref === "/og-image.png" || ref === "/site.webmanifest") {
        seen.add(ref);
      }
    }
  }
}

for (const ref of [...seen].sort()) {
  const full = path.join(publicRoot, ref.replace(/^\//, ""));
  if (!fs.existsSync(full)) missing.push(ref);
}

if (missing.length) {
  console.error("Missing public assets:\n" + missing.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}

console.log(`Asset validation OK: ${seen.size} referenced public files exist.`);
