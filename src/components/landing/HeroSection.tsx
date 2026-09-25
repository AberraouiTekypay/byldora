'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, FileSpreadsheet, Send, Award, Cpu } from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#0B1220] text-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-[#1C2636]">
      {/* Background Architectural Photography with Twilight Gradient Mask */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-tower.jpg"
          alt="High-Rise Commercial Construction Tower"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/80 via-[#0B1220]/95 to-[#0B1220]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(255,255,255,0))]" />
      </div>

      {/* Subtle background technical grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Hero Layout: Left Value Proposition & Right Prominent Architectural Showcase Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Heading, Subhead, CTAs & Metrics Strip */}
          <div className="lg:col-span-7 text-left">
            {/* Subtle enterprise status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-[#1C2636]/90 backdrop-blur-md border border-[#2A384C] text-xs font-mono text-slate-300 mb-6 tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse"></span>
              <span>{t.hero.engineTag}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              {t.hero.headlineStart}{' '}
              <span className="text-[#2563EB]">{t.hero.headlineAccent}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal mb-8">
              {t.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <Link
                href="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[8px] transition-all shadow-md hover:shadow-blue-500/20 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0B1220]"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 bg-[#1C2636]/80 hover:bg-[#1C2636] border border-slate-700/80 hover:border-slate-500 rounded-[8px] transition-colors"
              >
                <span>{t.hero.secondaryCta}</span>
              </a>
              <Link
                href="/auth"
                className="text-xs font-mono text-slate-400 hover:text-white transition-colors underline decoration-slate-600 underline-offset-4 py-2"
              >
                {t.hero.demoPersonas}
              </Link>
            </div>

            {/* 4 Key Procurement Infrastructure Metrics (Fully Bilingual) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xl text-left">
              <div className="bg-[#1C2636]/80 backdrop-blur-md border border-[#2A384C] rounded-[10px] p-3.5 shadow-sm">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{t.hero.metric1Label}</div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5">{t.hero.metric1Value}</div>
                <div className="text-[11px] text-blue-400 mt-1 flex items-center gap-1">{t.hero.metric1Sub}</div>
              </div>
              <div className="bg-[#1C2636]/80 backdrop-blur-md border border-[#2A384C] rounded-[10px] p-3.5 shadow-sm">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{t.hero.metric2Label}</div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5">{t.hero.metric2Value}</div>
                <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">{t.hero.metric2Sub}</div>
              </div>
              <div className="bg-[#1C2636]/80 backdrop-blur-md border border-[#2A384C] rounded-[10px] p-3.5 shadow-sm">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{t.hero.metric3Label}</div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5">{t.hero.metric3Value}</div>
                <div className="text-[11px] text-amber-400 mt-1 flex items-center gap-1">{t.hero.metric3Sub}</div>
              </div>
              <div className="bg-[#1C2636]/80 backdrop-blur-md border border-[#2A384C] rounded-[10px] p-3.5 shadow-sm">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{t.hero.metric4Label}</div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5">{t.hero.metric4Value}</div>
                <div className="text-[11px] text-cyan-400 mt-1 flex items-center gap-1">{t.hero.metric4Sub}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent, High-Resolution Architectural Hero Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[16px] overflow-hidden border border-[#2563EB]/40 bg-[#131D2E] shadow-2xl shadow-blue-900/20 group">
              {/* Image Frame Header */}
              <div className="bg-[#0F1A2E] px-4 py-2.5 border-b border-[#2A384C] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-ping" />
                  <span className="text-slate-300 font-semibold tracking-wide text-[11px] uppercase truncate">
                    {t.hero.imageCardBadge}
                  </span>
                </div>
                <span className="text-[#0EA5E9] text-[10px] font-bold">2.41M MAD AW</span>
              </div>

              {/* High-Resolution Hero Visual */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-tower.jpg"
                  alt="High-Rise Commercial Construction Tower Under Supervised Procurement"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-90" />

                {/* Overlaid Data Badges on the Image */}
                <div className="absolute bottom-3 left-3 right-3 space-y-2">
                  <div className="bg-[#0B1220]/90 backdrop-blur-md border border-white/20 rounded-[8px] p-3 text-xs shadow-lg">
                    <div className="flex items-center justify-between font-mono text-[11px] text-emerald-400 mb-1">
                      <span className="font-bold">{t.hero.imageCardTitle}</span>
                      <span className="bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40 text-[10px]">
                        ● {t.hero.imageCardStatus}
                      </span>
                    </div>
                    <div className="text-xs text-white font-medium flex items-center justify-between">
                      <span className="text-slate-300">{t.hero.imageCardSupervision}</span>
                      <span className="font-mono text-cyan-300 text-[11px]">{t.hero.imageCardSync}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Hero Visual: Sophisticated SaaS Workflow Interface */}
        <div className="mt-8 sm:mt-12 max-w-5xl mx-auto">
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
                <Link 
                  href="/dashboard/projects"
                  className="bg-[#1C2636] border border-[#2A384C] rounded-[10px] p-4 flex flex-col justify-between hover:border-[#2563EB] hover:bg-[#1E2B3E] transition-all group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-blue-300">{t.hero.step1Title}</span>
                      <Layers className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    </div>
                    <div className="font-semibold text-sm text-white line-clamp-1 group-hover:text-blue-200">
                      {t.hero.step1Name}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <div className="text-xs text-slate-400">{t.hero.step1BudgetLabel}</div>
                    <div className="text-base font-bold text-white font-mono">{t.hero.step1BudgetValue}</div>
                  </div>
                </Link>

                {/* Connector Arrow for mobile */}
                <div className="flex md:hidden justify-center text-slate-500">
                  <span className="text-xs font-mono">&darr;</span>
                </div>

                {/* 2. BOQ */}
                <Link
                  href="/dashboard/boq"
                  className="bg-[#1C2636] border border-[#2A384C] rounded-[10px] p-4 flex flex-col justify-between hover:border-[#2563EB] hover:bg-[#1E2B3E] transition-all group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-blue-300">{t.hero.step2Title}</span>
                      <FileSpreadsheet className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    </div>
                    <div className="font-semibold text-sm text-white group-hover:text-blue-200">
                      {t.hero.step2Name}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <div className="text-xs text-slate-400">{t.hero.step2CountLabel}</div>
                    <div className="text-base font-bold text-white font-mono">{t.hero.step2CountValue}</div>
                  </div>
                </Link>

                {/* Connector Arrow for mobile */}
                <div className="flex md:hidden justify-center text-slate-500">
                  <span className="text-xs font-mono">&darr;</span>
                </div>

                {/* 3. PROCUREMENT PACKAGES */}
                <Link
                  href="/dashboard/rfq"
                  className="bg-[#1C2636] border border-[#2A384C] rounded-[10px] p-4 flex flex-col justify-between hover:border-[#2563EB] hover:bg-[#1E2B3E] transition-all group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-blue-300">{t.hero.step3Title}</span>
                      <Layers className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    </div>
                    <div className="font-semibold text-sm text-white group-hover:text-blue-200">
                      {t.hero.step3Name}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <div className="text-xs text-slate-400">{t.hero.step3CountLabel}</div>
                    <div className="text-base font-bold text-white font-mono">{t.hero.step3CountValue}</div>
                  </div>
                </Link>

                {/* Connector Arrow for mobile */}
                <div className="flex md:hidden justify-center text-slate-500">
                  <span className="text-xs font-mono">&darr;</span>
                </div>

                {/* 4. RFQ */}
                <Link
                  href="/dashboard/supplier-portal"
                  className="bg-[#1C2636] border border-[#2A384C] rounded-[10px] p-4 flex flex-col justify-between hover:border-[#2563EB] hover:bg-[#1E2B3E] transition-all group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-blue-300">{t.hero.step4Title}</span>
                      <Send className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    </div>
                    <div className="font-semibold text-sm text-white group-hover:text-blue-200">
                      {t.hero.step4Name}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <div className="text-xs text-slate-400">{t.hero.step4CountLabel}</div>
                    <div className="text-base font-bold text-white font-mono">{t.hero.step4CountValue}</div>
                  </div>
                </Link>

                {/* Connector Arrow for mobile */}
                <div className="flex md:hidden justify-center text-slate-500">
                  <span className="text-xs font-mono">&darr;</span>
                </div>

                {/* 5. BID INTELLIGENCE */}
                <Link
                  href="/dashboard/bids"
                  className="bg-[#1C2636] border border-[#2563EB]/60 rounded-[10px] p-4 flex flex-col justify-between ring-1 ring-[#2563EB]/40 bg-gradient-to-b from-[#1C2636] to-[#172338] hover:border-[#0EA5E9] hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#0EA5E9] group-hover:text-white">{t.hero.step5Title}</span>
                      <Cpu className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    </div>
                    <div className="font-semibold text-sm text-white group-hover:text-cyan-200">
                      {t.hero.step5Name}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <div className="text-xs text-slate-400">{t.hero.step5CountLabel}</div>
                    <div className="text-base font-bold text-[#0EA5E9] font-mono">{t.hero.step5CountValue}</div>
                  </div>
                </Link>

                {/* Connector Arrow for mobile */}
                <div className="flex md:hidden justify-center text-slate-500">
                  <span className="text-xs font-mono">&darr;</span>
                </div>

                {/* 6. AWARD */}
                <Link
                  href="/dashboard/award"
                  className="bg-[#0F1E38] border border-[#2563EB] rounded-[10px] p-4 flex flex-col justify-between shadow-lg hover:border-green-400 transition-all group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-green-400 group-hover:text-green-300">{t.hero.step6Title}</span>
                      <Award className="w-3.5 h-3.5 text-[#16A34A]" />
                    </div>
                    <div className="font-semibold text-sm text-white group-hover:text-green-100">
                      {t.hero.step6Name}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-blue-900/60">
                    <div className="text-xs text-slate-300">{t.hero.step6CountLabel}</div>
                    <div className="text-base font-bold text-white font-mono text-[#16A34A]">{t.hero.step6CountValue}</div>
                  </div>
                </Link>

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
