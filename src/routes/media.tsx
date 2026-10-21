import { createFileRoute } from "@tanstack/react-router";
import { shareHead } from "@/lib/shareMeta";
import Media from "@/pages/Media";

export const Route = createFileRoute("/media")({
  head: () =>
    shareHead({
      title: "Media Center",
      description: "Videos, photographs and media from the Permanent Revolutionary Congress.",
      path: "/media",
      type: "website",
    }),
  component: Media,
});
