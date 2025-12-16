import React from 'react';

interface SectionHeaderProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    className?: string;
    titleClassName?: string;
}

export default function SectionHeader({ title, subtitle, className = '', titleClassName = '' }: SectionHeaderProps) {
    return (
        <div className={`text-center ${className}`}>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text px-4 ${titleClassName}`}>
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-gray-400 mx-auto leading-relaxed px-6">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
