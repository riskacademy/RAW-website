// Canonical event-level descriptor for RAW2026.
//
// Texts verbatim from src/data/faq.ts and the brand-level llms.txt — keep
// the three sources in sync when event facts change. AI agents see this
// through the get_event_overview MCP tool.

export interface EventPhase {
    id: 'phase1' | 'phase2';
    name: string;
    dates: string;
    description: string;
}

export interface EventOverview {
    name: string;
    shortName: string;
    tagline: string;
    dates: {
        start: string;          // ISO YYYY-MM-DD
        end: string;
        display: string;
        timezone: 'virtual';    // event is online — no single venue timezone
    };
    format: 'virtual';
    phases: EventPhase[];
    organizer: {
        name: string;
        url: string;
        founder: string;
        founded: string;
    };
    stats: {
        attendeesAllTime: string;
        countriesAllTime: string;
        sinceYear: number;
        speakerCountRaw2026: number;
    };
    awards: string[];
    topicTracks: string[];
    cpd: { certified: boolean; phases: ('phase1' | 'phase2')[] };
    urls: {
        event: string;
        schedule: string;
        speakers: string;
        topics: string;
        tickets: string;
        replays: string;
        faq: string;
        brand: string;
    };
}

export const EVENT_OVERVIEW: EventOverview = {
    name: 'Risk Awareness Week 2026',
    shortName: 'RAW2026',
    tagline:
        "The world's largest virtual conference dedicated to risk management, decision-making and AI-applied quantitative risk analysis.",
    dates: {
        start: '2026-10-12',
        end: '2026-10-16',
        display: '12-16 October 2026',
        timezone: 'virtual',
    },
    format: 'virtual',
    phases: [
        {
            id: 'phase1',
            name: 'Phase 1 - The Hard Reset',
            dates: '12-13 October 2026',
            description:
                'Free fast-paced 30-minute sessions. Full access to all 5 days of sessions live and replays, plus CPD certified certificate of attendance and free access to all RAW2025 replays.',
        },
        {
            id: 'phase2',
            name: 'Phase 2 - Implementation Sprints',
            dates: '14-16 October 2026',
            description:
                'Paid 3-hour interactive workshops. 15+ practical workshops with downloadable training materials and 12-month replay access.',
        },
    ],
    organizer: {
        name: 'RISK-ACADEMY',
        url: 'https://riskacademy.ai/',
        founder: 'Alex Sidorenko',
        founded: '2012',
    },
    stats: {
        attendeesAllTime: '20,000+',
        countriesAllTime: '120+',
        sinceYear: 2020,
        speakerCountRaw2026: 36,
    },
    awards: [
        "FERMA's 2024 Training & Education Programme of the Year",
    ],
    topicTracks: [
        'Foundation',
        'Integration',
        'Quantification',
        'Culture',
        'Future AI',
        'Hard Reset',
        'Deep Dive',
    ],
    cpd: {
        certified: true,
        phases: ['phase1', 'phase2'],
    },
    urls: {
        event: 'https://2026.riskawarenessweek.com/',
        schedule: 'https://2026.riskawarenessweek.com/schedule/',
        speakers: 'https://2026.riskawarenessweek.com/speakers/',
        topics: 'https://2026.riskawarenessweek.com/topics/',
        tickets: 'https://2026.riskawarenessweek.com/tickets/',
        replays: 'https://2026.riskawarenessweek.com/replays/',
        faq: 'https://2026.riskawarenessweek.com/attendee/faq/',
        brand: 'https://www.riskawarenessweek.com/',
    },
};
