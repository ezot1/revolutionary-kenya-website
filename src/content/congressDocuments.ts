import type { Article } from "@/content/articles";
import { congressPoliticalPaper } from "@/content/congressPoliticalPaper";

export type CongressBlock =
  | { kind: "heading" | "paragraph"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean };

export type CongressDocument = Article & { description: string; blocks: CongressBlock[]; isMainPaper?: boolean; slug?: string };

export const congressDocuments: CongressDocument[] = [
  congressPoliticalPaper,
  {
    "type": "Congress Document",
    "title": "Political Education Guide of the Permanent Revolutionary Congress",
    "date": "2026-10-07",
    "description": "2026 curriculum, study methods, cadre training and political education responsibilities.",
    "body": "Introduction\n\nPolitical education is a central task of the Permanent Revolutionary Congress. The organization cannot build a strong political force without members who understand society, analyse political developments, and organize collectively.\n\nThis guide is adopted as the PRC’s Political Education Guide for 2026. It establishes the curriculum, study methods, training targets, assessment process, and responsibilities of political education structures.\n\nThe guide builds on the 2026 Marxist School held near Kajiado town. The school used presentations, small-group discussions, plenary reports, practical examples, and collective assessment. Eighteen comrades completed the process and were confirmed as full members.\n\nThe guide applies to all PRC branches, commissions, study circles, and political schools.\n\nPurpose of political education\n\nPolitical education will develop members who can understand political events, explain the organization’s program, and participate in collective work.\n\nThe program will:• Build a common political understanding.• Train members to analyse Kenyan and international developments.• Develop organizers, facilitators, writers, and speakers.• Connect theory to workers’, youth, women’s, and community struggles.• Prepare members to take responsibility in branches and commissions.\n\nPolitical education will combine reading, discussion, writing, public speaking, research, and practical organizing. It will not be reduced to lectures or memorization.\n\nEvery session should help members answer four questions:• What is happening?• Why is it happening?• Which class interests are involved?• What action should the organization take?\n\nCurriculum structure\n\nThe curriculum will have four levels.\n\nLevel One: Introduction\n\nThis level will serve new members, recruits, and comrades with limited political education.\n\nThe topics will include:• The purpose and structure of the PRC.• Capitalism and the production of wealth.• Classes and class interests.• The Kenyan economy and the cost of living.• The state, Parliament, police, courts, and public administration.• Imperialism, debt, and foreign capital.• The theory of permanent revolution.• Workers, youth, women, and oppressed communities.• Trade unions and rank-and-file organization.• Socialism and workers’ power.• Internal democracy and collective discipline.• Practical campaign planning.\n\nMembers should be able to explain the basic political ideas of the organization, contribute to discussions, complete written assignments, and take branch responsibilities.\n\nLevel Two: Member development\n\nThis level will serve members who participate regularly in branch work.\n\nThe topics will include:• Marxist political economy.• The history of workers’ struggles in Kenya.• Land, agrarian relations, and rural poverty.• The national question and ethnic politics.• Women’s liberation and socialist feminism.• Youth and student politics.• Climate justice and ecological crisis.• Digital and platform work.• Transitional demands.• Trade unions and rank-and-file organization.• Trade union bureaucracy.• Media, propaganda, and political communication.• Branch building and recruitment.• Democratic centralism.• Political assessment and self-criticism.• Internationalism and African revolutionary politics.• Strategy and the question of power.\n\nMembers should be able to write political reports, lead study sessions, conduct basic research, recruit new members, and develop campaigns around concrete demands.\n\nLevel Three: Cadre training\n\nThis level will serve members who show consistent participation, practical responsibility, and commitment to collective work.\n\nThe topics will include:• Methods of political analysis.• Program, strategy, and tactics.• United fronts.• Political intervention in mass movements.• Organization under repression.• Leadership and collective responsibility.• Public speaking.• Media work.• Campaign planning and evaluation.• Training new cadre.• Crisis management.• Political communication.• Branch development.• Coordinating work across branches and commissions.\n\nCadres should be able to facilitate study circles, prepare branch plans, lead organizing interventions, write internal reports, resolve disagreements through collective discussion, and train other members.\n\nLevel Four: Annual political school\n\nThe annual political school will bring together members from branches and commissions for intensive study, debate, assessment, and planning.\n\nThe school will cover:• The national and international political situation.• Capitalism and imperialism.• Marxist political economy.• The Kenyan state and class structure.• Permanent revolution.• Workers’ struggles.• Trade union organization.• Women’s liberation.• Youth and student struggles.• Land and rural questions.• Climate and ecological struggles.• Revolutionary organization.• Political strategy.• Program and transitional demands.• Internationalism.• Branch reports.• Collective assessment.• Organizational planning.\n\nThe school should use short presentations, small commissions, plenary reports, practical workshops, branch reports, and collective assessment. Political economy should use real examples, including wages, rent, transport costs, food prices, debt, and workplace conditions.\n\nWeekly study circles\n\nEvery PRC branch shall hold one political education meeting each week. Each branch shall agree on a fixed day, time, and venue.\n\nA weekly session should include:• Attendance and announcements.• A political report.• A main presentation.• Small-group discussion.• Reports from discussion groups.• Conclusions and assignments.\n\nThe reading for each session should be circulated before the meeting. The branch should appoint a facilitator and a note-taker. Responsibilities should rotate so that new members gain experience.\n\nThe secretary shall record attendance, the main points raised, decisions, and assigned tasks. The report shall be submitted to the branch political education coordinator.\n\nStudy circles should use five guiding questions:• What is the main argument?• What evidence supports it?• Which class interests are involved?• How does the issue appear in Kenya?• What practical action follows from the discussion?\n\nPractical study method\n\nEach study session should connect political theory to real conditions. Members should examine issues in workplaces, estates, schools, universities, markets, transport routes, and rural communities.\n\nA session on capitalism can begin with members describing their income, working hours, rent, transport costs, food expenses, and debt. The discussion can then introduce wages, labour power, profit, surplus value, and exploitation.\n\nA session on the state can begin by examining a local problem, such as poor health services, police harassment, or an unavailable public document. Members should identify the responsible authority, the people affected, the relevant demand, and the possible form of collective action.\n\nA session on women’s liberation should examine unpaid care work, gender-based violence, workplace discrimination, and barriers to leadership. The branch should assess its own practice and adopt measures that improve women’s participation and safety.\n\nEvery session should end with a practical assignment. Members may conduct research, write a short report, speak to affected people, attend a public meeting, or help organize a campaign.\n\nTraining targets\n\nEach branch should:• Hold weekly study meetings.• Maintain regular attendance among active members.• Train new facilitators.• Train a political education coordinator.• Complete the relevant curriculum levels.• Produce written political reports.• Organize public political education activities.• Link education to practical campaigns.• Submit regular education reports.\n\nEach active member should:• Attend weekly meetings regularly.• Complete reading assignments.• Lead or co-lead discussions.• Write political reflections.• Complete practical organizing tasks.• Bring new participants to study circles.• Attend the annual political school where possible.• Present an assessment of political and practical development.\n\nEach cadre trainee should:• Facilitate study circles.• Mentor a newer member.• Write a political report.• Lead an organizing intervention.• Prepare a campaign plan.• Complete a self-assessment.• Receive collective feedback.\n\nResponsibilities of the political education committee\n\nThe national political education committee shall:• Prepare study guides.• Maintain a shared physical and digital library.• Hold facilitator training.• Organize the annual political school.• Conduct branch assessments.• Prepare accessible political education materials.• Develop Kiswahili materials where useful.• Coordinate education with the Women’s Commission, youth structures, trade union work, and campaign committees.• Prepare an annual political education report.\n\nEach branch shall appoint a political education coordinator. The coordinator shall prepare the local program, support facilitators, maintain attendance records, collect reports, and communicate branch needs to the national committee.\n\nAssessment and membership development\n\nAssessment shall measure understanding, participation, responsibility, and practical work. It shall not measure memorization alone.\n\nThe assessment process shall consider:• Attendance.• Participation in discussions.• Completion of readings.• Written work.• Public speaking.• Facilitation.• Practical organizing.• Collective conduct.• Ability to analyse political developments.\n\nFull membership shall require consistent participation, political understanding, practical responsibility, and commitment to collective decisions. At the Kajiado school, comrades presented assessments of their past work and proposed tasks for the next period before full membership was confirmed.\n\nAssessment should help members improve. It should identify strengths, gaps, and the next responsibility. It should not become a competition between members.\n\nImplementation\n\nEvery branch shall appoint a political education coordinator, identify members by training level, and set a weekly meeting schedule.\n\nBranches shall begin the relevant curriculum level and submit regular reports. The national committee shall hold facilitator workshops, review participation, and support branches that face difficulties.\n\nThe annual political school shall assess the year’s work and adopt priorities for the following year.\n\nThis guide shall be reviewed regularly. The review shall examine attendance, participation, completed assignments, practical organizing, and the political development of members.\n\nAdoption\n\nThis guide is submitted for adoption as the Political Education Guide of the Permanent Revolutionary Congress for 2026.\n\nOnce adopted, it shall guide political education work across the organization. Every branch, commission, and study circle shall implement it according to local conditions while maintaining the common curriculum, weekly meeting rhythm, reporting system, and assessment standards.\n\nPolitical education shall remain a permanent organizational responsibility. Its purpose is to develop members who can understand, explain, organize, and act. Through weekly study circles, practical assignments, facilitator training, and the annual Kajiado political school, the PRC can build stronger branches, clearer political understanding, and greater collective capacity.",
    "blocks": [
      {
        "kind": "heading",
        "text": "Introduction"
      },
      {
        "kind": "paragraph",
        "text": "Political education is a central task of the Permanent Revolutionary Congress. The organization cannot build a strong political force without members who understand society, analyse political developments, and organize collectively."
      },
      {
        "kind": "paragraph",
        "text": "This guide is adopted as the PRC’s Political Education Guide for 2026. It establishes the curriculum, study methods, training targets, assessment process, and responsibilities of political education structures."
      },
      {
        "kind": "paragraph",
        "text": "The guide builds on the 2026 Marxist School held near Kajiado town. The school used presentations, small-group discussions, plenary reports, practical examples, and collective assessment. Eighteen comrades completed the process and were confirmed as full members."
      },
      {
        "kind": "paragraph",
        "text": "The guide applies to all PRC branches, commissions, study circles, and political schools."
      },
      {
        "kind": "heading",
        "text": "Purpose of political education"
      },
      {
        "kind": "paragraph",
        "text": "Political education will develop members who can understand political events, explain the organization’s program, and participate in collective work."
      },
      {
        "kind": "paragraph",
        "text": "The program will:"
      },
      {
        "kind": "list",
        "items": [
          "Build a common political understanding.",
          "Train members to analyse Kenyan and international developments.",
          "Develop organizers, facilitators, writers, and speakers.",
          "Connect theory to workers’, youth, women’s, and community struggles.",
          "Prepare members to take responsibility in branches and commissions."
        ]
      },
      {
        "kind": "paragraph",
        "text": "Political education will combine reading, discussion, writing, public speaking, research, and practical organizing. It will not be reduced to lectures or memorization."
      },
      {
        "kind": "paragraph",
        "text": "Every session should help members answer four questions:"
      },
      {
        "kind": "list",
        "items": [
          "What is happening?",
          "Why is it happening?",
          "Which class interests are involved?",
          "What action should the organization take?"
        ]
      },
      {
        "kind": "heading",
        "text": "Curriculum structure"
      },
      {
        "kind": "paragraph",
        "text": "The curriculum will have four levels."
      },
      {
        "kind": "heading",
        "text": "Level One: Introduction"
      },
      {
        "kind": "paragraph",
        "text": "This level will serve new members, recruits, and comrades with limited political education."
      },
      {
        "kind": "paragraph",
        "text": "The topics will include:"
      },
      {
        "kind": "list",
        "items": [
          "The purpose and structure of the PRC.",
          "Capitalism and the production of wealth.",
          "Classes and class interests.",
          "The Kenyan economy and the cost of living.",
          "The state, Parliament, police, courts, and public administration.",
          "Imperialism, debt, and foreign capital.",
          "The theory of permanent revolution.",
          "Workers, youth, women, and oppressed communities.",
          "Trade unions and rank-and-file organization.",
          "Socialism and workers’ power.",
          "Internal democracy and collective discipline.",
          "Practical campaign planning."
        ]
      },
      {
        "kind": "paragraph",
        "text": "Members should be able to explain the basic political ideas of the organization, contribute to discussions, complete written assignments, and take branch responsibilities."
      },
      {
        "kind": "heading",
        "text": "Level Two: Member development"
      },
      {
        "kind": "paragraph",
        "text": "This level will serve members who participate regularly in branch work."
      },
      {
        "kind": "paragraph",
        "text": "The topics will include:"
      },
      {
        "kind": "list",
        "items": [
          "Marxist political economy.",
          "The history of workers’ struggles in Kenya.",
          "Land, agrarian relations, and rural poverty.",
          "The national question and ethnic politics.",
          "Women’s liberation and socialist feminism.",
          "Youth and student politics.",
          "Climate justice and ecological crisis.",
          "Digital and platform work.",
          "Transitional demands.",
          "Trade unions and rank-and-file organization.",
          "Trade union bureaucracy.",
          "Media, propaganda, and political communication.",
          "Branch building and recruitment.",
          "Democratic centralism.",
          "Political assessment and self-criticism.",
          "Internationalism and African revolutionary politics.",
          "Strategy and the question of power."
        ]
      },
      {
        "kind": "paragraph",
        "text": "Members should be able to write political reports, lead study sessions, conduct basic research, recruit new members, and develop campaigns around concrete demands."
      },
      {
        "kind": "heading",
        "text": "Level Three: Cadre training"
      },
      {
        "kind": "paragraph",
        "text": "This level will serve members who show consistent participation, practical responsibility, and commitment to collective work."
      },
      {
        "kind": "paragraph",
        "text": "The topics will include:"
      },
      {
        "kind": "list",
        "items": [
          "Methods of political analysis.",
          "Program, strategy, and tactics.",
          "United fronts.",
          "Political intervention in mass movements.",
          "Organization under repression.",
          "Leadership and collective responsibility.",
          "Public speaking.",
          "Media work.",
          "Campaign planning and evaluation.",
          "Training new cadre.",
          "Crisis management.",
          "Political communication.",
          "Branch development.",
          "Coordinating work across branches and commissions."
        ]
      },
      {
        "kind": "paragraph",
        "text": "Cadres should be able to facilitate study circles, prepare branch plans, lead organizing interventions, write internal reports, resolve disagreements through collective discussion, and train other members."
      },
      {
        "kind": "heading",
        "text": "Level Four: Annual political school"
      },
      {
        "kind": "paragraph",
        "text": "The annual political school will bring together members from branches and commissions for intensive study, debate, assessment, and planning."
      },
      {
        "kind": "paragraph",
        "text": "The school will cover:"
      },
      {
        "kind": "list",
        "items": [
          "The national and international political situation.",
          "Capitalism and imperialism.",
          "Marxist political economy.",
          "The Kenyan state and class structure.",
          "Permanent revolution.",
          "Workers’ struggles.",
          "Trade union organization.",
          "Women’s liberation.",
          "Youth and student struggles.",
          "Land and rural questions.",
          "Climate and ecological struggles.",
          "Revolutionary organization.",
          "Political strategy.",
          "Program and transitional demands.",
          "Internationalism.",
          "Branch reports.",
          "Collective assessment.",
          "Organizational planning."
        ]
      },
      {
        "kind": "paragraph",
        "text": "The school should use short presentations, small commissions, plenary reports, practical workshops, branch reports, and collective assessment. Political economy should use real examples, including wages, rent, transport costs, food prices, debt, and workplace conditions."
      },
      {
        "kind": "heading",
        "text": "Weekly study circles"
      },
      {
        "kind": "paragraph",
        "text": "Every PRC branch shall hold one political education meeting each week. Each branch shall agree on a fixed day, time, and venue."
      },
      {
        "kind": "paragraph",
        "text": "A weekly session should include:"
      },
      {
        "kind": "list",
        "items": [
          "Attendance and announcements.",
          "A political report.",
          "A main presentation.",
          "Small-group discussion.",
          "Reports from discussion groups.",
          "Conclusions and assignments."
        ]
      },
      {
        "kind": "paragraph",
        "text": "The reading for each session should be circulated before the meeting. The branch should appoint a facilitator and a note-taker. Responsibilities should rotate so that new members gain experience."
      },
      {
        "kind": "paragraph",
        "text": "The secretary shall record attendance, the main points raised, decisions, and assigned tasks. The report shall be submitted to the branch political education coordinator."
      },
      {
        "kind": "paragraph",
        "text": "Study circles should use five guiding questions:"
      },
      {
        "kind": "list",
        "items": [
          "What is the main argument?",
          "What evidence supports it?",
          "Which class interests are involved?",
          "How does the issue appear in Kenya?",
          "What practical action follows from the discussion?"
        ]
      },
      {
        "kind": "heading",
        "text": "Practical study method"
      },
      {
        "kind": "paragraph",
        "text": "Each study session should connect political theory to real conditions. Members should examine issues in workplaces, estates, schools, universities, markets, transport routes, and rural communities."
      },
      {
        "kind": "paragraph",
        "text": "A session on capitalism can begin with members describing their income, working hours, rent, transport costs, food expenses, and debt. The discussion can then introduce wages, labour power, profit, surplus value, and exploitation."
      },
      {
        "kind": "paragraph",
        "text": "A session on the state can begin by examining a local problem, such as poor health services, police harassment, or an unavailable public document. Members should identify the responsible authority, the people affected, the relevant demand, and the possible form of collective action."
      },
      {
        "kind": "paragraph",
        "text": "A session on women’s liberation should examine unpaid care work, gender-based violence, workplace discrimination, and barriers to leadership. The branch should assess its own practice and adopt measures that improve women’s participation and safety."
      },
      {
        "kind": "paragraph",
        "text": "Every session should end with a practical assignment. Members may conduct research, write a short report, speak to affected people, attend a public meeting, or help organize a campaign."
      },
      {
        "kind": "heading",
        "text": "Training targets"
      },
      {
        "kind": "paragraph",
        "text": "Each branch should:"
      },
      {
        "kind": "list",
        "items": [
          "Hold weekly study meetings.",
          "Maintain regular attendance among active members.",
          "Train new facilitators.",
          "Train a political education coordinator.",
          "Complete the relevant curriculum levels.",
          "Produce written political reports.",
          "Organize public political education activities.",
          "Link education to practical campaigns.",
          "Submit regular education reports."
        ]
      },
      {
        "kind": "paragraph",
        "text": "Each active member should:"
      },
      {
        "kind": "list",
        "items": [
          "Attend weekly meetings regularly.",
          "Complete reading assignments.",
          "Lead or co-lead discussions.",
          "Write political reflections.",
          "Complete practical organizing tasks.",
          "Bring new participants to study circles.",
          "Attend the annual political school where possible.",
          "Present an assessment of political and practical development."
        ]
      },
      {
        "kind": "paragraph",
        "text": "Each cadre trainee should:"
      },
      {
        "kind": "list",
        "items": [
          "Facilitate study circles.",
          "Mentor a newer member.",
          "Write a political report.",
          "Lead an organizing intervention.",
          "Prepare a campaign plan.",
          "Complete a self-assessment.",
          "Receive collective feedback."
        ]
      },
      {
        "kind": "heading",
        "text": "Responsibilities of the political education committee"
      },
      {
        "kind": "paragraph",
        "text": "The national political education committee shall:"
      },
      {
        "kind": "list",
        "items": [
          "Prepare study guides.",
          "Maintain a shared physical and digital library.",
          "Hold facilitator training.",
          "Organize the annual political school.",
          "Conduct branch assessments.",
          "Prepare accessible political education materials.",
          "Develop Kiswahili materials where useful.",
          "Coordinate education with the Women’s Commission, youth structures, trade union work, and campaign committees.",
          "Prepare an annual political education report."
        ]
      },
      {
        "kind": "paragraph",
        "text": "Each branch shall appoint a political education coordinator. The coordinator shall prepare the local program, support facilitators, maintain attendance records, collect reports, and communicate branch needs to the national committee."
      },
      {
        "kind": "heading",
        "text": "Assessment and membership development"
      },
      {
        "kind": "paragraph",
        "text": "Assessment shall measure understanding, participation, responsibility, and practical work. It shall not measure memorization alone."
      },
      {
        "kind": "paragraph",
        "text": "The assessment process shall consider:"
      },
      {
        "kind": "list",
        "items": [
          "Attendance.",
          "Participation in discussions.",
          "Completion of readings.",
          "Written work.",
          "Public speaking.",
          "Facilitation.",
          "Practical organizing.",
          "Collective conduct.",
          "Ability to analyse political developments."
        ]
      },
      {
        "kind": "paragraph",
        "text": "Full membership shall require consistent participation, political understanding, practical responsibility, and commitment to collective decisions. At the Kajiado school, comrades presented assessments of their past work and proposed tasks for the next period before full membership was confirmed."
      },
      {
        "kind": "paragraph",
        "text": "Assessment should help members improve. It should identify strengths, gaps, and the next responsibility. It should not become a competition between members."
      },
      {
        "kind": "heading",
        "text": "Implementation"
      },
      {
        "kind": "paragraph",
        "text": "Every branch shall appoint a political education coordinator, identify members by training level, and set a weekly meeting schedule."
      },
      {
        "kind": "paragraph",
        "text": "Branches shall begin the relevant curriculum level and submit regular reports. The national committee shall hold facilitator workshops, review participation, and support branches that face difficulties."
      },
      {
        "kind": "paragraph",
        "text": "The annual political school shall assess the year’s work and adopt priorities for the following year."
      },
      {
        "kind": "paragraph",
        "text": "This guide shall be reviewed regularly. The review shall examine attendance, participation, completed assignments, practical organizing, and the political development of members."
      },
      {
        "kind": "heading",
        "text": "Adoption"
      },
      {
        "kind": "paragraph",
        "text": "This guide is submitted for adoption as the Political Education Guide of the Permanent Revolutionary Congress for 2026."
      },
      {
        "kind": "paragraph",
        "text": "Once adopted, it shall guide political education work across the organization. Every branch, commission, and study circle shall implement it according to local conditions while maintaining the common curriculum, weekly meeting rhythm, reporting system, and assessment standards."
      },
      {
        "kind": "paragraph",
        "text": "Political education shall remain a permanent organizational responsibility. Its purpose is to develop members who can understand, explain, organize, and act. Through weekly study circles, practical assignments, facilitator training, and the annual Kajiado political school, the PRC can build stronger branches, clearer political understanding, and greater collective capacity."
      }
    ]
  },
  {
    "type": "Congress Document",
    "title": "The Next Stage of Student Struggles in Kenya",
    "date": "2026-10-07",
    "description": "Student democracy, independent organisation and the proposed resolution on university elections.",
    "body": "Student democracy under pressure\n\nKenyan students face a new stage of struggle. The central issue is no longer only access to education, fees, accommodation, or employment. It is also the right to organise, vote, choose representatives, and control institutions that affect student life.\n\nThe suppression of student voting has weakened campus democracy. The response should combine participation, organisation, and political education. The Permanent Revolutionary Congress must therefore adopt a clear resolution: participate in every student election in every university where we have a presence.\n\nUniversity student elections once offered a direct channel for students to choose their representatives. The 2016 amendment to the Universities Act replaced universal suffrage with a delegate system. Students elect delegates, and delegates later elect members of the Students’ Governing Council. This limits direct participation and separates elected leaders from the wider student body.\n\nThe change has produced several problems:\n\n• Most students no longer vote directly for their main representatives.• Candidates focus on a smaller group of delegates instead of the wider student population.• Students find it harder to hold leaders accountable.• Campaigns can become vulnerable to patronage, ethnic mobilisation, and administrative influence.• Many students lose interest because they feel their vote has little effect.\n\nStudent participation already shows signs of weakness. Research on political engagement found that about half of surveyed students had voted in their last campus election, compared with higher participation in national elections. Earlier research at the University of Nairobi found that fewer than 20 percent of students were satisfied with student representation, while only 26 percent considered the last student election free and fair.\n\nThese figures show a political problem. Students are not naturally apathetic. They often participate in protests, meetings, and wider political campaigns. The system discourages them when it blocks direct involvement.\n\nThe suppression of voting does not remove student politics. It pushes politics into less transparent forms. When students cannot exercise power openly through elections, influence shifts towards university managers, wealthy sponsors, political brokers, and small organised groups.\n\nThe meaning of the struggle\n\nThe struggle for student voting is part of a wider struggle for democratic control. Students need representatives who answer to them, not to administrators or external sponsors.\n\nA student union should defend student interests on:\n\n• Fees and funding.• Accommodation and food.• Academic quality.• Sexual harassment and safety.• Disability access.• Disciplinary procedures.• Welfare and mental health.• Political and academic freedoms.\n\nA representative who wins through a small electoral college may not feel pressure from ordinary students. Direct elections create a wider base. They also give students a clearer way to remove leaders who fail.\n\nThe demand for direct voting must therefore be linked to broader democratic demands. Students should fight for transparent voter registers, clear election rules, independent electoral bodies, public counting, accessible appeals, and protection from victimisation.\n\nA court case concerning the University of Nairobi student elections illustrates the seriousness of the issue. Petitioners challenged their exclusion from the nomination and election process scheduled for March 2025. Such disputes show that election rules can determine who receives political rights before voting even begins.\n\nThe movement must defend every student’s right to contest and vote, subject only to clear, lawful, and equal conditions.\n\nWhy participation matters\n\nSome activists may argue that participating in restricted elections gives legitimacy to an undemocratic system. This concern deserves attention. However, refusing to participate can leave the field open to administrators, state-aligned interests, opportunists, and unaccountable candidates.\n\nParticipation does not mean accepting the system as it stands. It means using every available opening to organise students and expose the limits of the existing structure.\n\nThe movement should follow four principles:\n\n• Participate where elections take place.• Organise students around shared demands.• Challenge exclusion and manipulation.• Use election campaigns to build lasting structures.\n\nAn election campaign can become a school of political education. It can help students understand university budgets, disciplinary rules, public funding, labour conditions, and national policy. It can connect campus issues to wider struggles among lecturers, workers, parents, and unemployed youth.\n\nA boycott may reduce visibility. Participation can create a public record of the movement’s strength. It can show how many students support democratic demands. It can also help identify organisers who can continue the struggle after election day.\n\nThe Permanent Revolutionary Congress\n\nThe Permanent Revolutionary Congress should treat student work as a central political task. Universities bring together young people who face high fees, insecure futures, unemployment, social inequality, and political exclusion. They are not separate from the broader working-class struggle. They form an important part of its future leadership.\n\nThe Congress should not approach students as passive supporters. It should work with them as organisers, educators, and decision-makers.\n\nIts next stage should include the following programme:• Map the official election calendar, rules, and nomination procedures.• Recruit candidates through democratic campus meetings.• Publish a common student election platform.• Train candidates and volunteers in organising, public speaking, election law, and digital security.• Build election-monitoring teams.• Record cases of exclusion, intimidation, bribery, and administrative interference.• Defend students facing disciplinary action for lawful political activity.• Coordinate campaigns across universities.• Report publicly on election results and violations.\n\nThe programme must remain independent of university management, political parties, wealthy individuals, and state agencies. External support can easily turn student leaders into instruments of broader political interests. The Congress should disclose all funding and reject conditions that limit student independence.\n\nThe proposed resolution\n\nThe Permanent Revolutionary Congress resolves:\n\n1. That the suppression of direct student voting is an attack on democratic participation in Kenyan universities.\n\n2. That the delegate system weakens accountability by limiting students’ direct role in choosing their representatives.\n\n3. That the movement supports the restoration of universal suffrage in university student elections.\n\n4. That, until direct voting is restored, the movement shall participate in all student elections in every university where it has a presence.\n\n5. That participation shall serve the purpose of organising students around democratic rights, welfare demands, and independent representation.\n\n6. That the movement shall support candidates selected through open and accountable student processes.\n\n7. That all candidates shall sign a public commitment to defend student rights, publish their activities, and report back to students.\n\n8. That the movement shall oppose ethnic discrimination, political patronage, bribery, intimidation, and administrative interference.\n\n9. That the movement shall create a national student election coordination committee to share information, training, legal support, and campaign materials.\n\n10. That the movement shall connect student struggles with those of workers, lecturers, parents, and communities affected by the education crisis.\n\nThis resolution turns participation into a strategy. It rejects both passive acceptance and political withdrawal.\n\nBuilding beyond election day\n\nThe movement must avoid reducing politics to campaigns and voting. Elections provide an entry point. The real work continues afterwards.\n\nStudent representatives should hold regular public assemblies. They should publish financial reports and meeting records. They should consult students before taking major positions. They should create working groups on fees, housing, academic rights, safety, and inclusion.\n\nThe Congress should measure its success through practical results:\n\n• More students registered and voting.• More open candidate selection meetings.• Fewer cases of election exclusion.• Public monitoring of election procedures.• Stronger student unions.• Regular accountability meetings.• Coordinated national campaigns.• Increased participation by women, disabled students, and students from marginalised communities.\n\nThe demand for student voting also requires legal and political action. Students should petition Parliament, engage the courts, work with civil society, and organise public forums. The campaign for universal suffrage should remain peaceful, lawful, and mass-based.\n\nThe next stage of student struggle in Kenya requires organisation. The suppression of voting has exposed the limits of controlled representation. Students must respond by defending every democratic opening, contesting every election, and building independent structures that answer to the student body.\n\nThe Permanent Revolutionary Congress should adopt the resolution to participate in all student elections where it has a presence. Participation will not end the struggle. It will give the struggle a wider base, clearer demands, and stronger organisation.",
    "blocks": [
      {
        "kind": "heading",
        "text": "Student democracy under pressure"
      },
      {
        "kind": "paragraph",
        "text": "Kenyan students face a new stage of struggle. The central issue is no longer only access to education, fees, accommodation, or employment. It is also the right to organise, vote, choose representatives, and control institutions that affect student life."
      },
      {
        "kind": "paragraph",
        "text": "The suppression of student voting has weakened campus democracy. The response should combine participation, organisation, and political education. The Permanent Revolutionary Congress must therefore adopt a clear resolution: participate in every student election in every university where we have a presence."
      },
      {
        "kind": "paragraph",
        "text": "University student elections once offered a direct channel for students to choose their representatives. The 2016 amendment to the Universities Act replaced universal suffrage with a delegate system. Students elect delegates, and delegates later elect members of the Students’ Governing Council. This limits direct participation and separates elected leaders from the wider student body."
      },
      {
        "kind": "paragraph",
        "text": "The change has produced several problems:"
      },
      {
        "kind": "list",
        "items": [
          "Most students no longer vote directly for their main representatives.",
          "Candidates focus on a smaller group of delegates instead of the wider student population.",
          "Students find it harder to hold leaders accountable.",
          "Campaigns can become vulnerable to patronage, ethnic mobilisation, and administrative influence.",
          "Many students lose interest because they feel their vote has little effect."
        ]
      },
      {
        "kind": "paragraph",
        "text": "Student participation already shows signs of weakness. Research on political engagement found that about half of surveyed students had voted in their last campus election, compared with higher participation in national elections. Earlier research at the University of Nairobi found that fewer than 20 percent of students were satisfied with student representation, while only 26 percent considered the last student election free and fair."
      },
      {
        "kind": "paragraph",
        "text": "These figures show a political problem. Students are not naturally apathetic. They often participate in protests, meetings, and wider political campaigns. The system discourages them when it blocks direct involvement."
      },
      {
        "kind": "paragraph",
        "text": "The suppression of voting does not remove student politics. It pushes politics into less transparent forms. When students cannot exercise power openly through elections, influence shifts towards university managers, wealthy sponsors, political brokers, and small organised groups."
      },
      {
        "kind": "heading",
        "text": "The meaning of the struggle"
      },
      {
        "kind": "paragraph",
        "text": "The struggle for student voting is part of a wider struggle for democratic control. Students need representatives who answer to them, not to administrators or external sponsors."
      },
      {
        "kind": "paragraph",
        "text": "A student union should defend student interests on:"
      },
      {
        "kind": "list",
        "items": [
          "Fees and funding.",
          "Accommodation and food.",
          "Academic quality.",
          "Sexual harassment and safety.",
          "Disability access.",
          "Disciplinary procedures.",
          "Welfare and mental health.",
          "Political and academic freedoms."
        ]
      },
      {
        "kind": "paragraph",
        "text": "A representative who wins through a small electoral college may not feel pressure from ordinary students. Direct elections create a wider base. They also give students a clearer way to remove leaders who fail."
      },
      {
        "kind": "paragraph",
        "text": "The demand for direct voting must therefore be linked to broader democratic demands. Students should fight for transparent voter registers, clear election rules, independent electoral bodies, public counting, accessible appeals, and protection from victimisation."
      },
      {
        "kind": "paragraph",
        "text": "A court case concerning the University of Nairobi student elections illustrates the seriousness of the issue. Petitioners challenged their exclusion from the nomination and election process scheduled for March 2025. Such disputes show that election rules can determine who receives political rights before voting even begins."
      },
      {
        "kind": "paragraph",
        "text": "The movement must defend every student’s right to contest and vote, subject only to clear, lawful, and equal conditions."
      },
      {
        "kind": "heading",
        "text": "Why participation matters"
      },
      {
        "kind": "paragraph",
        "text": "Some activists may argue that participating in restricted elections gives legitimacy to an undemocratic system. This concern deserves attention. However, refusing to participate can leave the field open to administrators, state-aligned interests, opportunists, and unaccountable candidates."
      },
      {
        "kind": "paragraph",
        "text": "Participation does not mean accepting the system as it stands. It means using every available opening to organise students and expose the limits of the existing structure."
      },
      {
        "kind": "paragraph",
        "text": "The movement should follow four principles:"
      },
      {
        "kind": "list",
        "items": [
          "Participate where elections take place.",
          "Organise students around shared demands.",
          "Challenge exclusion and manipulation.",
          "Use election campaigns to build lasting structures."
        ]
      },
      {
        "kind": "paragraph",
        "text": "An election campaign can become a school of political education. It can help students understand university budgets, disciplinary rules, public funding, labour conditions, and national policy. It can connect campus issues to wider struggles among lecturers, workers, parents, and unemployed youth."
      },
      {
        "kind": "paragraph",
        "text": "A boycott may reduce visibility. Participation can create a public record of the movement’s strength. It can show how many students support democratic demands. It can also help identify organisers who can continue the struggle after election day."
      },
      {
        "kind": "heading",
        "text": "The Permanent Revolutionary Congress"
      },
      {
        "kind": "paragraph",
        "text": "The Permanent Revolutionary Congress should treat student work as a central political task. Universities bring together young people who face high fees, insecure futures, unemployment, social inequality, and political exclusion. They are not separate from the broader working-class struggle. They form an important part of its future leadership."
      },
      {
        "kind": "paragraph",
        "text": "The Congress should not approach students as passive supporters. It should work with them as organisers, educators, and decision-makers."
      },
      {
        "kind": "paragraph",
        "text": "Its next stage should include the following programme:"
      },
      {
        "kind": "list",
        "items": [
          "Map the official election calendar, rules, and nomination procedures.",
          "Recruit candidates through democratic campus meetings.",
          "Publish a common student election platform.",
          "Train candidates and volunteers in organising, public speaking, election law, and digital security.",
          "Build election-monitoring teams.",
          "Record cases of exclusion, intimidation, bribery, and administrative interference.",
          "Defend students facing disciplinary action for lawful political activity.",
          "Coordinate campaigns across universities.",
          "Report publicly on election results and violations."
        ]
      },
      {
        "kind": "paragraph",
        "text": "The programme must remain independent of university management, political parties, wealthy individuals, and state agencies. External support can easily turn student leaders into instruments of broader political interests. The Congress should disclose all funding and reject conditions that limit student independence."
      },
      {
        "kind": "heading",
        "text": "The proposed resolution"
      },
      {
        "kind": "paragraph",
        "text": "The Permanent Revolutionary Congress resolves:"
      },
      {
        "kind": "paragraph",
        "text": "1. That the suppression of direct student voting is an attack on democratic participation in Kenyan universities."
      },
      {
        "kind": "paragraph",
        "text": "2. That the delegate system weakens accountability by limiting students’ direct role in choosing their representatives."
      },
      {
        "kind": "paragraph",
        "text": "3. That the movement supports the restoration of universal suffrage in university student elections."
      },
      {
        "kind": "paragraph",
        "text": "4. That, until direct voting is restored, the movement shall participate in all student elections in every university where it has a presence."
      },
      {
        "kind": "paragraph",
        "text": "5. That participation shall serve the purpose of organising students around democratic rights, welfare demands, and independent representation."
      },
      {
        "kind": "paragraph",
        "text": "6. That the movement shall support candidates selected through open and accountable student processes."
      },
      {
        "kind": "paragraph",
        "text": "7. That all candidates shall sign a public commitment to defend student rights, publish their activities, and report back to students."
      },
      {
        "kind": "paragraph",
        "text": "8. That the movement shall oppose ethnic discrimination, political patronage, bribery, intimidation, and administrative interference."
      },
      {
        "kind": "paragraph",
        "text": "9. That the movement shall create a national student election coordination committee to share information, training, legal support, and campaign materials."
      },
      {
        "kind": "paragraph",
        "text": "10. That the movement shall connect student struggles with those of workers, lecturers, parents, and communities affected by the education crisis."
      },
      {
        "kind": "paragraph",
        "text": "This resolution turns participation into a strategy. It rejects both passive acceptance and political withdrawal."
      },
      {
        "kind": "heading",
        "text": "Building beyond election day"
      },
      {
        "kind": "paragraph",
        "text": "The movement must avoid reducing politics to campaigns and voting. Elections provide an entry point. The real work continues afterwards."
      },
      {
        "kind": "paragraph",
        "text": "Student representatives should hold regular public assemblies. They should publish financial reports and meeting records. They should consult students before taking major positions. They should create working groups on fees, housing, academic rights, safety, and inclusion."
      },
      {
        "kind": "paragraph",
        "text": "The Congress should measure its success through practical results:"
      },
      {
        "kind": "list",
        "items": [
          "More students registered and voting.",
          "More open candidate selection meetings.",
          "Fewer cases of election exclusion.",
          "Public monitoring of election procedures.",
          "Stronger student unions.",
          "Regular accountability meetings.",
          "Coordinated national campaigns.",
          "Increased participation by women, disabled students, and students from marginalised communities."
        ]
      },
      {
        "kind": "paragraph",
        "text": "The demand for student voting also requires legal and political action. Students should petition Parliament, engage the courts, work with civil society, and organise public forums. The campaign for universal suffrage should remain peaceful, lawful, and mass-based."
      },
      {
        "kind": "paragraph",
        "text": "The next stage of student struggle in Kenya requires organisation. The suppression of voting has exposed the limits of controlled representation. Students must respond by defending every democratic opening, contesting every election, and building independent structures that answer to the student body."
      },
      {
        "kind": "paragraph",
        "text": "The Permanent Revolutionary Congress should adopt the resolution to participate in all student elections where it has a presence. Participation will not end the struggle. It will give the struggle a wider base, clearer demands, and stronger organisation."
      }
    ]
  }
];
