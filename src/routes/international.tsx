import { createFileRoute } from "@tanstack/react-router";
import International from "@/pages/International";

export const Route = createFileRoute("/international")({
  component: International,
});
