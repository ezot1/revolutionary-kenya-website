import { inauguralIssue, type ReviewIssue } from "./revolutionaryReview";
import { secondIssue } from "./revolutionaryReviewIssue2";

/** All static Revolutionary Review issues, newest first. */
export const reviewIssues: ReviewIssue[] = [secondIssue, inauguralIssue];
export const latestIssue: ReviewIssue = reviewIssues[0]!;
export const getReviewIssue = (slug: string | undefined) => reviewIssues.find((issue) => issue.slug === slug);
export const issueLabel = (issue: ReviewIssue) => `Volume I · Issue ${String(issue.issueNumber).padStart(2, "0")}`;
