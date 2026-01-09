import React from 'react';
import Button from '../ui/Button';

export default function JustificationKit() {
    return (
        <section>
            <div className="container">
                <div className="mx-auto glass rounded-2xl text-center" style={{ padding: '64px' }}>
                    <h3 className="text-3xl md:text-4xl font-bold gradient-text" style={{ marginBottom: '48px' }}>
                        Need budget approval?
                    </h3>

                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mx-auto" style={{ marginBottom: '64px' }}>
                        Download our "Business Case" letter template to justify the training budget to your manager.
                        It outlines the ROI from switching to RM2 and the value of included tools.
                    </p>

                    <Button
                        href="/Strategic Transition to RM2 Proposal.pdf"
                        variant="primary"
                        {...({ download: "Strategic Transition to RM2 Proposal.pdf" } as any)}
                    >
                        Download PDF Template
                    </Button>
                </div>
            </div>
        </section>
    );
}
