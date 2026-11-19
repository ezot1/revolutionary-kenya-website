import { describe, expect, it } from "vitest";
import { latestIssue, reviewIssues } from "@/content/reviewIssues";

describe("Revolutionary Review issue order", () => {
  it("shows Issue 2 as the latest issue", () => {
    expect(latestIssue.issueNumber).toBe(2);
  });
  it("lists Issue 1 second", () => {
    expect(reviewIssues[1]?.issueNumber).toBe(1);
  });
});
