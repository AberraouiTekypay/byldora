'use client';

import React from 'react';
import { FileCheck2, Database, Landmark, Info } from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';

export default function FutureSection() {
  const { t } = useLanguage();

  return (
    <section id="future-finance" className="bg-[#0B1220] py-20 lg:py-28 border-b border-[#1C2636] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#1C2636] border border-[#2A384C] text-xs font-mono text-[#0EA5E9] tracking-wide mb-3">
            <span>{t.future.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {t.future.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.future.subheadline}
          </p>
        </div>

        {/* 3 Step Evolution: Procurement -> Transaction Data -> Finance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-12">
          
          {/* Phase 1: Procurement */}
          <div className="bg-[#1C2636] border border-[#2A384C] rounded-[12px] p-6 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-[#2563EB]/20 text-[#2563EB] text-[10px] font-mono font-bold uppercase border border-[#2563EB]/30">
                  {t.future.p1Badge}
                </span>
                <FileCheck2 className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t.future.p1Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.future.p1Desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/80 text-xs font-mono text-slate-400">
              {t.future.p1Meta}
            </div>
          </div>

          {/* Phase 2: Transaction Data */}
          <div className="bg-[#1C2636] border border-[#2A384C] rounded-[12px] p-6 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-[#0EA5E9]/20 text-[#0EA5E9] text-[10px] font-mono font-bold uppercase border border-[#0EA5E9]/30">
                  {t.future.p2Badge}
                </span>
                <Database className="w-5 h-5 text-[#0EA5E9]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t.future.p2Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.future.p2Desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/80 text-xs font-mono text-slate-400">
              {t.future.p2Meta}
            </div>
          </div>

          {/* Phase 3: Finance */}
          <div className="bg-[#1C2636] border border-[#2A384C] rounded-[12px] p-6 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 text-[10px] font-mono font-bold uppercase border border-slate-700">
                  {t.future.p3Badge}
                </span>
                <Landmark className="w-5 h-5 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t.future.p3Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.future.p3Desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/80 text-xs font-mono text-slate-400">
              {t.future.p3Meta}
            </div>
          </div>

        </div>

        {/* The Exact Required Strategic Phrasing Quote */}
        <div className="bg-[#131D2E] border border-[#2563EB]/40 rounded-[12px] p-6 sm:p-8 relative">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-[8px] bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center text-[#0EA5E9] shrink-0 mt-1">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#0EA5E9] uppercase tracking-wider mb-2 font-semibold">
                {t.future.quoteTag}
              </div>
              <blockquote className="text-lg sm:text-xl font-semibold text-white leading-relaxed">
                {t.future.quoteBody}
              </blockquote>
              <p className="text-xs text-slate-400 mt-3">
                {t.future.note}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
