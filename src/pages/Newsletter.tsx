import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import NewsletterForm from "@/components/NewsletterForm";
import { supabase } from "@/lib/supabase";
import defaultCover from "@/assets/publication-default.jpg";

interface Issue {
  id: string;
  title: string;
  slug: string;
  issue_number: number | null;
  summary: string | null;
  image_url: string | null;
  date: string;
}

const Newsletter = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("newsletter_issues")
      .select("id, title, slug, issue_number, summary, image_url, date")
      .eq("published", true)
      .order("date", { ascending: false })
      .then(({ data }) => {
        if (data) setIssues(data as Issue[]);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <PageHero
        kicker="Bulletin"
        title="The PRC Newsletter"
        lede="Regular bulletins of analysis, agitation and reports from the struggles of workers, youth and the oppressed."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {loading ? (
            <p className="text-muted-foreground">Loading issues...</p>
          ) : issues.length === 0 ? (
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl text-foreground mb-3">First issue coming soon</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe below and we will point you to every bulletin the moment it is published.
              </p>
              <NewsletterForm />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {issues.map((issue) => (
                <Link
                  key={issue.id}
                  to={`/newsletter/${issue.slug}`}
                  className="group border border-border bg-card hover:border-primary transition overflow-hidden"
                >
                  <img
                    src={issue.image_url || defaultCover}
                    alt={issue.title}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <p className="kicker mb-3">
                      {issue.issue_number ? `Issue ${issue.issue_number} · ` : ""}
                      {new Date(issue.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition leading-tight">
                      {issue.title}
                    </h3>
                    {issue.summary && (
                      <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{issue.summary}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {issues.length > 0 && (
            <div className="mt-16 border-t border-border pt-10 max-w-xl">
              <h2 className="font-display text-2xl text-foreground mb-3">Get every issue</h2>
              <NewsletterForm />
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Newsletter;
