import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
    return (
        <div className={`glass rounded-xl ${hover ? 'hover:glass-strong transition-all duration-300 hover:transform hover:-translate-y-2' : ''} ${className}`} style={{ padding: '48px' }}>
            {children}
        </div>
    );
}
