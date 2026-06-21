import React from 'react';
import Link from 'next/link';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function PastEvents() {
    const events = [
        {
            year: '2025',
            badge: 'Latest',
            theme: 'The Future of Risk Intelligence',
            description: 'Transform risk teams into strategic profit drivers using AI and quantification. Features Leo Tilman and Sam Savage.',
            keynote: null
        },
        {
            year: '2024',
            theme: 'The AI Revolution',
            description: 'Write risk policies with LLMs, run simulations in ChatGPT, supercharge teams with GenAI. Microsoft and Lockheed Martin keynotes.',
            keynote: null
        },
        {
            year: '2023',
            theme: 'Take More Risk',
            description: 'Strategic risk-taking for competitive advantage. Featuring Michele Wucker\'s "Gray Rhino" concept.',
            keynote: null
        },
        {
            year: '2022',
            theme: 'The Psychology of Risk',
            description: 'Overcome cognitive biases in risk identification. Combine behavioral science with quantitative methods. 4,400+ participants from 120+ countries.',
            keynote: null
        },
        {
            year: '2021',
            theme: 'ESG & Climate Decisions',
            description: 'Apply quantitative risk analysis to climate change, pollution, and environmental issues.',
            keynote: null
        },
        {
            year: '2020',
            theme: 'Solidifying RM2',
            description: 'The pivotal year that defined decision-centric risk management during the global pandemic.',
            keynote: null
        },
        {
            year: '2019',
            theme: 'The Foundation',
            description: 'The operational blueprint for integrating risk management into planning, forecasting, and budgeting.',
            keynote: null
        }
    ];

    return (
        <section id="past-events" className="bg-black/20">
            <div className="container">
                <SectionHeader
                    title="Seven Years of Risk Intelligence"
                    subtitle=""
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ marginTop: '60px' }}>
                    {/* RAW 2026 — current edition. Visually elevated above the archive. */}
                    <Card
                        key="2026"
                        className="flex flex-col h-full border-purple-500/40 bg-gradient-to-br from-purple-500/15 to-transparent"
                    >
                        <div className="flex items-start justify-between" style={{ marginBottom: '40px' }}>
                            <h3 className="text-3xl font-bold gradient-text">
                                RAW 2026
                            </h3>
                            <span className="px-3 py-1 text-xs font-semibold bg-purple-500/30 text-purple-100 rounded-full uppercase tracking-wider">
                                Coming Soon
                            </span>
                        </div>

                        <h4 className="text-xl font-semibold text-white leading-tight" style={{ marginBottom: '32px' }}>
                            12-16 October 2026 · Fully virtual
                        </h4>

                        <p className="text-gray-300 text-sm leading-relaxed" style={{ marginBottom: '24px' }}>
                            36 speakers across 7 thematic tracks. Phase 1 (Hard Reset, free) exposes why traditional risk management fails. Phase 2 (Implementation Sprints, paid) — 3-hour interactive workshops on AI agents, Monte Carlo, contract risk, emerging-risk radar. CPD-certified.
                        </p>

                        <p className="text-purple-300 text-sm" style={{ marginBottom: '40px' }}>
                            <span className="font-semibold">Tickets:</span> Phase 1 free · Phase 2 from $550 · Corporate $2,000
                        </p>

                        <Button
                            href="https://2026.riskawarenessweek.com/"
                            variant="primary"
                            className="w-full text-sm py-3 mt-auto"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View RAW 2026 →
                        </Button>
                    </Card>

                    {events.map((event) => (
                        <Card key={event.year} className="flex flex-col h-full">
                            <div className="flex items-start justify-between" style={{ marginBottom: '40px' }}>
                                <h3 className="text-3xl font-bold gradient-text">
                                    RAW {event.year}
                                </h3>
                                {event.badge && (
                                    <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full">
                                        {event.badge}
                                    </span>
                                )}
                            </div>

                            <h4 className="text-xl font-semibold text-white leading-tight" style={{ marginBottom: '32px' }}>
                                {event.theme}
                            </h4>

                            <p className="text-gray-400 text-sm leading-relaxed" style={{ marginBottom: '40px' }}>
                                {event.description}
                            </p>

                            {event.keynote && (
                                <p className="text-purple-300 text-sm" style={{ marginBottom: '40px' }}>
                                    <span className="font-semibold">Keynote:</span> {event.keynote}
                                </p>
                            )}

                            <div className="mt-auto flex flex-col gap-2">
                                <Link
                                    href={`/archive/${event.year}`}
                                    className="block w-full text-center text-sm py-3 border-2 border-purple-500 text-purple-300 rounded-full font-semibold hover:bg-purple-500/10 transition-colors"
                                >
                                    Read about RAW {event.year} →
                                </Link>
                                <a
                                    href={`https://${event.year}.riskawarenessweek.com`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center text-xs text-gray-500 hover:text-purple-300 underline-offset-4 hover:underline"
                                >
                                    Open the original RAW {event.year} site
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '48px' }}>
                    <Link
                        href="/archive"
                        className="inline-block text-purple-300 hover:text-purple-200 font-medium underline-offset-4 hover:underline"
                    >
                        Browse the full RAW archive (2019–2025) →
                    </Link>
                </div>
            </div>
        </section>
    );
}
