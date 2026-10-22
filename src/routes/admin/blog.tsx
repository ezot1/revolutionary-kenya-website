import { createFileRoute } from "@tanstack/react-router";
import AdminBlog from "@/pages/AdminBlog";

export const Route = createFileRoute("/admin/blog")({
  head: () => ({ meta: [
    { title: "News administration | PRC" },
    { name: "description", content: "Manage PRC news articles and photographs." },
    { property: "og:title", content: "News administration | PRC" },
    { property: "og:description", content: "Manage PRC news articles and photographs." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex, nofollow" },
  ] }),
  component: AdminBlog,
});
