'use client';

import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import { Check, AlertTriangle } from 'lucide-react';

export default function BidIntelligenceSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#F5F4F0] py-16 md:py-24 border-b border-[#D9DEE7] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={t.bidIntel.eyebrow}
          headline={t.bidIntel.headline}
          subheadline={t.bidIntel.subheadline}
        />

        {/* 3 Quotation Documents Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          {/* Supplier A: Recommended */}
          <div className="bg-white border-2 border-[#18794E] rounded-[4px] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-[#111827]">{t.bidIntel.supAHeader}</span>
                <Badge variant="success">Adjudication Recommandée</Badge>
              </div>

              <div className="text-2xl font-bold font-mono text-[#111827] my-2">
                {t.bidIntel.supAPrice}
              </div>

              <div className="space-y-2 mt-4 pt-3 border-t border-[#E5E4DE] text-xs">
                <div className="flex items-center gap-2 text-[#18794E]">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.bidIntel.supASpec}</span>
                </div>
                <div className="flex items-center gap-2 text-[#243244]">
                  <Check className="w-3.5 h-3.5 text-[#506A85] shrink-0" />
                  <span>{t.bidIntel.supATransport}</span>
                </div>
                <div className="flex items-center gap-2 text-[#243244]">
                  <Check className="w-3.5 h-3.5 text-[#506A85] shrink-0" />
                  <span>{t.bidIntel.supATerms}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#E5E4DE] bg-[#F0FDF4] -mx-6 -mb-6 p-4 rounded-b-[2px]">
              <div className="text-[10px] font-mono uppercase text-[#18794E] font-bold">Adjudication BYLDORA</div>
              <div className="text-xs font-bold font-mono text-[#18794E] mt-0.5">
                Coût comparable : {t.bidIntel.supAComp}
              </div>
              <div className="text-[11px] text-[#243244] mt-0.5">
                {t.bidIntel.supACompNote}
              </div>
            </div>
          </div>

          {/* Supplier B: The Illusion */}
          <div className="bg-white border border-[#D9DEE7] rounded-[4px] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-[#111827]">{t.bidIntel.supBHeader}</span>
                <Badge variant="warning">Illusion d’Optique</Badge>
              </div>

              <div className="text-2xl font-bold font-mono text-slate-800 my-2">
                {t.bidIntel.supBPrice}
              </div>
              <div className="text-xs text-[#B42318] font-semibold mb-2">
                {t.bidIntel.supBSub}
              </div>

              <div className="space-y-2 mt-2 pt-3 border-t border-[#E5E4DE] text-xs">
                <div className="flex items-center gap-2 text-[#B7791F]">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.bidIntel.supBSpec}</span>
                </div>
                <div className="flex items-center gap-2 text-[#B42318]">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.bidIntel.supBTransport}</span>
                </div>
                <div className="flex items-center gap-2 text-[#506A85]">
                  <span className="w-3.5 text-center font-bold">&bull;</span>
                  <span>{t.bidIntel.supBTerms}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#E5E4DE] bg-[#FFFBEB] -mx-6 -mb-6 p-4 rounded-b-[2px]">
              <div className="text-[10px] font-mono uppercase text-[#B7791F] font-bold">Coût Rendu Réel Réconcilié</div>
              <div className="text-xs font-bold font-mono text-[#B42318] mt-0.5">
                Coût comparable : {t.bidIntel.supBComp}
              </div>
              <div className="text-[11px] text-[#243244] mt-0.5">
                {t.bidIntel.supBCompNote}
              </div>
            </div>
          </div>

          {/* Supplier C: Working Capital */}
          <div className="bg-white border border-[#D9DEE7] rounded-[4px] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-[#111827]">{t.bidIntel.supCHeader}</span>
                <Badge variant="default">Atout Trésorerie</Badge>
              </div>

              <div className="text-2xl font-bold font-mono text-[#111827] my-2">
                {t.bidIntel.supCPrice}
              </div>

              <div className="space-y-2 mt-4 pt-3 border-t border-[#E5E4DE] text-xs">
                <div className="flex items-center gap-2 text-[#18794E]">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.bidIntel.supCSpec}</span>
                </div>
                <div className="flex items-center gap-2 text-[#243244]">
                  <Check className="w-3.5 h-3.5 text-[#506A85] shrink-0" />
                  <span>{t.bidIntel.supCTransport}</span>
                </div>
                <div className="flex items-center gap-2 text-[#2457D6] font-semibold">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.bidIntel.supCTerms}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#E5E4DE] bg-[#EFF6FF] -mx-6 -mb-6 p-4 rounded-b-[2px]">
              <div className="text-[10px] font-mono uppercase text-[#2457D6] font-bold">Analyse BFR & Financement</div>
              <div className="text-xs font-bold font-mono text-[#111827] mt-0.5">
                Coût comparable : {t.bidIntel.supCComp}
              </div>
              <div className="text-[11px] text-[#243244] mt-0.5">
                {t.bidIntel.supCCompNote}
              </div>
            </div>
          </div>

        </div>

        {/* Analytical Engine Parameters & Mandatory Disclaimer */}
        <div className="bg-white border border-[#D9DEE7] rounded-[4px] p-6">
          <div className="text-xs font-mono font-bold text-[#111827] uppercase tracking-wider mb-3">
            {t.bidIntel.analysisTitle}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-mono text-[#243244] mb-4">
            <div className="p-2.5 bg-[#FAF9F6] border border-[#E5E4DE] rounded-[2px]">
              <div className="text-[10px] text-[#506A85] uppercase">Fret & Logistique</div>
              <div className="font-semibold text-[#111827] mt-1">{t.bidIntel.paramTransport}</div>
            </div>
            <div className="p-2.5 bg-[#FAF9F6] border border-[#E5E4DE] rounded-[2px]">
              <div className="text-[10px] text-[#506A85] uppercase">Conformité CCTP</div>
              <div className="font-semibold text-[#111827] mt-1">{t.bidIntel.paramSpec}</div>
            </div>
            <div className="p-2.5 bg-[#FAF9F6] border border-[#E5E4DE] rounded-[2px]">
              <div className="text-[10px] text-[#506A85] uppercase">Exclusions Périmètre</div>
              <div className="font-semibold text-[#111827] mt-1">{t.bidIntel.paramExclusions}</div>
            </div>
            <div className="p-2.5 bg-[#FAF9F6] border border-[#E5E4DE] rounded-[2px]">
              <div className="text-[10px] text-[#506A85] uppercase">Trésorerie & BFR</div>
              <div className="font-semibold text-[#111827] mt-1">{t.bidIntel.paramTerms}</div>
            </div>
            <div className="p-2.5 bg-[#FAF9F6] border border-[#E5E4DE] rounded-[2px]">
              <div className="text-[10px] text-[#506A85] uppercase">Chemin Critique</div>
              <div className="font-semibold text-[#111827] mt-1">{t.bidIntel.paramLeadTime}</div>
            </div>
          </div>

          <p className="text-xs text-[#506A85] italic pt-3 border-t border-[#E5E4DE]">
            * {t.bidIntel.disclaimer}
          </p>
        </div>

      </div>
    </section>
  );
}
