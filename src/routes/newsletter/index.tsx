import { createFileRoute } from "@tanstack/react-router";
import { shareHead } from "@/lib/shareMeta";
import Newsletter from "@/pages/Newsletter";

export const Route = createFileRoute("/newsletter/")({
  head: () =>
    shareHead({
      title: "The Revolutionary Review",
      description: "The PRC's monthly online publication: theory, strategy and dispatches from struggles in Kenya, Africa and the world.",
      path: "/newsletter",
      type: "website",
    }),
  component: Newsletter,
});
