import { createFileRoute } from "@tanstack/react-router";
import Publications from "@/pages/Publications";
import { congressDocuments } from "@/content/congressDocuments";
import { articles } from "@/content/articles";
import defaultPublicationImage from "@/assets/publication-default.jpg";
import { shareHead, summarize } from "@/lib/shareMeta";

interface PublicationsSearch {
  article?: string;
}

export const Route = createFileRoute("/publications")({
  validateSearch: (search: Record<string, unknown>): PublicationsSearch =>
    typeof search["article"] === "string" && search["article"] ? { article: search["article"] } : {},
  head: ({ match }) => {
    const title = match.search.article;
    const selected = title ? [...congressDocuments, ...articles].find((a) => a.title === title) : undefined;
    if (!selected) {
      return shareHead({
        title: "Publications",
        description: "Statements, position papers, theses, pamphlets and books: the political record of the Permanent Revolutionary Congress.",
        path: "/publications",
        type: "website",
      });
    }
    const description =
      "description" in selected && typeof selected.description === "string"
        ? selected.description
        : summarize(selected.body);
    return shareHead({
      title: selected.title,
      description,
      image: selected.image || defaultPublicationImage,
      path: `/publications?${new URLSearchParams({ article: selected.title }).toString()}`,
    });
  },
  component: Publications,
});
