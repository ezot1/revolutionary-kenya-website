import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, FileText } from "lucide-react";
import Layout from "@/components/Layout";
import NewsletterForm from "@/components/NewsletterForm";
import { supabase } from "@/lib/supabase";
import { inauguralIssue } from "@/content/revolutionaryReview";
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

  useEffect(() => {
    supabase
      .from("newsletter_issues")
      .select("id, title, slug, issue_number, summary, image_url, date")
      .eq("published", true)
      .neq("slug", inauguralIssue.slug)
      .order("date", { ascending: false })
      .then(({ data }) => {
        if (data) setIssues(data as Issue[]);
      });
  }, []);

  const lead = inauguralIssue.articles[0];

  return (
    <Layout>
      <main className="overflow-x-hidden bg-review-paper text-review-ink py-8 md:py-14">
        <div className="container mx-auto px-4">
          <header className="mx-auto max-w-6xl border-b border-review-line pb-8">
            <div className="bg-review-red px-5 py-6 text-review-paper md:px-8 md:py-8">
              <div className="flex items-center gap-4 border-b border-review-paper/40 pb-5 md:gap-6">
                <img src="/images/prc-logo.jpg" alt="Permanent Revolutionary Congress" className="h-16 w-16 shrink-0 rounded-full border-2 border-review-paper object-cover md:h-24 md:w-24" />
                <div className="min-w-0">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] md:text-xs">Permanent Revolutionary Congress</p>
                  <h1 className="mt-1 break-words font-review-display text-2xl font-black uppercase leading-none sm:text-5xl md:text-7xl">
                    The Revolutionary Review
                  </h1>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap justify-between gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.14em]">
                <span>Volume I · Issue 01</span>
                <span>Monthly · Nairobi · September 2026</span>
              </div>
            </div>
            <p className="mx-auto max-w-3xl px-5 pt-6 text-center font-review text-base font-semibold italic leading-relaxed text-review-muted md:text-lg">
              A monthly journal of working-class struggle, socialist analysis and permanent revolution.
            </p>
          </header>

          <section className="mx-auto grid max-w-6xl border-b-4 border-review-ink lg:grid-cols-12">
            <div className="border-review-ink py-8 lg:col-span-8 lg:border-r lg:pr-10">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-review-red">Inaugural issue</p>
              <h2 className="mt-3 max-w-4xl font-review-display text-4xl font-black leading-[0.98] md:text-6xl">
                {inauguralIssue.title}
              </h2>
              <p className="mt-4 max-w-3xl font-review text-lg italic text-review-muted md:text-2xl">{inauguralIssue.subtitle}</p>
              <img
                src={lead.image}
                alt={lead.imageAlt}
                className="mt-7 aspect-[16/8] w-full object-cover"
              />
              <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-review-red">Lead essay</p>
                  <h3 className="mt-2 font-review-display text-3xl font-bold leading-tight">{lead.title}</h3>
                  <p className="mt-3 max-w-2xl font-review leading-relaxed text-review-muted">{lead.standfirst}</p>
                </div>
                <Link
                  to={`/newsletter/${inauguralIssue.slug}`}
                  className="inline-flex items-center justify-center gap-2 bg-review-ink px-5 py-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-review-paper transition hover:bg-review-red"
                >
                  Read issue <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <aside className="py-8 lg:col-span-4 lg:pl-10">
              <div className="border-b-2 border-review-ink pb-3">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-review-red">Inside issue 01</p>
              </div>
              <ol className="divide-y divide-review-line">
                {inauguralIssue.articles.map((article) => (
                  <li key={article.number} className="grid grid-cols-[2rem_1fr] gap-3 py-4">
                    <span className="font-sans text-xs font-bold text-review-red">{article.number}</span>
                    <div>
                      <p className="font-review-display text-lg font-bold leading-tight">{article.title}</p>
                      <p className="mt-1 font-review text-xs leading-relaxed text-review-muted">{article.standfirst}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <a
                href={inauguralIssue.pdfUrl}
                download
                className="mt-6 flex w-full items-center justify-center gap-2 border-2 border-review-ink px-5 py-3 font-sans text-xs font-bold uppercase tracking-[0.16em] transition hover:bg-review-ink hover:text-review-paper"
              >
                <Download className="h-4 w-4" /> Download print edition
              </a>
            </aside>
          </section>

          <section className="mx-auto grid max-w-6xl border-b-2 border-review-ink py-10 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-review-red">Editorial</p>
              <h2 className="mt-2 font-review-display text-3xl font-bold leading-tight">Why this review, why now?</h2>
            </div>
            <div className="mt-5 space-y-4 font-review leading-relaxed text-review-muted md:col-span-7 md:mt-0 md:columns-2 md:gap-8">
              {inauguralIssue.editorial.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl border-b-4 border-review-ink py-10 md:grid-cols-[1fr_1.4fr] md:gap-12">
            <div>
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-review-red">Monthly dispatch</p>
              <h2 className="mt-2 font-review-display text-3xl font-bold">Receive each new issue</h2>
              <p className="mt-3 max-w-md font-review leading-relaxed text-review-muted">
                Subscribe for one monthly notice when a new issue is published. No advertising and no sale of subscriber data.
              </p>
            </div>
            <div className="mt-6 self-center md:mt-0">
              <NewsletterForm />
            </div>
          </section>

          {issues.length > 0 && (
            <section className="mx-auto max-w-6xl py-10">
              <div className="flex items-end justify-between border-b-2 border-review-ink pb-3">
                <h2 className="font-review-display text-3xl font-bold">Archive</h2>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-review-muted">Past issues</span>
              </div>
              <div className="grid gap-px bg-review-line md:grid-cols-3">
                {issues.map((issue) => (
                  <Link key={issue.id} to={`/newsletter/${issue.slug}`} className="group bg-review-paper py-6 md:px-5">
                     <img src={issue.image_url || defaultCover} alt="" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:brightness-90" />
                    <p className="mt-4 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-review-red">
                      {issue.issue_number ? `Issue ${issue.issue_number} · ` : ""}{new Date(issue.date).toLocaleDateString(undefined, { month: "long", year: "numeric" })}
                    </p>
                    <h3 className="mt-2 font-review-display text-2xl font-bold leading-tight group-hover:text-review-red">{issue.title}</h3>
                    <span className="mt-4 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase"><FileText className="h-4 w-4" /> Read issue</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Newsletter;