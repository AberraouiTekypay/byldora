'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { Check, ArrowRight } from 'lucide-react';

export default function AudiencesSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#F5F4F0] py-16 md:py-24 border-b border-[#D9DEE7] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two Clean Editorial Columns (Section 18) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Column 1: Developers & Contractors */}
          <div className="bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-[11px] font-mono text-[#506A85] uppercase tracking-wider mb-2">
                Pour Donneurs d’Ordre
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight mb-2">
                {t.audiences.devTitle}
              </h3>
              <p className="text-sm text-[#243244] mb-6">
                {t.audiences.devSubtitle}
              </p>

              <ul className="space-y-3 mb-8 border-t border-[#E5E4DE] pt-4 text-xs sm:text-sm text-[#243244]">
                {t.audiences.devPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#18794E] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/for-developers"
              className="inline-flex items-center justify-between px-4 py-2.5 bg-[#111827] hover:bg-[#243244] text-white text-xs font-semibold rounded-[4px] transition-colors"
            >
              <span>{t.audiences.devCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Column 2: Suppliers & Subcontractors */}
          <div className="bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-[11px] font-mono text-[#506A85] uppercase tracking-wider mb-2">
                Pour Entreprises & Fabricants
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight mb-2">
                {t.audiences.supTitle}
              </h3>
              <p className="text-sm text-[#243244] mb-6">
                {t.audiences.supSubtitle}
              </p>

              <ul className="space-y-3 mb-8 border-t border-[#E5E4DE] pt-4 text-xs sm:text-sm text-[#243244]">
                {t.audiences.supPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#2457D6] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/for-suppliers"
              className="inline-flex items-center justify-between px-4 py-2.5 bg-white hover:bg-[#FAF9F6] text-[#111827] border border-[#D9DEE7] text-xs font-semibold rounded-[4px] transition-colors"
            >
              <span>{t.audiences.supCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
