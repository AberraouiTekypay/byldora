'use client';

import React from 'react';
import { 
  UploadCloud, 
  PackagePlus, 
  SendHorizontal, 
  Inbox, 
  Cpu, 
  FileCheck2 
} from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';

export default function HowItWorksSection() {
  const { t } = useLanguage();

  const STEPS = [
    {
      step: t.howItWorks.step1Number,
      title: t.howItWorks.step1Title,
      action: t.howItWorks.step1Action,
      desc: t.howItWorks.step1Desc,
      icon: UploadCloud,
      meta: t.howItWorks.step1Meta,
    },
    {
      step: t.howItWorks.step2Number,
      title: t.howItWorks.step2Title,
      action: t.howItWorks.step2Action,
      desc: t.howItWorks.step2Desc,
      icon: PackagePlus,
      meta: t.howItWorks.step2Meta,
    },
    {
      step: t.howItWorks.step3Number,
      title: t.howItWorks.step3Title,
      action: t.howItWorks.step3Action,
      desc: t.howItWorks.step3Desc,
      icon: SendHorizontal,
      meta: t.howItWorks.step3Meta,
    },
    {
      step: t.howItWorks.step4Number,
      title: t.howItWorks.step4Title,
      action: t.howItWorks.step4Action,
      desc: t.howItWorks.step4Desc,
      icon: Inbox,
      meta: t.howItWorks.step4Meta,
    },
    {
      step: t.howItWorks.step5Number,
      title: t.howItWorks.step5Title,
      action: t.howItWorks.step5Action,
      desc: t.howItWorks.step5Desc,
      icon: Cpu,
      meta: t.howItWorks.step5Meta,
    },
    {
      step: t.howItWorks.step6Number,
      title: t.howItWorks.step6Title,
      action: t.howItWorks.step6Action,
      desc: t.howItWorks.step6Desc,
      icon: FileCheck2,
      meta: t.howItWorks.step6Meta,
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-blue-50 border border-blue-200 text-xs font-semibold text-[#2563EB] tracking-wide mb-3">
            <span>{t.howItWorks.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            {t.howItWorks.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            {t.howItWorks.subheadline}
          </p>
        </div>

        {/* 6 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] p-6 sm:p-7 relative flex flex-col justify-between hover:border-[#2563EB]/40 hover:bg-slate-50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono text-slate-300 group-hover:text-[#2563EB] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-[8px] bg-white border border-[#E2E8F0] flex items-center justify-center text-slate-700 shadow-2xs group-hover:text-[#2563EB] group-hover:border-blue-200 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider font-semibold text-[#2563EB] mb-1">
                    {item.action}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                  <span>{item.meta}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Visual Showcase: Field Engineering & Procurement Synchronization Cockpit */}
        <div className="mt-16 bg-[#0B1220] rounded-[16px] border border-[#1C2636] p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Column with High-Resolution Site Inspection Photo */}
            <div className="lg:col-span-7 relative rounded-[12px] overflow-hidden border border-[#2A384C] shadow-2xl group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/site-inspection.jpg"
                alt="Construction Field Engineer reviewing BIM Model and BOQ Schedule"
                className="w-full h-auto object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Blueprint Pin */}
              <div className="absolute top-4 left-4 bg-[#0B1220]/90 backdrop-blur-md border border-[#2563EB]/60 rounded-[8px] px-3 py-1.5 text-xs text-white font-mono flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
                <span>LEVEL 38 VERTICAL CIRCULATION PLAN</span>
              </div>

              {/* Floating BIM Tablet Pin */}
              <div className="absolute bottom-4 right-4 bg-[#0B1220]/90 backdrop-blur-md border border-[#16A34A]/60 rounded-[8px] px-3 py-1.5 text-xs text-white font-mono flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                <span>BIM REBAR & COLUMN ASSEMBLY SYNC</span>
              </div>
            </div>

            {/* Description & Action Column */}
            <div className="lg:col-span-5 text-white space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#1C2636] border border-[#2A384C] text-xs font-mono text-[#0EA5E9]">
                <span>FIELD-TO-OFFICE RECONCILIATION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Eliminate the disconnect between drawings, field revisions, and commercial commitments.
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Site quantity surveyors and lead engineers annotate drawings, verify physical lot deliveries, and cross-reference equipment specs against digital bill of quantities in real-time. No misplaced paper binders, no overlooked revision deltas.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-[#0EA5E9] flex items-center justify-center text-xs font-bold mt-0.5">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300">
                    <strong>Direct Blueprint OCR:</strong> Extracts schedules from architectural PDFs into structured BOQ lines.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300">
                    <strong>14–26 Week Lead-Time Warning:</strong> Protects project critical-path against factory fabrication delays.
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="/dashboard/boq"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                >
                  <span>Explore BOQ Intelligence Schedule</span>
                  <span className="font-mono">&rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
