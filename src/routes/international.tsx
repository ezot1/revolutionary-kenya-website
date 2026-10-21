import { createFileRoute } from "@tanstack/react-router";
import { shareHead } from "@/lib/shareMeta";
import International from "@/pages/International";

export const Route = createFileRoute("/international")({
  head: () =>
    shareHead({
      title: "International",
      description: "The internationalism of the PRC and our affiliation to the International Socialist League (ISL).",
      path: "/international",
      type: "website",
    }),
  component: International,
});
