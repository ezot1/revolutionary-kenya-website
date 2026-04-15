import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import RedStar from "@/components/RedStar";

const sections = [
  {
    id: "crisis",
    title: "The Crisis of Capitalism in Kenya and the World",
    content: `Kenya, like much of the Global South, is gripped by a systemic crisis rooted in the capitalist mode of production. The country's economy is dominated by imperialism through mechanisms of debt, structural adjustment, and unequal trade. The IMF and World Bank dictate economic policy, while multinational corporations extract resources and profits.

Unemployment, especially among the youth, has reached crisis proportions. The cost of living spirals upward while wages stagnate. Healthcare, education, water, and housing are treated as commodities rather than rights. The 2024 Finance Bill protests exposed the depth of popular anger against austerity measures imposed by a comprador bourgeoisie that serves the interests of international capital rather than the Kenyan masses.

This crisis is not unique to Kenya. Globally, capitalism is in a state of decay. Climate catastrophe, imperialist wars, mass displacement, and the concentration of obscene wealth in fewer and fewer hands are symptoms of a system that has outlived any progressive role. The only way forward is a revolutionary break with capitalism.`,
  },
  {
    id: "objective",
    title: "Our Revolutionary Objective",
    content: `The PRC fights for the socialist transformation of Kenya as part of the world socialist revolution. Our strategic objective is the overthrow of capitalist rule and the establishment of a workers' government based on democratic organs of working-class power — factory committees, neighborhood councils, and a democratically planned economy.

We base ourselves on the theory of permanent revolution as developed by Leon Trotsky: in countries oppressed by imperialism, the tasks of the democratic revolution — land reform, national liberation, democratic rights — cannot be completed by the national bourgeoisie. Only the working class, leading the poor peasants and all the oppressed, can carry through these tasks, and in doing so must move directly to socialist measures.

There is no intermediate stage. There is no progressive wing of the ruling class. The revolution must be permanent — uninterrupted from the democratic to the socialist tasks, and international in scope.`,
  },
  {
    id: "workers",
    title: "The Working Class and Its Rights",
    content: `The working class is the revolutionary subject of our epoch. By its position in production, its collective organization, and its capacity for conscious action, the proletariat is the only class capable of overthrowing capitalism and reorganizing society on socialist foundations.

The PRC demands:
• A living wage indexed to the real cost of living, with automatic adjustment for inflation.
• Full employment through a massive public works program — building schools, hospitals, housing and infrastructure.
• The right to organize, strike and bargain collectively without state interference.
• Nationalization of key industries, banks, and large-scale agriculture under workers' control and democratic management.
• Abolition of casualization and outsourcing — all workers must have permanent, dignified employment with full benefits.
• Workers' control of health and safety in every workplace.
• A sliding scale of working hours — share the available work among all hands without loss of pay.`,
  },
  {
    id: "women-youth",
    title: "Women and Youth",
    content: `Women and youth bear the heaviest burden of capitalist exploitation in Kenya. Women face the double oppression of class exploitation and gender-based violence, discrimination, and unpaid care work. Young people confront mass unemployment, a dysfunctional education system, and a future of precarity.

The PRC demands:
• Full equality for women in law and in practice — equal pay, reproductive rights, and an end to all forms of gender-based violence.
• Free, quality childcare and socialized domestic labor.
• Comprehensive, free public education from early childhood through university.
• Abolition of student debt and guaranteed employment for graduates.
• Youth employment programs with living wages and skills training.
• Full access to sexual and reproductive healthcare.
• An end to the harassment and criminalization of young people in informal settlements and on campuses.

The liberation of women and youth is inseparable from the socialist revolution. We reject the notion that these struggles can be postponed until "after the revolution" — they are integral to it.`,
  },
  {
    id: "oppression",
    title: "The Fight Against Oppression",
    content: `Capitalism sustains itself by dividing the working class along lines of ethnicity, religion, gender, sexuality and nationality. In Kenya, ethnic manipulation by the ruling class has been a central tool of political control since independence. The PRC opposes all forms of oppression and fights for the unity of the working class across all divisions.

We demand:
• An end to ethnic-based political patronage and land grabbing.
• Full rights for LGBTQ+ people — decriminalization, anti-discrimination protections, and an end to all state and social persecution.
• Full rights and dignity for refugees and migrants.
• An end to police brutality and extrajudicial killings, particularly in poor and marginalized communities.
• Community control of policing with full democratic accountability.

The fight against oppression is not a secondary struggle — it is a class struggle. The working class cannot liberate itself while any section of the oppressed remains in chains.`,
  },
  {
    id: "democratic-rights",
    title: "The Struggle for Democratic Rights",
    content: `Bourgeois democracy in Kenya is a facade. Elections are rigged by money, ethnicity and state power. The judiciary, police and military serve the interests of the ruling class. Democratic freedoms — assembly, speech, press, organization — are routinely violated when they threaten the status quo.

The PRC fights for the fullest democratic rights as part of the struggle for socialism:
• Freedom of assembly, speech, press and organization without restriction.
• The right to form political parties and stand for election without prohibitive fees or state interference.
• Elected and recallable representatives at all levels, paid no more than the average workers' wage.
• An independent judiciary free from executive manipulation.
• Abolition of repressive colonial-era laws still on the books.
• Full transparency and democratic control over all state institutions.

We do not fetishize bourgeois democracy. Real democracy — workers' democracy — can only be achieved through the revolutionary transformation of society.`,
  },
  {
    id: "internationalism",
    title: "Internationalism: Palestine, Africa, and the ISL",
    content: `The PRC is an internationalist party. We reject the lie that the struggle for socialism can be confined within national borders. Capitalism is a global system and must be fought globally.

We stand in unconditional solidarity with the Palestinian people in their struggle against Zionist apartheid and settler-colonial occupation. We demand: an end to the occupation, the right of return for all Palestinian refugees, and a free, democratic, socialist Palestine from the river to the sea.

Across Africa, we support every genuine struggle of workers and the oppressed against imperialism, dictatorships and capitalist exploitation. We oppose the militarization of Africa by the United States, France, and other imperialist powers. We fight for a Socialist Federation of Africa based on the voluntary union of workers' states.

The PRC is the Kenyan section of the International Socialist League (ISL). We build the ISL as the nucleus of a new revolutionary international, uniting revolutionaries across Africa, Europe, Latin America, Asia, the Middle East and North America. The crisis of leadership of the working class can only be resolved by building revolutionary parties in every country and forging them into a disciplined international organization.`,
  },
  {
    id: "elections",
    title: "Our Position on Elections",
    content: `The PRC does not place its faith in elections as the road to socialism. Bourgeois elections are designed to legitimize capitalist rule, not to challenge it. The state — its army, police, judiciary, and bureaucracy — is an instrument of class domination that cannot simply be voted out of existence.

However, we do not abstain from elections on principle. Where conditions allow, the PRC may stand candidates or critically support working-class candidates as a means of propaganda, agitation, and building the party's profile among the masses. Any participation in elections is subordinate to the broader goal of building a mass revolutionary movement.

We oppose all illusions in bourgeois parties and coalitions. We call on workers and youth to break with all capitalist parties — including those that claim to represent "the people" or "the hustler" — and to build their own independent political organization.`,
  },
  {
    id: "tasks",
    title: "Our Tasks and Organization",
    content: `The central task before the PRC is the building of a revolutionary party — a disciplined, cadre-based organization rooted in the working class and guided by Marxist theory.

Our immediate tasks:
• Recruit and educate a new generation of revolutionary cadres.
• Establish party branches in workplaces, campuses, and communities across Kenya.
• Produce and distribute revolutionary literature — newspapers, pamphlets, digital media.
• Intervene in trade unions, student movements, and community organizations with a revolutionary program.
• Build solidarity campaigns linking local struggles to the international fight against capitalism.
• Develop a systematic program of Marxist political education for all members.

The PRC is organized on the basis of democratic centralism: full democracy in discussion, unity in action. All leadership positions are elected and recallable. The party's program and strategy are debated and decided democratically at regular congresses.`,
  },
  {
    id: "demands",
    title: "Key Transitional Demands",
    content: `1. A living wage for all workers, indexed to the cost of living.
2. Full employment through a public works program.
3. Nationalization of banks, key industries, and large-scale agriculture under workers' control.
4. Free, quality public healthcare and education for all.
5. Land redistribution — expropriate the large landowners and redistribute land to poor peasants and cooperatives.
6. Cancel all illegitimate foreign debt.
7. A sliding scale of hours — share the work without loss of pay.
8. Full democratic rights — assembly, speech, press, organization.
9. An end to police brutality and extrajudicial killings — community control of policing.
10. Full equality for women and LGBTQ+ people.
11. Free Palestine — end the occupation, right of return, for a socialist Palestine.
12. For a Socialist Federation of Africa.
13. Build the International Socialist League as the nucleus of a new revolutionary international.
14. For a workers' government in Kenya based on democratic organs of working-class power.`,
  },
];

