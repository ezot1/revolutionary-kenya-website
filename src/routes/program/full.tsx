import { createFileRoute } from "@tanstack/react-router";
import { shareHead } from "@/lib/shareMeta";
import FullProgram from "@/pages/FullProgram";

export const Route = createFileRoute("/program/full")({
  head: () =>
    shareHead({
      title: "Programmatic Bases: Full Document",
      description: "Read the full programmatic bases document of the Permanent Revolutionary Congress.",
      path: "/program/full",
      type: "website",
    }),
  component: FullProgram,
});
