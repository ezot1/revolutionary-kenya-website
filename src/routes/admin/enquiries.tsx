import { createFileRoute } from "@tanstack/react-router";
import AdminEnquiries from "@/pages/AdminEnquiries";

export const Route = createFileRoute("/admin/enquiries")({
  head: () => ({ meta: [
    { title: "Enquiries administration | PRC" },
    { name: "description", content: "Manage PRC correspondence and membership enquiries." },
    { property: "og:title", content: "Enquiries administration | PRC" },
    { property: "og:description", content: "Manage PRC correspondence and membership enquiries." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex, nofollow" },
  ] }),
  component: AdminEnquiries,
});
