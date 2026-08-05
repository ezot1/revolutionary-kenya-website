import Layout from "@/components/Layout";
import RedStar from "@/components/RedStar";
import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const PDF_URL = "/docs/prc-program.pdf";

type Section = { id: string; title: string; paragraphs: string[]; bullets?: string[] };

const sections: Section[] = [
  {
    id: "crisis",
    title: "The Crisis of Capitalism in Kenya and the World",
    paragraphs: [
      "The world capitalist system is experiencing one of its deepest crises since the Second World War. Economic stagnation, recurring financial collapses, intensifying inter-imperialist rivalries, climate catastrophe, pandemics, terrorism, fundamentalism, recurring racism, xenophobia, wars, and civil wars are eroding the foundations of civilization. Far from offering stability or progress, capitalism drags humanity toward barbarism. The United States, China, Russia, the European Union, and other powers or imperialist blocs are locked in fierce competition, each seeking to shift the costs of the crisis of the system onto the working class and the oppressed in one way or the other. The rise of far-right tendencies - whether represented by Trump or other figures and parties of his ilk - along with rearmament in Europe, militarization and wars in Ukraine, Gaza, South Asia and across Africa, are expressions of this global rot and decay.",
      "In the case of Africa, Kenya stands at the center of this crisis. The country is trapped in the stranglehold of foreign debt and the dictates of the IMF and World Bank. Every Finance Bill deepens austerity, raising taxes on essentials while protecting the wealth of the elite. The 2024 bill revealed clearly that the Kenyan ruling class governs not for the people but for imperialism and the grafted local capital, which has historically played the role of the lackey and enforcer of imperialism. The bourgeoisie in countries like ours has, therefore, acquired a comprador character. Prices of food, fuel, and transport soar, yet real wages remain stagnant and unemployment grows. The youth face a future of insecurity, under-employment and repression. Meanwhile, corruption - a part and parcel of crisis-ridden capitalism all over the world - police brutality and land dispossession continue to define the capitalist order. The crisis is systemic, not subjective or accidental. No reform of capitalism can resolve it. While we continue to fight for every reform that could bring some respite to the lives of the working masses, we have no illusions about reformism. The system as a whole cannot be reformed or made \u201cmore humane.\u201d",
      "The so-called opposition offers no real alternative. Whether in government or out of it, all factions of the ruling class - whether the right or the so-called left - defend the same capitalist order and its ties to imperialism. The reformists and populists who posture as \u201cradical\u201d ultimately preserve the system. The only way forward is a revolutionary break with capitalism and the building of a proletarian government in alliance with peasants and other oppressed layers of the society that reorganizes society on socialist foundations. This historic task cannot be achieved without building a revolutionary party with an internationalist perspective, one that, in the words of Leon Trotsky, could act as a piston box to channel the revolutionary energy of the exploited masses for the radical transformation of society. While it is true that what moves things is steam, not the piston or the box, without the latter the former would ultimately dissipate into the air without leaving a trace.",
    ],
  },
  {
    id: "objective",
    title: "Our Revolutionary Objective",
    paragraphs: [
      "A revolutionary party is, first and foremost, an idea around which tactics, programs, and structures are built. Without a strong grasp of the ideals of revolutionary Marxism and internationalism, the party sooner or later will lose sight of its historic tasks and objectives, becoming a hollow organizational structure ultimately doomed to crumble. History has witnessed this phenomenon more than once, including parties composed of tens of millions of cadres, and at times governing gigantic state machineries.",
      "In this regard, the Permanent Revolutionary Congress is founded on the recognition that the capitalist state cannot be reformed to serve the majority. It is an instrument of class domination and exploitation, built to defend private property and imperialist interests. The task of revolutionaries is not to democratize or \u201cfix\u201d this state of affairs, but to replace it with a workers\u2019 state based on democratic councils of workers, peasants and other oppressed sectors. It is unthinkable to achieve this feat without the active participation of the youth, whether in the form of workers, peasants or students.",
      "Our objective is not limited to petty reforms. We fight for the expropriation of the banks, land - landed estates, to be more precise - and strategic services and industries without compensation to the capitalist class. These must be placed under democratic workers\u2019 control as part of a planned economy that meets human needs, not private profit. Such a revolutionary regime will also complete the unfinished bourgeois-democratic tasks of the Kenyan revolution: genuine land reform, true national sovereignty, comprehensive industrialization, separation of religion from the state affairs and the building of a truly secular state, emancipation of oppressed nationalities, and the eradication of tribalism and ethnic divisions sown by the ruling elite. These historic tasks of bourgeois-democratic revolutions cannot be accomplished by capitalism in our time.",
      "This perspective is rooted in the theory of permanent revolution developed by Leon Trotsky, the core leader of the Bolshevik Revolution alongside Vladimir Lenin. In semi-colonial and dependent countries with belated capitalism like Kenya, the bourgeoisie - inherently grafted and lackey in its character - is incapable of carrying through the democratic and national tasks of the revolution because it is tied to imperialism and terrified of the mobilized masses. Only the working class (proletariat), in alliance with the poor peasantry, can lead these struggles to victory, but in doing so it will be compelled to carry them over into socialist tasks. The revolution in Kenya, therefore, can only be successful if it is socialist and international in character, spreading across Africa and joining hands with the global working class.",
    ],
  },
  {
    id: "working-class",
    title: "The Working Class and Its Rights",
    paragraphs: [
      "The working class is the central force of the Kenyan revolution. From factory workers and public servants to teachers, health workers, digital platform drivers, IT industry employees, modern service workers, and numerous other sectors linked to the most advanced forms of science and technology - as well as the vast numbers of casual and informal workers - the proletariat produces the wealth of society while being condemned to deprivation and poverty. Gig workers, unemployed youth and layers of exploited petty-bourgeoisie, though not strictly proletarian, can prove to be increasingly militant sectors of society in alliance with the working class.",
      "We fight for the immediate improvement of workers\u2019 living conditions. A minimum wage indexed to the cost of living must replace starvation wages. Job security and full employment are essential, while working hours must be reduced without wage cuts, and unjust dismissals outlawed. When employers close factories, lay off workers or fail to pay wages, we demand expropriation of such enterprises under workers\u2019 control. Similarly, workers\u2019 safety and environmental protection should be given the utmost priority in production processes and at workplaces. Any enterprise failing to meet strict safety standards should be expropriated and placed under workers\u2019 control for reform. We defend the right to strike and organize, and we fight for democratic, militant trade unions led by their rank and file, free of state and corporate influence.",
      "The working class must control the production process. We demand workers\u2019 committees with the right to inspect company accounts to ensure transparency, and to block layoffs or production cuts imposed by capitalists. All so-called business secrets should be made public for scrutiny. Public services - transport, healthcare, education, water and energy - must be nationalized and run under workers\u2019 and communities\u2019 control. These measures are not only immediate needs but also stepping stones toward workers\u2019 power and a planned socialist economy.",
    ],
  },
  {
    id: "women-youth",
    title: "Women and Youth",
    paragraphs: [
      "Capitalism in Kenya and Africa condemns millions of women and youth to poverty, unemployment, and oppression. The system relies on patriarchal structures to sustain itself, using the unpaid labor of women in the household to reproduce the workforce while offering them the most precarious and lowest-paid jobs in the formal economy. Women workers in factories, plantations and the informal sector face sexual harassment, wage inequality and violence. At the same time, they carry the burden of raising children and maintaining households in conditions of scarcity.",
      "For the youth, the future under capitalism is one of despair. Kenya - like Pakistan, India and Bangladesh - has one of the youngest populations in the world, yet opportunities are shrinking. Graduates face years of unemployment. Others are trapped in unstable gig work or forced into migration, often under dangerous conditions. This \u201cyouth bulge\u201d is not a threat in itself but a source of enormous revolutionary potential - one that can transform the entire world economically, socially and politically. When youth rise in struggle, as seen in #EndSARS in Nigeria, the Fees Must Fall movement in South Africa, or the recent anti-tax protests in Kenya, they become the spark of broader social revolts. Elsewhere, we have witnessed gigantic uprisings of youth in Sri Lanka, Bangladesh and Nepal in recent years, triggered under similar conditions, which have shaken the system to its core and transformed the entire situation overnight.",
      "Our program insists that the struggle for the liberation of women and the emancipation of youth cannot be separated from the struggle for socialist revolution. Women and youth must not only participate in the revolutionary movement but also take leadership within it. Only through socialism, where resources are planned collectively for human need, can women be freed from patriarchal oppression and the youth win a future of dignity and opportunity.",
      "We stand for equal opportunities for women in every sphere of life, and for the absolute end of discriminatory wages, laws, and practices. We demand guaranteed equal rights, pay and representation for working women in all sectors of society. We call for six months of fully paid maternity leave, along with comprehensive, state-funded healthcare for mothers and children. We further demand the elimination of the artificial division between domestic and industrial labor through the socialization of household work and the full participation of all genders in both spheres.",
      "We believe that in a truly human society, unemployment should be regarded as a crime of the state. We demand free, scientific education - free from all religious dogma and reactionary content - at every level. We stand for full employment for all, which, in the immediate term, can be achieved by reducing working hours without any cut in wages. We further demand that the state provide unemployment benefits, at least equal to the minimum wage, to all those it fails to employ. We also demand that educational campuses be placed under the democratic control of committees representing students, teachers and parents.",
    ],
  },
  {
    id: "oppression",
    title: "The Fight Against Oppression",
    paragraphs: [
      "Oppression takes many forms under capitalism: ethnic chauvinism, patriarchy, homophobia, religious sectarianism and xenophobia. In Kenya, like the rest of the world, the ruling class deliberately manipulates ethnic divisions to secure political power, turning elections into tribal contests while the working class as a whole suffers from the same exploitation. These reactionary divisions are a tool of the elite to prevent the unity of the oppressed masses and are deliberately deepened to mask the underlying class divide.",
      "Revolutionaries must expose and oppose all forms of oppression. We stand for the complete equality of all nationalities and peoples. We reject the idea that liberation can come by empowering one ethnic elite over another. True liberation can only come through the united struggle of the oppressed and exploited against imperialist capitalism.",
      "We also defend the rights of oppressed minorities, including LGBTQ+ people, who face discrimination, violence and exclusion under capitalist and patriarchal rule. Our program insists that revolutionary socialism guarantees full equality, liberation and emancipation for all people regardless of their religious or ethnic background, or their sexual orientation - thus putting an end, in practice, to all forms of the oppression of man by man. For us, the fight against oppression is not secondary but central to building a revolutionary movement that unites the working class across all lines of division.",
    ],
  },
  {
    id: "democratic-rights",
    title: "The Struggle for Democratic Rights",
    paragraphs: [
      "Kenya\u2019s ruling class uses the state not to serve the people but to maintain capitalist domination. The state, in its very essence, is a tool of oppression by one class over another. The bourgeois state, irrespective of its official rhetoric, serves as an apparatus of repression that enforces the rule of capital over the toiling masses. Police violence, repression of protests, censorship and electoral fraud are the daily reality of political life in capitalist regimes like ours. Workers, unemployed youth and students who rise in class struggle are met with bullets, tear gas and imprisonment. At the same time, the ruling class uses the fa\u00e7ade of parliamentary democracy to legitimize its rule, while all parties in parliament serve capitalist and imperialist interests. In the glorious words of Lenin, it is a democracy for an insignificant minority, democracy for the rich - that is the democracy of capitalist society.",
      "We defend the right to organize, to protest and to strike. We call for the abolition of all repressive laws that restrict freedom of association and expression. We demand an end to all forms of censorship and restrictions on both mainstream and social media. But we also insist that democratic rights cannot be fully secured under capitalism. True democracy requires the destruction of the capitalist state, elimination of class divisions, and the building of workers\u2019 power through democratic organs of struggle. Only a workers\u2019 government, based on democratically elected councils of workers, peasants, and all oppressed layers of society from the bottom up, can establish a genuine democracy - one in which the majority rules in its own interest. Similarly, the press and media, in all their forms, can only cease to function as instruments of ruling-class propaganda and begin to play a constructive role in building a genuinely democratic and transparent society once they are freed from the shackles of capital. Therefore, we demand the nationalization of all corporate media houses and social media platforms under the democratic control of media workers, with strict public oversight and accountability.",
    ],
  },
  {
    id: "internationalism",
    title: "Internationalism: Palestine, Africa, and the ISL",
    paragraphs: [
      "The struggle of the Kenyan working class is inseparable from the struggle of the oppressed and exploited masses across Africa and throughout the world. Imperialist capitalism is a global system, and only a global socialist revolution can thoroughly defeat it. We affirm our commitment to internationalism, not as a slogan but as a practical necessity and revolutionary duty. Trotsky, in 1931, highlighted this point in the following words:",
      "\u201cWith regard to countries with a belated bourgeois development, especially the colonial and semi-colonial countries, the theory of the permanent revolution signifies that the complete and genuine solution of their tasks of achieving democracy and national emancipation is conceivable only through the dictatorship of the proletariat as the leader of the subjugated nation\u2026 The conquest of power by the proletariat does not complete the revolution, but only opens it. Socialist construction is conceivable only on the foundation of the class struggle, on a national and international scale\u2026 The completion of the socialist revolution within national limits is unthinkable. One of the basic reasons for the crisis in bourgeois society is the fact that the productive forces created by it can no longer be reconciled with the framework of the national state\u2026 The socialist revolution begins on the national arena, it unfolds on the international arena, and is completed on the world arena. Thus, the socialist revolution becomes a permanent revolution in a newer and broader sense of the word; it attains completion, only in the final victory of the new society on our entire planet.\u201d",
      "We stand firmly with the Palestinian people in their heroic struggle against Zionist occupation and imperialist backing. The genocide in Gaza is not only an attack on Palestinians but also a warning to all oppressed peoples of how far imperialism will go to maintain its domination. Kenya\u2019s ruling class, tied to U.S. imperialism, collaborates with Israel diplomatically and militarily. We demand the immediate severing of these ties and full solidarity with the Palestinian resistance.",
      "Across Africa, workers and peasants face imperialist looting, war and dictatorship. From the Sahel to the Congo, from Sudan to South Africa, struggles erupt against poverty and repression. These struggles must not remain isolated. Our task is to link them together into a continental socialist movement that can defeat imperialism and capitalism.",
      "The Permanent Revolutionary Congress recognizes Pan-Africanism as a vital tradition of resistance, but insists that real African liberation can only be achieved through socialism. For this reason, we commit ourselves to the International Socialist League (ISL). The ISL provides a framework for revolutionary parties across the globe to coordinate their struggles, exchange experiences and act in unity. We uphold its values of uncompromising anti-imperialism, revolutionary internationalism and the revolutionary struggle for socialism, with the proletariat in alliance with the peasantry as its vanguard.",
      "Our party in Kenya sees itself as part of this global struggle, and our victories will only be secured as part of the worldwide socialist revolution.",
    ],
  },
  {
    id: "elections",
    title: "Our Position on Elections",
    paragraphs: [
      "Elections in Kenya are presented as the highest form of democracy, yet they are nothing more than a contest between rival wings of the capitalist elite. In every electoral cycle, workers and peasants are told to choose between politicians who differ only in tribe, personality or rhetoric, but are united in defending capitalism and imperialist interests. Billions are spent on campaigns, often financed by local and foreign capital, while hospitals lack medicine and schools lack teachers.",
      "The electoral system is built to exclude the working class. Independent workers\u2019 candidates are obstructed by high fees, bureaucratic hurdles and intimidation. Even when elected, representatives are bound by the limits of the capitalist parliament, where decisions are dictated by big business and imperialist institutions. In many cases, they are simply coerced into serving the exploitative machinery of the system. This also includes using them as poster personalities to create the false impression that individuals from the working masses can be elected and bring about change from \u201cwithin the system.\u201d Hence, elections under capitalism cannot deliver real change, because the state itself is an instrument of the ruling class. Even if, under the pressure of a mass upsurge, a working-class party comes to power through elections within the confines of a bourgeois state, it is doomed to fail. The history of the world is replete with such examples.",
      "This does not mean that revolutionaries ignore elections or should simply boycott them. For us, the question of elections and the bourgeois parliament is not one of ideology or principle, but purely of tactics. The same applies to other organs of democracy and instruments of bargaining and reform within the bourgeois system, including trade unions. In this regard, we consider Lenin\u2019s Left-Wing Communism: An Infantile Disorder an important guide, even more than a hundred years after its publication.",
      "We approach elections as a tactical arena - utilizing them to expose the bankruptcy of bourgeois parties, to propagate socialist ideas, to fight for meaningful reforms where possible, and to unite the working class under our revolutionary program. Parliament, for us, is but one front in the wider struggle for workers\u2019 power. There can, of course, be circumstances in which we must reject or boycott the bourgeois electoral process. Once again, it is a tactical question, one that can only be decided in light of the concrete conditions.",
      "In any case, we reject illusions that change can come through parliament alone. The emancipation of the working class will not be won at the ballot box, but in the streets, in the workplaces, and in the creation of new organs of popular power.",
      "Our position is clear: no trust in capitalist parties, no illusions in electoral pacts, and no compromise with the ruling elite and their politics. We fight to build the political independence of the working class, which is the fundamental condition for a successful socialist revolution.",
    ],
  },
  {
    id: "tasks",
    title: "Our Tasks and Organization",
    paragraphs: [
      "The crisis of imperialist capitalism places urgent tasks before revolutionaries in Kenya. Our central task is the building of a revolutionary party rooted in the workers, peasants, students, women and oppressed communities. This party must not be a mere electoral machine, nor a club of intellectuals, nor a dry bureaucratic apparatus devoid of ideas, discussion and culture. It must be an instrument of class struggle - democratically centralist, disciplined and guided by Marxist-Leninist theory and practice.",
      "Our organization must train militants who can intervene in workplaces, schools, unions and communities to link daily struggles with the wider and long-term fight for socialism. We must combat reformism, opportunism and sectarianism, which disarm the working class and delay its emancipation. We must also ensure that our organization reflects the diversity of the working class, with women, youth and members of oppressed groups forming an integral part of its leadership.",
      "We understand that revolution cannot be made in isolation. That is why we build internationalist ties through the International Socialist League, to which we commit ourselves as the Kenyan section. By coordinating our efforts with comrades across Africa and the world, we strengthen the global struggle for socialism and ensure that our victories are not reversed by imperialism.",
      "The tasks before us are immense, but so is the potential of the Kenyan working class and the oppressed masses. Strikes, protests and uprisings show that the people are not willing to suffer in silence. What is missing is a revolutionary leadership that can channel this anger into a conscious fight for power.",
      "Our program is not a utopia. It is a guide to action. We call on workers, peasants, students and all oppressed people to join us in building the Permanent Revolutionary Congress, to fight together for a socialist Kenya, a socialist Africa, and a socialist world. Only then can humanity be freed from exploitation, oppression and war.",
    ],
  },
  {
    id: "transitional",
    title: "Key Demands of Our Transitional Program",
    paragraphs: [
      "In the struggle for socialist revolution, the key demands of our transitional program include:",
    ],
    bullets: [
      "The call for a constituent assembly composed of genuine representatives of the working people, to discuss how to reorganize the country based on the most urgent economic, political and social needs of the workers and other exploited and oppressed sectors.",
      "Salaries that cover the family basket of all workers and that must be indexed to inflation.",
      "All basic necessities, including education and healthcare, must be treated as fundamental human rights and provided free of charge at the point of delivery.",
      "Working hours must be gradually reduced, without salary reduction, with at least two weekly holidays for every worker.",
      "Child labor must be completely abolished.",
      "Initiate an emergency housing plan under which the state undertakes the construction of new flats and housing units, ensuring decent housing for all working-class families at a cost not exceeding one-tenth of their income.",
      "Full transparency of all international agreements. All trade, investment and infrastructure deals must be subject to public scrutiny. Any secret agreements with imperialist powers or other states must be exposed and annulled if they undermine the interests of the working masses.",
      "Any treaties or arrangements concerning infrastructure development, industrialization, or technology transfer must be fully transparent, with all clauses published for open discussion and democratic control.",
      "Foreign investment and trade must be stripped of their exploitative character and transformed into tools of public welfare subject to the democratic oversight and approval of workers, peasants and local communities through their representative organs.",
      "An end to all forms of privatization and downsizing. All local and imperialist corporate assets - beginning with banks, key services and major industries - must be expropriated and placed under the democratic control and management of the workers.",
      "Put an end to all practices of production, transportation and consumption that harm the environment. Promote an affordable, efficient and comprehensive system of public transport capable of gradually replacing private vehicles.",
      "Expropriation of imperialist assets and a refusal to repay all imperialist loans.",
      "The struggle against imperialist oppression must be waged on irreconcilable class lines.",
      "All landed estates must be nationalized and redistributed among landless and poor peasants. Promote collective farming and bring about an agricultural revolution based on modern scientific and technological methods.",
      "Employment must be recognized as the responsibility of the state. In cases of unemployment, an allowance equal to the minimum wage must be provided.",
      "Abolish the class-based education system and ensure free, secular and scientific education at all levels.",
      "Immediately lift all restrictions on workplace and campus unionization.",
      "Grant the right to vote at the age of sixteen.",
      "Abolish all reactionary norms, practices and laws against women. Ensure equal rights and representation for working women in all sectors. Provide six months of fully paid maternity leave. Abolish the division between domestic and industrial labor.",
      "Guarantee equal rights for all religious and ethnic minorities.",
      "Ensure the complete separation of religion from state affairs.",
      "Recognize the right of oppressed nations to self-determination and link national liberation movements to the class struggle.",
      "Abolish the commission system and all colonial-era practices within the armed forces. Ensure equal pay and privileges for officers and soldiers. All officers must be elected through committees of soldiers.",
      "Put an end to arms races and rearmament drives. Abolish nuclear weapons in the hands of capitalists.",
      "Reject all imperialist blocs - whether Western or Eastern. Base foreign policy on class solidarity. End imperialist interference in other countries and withdraw all support for reactionary regimes. Reject imperialist subservience and chauvinistic nationalism in foreign affairs.",
      "Link the Kenyan workers\u2019 struggle to the international labor movement and support the fight for world socialism.",
      "For a workers\u2019 government through democratically elected workers\u2019 councils.",
    ],
  },
];

