import { createFileRoute } from "@tanstack/react-router";
import { shareHead } from "@/lib/shareMeta";
import Join from "@/pages/Join";

export const Route = createFileRoute("/join")({
  head: () =>
    shareHead({
      title: "Join PRC",
      description: "Become a member of the Permanent Revolutionary Congress and join the fight for socialism in Kenya.",
      path: "/join",
      type: "website",
    }),
  component: Join,
});
