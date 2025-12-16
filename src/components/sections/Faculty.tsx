import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

export default function Faculty() {
    const featuredExperts = [
        {
            name: 'Douglas Hubbard',
            role: 'Founder/President, Hubbard Decision Research',
            bio: 'Creator of the Applied Information Economics (AIE) method and author of the bestselling book "How to Measure Anything: Finding the Value of Intangibles in Business."',
            photoUrl: 'https://d2q846bclm63a8.cloudfront.net/media/thumbnails/uploads/events/risk-awareness-for-charity-copy/HRs4hgL2zfkLXKjHe6Vvw4_square_medium.png',
            socials: [
                { type: 'linkedin', url: 'https://www.linkedin.com/in/dwhubbard/' },
                { type: 'facebook', url: 'https://www.facebook.com/hubbardresearch/' }
            ]
        },
        {
            name: 'Dr. Sam Savage',
            role: 'Executive Director, ProbabilityManagement.org',
            bio: 'Author of "The Flaw of Averages" and Adjunct Professor at Stanford University. He is the inventor of the SIPmath standard for probability management.',
            photoUrl: 'https://d2q846bclm63a8.cloudfront.net/media/thumbnails/uploads/events/risk-awareness-week-2024-copy/f4owjsE8cKtLSiC3UUEchb.jpg_square_medium.jpg',
            socials: [
                { type: 'linkedin', url: 'https://www.linkedin.com/in/sam-s-623674/' }
            ]
        },
        {
            name: 'Leo Tilman',
            role: 'Chairman & CEO, Agilion Systems',
            bio: 'Strategic advisor and co-author of "Agility" and "Financial Darwinism." He is a leading expert on strategy, risk, and organizational intelligence.',
            photoUrl: 'https://d2q846bclm63a8.cloudfront.net/media/thumbnails/uploads/events/risk-awareness-week-2024-copy/kuU77FB7UjvDU3jRrmfMQQ.jpg_square_medium.jpg',
            socials: [
                { type: 'linkedin', url: 'https://www.linkedin.com/in/leo-m-tilman-b76170a0/' }
            ]
        },
        {
            name: 'Norman Marks',
            role: 'Author, thought leader, retired CAE and CRO',
            bio: 'Author of "World-Class Risk Management" and a globally recognized mentor on GRC (Governance, Risk, and Compliance).',
            photoUrl: 'https://d2q846bclm63a8.cloudfront.net/media/thumbnails/uploads/events/risk-awareness-for-charity-copy/CkcjhWFGFuLywKibY9xX2Q_square_medium.jpg',
            socials: [
                { type: 'linkedin', url: 'http://www.linkedin.com/in/normanmarks/' }
            ]
        },
        {
            name: 'Alex Sidorenko',
            role: 'Head of Risk and Insurance, Serra Verde / Founder of RISK-ACADEMY',
            bio: 'An expert in quantitative risk analysis (Risk Quant) and decision-making. He was named the FERMA Risk Manager of the Year in 2021.',
            photoUrl: 'https://d2q846bclm63a8.cloudfront.net/media/thumbnails/uploads/events/risk-awareness-week-2020-copy-1/JnrXfaEC5AAXUPiaKz3dT7_square_medium.jpg',
            socials: [
                { type: 'linkedin', url: 'https://www.linkedin.com/in/alexsidorenko/' },
                { type: 'youtube', url: 'https://www.youtube.com/@riskacademy' },
                { type: 'facebook', url: 'https://www.facebook.com/theriskacademy/' }
            ]
        }
    ];

    const additionalExperts = [
        'Michele Wucker', 'Grant Purdy', 'Geoff Trickey', 'Hans Læssøe',
        'David R. Koenig', 'Roger Spitz', 'John Hollmann', 'Tom Keelin',
        'Max Henrion', 'David Vose'
    ];

    return (
        <section id="speakers" className="py-24">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title="Learn from practitioners, not sales managers"
                    subtitle="Our speakers define the agenda for global risk events. They come from the world's leading organizations, including Chevron, Microsoft, Lockheed Martin, Allianz, and Maersk."
                    titleClassName="mb-12 md:mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" style={{ marginTop: '60px' }}>
                    {featuredExperts.map((expert, index) => (
                        <Card key={index} className="h-full">
                            <div className="flex flex-col items-center text-center h-full">
                                <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-purple-500/30 relative">
                                    <img
                                        src={expert.photoUrl}
                                        alt={expert.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {expert.name}
                                </h3>
                                <p className="text-purple-400 text-sm font-medium mb-4 min-h-[40px]">
                                    {expert.role}
                                </p>
                                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {expert.bio}
                                </p>
                                <div className="flex gap-4 mt-auto">
                                    {expert.socials.map((social, sIndex) => (
                                        <a
                                            key={sIndex}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-purple-400 transition-colors"
                                            aria-label={`${expert.name} on ${social.type}`}
                                        >
                                            {social.type === 'linkedin' && (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            )}
                                            {social.type === 'facebook' && (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                            {social.type === 'youtube' && (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Additional experts */}
                <div className="glass rounded-2xl" style={{ marginTop: '60px', padding: '32px' }}>
                    <h3 className="text-2xl font-bold text-center mb-6 gradient-text">
                        + Additional Expert Contributors
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {additionalExperts.map((expert, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/30"
                            >
                                {expert}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
