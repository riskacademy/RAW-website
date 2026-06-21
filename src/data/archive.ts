// Canonical RAW archive dataset — one entry per past edition (2019-2025).
//
// Single source of truth for:
//   • /archive/<year> pages (long-form content + Event JSON-LD)
//   • /archive index (year cards + EventSeries hasPart)
//   • Cross-links from /speakers/<slug> ("RAW history" block)
//   • EducationEvent nodes inside JsonLd.tsx (imported from here)
//
// Theme/longDescription/keyTopics curated from each year's landing page on
// YYYY.riskawarenessweek.com (verified June 2026). Statistics taken from
// recurring "X+ participants from N countries" callouts on those pages; where
// figures were not stated outright they are omitted rather than guessed.
//
// IMPORTANT: heySummit subdomains MUST NOT be redirected or blocked — they
// continue to serve the full session archive that this hub points to.

export interface ArchiveYear {
    year: number;
    /** Branded year name — used as H1 and in JSON-LD `name`. */
    name: string;
    /** Short tagline — used as H2/subtitle on detail pages and in card subtitles. */
    theme: string;
    /** Card-level one-liner for the /archive index grid. */
    summary: string;
    /** ISO dates of the live programme that year (kept for JSON-LD Event nodes). */
    startDate: string;
    endDate: string;
    /** Long-form body content for /archive/<year>. Plain prose; paragraphs split on blank lines. */
    longDescription: string;
    /** Key topics/tracks covered that year — rendered as pills, kept in `about` for JSON-LD. */
    keyTopics: string[];
    /** Notable practitioners headlining that edition — free-text names, not necessarily site speakers. */
    notableSpeakers: string[];
    /** Reported attendance metric, if stated by the conference that year. Free-text ("4,800+"). */
    attendance?: string;
    /** Reported country count, if stated. Free-text ("120+"). */
    countries?: string;
    /** Public HeySummit URL — full archive lives there. */
    heySummitUrl: string;
}

