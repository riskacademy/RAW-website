import React from 'react';
import SectionHeader from '../ui/SectionHeader';

export default function WhatIsRAW() {
    return (
        <section id="what-is-raw">
            <div className="container">
                <SectionHeader title="Why Risk Awareness Week Exists" />

                <div className="mx-auto space-y-8" style={{ marginTop: '60px' }}>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                        Traditional risk management fails because it treats risk as a compliance checklist rather than a decision-making tool.
                        Heat maps don&apos;t inform capital allocation. Risk registers don&apos;t prevent project failures. Qualitative assessments don&apos;t optimize insurance spend.
                    </p>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                        RAW teaches decision-centric risk management (RM2): quantifying uncertainty before decisions, not documenting it afterward.
                        Learn from practitioners at Chevron, Microsoft, Lockheed Martin, and Allianz who&apos;ve replaced compliance theater with methods that drive measurable business value.
                    </p>
                </div>
            </div>
        </section>
    );
}
