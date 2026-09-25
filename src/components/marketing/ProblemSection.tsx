'use client';

import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowDown, FileText } from 'lucide-react';

export default function ProblemSection() {
  const { t } = useLanguage();

  const STEPS = [
    { num: '01', name: t.problem.stepBoq, desc: 'Bordereau initial / CCTP' },
    { num: '02', name: t.problem.stepExcel, desc: 'Versions dérivées sans synchronisation' },
    { num: '03', name: t.problem.stepEmail, desc: 'Dossiers éparpillés en boîtes individuelles' },
    { num: '04', name: t.problem.stepPdf, desc: 'Devis scannés et notes non réconciliées' },
    { num: '05', name: t.problem.stepWhatsapp, desc: 'Photos de devis et engagements informels' },
    { num: '06', name: t.problem.stepPhone, desc: 'Accords verbaux sans valeur contractuelle' },
    { num: '07', name: t.problem.stepRevised, desc: 'Additifs reçus après date limite' },
    { num: '08', name: t.problem.stepComparison, desc: 'Ressaisie manuelle et risques d’omissions' },
    { num: '09', name: t.problem.stepPo, desc: 'Bon de commande décalé de la réalité' },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#D9DEE7] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={t.problem.eyebrow}
          headline={t.problem.headline}
          subheadline={t.problem.body}
        />

        {/* Information Architecture Diagram: Monochrome Document Fragments */}
        <div className="bg-[#FAF9F6] border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 lg:p-10">
          <div className="text-[11px] font-mono text-[#506A85] uppercase tracking-wider mb-6 pb-3 border-b border-[#E5E4DE] flex items-center justify-between">
            <span>Flux Réel des Passations de Marchés Traditionnelles</span>
            <span className="hidden sm:inline">9 Points de Rupture Documentaire</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D9DEE7] rounded-[4px] p-4 flex flex-col justify-between hover:border-[#111827] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#506A85] mb-2">
                    <span className="font-semibold text-[#111827]">{step.num}</span>
                    <FileText className="w-3.5 h-3.5 text-[#506A85]" />
                  </div>
                  <h3 className="font-semibold text-sm text-[#111827] tracking-tight mb-1">
                    {step.name}
                  </h3>
                  <p className="text-xs text-[#506A85] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < STEPS.length - 1 && (
                  <div className="mt-3 pt-2 border-t border-[#F5F4F0] flex items-center justify-between text-[10px] font-mono text-[#506A85]">
                    <span>Rupture de traçabilité</span>
                    <ArrowDown className="w-3 h-3 text-[#B7791F]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#E5E4DE] text-xs font-mono text-[#506A85] flex flex-wrap items-center justify-between gap-2">
            <div>&bull; {t.problem.caption}</div>
            <div className="text-[#B42318] font-semibold">Conséquence : 15 à 30% de surcoûts en litiges et réclamations</div>
          </div>
        </div>

      </div>
    </section>
  );
}
