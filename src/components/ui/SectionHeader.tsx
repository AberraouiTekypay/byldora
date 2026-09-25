'use client';

import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] bg-[#E5E4DE] text-[11px] font-mono font-medium text-[#243244] uppercase tracking-wider mb-4 border border-[#D9DEE7]`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2457D6]" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#111827] tracking-tight leading-[1.2]">
        {headline}
      </h2>
      {subheadline && (
        <p className="mt-3 text-sm sm:text-base text-[#243244] leading-relaxed">
          {subheadline}
        </p>
      )}
    </div>
  );
}
