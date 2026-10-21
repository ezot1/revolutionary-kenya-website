import { createFileRoute } from "@tanstack/react-router";
import { shareHead } from "@/lib/shareMeta";
import Contact from "@/pages/Contact";

export const Route = createFileRoute("/contact")({
  head: () =>
    shareHead({
      title: "Contact",
      description: "Reach the Permanent Revolutionary Congress at info@prca.world.",
      path: "/contact",
      type: "website",
    }),
  component: Contact,
});
