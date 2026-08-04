const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const ANON = Deno.env.get("SUPABASE_ANON_KEY")!;
const SITE = "https://prca.world";
const DEFAULT_IMAGE = `${SITE}/images/prc-og.jpg`;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function absImage(raw: string | null): string {
  if (!raw) return DEFAULT_IMAGE;
  try {
    const u = raw.startsWith("/") ? new URL(raw, SITE) : new URL(raw);
    if (u.protocol !== "https:" && u.protocol !== "http:") return DEFAULT_IMAGE;
    return u.toString();
  } catch {
    return DEFAULT_IMAGE;
  }
}

function firstImageInBody(body: string | null): string | null {
  if (!body) return null;
  const m = body.match(/!\[[^\]]*\]\(([^)]+)\)/);
  return m ? m[1] : null;
}

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug");
  let title = url.searchParams.get("t") || "Permanent Revolutionary Congress";
  let description =
    url.searchParams.get("d") ||
    "Workers' Power. Socialist Democracy. Permanent Revolution.";
  let image = url.searchParams.get("img");
  let target = url.searchParams.get("u") || SITE;

  if (slug) {
    target = `${SITE}/blog/${encodeURIComponent(slug)}`;
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/posts?slug=eq.${encodeURIComponent(slug)}&published=eq.true&select=title,content,image_url&limit=1`,
      { headers: { apikey: ANON, Authorization: `Bearer ${ANON}` } },
    );
    const rows = res.ok ? await res.json() : [];
    const post = rows?.[0];
    if (post) {
      title = post.title;
      image = post.image_url || firstImageInBody(post.content);
      description = (post.content || "")
        .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
        .replace(/\*\*/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 200);
    }
  } else if (!target.startsWith(SITE)) {
    target = SITE;
  }

  const img = absImage(image);
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}" />
<link rel="canonical" href="${esc(target)}" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="Permanent Revolutionary Congress" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:url" content="${esc(target)}" />
<meta property="og:image" content="${esc(img)}" />
<meta property="og:image:secure_url" content="${esc(img)}" />
<meta property="og:image:alt" content="${esc(title)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(title)}" />
<meta name="twitter:description" content="${esc(description)}" />
<meta name="twitter:image" content="${esc(img)}" />
<meta http-equiv="refresh" content="0; url=${esc(target)}" />
</head><body><p>Redirecting to <a href="${esc(target)}">${esc(title)}</a>…</p>
<script>location.replace(${JSON.stringify(target)});</script></body></html>`;

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=300",
      "access-control-allow-origin": "*",
    },
  });
});
