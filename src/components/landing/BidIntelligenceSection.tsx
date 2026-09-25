'use client';

import React from 'react';
import { 
  CheckCircle, 
  AlertTriangle, 
  CalendarClock, 
  Scale
} from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';

export default function BidIntelligenceSection() {
  const { t } = useLanguage();

  return (
    <section id="bid-intelligence" className="bg-white py-20 lg:py-28 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-blue-50 border border-blue-200 text-xs font-semibold text-[#2563EB] tracking-wide mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>{t.bidIntel.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            {t.bidIntel.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            {t.bidIntel.subheadline}
          </p>
        </div>

        {/* The 3 Supplier Cards from the Spec */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          
          {/* Supplier A */}
          <div className="bg-[#F8FAFC] border-2 border-[#16A34A] rounded-[12px] p-6 sm:p-7 relative flex flex-col justify-between shadow-xs">
            <div className="absolute -top-3.5 left-6 bg-[#16A34A] text-white text-[11px] font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              {t.bidIntel.supATag}
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-1 mt-1">
                {t.bidIntel.supAName}
              </div>
              <div className="text-3xl font-extrabold font-mono text-[#0F172A] mb-4">
                {t.bidIntel.supAPrice}
              </div>

              <div className="space-y-3 border-t border-slate-200 pt-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-[#16A34A] font-semibold">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>{t.bidIntel.supASpec}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{t.bidIntel.supAFreight}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{t.bidIntel.supATerms}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 bg-emerald-50/60 -mx-6 -mb-6 p-4 rounded-b-[10px]">
              <div className="text-[11px] font-mono uppercase text-emerald-800 font-semibold">{t.bidIntel.supAOutcomeTitle}</div>
              <div className="text-xs text-emerald-950 font-medium mt-0.5">
                {t.bidIntel.supAOutcomeText}
              </div>
            </div>
          </div>

          {/* Supplier B */}
          <div className="bg-[#F8FAFC] border border-amber-300 rounded-[12px] p-6 sm:p-7 relative flex flex-col justify-between shadow-xs">
            <div className="absolute -top-3.5 left-6 bg-amber-600 text-white text-[11px] font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              {t.bidIntel.supBTag}
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-1 mt-1">
                {t.bidIntel.supBName}
              </div>
              <div className="text-3xl font-extrabold font-mono text-slate-800 mb-1">
                {t.bidIntel.supBPrice}
              </div>
              <div className="text-xs text-rose-600 font-semibold mb-4">
                {t.bidIntel.supBSub}
              </div>

              <div className="space-y-3 border-t border-slate-200 pt-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-amber-700 font-semibold">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{t.bidIntel.supBSpec}</span>
                </div>
                <div className="flex items-center gap-2 text-[#DC2626] font-semibold">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{t.bidIntel.supBFreight}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="w-4 h-4 text-center font-mono font-bold text-slate-400">&bull;</span>
                  <span>{t.bidIntel.supBTerms}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 bg-amber-50/60 -mx-6 -mb-6 p-4 rounded-b-[10px]">
              <div className="text-[11px] font-mono uppercase text-amber-900 font-semibold">{t.bidIntel.supBNormTitle}</div>
              <div className="text-xs text-amber-950 font-medium mt-0.5 font-mono">
                {t.bidIntel.supBNormText}
              </div>
            </div>
          </div>

          {/* Supplier C */}
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[12px] p-6 sm:p-7 relative flex flex-col justify-between shadow-xs">
            <div className="absolute -top-3.5 left-6 bg-[#1C2636] text-white text-[11px] font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              {t.bidIntel.supCTag}
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-1 mt-1">
                {t.bidIntel.supCName}
              </div>
              <div className="text-3xl font-extrabold font-mono text-[#0F172A] mb-4">
                {t.bidIntel.supCPrice}
              </div>

              <div className="space-y-3 border-t border-slate-200 pt-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-[#16A34A] font-semibold">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>{t.bidIntel.supCSpec}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{t.bidIntel.supCFreight}</span>
                </div>
                <div className="flex items-center gap-2 text-[#2563EB] font-semibold">
                  <CalendarClock className="w-4 h-4 shrink-0" />
                  <span>{t.bidIntel.supCTerms}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 bg-blue-50/60 -mx-6 -mb-6 p-4 rounded-b-[10px]">
              <div className="text-[11px] font-mono uppercase text-blue-900 font-semibold">{t.bidIntel.supCCapTitle}</div>
              <div className="text-xs text-blue-950 font-medium mt-0.5">
                {t.bidIntel.supCCapText}
              </div>
            </div>
          </div>

        </div>

        {/* Visual Economic Reconciliation Breakdown Bar */}
        <div className="mb-12 bg-slate-50 border border-slate-200 rounded-[14px] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#2563EB] font-bold">
                {t.bidIntel.reconcileTag}
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mt-0.5">
                {t.bidIntel.reconcileHeadline}
              </h3>
            </div>
            <a
              href="/dashboard/bids"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
            >
              <span>{t.bidIntel.reconcileCta}</span>
              <span className="font-mono">&rarr;</span>
            </a>
          </div>

          <div className="space-y-4">
            {/* Supplier B */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                <span className="font-semibold text-slate-700">{t.bidIntel.reconcileBName}</span>
                <span className="font-bold text-rose-600">{t.bidIntel.reconcileBDelta}</span>
              </div>
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex">
                <div className="bg-amber-500 h-full" style={{ width: '92.5%' }} />
                <div className="bg-rose-500 h-full" style={{ width: '7.5%' }} />
              </div>
            </div>

            {/* Supplier A (Winner) */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                <span className="font-semibold text-emerald-800">{t.bidIntel.reconcileAName}</span>
                <span className="font-bold text-emerald-700">{t.bidIntel.reconcileASub}</span>
              </div>
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex">
                <div className="bg-emerald-500 h-full" style={{ width: '98%' }} />
              </div>
            </div>

            {/* Supplier C */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                <span className="font-semibold text-slate-600">{t.bidIntel.reconcileCName}</span>
                <span className="font-bold text-blue-600">{t.bidIntel.reconcileCSub}</span>
              </div>
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex">
                <div className="bg-blue-500 h-full" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* The Exact Required Blockquote Statement */}
        <div className="bg-[#0B1220] border-l-4 border-[#2563EB] p-8 sm:p-10 rounded-r-[12px] text-white">
          <div className="text-xs font-mono text-[#0EA5E9] tracking-wider uppercase mb-2">
            {t.bidIntel.quoteTag}
          </div>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-snug">
            {t.bidIntel.quoteBody}
          </blockquote>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {t.bidIntel.quoteDesc}
          </p>
        </div>

      </div>
    </section>
  );
}
