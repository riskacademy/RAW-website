'use client';

import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        {
            question: 'How much time do I need to commit?',
            answer: 'Each workshop is 30-60 minutes. With 40+ sessions each year, you could complete everything in a week—or spread it across months. Lifetime access means you learn at your own pace. Most participants focus on 5-10 workshops most relevant to their immediate needs.'
        },
        {
            question: 'I\'m not a statistician. Is this too technical for me?',
            answer: 'Not at all. Sessions are organized by skill level—from foundational concepts anyone can grasp to advanced modeling for quants. Start with probability basics and risk logic, then progress to Monte Carlo and AI applications as you\'re ready. No PhD required.'
        },
        {
            question: 'Do I need to attend live sessions?',
            answer: 'No. Everything is recorded and available on-demand forever after the conference. Watch at 2am or during your commute. Pause, rewind, and revisit whenever you need.'
        },
        {
            question: 'Can my whole team participate?',
            answer: 'Yes. We offer team packages, and many organizations purchase access for entire risk, finance, or project management departments. Everyone gets their own login and can earn individual CPE credits.'
        },
        {
            question: 'Will I earn professional development credits?',
            answer: 'Yes. You can earn up to 40 CPD credits recognized by FERMA, RIMS, and other global bodies. Certificates are issued automatically when you complete workshops—no forms, no waiting.'
        },
        {
            question: 'What\'s included in my pass?',
            answer: 'Full access to all workshops, downloadable tools (Excel models, Python scripts, templates), CPD certificates, and lifetime on-demand viewing. Once you purchase, the content is yours to keep.'
        },
        {
            question: 'What if my industry isn\'t mentioned in the examples?',
            answer: 'The methods work across all industries. While case studies feature companies like Intuit, Shell, and mining operations, the quantitative techniques apply to any sector—healthcare, construction, finance, manufacturing, government. Risk is risk.'
        }
    ];

    return (
        <section>
            <div className="container">
                <SectionHeader title="Frequently Asked Questions" />

                <div className="mx-auto !space-y-6" style={{ marginTop: '60px' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full !px-12 !py-8 text-left flex items-start justify-between hover:bg-white/5 transition-colors group"
                            >
                                <h3 className="text-base md:text-lg font-semibold text-white pr-8 leading-tight">
                                    {faq.question}
                                </h3>
                                <span className="text-purple-400 text-xl font-bold flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className="!px-12 !pb-8 pt-2">
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
