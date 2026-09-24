import React from 'react';
import { FileCheck2, Database, Landmark, Info } from 'lucide-react';

export default function FutureSection() {
  return (
    <section id="future-finance" className="bg-[#0B1220] py-20 lg:py-28 border-b border-[#1C2636] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#1C2636] border border-[#2A384C] text-xs font-mono text-[#0EA5E9] tracking-wide mb-3">
            <span>FINANCIAL INFRASTRUCTURE HORIZON</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            The future of construction capital.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            By turning fragmented informal procurement into immutable digital records, BYLDORA creates the foundation for next-generation construction liquidity.
          </p>
        </div>

        {/* 3 Step Evolution: Procurement -> Transaction Data -> Finance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-12">
          
          {/* Phase 1: Procurement */}
          <div className="bg-[#1C2636] border border-[#2A384C] rounded-[12px] p-6 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-[#2563EB]/20 text-[#2563EB] text-[10px] font-mono font-bold uppercase border border-[#2563EB]/30">
                  Phase 1 &bull; Active Now
                </span>
                <FileCheck2 className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Procurement
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Standardize BOQs, dispatch structured RFQs, normalize supplier proposals, and issue digitally verified Purchase Orders.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/80 text-xs font-mono text-slate-400">
              Operational execution engine
            </div>
          </div>

          {/* Phase 2: Transaction Data */}
          <div className="bg-[#1C2636] border border-[#2A384C] rounded-[12px] p-6 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-[#0EA5E9]/20 text-[#0EA5E9] text-[10px] font-mono font-bold uppercase border border-[#0EA5E9]/30">
                  Phase 2 &bull; In Deployment
                </span>
                <Database className="w-5 h-5 text-[#0EA5E9]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Transaction Data
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Compile immutable records of supplier fulfillment, delivery verification, milestone signoffs, and historical unit-cost indices.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/80 text-xs font-mono text-slate-400">
              Verified commercial truth layer
            </div>
          </div>

          {/* Phase 3: Finance */}
          <div className="bg-[#1C2636] border border-[#2A384C] rounded-[12px] p-6 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 text-[10px] font-mono font-bold uppercase border border-slate-700">
                  Phase 3 &bull; Future Ecosystem
                </span>
                <Landmark className="w-5 h-5 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Finance
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect verified trade milestones directly with regulated financial institutions for structured liquidity and supply chain working capital.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/80 text-xs font-mono text-slate-400">
              Institutional capital connectivity
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
                INFRASTRUCTURE VISION
              </div>
              <blockquote className="text-lg sm:text-xl font-semibold text-white leading-relaxed">
                &ldquo;Build the verified transaction layer that can eventually connect construction procurement with trade finance, supplier finance and invoice finance.&rdquo;
              </blockquote>
              <p className="text-xs text-slate-400 mt-3">
                * Note: BYLDORA provides procurement and data infrastructure. Future financial connectivity will be enabled exclusively in collaboration with licensed banking and credit partners.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
