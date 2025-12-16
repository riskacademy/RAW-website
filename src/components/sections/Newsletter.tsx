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
        <section id="newsletter" className="bg-black/20">
            <div className="container">
                <SectionHeader title="Planning for Best Risk Webinars 2026"
                    subtitle="Be the first to receive the agenda and call for papers for the upcoming online risk management events in October 2026"
                />

                <div className="mx-auto" style={{ marginTop: '60px' }}>
                    {status === 'success' ? (
                        <div className="glass rounded-2xl text-center" style={{ padding: '48px' }}>
                            <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-4">
                                Thank you for subscribing!
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg">
                                We&apos;ll keep you updated on RAW 2026 developments.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="glass rounded-2xl" style={{ padding: '48px' }}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    required
                                    disabled={status === 'loading'}
                                    className="flex-1 !px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors text-base disabled:opacity-50"
                                />
                                <Button
                                    variant="primary"
                                    onClick={() => { }}
                                    className={status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}
                                >
                                    {status === 'loading' ? 'Subscribing...' : 'Notify Me'}
                                </Button>
                            </div>
                            {status === 'error' && (
                                <p className="text-red-400 mt-4 text-center">
                                    {errorMessage}
                                </p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
