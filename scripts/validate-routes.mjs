import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const content = fs.readFileSync(path.join(root, "src/lib/content.ts"), "utf8");
const component = fs.readFileSync(path.join(root, "src/components/PortfolioExperience.tsx"), "utf8");

const navMatch = content.match(/export const nav = \[([^\]]+)\]/s);
if (!navMatch) {
  console.error("Could not find nav export in src/lib/content.ts");
  process.exit(1);
}

const navItems = [...navMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
const ids = new Set([...component.matchAll(/id=["']([^"']+)["']/g)].map((m) => m[1]));
const slug = (value) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const missingNavIds = navItems.map(slug).filter((item) => !ids.has(item));

const staticHashLinks = [...component.matchAll(/href=["']#([^"']+)["']/g)].map((m) => m[1]);
const missingHashLinks = staticHashLinks.filter((item) => !ids.has(item));

const requiredAppRoutes = [
  "src/app/page.tsx",
  "src/app/layout.tsx",
  "src/app/sitemap.ts",
  "src/app/robots.ts",
  "src/app/loading.tsx",
  "src/app/not-found.tsx"
];
const missingFiles = requiredAppRoutes.filter((file) => !fs.existsSync(path.join(root, file)));

if (missingNavIds.length || missingHashLinks.length || missingFiles.length) {
  if (missingNavIds.length) console.error("Missing section IDs for nav items:\n" + missingNavIds.map((item) => `- #${item}`).join("\n"));
  if (missingHashLinks.length) console.error("Missing static hash targets:\n" + missingHashLinks.map((item) => `- #${item}`).join("\n"));
  if (missingFiles.length) console.error("Missing route files:\n" + missingFiles.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}

console.log(`Route validation OK: ${navItems.length} nav anchors and ${requiredAppRoutes.length} route files verified.`);
