import { createFileRoute } from "@tanstack/react-router";
import { shareHead } from "@/lib/shareMeta";
import Program from "@/pages/Program";

export const Route = createFileRoute("/program/")({
  head: () =>
    shareHead({
      title: "Programmatic Bases",
      description: "The programmatic bases of the Permanent Revolutionary Congress: what we stand for and what we fight for.",
      path: "/program",
      type: "website",
    }),
  component: Program,
});
