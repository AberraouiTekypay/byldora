'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'blue' | 'oxide';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors border focus:outline-none focus:ring-1 focus:ring-[#2457D6] disabled:opacity-50 disabled:pointer-events-none rounded-[4px] tracking-tight';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-5 py-2.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#111827] text-white border-[#111827] hover:bg-[#243244] hover:border-[#243244] shadow-xs',
    blue:
      'bg-[#2457D6] text-white border-[#2457D6] hover:bg-[#1D47B8] hover:border-[#1D47B8] shadow-xs',
    secondary:
      'bg-white text-[#111827] border-[#D9DEE7] hover:bg-[#F5F4F0] hover:border-[#CBD5E1]',
    ghost:
      'bg-transparent text-[#243244] border-transparent hover:bg-[#E5E4DE]/60 hover:text-[#111827]',
    oxide:
      'bg-[#B66A3C] text-white border-[#B66A3C] hover:bg-[#9E572E] shadow-xs',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