export const ARCHIVE_YEARS: ArchiveYear[] = [
    {
        year: 2025,
        name: 'Risk Awareness Week 2025',
        theme: 'The Future of Risk Intelligence',
        summary: 'Quantitative risk methods, AI in decision integration, and the leap from compliance to strategic profit driver.',
        startDate: '2025-10-13',
        endDate: '2025-10-17',
        longDescription:
            'RAW 2025 brought together more than 5,000 risk and insurance professionals around a single question: when does quantitative risk analysis actually change decisions, and how do practitioners deliver that change? The programme spanned 45+ workshops across decision analysis, Monte Carlo simulation, risk-adjusted performance management, and the operationalization of AI inside risk teams.\n\nThe edition cemented a multi-year argument the conference had been building since 2019: risk management cannot survive as a compliance checklist. Speakers from Chevron, Allianz Technology, Lockheed Martin, the University of Stavanger and the University of Adelaide pressed the case that risk teams must become strategic decision enablers, supported by probability management, structured decision quality, and emerging-risk radar tooling.\n\nLeo Tilman — Chairman and CEO of Agilion Systems, and a Forbes Business Visionary — was featured for the first time on strategic agility and risk intelligence. Sam Savage led sessions on SIPmath and probability standardisation, while Douglas Hubbard, Norman Marks and Alex Sidorenko reprised their multi-year roles on calibrated estimation, GRC modernisation, and quantitative risk-based decision making respectively.',
        keyTopics: [
            'Quantitative risk analysis',
            'Probability management (SIPmath)',
            'Strategic agility & risk intelligence',
            'AI in risk decisioning',
            'Decision quality',
            'Risk-adjusted performance management',
        ],
        notableSpeakers: [
            'Leo Tilman (Agilion Systems)',
            'Douglas Hubbard (Hubbard Decision Research)',
            'Sam Savage (ProbabilityManagement.org)',
            'Norman Marks',
            'Alex Sidorenko (Serra Verde)',
            'Geoff Trickey (PCL)',
            'Grant Purdy (Sufficient Certainty)',
        ],
        attendance: '5,000+',
        heySummitUrl: 'https://2025.riskawarenessweek.com/',
    },
    {
        year: 2024,
        name: 'Risk Awareness Week 2024 — The AI Revolution',
        theme: "Don't lose your job to AI — supercharge your risk team",
        summary: 'The first major virtual risk conference dedicated to applying generative AI inside risk and audit functions.',
        startDate: '2024-10-07',
        endDate: '2024-10-11',
        longDescription:
            "RAW 2024 was the conference's defining pivot to AI. Across 45+ workshops, practitioners demonstrated using ChatGPT, Gemini and RAW@AI to write risk policies, run Monte Carlo simulations in natural language, automate control testing, and build emerging-risk radars. The argument was direct: AI is not coming for risk jobs, but it is coming for the risk jobs that boil down to spreadsheet shuffling and policy templating.\n\nFERMA awarded RAW 2024 its Training & Education Programme of the Year — a milestone that validated a multi-year curriculum bet on quantitative and decision-centric methods. The edition introduced multi-language dubbing (English, Spanish, Brazilian Portuguese), extending reach across Latin America and Iberia.\n\nMicrosoft (Director of Generative AI for Asia) and Lockheed Martin (VP of Internal Audit and Enterprise Risk) anchored the corporate AI track. Robert D. Brown III, Hans Læssøe, David R. Koenig and Geoff Trickey delivered some of the most-attended workshops on decision quality, strategic risk taking, board oversight and behavioural risk psychology respectively. Norman Marks, Douglas Hubbard, Sam Savage and Alex Sidorenko continued their faculty-track sessions.",
        keyTopics: [
            'Generative AI in risk management',
            'LLM-assisted policy and control writing',
            'AI-augmented Monte Carlo',
            'Strategic risk taking',
            'Behavioural risk psychology',
            'Multi-language risk training',
        ],
        notableSpeakers: [
            'Douglas Hubbard',
            'Sam Savage',
            'Norman Marks',
            'Hans Læssøe (AKTUS)',
            'David R. Koenig (DCRO Institute)',
            'Geoff Trickey (PCL)',
            'Vishal Singhvi (Microsoft)',
            'Christopher Geiger (Lockheed Martin)',
            'Alex Sidorenko (Serra Verde)',
        ],
        heySummitUrl: 'https://2024.riskawarenessweek.com/',
    },
    {
        year: 2023,
        name: 'Risk Awareness Week 2023',
        theme: 'Take More Risk',
        summary: 'Strategic risk-taking for competitive advantage — featuring Michele Wucker on Gray Rhino and an expanded quantitative track.',
        startDate: '2023-10-09',
        endDate: '2023-10-13',
        longDescription:
            "RAW 2023 inverted the usual conference framing. Instead of asking 'how do we reduce risk?', the programme asked 'how do we take the right risks better than competitors?' — a deliberate echo of the strategic-risk literature and a clear rebuke to compliance-centric risk practice.\n\nMichele Wucker delivered a headline session on the Gray Rhino — highly probable, high-impact risks ignored despite obvious warning. Steven Schwarcz (Duke University), Carolyn Kousky (Environmental Defense Fund) and Anjali Rudrappa (Danske Bank) extended the strategic argument into legal scholarship, climate-policy economics, and quantitative banking-risk respectively.\n\nMore than 30 risk-management experts contributed workshops on integrating risk into corporate decision-making, planning, budgeting, project management and risk-adjusted performance management — at a fraction of the cost of traditional risk conferences. Douglas Hubbard, Sam Savage, Norman Marks, Hans Læssøe and Grant Purdy returned.",
        keyTopics: [
            'Gray Rhino theory',
            'Strategic risk-taking',
            'Risk-adjusted performance management',
            'Climate and environmental risk economics',
            'Legal frameworks for risk',
            'Decision-centric risk management',
        ],
        notableSpeakers: [
            'Michele Wucker (Gray Rhino & Company)',
            'Douglas Hubbard',
            'Sam Savage',
            'Norman Marks',
            'Steven Schwarcz (Duke University)',
            'Carolyn Kousky (Environmental Defense Fund)',
            'Hans Læssøe',
            'Grant Purdy',
            'Alex Sidorenko',
        ],
        heySummitUrl: 'https://2023.riskawarenessweek.com/',
    },
    {
        year: 2022,
        name: 'Risk Awareness Week 2022',
        theme: 'The Psychology of Risk',
        summary: 'Combining behavioural science with quantitative risk methods — Michele Wucker, David Koenig, and 4,400+ participants from 120+ countries.',
        startDate: '2022-10-17',
        endDate: '2022-10-21',
        longDescription:
            "RAW 2022 fused two streams of risk practice that usually stay separate: rigorous behavioural-science research on cognitive biases in risk perception, and quantitative-risk methods (Monte Carlo, decision analysis, SIPmath). The conference argued the two need to be taught together — a bias-aware practitioner who cannot quantify, or a quant who cannot account for human heuristics, is half a risk professional.\n\nThe edition welcomed Michele Wucker (Gray Rhino & Company), David R. Koenig (DCRO Institute), Kurt Nelson PhD (The Lantern Group) and Christian Hunt (Human Risk) on the behavioural side, with Douglas Hubbard, Sam Savage, Max Henrion (Lumina Decision Systems), Tom Keelin (Keelin Reeds Partners) and Graeme Keith (Archer IRM) on the quantitative side.\n\nBy 2022 RAW had drawn more than 15,000 cumulative participants over its first three years; this edition alone attracted 4,400+ professionals from 120+ countries. Hans Læssøe, Norman Marks, Grant Purdy, Geoff Trickey and Alex Sidorenko returned.",
        keyTopics: [
            'Behavioural risk psychology',
            'Gray Rhino theory',
            'Cognitive biases in risk identification',
            'Quantitative risk methods',
            'Risk Type Compass',
            'Decision quality',
        ],
        notableSpeakers: [
            'Michele Wucker',
            'David R. Koenig',
            'Douglas Hubbard',
            'Sam Savage',
            'Max Henrion (Lumina Decision Systems)',
            'Christian Hunt (Human Risk)',
            'Geoff Trickey (PCL)',
            'Hans Læssøe',
            'Norman Marks',
            'Grant Purdy',
            'Alex Sidorenko',
        ],
        attendance: '4,400+',
        countries: '120+',
        heySummitUrl: 'https://2022.riskawarenessweek.com/',
    },
    {
        year: 2021,
        name: 'Risk Awareness Week 2021',
        theme: 'ESG & Climate Decisions',
        summary: 'Quantitative risk applied to climate, pollution and environmental decision-making — 4,800+ participants.',
        startDate: '2021-10-11',
        endDate: '2021-10-15',
        longDescription:
            "RAW 2021 was the year the conference made its sharpest substantive turn — toward climate, ESG and environmental decision-making. International speakers shared practical case studies on integrating quantitative risk methods into climate policy, environmental impact assessment, green finance and risk-adjusted performance management.\n\nThe edition argued that the climate and ESG agenda would not advance on aspiration alone — it required the same decision-analytic rigour traditionally reserved for project economics. Sessions on the value of perfect information for climate decisions, scenario analysis under deep uncertainty, and probabilistic ESG scoring drew heavily from the practitioner community.\n\n4,800+ professionals attended. Douglas Hubbard, Sam Savage, Norman Marks, Hans Læssøe, David R. Koenig and Alex Sidorenko reprised faculty roles. Tony Martin-Vegue (Netflix), David Vose (Archer Integrated Risk Management) and Mariia Kozlova (LUT University) joined the programme.",
        keyTopics: [
            'Climate risk decisioning',
            'ESG quantification',
            'Environmental risk economics',
            'Scenario analysis under deep uncertainty',
            'Decision-centric risk management',
            'Risk-adjusted performance management',
        ],
        notableSpeakers: [
            'Douglas Hubbard',
            'Sam Savage',
            'Norman Marks',
            'David R. Koenig',
            'Hans Læssøe',
            'Tony Martin-Vegue (Netflix)',
            'David Vose',
            'Alex Sidorenko',
        ],
        attendance: '4,800+',
        heySummitUrl: 'https://2021.riskawarenessweek.com/',
    },
    {
        year: 2020,
        name: 'Risk Awareness Week 2020',
        theme: 'Solidifying RM2',
        summary: 'The pivot to fully-virtual format during the pandemic — and the year that defined decision-centric risk management for the conference.',
        startDate: '2020-10-12',
        endDate: '2020-10-16',
        longDescription:
            "RAW 2020 ran during the global pandemic and became, by necessity and design, fully virtual. The format change unlocked global reach: international speakers ran workshops without travel, attendees joined on their own schedule with on-demand replays, and the cumulative cohort across the next several years would grow into the tens of thousands.\n\nSubstantively, this was the year the conference settled on the 'RM2' label — decision-centric risk management as a distinct practice from compliance-centric risk management. Speakers across the programme argued for risk methods that demonstrably change decisions: calibrated estimation, Monte Carlo on project economics, FAIR-based cyber-risk quantification, structured decision quality.\n\n4,000+ professionals attended. Returning faculty included Douglas Hubbard, Sam Savage, Norman Marks, Hans Læssøe, Grant Purdy and Alex Sidorenko, joined by Jack Jones (The FAIR Institute), Robert Brown III, Mark Powell (Attwater Consulting), Annette Hofmann (Maurice R. Greenberg School of Risk Management) and Lois Tullo (Global Risk Institute).",
        keyTopics: [
            'Decision-centric risk management (RM2)',
            'FAIR cyber-risk quantification',
            'Calibrated estimation',
            'Monte Carlo for project economics',
            'Virtual workshop format',
            'Global risk practitioner community',
        ],
        notableSpeakers: [
            'Douglas Hubbard',
            'Sam Savage',
            'Norman Marks',
            'Jack Jones (FAIR Institute)',
            'Hans Læssøe',
            'Grant Purdy',
            'Alex Sidorenko',
        ],
        attendance: '4,000+',
        heySummitUrl: 'https://2020.riskawarenessweek.com/',
    },
    {
        year: 2019,
        name: 'Risk Awareness Week 2019',
        theme: 'The Foundation',
        summary: 'The inaugural edition — operational blueprint for integrating risk management into planning, forecasting and budgeting. 3,700+ participants from 121 countries.',
        startDate: '2019-10-14',
        endDate: '2019-10-18',
        longDescription:
            "RAW 2019 was the inaugural edition — the conference's founding statement that risk management training should be online, on-demand, global and free of conference-circuit pricing. More than 50 workshops were recorded for permanent replay access, and 3,700+ professionals from 121 countries attended from their own desks.\n\nThe substantive argument that the conference would build on for the next six years was already there in the 2019 programme: risk management belongs inside corporate planning, forecasting and budgeting cycles, not in a parallel compliance silo. Sessions emphasised the operational mechanics of integration — when in the planning calendar risk analysis happens, who owns it, what artefacts decision-makers actually use.\n\nFounding faculty: Sam Savage, Norman Marks, Hans Læssøe, Grant Purdy, Jack Jones (The FAIR Institute), John Hollmann (Validation Estimating LLC), Robert Brown III and Frank Ashe (Quantitative Strategies). The conference was founded by Alex Sidorenko, then at the Institute for Strategic Risk Analysis.",
        keyTopics: [
            'Operational integration of risk management',
            'Planning, forecasting and budgeting',
            'Quantitative risk foundations',
            'FAIR for cyber risk',
            'On-demand virtual format',
            'Global reach',
        ],
        notableSpeakers: [
            'Sam Savage',
            'Norman Marks',
            'Hans Læssøe',
            'Grant Purdy',
            'Jack Jones (FAIR Institute)',
            'Alex Sidorenko (Institute for Strategic Risk Analysis)',
        ],
        attendance: '3,700+',
        countries: '121',
        heySummitUrl: 'https://2019.riskawarenessweek.com/',
    },
];

export const ARCHIVE_YEAR_VALUES = ARCHIVE_YEARS.map((y) => y.year);

export function getArchiveYear(year: number): ArchiveYear | undefined {
    return ARCHIVE_YEARS.find((y) => y.year === year);
}

/**
 * Build the canonical EducationEvent @id used in JSON-LD. Matches the @ids
 * already in JsonLd.tsx (SUB_EVENTS) so a /archive/<year> page emitting an
 * Event node with this @id strengthens the same entity.
 */
export function eventIdForYear(year: number): string {
    return `https://${year}.riskawarenessweek.com#event`;
}

/** Last meaningful update to archive content; bumped when copy is edited. */
export const ARCHIVE_LAST_MODIFIED = new Date('2026-06-21');
