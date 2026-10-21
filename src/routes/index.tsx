import { createFileRoute } from "@tanstack/react-router";
import { shareHead } from "@/lib/shareMeta";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () =>
    shareHead({
      title: "Permanent Revolutionary Congress",
      description: "Workers' power, socialist democracy and permanent revolution. The PRC organizes workers, youth and the oppressed for socialist transformation in Kenya.",
      path: "/",
      type: "website",
    }),
  component: Index,
});
