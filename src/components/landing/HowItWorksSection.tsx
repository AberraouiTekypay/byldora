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

      </div>
    </section>
  );
}
