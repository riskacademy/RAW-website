'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';

export default function HeroSection() {
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
        <section id="hero-section" className="min-h-screen flex items-start md:items-center justify-center px-6 pt-36 pb-20 md:py-20">
            {/* Background gradient effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Award Badge */}
                    <div className="inline-flex items-center glass px-8 py-4 rounded-full mb-12 animate-fade-in-up">
                        <span className="text-xs md:text-sm font-semibold text-purple-300 uppercase tracking-wide">
                            🏆 FERMA 2024 Training & Education Programme of the Year
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
                        <span className="text-white block mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Stop Managing Risk Registers.</span>
                        <span className="gradient-text">Start Making Better Decisions.</span>
                    </h1>

                    {/* Sub-headline / Schedule Info */}
                    <div className="animate-fade-in-up mb-12">
                        <p className="text-lg md:text-xl text-gray-300 mx-auto leading-relaxed mb-4">
                            Scheduled for 12-17 October 2026, focusing on practical application of risk-based decision making.
                        </p>
                        <p className="text-lg md:text-xl text-gray-300 mx-auto leading-relaxed">
                            No theory—only case studies from companies applying quantitative risk analysis in their processes and decisions.
                        </p>
                    </div>

                    {/* Waiting List Form */}
                    <div className="max-w-md mx-auto mb-16 animate-fade-in-up">
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

                    {/* Stats */}
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-fade-in-up" style={{ marginBottom: '64px' }}>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">20,000+</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">Professionals Trained</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">120+</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">Countries</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">200+</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">Expert Workshops</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">7 Years</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">Since 2019</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
