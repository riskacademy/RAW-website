import React from 'react';

type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    href: string;
    className?: string;
    disabled?: boolean;
};

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    href?: undefined;
    className?: string;
    disabled?: boolean;
};

type ButtonProps = AnchorButtonProps | NativeButtonProps;

export default function Button({
    children,
    variant = 'primary',
    href,
    className = '',
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles = 'block px-12 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 text-center';

    const variants = {
        primary: `bg-gradient-to-r from-purple-500 to-purple-700 text-white btn-glow hover:scale-105 ${disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''}`,
        secondary: `border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href && !disabled) {
        return (
            <a
                href={href}
                className={combinedClassName}
                style={{ paddingLeft: '48px', paddingRight: '48px' }}
                {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={combinedClassName}
            style={{ paddingLeft: '48px', paddingRight: '48px' }}
            disabled={disabled}
            {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {children}
        </button>
    );
}
