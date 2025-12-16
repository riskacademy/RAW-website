import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

export default function PracticalValue() {
    const values = [
        {
            title: 'Stop Overpaying for Insurance',
            description: 'Demonstrate quantified risk controls to insurers and negotiate premiums based on your actual risk profile—not industry averages. RAW participants have reduced insurance costs by showing underwriters the numbers.'
        },
        {
            title: 'Turn Risk Analysis Into Better Strategy',
            description: 'Integrate uncertainty modeling into budgeting, capital planning, and project selection. Compare investment options using expected value and probability distributions—not subjective heat maps that tell you little.'
        },
        {
            title: 'Right-Size Your Contingency Reserves',
            description: 'Calculate contingencies from actual cost and schedule uncertainty distributions. Stop over-provisioning low-risk projects and under-provisioning high-risk ones—optimize your capital efficiency.'
        },
        {
            title: 'Make Risk Information Decision-Useful',
            description: 'Learn how global companies integrate risk quantification into executive planning cycles. Get risk out of the compliance silo and into strategy discussions where it belongs.'
        }
    ];

    return (
        <section id="resources" className="bg-black/20">
            <div className="container">
                <SectionHeader title="Why choose RAW over other risk management events?" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mx-auto" style={{ marginTop: '60px' }}>
                    {values.map((value, index) => (
                        <Card key={index}>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-tight">
                                {value.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {value.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
