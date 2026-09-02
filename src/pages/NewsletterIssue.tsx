import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SocialShare from "@/components/SocialShare";
import { supabase } from "@/lib/supabase";
import { ArrowLeft } from "lucide-react";

interface Issue {
  id: string;
  title: string;
  slug: string;
  issue_number: number | null;
  summary: string | null;
  content: string;
  image_url: string | null;
  date: string;
}

const NewsletterIssue = () => {
  const { slug } = useParams();
  const [issue, setIssue] = useState<Issue | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from("newsletter_issues")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle()
      .then(({ data }) => {
        setIssue((data as Issue) ?? null);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <section className="py-24 container mx-auto px-4 text-muted-foreground">Loading...</section>
      </Layout>
    );
  }

  if (!issue) {
    return (
      <Layout>
        <section className="py-24 container mx-auto px-4">
          <h1 className="font-display text-4xl text-foreground mb-4">Issue not found</h1>
          <Link to="/newsletter" className="text-primary hover:underline">
            Back to the newsletter
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/newsletter"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All issues
          </Link>

          <p className="kicker mb-4">
            {issue.issue_number ? `Issue ${issue.issue_number} · ` : ""}
            {new Date(issue.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-foreground leading-[0.98] mb-6">{issue.title}</h1>
          {issue.summary && (
            <p className="text-lg text-muted-foreground font-serif-editorial mb-8">{issue.summary}</p>
          )}

          {issue.image_url && (
            <img
              src={issue.image_url}
              alt={issue.title}
              className="w-full border border-border mb-10 object-cover"
            />
          )}

          <div className="space-y-5">
            {issue.content.split(/\n\s*\n/).map((para, i) => (
              <p key={i} className="text-foreground/90 leading-relaxed font-serif-editorial whitespace-pre-line">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <SocialShare title={issue.title} />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default NewsletterIssue;
