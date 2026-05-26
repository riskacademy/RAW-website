// 7 RAW2026 thematic tracks. Names verbatim from llms.txt and the
// /topics/ page on 2026.riskawarenessweek.com.
//
// Per-session schedule (titles, times, individual workshop facilitators) is
// not yet published for RAW2026 at the time of writing. Until it is, the
// get_session MCP tool dispatches at the *topic* level only. When the
// schedule lands, add a SESSIONS array here and update the route handler.

export interface Topic {
    id: string;
    name: string;
    description: string;
    phase: 'phase1' | 'phase2' | 'both';
    matchKeywords: string[];   // for free-text resolution
}

export const TOPICS: Topic[] = [
    {
        id: 'foundation',
        name: 'Foundation',
        description:
            'Core principles and methods of decision-centric risk management. Where risk analysis fits in decision-making, ISO 31000, RM2 philosophy.',
        phase: 'both',
        matchKeywords: ['foundation', 'iso 31000', 'rm2', 'principles'],
    },
    {
        id: 'integration',
        name: 'Integration',
        description:
            'Embedding risk analysis into strategic decisions, planning cycles and operations. Strategic risk, ERM, scenario planning.',
        phase: 'both',
        matchKeywords: ['integration', 'strategic', 'erm', 'enterprise', 'scenario'],
    },
    {
        id: 'quantification',
        name: 'Quantification',
        description:
            'Monte Carlo modelling, calibrated estimates, probability management, quantitative risk analysis methods that produce decision-grade numbers.',
        phase: 'both',
        matchKeywords: [
            'quantification',
            'monte carlo',
            'probability',
            'quantitative',
            'aie',
            'sip',
            'calibration',
        ],
    },
    {
        id: 'culture',
        name: 'Culture',
        description:
            'Behavioural risk, risk culture, organisational psychology, individual risk dispositions (Risk Type Compass), Gray Rhino dynamics.',
        phase: 'both',
        matchKeywords: ['culture', 'behavioural', 'behavioral', 'psychology', 'gray rhino'],
    },
    {
        id: 'future-ai',
        name: 'Future AI',
        description:
            'AI risk, AI governance, and AI-applied quantitative risk analysis. How AI changes both the risks themselves and the tools to analyse them.',
        phase: 'both',
        matchKeywords: ['ai', 'artificial intelligence', 'future', 'governance', 'agentic'],
    },
    {
        id: 'hard-reset',
        name: 'Hard Reset',
        description:
            'Phase 1 fast-paced 30-minute keynotes that challenge assumptions. Free, 12-13 October 2026.',
        phase: 'phase1',
        matchKeywords: ['hard reset', 'reset', 'phase 1', 'keynote'],
    },
    {
        id: 'deep-dive',
        name: 'Deep Dive',
        description:
            'Phase 2 3-hour implementation workshops with hands-on exercises and downloadable materials. Paid, 14-16 October 2026.',
        phase: 'phase2',
        matchKeywords: ['deep dive', 'workshop', 'phase 2', 'implementation', 'sprint'],
    },
];

export function findTopicByQuery(query: string): Topic | null {
    const q = query.toLowerCase().trim();
    if (!q) return null;
    // Exact id / name match wins.
    const exact = TOPICS.find((t) => t.id === q || t.name.toLowerCase() === q);
    if (exact) return exact;
    // Then keyword match.
    return TOPICS.find((t) => t.matchKeywords.some((kw) => q.includes(kw))) ?? null;
}
