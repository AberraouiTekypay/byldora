'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, FileSpreadsheet, Send, Award, Cpu } from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#0B1220] text-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-[#1C2636]">
      {/* Subtle background technical grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Subtle enterprise status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-[#1C2636] border border-[#2A384C] text-xs font-mono text-slate-300 mb-8 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse"></span>
            <span>{t.hero.engineTag}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            {t.hero.headlineStart}{' '}
            <span className="text-[#2563EB]">{t.hero.headlineAccent}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal mb-10">
            {t.hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[8px] transition-all shadow-md hover:shadow-blue-500/20 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0B1220]"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 bg-[#1C2636]/60 hover:bg-[#1C2636] border border-slate-700/80 hover:border-slate-500 rounded-[8px] transition-colors"
            >
              <span>{t.hero.secondaryCta}</span>
            </a>
          </div>
        </div>

        {/* Hero Visual: Sophisticated SaaS Workflow Interface */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
          {/* Main App Container Frame */}
          <div className="bg-[#1C2636] border border-[#2A384C] rounded-[14px] shadow-2xl overflow-hidden">
            {/* SaaS App Header Bar */}
            <div className="bg-[#0F1A2E] px-4 py-3 border-b border-[#2A384C] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                </div>
                <span className="text-slate-400 font-mono ml-2 border-l border-slate-700 pl-3">
                  BYLDORA / PIPELINE / PRJ-MHP-2026
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0B1220] border border-slate-700 font-mono text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
                  {t.hero.activeRun}
                </span>
                <span className="text-slate-400 hidden sm:inline">{t.hero.normalizingCount}</span>
              </div>
            </div>

            {/* Workflow Pipeline Display */}
            <div className="p-4 sm:p-6 lg:p-8 bg-[#131D2E]">
              {/* Responsive Flow: Grid on Desktop, Vertical on Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-3 lg:gap-4 relative">
                
                {/* 1. PROJECT */}
                <div className="bg-[#1C2636] border border-[#2A384C] rounded-[10px] p-4 flex flex-col justify-between hover:border-slate-500 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">{t.hero.step1Title}</span>
                      <Layers className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    </div>
                    <div className="font-semibold text-sm text-white line-clamp-1">
                      {t.hero.step1Name}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <div className="text-xs text-slate-400">{t.hero.step1BudgetLabel}</div>
                    <div className="text-base font-bold text-white font-mono">{t.hero.step1BudgetValue}</div>
                  </div>
                </div>

                {/* Connector Arrow for mobile */}
                <div className="flex md:hidden justify-center text-slate-500">
                  <span className="text-xs font-mono">&darr;</span>
                </div>

                {/* 2. BOQ */}
                <div className="bg-[#1C2636] border border-[#2A384C] rounded-[10px] p-4 flex flex-col justify-between hover:border-slate-500 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">{t.hero.step2Title}</span>
                      <FileSpreadsheet className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    </div>
                    <div className="font-semibold text-sm text-white">
                      {t.hero.step2Name}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <div className="text-xs text-slate-400">{t.hero.step2CountLabel}</div>
                    <div className="text-base font-bold text-white font-mono">{t.hero.step2CountValue}</div>
                  </div>
                </div>

                {/* Connector Arrow for mobile */}
                <div className="flex md:hidden justify-center text-slate-500">
                  <span className="text-xs font-mono">&darr;</span>
                </div>

                {/* 3. PROCUREMENT PACKAGES */}
                <div className="bg-[#1C2636] border border-[#2A384C] rounded-[10px] p-4 flex flex-col justify-between hover:border-slate-500 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">{t.hero.step3Title}</span>
                      <Layers className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    </div>
                    <div className="font-semibold text-sm text-white">
                      {t.hero.step3Name}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <div className="text-xs text-slate-400">{t.hero.step3CountLabel}</div>
                    <div className="text-base font-bold text-white font-mono">{t.hero.step3CountValue}</div>
                  </div>
                </div>

                {/* Connector Arrow for mobile */}
                <div className="flex md:hidden justify-center text-slate-500">
                  <span className="text-xs font-mono">&darr;</span>
                </div>

                {/* 4. RFQ */}
                <div className="bg-[#1C2636] border border-[#2A384C] rounded-[10px] p-4 flex flex-col justify-between hover:border-slate-500 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">{t.hero.step4Title}</span>
                      <Send className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    </div>
                    <div className="font-semibold text-sm text-white">
                      {t.hero.step4Name}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <div className="text-xs text-slate-400">{t.hero.step4CountLabel}</div>
                    <div className="text-base font-bold text-white font-mono">{t.hero.step4CountValue}</div>
                  </div>
                </div>

                {/* Connector Arrow for mobile */}
                <div className="flex md:hidden justify-center text-slate-500">
                  <span className="text-xs font-mono">&darr;</span>
                </div>

                {/* 5. BID INTELLIGENCE */}
                <div className="bg-[#1C2636] border border-[#2563EB]/60 rounded-[10px] p-4 flex flex-col justify-between ring-1 ring-[#2563EB]/40 bg-gradient-to-b from-[#1C2636] to-[#172338]">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#0EA5E9]">{t.hero.step5Title}</span>
                      <Cpu className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    </div>
                    <div className="font-semibold text-sm text-white">
                      {t.hero.step5Name}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <div className="text-xs text-slate-400">{t.hero.step5CountLabel}</div>
                    <div className="text-base font-bold text-[#0EA5E9] font-mono">{t.hero.step5CountValue}</div>
                  </div>
                </div>

                {/* Connector Arrow for mobile */}
                <div className="flex md:hidden justify-center text-slate-500">
                  <span className="text-xs font-mono">&darr;</span>
                </div>

                {/* 6. AWARD */}
                <div className="bg-[#0F1E38] border border-[#2563EB] rounded-[10px] p-4 flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-green-400">{t.hero.step6Title}</span>
                      <Award className="w-3.5 h-3.5 text-[#16A34A]" />
                    </div>
                    <div className="font-semibold text-sm text-white">
                      {t.hero.step6Name}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-blue-900/60">
                    <div className="text-xs text-slate-300">{t.hero.step6CountLabel}</div>
                    <div className="text-base font-bold text-white font-mono text-[#16A34A]">{t.hero.step6CountValue}</div>
                  </div>
                </div>

              </div>

              {/* Sub-table: Real SaaS Data Snapshot */}
              <div className="mt-6 bg-[#0B1220] border border-[#2A384C] rounded-[8px] p-3 sm:p-4 overflow-x-auto">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="font-mono text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                    {t.hero.tablePackage}
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">{t.hero.tableNormalized}</span>
                </div>
                
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="text-slate-400 border-b border-slate-800">
                      <th className="pb-2 font-medium">{t.hero.thSupplier}</th>
                      <th className="pb-2 font-medium">{t.hero.thChannel}</th>
                      <th className="pb-2 font-medium">{t.hero.thRaw}</th>
                      <th className="pb-2 font-medium">{t.hero.thSpec}</th>
                      <th className="pb-2 font-medium">{t.hero.thRisk}</th>
                      <th className="pb-2 font-medium text-right">{t.hero.thLanded}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-200">
                    <tr className="bg-[#1C2636]/40">
                      <td className="py-2.5 font-medium text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
                        Atlas Clim Systems S.A.
                      </td>
                      <td className="py-2.5 text-slate-400">{t.hero.supAChannel}</td>
                      <td className="py-2.5">MAD 2,410,000</td>
                      <td className="py-2.5 text-green-400">{t.hero.supASpec}</td>
                      <td className="py-2.5 text-slate-400">{t.hero.supARisk}</td>
                      <td className="py-2.5 font-bold text-white text-right">MAD 2,410,000</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-medium text-slate-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
                        Maghreb Clim Solutions
                      </td>
                      <td className="py-2.5 text-slate-400">{t.hero.supBChannel}</td>
                      <td className="py-2.5 text-slate-400">MAD 2,270,000</td>
                      <td className="py-2.5 text-amber-400">{t.hero.supBSpec}</td>
                      <td className="py-2.5 text-rose-400">{t.hero.supBRisk}</td>
                      <td className="py-2.5 font-bold text-slate-300 text-right">MAD 2,455,000</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-medium text-slate-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                        Sahara Thermal Tech
                      </td>
                      <td className="py-2.5 text-slate-400">{t.hero.supCChannel}</td>
                      <td className="py-2.5 text-slate-400">MAD 2,490,000</td>
                      <td className="py-2.5 text-green-400">{t.hero.supCSpec}</td>
                      <td className="py-2.5 text-[#0EA5E9]">{t.hero.supCRisk}</td>
                      <td className="py-2.5 font-bold text-slate-300 text-right">MAD 2,462,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
