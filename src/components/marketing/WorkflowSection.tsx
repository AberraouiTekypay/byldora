'use client';

import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import SectionHeader from '@/components/ui/SectionHeader';

export default function WorkflowSection() {
  const { t } = useLanguage();

  const STAGES = [
    { num: '01', title: t.workflow.s1, desc: t.workflow.s1Desc },
    { num: '02', title: t.workflow.s2, desc: t.workflow.s2Desc },
    { num: '03', title: t.workflow.s3, desc: t.workflow.s3Desc },
    { num: '04', title: t.workflow.s4, desc: t.workflow.s4Desc },
    { num: '05', title: t.workflow.s5, desc: t.workflow.s5Desc },
    { num: '06', title: t.workflow.s6, desc: t.workflow.s6Desc },
    { num: '07', title: t.workflow.s7, desc: t.workflow.s7Desc, highlight: true },
    { num: '08', title: t.workflow.s8, desc: t.workflow.s8Desc },
    { num: '09', title: t.workflow.s9, desc: t.workflow.s9Desc },
  ];

  return (
    <section id="how-it-works" className="bg-[#F5F4F0] py-16 md:py-24 border-b border-[#D9DEE7] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={t.workflow.eyebrow}
          headline={t.workflow.headline}
          subheadline={t.workflow.subheadline}
        />

        {/* The BYLDORA Linear Enterprise Pipeline */}
        <div className="bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 shadow-xs">
          
          <div className="text-[11px] font-mono text-[#506A85] uppercase tracking-wider mb-6 pb-3 border-b border-[#E5E4DE] flex items-center justify-between">
            <span>Cycle d’Exécution Contractuelle BYLDORA</span>
            <span className="font-semibold text-[#111827]">Traçabilité Intégrale Devis-Marché</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STAGES.map((stage, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-[4px] border transition-colors flex flex-col justify-between ${
                  stage.highlight
                    ? 'border-[#2457D6] bg-[#EFF6FF]/30'
                    : 'border-[#D9DEE7] bg-white hover:border-[#111827]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#506A85] mb-2">
                    <span className="font-bold text-[#111827]">{stage.num}</span>
                    {stage.highlight && (
                      <span className="px-1.5 py-0.5 rounded-[2px] bg-[#2457D6] text-white text-[9px] font-mono uppercase font-bold">
                        Cœur Décisionnel
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-sm text-[#111827] tracking-tight mb-1.5">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[#243244] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-[#F5F4F0] flex items-center justify-between text-[10px] font-mono text-[#506A85]">
                  <span>Jalon vérifié</span>
                  <span className="font-semibold text-[#18794E]">✓ Auditable</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-[#E5E4DE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#506A85]">
            <div>
              &bull; Chaque étape génère un enregistrement horodaté immuable opposable en cas d’audit.
            </div>
            <a
              href="/dashboard"
              className="text-[#2457D6] hover:underline font-semibold font-sans"
            >
              Consulter un dossier de consultation type &rarr;
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
