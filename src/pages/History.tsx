import Layout from "@/components/Layout";
import RedStar from "@/components/RedStar";
import { useRevealGroup } from "@/hooks/use-reveal";

const timeline = [
  {
    title: "The Crisis that Demands Revolution",
    content:
      "Kenya is trapped in a spiral of IMF debt, austerity and neocolonial exploitation. The 2024 Finance Bill protests showed the fury of the masses against a comprador bourgeoisie that serves imperialism while wages stagnate, unemployment soars, and the cost of living crushes working families. No capitalist government — whether led by Kenya Kwanza, ODM or any other bourgeois formation — can resolve this crisis. The system itself is the problem.",
  },
  {
    title: "The Founding of the PRC",
    content:
      "The Permanent Revolutionary Congress was born out of the recognition that no capitalist party or reformist grouping can resolve the systemic crisis facing Kenya's workers and youth. Founded by workers, youth and revolutionary socialists, the PRC is built on the program of permanent revolution — the understanding that in countries dominated by imperialism, the struggle for democratic rights and economic justice can only be completed by the working class taking power and building socialism.",
  },
  {
    title: "Affiliated with the ISL",
    content:
      "The PRC is proud to be the Kenyan section of the International Socialist League (ISL), a global network of revolutionary socialist parties and organizations. The ISL unites revolutionaries across Africa, Europe, Latin America, Asia, the Middle East and North America in a common struggle against capitalism and imperialism. Our international affiliation gives the PRC access to the collective experience, analysis and solidarity of the global working-class movement.",
  },
  {
    title: "The Inaugural Congress",
    content:
      "The PRC held its inaugural congress, bringing together workers, students and organizers from across Kenya. Delegates debated and adopted the party program, elected leadership, and voted on key resolutions including affiliation with the ISL and the adoption of a full transitional program. The congress was held at Funcity Gardens, Nairobi. [Congress date to be confirmed.]",
  },
  {
    title: "Looking Forward",
    content:
      "The PRC is building a mass revolutionary party rooted in workplaces, campuses and communities across Kenya. We are recruiting, educating and organizing a new generation of revolutionary cadres who will lead the struggle for a socialist Kenya as part of the fight for a socialist Africa and a socialist world.",
  },
];

const History = () => {
  const timelineRef = useRevealGroup<HTMLDivElement>();
  const galleryRef = useRevealGroup<HTMLDivElement>();
  return (
  <Layout>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <RedStar className="w-10 h-10 text-primary mx-auto mb-4 animate-float" />
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4 opacity-0 animate-fade-in-up">Our History</h1>
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-in-up [animation-delay:200ms]">The road to revolution.</p>
        </div>

        <div className="relative" ref={timelineRef}>
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/30" />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div
                key={i}
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`reveal relative flex flex-col md:flex-row ${i % 2 === 0 ? "" : "md:flex-row-reverse"} gap-8`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-primary mt-2 animate-pulse-glow" />
                <div className="ml-10 md:ml-0 md:w-1/2 bg-card border border-border rounded-lg p-6 hover-lift">
                  <h3 className="font-black text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16" ref={galleryRef}>
          <h2 className="text-2xl font-black text-foreground mb-6 text-center">Congress Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { src: "/images/prc-congress.jpg", alt: "PRC delegates with party and ISL banners at the Inaugural Congress" },
              { src: "/images/congress-presentation.jpg", alt: "Presentation at the PRC Inaugural Congress" },
              { src: "/images/congress-speaker.jpg", alt: "Speaker addressing delegates at the congress" },
              { src: "/images/congress-vote.jpg", alt: "Delegates voting at the PRC Inaugural Congress" },
              { src: "/images/congress-vote2.jpg", alt: "Congress delegates raising hands in vote" },
              { src: "/images/bolts-protest.jpg", alt: "Workers protesting against exploitation by ride-hailing companies" },
              { src: "/images/workshop-1.jpg", alt: "PRC political education workshop" },
              { src: "/images/workshop-2.jpg", alt: "Participants at a PRC workshop session" },
            ].map((img, i) => (
              <div
                key={i}
                data-reveal
                style={{ transitionDelay: `${(i % 4) * 100}ms` }}
                className="reveal overflow-hidden rounded-lg border border-border group hover:border-primary/50 transition-colors duration-300"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Photos from PRC congresses, workshops and workers' struggles.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);
};

export default History;
