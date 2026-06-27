import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { BookOpen, Video, Users, Download } from "lucide-react";

const tracks = [
  "Introduction to Marxism",
  "Historical Materialism",
  "Political Economy",
  "The State and Revolution",
  "Permanent Revolution",
  "Imperialism Today",
  "African Revolutionary History",
  "Trade Union Organizing",
  "Socialist Feminism",
  "Digital Activism",
];

const formats = [
  { icon: BookOpen, title: "Reading Lists", desc: "Curated Marxist classics with PRC study guides." },
  { icon: Video, title: "Video Lectures", desc: "Recorded classes from PRC and ISL educators." },
  { icon: Users, title: "Study Groups", desc: "Branch-level circles meeting weekly across Kenya." },
  { icon: Download, title: "Downloadable PDFs", desc: "Free pamphlets, articles and full books." },
];

export default function Education() {
  return (
    <Layout>
      <SEO title={"Marxist School"} description={"Reading lists, courses, study groups and resources on Marxism, political economy and revolutionary history."} path={"/education"} />
      
      <PageHero
        kicker="Marxist School"
        title="Theory. Strategy. Cadre formation."
        lede="Revolutionary politics requires revolutionary education. The PRC Marxist School trains organizers in the theory and history of our movement."
      />
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <p className="kicker mb-3">Courses</p>
          <h2 className="font-display text-4xl text-foreground mb-10">Tracks of study.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {tracks.map((t, i) => (
              <div key={t} className="bg-background p-6 flex items-start gap-4 group hover:bg-primary transition">
                <span className="font-display text-2xl text-primary group-hover:text-primary-foreground transition">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-display text-lg text-foreground group-hover:text-primary-foreground transition mt-1">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <p className="kicker mb-3">Formats</p>
          <h2 className="font-display text-4xl text-foreground mb-10">How we learn.</h2>
          <div className="grid md:grid-cols-4 gap-px bg-border">
            {formats.map((f) => (
              <div key={f.title} className="bg-background p-8">
                <f.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}