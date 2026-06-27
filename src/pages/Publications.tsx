import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SocialShare from "@/components/SocialShare";
import { Search, FileText, X } from "lucide-react";
import { articles, type Article } from "@/content/articles";

const docs = articles;

const types = ["All", "Statement", "Position Paper", "Resolution", "Pamphlet", "Conference Document", "Research Report", "Book", "Archive"];

export default function Publications() {
  const [q, setQ] = useState("");
  const [type, setType] = useState("All");
  const [selected, setSelected] = useState<Article | null>(null);
  const filtered = docs.filter((d) =>
    (type === "All" || d.type === type) && d.title.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <Layout>
      <PageHero
        kicker="Publications"
        title="The PRC digital library."
        lede="Statements, position papers, theses, pamphlets and books — the political record of our organization."
      />
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search the library…"
              className="w-full pl-11 pr-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap border transition ${
                  type === t ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 space-y-px bg-border">
          {filtered.map((d) => (
            <article
              key={d.title}
              onClick={() => setSelected(d)}
              className="bg-background p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-secondary/40 transition group cursor-pointer"
            >
              {d.image ? (
                <img
                  src={d.image}
                  alt={d.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full sm:w-40 h-40 sm:h-24 object-cover border border-border"
                />
              ) : (
                <FileText className="w-6 h-6 text-primary" />
              )}
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-bold mb-1">{d.type}</p>
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition">{d.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{new Date(d.date).toLocaleDateString()}</p>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="bg-background p-8 text-muted-foreground italic font-serif-editorial">No documents match your search.</p>
          )}
        </div>
      </section>
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            className="min-h-full flex items-start justify-center p-4 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <article className="bg-background border border-border max-w-3xl w-full p-8 sm:p-12 relative">
              <button
                onClick={() => setSelected(null)}
                aria-label="Close article"
                className="absolute top-4 right-4 w-9 h-9 grid place-items-center border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
              >
                <X className="w-4 h-4" />
              </button>
              <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-bold mb-3">{selected.type}</p>
              <h1 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mb-3">{selected.title}</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-8">
                {selected.author ? `${selected.author} · ` : ""}{new Date(selected.date).toLocaleDateString()}
              </p>
              {selected.image && (
                <img
                  src={selected.image}
                  alt={selected.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-auto mb-8 border border-border"
                />
              )}
              <div className="font-serif-editorial text-lg text-foreground/90 leading-relaxed space-y-5">
                {selected.body.split(/\n\n+/).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-10 pt-6 border-t border-border">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Share this document</p>
                <SocialShare inline />
              </div>
            </article>
          </div>
        </div>
      )}
    </Layout>
  );
}