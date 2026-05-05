import React from 'react';
import Link from 'next/link';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { HEADLINE_SPEAKERS } from '@/data/speakers';

export default function Faculty() {
    return (
        <section id="speakers" className="py-24">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title="Learn From Industry Leaders"
                    subtitle="RAW speakers are practitioners, not sales managers. They define the agenda for global risk events and come from organizations including Chevron, Microsoft, Lockheed Martin, Allianz, Maersk, and NASA."
                    titleClassName="mb-12 md:mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" style={{ marginTop: '60px' }}>
                    {HEADLINE_SPEAKERS.map((expert) => (
                        <Card key={expert.slug} className="h-full">
                            <div className="flex flex-col items-center text-center h-full">
                                <Link
                                    href={`/speakers/${expert.slug}`}
                                    className="block w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-purple-500/30 relative hover:border-purple-400 transition-colors"
                                    aria-label={`Read more about ${expert.name}`}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={expert.image}
                                        alt={expert.name}
                                        className="w-full h-full object-cover"
                                    />
                                </Link>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    <Link
                                        href={`/speakers/${expert.slug}`}
                                        className="hover:text-purple-300 transition-colors"
                                    >
                                        {expert.name}
                                    </Link>
                                </h3>
                                <p className="text-purple-400 text-sm font-medium mb-4 min-h-[40px]">
                                    {expert.role}
                                </p>
                                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {expert.shortBio}
                                </p>
                                <div className="flex gap-4 mt-auto items-center">
                                    {expert.socials.map((social) => (
                                        <a
                                            key={social.url}
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
                                            {social.type === 'twitter' && (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            )}
                                            {social.type === 'youtube' && (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                            {social.type === 'website' && (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
                                                </svg>
                                            )}
                                        </a>
                                    ))}
                                    <Link
                                        href={`/speakers/${expert.slug}`}
                                        className="ml-2 text-purple-300 hover:text-purple-200 text-sm font-medium underline-offset-4 hover:underline"
                                    >
                                        Read bio →
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
