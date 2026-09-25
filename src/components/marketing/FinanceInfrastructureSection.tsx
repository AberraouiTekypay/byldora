'use client';

import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import SectionHeader from '@/components/ui/SectionHeader';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function FinanceInfrastructureSection() {
  const { t } = useLanguage();

  const STAGES = [
    { title: t.finance.f1, desc: 'Enveloppe & autorisations confirmées' },
    { title: t.finance.f2, desc: 'Engagement contractuel horodaté' },
    { title: t.finance.f3, desc: 'Solvabilité & conformité validées' },
    { title: t.finance.f4, desc: 'Réception contradictoire sur chantier' },
    { title: t.finance.f5, desc: 'Rapprochement attachement / DQE' },
    { title: t.finance.f6, desc: 'Affacturage & crédit fournisseur', highlight: true },
  ];

  return (
    <section className="bg-[#F5F4F0] py-16 md:py-24 border-b border-[#D9DEE7] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={t.finance.eyebrow}
          headline={t.finance.headline}
          subheadline={t.finance.text}
        />

        {/* Verification Chain */}
        <div className="bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 mb-6">
          <div className="text-[11px] font-mono text-[#506A85] uppercase tracking-wider mb-6 pb-2 border-b border-[#E5E4DE]">
            Chaîne de Vérification Opérationnelle vers la Liquidité BTP
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {STAGES.map((stage, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-[4px] border flex flex-col justify-between ${
                  stage.highlight
                    ? 'border-[#2457D6] bg-[#EFF6FF]/40'
                    : 'border-[#D9DEE7] bg-[#FAF9F6]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#506A85] mb-2">
                    <span>PHASE 0{idx + 1}</span>
                    <CheckCircle2 className={`w-3.5 h-3.5 ${stage.highlight ? 'text-[#2457D6]' : 'text-[#18794E]'}`} />
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-[#111827] mb-1">
                    {stage.title}
                  </div>
                  <div className="text-[11px] text-[#506A85] leading-snug">
                    {stage.desc}
                  </div>
                </div>

                {idx < STAGES.length - 1 && (
                  <div className="hidden lg:block pt-3 text-right text-[#D9DEE7]">
                    <ArrowRight className="w-3.5 h-3.5 inline text-[#506A85]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Regulatory / Financial Capability Disclaimer */}
        <div className="p-4 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px] text-xs text-[#506A85] leading-relaxed">
          <strong>Avis d’infrastructure :</strong> {t.finance.disclaimer}
        </div>

      </div>
    </section>
  );
}
