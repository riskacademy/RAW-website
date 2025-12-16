import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    href?: string;
    onClick?: () => void;
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-block px-12 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 text-center';

    const variants = {
        primary: 'bg-gradient-to-r from-purple-500 to-purple-700 text-white btn-glow hover:scale-105',
        secondary: 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400'
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedClassName} style={{ paddingLeft: '48px', paddingRight: '48px' }} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={combinedClassName} style={{ paddingLeft: '48px', paddingRight: '48px' }}>
            {children}
        </button>
    );
}
