import { describe, expect, it } from "vitest";
import { congressDocuments } from "@/content/congressDocuments";
import { congressPoliticalPaper } from "@/content/congressPoliticalPaper";

describe("main congress paper", () => {
  it("is the latest congress article and designated main paper", () => {
    expect(congressDocuments[0]).toBe(congressPoliticalPaper);
    expect(congressPoliticalPaper.isMainPaper).toBe(true);
    expect(congressPoliticalPaper.date).toBe("2026-10-09");
    expect(congressDocuments.slice(1).every((paper) => paper.date <= congressPoliticalPaper.date)).toBe(true);
  });

  it("retains nine proposed resolutions rather than treating them as adopted", () => {
    expect(congressPoliticalPaper.status).toBe("Draft political paper for discussion and adoption at the Second Congress of the PRC, 11 October 2026");
    const resolutions = congressPoliticalPaper.blocks.find((block) => block.kind === "list" && block.ordered);
    expect(resolutions?.kind === "list" ? resolutions.items.length : 0).toBe(9);
  });
});