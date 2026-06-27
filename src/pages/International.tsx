import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Globe2 } from "lucide-react";

const partners = [
  { name: "International Socialist League", region: "Global", note: "PRC is the Kenyan section of the ISL." },
];

export default function International() {
  return (
    <Layout>
      <SEO title={"International"} description={"The PRC's affiliation with the International Socialist League and its revolutionary partners worldwide."} path={"/international"} />
      
      <PageHero
        kicker="International"
        title="The struggle is global."
        lede="Capital crosses every border — so does our movement. The PRC is part of a worldwide revolutionary tradition."
      />
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="kicker mb-3">ISL</p>
            <h2 className="font-display text-4xl text-foreground mb-4">International Socialist League.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-serif-editorial">
              The PRC is the Kenyan section of the International Socialist League — a worldwide organization of revolutionary socialists uniting sections across six continents.
            </p>
            <a href="https://lis-isl.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm story-link">
              Visit the ISL →
            </a>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-px bg-border">
            {["Africa", "Europe", "Latin America", "Asia", "Middle East", "North America"].map((r) => (
              <div key={r} className="bg-background p-6 text-center">
                <Globe2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-display text-foreground">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <p className="kicker mb-3">Partners</p>
          <h2 className="font-display text-4xl text-foreground mb-10">Worldwide political relationships.</h2>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {partners.map((p) => (
              <div key={p.name} className="bg-background p-8">
                <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-bold mb-2">{p.region}</p>
                <h3 className="font-display text-xl text-foreground mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}