export const SITE_URL = "https://prca.world";

export function articleUrl(pageUrl: string): string {
  const page = new URL(pageUrl, SITE_URL);
  return `${SITE_URL}${page.pathname}${page.search}${page.hash}`;
}

export function buildSocialShareUrl(endpoint: string, pageUrl: string, title: string, image?: string): string {
  const target = articleUrl(pageUrl);
  if (!image) return target;
  const photo = new URL(image, SITE_URL);
  if (!['https:', 'http:'].includes(photo.protocol)) return target;
  const share = new URL(`${endpoint}/functions/v1/share`);
  share.searchParams.set("u", target);
  share.searchParams.set("t", title);
  share.searchParams.set("img", photo.href);
  return share.href;
}