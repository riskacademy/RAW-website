import React from 'react';
import SectionHeader from '../ui/SectionHeader';

export default function WhatIsRAW() {
    return (
        <section id="what-is-raw">
            <div className="container">
                <SectionHeader title="What is Risk Awareness Week?" />

                <div className="mx-auto space-y-8" style={{ marginTop: '60px' }}>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                        Risk Awareness Week (RAW) is an annual virtual conference that brings together{' '}
                        <span className="text-purple-400 font-semibold">20,000+ risk professionals</span> from{' '}
                        <span className="text-purple-400 font-semibold">120+ countries</span> to learn practical,
                        quantitative risk management skills.
                    </p>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                        Since 2019, RAW has delivered world-class workshops on risk modeling, decision science, and
                        behavioral psychology—100% online and available on demand after the conference, making advanced
                        training accessible regardless of location or schedule.
                    </p>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                        Winner of <span className="text-purple-400 font-semibold">FERMA&apos;s 2024 Training & Education Programme of the Year</span>,
                        RAW focuses on helping organizations move beyond traditional compliance checklists toward
                        decision-centric risk management that actually drives business value.
                    </p>
                </div>
            </div>
        </section>
    );
}
