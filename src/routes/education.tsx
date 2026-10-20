import { createFileRoute } from "@tanstack/react-router";
import Education from "@/pages/Education";

export const Route = createFileRoute("/education")({
  component: Education,
});
