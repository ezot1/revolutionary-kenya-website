import { createFileRoute } from "@tanstack/react-router";
import Newsletter from "@/pages/Newsletter";

export const Route = createFileRoute("/newsletter")({
  component: Newsletter,
});
