'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { ArrowRight, CheckCircle2, AlertCircle, ShieldCheck, FileCheck } from 'lucide-react';
import Badge from '@/components/ui/Badge';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#F5F4F0] pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#D9DEE7] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Hero: Value Proposition (Left) + Editorial Architectural Visual (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          
          {/* Left Column: Headline, Subhead, CTAs & Key Metrics */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[3px] bg-white border border-[#D9DEE7] text-[11px] font-mono font-medium text-[#243244] uppercase tracking-wider mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2457D6] animate-pulse" />
              <span>{t.hero.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#111827] leading-[1.1] mb-5">
              <span>{t.hero.headlineLine1}</span>{' '}
              <span className="block text-[#111827] mt-1">{t.hero.headlineLine2}</span>
            </h1>

            <p className="text-base sm:text-lg text-[#243244] leading-relaxed max-w-2xl mb-7">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              <Link
                href="/dashboard/projects/new"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#111827] hover:bg-[#243244] rounded-[4px] transition-colors shadow-xs"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#111827] bg-white hover:bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px] transition-colors shadow-2xs"
              >
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>

            {/* 4 Architectural Telemetry KPI Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
              <div className="bg-white border border-[#D9DEE7] rounded-[4px] p-3 shadow-2xs">
                <div className="text-[10px] text-[#506A85] uppercase">Capital Sous Tender</div>
                <div className="text-lg font-bold text-[#111827] mt-0.5 font-mono">38,4M MAD</div>
                <div className="text-[10px] text-[#2457D6] mt-0.5">● 27 Lots BTP</div>
              </div>
              <div className="bg-white border border-[#D9DEE7] rounded-[4px] p-3 shadow-2xs">
                <div className="text-[10px] text-[#506A85] uppercase">Gain Coût Rendu</div>
                <div className="text-lg font-bold text-[#18794E] mt-0.5 font-mono">+1,24M MAD</div>
                <div className="text-[10px] text-[#18794E] mt-0.5">✓ Écarts réconciliés</div>
              </div>
              <div className="bg-white border border-[#D9DEE7] rounded-[4px] p-3 shadow-2xs">
                <div className="text-[10px] text-[#506A85] uppercase">Longs Délais Usine</div>
                <div className="text-lg font-bold text-[#B7791F] mt-0.5 font-mono">14–26 Sem.</div>
                <div className="text-[10px] text-[#B7791F] mt-0.5">⚠ Chemin critique</div>
              </div>
              <div className="bg-white border border-[#D9DEE7] rounded-[4px] p-3 shadow-2xs">
                <div className="text-[10px] text-[#506A85] uppercase">Conformité CCTP</div>
                <div className="text-lg font-bold text-[#111827] mt-0.5 font-mono">100%</div>
                <div className="text-[10px] text-[#506A85] mt-0.5">★ Eurocodes &amp; ASTM</div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Architectural Photograph Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white border border-[#D9DEE7] rounded-[6px] overflow-hidden shadow-md group">
              
              {/* Header Bar */}
              <div className="bg-[#111827] text-white px-4 py-2.5 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2457D6] animate-ping" />
                  <span className="text-slate-200 text-[11px] font-semibold uppercase tracking-wider">
                    Chantier Pilote : Casablanca
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-[#2457D6] text-white text-[10px] rounded-[2px] font-bold">
                  38.4M MAD
                </span>
              </div>

              {/* Documentary Architectural Photography (Monocle / Wallpaper* Style) */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/concrete-monolith.jpg"
                  alt="Raw Reinforced Concrete and Steel Construction Site in Casablanca"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Data Annotation on Image */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs border border-[#D9DEE7] rounded-[4px] p-3 text-xs shadow-md">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#111827] mb-1 font-bold">
                    <span>Complexe Tertiaire &amp; Résidentiel</span>
                    <span className="text-[#18794E] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Supervision Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#506A85] font-mono">
                    <span>Gros Œuvre &amp; Façade Acier</span>
                    <span className="text-[#2457D6] font-semibold">27 Lots Techniques Structurés</span>
                  </div>
                </div>
              </div>

              {/* Footer Meta */}
              <div className="p-3 bg-[#FAF9F6] border-t border-[#E5E4DE] flex items-center justify-between text-[11px] font-mono text-[#506A85]">
                <span>Normes : Eurocodes 1, 3 &amp; 9</span>
                <span className="text-[#111827] font-semibold">Attribution Vérifiée</span>
              </div>

            </div>
          </div>

        </div>

        {/* Real Product/Data Composition: Procurement Table & Bid Intelligence Adjudication */}
        <div className="bg-white border border-[#D9DEE7] rounded-[6px] shadow-sm overflow-hidden">
          
          {/* Document Top Bar */}
          <div className="bg-[#FAF9F6] border-b border-[#D9DEE7] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-bold text-[#111827] uppercase">
                {t.hero.projectName}
              </span>
              <span className="text-[#506A85]">&bull;</span>
              <span className="font-mono text-[#2457D6] font-bold">
                {t.hero.projectBudget}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="blue" size="sm">
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
              Réf : CAS-HOSP-2026-L3 &bull; Salle d’Adjudication Ouverte
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
                    Menuiserie Aluminium &amp; Façade Vitrée
                    <span className="block text-[11px] font-mono text-[#B66A3C] font-normal">Lot 04 • CCTP Eurocodes 1 &amp; 9</span>
                  </td>
                  <td className="py-3 px-4 text-center font-bold">6</td>
                  <td className="py-3 px-4 text-right font-medium">4,82M MAD</td>
                  <td className="py-3 px-4 text-right font-semibold text-[#2457D6]">4,96M MAD</td>
                  <td className="py-3 px-4 sm:px-6 text-right">
                    <Badge variant="warning">{t.hero.statusEvaluation}</Badge>
                  </td>
                </tr>

                {/* Row 2: HVAC (Active Bid Intelligence Focus) */}
                <tr className="bg-[#EFF6FF]/60 border-l-4 border-l-[#2457D6]">
                  <td className="py-3 px-4 sm:px-6 font-sans font-semibold text-[#111827]">
                    Génie Climatique (CVC &amp; Traitement d’Air)
                    <span className="block text-[11px] font-mono text-[#2457D6] font-medium">Lot 08 • Spécifications ASHRAE &amp; Pompes VFD</span>
                  </td>
                  <td className="py-3 px-4 text-center font-bold">5</td>
                  <td className="py-3 px-4 text-right font-medium text-slate-500">2,27M MAD</td>
                  <td className="py-3 px-4 text-right font-bold text-[#18794E] text-sm">2,41M MAD</td>
                  <td className="py-3 px-4 sm:px-6 text-right">
                    <Badge variant="success">{t.hero.statusAwarded}</Badge>
                  </td>
                </tr>

                {/* Row 3: Tiles */}
                <tr className="hover:bg-[#F5F4F0]/50 transition-colors">
                  <td className="py-3 px-4 sm:px-6 font-sans font-semibold text-[#111827]">
                    Revêtements Sols &amp; Murs (Grès Cérame)
                    <span className="block text-[11px] font-mono text-[#506A85] font-normal">Lot 12 • Classement UPEC U4 P3</span>
                  </td>
                  <td className="py-3 px-4 text-center font-bold">8</td>
                  <td className="py-3 px-4 text-right font-medium">2,27M MAD</td>
                  <td className="py-3 px-4 text-right font-semibold text-[#2457D6]">2,41M MAD</td>
                  <td className="py-3 px-4 sm:px-6 text-right">
                    <Badge variant="default">{t.hero.statusReview}</Badge>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Hero Product Detail — Bid Intelligence Panel */}
          <div className="bg-[#FAF9F6] border-t border-[#D9DEE7] p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold text-[#111827] uppercase tracking-wider">
                {t.hero.bidIntelTitle}
              </span>
              <span className="text-[11px] font-mono text-[#2457D6] font-semibold">
                Lot CVC • Analyse d’Équivalence Économique
              </span>
            </div>

            {/* 3 Quotation Analysis Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              
              {/* Supplier A: Recommended / Winner */}
              <div className="bg-white border-2 border-[#18794E] rounded-[4px] p-4 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-[#111827]">{t.hero.supAName}</span>
                    <Badge variant="success">Sélectionné</Badge>
                  </div>
                  <div className="text-xl font-bold font-mono text-[#18794E] my-1">
                    {t.hero.supAPrice}
                  </div>
                  <p className="text-xs text-[#243244] mt-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#18794E] shrink-0" />
                    <span>{t.hero.supAMeta}</span>
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#E5E4DE] text-[11px] text-[#18794E] font-medium font-mono">
                  ✓ Fret et grutage toiture inclus (DAP Chantier)
                </div>
              </div>

              {/* Supplier B: Optical Illusion */}
              <div className="bg-white border border-[#D9DEE7] rounded-[4px] p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-[#111827]">{t.hero.supBName}</span>
                    <Badge variant="warning">Alerte Périmètre</Badge>
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
              <div className="bg-white border border-[#D9DEE7] rounded-[4px] p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-[#111827]">{t.hero.supCName}</span>
                    <Badge variant="blue">Option Trésorerie</Badge>
                  </div>
                  <div className="text-xl font-bold font-mono text-[#111827] my-1">
                    {t.hero.supCPrice}
                  </div>
                  <p className="text-xs text-[#243244] mt-1.5 flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-[#2457D6] shrink-0" />
                    <span>{t.hero.supCMeta}</span>
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#E5E4DE] text-[11px] text-[#2457D6] font-mono font-medium">
                  Crédit fournisseur différé 90j (-28k MAD BFR)
                </div>
              </div>

            </div>

            {/* Adjudication Summary Strip */}
            <div className="mt-3 bg-[#E5E4DE]/60 border border-[#D9DEE7] rounded-[4px] px-3.5 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <span className="text-[#506A85] uppercase tracking-wider text-[11px]">
                {t.hero.comparableCostLabel} :
              </span>
              <span className="font-bold text-[#111827] text-sm">
                {t.hero.comparableWinner}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
