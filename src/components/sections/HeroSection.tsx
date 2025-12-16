import React from 'react';
import Button from '../ui/Button';

export default function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
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
                            Winner: FERMA Training Programme of the Year
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
                        <span className="text-white block mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Risk Awareness Week (RAW)</span>
                        <span className="gradient-text">The #1 Global Virtual Risk Conference</span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-lg md:text-xl text-gray-300 mx-auto leading-relaxed animate-fade-in-up" style={{ marginBottom: '64px' }}>
                        Looking for the best online risk management events? Join over{' '}
                        <span className="text-purple-400 font-semibold">20,000 professionals</span> from{' '}
                        <span className="text-purple-400 font-semibold">120 countries</span> at the world&apos;s largest platform
                        dedicated to risk management, decision making and quantitative risk analysis.
                    </p>

                    {/* Status */}
                    <div className="flex items-center justify-center animate-fade-in-up gap-4" style={{ marginBottom: '64px' }}>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="text-gray-400 text-sm md:text-base">
                            The 2025 Season has concluded. The full archive is now available on-demand.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
                        <Button href="#past-events" variant="primary">
                            Watch 2025 Workshops
                        </Button>
                        <Button href="#past-events" variant="secondary">
                            Browse Past Events
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
