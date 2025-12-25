'use client';

import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function Newsletter() {
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
        <section id="newsletter" className="bg-black/20 py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="gradient-text">RAW 2026 Announced</span>
                    </h2>

                    <p className="text-lg text-gray-300 mb-4">
                        Scheduled for 12-17 October 2026, focusing on practical application of risk-based decision making.
                    </p>

                    <p className="text-lg text-gray-300 mb-12">
                        No theory—only case studies from companies applying quantitative risk analysis in their processes and decisions.
                    </p>

                    <div className="max-w-md mx-auto mb-12">
                        {status === 'success' ? (
                            <div className="glass rounded-xl p-8 text-center border md:border-purple-500/30">
                                <h3 className="text-xl font-bold text-purple-400 mb-2">You're on the list!</h3>
                                <p className="text-gray-300">We'll notify you when registration opens for RAW 2026.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email for early access"
                                        required
                                        disabled={status === 'loading'}
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50"
                                    />
                                </div>
                                <Button
                                    variant="primary"
                                    className="w-full py-4 text-lg"
                                    onClick={() => { }}
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'Joining...' : 'Join the Waiting List'}
                                </Button>
                                {status === 'error' && (
                                    <p className="text-red-400 text-sm mt-2">{errorMessage}</p>
                                )}
                            </form>
                        )}
                    </div>

                    <p className="text-gray-400">
                        Interested in running a special purpose RAW event or hosting a physical RAW event in your country? <a href="https://riskacademy.blog/contact-us/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">Contact us</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
