'use client';

import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function UpcomingEvents() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
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

            setStatus('success');
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
                            Scheduled for <span className="text-purple-400 font-semibold">12-17 October 2026</span>, focusing on
                            practical application of risk-based decision making.
                        </p>

                        <p className="text-base md:text-lg text-gray-400" style={{ marginBottom: '48px' }}>
                            No theory—only case studies from companies applying quantitative risk analysis in their processes and decisions.
                        </p>

                        <div className="max-w-md mx-auto" style={{ marginBottom: '64px' }}>
                            {status === 'success' ? (
                                <div className="p-8 text-center border border-purple-500/30 rounded-xl bg-purple-500/10">
                                    <h3 className="text-xl font-bold text-purple-400 mb-2">You're on the list!</h3>
                                    <p className="text-gray-300">We'll notify you when registration opens for RAW 2026.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
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
                                        {status === 'loading' ? 'Joining...' : 'Join the Waiting List'}
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
