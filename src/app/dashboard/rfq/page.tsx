'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Send, 
  Plus, 
  Cpu, 
  Clock, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { useProcurementStore } from '@/lib/procurementStore';

export default function RfqListPage() {
  const { packages, currentProject } = useProcurementStore();

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#2563EB] mb-1">
            <span>PROCUREMENT TENDER PACKAGES</span>
            <span>&bull;</span>
            <span>{currentProject?.name}</span>
          </div>
          <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">
            Procurement Packages &amp; RFQs (27 Packages)
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Partitioned trade scopes, supplier invitation distribution, and commercial tender evaluation.
          </p>
        </div>

        <Link
          href="/dashboard/rfq/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold rounded-[8px] transition-colors shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Create New RFQ</span>
        </Link>
      </div>

      {/* Package Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white border border-[#E2E8F0] rounded-[12px] p-6 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded">
                  {pkg.packageCode}
                </span>
                
                {pkg.status === 'awarded' && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-green-700 bg-green-50 border border-green-200 px-2.5 py-0.5 rounded-full font-semibold">
                    <CheckCircle2 className="w-3 h-3" /> Awarded
                  </span>
                )}
                {pkg.status === 'evaluating' && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full font-semibold">
                    <Cpu className="w-3 h-3" /> Evaluating Bids ({pkg.submittedBids})
                  </span>
                )}
                {pkg.status === 'bids_received' && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full font-semibold">
                    <Clock className="w-3 h-3" /> Quotes Ingested
                  </span>
                )}
                {pkg.status === 'issued' && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full font-semibold">
                    <Send className="w-3 h-3" /> Dispatched
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-[#0F172A] mb-1">
                {pkg.title}
              </h3>
              <p className="text-xs text-slate-500 mb-4">{pkg.trade}</p>

              <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Allocated Budget</span>
                  <span className="font-bold text-slate-800 text-sm">MAD {pkg.budgetMAD.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Suppliers Quoting</span>
                  <span className="font-bold text-slate-800 text-sm">{pkg.submittedBids} of {pkg.invitedSuppliers} vendors</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Submission Deadline</span>
                  <span className="font-semibold text-slate-700">{pkg.deadline}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Technical Code</span>
                  <span className="font-semibold text-slate-700 truncate block">{pkg.specStandard}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500">
                {pkg.itemsCount} scoped BOQ items
              </span>
              <div className="flex items-center gap-2">
                {pkg.packageCode === 'PKG-HVAC-04' ? (
                  <Link
                    href="/dashboard/bids"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold rounded-[6px] transition-colors"
                  >
                    <span>Inspect Normalized Matrix</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    href="/dashboard/rfq/new"
                    className="inline-flex items-center gap-1 px-3 py-1.5 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-[6px] transition-colors"
                  >
                    <span>Manage Dispatch</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
