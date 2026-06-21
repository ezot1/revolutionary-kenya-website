import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Search, FileText } from "lucide-react";

const docs = [
  { type: "Statement", title: "On the Gen-Z Uprising of 2024", date: "2024-07-10" },
  { type: "Position Paper", title: "For a Workers' Government in Kenya", date: "2025-01-18" },
  { type: "Resolution", title: "Founding Resolutions of the PRC", date: "2025-03-22" },
  { type: "Pamphlet", title: "What is Permanent Revolution?", date: "2025-05-09" },
  { type: "Conference Document", title: "Theses on Imperialism in Africa", date: "2025-06-14" },
  { type: "Research Report", title: "The Gig Economy in Nairobi: A Class Analysis", date: "2025-08-02" },
  { type: "Book", title: "Permanent Revolution & the African Working Class", date: "2025-09-30" },
  { type: "Archive", title: "Selected Writings of Kenyan Marxists 1960–1990", date: "2025-11-11" },
];

const types = ["All", "Statement", "Position Paper", "Resolution", "Pamphlet", "Conference Document", "Research Report", "Book", "Archive"];

export default function Publications() {
  const [q, setQ] = useState("");
  const [type, setType] = useState("All");
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
            <article key={d.title} className="bg-background p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-secondary/40 transition group cursor-pointer">
              <FileText className="w-6 h-6 text-primary" />
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
    </Layout>
  );
}