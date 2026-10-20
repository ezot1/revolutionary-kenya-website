import { describe, expect, it } from "vitest";
import { absoluteImage, shareHead } from "@/lib/shareMeta";

const ogImage = (head: ReturnType<typeof shareHead>) =>
  head.meta.find((m) => "property" in m && m.property === "og:image")?.content;

describe("article share previews", () => {
  it("uses the article's own photo, not the placeholder", () => {
    const head = shareHead({ title: "Congress", description: "x", image: "/images/congress-speaker.jpg", path: "/blog/congress" });
    expect(ogImage(head)).toBe("https://prca.world/images/congress-speaker.jpg");
  });
  it("falls back to the site image only when the article has no photo", () => {
    expect(absoluteImage(null)).toBe("https://prca.world/images/prc-og.jpg");
  });
  it("points the preview at the article's own prca.world address", () => {
    const head = shareHead({ title: "Congress", description: "x", path: "/blog/congress" });
    expect(head.meta.find((m) => "property" in m && m.property === "og:url")?.content).toBe("https://prca.world/blog/congress");
  });
});
