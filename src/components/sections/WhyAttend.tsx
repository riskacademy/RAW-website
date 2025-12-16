import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

export default function WhyAttend() {
    const benefits = [
        {
            title: 'Tired of risk assessments that don\'t inform decisions?',
            description: 'RAW teaches you how to build risk models that executives actually use—moving beyond red/yellow/green heatmaps to quantitative analysis that drives business value.'
        },
        {
            title: 'Need CPD but can\'t justify conference travel?',
            description: 'Access 200+ world-class workshops from industry experts like Douglas Hubbard and Sam Savage—on-demand, from your desk, at a fraction of traditional conference costs.'
        },
        {
            title: 'Struggling to get risk management taken seriously?',
            description: 'Learn proven techniques for communicating uncertainty, quantifying risks, and demonstrating ROI—from practitioners who\'ve successfully implemented modern risk management in organizations like yours.'
        },
        {
            title: 'Want practical skills, not theory?',
            description: 'Every workshop focuses on implementable techniques with real examples—no academic lectures, no vendor pitches, just methods you can apply Monday morning.'
        }
    ];

    return (
        <section id="why-attend" className="bg-black/20">
            <div className="container">
                <SectionHeader title="Why Attend Risk Awareness Week?" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mx-auto" style={{ marginTop: '60px' }}>
                    {benefits.map((benefit, index) => (
                        <Card key={index}>
                            <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {benefit.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
