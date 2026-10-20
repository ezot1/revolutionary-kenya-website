import { createFileRoute } from "@tanstack/react-router";
import AdminEnquiries from "@/pages/AdminEnquiries";

export const Route = createFileRoute("/admin/enquiries")({
  component: AdminEnquiries,
});