const Program = () => {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <RedStar className="w-10 h-10 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Party Program</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The founding program of the Permanent Revolutionary Congress, adopted at the inaugural congress.
            </p>
          </div>

          <div className="flex gap-8">
            <aside className="hidden lg:block w-64 shrink-0">
              <nav className="sticky top-24 space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`block text-xs font-semibold py-1.5 px-3 rounded transition ${
                      active === s.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="flex-1 max-w-3xl space-y-16">
              {sections.map((s) => (
                <div key={s.id} id={s.id}>
                  <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6 border-l-4 border-primary pl-4">
                    {s.title}
                  </h2>
                  {s.content.split("\n\n").map((para, i) => {
                    if (para.startsWith("•") || para.match(/^\d+\./)) {
                      return (
                        <div key={i} className="mb-4">
                          {para.split("\n").map((line, j) => (
                            <p key={j} className="text-muted-foreground leading-relaxed ml-4 mb-1 text-sm">
                              {line}
                            </p>
                          ))}
                        </div>
                      );
                    }
                    const isQuote = para.includes("The only way forward is a revolutionary break with capitalism");
                    if (isQuote) {
                      return (
                        <blockquote key={i} className="border-l-4 border-accent pl-4 py-2 my-6 text-lg font-bold text-accent italic">
                          "The only way forward is a revolutionary break with capitalism."
                        </blockquote>
                      );
                    }
                    return (
                      <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Program;
