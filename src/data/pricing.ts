// RAW2026 pricing — verbatim from src/data/faq.ts and llms.txt.
//
// Source: 'Phase 1 (12-13 Oct) FREE; Phase 2 (14-16 Oct) $550 USD individual;
// Corporate Pass $2,000 USD for up to 50 participants, rises to $2,500 USD
// after 30 June 2026. Prices increase at the end of each month (early-bird).'

export interface PricingTier {
    id: 'phase1_free' | 'phase2_individual' | 'phase2_corporate';
    name: string;
    phase: 'phase1' | 'phase2';
    dates: string;
    priceUSD: number;
    priceDisplay: string;
    perSeat: boolean;
    seats?: number;
    earlyBird: boolean;
    note?: string;
    includes: string[];
}

export interface Pricing {
    currency: 'USD';
    asOf: string;          // ISO YYYY-MM-DD, when these prices were verified
    tiers: PricingTier[];
    notes: string[];
    ticketsUrl: string;
    cfoJustificationAvailable: boolean;
}

export const PRICING: Pricing = {
    currency: 'USD',
    asOf: '2026-05-26',
    tiers: [
        {
            id: 'phase1_free',
            name: 'Phase 1 - The Hard Reset',
            phase: 'phase1',
            dates: '12-13 October 2026',
            priceUSD: 0,
            priceDisplay: 'Free',
            perSeat: true,
            earlyBird: false,
            includes: [
                'Full access to all 5 days of sessions, live and replays',
                'CPD certified certificate of attendance',
                'Free access to all RAW2025 replays',
            ],
        },
        {
            id: 'phase2_individual',
            name: 'Phase 2 - Implementation Sprints (Individual)',
            phase: 'phase2',
            dates: '14-16 October 2026',
            priceUSD: 550,
            priceDisplay: '$550 USD',
            perSeat: true,
            earlyBird: true,
            note: 'Prices increase at the end of each month.',
            includes: [
                '15+ practical workshops with downloadable training materials',
                '12-month replay access',
                'CPD certified certificate of attendance',
            ],
        },
        {
            id: 'phase2_corporate',
            name: 'Corporate Pass',
            phase: 'phase2',
            dates: '14-16 October 2026',
            priceUSD: 2000,
            priceDisplay: '$2,000 USD',
            perSeat: false,
            seats: 50,
            earlyBird: true,
            note: 'Rises to $2,500 USD after 30 June 2026. Includes 2 hours of consultation. Per-head cost below $40.',
            includes: [
                'Everything in Phase 2 Individual',
                'Up to 50 participants',
                '2 hours of consultation',
            ],
        },
    ],
    notes: [
        'CFO-approved justification letter is available to help secure corporate budget approval.',
        'A Phase 2 ticket ($550) is roughly 1/10 the cost of an in-person risk conference once flights, hotel and time-off are counted.',
    ],
    ticketsUrl: 'https://2026.riskawarenessweek.com/tickets/',
    cfoJustificationAvailable: true,
};
