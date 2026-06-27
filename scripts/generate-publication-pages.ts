// Generates static HTML files at public/p/<slug>.html for each publication.
// These serve as crawler-friendly landing pages with per-article og:image so
// social previews show the publication's image. Real users JS-redirect into
// the SPA at /publications?p=<slug>.
import { writeFileSync, mkdirSync, rmSync, existsSync } from "fs";
import { resolve } from "path";
import { articles, publicImageMap, slugify } from "../src/content/articles";

const BASE_URL = "https://prca.world";
const OUT_DIR = resolve("public/p");

if (existsSync(OUT_DIR)) rmSync(OUT_DIR, { recursive: true, force: true });
mkdirSync(OUT_DIR, { recursive: true });

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

let written = 0;
for (const a of articles) {
  const slug = slugify(a.title);
  const image = publicImageMap[a.title] || "/images/prc-og.jpg";
  const imageUrl = `${BASE_URL}${image}`;
  const canonical = `${BASE_URL}/p/${slug}`;
  const target = `/publications?p=${encodeURIComponent(slug)}`;
  const description = (a.body.split(/\n\n+/)[0] || "").slice(0, 200).replace(/\s+/g, " ").trim();

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(a.title)} — PRC</title>
<meta name="description" content="${esc(description)}" />
<link rel="canonical" href="${canonical}" />
<meta property="og:type" content="article" />
<meta property="og:title" content="${esc(a.title)}" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${imageUrl}" />
<meta property="og:image:width" content="1024" />
<meta property="og:image:height" content="640" />
<meta property="og:image:type" content="image/jpeg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(a.title)}" />
<meta name="twitter:description" content="${esc(description)}" />
<meta name="twitter:image" content="${imageUrl}" />
<meta http-equiv="refresh" content="0; url=${target}" />
<script>window.location.replace(${JSON.stringify(target)});</script>
</head>
<body>
<p>Redirecting to <a href="${target}">${esc(a.title)}</a>…</p>
</body>
</html>
`;
  writeFileSync(resolve(OUT_DIR, `${slug}.html`), html);
  written++;
}
console.log(`generated ${written} publication share pages in public/p/`);