import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black/50 border-t border-white/10 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold gradient-text">
                            Risk Awareness Week
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Organized by Risk Academy.
                        </p>
                        <p className="text-gray-500 italic text-sm">
                            &quot;Risk management is choosing well despite uncertainty.&quot;
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#speakers" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Speakers Directory
                                </Link>
                            </li>
                            <li>
                                <Link href="#sponsorship" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Sponsorship Opportunities
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Contact Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                        <div className="flex flex-col space-y-2">
                            <a
                                href="https://riskacademy.blog/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                Risk Academy Blog
                            </a>
                            <a
                                href="https://www.youtube.com/@RISKACADEMY"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                YouTube
                            </a>
                            <a
                                href="https://ru.linkedin.com/in/alexsidorenko"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://twitter.com/alexei_sid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                X / Twitter
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    <p>&copy; 2025 Risk Awareness Week. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
