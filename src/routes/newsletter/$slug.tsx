import { createFileRoute } from "@tanstack/react-router";
import NewsletterIssue from "@/pages/NewsletterIssue";
import { supabase } from "@/integrations/supabase/client";
import { inauguralIssue } from "@/content/revolutionaryReview";
import { shareHead, summarize } from "@/lib/shareMeta";

interface IssuePreview {
  title: string;
  description: string;
  image: string | null;
}

export const Route = createFileRoute("/newsletter/$slug")({
  loader: async ({ params }): Promise<IssuePreview | null> => {
    if (params.slug === inauguralIssue.slug) {
      return {
        title: `${inauguralIssue.title} | The Revolutionary Review`,
        description: inauguralIssue.subtitle,
        image: inauguralIssue.articles[0]?.image ?? null,
      };
    }
    try {
      const { data } = await supabase
        .from("newsletter_issues")
        .select("title, summary, content, image_url")
        .eq("slug", params.slug)
        .eq("published", true)
        .maybeSingle();
      if (!data) return null;
      return {
        title: `${data.title} | The Revolutionary Review`,
        description: summarize(data.summary || data.content),
        image: data.image_url,
      };
    } catch {
      return null;
    }
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? shareHead({
          title: loaderData.title,
          description: loaderData.description,
          image: loaderData.image,
          path: `/newsletter/${encodeURIComponent(params.slug)}`,
        })
      : {},
  component: NewsletterIssue,
});
