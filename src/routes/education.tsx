import { createFileRoute } from "@tanstack/react-router";
import { shareHead } from "@/lib/shareMeta";
import Education from "@/pages/Education";

export const Route = createFileRoute("/education")({
  head: () =>
    shareHead({
      title: "Marxist School",
      description: "Political education with the PRC Marxist School: classes, guides and readings for revolutionary organizers.",
      path: "/education",
      type: "website",
    }),
  component: Education,
});
