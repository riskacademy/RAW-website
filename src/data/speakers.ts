// Central speakers dataset.
// All bios, sameAs, images verbatim from 2026.riskawarenessweek.com / 2024.* / 2022.*
// (per Source provenance section of TЗ, May 2026).

export type SocialType = 'linkedin' | 'twitter' | 'facebook' | 'youtube' | 'website' | 'wikipedia';

export interface SocialLink {
    type: SocialType;
    url: string;
    label?: string;
}

export interface Speaker {
    slug: string;
    name: string;
    givenName: string;
    familyName: string;
    honorificSuffix?: string;
    jobTitle: string;
    role: string; // short role for cards
    organization: {
        name: string;
        url: string;
    };
    shortBio: string; // 1-line for cards
    fullBio: string; // verbatim full bio for /speakers/<slug>
    image: string;
    sameAs: string[]; // canonical sameAs list (LinkedIn, Twitter, personal site, Wikipedia, 2026.* page)
    socials: SocialLink[]; // for visible UI rendering
    knowsAbout: string[];
    awards?: string[];
    isHeadlineSpeaker: boolean;
    isAlumni?: boolean;
    isAlumniNote?: string;
    raw2026SpeakerUrl?: string;
}

export const speakers: Speaker[] = [
    {
        slug: 'douglas-hubbard',
        name: 'Douglas Hubbard',
        givenName: 'Douglas',
        familyName: 'Hubbard',
        jobTitle: 'Founder and President',
        role: 'Founder & President, Hubbard Decision Research',
        organization: {
            name: 'Hubbard Decision Research',
            url: 'https://hubbardresearch.com/',
        },
        shortBio: 'Creator of Applied Information Economics (AIE) and author of "How to Measure Anything"',
        fullBio:
            "Doug Hubbard founded the uniquely powerful and proven Applied Information Economics (AIE) method. He is an entrepreneur, an accomplished consultant and an author of five books published with Wiley, including 'How to Measure Anything: Finding the Value of Intangibles in Business', 'The Failure of Risk Management: Why It's Broken and How to Fix It', and 'How to Measure Anything in Cybersecurity Risk'. His consulting career spans 30+ years, starting at Coopers & Lybrand. Hubbard Decision Research has completed hundreds of projects across cybersecurity, engineering risks, market forecasts for pharma and medical devices, environmental policy, M&A, Silicon Valley startups, and military logistics. Doug has sold over 150,000 books in eight languages. His books are used as textbooks in dozens of university graduate-level courses; his first book is required reading for the Society of Actuaries exam prep. AIE has received critical acclaim from The Gartner Group, The Giga Information Group, and Forrester Research.",
        image:
            'https://d2q846bclm63a8.cloudfront.net/media/uploads/events/risk-awareness-week-2025-copy/HRs4hgL2zfkLXKjHe6Vvw4.png',
        sameAs: [
            'https://hubbardresearch.com/',
            'https://www.linkedin.com/in/dwhubbard/',
            'https://twitter.com/HubbardDecision',
            'https://www.facebook.com/hubbardresearch/',
            'https://en.wikipedia.org/wiki/Douglas_W._Hubbard',
            'https://2026.riskawarenessweek.com/speakers/douglas-hubbard/',
        ],
        socials: [
            { type: 'linkedin', url: 'https://www.linkedin.com/in/dwhubbard/' },
            { type: 'twitter', url: 'https://twitter.com/HubbardDecision' },
            { type: 'website', url: 'https://hubbardresearch.com/' },
        ],
        knowsAbout: [
            'Applied Information Economics',
            'Quantitative Risk Analysis',
            'Monte Carlo Simulation',
            'Cybersecurity Risk Quantification',
            'Calibrated Estimates',
            'Measurement Theory',
        ],
        isHeadlineSpeaker: true,
        raw2026SpeakerUrl: 'https://2026.riskawarenessweek.com/speakers/douglas-hubbard/',
    },
    {
        slug: 'sam-savage',
        name: 'Dr. Sam L. Savage',
        givenName: 'Sam',
        familyName: 'Savage',
        jobTitle: 'Executive Director',
        role: 'Executive Director, ProbabilityManagement.org',
        organization: {
            name: 'ProbabilityManagement.org',
            url: 'https://www.probabilitymanagement.org/',
        },
        shortBio: 'Author of "The Flaw of Averages" and inventor of the SIPmath probability standard',
        fullBio:
            "Dr. Sam L. Savage is the Executive Director of ProbabilityManagement.org, a 501(c)(3) nonprofit devoted to standardizing the communication and calculation of uncertainty. The organization has received funding from Chevron, Kaiser Permanente, Highmark Health, Lockheed Martin, PG&E, and others. Harry Markowitz, Nobel Laureate in Economics, was a co-founding board member. Dr. Savage is the author of 'The Flaw of Averages: Why We Underestimate Risk in the Face of Uncertainty' (Wiley, 2009/2012) and 'Chancification: Fixing the Flaw of Averages' (2022). He is the inventor of the Stochastic Information Packet (SIP), an auditable data array for conveying uncertainty. He is an Adjunct in Civil and Environmental Engineering at Stanford University. He began his career as a mathematician at General Motors Research Laboratory and taught at the University of Chicago Graduate School of Business for 15 years.",
        // CloudFront returns 403 on the full-size original for Sam (other speakers work);
        // _square_large thumbnail is the highest-resolution variant publicly accessible.
        image:
            'https://d2q846bclm63a8.cloudfront.net/media/thumbnails/uploads/events/risk-awareness-week-2025-copy/f4owjsE8cKtLSiC3UUEchb.jpg_square_large.jpg',
        sameAs: [
            'https://www.probabilitymanagement.org/',
            'https://www.linkedin.com/in/sam-s-623674/',
            'https://en.wikipedia.org/wiki/Sam_L._Savage',
            'https://2026.riskawarenessweek.com/speakers/sam-savage/',
        ],
        socials: [
            { type: 'linkedin', url: 'https://www.linkedin.com/in/sam-s-623674/' },
            { type: 'website', url: 'https://www.probabilitymanagement.org/' },
        ],
        knowsAbout: [
            'Probability Management',
            'SIPmath Standard',
            'The Flaw of Averages',
            'Monte Carlo Simulation',
            'Stochastic Information Packets',
        ],
        isHeadlineSpeaker: true,
        raw2026SpeakerUrl: 'https://2026.riskawarenessweek.com/speakers/sam-savage/',
    },
    {
        slug: 'leo-tilman',
        name: 'Leo M. Tilman',
        givenName: 'Leo',
        familyName: 'Tilman',
        jobTitle: 'Chairman and CEO',
        role: 'Chairman & CEO, Agilion Systems',
        organization: {
            name: 'Agilion Systems',
            url: 'https://agilion.com/',
        },
        shortBio: 'Co-author of "Agility" and "Financial Darwinism"; Forbes Business Visionary',
        fullBio:
            "Leo M. Tilman is an American financier, author, and entrepreneur — a leading authority on strategy, risk intelligence, and finance. He is Chairman and CEO of Agilion Systems, an advanced technology and strategic advisory firm (formerly Tilman & Company). Previously held senior positions at BlackRock and Bear Stearns and taught finance at Columbia University. Author of four books — 'Agility' (2019, with former NORAD Commander General Chuck Jacoby), 'Financial Darwinism' (2008), 'Asset/Liability Management' (Ed., 2003), and 'Risk Management' (2000, with BlackRock co-founder Ben Golub). In 2010, co-authored a Harvard Business Review proposal with Nobel economist Edmund Phelps to create the First National Bank of Innovation. In 2012, redefined risk intelligence as a new core competence of companies and investors. One of the architects of a public/private partnership (White House Rural Council, USDA, Farm Credit System) that brought billions in private capital to innovative companies. Tilman holds B.A. and M.A. in mathematics from Columbia, with executive education at Harvard Kennedy School and Yale Jackson Institute. Profiled as Business Visionary by Forbes.",
        // CloudFront returns 403 on the full-size original for Leo (other speakers work);
        // _square_large thumbnail is the highest-resolution variant publicly accessible.
        image:
            'https://d2q846bclm63a8.cloudfront.net/media/thumbnails/uploads/events/risk-awareness-week-2025-copy/kuU77FB7UjvDU3jRrmfMQQ.jpg_square_large.jpg',
        sameAs: [
            'https://agilion.com/',
            'https://www.linkedin.com/in/leo-m-tilman-b76170a0/',
            'https://2026.riskawarenessweek.com/speakers/leo-tilman/',
        ],
        socials: [
            { type: 'linkedin', url: 'https://www.linkedin.com/in/leo-m-tilman-b76170a0/' },
            { type: 'website', url: 'https://agilion.com/' },
        ],
        knowsAbout: [
            'Risk Intelligence',
            'Strategic Agility',
            'Financial Darwinism',
            'Asset Liability Management',
        ],
        isHeadlineSpeaker: true,
        raw2026SpeakerUrl: 'https://2026.riskawarenessweek.com/speakers/leo-tilman/',
    },
    {
        slug: 'norman-marks',
        name: 'Norman Marks',
        givenName: 'Norman',
        familyName: 'Marks',
        honorificSuffix: 'CPA, CRMA',
        jobTitle: 'Author, retired Chief Audit Executive and Chief Risk Officer',
        role: 'Author of "World-Class Risk Management"; retired CAE/CRO',
        organization: {
            name: 'Independent / Author',
            url: 'http://normanmarks.wordpress.com/',
        },
        shortBio: 'Author of "World-Class Risk Management" and globally recognized GRC mentor',
        fullBio:
            "Norman Marks, CPA, CRMA, is a retired senior executive who advises individuals and organizations worldwide on risk management, internal audit, corporate governance, enterprise performance, and the value of information. He served as chief audit executive at major global corporations for 20 years, and additionally as chief risk officer, compliance officer, and ethics officer. He led IT governance functions including information security, contingency planning, methodologies, and standards. Managed Sarbanes-Oxley (SOX) Section 404 programs and investigation units. Author of 12+ books, including 'Auditing at the Speed of Risk' (2022), 'Risk Management for Success' (2020), 'Making Business Sense of Technology Risk' (2019), 'Risk Management in Plain English: A Guide for Executives' (2018), and 'World-Class Risk Management' (2015). Won the IIA's Thurston award in 2004 and 2014. Honored as Fellow of the Open Compliance and Ethics Group, Honorary Fellow of the Institute of Risk Management, and inducted into the IIA's American Hall of Distinguished Practitioners (2018).",
        image:
            'https://d2q846bclm63a8.cloudfront.net/media/uploads/events/risk-awareness-week-2025-copy/CkcjhWFGFuLywKibY9xX2Q.jpg',
        sameAs: [
            'http://normanmarks.wordpress.com/',
            'http://www.linkedin.com/in/normanmarks/',
            'https://twitter.com/normanmarks',
            'https://2026.riskawarenessweek.com/speakers/norman-marks/',
        ],
        socials: [
            { type: 'linkedin', url: 'http://www.linkedin.com/in/normanmarks/' },
            { type: 'twitter', url: 'https://twitter.com/normanmarks' },
            { type: 'website', url: 'http://normanmarks.wordpress.com/' },
        ],
        knowsAbout: [
            'Risk Management',
            'Internal Auditing',
            'Corporate Governance',
            'Sarbanes-Oxley Compliance',
            'GRC',
        ],
        awards: [
            "IIA Thurston Award (2004, 2014)",
            "IIA American Hall of Distinguished Practitioners (2018)",
        ],
        isHeadlineSpeaker: true,
        raw2026SpeakerUrl: 'https://2026.riskawarenessweek.com/speakers/norman-marks/',
    },
    {
        slug: 'alex-sidorenko',
        name: 'Alex Sidorenko',
        givenName: 'Alex',
        familyName: 'Sidorenko',
        jobTitle: 'Head of Risk, Insurance and Internal Audit',
        role: 'Head of Risk, Insurance & Internal Audit, Serra Verde',
        organization: {
            name: 'Serra Verde',
            url: 'https://serraverde.com/en/home/',
        },
        shortBio: 'FERMA 2021 Risk Manager of the Year; founder of RISK-ACADEMY',
        fullBio:
            "Experienced executive across strategic, investment and operational risks and insurance, working within multibillion-dollar corporations in Australia, GCC and Europe. Successfully implemented quantitative risk analysis, risk-based decision making and neuroscience approaches. Saved more than $13 million per year in premiums on cargo and PD/BI insurance through industry-leading quantitative risk analysis without changing deductibles or limits. Successfully presented corporate risk profile at the Ministry of Finance and helped secure more than $1B in extra funding. Author of the most popular free risk management book in the world — 150K+ downloads in 3 languages. FERMA Risk Manager of the Year 2021, RIMS Honourable Mention 2021. Founder of RISK-ACADEMY (2012). Awards: RUSRISK Risk Manager of the Year 2014, Best ERM Implementation 2014, Best Risk Management Training 2013/2014/2015.",
        image:
            'https://d2q846bclm63a8.cloudfront.net/media/uploads/events/risk-awareness-week-2025-copy/JnrXfaEC5AAXUPiaKz3dT7.jpg',
        sameAs: [
            'https://riskacademy.blog/',
            'https://www.linkedin.com/in/alexsidorenko/',
            'https://twitter.com/alexei_sid',
            'https://www.facebook.com/theriskacademy/',
            'https://www.youtube.com/@riskacademy',
            'https://2026.riskawarenessweek.com/speakers/alex-sidorenko/',
        ],
        socials: [
            { type: 'linkedin', url: 'https://www.linkedin.com/in/alexsidorenko/' },
            { type: 'twitter', url: 'https://twitter.com/alexei_sid' },
            { type: 'youtube', url: 'https://www.youtube.com/@riskacademy' },
            { type: 'website', url: 'https://riskacademy.blog/' },
        ],
        knowsAbout: [
            'Quantitative Risk Analysis',
            'Risk-Based Decision Making',
            'Neuroscience in Risk Management',
            'Insurance Optimization',
            'Strategic Risk Management',
        ],
        awards: [
            'FERMA Risk Manager of the Year 2021',
            'RIMS Honourable Mention 2021',
            'RUSRISK Risk Manager of the Year 2014',
        ],
        isHeadlineSpeaker: true,
        raw2026SpeakerUrl: 'https://2026.riskawarenessweek.com/speakers/alex-sidorenko/',
    },
    {
        slug: 'michele-wucker',
        name: 'Michele Wucker',
        givenName: 'Michele',
        familyName: 'Wucker',
        jobTitle: 'Founder and CEO',
        role: 'Founder & CEO, Gray Rhino & Company',
        organization: {
            name: 'Gray Rhino & Company',
            url: 'https://www.thegrayrhino.com/',
        },
        shortBio: 'Author of "The Gray Rhino" — RAW alumni speaker (RAW2022, RAW2023)',
        fullBio:
            "Founder and CEO of Gray Rhino & Company — an innovative global strategic advisory firm that applies behavioral insights and real-time global analysis to improving governance, decisions, and responses involving key operational and strategic risks. Through multimedia tools and in-person engagement, Gray Rhino & Company helps business and policy leaders better recognize and act on the obvious, impactful yet often neglected 'gray rhino' risks. A sought-after global risk expert specializing in the global economy, public policy, and business trends. Author of 'The Gray Rhino: How to Recognize and Act on the Obvious Dangers We Ignore' (2016). Background in behavioral economics and financial analysis. Headline speaker at RAW 2022 and RAW 2023.",
        image:
            'https://d2q846bclm63a8.cloudfront.net/media/uploads/events/risk-awareness-for-charity-copy/qgxiyaRRABQ5H337UHgLvK.jpeg',
        sameAs: [
            'https://www.thegrayrhino.com/',
            'https://www.linkedin.com/in/wucker/',
            'https://en.wikipedia.org/wiki/Michele_Wucker',
            'https://2022.riskawarenessweek.com/speakers/michele-wucker/',
        ],
        socials: [
            { type: 'linkedin', url: 'https://www.linkedin.com/in/wucker/' },
            { type: 'website', url: 'https://www.thegrayrhino.com/' },
        ],
        knowsAbout: [
            'Gray Rhino Risks',
            'Behavioral Economics',
            'Strategic Risk',
            'Geopolitics',
        ],
        isHeadlineSpeaker: true,
        isAlumni: true,
        isAlumniNote: 'Previously spoke at RAW2022 and RAW2023.',
        raw2026SpeakerUrl: 'https://2022.riskawarenessweek.com/speakers/michele-wucker/',
    },

    // Stub-Person, only in JSON-LD on the brand site (no /speakers/<slug>/ page).
    {
        slug: 'grant-purdy',
        name: 'Grant Purdy',
        givenName: 'Grant',
        familyName: 'Purdy',
        jobTitle: 'Director',
        role: 'Director, Sufficient Certainty',
        organization: {
            name: 'Sufficient Certainty',
            url: 'https://sufficientcertainty.com/',
        },
        shortBio: 'Decision-centric risk management; co-author of ISO 31000',
        fullBio:
            "Director of Sufficient Certainty. With 40+ years in the field, focuses on assisting decision makers to have effective and efficient conversations about whether the decisions they are making provide sufficient certainty the intended outcomes will be achieved. Advocate for plain-language risk management and decision-centric thinking — helping practitioners shift from documenting risk to actually supporting decisions.",
        image:
            'https://d2q846bclm63a8.cloudfront.net/media/uploads/events/risk-awareness-week-2025-copy/E4TdXju5pEgMNX3Fuv9mwR.jpg',
        sameAs: [
            'https://sufficientcertainty.com/',
            'https://www.linkedin.com/in/grant-purdy-4ba1925/',
            'https://2026.riskawarenessweek.com/speakers/grant-purdy/',
        ],
        socials: [
            { type: 'linkedin', url: 'https://www.linkedin.com/in/grant-purdy-4ba1925/' },
            { type: 'website', url: 'https://sufficientcertainty.com/' },
        ],
        knowsAbout: ['Decision-Centric Risk Management', 'ISO 31000', 'Risk Communication'],
        isHeadlineSpeaker: false,
        raw2026SpeakerUrl: 'https://2026.riskawarenessweek.com/speakers/grant-purdy/',
    },
    {
        slug: 'geoff-trickey',
        name: 'Geoff Trickey',
        givenName: 'Geoff',
        familyName: 'Trickey',
        jobTitle: 'CEO',
        role: 'CEO, Psychological Consultancy Ltd (PCL)',
        organization: {
            name: 'Psychological Consultancy Ltd (PCL)',
            url: 'https://www.psychological-consultancy.com/',
        },
        shortBio: 'Creator of the Risk Type Compass; Chartered Psychologist (UCL)',
        fullBio:
            "Chartered Psychologist with a BSc in Psychology and an MSc in Educational Psychology from University College London (UCL). Honorary Research Fellow at UCL, formerly European Manager for The Psychological Corporation, with a long association with Hogan Assessment Systems. Creator of the Risk Type Compass — a behavioral instrument for understanding individual risk dispositions. Devotes time to research-based consultancy and innovative product development at PCL.",
        image:
            'https://d2q846bclm63a8.cloudfront.net/media/uploads/events/risk-awareness-week-2025-copy/EoTw8NJFRikStJg6GFWhMk.png',
        sameAs: [
            'https://www.psychological-consultancy.com/risk-type-compass/',
            'https://www.linkedin.com/in/geoff-trickey-9285772/',
            'https://2026.riskawarenessweek.com/speakers/geoff-trickey/',
        ],
        socials: [
            { type: 'linkedin', url: 'https://www.linkedin.com/in/geoff-trickey-9285772/' },
            { type: 'website', url: 'https://www.psychological-consultancy.com/risk-type-compass/' },
        ],
        knowsAbout: ['Risk Type Compass', 'Behavioral Risk Psychology', 'Personality Assessment'],
        isHeadlineSpeaker: false,
        raw2026SpeakerUrl: 'https://2026.riskawarenessweek.com/speakers/geoff-trickey/',
    },
    {
        slug: 'hans-laessoe',
        name: 'Hans Læssøe',
        givenName: 'Hans',
        familyName: 'Læssøe',
        jobTitle: 'Founder',
        role: 'Founder, AKTUS',
        organization: {
            name: 'AKTUS',
            url: 'http://aktus.dk/',
        },
        shortBio: 'Founder of LEGO Group Strategic Risk Management; author of "Prepare to Dare"',
        fullBio:
            "Hans Læssøe (M.Sc.) has 35 years of industry experience from the LEGO Group across multiple positions. From 2007, established the LEGO Group's Strategic Risk Management — later expanded to cover Strategic Scenario Planning, Project Risk and Opportunity Management, and Enterprise Risk Management. The processes and tools developed (based on ISO 31000) are today standard operating procedures at LEGO. Hans and the LEGO Group won multiple international awards. Author of risk management books 'Prepare to Dare' and 'Decide to Succeed', and co-author of the RIMS Strategic Risk Management Implementation Guide. In 2017 founded AKTUS (from Danish 'Active Uncertainty') — a consultancy enabling deliberate and intelligent risk taking, going beyond traditional risk management.",
        image:
            'https://d2q846bclm63a8.cloudfront.net/media/uploads/events/risk-awareness-week-2019/swFsHhMhyeciGNbaR5ietW.jpg',
        sameAs: [
            'http://aktus.dk/',
            'https://www.linkedin.com/in/hans-l%C3%A6ss%C3%B8e-2933982/',
            'https://2024.riskawarenessweek.com/speakers/hans-lsse/',
        ],
        socials: [
            { type: 'linkedin', url: 'https://www.linkedin.com/in/hans-l%C3%A6ss%C3%B8e-2933982/' },
            { type: 'website', url: 'http://aktus.dk/' },
        ],
        knowsAbout: [
            'Strategic Risk Management',
            'Enterprise Risk Management',
            'Scenario Planning',
            'ISO 31000',
        ],
        isHeadlineSpeaker: false,
        isAlumni: true,
        isAlumniNote: 'RAW alumni — RAW2024.',
        raw2026SpeakerUrl: 'https://2024.riskawarenessweek.com/speakers/hans-lsse/',
    },
    {
        slug: 'david-r-koenig',
        name: 'David R. Koenig',
        givenName: 'David',
        familyName: 'Koenig',
        jobTitle: 'President and CEO',
        role: 'President & CEO, The DCRO Institute',
        organization: {
            name: 'The DCRO Institute',
            url: 'https://www.dcroi.org/',
        },
        shortBio: 'Author of "Governance Reimagined"; founder of DCRO and co-founder of PRMIA',
        fullBio:
            "Award-winning author of 'Governance Reimagined: Organizational Design, Risk, and Value Creation' and 'The Board Member's Guide to Risk'. Has served on for-profit and non-profit boards and as a chief executive officer. Created corporate risk management programs at three different companies and managed complex financial portfolios in excess of tens of billions of dollars. Serves on the advisory board of the Center for Advancing Corporate Performance and the editorial board of the Journal of Risk Management in Financial Institutions. President and CEO of The DCRO Institute, founder of the Directors and Chief Risk Officers group (DCRO), and co-founder of the Professional Risk Managers International Association (PRMIA).",
        image:
            'https://d2q846bclm63a8.cloudfront.net/media/uploads/events/risk-awareness-for-charity-copy/eh2WFS39mJ6jsUQJowchpE.jpg',
        sameAs: [
            'https://www.dcroi.org/',
            'https://www.davidrkoenig.com/books',
            'http://www.linkedin.com/in/davidrkoenig',
            'https://2022.riskawarenessweek.com/speakers/david-r-koenig/',
        ],
        socials: [
            { type: 'linkedin', url: 'http://www.linkedin.com/in/davidrkoenig' },
            { type: 'website', url: 'https://www.dcroi.org/' },
        ],
        knowsAbout: [
            'Corporate Governance',
            'Board Risk Oversight',
            'Risk Capital Management',
            'PRMIA',
        ],
        isHeadlineSpeaker: false,
        isAlumni: true,
        isAlumniNote: 'RAW alumni — RAW2022.',
        raw2026SpeakerUrl: 'https://2022.riskawarenessweek.com/speakers/david-r-koenig/',
    },
];

export const HEADLINE_SPEAKERS = speakers.filter((s) => s.isHeadlineSpeaker);

export const SITE_ORIGIN = 'https://www.riskawarenessweek.com';

export function speakerPageUrl(slug: string): string {
    return `${SITE_ORIGIN}/speakers/${slug}`;
}

export function speakerPersonId(slug: string): string {
    return `${SITE_ORIGIN}/speakers/${slug}#person`;
}

export function getSpeakerBySlug(slug: string): Speaker | undefined {
    return speakers.find((s) => s.slug === slug);
}
