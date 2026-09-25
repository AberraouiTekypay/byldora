'use client';

import React from 'react';
import { 
  FileSpreadsheet, 
  FileText, 
  Mail, 
  MessageSquare, 
  ArrowRight,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';

export default function EmergingMarketSection() {
  const { language, t } = useLanguage();

  const CHANNELS = [
    {
      name: 'WhatsApp',
      headline: language === 'fr' 
        ? 'Devis mobiles instantanés & pièces jointes' 
        : 'Instant mobile quotes & attachments',
      desc: language === 'fr'
        ? 'Les sous-traitants et artisans locaux répondent directement par photos de devis signés ou notes vocales. BYLDORA extrait automatiquement les lignes et montants.'
        : 'Local trade suppliers can reply directly with pictures of signed quotations or voice notes. BYLDORA extracts line-item totals instantly.',
      icon: MessageSquare,
      badge: language === 'fr' ? 'Canal Privilégié des Artisans' : 'Preferred by Regional Trades',
    },
    {
      name: 'Excel',
      headline: language === 'fr'
        ? 'Allers-retours tableurs sans altération'
        : 'Native spreadsheet round-tripping',
      desc: language === 'fr'
        ? 'Les fournisseurs téléchargent la trame BPDE du lot, renseignent leurs prix unitaires hors ligne et renvoient le classeur sans risque d’erreur de formule.'
        : 'Vendors can download the package bill schedule, populate their unit rates offline, and return their sheet without breaking formulas.',
      icon: FileSpreadsheet,
      badge: language === 'fr' ? 'Flexibilité Hors-Ligne' : 'Offline Flexibility',
    },
    {
      name: 'PDF',
      headline: language === 'fr'
        ? 'Extraction OCR & Reconnaissance Devis'
        : 'OCR quote extraction',
      desc: language === 'fr'
        ? 'Les mémoires techniques et bordereaux scannés ou imprimés en PDF sont numérisés, structurés en prix unitaires et confrontés au CCTP.'
        : 'Scanned commercial letters and formal PDF price sheets are ingested, parsed into tabular rates, and verified against scope requirements.',
      icon: FileText,
      badge: language === 'fr' ? 'Standard Entreprise BTP' : 'Enterprise Standard',
    },
    {
      name: 'Email',
      headline: language === 'fr'
        ? 'Traitement automatique des réponses tenders'
        : 'Direct tender inbox parsing',
      desc: language === 'fr'
        ? 'Les fournisseurs répondent simplement au mail d’invitation d’appel d’offres. Pièces jointes et correspondances sont consignées dans la salle d’adjudication.'
        : 'Suppliers simply hit reply to the automated RFQ invitation. Attachments and message text are captured into the tender audit room.',
      icon: Mail,
      badge: language === 'fr' ? 'Zéro Intégration Requise' : 'Zero Onboarding Required',
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-sky-50 border border-sky-200 text-xs font-semibold text-[#0EA5E9] tracking-wide mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.emerging.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            {t.emerging.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            {t.emerging.subheadline}
          </p>
        </div>

        {/* Featured Visual: On-Site Executive & Regional Trades Collaboration */}
        <div className="mb-14 bg-[#0B1220] rounded-[16px] border border-[#1C2636] p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden relative text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 relative rounded-[12px] overflow-hidden border border-[#2A384C] shadow-2xl group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/market-trades.jpg"
                alt="Executive Procurement Team and Quantity Surveyors at Casablanca Commercial Construction Site"
                className="w-full h-auto object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 left-4 bg-[#0B1220]/90 backdrop-blur-md border border-[#0EA5E9]/60 rounded-[8px] px-3 py-1.5 text-xs text-white font-mono flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse" />
                <span>{t.emerging.collabSite}</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#0B1220]/90 backdrop-blur-md border border-white/20 rounded-[8px] p-3 text-xs text-slate-300 font-sans flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-semibold text-white">{t.emerging.collabAdoption}</span>
                  <span className="hidden sm:inline">{t.emerging.collabAdoptionSub}</span>
                </div>
                <span className="font-mono text-emerald-400 font-bold">{t.emerging.collabYield}</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1C2636] border border-slate-700 font-mono text-[11px] text-[#0EA5E9]">
                <span>{t.emerging.collabTag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {t.emerging.collabHeadline}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {t.emerging.collabDesc}
              </p>

              <div className="space-y-2.5 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 p-2.5 bg-[#1C2636] rounded-[6px] border border-slate-700">
                  <span className="text-emerald-400 font-bold">●</span>
                  <span>{t.emerging.collabCh1}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-[#1C2636] rounded-[6px] border border-slate-700">
                  <span className="text-blue-400 font-bold">●</span>
                  <span>{t.emerging.collabCh2}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-[#1C2636] rounded-[6px] border border-slate-700">
                  <span className="text-cyan-400 font-bold">●</span>
                  <span>{t.emerging.collabCh3}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pragmatic Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CHANNELS.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] p-6 flex flex-col justify-between hover:border-[#2563EB]/40 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[8px] bg-white border border-[#CBD5E1] flex items-center justify-center text-[#2563EB]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#0EA5E9] uppercase font-semibold">
                      {language === 'fr' ? `Canal ${idx + 1}` : `Channel ${idx + 1}`}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mb-1">
                    {ch.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-700 mb-2">
                    {ch.headline}
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {ch.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200">
                  <span className="text-[11px] font-mono text-slate-500">
                    &bull; {ch.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Value Banner */}
        <div className="bg-[#1C2636] border border-[#2A384C] rounded-[12px] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white tracking-tight">
              {t.emerging.bannerHeadline}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              {t.emerging.bannerSub}
            </p>
          </div>
          <Link
            href="/dashboard/supplier-portal"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            <span>{t.emerging.previewPortal}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
