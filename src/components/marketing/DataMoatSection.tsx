'use client';

import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowRight } from 'lucide-react';

export default function DataMoatSection() {
  const { t } = useLanguage();

  const STEPS = [
    { num: '01', title: t.dataMoat.step1, sub: 'Chantiers réels', color: 'border-l-4 border-l-[#2457D6] text-[#2457D6]' },
    { num: '02', title: t.dataMoat.step2, sub: 'Devis & arbitrages', color: 'border-l-4 border-l-[#506A85] text-[#506A85]' },
    { num: '03', title: t.dataMoat.step3, sub: 'Prix unitaires DQE', color: 'border-l-4 border-l-[#B66A3C] text-[#B66A3C]' },
    { num: '04', title: t.dataMoat.step4, sub: 'Indices de dispersion', color: 'border-l-4 border-l-[#B7791F] text-[#B7791F]' },
    { num: '05', title: t.dataMoat.step5, sub: 'Moindre risque', color: 'border-l-4 border-l-[#18794E] text-[#18794E]' },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#D9DEE7] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={t.dataMoat.eyebrow}
          headline={t.dataMoat.headline}
          subheadline={t.dataMoat.text}
        />

        {/* 7 Structured Data Factors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-10 text-xs font-mono">
          {t.dataMoat.factors.map((factor, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px] p-3 text-center hover:border-[#2457D6] transition-colors"
            >
              <div className="text-[10px] text-[#2457D6] font-bold mb-1">FACTEUR 0{idx + 1}</div>
              <div className="font-semibold text-[#111827]">{factor}</div>
            </div>
          ))}
        </div>

        {/* Financial Infrastructure Thesis Visual */}
        <div className="bg-[#FAF9F6] border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8">
          <div className="text-[11px] font-mono text-[#506A85] uppercase tracking-wider mb-6 pb-2 border-b border-[#E5E4DE] flex items-center justify-between">
            <span>Boucle d’Apprentissage Économique du Secteur BTP</span>
            <span className="text-[#2457D6] font-semibold">Mémoire Immuable des Marchés</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {STEPS.map((step, idx) => (
              <div
                key={idx}
                className={`bg-white border border-[#D9DEE7] rounded-[4px] p-4 text-center relative shadow-2xs ${step.color}`}
              >
                <div className="text-[10px] font-mono font-bold mb-1">
                  ÉTAPE {step.num}
                </div>
                <div className="font-bold text-sm text-[#111827] mb-1">
                  {step.title}
                </div>
                <div className="text-[11px] text-[#506A85] font-mono">
                  {step.sub}
                </div>
                {idx < STEPS.length - 1 && (
                  <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-[#D9DEE7] z-10">
                    <ArrowRight className="w-3.5 h-3.5 text-[#506A85]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-xs text-[#506A85] mt-6 pt-4 border-t border-[#E5E4DE] leading-relaxed">
            &bull; BYLDORA ne commercialise pas de données individuelles confidentielles : les indices de coûts et de délais sont consolidés de façon anonymisée pour calibrer les enveloppes budgétaires futures.
          </p>
        </div>

      </div>
    </section>
  );
}
