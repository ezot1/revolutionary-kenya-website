import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import Layout from "@/components/Layout";
import SocialShare from "@/components/SocialShare";
import { supabase } from "@/lib/supabase";
import { inauguralIssue } from "@/content/revolutionaryReview";

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
  const isInaugural = slug === inauguralIssue.slug;
  const [issue, setIssue] = useState<Issue | null>(null);
  const [loading, setLoading] = useState(!isInaugural);

  useEffect(() => {
    if (!slug || isInaugural) return;
    supabase.from("newsletter_issues").select("*").eq("slug", slug).eq("published", true).maybeSingle().then(({ data }) => {
      setIssue((data as Issue) ?? null);
      setLoading(false);
    });
  }, [isInaugural, slug]);

  if (isInaugural) {
    return (
      <Layout>
        <article className="bg-review-paper text-review-ink py-8 md:py-14">
          <div className="mx-auto max-w-5xl px-4">
            <Link to="/newsletter" className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.16em] text-review-muted hover:text-review-red">
              <ArrowLeft className="h-4 w-4" /> All issues
            </Link>
            <header className="mt-8 border-y-4 border-review-ink py-7 text-center">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-review-red">The Revolutionary Review · Volume I · Issue 01</p>
              <h1 className="mx-auto mt-4 max-w-4xl font-review-display text-5xl font-black leading-[0.95] md:text-7xl">{inauguralIssue.title}</h1>
              <p className="mx-auto mt-4 max-w-2xl font-review text-xl italic text-review-muted">{inauguralIssue.subtitle}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={inauguralIssue.pdfUrl} download className="inline-flex items-center gap-2 bg-review-ink px-5 py-3 font-sans text-xs font-bold uppercase tracking-[0.14em] text-review-paper hover:bg-review-red">
                  <Download className="h-4 w-4" /> Download PDF
                </a>
                <SocialShare inline title={`${inauguralIssue.title} | The Revolutionary Review`} image={inauguralIssue.articles[0].image} />
              </div>
            </header>

            <section className="mx-auto max-w-3xl border-b-2 border-review-ink py-12">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-review-red">Editorial</p>
              <h2 className="mt-2 font-review-display text-3xl font-bold">The opening word</h2>
              <div className="mt-6 space-y-5 font-review text-lg leading-relaxed text-review-muted">
                {inauguralIssue.editorial.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-review-display first-letter:text-6xl first-letter:font-black first-letter:leading-[0.8]" : ""}>{paragraph}</p>)}
              </div>
            </section>

            {inauguralIssue.articles.map((article) => (
              <section id={`article-${article.number}`} key={article.number} className="border-b-2 border-review-ink py-14 scroll-mt-24">
                <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                  <div>
                    <p className="font-sans text-xs font-bold text-review-red">{article.number}</p>
                    <p className="mt-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-review-muted">{article.author}</p>
                  </div>
                  <div>
                    <h2 className="font-review-display text-4xl font-black leading-[0.98] md:text-5xl">{article.title}</h2>
                    <p className="mt-4 font-review text-xl italic leading-relaxed text-review-muted">{article.standfirst}</p>
                  </div>
                </div>
                <img src={article.image} alt={article.imageAlt} className="mt-8 aspect-[16/7] w-full object-cover grayscale contrast-125" />
                <div className="mx-auto mt-9 max-w-3xl">
                  <div className="space-y-5 font-review text-lg leading-relaxed text-review-muted">
                    {article.body.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-review-display first-letter:text-6xl first-letter:font-black first-letter:leading-[0.8]" : ""}>{paragraph}</p>)}
                  </div>
                  <blockquote className="my-9 border-y-2 border-review-ink py-6 font-review-display text-2xl font-bold leading-tight text-review-red">“{article.pullQuote}”</blockquote>
                  <div className="border-t border-review-line pt-5">
                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-review-muted">Sources and further reading</p>
                    <ul className="mt-3 space-y-2 font-review text-sm text-review-muted">
                      {article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="underline decoration-review-line underline-offset-4 hover:text-review-red">{source.label}</a></li>)}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </article>
      </Layout>
    );
  }

  if (loading) return <Layout><section className="container mx-auto px-4 py-24 text-muted-foreground">Loading...</section></Layout>;
  if (!issue) return <Layout><section className="container mx-auto px-4 py-24"><h1 className="font-display text-4xl">Issue not found</h1><Link to="/newsletter" className="mt-4 inline-block text-primary hover:underline">Back to The Revolutionary Review</Link></section></Layout>;

  return (
    <Layout>
      <article className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <Link to="/newsletter" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> All issues</Link>
          <p className="kicker mb-4">{issue.issue_number ? `Issue ${issue.issue_number} · ` : ""}{new Date(issue.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</p>
          <h1 className="font-display text-4xl leading-[0.98] md:text-6xl">{issue.title}</h1>
          {issue.summary && <p className="mb-8 mt-6 font-serif-editorial text-lg text-muted-foreground">{issue.summary}</p>}
          {issue.image_url && <img src={issue.image_url} alt={issue.title} className="mb-10 w-full border border-border object-cover" />}
          <div className="space-y-5">{issue.content.split(/\n\s*\n/).map((para, index) => <p key={`${index}-${para.slice(0, 20)}`} className="whitespace-pre-line font-serif-editorial leading-relaxed text-foreground/90">{para}</p>)}</div>
          <div className="mt-12 border-t border-border pt-8"><SocialShare title={issue.title} image={issue.image_url || undefined} /></div>
        </div>
      </article>
    </Layout>
  );
};

export default NewsletterIssue;