const FullProgram = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/program"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Programmatic Bases
          </Link>

          <div className="text-center mb-12">
            <RedStar className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">Full Document</p>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Program of the Permanent Revolutionary Congress
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The complete founding program, adopted at the inaugural congress of the PRC.
            </p>
            <a
              href={PDF_URL}
              download
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 border-2 border-primary text-primary font-bold uppercase tracking-wider text-xs hover:bg-primary hover:text-primary-foreground transition"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
          </div>

          <nav className="mb-12 border-y-2 border-border py-6">
            <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-3">Contents</p>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm list-decimal list-inside">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-foreground hover:text-primary transition">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="space-y-14">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6 border-l-4 border-primary pl-4">
                  {s.title}
                </h2>
                <div className="space-y-5">
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="text-foreground/90 leading-relaxed text-[15px] md:text-base">
                      {p}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="space-y-3 pl-2">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 text-foreground/90 leading-relaxed text-[15px] md:text-base">
                          <span className="text-primary font-black mt-1">●</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </article>

          <div className="mt-16 border-t-2 border-border pt-8 text-center">
            <p className="text-sm uppercase tracking-[0.2em] font-bold text-primary mb-2">
              Workers of the world, unite!
            </p>
            <Link
              to="/join"
              className="inline-flex items-center justify-center gap-2 mt-4 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:bg-primary/90 transition"
            >
              Join the PRC
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FullProgram;