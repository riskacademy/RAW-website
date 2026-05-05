'use client';

import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function UpcomingEvents() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'already' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to subscribe');
            }

            setStatus(data.alreadySubscribed ? 'already' : 'success');
            setEmail('');
        } catch (error) {
            console.error(error);
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
        }
    };

    return (
        <section id="upcoming-events">
            <div className="container">
                <SectionHeader title="RAW 2026 Announced" />

                <div className="mx-auto" style={{ marginTop: '60px' }}>
                    <div className="glass rounded-2xl text-center" style={{ padding: '64px' }}>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed" style={{ marginBottom: '48px' }}>
                            Scheduled for <span className="text-purple-400 font-semibold">12-16 October 2026</span>, focusing on
                            practical application of risk-based decision making.
                        </p>

                        <p className="text-base md:text-lg text-gray-400" style={{ marginBottom: '48px' }}>
                            No theory—only case studies from companies applying quantitative risk analysis in their processes and decisions.
                        </p>

                        {/* Primary CTA: send users to the actual 2026 event site (registration is open). */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto" style={{ marginBottom: '40px' }}>
                            <a
                                href="https://2026.riskawarenessweek.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-full transition-colors text-base md:text-lg w-full sm:w-auto"
                            >
                                View 2026 programme &amp; tickets
                                <span aria-hidden="true">→</span>
                            </a>
                            <a
                                href="https://2026.riskawarenessweek.com/speakers/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-purple-500/40 hover:border-purple-400 text-purple-300 hover:text-purple-200 font-medium rounded-full transition-colors text-base md:text-lg w-full sm:w-auto"
                            >
                                See all 36 speakers
                            </a>
                        </div>

                        <p className="text-sm text-gray-500" style={{ marginBottom: '40px' }}>
                            Phase 1 is FREE · Phase 2 from $550 · Corporate Pass $2,000
                        </p>

                        <div className="max-w-md mx-auto" style={{ marginBottom: '64px' }}>
                            {status === 'success' ? (
                                <div className="p-8 text-center border border-purple-500/30 rounded-xl bg-purple-500/10">
                                    <h3 className="text-xl font-bold text-purple-400 mb-2">You're subscribed!</h3>
                                    <p className="text-gray-300">You'll get RAW updates and announcements.</p>
                                </div>
                            ) : status === 'already' ? (
                                <div className="p-8 text-center border border-purple-500/30 rounded-xl bg-purple-500/10">
                                    <h3 className="text-xl font-bold text-purple-400 mb-2">You're already subscribed!</h3>
                                    <p className="text-gray-300">This email is already on the list — you'll get RAW updates and announcements.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        disabled={status === 'loading'}
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50"
                                    />
                                    <Button
                                        variant="primary"
                                        disabled={status === 'loading'}
                                        className="w-full py-4 text-lg"
                                        onClick={() => { }}
                                    >
                                        {status === 'loading' ? 'Subscribing...' : 'Get RAW updates and announcements'}
                                    </Button>
                                    {status === 'error' && (
                                        <p className="text-red-400 text-sm mt-2">{errorMessage}</p>
                                    )}
                                </form>
                            )}
                        </div>

                        <div className="border-t border-white/10" style={{ paddingTop: '64px' }}>
                            <p className="text-gray-400 text-sm md:text-base" style={{ marginBottom: '30px' }}>
                                Interested in running a special purpose RAW event or hosting a physical RAW event in your country?
                                <br className="hidden md:block" />
                                <span className="block mt-2 md:mt-1">
                                    <a href="http://riskacademy.blog/contact-us" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Contact us</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
