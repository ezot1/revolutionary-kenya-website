import { createFileRoute } from "@tanstack/react-router";
import { shareHead } from "@/lib/shareMeta";
import Blog from "@/pages/Blog";

export const Route = createFileRoute("/blog/")({
  head: () =>
    shareHead({
      title: "News & Analysis",
      description: "News, analysis and statements from the Permanent Revolutionary Congress on Kenyan politics, Africa and the world.",
      path: "/blog",
      type: "website",
    }),
  component: Blog,
});
