import { createFileRoute } from "@tanstack/react-router";
import { shareHead } from "@/lib/shareMeta";
import History from "@/pages/History";

export const Route = createFileRoute("/history")({
  head: () =>
    shareHead({
      title: "Our History",
      description: "The history of the Permanent Revolutionary Congress and the struggles that shaped it.",
      path: "/history",
      type: "website",
    }),
  component: History,
});
