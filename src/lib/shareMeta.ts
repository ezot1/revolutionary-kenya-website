import { SITE_URL } from "@/lib/socialShare";

export const DEFAULT_SHARE_IMAGE = `${SITE_URL}/images/prc-og.jpg`;
export const SITE_NAME = "Permanent Revolutionary Congress";

/** Absolute https URL for an article photo; falls back to the site image only when there is none. */
export function absoluteImage(raw?: string | null): string {
  if (!raw) return DEFAULT_SHARE_IMAGE;
  try {
    const url = new URL(raw, SITE_URL);
    if (url.protocol !== "https:" && url.protocol !== "http:") return DEFAULT_SHARE_IMAGE;
    if (url.hostname === "localhost") return `${SITE_URL}${url.pathname}${url.search}`;
    return url.toString();
  } catch {
    return DEFAULT_SHARE_IMAGE;
  }
}

/** Plain-text summary from article body (strips markdown images/bold). */
export function summarize(text?: string | null, max = 200): string {
  return (text ?? "")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\*\*/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export interface ShareMetaInput {
  title: string;
  description: string;
  image?: string | null | undefined;
  /** Path plus query on prca.world, e.g. "/blog/slug". */
  path: string;
  type?: "article" | "website";
}

export function shareHead({ title, description, image, path, type = "article" }: ShareMetaInput) {
  const url = `${SITE_URL}${path}`;
  const img = absoluteImage(image);
  return {
    meta: [
      { title: `${title} | PRC` },
      { name: "description", content: description },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { property: "og:image:secure_url", content: img },
      { property: "og:image:alt", content: title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
