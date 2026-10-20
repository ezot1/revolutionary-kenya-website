import { createFileRoute } from "@tanstack/react-router";
import Program from "@/pages/Program";

export const Route = createFileRoute("/program")({
  component: Program,
});
