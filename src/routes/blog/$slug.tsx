import { createFileRoute } from "@tanstack/react-router";
import BlogPost from "@/pages/BlogPost";
import { supabase } from "@/integrations/supabase/client";
import { congressPoliticalPaper } from "@/content/congressPoliticalPaper";
import { shareHead, summarize } from "@/lib/shareMeta";

interface PostPreview {
  title: string;
  description: string;
  image: string | null;
}

function firstBodyImage(body: string | null | undefined): string | null {
  const match = (body ?? "").match(/!\[[^\]]*\]\(([^)]+)\)/);
  return match?.[1] ?? null;
}

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }): Promise<PostPreview | null> => {
    if (params.slug === congressPoliticalPaper.slug) {
      return {
        title: congressPoliticalPaper.title,
        description: congressPoliticalPaper.description,
        image: congressPoliticalPaper.image ?? null,
      };
    }
    try {
      const { data } = await supabase
        .from("posts")
        .select("title, content, image_url")
        .eq("slug", params.slug)
        .eq("published", true)
        .maybeSingle();
      if (!data) return null;
      return {
        title: data.title,
        description: summarize(data.content),
        image: data.image_url || firstBodyImage(data.content),
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
          path: `/blog/${encodeURIComponent(params.slug)}`,
        })
      : {},
  component: BlogPost,
});
