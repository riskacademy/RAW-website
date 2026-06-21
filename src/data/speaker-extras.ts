// Supplemental speaker data — RAW appearances by year, notable publications,
// and optional meta-description overrides. Lives alongside speakers.ts so that
// the canonical speaker dataset stays intact and the content team has a single
// file to update when revising appearances/books.
//
// Appearance years verified against the live landing pages of
// YYYY.riskawarenessweek.com (June 2026). Publication lists curated from each
// speaker's official site, Wikipedia and publisher records — content team
// should double-check ISBN/year on revision.

import { speakers, type Speaker } from './speakers';

export interface Appearance {
    year: number; // 2019..2025
    /** Subdomain URL for the speaker's profile on that year's site, if known. */
    profileUrl?: string;
    /** Short, optional context (e.g. "keynote", "co-presented with X"). */
    note?: string;
}

export type PublicationType = 'book' | 'standard' | 'paper';

export interface Publication {
    title: string;
    year?: number;
    publisher?: string;
    /** External link — author's site, publisher page, or canonical book listing. */
    url?: string;
    /** Defaults to 'book' when omitted. */
    type?: PublicationType;
    /** Optional co-author note ("with Chuck Jacoby"). */
    coAuthor?: string;
}

// ──────────────────────────────────────────────────────────────────────────────
// APPEARANCES
// ──────────────────────────────────────────────────────────────────────────────

export const APPEARANCES: Record<string, Appearance[]> = {
    'douglas-hubbard': [
        // Hubbard joined the faculty from RAW2020 onwards — 2019 inaugural roster
        // did not include him (verified against 2019.riskawarenessweek.com sitemap).
        { year: 2020 },
        { year: 2021 },
        { year: 2022 },
        { year: 2023 },
        { year: 2024 },
        { year: 2025 },
    ],
    'sam-savage': [
        { year: 2019 },
        { year: 2020 },
        { year: 2021 },
        { year: 2022 },
        { year: 2023 },
        { year: 2024 },
        { year: 2025 },
    ],
    'leo-tilman': [
        { year: 2025, note: 'Featured speaker on strategic agility and risk intelligence.' },
    ],
    'norman-marks': [
        { year: 2019 },
        { year: 2020 },
        { year: 2021 },
        { year: 2022 },
        { year: 2023 },
        { year: 2024 },
        { year: 2025 },
    ],
    'alex-sidorenko': [
        { year: 2019, note: 'Conference founder; sessions every edition.' },
        { year: 2020 },
        { year: 2021 },
        { year: 2022 },
        { year: 2023 },
        { year: 2024 },
        { year: 2025 },
    ],
    'michele-wucker': [
        {
            year: 2022,
            profileUrl: 'https://2022.riskawarenessweek.com/speakers/michele-wucker/',
            note: 'Headline session on Gray Rhino risks.',
        },
        { year: 2023 },
    ],
    'grant-purdy': [
        // 2021 not included — verified against 2021.riskawarenessweek.com sitemap;
        // Purdy missed that single edition between his 2020 and 2022 appearances.
        { year: 2019 },
        { year: 2020 },
        { year: 2022 },
        { year: 2023 },
        { year: 2024 },
        { year: 2025 },
    ],
    'geoff-trickey': [
        { year: 2022 },
        { year: 2024 },
        { year: 2025 },
    ],
    'hans-laessoe': [
        { year: 2019 },
        { year: 2020 },
        { year: 2021 },
        { year: 2022 },
        { year: 2023 },
        {
            year: 2024,
            profileUrl: 'https://2024.riskawarenessweek.com/speakers/hans-lsse/',
        },
    ],
    'david-r-koenig': [
        { year: 2021 },
        {
            year: 2022,
            profileUrl: 'https://2022.riskawarenessweek.com/speakers/david-r-koenig/',
        },
        { year: 2024 },
    ],
};

// ──────────────────────────────────────────────────────────────────────────────
// PUBLICATIONS
// ──────────────────────────────────────────────────────────────────────────────

