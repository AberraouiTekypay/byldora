'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { ArrowRight } from 'lucide-react';

export default function FinalCtaSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#F5F4F0] py-20 lg:py-28 border-b border-[#D9DEE7] text-[#111827]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[2px] bg-[#E5E4DE] text-[11px] font-mono font-medium text-[#243244] uppercase tracking-wider mb-6 border border-[#D9DEE7]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2457D6]" />
          <span>{t.finalCta.eyebrow}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight leading-[1.15] mb-6 max-w-3xl mx-auto">
          {t.finalCta.headline}
        </h2>

        <p className="text-base sm:text-lg text-[#243244] max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.finalCta.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/dashboard/projects/new"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#111827] hover:bg-[#243244] rounded-[4px] transition-colors shadow-xs"
          >
            <span>{t.finalCta.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#111827] bg-white hover:bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px] transition-colors"
          >
            <span>{t.finalCta.secondaryCta}</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
