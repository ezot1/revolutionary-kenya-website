import { describe, expect, it } from "vitest";
import { buildSocialShareUrl } from "@/lib/socialShare";

describe("article photo sharing", () => {
  it("shares the article on prca.world, not a backend redirect", () => {
    expect(buildSocialShareUrl("http://localhost:8080/blog/congress")).toBe("https://prca.world/blog/congress");
  });
  it("keeps the selected publication in the prca.world reader link", () => {
    expect(buildSocialShareUrl("http://localhost:8080/publications?article=Political+education")).toBe("https://prca.world/publications?article=Political+education");
  });
  it("shares the real page directly when there is no article photo", () => {
    expect(buildSocialShareUrl("http://localhost:8080/blog/no-photo")).toBe("https://prca.world/blog/no-photo");
  });
});
