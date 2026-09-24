import React from 'react';
import { 
  CheckCircle, 
  AlertTriangle, 
  CalendarClock, 
  Scale
} from 'lucide-react';

export default function BidIntelligenceSection() {
  return (
    <section id="bid-intelligence" className="bg-white py-20 lg:py-28 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-blue-50 border border-blue-200 text-xs font-semibold text-[#2563EB] tracking-wide mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>TRANSACTION ECONOMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Why headline price is rarely the lowest cost.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            In construction procurement, an unscrutinized quote with missing scope or unfavorable payment terms often leads to 15–30% budget overruns in variations and claims.
          </p>
        </div>

        {/* The 3 Supplier Cards from the Spec */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          
          {/* Supplier A */}
          <div className="bg-[#F8FAFC] border-2 border-[#16A34A] rounded-[12px] p-6 sm:p-7 relative flex flex-col justify-between shadow-xs">
            <div className="absolute -top-3.5 left-6 bg-[#16A34A] text-white text-[11px] font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              Optimal Commercial Award
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-1 mt-1">
                SUPPLIER A
              </div>
              <div className="text-3xl font-extrabold font-mono text-[#0F172A] mb-4">
                MAD 2.41M
              </div>

              <div className="space-y-3 border-t border-slate-200 pt-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-[#16A34A] font-semibold">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>100% specification match</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Freight to site &amp; crane hoist included</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Standard 60-day commercial terms</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 bg-emerald-50/60 -mx-6 -mb-6 p-4 rounded-b-[10px]">
              <div className="text-[11px] font-mono uppercase text-emerald-800 font-semibold">Outcome</div>
              <div className="text-xs text-emerald-950 font-medium mt-0.5">
                Zero scope friction. Exact equipment delivered on schedule with full warranty.
              </div>
            </div>
          </div>

          {/* Supplier B */}
          <div className="bg-[#F8FAFC] border border-amber-300 rounded-[12px] p-6 sm:p-7 relative flex flex-col justify-between shadow-xs">
            <div className="absolute -top-3.5 left-6 bg-amber-600 text-white text-[11px] font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              Optical Illusion
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-1 mt-1">
                SUPPLIER B
              </div>
              <div className="text-3xl font-extrabold font-mono text-slate-800 mb-1">
                MAD 2.27M
              </div>
              <div className="text-xs text-rose-600 font-semibold mb-4">
                Apparent lowest headline quote
              </div>

              <div className="space-y-3 border-t border-slate-200 pt-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-amber-700 font-semibold">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>92% specification match</span>
                </div>
                <div className="flex items-center gap-2 text-[#DC2626] font-semibold">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Transport excluded (+MAD 185k)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="w-4 h-4 text-center font-mono font-bold text-slate-400">&bull;</span>
                  <span>Unfavorable advance cash payments</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 bg-amber-50/60 -mx-6 -mb-6 p-4 rounded-b-[10px]">
              <div className="text-[11px] font-mono uppercase text-amber-900 font-semibold">Normalized Cost</div>
              <div className="text-xs text-amber-950 font-medium mt-0.5 font-mono">
                True Landed Cost: <strong>MAD 2.455M</strong> (Exceeds Supplier A).
              </div>
            </div>
          </div>

          {/* Supplier C */}
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[12px] p-6 sm:p-7 relative flex flex-col justify-between shadow-xs">
            <div className="absolute -top-3.5 left-6 bg-[#1C2636] text-white text-[11px] font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              Working Capital Play
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-1 mt-1">
                SUPPLIER C
              </div>
              <div className="text-3xl font-extrabold font-mono text-[#0F172A] mb-4">
                MAD 2.49M
              </div>

              <div className="space-y-3 border-t border-slate-200 pt-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-[#16A34A] font-semibold">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>100% specification match</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>All logistics included to jobsite</span>
                </div>
                <div className="flex items-center gap-2 text-[#2563EB] font-semibold">
                  <CalendarClock className="w-4 h-4 shrink-0" />
                  <span>90-day payment term</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 bg-blue-50/60 -mx-6 -mb-6 p-4 rounded-b-[10px]">
              <div className="text-[11px] font-mono uppercase text-blue-900 font-semibold">Capital Analysis</div>
              <div className="text-xs text-blue-950 font-medium mt-0.5">
                90-day credit provides valuable cashflow runway for contractor liquidity.
              </div>
            </div>
          </div>

        </div>

        {/* The Exact Required Blockquote Statement */}
        <div className="bg-[#0B1220] border-l-4 border-[#2563EB] p-8 sm:p-10 rounded-r-[12px] text-white">
          <div className="text-xs font-mono text-[#0EA5E9] tracking-wider uppercase mb-2">
            THE BYLDORA CORE PRINCIPLE
          </div>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-snug">
            &ldquo;BYLDORA compares the economics of the transaction, not simply the number at the bottom of a quotation.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            By modeling freight, commissioning liabilities, payment schedules, and specification compliance into every line item, procurement teams prevent costly variation disputes before contracts are signed.
          </p>
        </div>

      </div>
    </section>
  );
}
