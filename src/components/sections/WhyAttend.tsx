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
                <SectionHeader title="Who Benefits From RAW" />

                <div className="flex flex-col gap-8 mx-auto" style={{ marginTop: '60px' }}>
                    {/* Risk & Insurance Professionals */}
                    <Card>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            <div className="md:col-span-4 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-6">
                                        Risk & Insurance Professionals
                                    </h3>
                                    <div className="hidden md:block">
                                        <a href="#past-events" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-300 w-full text-center">
                                            Access Archive
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-8">
                                <ul className="space-y-4">
                                    {[
                                        'Replace 5×5 heat maps with Monte Carlo simulations that quantify actual exposure',
                                        'Demonstrate insurance ROI to underwriters using quantified risk controls',
                                        'Earn CPD credits without conference travel (accepted by major professional bodies)',
                                        'Learn from Douglas Hubbard, Sam Savage, Leo Tilman, and 50+ practitioners',
                                        'Access 200+ on-demand workshops covering decision trees, probability modeling, and behavioral economics',
                                        'Join 20,000+ professionals moving from compliance-focused RM1 to decision-centric RM2'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-400">
                                            <span className="text-green-500 mr-3 font-bold">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 md:hidden">
                                    <a href="#past-events" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-300 w-full text-center">
                                        Access Archive
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Organizations & Teams */}
                    <Card>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            <div className="md:col-span-4 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-6">
                                        Organizations & Teams
                                    </h3>
                                    <div className="hidden md:block">
                                        <a href="/Strategic Transition to RM2 Proposal.pdf" download className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-300 w-full text-center">
                                            Download Business Case
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-8">
                                <ul className="space-y-4">
                                    {[
                                        'Reduce insurance premiums by demonstrating quantified risk profiles to carriers',
                                        'Optimize contingency reserves using probability distributions instead of guesswork',
                                        'Integrate uncertainty modeling into budgeting, forecasting, and capital planning',
                                        'Train entire teams at fraction of traditional conference costs',
                                        'Implement techniques used by Fortune 500 companies in mining, oil & gas, manufacturing, finance, and technology',
                                        'Transform risk function from compliance burden into strategic profit driver'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-400">
                                            <span className="text-green-500 mr-3 font-bold">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 md:hidden">
                                    <a href="/Strategic Transition to RM2 Proposal.pdf" download className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-300 w-full text-center">
                                        Download Business Case
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Solution Providers & Sponsors */}
                    <Card>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            <div className="md:col-span-4 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-6">
                                        Solution Providers & Sponsors
                                    </h3>
                                    <div className="hidden md:block">
                                        <a href="mailto:alex.ausrisk@gmail.com" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-300 w-full text-center">
                                            Sponsorship Inquiry
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-8">
                                <ul className="space-y-4">
                                    {[
                                        'Reach 20,000+ decision-makers who control risk budgets and vendor selection',
                                        'Audience spans 120+ countries across mining, energy, manufacturing, finance, government, and technology',
                                        '298 US attendees, 236 UK, 222 Australia, 118 India in 2022 alone',
                                        '70% intermediate-to-expert practitioners actively implementing quantitative methods',
                                        'Workshop sponsorships, exhibition booths, and branded content opportunities',
                                        'Proven ROI: 91% attendee satisfaction, 88% excitement rating, 84% report learning new skills'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-400">
                                            <span className="text-green-500 mr-3 font-bold">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 md:hidden">
                                    <a href="mailto:alex.ausrisk@gmail.com" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-300 w-full text-center">
                                        Sponsorship Inquiry
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
