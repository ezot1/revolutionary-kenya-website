import { describe, expect, it } from "vitest";
import { buildSocialShareUrl } from "@/lib/socialShare";
import congressPhoto from "@/assets/congress-delegates-vote.jpg.asset.json";

describe("article photo sharing", () => {
  it("passes the displayed congress photo rather than a placeholder", () => {
    const link = new URL(buildSocialShareUrl("https://cloud.example", "http://localhost:8080/blog/congress", "Congress", congressPhoto.url));
    expect(link.searchParams.get("img")).toBe(congressPhoto.url);
    expect(link.searchParams.get("u")).toBe("https://prca.world/blog/congress");
  });
  it("keeps the selected publication in the reader link and resolves its photo", () => {
    const link = new URL(buildSocialShareUrl("https://cloud.example", "http://localhost:8080/publications?article=Political+education", "Political education", "/images/congress-speaker.jpg"));
    expect(link.searchParams.get("u")).toBe("https://prca.world/publications?article=Political+education");
    expect(link.searchParams.get("img")).toBe("https://prca.world/images/congress-speaker.jpg");
  });
  it("shares the real page directly when there is no article photo", () => {
    expect(buildSocialShareUrl("https://cloud.example", "http://localhost:8080/blog/no-photo", "No photo")).toBe("https://prca.world/blog/no-photo");
  });
});