import { createFileRoute } from "@tanstack/react-router";
import AdminNewsletter from "@/pages/AdminNewsletter";

export const Route = createFileRoute("/admin/newsletter")({
  head: () => ({ meta: [
    { title: "Review administration | PRC" },
    { name: "description", content: "Manage editions of The Revolutionary Review." },
    { property: "og:title", content: "Review administration | PRC" },
    { property: "og:description", content: "Manage editions of The Revolutionary Review." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex, nofollow" },
  ] }),
  component: AdminNewsletter,
});
