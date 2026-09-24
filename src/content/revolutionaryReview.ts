import kenyaProtestsAsset from "@/assets/kenya-2024-protests.asset.json";
import nairobiBodaAsset from "@/assets/boda-boda-rider-nairobi.asset.json";

export interface ReviewSource {
  label: string;
  url: string;
}

export interface ReviewArticle {
  number: string;
  title: string;
  standfirst: string;
  author: string;
  image: string;
  imageAlt: string;
  imageCredit?: string;
  imageSource?: string;
  body: string[];
  pullQuote: string;
  sources: ReviewSource[];
}

const kenyaProtestsPhoto = kenyaProtestsAsset.url;
const nairobiBodaPhoto = nairobiBodaAsset.url;

export interface ReviewIssue {
  issueNumber: number;
  volume: number;
  month: string;
  title: string;
  slug: string;
  subtitle: string;
  editorial: string[];
  pdfUrl: string;
  articles: ReviewArticle[];
}

export const inauguralIssue: ReviewIssue = {
  "issueNumber": 1,
  "volume": 1,
  "month": "September 2026",
  "title": "Politics at the Breaking Point",
  "slug": "kenya-at-the-crossroads",
  "subtitle": "Power, repression and working-class resistance in Kenya, Africa and the world",
  "pdfUrl": "/downloads/revolutionary-review-issue-1.pdf",
  "editorial": [
    "This issue goes to press as political tensions sharpen in Kenya and far beyond it. The approach of the 2027 election has accelerated elite realignments while organised violence, police repression and the cost-of-living crisis narrow the space available to workers and young people. The daily news presents these developments as separate dramas. They are, in fact, connected by the struggle over who will pay for a deepening crisis of capitalism.",
    "Four national articles examine the immediate Kenyan situation: attacks on opposition and civic meetings, renewed pressure on household budgets, the unfinished political work of the Gen Z uprising, and the manoeuvres of establishment politicians ahead of 2027. Our Africa article considers the Alliance of Sahel States under imperialist pressure without giving political support to military rule. Our international article traces how war against Iran is transmitted through fuel prices and food costs to working people across continents.",
    "The Revolutionary Review does not offer neutral commentary. It begins from the interests of the working class and the oppressed. But a revolutionary conclusion must rest on facts, not slogans. The task is to understand the politics of the day in order to intervene in them: to unite immediate resistance with the construction of an independent socialist movement capable of contesting power."
  ],
  "articles": [
    {
      "number": "01",
      "title": "Violence Before the Ballot",
      "standfirst": "Organised attacks on meetings and rallies expose how quickly Kenya’s electoral competition can move from parliamentary manoeuvre to coercion.",
      "author": "PRC Editorial Board",
      "image": "/images/protest-3.jpg",
      "imageAlt": "Demonstrators confronting political repression",
      "pullQuote": "Democratic rights are safest when workers defend them through their own mass organisations, not when they are entrusted to rival wings of the state.",
      "body": [
        "Kenya is formally eleven months from the general election scheduled for 10 August 2027, yet the struggle over the political terrain is already becoming violent. Human Rights Watch reported on 11 September that organised gangs had attacked civil-society gatherings and opposition rallies over the preceding months, killing at least six people and injuring dozens. Witnesses described attackers armed with clubs, whips and machetes, and a pattern of inadequate police protection and failed accountability.",
        "These allegations require independent investigation and prosecution. But the political meaning is already clear. When meetings can be broken up by force while those responsible expect impunity, the democratic rights of the whole working class are threatened. Today the target may be an opposition rally, a civic forum or a journalist. Tomorrow the same methods can be turned against a strike meeting, a tenants’ organisation or a socialist campaign.",
        "The established opposition will answer by demanding that the state impartially police the contest. Workers should support every concrete demand for accountability while recognising the limit of that appeal. The police, courts and administration do not float above society. They are institutions of a capitalist state whose central function is to protect property, political order and the continuity of rule. Their conduct reflects struggles within the elite as well as the pressure of mass resistance from below.",
        "The defence of democratic space therefore cannot be subcontracted to politicians who mobilise the public only when their own route to office is blocked. Trade unions, youth organisations, women’s groups and community movements should establish joint democratic defence committees. These bodies can document attacks, organise legal and medical support, protect meetings through disciplined mass participation and resist attempts to divide people along ethnic lines.",
        "Such organisation must remain politically independent of both government and opposition coalitions. The freedom to assemble, speak and organise is not an ornament. It is the air that every struggle over wages, land, services and state violence needs in order to breathe. A mass workers’ party would defend these rights consistently while exposing every faction that treats democracy as a weapon to use against its rivals and discard when inconvenient.",
        "The danger before 2027 is not only that violence could distort an election. It is that fear could atomise the forces capable of changing society. The answer is solidarity across every threatened meeting and movement, combined with a programme that transfers political power from competing capitalist alliances to the organised majority."
      ],
      "sources": [
        {
          "label": "Human Rights Watch, Kenya: Organized Gang Attacks in Lead-Up to Elections, 11 September 2026",
          "url": "https://www.hrw.org/news/2026/09/11/kenya-organized-gang-attacks-in-lead-up-to-elections"
        }
      ]
    },
    {
      "number": "02",
      "title": "The Price Shock Is Political",
      "standfirst": "Fuel, freight, taxes and debt are turning global instability into another assault on Kenyan households and small traders.",
      "author": "Economic Affairs Desk",
      "image": nairobiBodaPhoto,
      "imageAlt": "A boda boda rider carrying a passenger on a Nairobi road",
      "imageCredit": "Tmaokisa, CC BY-SA 4.0",
      "imageSource": "https://commons.wikimedia.org/wiki/File:Boda_Boda_rider_in_Nairobi.jpg",
      "pullQuote": "Every rise in transport and food costs poses the same class question: must living standards fall so debt and profit remain protected?",
      "body": [
        "The cost-of-living crisis is again becoming the central fact of Kenyan politics. Data reported in August by the Kenya Freedom Index counted 1,292 protests between January 2025 and June 2026, with economic grievances the leading cause. In the first half of 2026 alone, the study recorded 453 protests, a rise of 29 percent over the comparable period. Behind the statistics are households forced to choose between food, rent, transport, school fees and healthcare.",
        "Pressure is arriving through several channels at once. Small traders in Nairobi protested after a customs valuation increase raised the benchmark applied to consolidated imported containers. International tanker rates have also climbed sharply amid war and disruption in the Middle East, threatening a country that imports all its petroleum by sea. Higher fuel costs spread immediately through matatu fares, electricity, farm inputs and the price of every good carried by road.",
        "Government presents each increase as a technical adjustment: a global price, a revenue requirement or an administrative correction. Taken together, they form a political programme. Kenya’s debt obligations and dependence on imported energy allow international finance and commodity markets to transmit their crises directly into workers’ kitchens. Domestic capital then protects its margins by passing costs downward.",
        "The anger of traders is real, but the interests represented within that category are mixed. A large importer and a street vendor do not occupy the same position. The working class should support small traders and informal workers against ruinous levies while rejecting demands that merely shift the tax burden onto employees or consumers. The alternative is to open company accounts, tax accumulated wealth and place major banks, energy importers and logistics firms under democratic public control.",
        "Immediate demands can organise resistance: automatic wage and benefit increases tied to the real cost of living; lower fares through a publicly owned transport system; publication of fuel-pricing calculations; cancellation of punitive taxes on basic goods; and a workers’ and community audit of public debt. These measures point beyond relief toward control over the economic decisions now made by creditors, ministries and monopolies.",
        "Protests have repeatedly forced retreats, but isolated explosions allow the government to regroup. A national cost-of-living campaign led by unions and accountable local committees could unite employed workers, unemployed youth, small farmers and informal traders. The issue is not simply what prices will be next month. It is whether the economy exists to secure profit and debt service or to meet human need."
      ],
      "sources": [
        {
          "label": "The Star, cost of living drives protests, August 2026",
          "url": "https://www.the-star.co.ke/news/2026-08-15-cost-of-living-drives-protests-as-ruto-economic-record-comes-under-fire"
        },
        {
          "label": "Business Daily, oil tanker costs pressure fuel prices, 23 September 2026",
          "url": "https://www.businessdailyafrica.com/bd/economy/record-oil-tanker-costs-brew-up-fresh-pressure-on-fuel-prices-5606188"
        }
      ]
    },
    {
      "number": "03",
      "title": "Gen Z: From Revolt to Organisation",
      "standfirst": "Two years after the Finance Bill uprising, the courage of a generation remains a force. Its central challenge is political organisation.",
      "author": "Youth Commission",
      "image": kenyaProtestsPhoto,
      "imageAlt": "Protesters in Nairobi during Kenya's 2024 Finance Bill demonstrations",
      "imageCredit": "Capital FM Kenya, CC BY 3.0",
      "imageSource": "https://commons.wikimedia.org/wiki/File:Kenya_2024_protests_(1).jpg",
      "pullQuote": "Spontaneity opened the door. Only democratic organisation, a programme and roots in the working class can carry the struggle through it.",
      "body": [
        "The June anniversary returned Kenya to the central question opened by the youth uprising: what becomes of a movement after it proves that fear can be broken? The 2024 struggle forced withdrawal of the Finance Bill and shattered the claim that young people were passive or permanently divided by ethnicity. Anniversary demonstrations in 2026 showed that unemployment, police violence, corruption and the cost of living remain unresolved.",
        "The state’s answer has combined repression with efforts to exhaust and fragment the movement. Heavy police deployments, arrests and restrictions on assembly seek to raise the personal cost of participation. At the same time, government and opposition figures compete to praise the youth, recruit visible activists and translate popular anger into support for familiar electoral vehicles.",
        "The movement’s decentralised character was a strength against leaders who might have traded it away. It also created a limit. A hashtag can identify a grievance and summon a crowd, but it cannot settle strategy, elect accountable negotiators, sustain defence work or decide how economic power should be reorganised. When no democratic movement structures exist, unaccountable influencers, NGOs and politicians fill the vacuum.",
        "Trotskyism does not counterpose a party to living mass struggle. A revolutionary party earns authority inside that struggle by learning from it, telling the truth and helping participants generalise their experience. Youth committees should be built in campuses, neighbourhoods and workplaces, with elected and recallable representatives. They should link with unions rather than treating organised workers as an old world irrelevant to digital mobilisation.",
        "This alliance matters because young people experience the same crisis in different forms: unemployment before a job, exploitation inside it and precarity throughout. Workers possess strategic power at the points where transport, communications, healthcare, education and production can be stopped. Youth bring energy, technological skill and a refusal of inherited political loyalties. Together they can move from protest pressure toward an alternative authority.",
        "The martyrs of the uprising are not honoured by anniversary ritual alone. Their struggle demands a programme: jobs through a shorter working week without loss of pay, free education and healthcare, an end to police impunity, cancellation of illegitimate debt and public ownership of the commanding heights under workers’ control. The unfinished task is to build the organisation capable of fighting for it."
      ],
      "sources": [
        {
          "label": "DW, Kenya’s Gen Z protests still echo two years on, 25 June 2026",
          "url": "https://www.dw.com/en/kenyas-gen-z-protests-still-echo-two-years-on/a-77702705"
        },
        {
          "label": "Al Jazeera, Kenya braces for return of Gen Z protests, 24 June 2026",
          "url": "https://www.aljazeera.com/features/2026/6/24/kenya-braces-for-return-of-gen-z-protests-how-did-they-begin"
        }
      ]
    },
    {
      "number": "04",
      "title": "The Opposition Carousel",
      "standfirst": "The contest over candidates and coalitions is intensifying, but no establishment combination offers a break with austerity.",
      "author": "Political Bureau",
      "image": "/images/congress-presentation.jpg",
      "imageAlt": "Delegates discussing a political report",
      "pullQuote": "Changing the personnel who administer capitalism is not the same as changing which class holds power.",
      "body": [
        "Kenyan opposition politics is entering another season of declarations, retreats and bargaining over a joint presidential ticket. Reports in late September described manoeuvres around Kalonzo Musyoka, Rigathi Gachagua, Edwin Sifuna and other figures, while court decisions reopened space for former president Uhuru Kenyatta to remain active in party politics. Each move is presented as decisive for the country’s future.",
        "The personal rivalries are real, but their prominence conceals the narrow political distance between the competing camps. None questions private control of the banks, major industries and large estates. None proposes to break the authority of international creditors. Their disagreements concern who can assemble the winning regional coalition and who will control the state apparatus after 2027.",
        "Workers understandably want to remove a government associated with taxation, repression and declining living standards. That desire can make the strongest available opposition candidate appear to be the only practical choice. Kenya’s history shows the trap. Establishment rivals condemn abuses while outside government, then reproduce the same economic priorities and coercive institutions when their turn arrives.",
        "An independent working-class position does not mean indifference to struggles inside the electoral arena. Socialists should defend fair access, oppose violence, challenge ethnic incitement and use elections to reach millions with a programme. But candidates claiming to represent workers must be selected and controlled by workers’ organisations, take no more than a skilled worker’s wage and remain subject to recall.",
        "The necessary coalition is not a pact among prominent politicians. It is an alliance of workers, unemployed youth, women, small farmers and the urban poor around demands that confront capital: a living wage, jobs for all, free public services, land for those who work it, and nationalisation of banks and monopolies under democratic control. Such a bloc would reorganise politics around class rather than elite succession.",
        "The carousel will continue because access to the presidency controls enormous patronage and economic power. The working class must refuse the role of passenger. Its task is to build its own vehicle: a revolutionary party rooted in daily struggles and directed toward a workers’ government."
      ],
      "sources": [
        {
          "label": "The Star, Kalonzo plots opposition ticket, 23 September 2026",
          "url": "https://www.the-star.co.ke/news/2026-09-23-kalonzo-plots-opposition-ticket-grab-wants-sifuna-as-running-mate"
        },
        {
          "label": "The Star, court rules retired presidents may engage in politics, 21 September 2026",
          "url": "https://www.the-star.co.ke/news/2026-09-21-court-retired-presidents-free-to-engage-in-politics"
        }
      ]
    },
    {
      "number": "05",
      "title": "The Sahel Between Imperialism and Military Rule",
      "standfirst": "The Alliance of Sahel States faces renewed Western pressure, but sovereignty cannot be secured without democratic power from below.",
      "author": "Africa Desk",
      "image": "/images/gen-imperialism-africa.jpg",
      "imageAlt": "African workers resisting imperial domination",
      "pullQuote": "Opposition to imperialist intervention must be joined to the independent organisation of workers against every ruling elite.",
      "body": [
        "Burkina Faso, Mali and Niger have deepened cooperation through the Alliance of Sahel States after breaking with French military domination and withdrawing from ECOWAS. In September the three governments signed a further cross-border cooperation agreement. At the same time, political forces in the United States have renewed demands for sanctions, security intervention and a larger counterterrorism role in the region.",
        "Workers across Africa have every reason to oppose another imperialist intervention. Decades of French and United States military involvement did not end jihadist violence or poverty. They protected strategic influence, mining interests and compliant governments while ordinary people paid through displacement, insecurity and underdevelopment. Counterterrorism became a permanent justification for foreign bases and political tutelage.",
        "Yet opposition to imperialism cannot mean political support for military governments. Officers who speak the language of sovereignty still stand above the population through unelected state machines. Restrictions on unions, parties, media or popular organisation weaken the only social force capable of defeating both domestic reaction and external domination. Sovereignty exercised by a barracks is not sovereignty exercised by workers and peasants.",
        "The national bourgeoisie cannot complete the democratic and anti-imperialist tasks promised by independence. It is economically entangled with global capital and frightened of mass mobilisation at home. This is the permanent-revolution problem in concrete form: land reform, national unity, democratic rights and freedom from imperialism can be secured only when the working class leads the oppressed toward socialist power.",
        "Workers in the Sahel need independent unions and parties, elected committees in workplaces and communities, full democratic rights, and public control over gold, uranium and other resources. Foreign bases and military agreements should be ended. Secret mining contracts must be opened, and the wealth extracted from the region directed to food security, health, education, transport and ecological repair.",
        "The answer to sanctions or attack is continent-wide solidarity, not diplomatic dependence on a rival great power. African workers must oppose intervention from Washington, Paris, Moscow or any other capital while building direct links across borders. A voluntary socialist federation of Africa would place regional cooperation on a democratic foundation stronger than either ECOWAS pressure or military command."
      ],
      "sources": [
        {
          "label": "Powers of Africa, AES cross-border cooperation treaty, 22 September 2026",
          "url": "https://powersofafrica.com/article/4205/aes-new-treaty-to-strengthen-cross-border-cooperation"
        },
        {
          "label": "Black Agenda Report, US pressure on Mali and AES, 23 September 2026",
          "url": "https://www.blackagendareport.com/us-hands-mali-us-hands-aes-us-out-africa-and-shut-down-africom"
        }
      ]
    },
    {
      "number": "06",
      "title": "War Abroad, Austerity Everywhere",
      "standfirst": "The widening war around Iran is paid for far beyond the battlefield through fuel shocks, food prices and attacks on working-class living standards.",
      "author": "International Desk",
      "image": "/images/gen-workers-government.jpg",
      "imageAlt": "International workers marching against war",
      "pullQuote": "The struggle against war becomes material when workers refuse to produce, transport and pay for the machinery of destruction.",
      "body": [
        "The United States–Israeli war against Iran has entered its seventh month. Renewed attacks and disruption around the Strait of Hormuz have driven oil and shipping costs upward again. The consequences do not remain in military communiqués. They arrive in the price of diesel, electricity, fertiliser, transport and food across countries far from the battlefield, including Kenya.",
        "Every government involved presents its actions as defensive. Yet the conflict is shaped by control of energy routes, regional power and the strategic interests of states. Working people in Iran, Israel, the United States and the wider region have no interest in bombardment or escalation. They are asked to surrender lives and living standards for objectives decided by ruling classes and military establishments.",
        "The economic transmission of war exposes the unity of the world capitalist system. A tanker rate set amid fighting in the Gulf becomes a matatu fare in Nairobi. A rise in fuel becomes a rise in bread. Governments then tell workers that wages must remain restrained to prevent inflation, turning the damage created by war and profit into a further demand for sacrifice from below.",
        "Pacifist appeals to the same governments organising the war are insufficient. The power capable of stopping escalation lies with the international working class. Dockers can refuse military cargo. Transport workers can disrupt supply chains. Arms workers can demand conversion to socially useful production. Mass strikes can unite opposition to war with demands against price rises and austerity.",
        "This movement must remain independent of every capitalist camp. Opposition to United States and Israeli aggression does not require political confidence in the Iranian state, just as opposition to Russian invasion does not require support for NATO. Revolutionary internationalism begins from the common interests of workers against all ruling classes, while defending oppressed peoples against imperialist domination.",
        "The alternative is not a return to the unstable peace that prepared the next war. The military budgets, alliances and arms industries are embedded in capitalism’s competition for markets and strategic advantage. Ending war requires a struggle for workers’ governments and a socialist world federation in which resources are planned for human need rather than national rivalry and private profit."
      ],
      "sources": [
        {
          "label": "World Socialist Web Site, global fuel-price fallout from the Iran war, 17 September 2026",
          "url": "https://www.wsws.org/en/articles/2026/09/17/qigm-s17.html"
        },
        {
          "label": "Business Daily, tanker costs and Kenyan fuel prices, 23 September 2026",
          "url": "https://www.businessdailyafrica.com/bd/economy/record-oil-tanker-costs-brew-up-fresh-pressure-on-fuel-prices-5606188"
        }
      ]
    }
  ]
};
