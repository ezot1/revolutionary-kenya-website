import { createFileRoute } from "@tanstack/react-router";
import FullProgram from "@/pages/FullProgram";

export const Route = createFileRoute("/program/full")({
  component: FullProgram,
});
