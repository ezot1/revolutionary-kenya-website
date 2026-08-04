import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Hammer, GraduationCap, Users, Leaf, Globe2, Building2, Wifi } from "lucide-react";

const items = [
  { icon: Hammer, title: "Fight Against Unemployment", goal: "Jobs and a living wage for every worker.", desc: "Building organizing committees in unemployed youth networks across Kenya." },
  { icon: Building2, title: "Defend Public Services", goal: "Reverse privatization. Expand the public sector.", desc: "Coordinating with health and education workers facing cuts and casualization." },
  { icon: Wifi, title: "Organize Gig Workers", goal: "Unionize platform labor — riders, drivers, couriers.", desc: "Worker-led organizing against the gig giants and their algorithmic exploitation." },
  { icon: Users, title: "Workers Against Privatization", goal: "Stop the sell-off of state assets to foreign capital.", desc: "Mass campaigns in transport, energy and ports." },
  { icon: Leaf, title: "Climate Justice Campaign", goal: "Just transition under democratic workers' control.", desc: "Linking environmental struggle to labor and Indigenous land defense." },
  { icon: Globe2, title: "Solidarity With Palestine", goal: "End complicity. End the occupation.", desc: "Coordinated BDS, protest and political education work." },
  { icon: GraduationCap, title: "Anti-Imperialist Africa", goal: "Africa for Africans — out with imperialism, French, US and Chinese alike.", desc: "Pan-African revolutionary collaboration across the continent." },
];

export default function Campaigns() {
  return (
    <Layout>
      <PageHero
        kicker="Campaigns"
        title="The fights we're in."
        lede="The PRC organizes mass campaigns rooted in the daily struggles of workers, youth and the oppressed."
      />
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-px bg-border">
          {items.map((c) => (
            <article key={c.title} className="bg-background p-8 group hover:bg-secondary/50 transition">
              <c.icon className="w-10 h-10 text-primary mb-5" />
              <h2 className="font-display text-2xl text-foreground mb-2">{c.title}</h2>
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">{c.goal}</p>
              <p className="text-muted-foreground leading-relaxed mb-5">{c.desc}</p>
              <a href="/join" className="inline-flex items-center gap-2 text-foreground font-bold uppercase tracking-wider text-xs story-link">
                Get involved <ArrowRight className="w-3 h-3" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}