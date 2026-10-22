import { createFileRoute } from "@tanstack/react-router";
import Auth from "@/pages/Auth";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [
    { title: "Administrator sign in | PRC" },
    { name: "description", content: "Sign in to the PRC editorial office." },
    { property: "og:title", content: "Administrator sign in | PRC" },
    { property: "og:description", content: "Sign in to the PRC editorial office." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex, nofollow" },
  ] }),
  component: Auth,
});
