import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function UpcomingEvents() {
    return (
        <section id="upcoming-events">
            <div className="container">
                <SectionHeader title="When is the next Risk Awareness Week?" />

                <div className="mx-auto" style={{ marginTop: '60px' }}>
                    <div className="glass rounded-2xl text-center" style={{ padding: '64px' }}>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed" style={{ marginBottom: '48px' }}>
                            <span className="text-purple-400 font-bold text-3xl md:text-4xl block mb-4">RAW 2026</span>
                            is scheduled for <span className="text-purple-400 font-semibold">12-17 October 2026</span> and will focus on
                            practical application of risk-based decision making.
                        </p>

                        <p className="text-base md:text-lg text-gray-400" style={{ marginBottom: '64px' }}>
                            No theory, only case studies from companies applying quantitative risk analysis in their processes and decisions.
                        </p>

                        <div style={{ marginBottom: '64px' }}>
                            <Button href="#newsletter" variant="primary">
                                Join the Waiting List
                            </Button>
                        </div>

                        <div className="border-t border-white/10" style={{ paddingTop: '64px' }}>
                            <p className="text-gray-400 text-sm md:text-base" style={{ marginBottom: '40px' }}>
                                Interested in running a special purpose RAW event or hosting a physical RAW event in your country?
                            </p>
                            <Button href="mailto:alex.ausrisk@gmail.com" variant="secondary">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
