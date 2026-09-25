'use client';

import React from 'react';
import { 
  FileSpreadsheet, 
  FileText, 
  Mail, 
  MessageSquare, 
  PhoneCall, 
  GitCompare,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';

export default function ProblemSection() {
  const { t, language } = useLanguage();

  const FRAGMENTATIONS = [
    {
      name: t.problem.card1Name,
      icon: FileSpreadsheet,
      label: t.problem.card1Label,
      detail: t.problem.card1Detail,
    },
    {
      name: t.problem.card2Name,
      icon: FileText,
      label: t.problem.card2Label,
      detail: t.problem.card2Detail,
    },
    {
      name: t.problem.card3Name,
      icon: Mail,
      label: t.problem.card3Label,
      detail: t.problem.card3Detail,
    },
    {
      name: t.problem.card4Name,
      icon: MessageSquare,
      label: t.problem.card4Label,
      detail: t.problem.card4Detail,
    },
    {
      name: t.problem.card5Name,
      icon: PhoneCall,
      label: t.problem.card5Label,
      detail: t.problem.card5Detail,
    },
    {
      name: t.problem.card6Name,
      icon: GitCompare,
      label: t.problem.card6Label,
      detail: t.problem.card6Detail,
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-28 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-red-50 border border-red-200 text-xs font-semibold text-red-700 tracking-wide mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{t.problem.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            {t.problem.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            {t.problem.subheadline}
          </p>
        </div>

        {/* Fragmentation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FRAGMENTATIONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[12px] p-6 hover:border-slate-400 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-[8px] bg-slate-100 flex items-center justify-center text-slate-700 font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    {language === 'fr' ? `CANAL 0${idx + 1}` : `CHANNEL 0${idx + 1}`}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A] tracking-tight">
                  {item.name}
                </h3>
                <div className="text-xs font-semibold text-slate-500 mt-0.5 mb-2">
                  {item.label}
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transition Callout Banner */}
        <div className="mt-12 bg-[#0B1220] rounded-[14px] p-8 sm:p-10 border border-[#1C2636] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-[#0EA5E9] tracking-wider uppercase mb-2">
              {t.problem.bannerTag}
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-snug">
              {t.problem.bannerHeadline}
            </div>
            <p className="text-sm text-slate-400 mt-2">
              {t.problem.bannerDesc}
            </p>
          </div>
          <a
            href="#how-it-works"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors"
          >
            <span>{t.problem.bannerCta}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
