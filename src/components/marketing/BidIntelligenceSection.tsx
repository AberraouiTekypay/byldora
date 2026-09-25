'use client';

import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import { Check, AlertTriangle, ShieldCheck } from 'lucide-react';

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

        {/* Featured Technical Visual & Blueprint Inspection */}
        <div className="mb-12 bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 relative rounded-[4px] overflow-hidden border border-[#D9DEE7] group shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/site-inspection.jpg"
                alt="Site Inspection, Blueprints, Hardhat, and Tablet Reconciling Construction Scope"
                className="w-full h-auto object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/75 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs border border-[#D9DEE7] rounded-[3px] p-2.5 text-[11px] font-mono text-[#111827] flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#18794E]" />
                  Vérification Plans &amp; CCTP
                </span>
                <span className="text-[#2457D6]">Zéro Avenant Imprévu</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[3px] bg-[#FAF9F6] border border-[#D9DEE7] text-[11px] font-mono text-[#18794E] font-semibold">
                <span>RÉCONCILIATION ÉCONOMIQUE TERRAIN-BUREAU D’ÉTUDES</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight leading-snug">
                Détectez les exclusions dissimulées avant de signer les marchés.
              </h3>

              <p className="text-xs sm:text-sm text-[#243244] leading-relaxed">
                Les métreurs et ingénieurs travaux confrontent les fiches techniques aux bordereaux numériques en temps réel. Les frais de transport non inclus, les sujétions de grutage et les conditions de paiement défavorables sont automatiquement convertis en montants équivalents réconciliés.
              </p>

              {/* Visual Economic Reconciliation Breakdown Bar */}
              <div className="space-y-3 pt-2">
                {/* Supplier B */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="font-semibold text-slate-700">Maghreb Clim (Moins-Disant Apparent) : 2 270 000 MAD</span>
                    <span className="font-bold text-[#B42318]">+360 000 MAD Périmètre Omis = 2 630 000 MAD</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-[2px] overflow-hidden flex">
                    <div className="bg-[#B7791F] h-full" style={{ width: '86%' }} />
                    <div className="bg-[#B42318] h-full" style={{ width: '14%' }} title="Fret omis + Grutage + Écart moteur" />
                  </div>
                </div>

                {/* Supplier A (Verified Winner) */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-[#18794E]">Atlas Clim (Lauréat Vérifié) : 2 410 000 MAD</span>
                    <span className="font-bold text-[#18794E]">✓ Tout Inclus Chantier : 2 410 000 MAD (Économie Réelle 220k)</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-[2px] overflow-hidden flex">
                    <div className="bg-[#18794E] h-full" style={{ width: '92%' }} />
                  </div>
                </div>

                {/* Supplier C */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="font-semibold text-slate-600">Sahara Thermal (Atout Trésorerie) : 2 490 000 MAD</span>
                    <span className="font-bold text-[#2457D6]">-28 000 MAD Gain BFR Traite 90j = 2 462 000 MAD</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-[2px] overflow-hidden flex">
                    <div className="bg-[#2457D6] h-full" style={{ width: '94%' }} />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 3 Quotation Documents Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          {/* Supplier A: Recommended */}
          <div className="bg-white border-2 border-[#18794E] rounded-[4px] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-[#111827]">{t.bidIntel.supAHeader}</span>
                <Badge variant="success">Adjudication Recommandée</Badge>
              </div>

              <div className="text-2xl font-bold font-mono text-[#18794E] my-2">
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
                <Badge variant="blue">Atout Trésorerie</Badge>
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