export const PUBLICATIONS: Record<string, Publication[]> = {
    'douglas-hubbard': [
        {
            title: 'How to Measure Anything: Finding the Value of Intangibles in Business',
            year: 2014,
            publisher: 'Wiley',
            url: 'https://hubbardresearch.com/publications/how-to-measure-anything-book/',
        },
        {
            title: "The Failure of Risk Management: Why It's Broken and How to Fix It",
            year: 2020,
            publisher: 'Wiley',
            url: 'https://hubbardresearch.com/publications/the-failure-of-risk-management-book/',
        },
        {
            title: 'How to Measure Anything in Cybersecurity Risk',
            year: 2023,
            publisher: 'Wiley',
            url: 'https://hubbardresearch.com/publications/how-to-measure-anything-in-cybersecurity-risk/',
            coAuthor: 'with Richard Seiersen',
        },
        {
            title: 'Pulse: The New Science of Harnessing Internet Buzz to Track Threats and Opportunities',
            year: 2011,
            publisher: 'Wiley',
        },
    ],
    'sam-savage': [
        {
            title: 'The Flaw of Averages: Why We Underestimate Risk in the Face of Uncertainty',
            year: 2012,
            publisher: 'Wiley',
            url: 'https://www.probabilitymanagement.org/flaw-of-averages',
        },
        {
            title: 'Chancification: How to Fix the Flaw of Averages',
            year: 2022,
            publisher: 'ProbabilityManagement.org',
            url: 'https://www.probabilitymanagement.org/chancification',
            coAuthor: 'with Jeff Danziger and Douglas Hubbard',
        },
    ],
    'leo-tilman': [
        {
            title: 'Agility: How to Navigate the Unknown and Seize Opportunity in a World of Disruption',
            year: 2019,
            publisher: 'Missionday',
            coAuthor: 'with General Charles H. Jacoby Jr. (ret.)',
        },
        {
            title: 'Financial Darwinism: Create Value or Self-Destruct in a World of Risk',
            year: 2008,
            publisher: 'Wiley',
        },
        {
            title: 'Asset/Liability Management of Financial Institutions',
            year: 2003,
            publisher: 'Euromoney',
            coAuthor: 'editor',
        },
        {
            title: 'Risk Management: Approaches for Fixed Income Markets',
            year: 2000,
            publisher: 'Wiley',
            coAuthor: 'with Bennett W. Golub',
        },
    ],
    'norman-marks': [
        {
            title: 'Auditing at the Speed of Risk',
            year: 2022,
            url: 'http://normanmarks.wordpress.com/',
        },
        {
            title: 'Risk Management for Success',
            year: 2020,
        },
        {
            title: 'Making Business Sense of Technology Risk',
            year: 2019,
        },
        {
            title: 'Risk Management in Plain English: A Guide for Executives',
            year: 2018,
        },
        {
            title: 'World-Class Risk Management',
            year: 2015,
        },
    ],
    'alex-sidorenko': [
        {
            title: 'Guide to Effective Risk Management 3.0',
            year: 2017,
            publisher: 'RISK-ACADEMY',
            url: 'https://riskacademy.blog/guide-to-effective-risk-management-3-0/',
            coAuthor: 'with Elena Demidenko',
        },
    ],
    'michele-wucker': [
        {
            title: 'You Are What You Risk: The New Art and Science of Navigating an Uncertain World',
            year: 2021,
            publisher: 'Pegasus Books',
            url: 'https://www.thegrayrhino.com/about/the-books',
        },
        {
            title: 'The Gray Rhino: How to Recognize and Act on the Obvious Dangers We Ignore',
            year: 2016,
            publisher: 'St. Martin\'s Press',
            url: 'https://www.thegrayrhino.com/about/the-books',
        },
        {
            title: 'Lockout: Why America Keeps Getting Immigration Wrong When Our Prosperity Depends on Getting It Right',
            year: 2006,
            publisher: 'PublicAffairs',
        },
    ],
    'grant-purdy': [
        {
            title: 'ISO 31000:2018 — Risk management — Guidelines',
            year: 2018,
            publisher: 'ISO',
            type: 'standard',
            url: 'https://www.iso.org/standard/65694.html',
            coAuthor: 'contributor',
        },
        {
            title: 'Deciding: A guide to even better decision making',
            year: 2020,
            publisher: 'Sufficient Certainty',
            url: 'https://sufficientcertainty.com/',
            coAuthor: 'with Roger Estall',
        },
    ],
    'geoff-trickey': [
        {
            title: 'Risk Type Compass — technical manual',
            publisher: 'Psychological Consultancy Ltd',
            type: 'paper',
            url: 'https://www.psychological-consultancy.com/risk-type-compass/',
        },
    ],
    'hans-laessoe': [
        {
            title: 'Prepare to Dare: Using Risk Management to Make Manoeuvrability Your Competitive Advantage',
            year: 2018,
            publisher: 'Saxo Publish',
            url: 'http://aktus.dk/',
        },
        {
            title: 'Decide to Succeed',
            year: 2020,
            publisher: 'Books on Demand',
            url: 'http://aktus.dk/',
        },
        {
            title: 'RIMS Strategic Risk Management Implementation Guide',
            publisher: 'RIMS',
            type: 'standard',
            coAuthor: 'RIMS Strategic Risk Management Development Council member',
        },
    ],
    'david-r-koenig': [
        {
            title: 'Governance Reimagined: Organizational Design, Risk, and Value Creation',
            year: 2012,
            publisher: 'Wiley',
            url: 'https://www.davidrkoenig.com/books',
        },
        {
            title: "The Board Member's Guide to Risk",
            year: 2020,
            publisher: '(b)right governance publications',
            url: 'https://www.davidrkoenig.com/books',
        },
    ],
};

