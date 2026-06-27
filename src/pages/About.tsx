import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

const pillars = [
  { t: "Workers' Power", d: "Organize the working class into a conscious political force capable of taking power." },
  { t: "Socialist Democracy", d: "Democratic planning, workers' control, accountable institutions — not bureaucratic dictatorship." },
  { t: "Internationalism", d: "Capital crosses every border. So must the resistance. The PRC is a section of the ISL." },
  { t: "Permanent Revolution", d: "In the imperialist epoch, only the working class can carry democratic tasks to completion." },
  { t: "Anti-Imperialism", d: "Unconditional solidarity with oppressed nations against every imperialist power." },
  { t: "Women's Liberation", d: "Socialist feminism — class struggle against patriarchy is inseparable from struggle against capital." },
  { t: "Climate Justice", d: "There is no green capitalism. A planned, democratic economy is the only path to a livable planet." },
];

const timeline = [
  { y: "2020", e: "Initial revolutionary nucleus forms in Nairobi out of trade-union and student struggles." },
  { y: "2022", e: "Joins the International Socialist League as an observer section." },
  { y: "2024", e: "Engagement with the Gen-Z uprising against the Finance Bill; PRC cadre lead organizing in Nairobi and Mombasa." },
  { y: "2025", e: "Founding Congress of the Permanent Revolutionary Congress. Political program adopted." },
  { y: "Today", e: "Branches active across Kenya. Building Africa-wide revolutionary collaboration." },
];

export default function About() {
  return (
    <Layout>
      <SEO title={"About the Permanent Revolutionary Congress"} description={"Mission, history, political tradition and what the PRC stands for in Kenya and internationally."} path={"/about"} />
      
      <PageHero
        kicker="About PRC"
        title="A revolutionary socialist organization built for the struggles ahead."
        lede="We are a Marxist organization in the tradition of Marx, Lenin and Trotsky — fighting for workers' power, socialist democracy and permanent revolution."
      />
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="kicker mb-3">Mission</p>
            <h2 className="font-display text-3xl text-foreground">Why we exist.</h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-foreground/90 font-serif-editorial text-lg leading-relaxed">
            <p>The PRC was founded to build a revolutionary party of the working class in Kenya, capable of leading struggles against capitalism, imperialism and the comprador state — and rooted in an international revolutionary movement.</p>
            <p>We reject the politics of class collaboration, NGO-ism and parliamentary illusions. We fight in workplaces, neighborhoods, schools and the streets. We organize for power, not influence.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4">
          <p className="kicker mb-3 text-center">What We Stand For</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-12">Our political principles.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {pillars.map((p) => (
              <div key={p.t} className="bg-background p-8 hover:bg-primary group transition">
                <h3 className="font-display text-xl text-foreground group-hover:text-primary-foreground mb-3 transition">{p.t}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/90 transition leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="kicker mb-3">Our History</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12">From struggle to organization.</h2>
          <div className="space-y-6 border-l-2 border-primary pl-8">
            {timeline.map((t) => (
              <div key={t.y} className="relative">
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-primary" />
                <p className="font-display text-2xl text-primary">{t.y}</p>
                <p className="text-foreground/90 mt-1">{t.e}</p>
              </div>
            ))}
          </div>
          <Link to="/history" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mt-10 story-link">
            Read the full history <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}