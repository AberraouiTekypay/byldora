'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import Badge from '@/components/ui/Badge';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#F5F4F0] pt-12 pb-20 md:pt-16 md:pb-28 border-b border-[#D9DEE7] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Text Header & CTAs */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[2px] bg-[#E5E4DE] text-[11px] font-mono font-medium text-[#243244] uppercase tracking-wider mb-5 border border-[#D9DEE7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2457D6]" />
            <span>{t.hero.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#111827] leading-[1.1] mb-6">
            <span>{t.hero.headlineLine1}</span>{' '}
            <span className="block text-[#111827]">{t.hero.headlineLine2}</span>
          </h1>

          <p className="text-base sm:text-lg text-[#243244] leading-relaxed max-w-2xl mb-8">
            {t.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/dashboard/projects/new"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#111827] hover:bg-[#243244] rounded-[4px] transition-colors shadow-xs"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#111827] bg-white hover:bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px] transition-colors"
            >
              <span>{t.hero.secondaryCta}</span>
            </a>
          </div>
        </div>

        {/* Real Product/Data Composition (Section 10 & 11) */}
        <div className="bg-white border border-[#D9DEE7] rounded-[6px] shadow-sm overflow-hidden">
          
          {/* Document Top Bar */}
          <div className="bg-[#FAF9F6] border-b border-[#D9DEE7] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-bold text-[#111827] uppercase">
                {t.hero.projectName}
              </span>
              <span className="text-[#506A85]">&bull;</span>
              <span className="font-mono text-[#506A85]">
                {t.hero.projectBudget}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="default" size="sm">
                {t.hero.demoNotice}
              </Badge>
            </div>
          </div>

          {/* Status Metrics Strip */}
          <div className="px-4 sm:px-6 py-3 border-b border-[#E5E4DE] bg-[#FDFCFB] flex flex-wrap items-center justify-between gap-y-2 text-xs font-mono text-[#243244]">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-1.5">
                <span className="text-[#506A85]">Lots :</span>
                <span className="font-bold text-[#111827]">{t.hero.statusPackages}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#506A85]">Consultations :</span>
                <span className="font-bold text-[#111827]">{t.hero.statusRfqs}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#506A85]">Devis :</span>
                <span className="font-bold text-[#111827]">{t.hero.statusQuotes}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#506A85]">Adjudications :</span>
                <span className="font-bold text-[#18794E]">{t.hero.statusAwards}</span>
              </div>
            </div>

            <div className="text-[11px] text-[#506A85]">
              Réf : CAS-HOSP-2026-L3
            </div>
          </div>

          {/* Procurement Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-[#FAF9F6] border-b border-[#D9DEE7] text-[#506A85] text-[11px]">
                  <th className="py-2.5 px-4 sm:px-6 font-semibold">{t.hero.tableColPackage}</th>
                  <th className="py-2.5 px-4 text-center font-semibold">{t.hero.tableColSuppliers}</th>
                  <th className="py-2.5 px-4 text-right font-semibold">{t.hero.tableColLowest}</th>
                  <th className="py-2.5 px-4 text-right font-semibold">{t.hero.tableColComparable}</th>
                  <th className="py-2.5 px-4 sm:px-6 text-right font-semibold">{t.hero.tableColStatus}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E4DE] text-[#111827]">
                
                {/* Row 1: Aluminium */}
                <tr className="hover:bg-[#F5F4F0]/50 transition-colors">
                  <td className="py-3 px-4 sm:px-6 font-sans font-semibold text-[#111827]">
                    Menuiserie Aluminium & Façade Vitrée
                    <span className="block text-[11px] font-mono text-[#506A85] font-normal">Lot 04 • CCTP Eurocodes 1 & 9</span>
                  </td>
                  <td className="py-3 px-4 text-center">6</td>
                  <td className="py-3 px-4 text-right font-medium">4,82M MAD</td>
                  <td className="py-3 px-4 text-right font-medium text-[#2457D6]">4,96M MAD</td>
                  <td className="py-3 px-4 sm:px-6 text-right">
                    <Badge variant="warning">{t.hero.statusEvaluation}</Badge>
                  </td>
                </tr>

                {/* Row 2: HVAC (Active Bid Intelligence Focus) */}
                <tr className="bg-[#EFF6FF]/40 border-l-2 border-l-[#2457D6]">
                  <td className="py-3 px-4 sm:px-6 font-sans font-semibold text-[#111827]">
                    Génie Climatique (CVC & Traitement d’Air)
                    <span className="block text-[11px] font-mono text-[#2457D6] font-normal">Lot 08 • Spécifications ASHRAE & Pompes</span>
                  </td>
                  <td className="py-3 px-4 text-center">5</td>
                  <td className="py-3 px-4 text-right font-medium text-slate-500">2,27M MAD</td>
                  <td className="py-3 px-4 text-right font-bold text-[#18794E]">2,41M MAD</td>
                  <td className="py-3 px-4 sm:px-6 text-right">
                    <Badge variant="success">{t.hero.statusAwarded}</Badge>
                  </td>
                </tr>

                {/* Row 3: Tiles */}
                <tr className="hover:bg-[#F5F4F0]/50 transition-colors">
                  <td className="py-3 px-4 sm:px-6 font-sans font-semibold text-[#111827]">
                    Revêtements Sols & Murs (Grès Cérame)
                    <span className="block text-[11px] font-mono text-[#506A85] font-normal">Lot 12 • Classement UPEC U4 P3</span>
                  </td>
                  <td className="py-3 px-4 text-center">8</td>
                  <td className="py-3 px-4 text-right font-medium">2,27M MAD</td>
                  <td className="py-3 px-4 text-right font-medium text-[#2457D6]">2,41M MAD</td>
                  <td className="py-3 px-4 sm:px-6 text-right">
                    <Badge variant="default">{t.hero.statusReview}</Badge>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Hero Product Detail — Bid Intelligence Panel (Section 12) */}
          <div className="bg-[#FAF9F6] border-t border-[#D9DEE7] p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold text-[#243244] uppercase tracking-wider">
                {t.hero.bidIntelTitle}
              </span>
              <span className="text-[11px] font-mono text-[#506A85]">
                Lot CVC • Analyse d’Équivalence Économique
              </span>
            </div>

            {/* 3 Quotation Analysis Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              
              {/* Supplier A: Recommended / Winner */}
              <div className="bg-white border-2 border-[#18794E] rounded-[4px] p-3.5 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-[#111827]">{t.hero.supAName}</span>
                    <Badge variant="success">Sélectionné</Badge>
                  </div>
                  <div className="text-xl font-bold font-mono text-[#111827] my-1">
                    {t.hero.supAPrice}
                  </div>
                  <p className="text-xs text-[#243244] mt-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#18794E] shrink-0" />
                    <span>{t.hero.supAMeta}</span>
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#E5E4DE] text-[11px] text-[#18794E] font-medium font-mono">
                  ✓ Fret et grutage toiture inclus
                </div>
              </div>

              {/* Supplier B: Optical Illusion */}
              <div className="bg-white border border-[#D9DEE7] rounded-[4px] p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-[#111827]">{t.hero.supBName}</span>
                    <Badge variant="warning">Alerte périmètre</Badge>
                  </div>
                  <div className="text-xl font-bold font-mono text-slate-700 my-1">
                    {t.hero.supBPrice}
                  </div>
                  <p className="text-xs text-[#243244] mt-1.5 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-[#B7791F] shrink-0" />
                    <span>{t.hero.supBMeta}</span>
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#E5E4DE] text-[11px] text-[#B42318] font-mono">
                  {t.hero.supBExclusions}
                </div>
              </div>

              {/* Supplier C: Working Capital */}
              <div className="bg-white border border-[#D9DEE7] rounded-[4px] p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-[#111827]">{t.hero.supCName}</span>
                    <Badge variant="default">Option trésorerie</Badge>
                  </div>
                  <div className="text-xl font-bold font-mono text-[#111827] my-1">
                    {t.hero.supCPrice}
                  </div>
                  <p className="text-xs text-[#243244] mt-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#506A85] shrink-0" />
                    <span>{t.hero.supCMeta}</span>
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#E5E4DE] text-[11px] text-[#2457D6] font-mono">
                  Crédit fournisseur différé 90j
                </div>
              </div>

            </div>

            {/* Adjudication Summary Strip */}
            <div className="mt-3 bg-[#E5E4DE]/60 border border-[#D9DEE7] rounded-[4px] px-3.5 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <span className="text-[#506A85] uppercase tracking-wider text-[11px]">
                {t.hero.comparableCostLabel} :
              </span>
              <span className="font-bold text-[#111827]">
                {t.hero.comparableWinner}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
