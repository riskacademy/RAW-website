import React from 'react';
import { RAW2026_FAQ } from '@/data/faq';
import { SITE_ORIGIN } from '@/data/speakers';

// FAQPage with 17 mainEntity items: 9 RAW2026-specific (synced with FAQ.tsx via
// /src/data/faq.ts) + 8 RM1-vs-RM2 methodology Q&A.
//
// Texts of the 9 RAW2026 Q&A are identical between this JSON-LD and the visible
// FAQ.tsx — required by Google's FAQ rich-result rule (mainEntity must be visible
// to the user).
//
// Linked into the @graph in JsonLd.tsx via @id references — about → #event,
// isPartOf → #website. Don't redefine those nodes here.

const WEBSITE_ID = `${SITE_ORIGIN}#website`;
const EVENT_2026_ID = 'https://2026.riskawarenessweek.com#event';

const RM_METHODOLOGY_QA = [
    {
        question: 'How often should we conduct risk assessments?',
        answer:
            "Risk analysis should happen before every significant decision, not on a calendar schedule. Instead of annual risk workshops, integrate uncertainty analysis into your existing processes: budget planning (Monte Carlo simulation of cost ranges), capital allocation (decision trees comparing investment options), vendor selection (quantified risk scoring), and project approvals (probabilistic schedule analysis).",
    },
    {
        question: 'How do we identify emerging risks?',
        answer:
            "The RM2 reframe: What new uncertainties could materially change the outcomes of our pending decisions? Model these uncertainties in your decision analysis, don't just list them in a register. Focus on specific uncertainties affecting your decision rather than abstract threats to catalog.",
    },
    {
        question: "What's the difference between inherent and residual risk?",
        answer:
            "The RM2 question is: How do different mitigation options change the probability distribution of outcomes for this specific decision? The decision isn't about calculating residual risk scores—it's comparing expected value and risk exposure across options using decision trees or Monte Carlo simulation.",
    },
    {
        question: 'How should we prioritize our top risks?',
        answer:
            "Prioritize decisions by their importance and uncertainty, not risks by subjective scores. Don't ask 'Which risk is #1 on our register?' Ask 'Which pending decisions have the highest stakes and greatest uncertainty?' Focus analytical resources where decision quality matters most.",
    },
    {
        question: 'How do we define our risk appetite?',
        answer:
            "What probability of adverse outcomes are we willing to accept for different decision types, and at what magnitude? For example: 'For capital projects, we accept 10% probability of exceeding budget by more than 20%, but only 2% probability of exceeding by more than 40%.' These quantified thresholds actually guide decisions.",
    },
    {
        question: 'Should we use a 3×3 or 5×5 risk matrix?',
        answer:
            "Neither. Risk matrices introduce systematic mathematical errors and cognitive biases. Use quantitative methods proportional to the decision's importance: Simple scenario analysis for routine decisions, decision trees for medium-stakes decisions, and Monte Carlo simulation for complex, high-value decisions.",
    },
    {
        question: 'How do we connect risk management to strategy?',
        answer:
            "In RM2, risk analysis IS strategic decision-making. Strategic planning without uncertainty analysis is just wishful thinking. When evaluating market entry, model the decision: What's the probability distribution of market size? Customer acquisition costs? Competitive response? The risk analysis and strategic analysis are the same activity.",
    },
    {
        question: 'How do we get executive buy-in for risk management?',
        answer:
            "Show executives how quantitative risk analysis improves their specific pending decisions. Don't present risk registers or heat maps in board meetings. Instead show: 'Here's our capital allocation decision modeled three ways, showing probability of achieving target returns under different uncertainty scenarios.' Executives buy in when risk analysis demonstrates clear ROI.",
    },
];

export default function FAQSchema() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${SITE_ORIGIN}/#faq`,
        'url': `${SITE_ORIGIN}/`,
        'inLanguage': 'en',
        'isPartOf': { '@id': WEBSITE_ID },
        'about': { '@id': EVENT_2026_ID },
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': 'https://2026.riskawarenessweek.com/',
            'url': 'https://2026.riskawarenessweek.com/',
            'name': 'Risk Awareness Week 2026',
            'isPartOf': { '@id': WEBSITE_ID },
            'about': { '@id': EVENT_2026_ID },
            'primaryImageOfPage':
                'https://d2q846bclm63a8.cloudfront.net/media/uploads/events/risk-awareness-week-2026/SmM6LcU2X6JJ8j65Vkf28C.png.png',
        },
        'mainEntity': [
            ...RAW2026_FAQ.map((item) => ({
                '@type': 'Question',
                'name': item.question,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': item.answer,
                },
            })),
            ...RM_METHODOLOGY_QA.map((item) => ({
                '@type': 'Question',
                'name': item.question,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': item.answer,
                },
            })),
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
    );
}
