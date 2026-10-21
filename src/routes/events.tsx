import { createFileRoute } from "@tanstack/react-router";
import { shareHead } from "@/lib/shareMeta";
import Events from "@/pages/Events";

export const Route = createFileRoute("/events")({
  head: () =>
    shareHead({
      title: "Events",
      description: "Congress meetings, political education classes and public events organized by the Permanent Revolutionary Congress.",
      path: "/events",
      type: "website",
    }),
  component: Events,
});
