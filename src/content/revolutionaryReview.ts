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
  body: string[];
  pullQuote: string;
  sources: ReviewSource[];
}

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
  issueNumber: 1,
  volume: 1,
  month: "September 2026",
  title: "Kenya at the Crossroads",
  slug: "kenya-at-the-crossroads",
  subtitle: "Youth revolt, austerity and the struggle for working-class power",
  pdfUrl: "/downloads/revolutionary-review-issue-1.pdf",
  editorial: [
    "The Revolutionary Review begins at a decisive moment. Two years after Kenya's youth shook the political establishment, the social grievances that drove millions into struggle remain unresolved. Debt service consumes resources needed in hospitals and schools. Workers are compelled to strike for agreements already signed. Women confront an epidemic of violence while the institutions of the state offer commissions, delayed trials and inadequate protection.",
    "These are not separate failures. They are connected expressions of a capitalist order that subordinates life to profit and the country to international finance. The spontaneous courage of the Gen Z uprising demonstrated the power of mass action, but courage alone cannot replace organization, programme and leadership. The task is to unite youth anger with the organized power of workers, poor farmers, women and oppressed communities.",
    "This first issue examines immediate struggles while arguing for an independent socialist alternative. Our aim is neither detached commentary nor election-season manoeuvring. It is to clarify the forces at work, preserve the lessons of struggle and help build a revolutionary party capable of carrying those struggles through to workers' power."
  ],
  articles: [
    {
      number: "01",
      title: "Two Years After the Uprising",
      standfirst: "Kenya's youth broke the spell of fear. The unanswered question is how spontaneous revolt can become organized power.",
      author: "PRC Editorial Board",
      image: "/images/gen-genz-uprising.jpg",
      imageAlt: "Young demonstrators marching together",
      pullQuote: "The uprising revealed the power of the masses. Its next stage requires democratic organization rooted in workplaces, campuses and neighbourhoods.",
      body: [
        "On 25 June 2024, a youth-led movement against the Finance Bill crossed a historic threshold. Parliament was breached, the proposed tax law was withdrawn, and a generation that had been described as apathetic demonstrated that collective action could force the state to retreat. The movement's slogans widened rapidly from rejection of a single bill to condemnation of corruption, police violence, unemployment and the whole political order.",
        "The repression was severe. Human rights reporting recorded scores of deaths during the 2024 unrest, while families continued to demand answers for protesters who were killed, abducted or remained missing. On the second anniversary in June 2026, police again used barricades, tear gas, water cannon and mass arrests against commemorations. These are verified events. They show that the state treats even public mourning as a threat when it recalls the independent power of the masses.",
        "A Trotskyist analysis begins not by lecturing the youth about their anger, but by recognizing its revolutionary potential. The uprising cut across ethnic divisions deliberately cultivated by ruling-class parties. It spread without permission from official opposition leaders. It exposed a parliament willing to impose the demands of creditors while ordinary households faced rising prices and precarious work.",
        "Yet spontaneity, however heroic, has limits. A movement coordinated through social media can mobilize rapidly, but it cannot by itself settle questions of programme, accountable leadership and state power. In the absence of durable democratic structures, liberal NGOs, aspiring politicians and established opposition figures can redirect a movement toward negotiations, commissions or the next election. The ruling class then regroups while repression isolates the most determined activists.",
        "The answer is not a self-appointed elite. It is organization from below: elected and recallable committees in workplaces, campuses, informal settlements and counties; defence campaigns for detained activists; links between unemployed youth and the trade unions; and a national congress of struggle capable of deciding demands and action. Workers possess social power because transport, healthcare, education, logistics and production cannot function without their labour.",
        "The Gen Z revolt opened a new period in Kenyan politics. Its martyrs must be honoured not through ritual speeches by the same establishment that defended austerity, but by completing the struggle they began. The choice is between repeated explosions followed by exhaustion, or the patient construction of an independent revolutionary party rooted in the working class and committed to a workers' government."
      ],
      sources: [
        { label: "Associated Press, Kenya protests and withdrawal of the Finance Bill, June 2024", url: "https://apnews.com/article/kenya-protests-president-taxes-economy-8759a7aaaf63483caadba0f89ea1305f" },
        { label: "BBC, second-anniversary commemorations and arrests, June 2026", url: "https://www.bbc.com/news/articles/cgqjl8kj8wpo" },
        { label: "Human Rights Watch, World Report 2026: Kenya", url: "https://www.hrw.org/world-report/2026/country-chapters/kenya" }
      ]
    },
    {
      number: "02",
      title: "Debt Is a Class Question",
      standfirst: "Kenya's fiscal crisis is presented as a national sacrifice, but workers and the poor are ordered to pay while wealth remains protected.",
      author: "The Revolutionary Review",
      image: "/images/gen-imperialism-africa.jpg",
      imageAlt: "Illustration of African workers breaking chains",
      pullQuote: "A debt audit is not an accounting exercise. It asks who borrowed, who profited and why the majority should pay.",
      body: [
        "Every budget season is accompanied by the same warning: the state has no room to manoeuvre. Debt repayments must be honoured, revenue must rise and public spending must be restrained. This language presents political decisions as neutral arithmetic. In reality, a budget is a statement of class priorities.",
        "Kenya's return to negotiations with the International Monetary Fund and World Bank continues a cycle familiar across the Global South. Loans are offered to stabilize a crisis produced by previous borrowing, unequal trade and a narrow domestic tax base. In return come demands for higher consumption taxes, reduced subsidies, privatization and limits on public wages. The burden falls on those least able to bear it.",
        "Workers pay through VAT and levies on everyday goods. Patients pay through shortages and fees. Students pay through higher costs and inadequate facilities. Young people pay through unemployment and migration. Meanwhile, major fortunes, landholdings and profitable corporations remain shielded by exemptions, avoidance and political influence. The language of shared sacrifice conceals a transfer from labour to capital.",
        "Trotskyists reject both nationalist fantasy and passive submission to creditors. Kenya cannot escape imperialist domination by changing lenders or appealing for kinder terms while the same capitalist relations remain intact. Nor can debt simply be discussed as a moral problem detached from the state that contracted it and the classes that benefited.",
        "The labour movement should demand full publication of loan agreements and a democratic audit conducted by elected representatives of workers, communities and independent experts. Debts incurred without public benefit, through corruption or to finance repression should be repudiated. Banks and major financial institutions should be brought into public ownership under workers' control so that savings and credit serve social need.",
        "Such measures will provoke resistance from local capital and international finance. That is precisely why the fight cannot stop at technical reform. A workers' government would redirect resources toward universal healthcare, public education, housing, water and decent jobs, while appealing to workers across Africa and internationally for common action against debt bondage. The resources exist. The issue is which class controls them."
      ],
      sources: [
        { label: "The Elephant, Kenya's austerity loop, April 2026", url: "https://www.theelephant.info/analysis/2026/04/02/kenyas-austerity-loop-debt-discontent-and-the-high-cost-of-mediocrity/" },
        { label: "International Monetary Fund, Kenya country information", url: "https://www.imf.org/en/Countries/KEN" }
      ]
    },
    {
      number: "03",
      title: "The Health Service on the Picket Line",
      standfirst: "The nurses' strike showed that safe care and decent working conditions are one struggle, not competing demands.",
      author: "Workers' Correspondence",
      image: "/images/workshop-1.jpg",
      imageAlt: "Workers meeting in a community hall",
      pullQuote: "Patients do not suffer because nurses strike. Both patients and health workers suffer because the service is denied resources.",
      body: [
        "For forty-three days between 29 July and 9 September 2026, nurses and midwives withheld their labour over the failure to implement a collective bargaining agreement dating from 2017. The dispute exposed a brutal contradiction: officials praise health workers as essential, then plead budget constraints when those workers demand agreed pay, staffing and conditions.",
        "The strike had grave consequences for patients, including reported preventable maternal and neonatal deaths. Those tragedies cannot be used to blame nurses. A service that becomes unsafe when exhausted workers resist is already unsafe. Responsibility lies with national and county authorities that allowed an agreement to remain unimplemented for nine years and permitted chronic shortages to become normal.",
        "Devolution was promoted as a way to bring services closer to the people. In healthcare it has also enabled an endless transfer of blame. Counties point to inadequate national funding. The national government points to county management. Workers are divided among employers and bargaining structures while patients confront an unequal patchwork of services.",
        "The threat by doctors to join the nurses was therefore politically important. United action across professional grades could break the attempt to isolate one union and could draw patients and communities into a common campaign. Healthcare workers need elected strike committees with control over negotiations, regular mass meetings and full disclosure of any proposed settlement.",
        "A socialist health programme begins with a fully funded, universal and free public service. It requires mass recruitment and training, secure contracts, decent wages, adequate medicines and democratic control by health workers and communities. Private hospital chains and insurance interests profit from public failure; their major facilities should be integrated into a single national service under workers' and users' control.",
        "The return-to-work agreement gave counties additional time to finalize implementation. Workers should judge it by results, not promises. The lesson is broader than one dispute: no union should fight alone. A coordinated public-sector campaign linking health, education, transport and county workers could challenge austerity at its source and make the defence of public services a struggle for power."
      ],
      sources: [
        { label: "Nation, details of the agreement ending the nurses' strike, September 2026", url: "https://nation.africa/kenya/news/details-of-deal-that-ended-nurses-strike-5589852" },
        { label: "Associated Press, Kenya's nurses end a six-week strike, September 2026", url: "https://abcnews.com/Health/wireStory/kenyas-nurses-end-week-strike-after-signing-deal-136304537" }
      ]
    },
    {
      number: "04",
      title: "No Liberation Without Women's Liberation",
      standfirst: "Femicide is not an accidental cruelty at the edge of society. It is sustained by inequality, patriarchal power and institutional impunity.",
      author: "PRC Women's Commission",
      image: "/images/congress-vote2.jpg",
      imageAlt: "Women participating in a political meeting",
      pullQuote: "Women need emergency protection now and a movement capable of transforming the conditions that reproduce violence.",
      body: [
        "By May 2026, the National Police Service had recorded more than 125 femicide cases, while the Presidential Technical Working Group identified major gaps in law, data and enforcement. Behind every statistic is a life taken and a network of relatives, friends and co-workers forced to confront grief, fear and often indifference from the institutions meant to protect them.",
        "Immediate reforms matter. Survivors need properly funded shelters, legal support, emergency income and healthcare. Police must respond rapidly and be held accountable for negligence or abuse. Cases must be investigated competently, and specialized courts must not become another announcement without staff and resources. The presumption of innocence in individual cases must be protected while institutional failures are confronted.",
        "But law alone cannot abolish the social foundations of violence. Women's unpaid domestic labour sustains the economy. Low wages and precarious employment make it harder to leave abusive relationships. Housing shortages, privatized care and unemployment intensify dependence. Patriarchal ideas are reproduced by families, religious authorities, media and state institutions because they help maintain an unequal social order.",
        "A socialist women's movement must therefore be independent of the political establishment while fighting alongside the whole working class. It should organize in workplaces, campuses and neighbourhoods; demand equal pay and secure employment; defend reproductive freedom; fight discrimination against LGBTQ+ people; and insist that trade unions treat gender violence as a workers' issue.",
        "There is no contradiction between urgent protection and revolutionary change. Free twenty-four-hour childcare, social housing, universal healthcare and a living income would materially expand women's freedom. Democratic community and workplace organization can challenge impunity now while building the power needed to transform society.",
        "The launch of the PRC Women's Commission is part of this task. It must not become a ceremonial wing. Its role is to develop women cadres, lead campaigns, bring the demands of the most oppressed into every area of party work and ensure that the fight against patriarchy is inseparable from the fight for socialism."
      ],
      sources: [
        { label: "The Star, police response to femicide cases, May 2026", url: "https://www.the-star.co.ke/news/2026-05-23-125-cases-and-counting-nps-moves-to-curb-femicide-wave" },
        { label: "Dawan Africa, rollout of Gender Justice Courts, July 2026", url: "https://www.dawan.africa/news/koome-orders-full-rollout-of-gender-justice-courts-to-tackle-femicide" }
      ]
    },
    {
      number: "05",
      title: "A Broad-Based Government Against the Working Class",
      standfirst: "When government and official opposition converge around the same economic order, workers need an opposition of their own.",
      author: "Political Bureau",
      image: "/images/congress-presentation.jpg",
      imageAlt: "Political report presented to a congress",
      pullQuote: "The decisive divide is not between rival elite alliances. It is between those who own and those who work.",
      body: [
        "The consolidation of a broad-based arrangement between the governing party and sections of the parliamentary opposition is presented as national unity. But unity around what programme, and in whose interests? The taxes, debt repayments, privatization plans and repressive laws that generated mass opposition are not being dismantled.",
        "Kenyan politics has repeatedly reorganized elite coalitions without changing the conditions of the majority. Leaders denounce each other during elections, then negotiate positions after the vote. Ethnic arithmetic and personality contests obscure a deeper continuity: all major establishment factions defend private ownership of the commanding heights of the economy and dependence on international capital.",
        "The Gen Z movement briefly disrupted this script by rejecting inherited loyalties and directing its anger at the political class as a whole. The answer from above has been repression combined with co-option. A broadened governing coalition seeks to absorb opposition figures, isolate uncompromising activists and prepare another electoral contest in which workers are asked to choose which section of the elite will administer austerity.",
        "Trotskyists do not abstain from elections, but neither do we mistake them for the source of power. We use electoral campaigns to organize, explain a socialist programme and strengthen struggles outside parliament. Any workers' representatives must take only a skilled worker's wage, publish their expenses and remain subject to recall by the organizations that elected them.",
        "The immediate task is an independent political movement based on trade unions, youth organizations, women's struggles, informal-sector workers and poor farmers. It should convene democratic assemblies to agree a programme: jobs for all through a shorter working week with no loss of pay; nationalization of major banks and monopolies under workers' control; free public services; land and agricultural support for those who work it; and an end to state repression.",
        "No rearrangement at the top can substitute for the self-organization of the exploited. The broad-based government demonstrates the narrowness of establishment politics. A mass revolutionary workers' party must demonstrate the alternative."
      ],
      sources: [
        { label: "The Star, 2027 coalition talks, September 2026", url: "https://www.the-star.co.ke/news/2026-09-13-ruto-assures-odm-as-2027-talks-take-shape" },
        { label: "Nation, broad-based leaders and electoral strategy, 2026", url: "https://nation.africa/kenya/news/politics/ruto-to-broad-based-leaders-we-must-win-election-no-other-option--5553296" }
      ]
    },
    {
      number: "06",
      title: "Workers Have No Borders",
      standfirst: "East African labour migration links unemployment at home to exploitation abroad. The answer is organization across borders.",
      author: "International Desk",
      image: "/images/gen-african-working-class.jpg",
      imageAlt: "African industrial workers standing together",
      pullQuote: "Safe migration cannot mean merely regulating the export of poverty. It must mean rights, organization and decent work everywhere.",
      body: [
        "Across East Africa, governments increasingly treat labour migration as an economic strategy. Young people unable to find secure work at home are recruited for domestic, construction, security and service jobs abroad, especially in the Gulf. Remittances support millions of households, but that dependence also reveals the failure of regional economies to provide dignified employment.",
        "In July 2026, the East African Community advanced a regional framework intended to coordinate migration policy and worker protection. Any measure that improves contracts, access to justice or consular support should be defended. Yet official language about safe migration often leaves intact the recruitment agencies, sponsorship systems and employer power that make abuse possible.",
        "Migrant workers can face withheld passports, unpaid wages, confinement, sexual violence and deportation. At home, agencies collect fees and governments celebrate remittance figures. This turns unemployment into an export industry and workers into sources of foreign exchange.",
        "The socialist response is not nationalism or hostility to migrants. Kenyan workers have more in common with Ugandan, Tanzanian, Congolese, Somali and Gulf workers than with Kenyan bosses. Unions should recruit migrant workers regardless of status, build cross-border reporting and legal defence networks, and demand that recruitment agencies open their books to worker inspection.",
        "Regional governments must guarantee enforceable contracts, ban worker-paid recruitment fees, provide emergency repatriation and prosecute abusive agencies. But protection abroad must be joined to a struggle for jobs at home: public works to build housing, schools, hospitals, renewable energy and transport, funded by taking wealth from banks, monopolies and large landowners.",
        "Capital crosses borders freely in search of profit while workers are divided by passports and xenophobia. Permanent revolution gives internationalism a practical meaning: democratic and socialist transformation in Kenya cannot be secured within national limits. It must consciously seek federation with workers' governments across Africa and solidarity with struggles worldwide. Workers have no borders because exploitation is international and liberation must be international too."
      ],
      sources: [
        { label: "IOM, Kampala forum on safer labour migration in East and Horn of Africa", url: "https://www.iom.int/news/kampala-forum-marks-shift-toward-safer-labour-migration-across-east-and-horn-africa" },
        { label: "Burundi Times, EAC regional migration framework, July 2026", url: "https://www.burunditimes.com/eac-unveils-new-migration-framework-to-protect-workers-and-ease-cross-border-employment/" }
      ]
    }
  ]
};
