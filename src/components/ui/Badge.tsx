'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'critical' | 'oxide' | 'blue' | 'mono';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
}: BadgeProps) {
  const base =
    'inline-flex items-center font-mono font-medium tracking-wide uppercase rounded-[2px] border';

  const sizes = {
    sm: 'text-[10px] px-1.5 py-0.5 leading-tight gap-1',
    md: 'text-[11px] px-2 py-0.5 leading-normal gap-1.5',
  };

  const variants = {
    default: 'bg-[#FAF9F6] text-[#243244] border-[#D9DEE7]',
    success: 'bg-[#F0FDF4] text-[#18794E] border-[#BBF7D0]',
    warning: 'bg-[#FFFBEB] text-[#B7791F] border-[#FDE68A]',
    critical: 'bg-[#FEF2F2] text-[#B42318] border-[#FECACA]',
    oxide: 'bg-[#FAF3F0] text-[#B66A3C] border-[#E8CFC2]',
    blue: 'bg-[#EFF6FF] text-[#2457D6] border-[#BFDBFE]',
    mono: 'bg-[#111827] text-white border-[#111827]',
  };

  return (
    <span className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
