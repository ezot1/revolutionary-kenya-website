import { createFileRoute } from "@tanstack/react-router";
import { shareHead } from "@/lib/shareMeta";
import About from "@/pages/About";

export const Route = createFileRoute("/about")({
  head: () =>
    shareHead({
      title: "About PRC",
      description: "Who the Permanent Revolutionary Congress is: our politics, our tradition and how we are organized.",
      path: "/about",
      type: "website",
    }),
  component: About,
});
