import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="bg-[#0B1220] py-20 lg:py-28 relative overflow-hidden border-b border-[#1C2636] text-white text-center">
      {/* Subtle radial glow */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#2563EB 2px, transparent 2px)',
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#1C2636] border border-[#2A384C] text-xs font-mono text-[#0EA5E9] tracking-wide mb-6">
          <span>DEPLOY THE STANDARD</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Build smarter procurement.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Eliminate commercial blind spots, reconcile complex exclusions automatically, and issue verified purchase orders in minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[8px] transition-all shadow-lg hover:shadow-blue-500/20 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0B1220]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/dashboard/bids"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-200 bg-[#1C2636] hover:bg-[#243247] border border-slate-700 rounded-[8px] transition-colors"
          >
            <span>View Live Demo Evaluation</span>
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
            <span>Zero supplier installation required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
            <span>Instant BOQ Excel parsing</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
            <span>Bank-grade procurement audit logs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
