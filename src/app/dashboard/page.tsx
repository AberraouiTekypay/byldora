'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  FileSpreadsheet, 
  Send, 
  Cpu, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Plus, 
  Clock,
  Layers
} from 'lucide-react';
import { useProcurementStore } from '@/lib/procurementStore';

export default function DashboardOverviewPage() {
  const { currentProject, packages } = useProcurementStore();

  const awardedCount = packages.filter(p => p.status === 'awarded').length;
  const evaluatingCount = packages.filter(p => p.status === 'evaluating' || p.status === 'bids_received').length;

  return (
    <div className="space-y-8">
      
      {/* Top Banner / Welcome */}
      <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[6px] bg-blue-50 text-[#2563EB] text-xs font-mono font-semibold mb-2">
            ACTIVE PROJECT WORKSPACE
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            {currentProject?.name}
          </h1>
          <p className="text-xs sm:text-sm text-[#475569] mt-1">
            Location: <strong className="text-slate-700">{currentProject?.location}</strong> &bull; Lead Consultant: <span className="text-slate-600">{currentProject?.leadConsultant}</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/dashboard/boq"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[8px] bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
          >
            <FileSpreadsheet className="w-4 h-4 text-[#2563EB]" />
            <span>Upload BOQ</span>
          </Link>
          <Link
            href="/dashboard/rfq/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Create RFQ Package</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* KPI 1: Budget */}
        <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>TOTAL BUDGET</span>
            <Building2 className="w-4 h-4 text-[#2563EB]" />
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black font-mono text-[#0F172A]">
              MAD {(currentProject?.budgetMAD / 1000000).toFixed(1)}M
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Committed to date: <strong>MAD {(currentProject?.spentMAD / 1000000).toFixed(2)}M</strong>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Utilization</span>
            <span className="font-mono text-slate-700 font-bold">41.4%</span>
          </div>
        </div>

        {/* KPI 2: BOQ & Packages */}
        <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>BOQ &amp; PACKAGES</span>
            <Layers className="w-4 h-4 text-[#0EA5E9]" />
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black font-mono text-[#0F172A]">
              2,481 <span className="text-sm font-normal text-slate-500">items</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Partitioned into <strong>27 trade packages</strong>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Long-lead items</span>
            <span className="font-mono text-amber-600 font-bold">42 tracked</span>
          </div>
        </div>

        {/* KPI 3: Tender RFQs */}
        <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>TENDER STATUS</span>
            <Send className="w-4 h-4 text-[#16A34A]" />
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black font-mono text-[#0F172A]">
              14 <span className="text-sm font-normal text-slate-500">suppliers</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {evaluatingCount} packages currently under bid review
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Awarded packages</span>
            <span className="font-mono text-green-700 font-bold">{awardedCount} of 27</span>
          </div>
        </div>

        {/* KPI 4: Verified Savings */}
        <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>NORMALIZED SAVINGS</span>
            <TrendingDown className="w-4 h-4 text-[#16A34A]" />
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black font-mono text-[#16A34A]">
              MAD 1.84M
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Through exclusion detection &amp; terms
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Spec compliance rate</span>
            <span className="font-mono text-slate-700 font-bold">98.4%</span>
          </div>
        </div>

      </div>

      {/* Primary Action Notice / Active Decision Pending */}
      <div className="bg-[#0B1220] rounded-[12px] p-6 text-white border border-[#1C2636] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-1 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-xs font-mono border border-amber-500/30">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>ACTION REQUIRED &bull; PKG-HVAC-04</span>
          </div>
          <h2 className="text-lg font-bold text-white">
            Bid Intelligence Completed: 3 compliant supplier quotations normalized
          </h2>
          <p className="text-xs text-slate-300">
            Atlas Clim Systems S.A. is recommended (MAD 2.41M, 100% spec match, logistics included).
            Maghreb Clim Solutions submitted a lower headline quote (MAD 2.27M) but excludes site transport and substitutions.
          </p>
        </div>
        <Link
          href="/dashboard/bids"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold transition-colors shadow-md"
        >
          <span>Open Bid Matrix &amp; Award</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Package Procurement Pipeline Table */}
      <div className="bg-white border border-[#E2E8F0] rounded-[14px] shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
          <div>
            <h2 className="font-bold text-base text-[#0F172A]">Procurement Packages Pipeline</h2>
            <p className="text-xs text-slate-500">Live status of critical packages for {currentProject?.name}</p>
          </div>
          <Link
            href="/dashboard/rfq"
            className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 font-mono text-xs">
              <tr>
                <th className="py-3 px-6">CODE</th>
                <th className="py-3 px-6">PACKAGE TITLE</th>
                <th className="py-3 px-6">BUDGET (MAD)</th>
                <th className="py-3 px-6">BIDS</th>
                <th className="py-3 px-6">DEADLINE</th>
                <th className="py-3 px-6">STATUS</th>
                <th className="py-3 px-6 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {packages.map((pkg) => (
                <tr key={pkg.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-6 font-mono font-semibold text-slate-700">
                    {pkg.packageCode}
                  </td>
                  <td className="py-3.5 px-6">
                    <div className="font-semibold text-[#0F172A]">{pkg.title}</div>
                    <div className="text-xs text-slate-400">{pkg.trade}</div>
                  </td>
                  <td className="py-3.5 px-6 font-mono font-medium text-slate-800">
                    MAD {pkg.budgetMAD.toLocaleString()}
                  </td>
                  <td className="py-3.5 px-6 font-mono text-slate-600">
                    {pkg.submittedBids} / {pkg.invitedSuppliers}
                  </td>
                  <td className="py-3.5 px-6 text-slate-500 font-mono text-xs">
                    {pkg.deadline}
                  </td>
                  <td className="py-3.5 px-6">
                    {pkg.status === 'awarded' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800 font-mono">
                        <CheckCircle2 className="w-3 h-3" /> Awarded
                      </span>
                    )}
                    {pkg.status === 'evaluating' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 font-mono">
                        <Cpu className="w-3 h-3" /> Evaluating Bids
                      </span>
                    )}
                    {pkg.status === 'bids_received' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 font-mono">
                        <Clock className="w-3 h-3" /> Quotes Ingested
                      </span>
                    )}
                    {pkg.status === 'issued' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 font-mono">
                        <Send className="w-3 h-3" /> RFQ Dispatched
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-6 text-right">
                    <Link
                      href={pkg.packageCode === 'PKG-HVAC-04' ? '/dashboard/bids' : '/dashboard/rfq'}
                      className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
                    >
                      {pkg.status === 'evaluating' ? 'Compare Bids &rarr;' : 'Inspect &rarr;'}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
