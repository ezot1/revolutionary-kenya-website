export const SITE_URL = "https://prca.world";

export function articleUrl(pageUrl: string): string {
  const page = new URL(pageUrl, SITE_URL);
  return `${SITE_URL}${page.pathname}${page.search}${page.hash}`;
}

export function buildSocialShareUrl(pageUrl: string): string {
  return articleUrl(pageUrl);
}