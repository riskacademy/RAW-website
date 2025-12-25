'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Why RAW Exists', href: '#what-is-raw' },
        { label: 'RAW 2026', href: '#upcoming-events' },
        { label: 'Who Benefits', href: '#why-attend' },
        { label: 'Archive', href: '#past-events' },
        { label: 'Faculty', href: '#speakers' },
        { label: 'FAQ', href: '#faq' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <Image
                            src="/logo.png"
                            alt="Risk Awareness Week Logo"
                            width={16}
                            height={16}
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            style={{ height: 'auto' }}
                        />
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                            <span className="text-sm sm:text-base font-bold text-white leading-tight">RISK</span>
                            <span className="text-sm sm:text-base font-bold gradient-text leading-tight">AWARENESS</span>
                            <span className="text-sm sm:text-base font-bold text-white leading-tight">WEEK</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center">
                        {menuItems.map((item) => (
                            <li key={item.label} style={{ paddingLeft: '6px', paddingRight: '6px' }}>
                                <a
                                    href={item.href}
                                    className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white font-medium text-sm"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? 'Close' : 'Menu'}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4">
                        <ul className="space-y-3">
                            {menuItems.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="block text-gray-300 hover:text-purple-400 transition-colors font-medium py-2"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