// ──────────────────────────────────────────────────────────────────────────────
// META-DESCRIPTION OVERRIDES
// ──────────────────────────────────────────────────────────────────────────────
// Default fallback in [slug]/page.tsx is `${role}. ${shortBio}.`, which can read
// as boilerplate across speakers with similar role/bio. Where a more distinctive
// description boosts CTR and helps Google distinguish pages, we override here.

export const META_DESCRIPTIONS: Record<string, string> = {
    'douglas-hubbard': 'Douglas W. Hubbard — creator of Applied Information Economics, author of How to Measure Anything and The Failure of Risk Management. Faculty at every edition of Risk Awareness Week since 2020.',
    'sam-savage': 'Dr. Sam L. Savage — author of The Flaw of Averages, inventor of the SIPmath probability standard, Executive Director of ProbabilityManagement.org. Faculty at Risk Awareness Week 2019–2026.',
    'leo-tilman': 'Leo M. Tilman — author of Agility and Financial Darwinism, Forbes Business Visionary, Chairman and CEO of Agilion Systems. Speaker at Risk Awareness Week 2025–2026.',
    'norman-marks': 'Norman Marks, CPA, CRMA — author of World-Class Risk Management and 12+ other books on GRC, retired CAE and CRO. Faculty at Risk Awareness Week every edition since 2019.',
    'alex-sidorenko': 'Alex Sidorenko — founder of Risk Awareness Week and RISK-ACADEMY, FERMA 2021 Risk Manager of the Year. Author of the most-downloaded free risk management book worldwide (150K+ copies).',
    'michele-wucker': 'Michele Wucker — author of The Gray Rhino and You Are What You Risk, founder of Gray Rhino & Company. Headline speaker at Risk Awareness Week 2022 and 2023.',
    'grant-purdy': 'Grant Purdy — ISO 31000 contributor, Director of Sufficient Certainty, 40+ years in risk management. Co-author of Deciding (with Roger Estall). Faculty at Risk Awareness Week across six editions, 2019–2025.',
    'geoff-trickey': 'Geoff Trickey — creator of the Risk Type Compass, Chartered Psychologist (UCL), CEO of Psychological Consultancy Ltd. Speaker at Risk Awareness Week 2022, 2024 and 2025.',
    'hans-laessoe': 'Hans Læssøe — founder of AKTUS, established the LEGO Group Strategic Risk Management programme, author of Prepare to Dare and Decide to Succeed. Faculty at Risk Awareness Week 2019–2024.',
    'david-r-koenig': 'David R. Koenig — President and CEO of The DCRO Institute, author of Governance Reimagined, co-founder of PRMIA. Speaker at Risk Awareness Week 2021, 2022 and 2024.',
};

// ──────────────────────────────────────────────────────────────────────────────
// HELPERS
// ──────────────────────────────────────────────────────────────────────────────

export function getAppearances(slug: string): Appearance[] {
    return APPEARANCES[slug] ?? [];
}

export function getPublications(slug: string): Publication[] {
    return PUBLICATIONS[slug] ?? [];
}

export function getMetaDescription(slug: string): string | undefined {
    return META_DESCRIPTIONS[slug];
}

/** Reverse map: which speakers presented at RAW <year>? Sorted by appearance count desc (most-frequent first). */
export function getSpeakersForYear(year: number): Speaker[] {
    const slugs = Object.entries(APPEARANCES)
        .filter(([, list]) => list.some((a) => a.year === year))
        .map(([slug]) => slug);
    return speakers
        .filter((s) => slugs.includes(s.slug))
        .sort((a, b) => {
            // Headline first, then alumni-with-most-appearances, then alphabetical.
            if (a.isHeadlineSpeaker && !b.isHeadlineSpeaker) return -1;
            if (!a.isHeadlineSpeaker && b.isHeadlineSpeaker) return 1;
            const aCount = getAppearances(a.slug).length;
            const bCount = getAppearances(b.slug).length;
            if (aCount !== bCount) return bCount - aCount;
            return a.name.localeCompare(b.name);
        });
}
