import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function PastEvents() {
    const events = [
        {
            year: '2025',
            badge: 'Latest',
            theme: 'The Future of Risk Intelligence',
            description: 'The culmination of the RM2 journey. Focus on transforming risk teams into strategic profit drivers using AI and advanced quantification.',
            keynote: 'Leo Tilman, Sam Savage'
        },
        {
            year: '2024',
            theme: 'The AI Revolution',
            description: 'Don\'t lose your job to AI. Learn how to write risk policies with LLMs, run simulations in ChatGPT, and supercharge your risk team with GenAI.',
            keynote: 'Microsoft, Lockheed Martin'
        },
        {
            year: '2023',
            theme: 'Take More Risk',
            description: 'Shifting the mindset from risk avoidance to strategic risk-taking for competitive advantage. Featuring the "Gray Rhino" concept.',
            keynote: 'Michele Wucker'
        },
        {
            year: '2022',
            theme: 'The Psychology of Risk',
            description: 'Deep dive into human factors. How to overcome cognitive biases in risk identification and combine behavioral science with math.',
            keynote: 'Geoff Trickey'
        },
        {
            year: '2021',
            theme: 'ESG & Climate Decisions',
            description: 'Better and greener decision making. Applying quantitative risk analysis to climate change, pollution, and complex environmental issues.',
            keynote: null
        },
        {
            year: '2020',
            theme: 'Solidifying the RM2 Identity',
            description: 'The pivotal year that defined the decision-centric approach during the global pandemic.',
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
                    title={
                        <>
                            Archive of Best Risk Webinars
                            <span className="block mt-2">(2019–2025)</span>
                        </>
                    }
                    subtitle="Explore seven years of world-class risk management content"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ marginTop: '60px' }}>
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

                            <Button href={`#raw-${event.year}`} variant="secondary" className="w-full text-sm py-3 mt-auto">
                                Access RAW {event.year}
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
