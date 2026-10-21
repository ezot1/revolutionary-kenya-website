import { createFileRoute } from "@tanstack/react-router";
import { shareHead } from "@/lib/shareMeta";
import Donate from "@/pages/Donate";

export const Route = createFileRoute("/donate")({
  head: () =>
    shareHead({
      title: "Donate",
      description: "Support the Permanent Revolutionary Congress financially. Donate via PayPal.",
      path: "/donate",
      type: "website",
    }),
  component: Donate,
});
