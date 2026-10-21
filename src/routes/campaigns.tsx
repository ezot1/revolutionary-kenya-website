import { createFileRoute } from "@tanstack/react-router";
import { shareHead } from "@/lib/shareMeta";
import Campaigns from "@/pages/Campaigns";

export const Route = createFileRoute("/campaigns")({
  head: () =>
    shareHead({
      title: "Campaigns",
      description: "The current campaigns of the Permanent Revolutionary Congress for workers' rights, dignity and socialist change.",
      path: "/campaigns",
      type: "website",
    }),
  component: Campaigns,
});
