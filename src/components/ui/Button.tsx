import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    href?: string;
    target?: string;
    rel?: string;
    onClick?: (() => void) | React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-block px-12 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 text-center';

    const variants = {
        primary: `bg-gradient-to-r from-purple-500 to-purple-700 text-white btn-glow hover:scale-105 ${disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''}`,
        secondary: `border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href && !disabled) {
        // Cast props to any because we are switching from ButtonHTMLAttributes to Anchor attributes
        // which usually works fine for common attributes like id, className, etc.
        return (
            <a href={href} className={combinedClassName} style={{ paddingLeft: '48px', paddingRight: '48px' }} {...(props as any)}>
                {children}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={combinedClassName}
            style={{ paddingLeft: '48px', paddingRight: '48px' }}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
