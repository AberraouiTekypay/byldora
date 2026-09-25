'use client';

import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ConstructionNativeSection() {
  const { t } = useLanguage();

  const PILLARS = [
    {
      num: '01',
      title: t.construction.a1Title,
      desc: t.construction.a1Desc,
      tag: 'Bordereaux multi-niveaux',
    },
    {
      num: '02',
      title: t.construction.a2Title,
      desc: t.construction.a2Desc,
      tag: 'Eurocodes & ASTM',
    },
    {
      num: '03',
      title: t.construction.a3Title,
      desc: t.construction.a3Desc,
      tag: 'Retenue de garantie 5–10%',
    },
    {
      num: '04',
      title: t.construction.a4Title,
      desc: t.construction.a4Desc,
      tag: '14–26 sem. approvisionnements',
    },
    {
      num: '05',
      title: t.construction.a5Title,
      desc: t.construction.a5Desc,
      tag: 'Attestations & assurances',
    },
    {
      num: '06',
      title: t.construction.a6Title,
      desc: t.construction.a6Desc,
      tag: 'Lots fourniture & pose',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#D9DEE7] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={t.construction.eyebrow}
          headline={t.construction.headline}
          subheadline={t.construction.subheadline}
        />

        {/* 6 Technical Construction Pillars Grid with Architectural Precision */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="border border-[#D9DEE7] bg-[#FAF9F6] rounded-[4px] p-6 hover:border-[#111827] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#506A85] mb-4 pb-2 border-b border-[#E5E4DE]">
                  <span className="font-semibold text-[#111827]">{pillar.num} / SPÉCIFICATION</span>
                  <span className="text-[10px] uppercase">{pillar.tag}</span>
                </div>

                <h3 className="font-bold text-base text-[#111827] tracking-tight mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#243244] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E5E4DE] text-[11px] font-mono text-[#506A85]">
                Conformité contractuelle vérifiée
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
