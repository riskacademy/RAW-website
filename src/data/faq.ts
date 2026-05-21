// 8 RAW2026-specific Q&A — visible on the page (#faq) AND in FAQPage JSON-LD.
// Texts MUST match exactly between HTML and JSON-LD (Google FAQ rich-result rule).

export interface RAW2026Faq {
    question: string;
    answer: string;
    tag?: string;
}

export const RAW2026_FAQ: RAW2026Faq[] = [
    {
        question: 'What is Risk Awareness Week 2026?',
        tag: 'RAW 2026',
        answer:
            "RAW2026 is the largest virtual conference dedicated to risk management, decision-making and AI-applied quantitative risk analysis. It runs 12–16 October 2026, fully online, organised by RISK-ACADEMY. Winner of FERMA's 2024 Training & Education Programme of the Year. 20,000+ professionals from 120+ countries have attended since 2020.",
    },
    {
        question: 'When is Risk Awareness Week 2026?',
        tag: 'RAW 2026',
        answer:
            'RAW 2026 runs 12–16 October 2026, five days, fully virtual. Phase 1 — The Hard Reset — runs 12–13 October, free fast-paced 30-minute sessions. Phase 2 — Implementation Sprints — runs 14–16 October, paid 3-hour interactive workshops.',
    },
    {
        question: 'Is Risk Awareness Week free?',
        tag: 'RAW 2026',
        answer:
            'Phase 1 (12–13 October) is FREE — full access to all 5 days of sessions live and replays, plus CPD certified certificate of attendance and free access to all RAW2025 replays. Phase 2 (14–16 October) requires a paid pass: $550 USD individual, or $2,000 USD Corporate Pass for up to 50 participants.',
    },
    {
        question: 'How much does a Phase 2 ticket to RAW 2026 cost?',
        tag: 'RAW 2026',
        answer:
            'Phase 2 — Implementation Sprints — is $550 USD per individual at current early-bird pricing. Corporate Pass is $2,000 USD for up to 50 participants and includes 2 hours of consultation; this rises to $2,500 USD after 30 June 2026. Prices increase at the end of each month.',
    },
    {
        question: 'Who organises Risk Awareness Week?',
        tag: 'RAW 2026',
        answer:
            'RISK-ACADEMY (riskacademy.ai), founded by Alex Sidorenko in 2012. Sidorenko is FERMA Risk Manager of the Year 2021 and RIMS Risk Management Implementation 2021 awardee. RAW has been held annually since 2019.',
    },
    {
        question: 'Does RAW 2026 give CPD credits?',
        tag: 'RAW 2026',
        answer:
            'Yes — both Phase 1 and Phase 2 grant a CPD certified certificate of attendance. Phase 2 includes 15+ practical workshops with downloadable training materials and 12-month replay access. A CFO-approved justification letter is also available to help secure corporate budget approval.',
    },
    {
        question: 'Who are the headline speakers at RAW 2026?',
        tag: 'RAW 2026',
        answer:
            "RAW 2026 features 36 speakers including Douglas Hubbard (Hubbard Decision Research, author of 'How to Measure Anything'), Sam Savage (ProbabilityManagement.org, author of 'The Flaw of Averages'), Leo Tilman (Agilion Systems CEO), Norman Marks (author of 'World-Class Risk Management'), Hernan Huwyler (IE Business School / Capgemini), Alex Sidorenko (Serra Verde), David T. Hulett, Reidar Bratvold (University of Stavanger), Steve Begg (University of Adelaide) and Mike Benefiel (GM Decision Analysis, Chevron).",
    },
    {
        question: 'How is Risk Awareness Week different from RIMS RiskWorld or FAIRCON?',
        tag: 'RAW 2026',
        answer:
            'RAW is fully virtual, decision-centric and quantification-first, and significantly more affordable than RIMS RiskWorld (in-person) or FAIRCON (FAIR-methodology focused). RAW teaches RM2 — quantifying uncertainty before decisions, not documenting it afterward. Featuring practitioners from Chevron, Microsoft, Lockheed Martin, Allianz and others. FERMA 2024 award winner.',
    },
    {
        question: 'How do I justify the ticket to CFO?',
        tag: 'RAW 2026',
        answer:
            'RAW provides a CFO-approved justification letter, downloadable from the 2026 home page, which you can adapt and submit to secure training budget. The economics are straightforward: a Phase 2 ticket ($550) is roughly 1/10 the cost of an in-person risk conference once flights, hotel and time-off are counted, and includes 15+ workshops with 12-month replay access. Concrete CFO-facing outcomes from past attendees: tighter contingency reserves driven by Monte Carlo modelling, lower insurance premiums backed by quantified risk profiles presented to underwriters, and faster board approvals for capital projects. A Corporate Pass ($2,000, up to 50 participants) reduces per-head cost below $40.',
    },
];
