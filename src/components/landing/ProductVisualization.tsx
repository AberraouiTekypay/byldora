'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function ProductVisualization() {
  const [activeTab, setActiveTab] = useState<'comparison' | 'lineitems' | 'risk'>('comparison');

  return (
    <section id="product-visualization" className="bg-[#F8FAFC] py-20 lg:py-28 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-slate-200 border border-slate-300 text-xs font-semibold text-slate-800 tracking-wide mb-3">
              <span>CORE PLATFORM INTERFACE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              The Bid Comparison Engine
            </h2>
            <p className="mt-3 text-base text-[#475569] leading-relaxed">
              Standardize disparate vendor submissions into an apples-to-apples commercial matrix. 
              Uncover hidden variances before committing millions.
            </p>
          </div>

          {/* Interface Tabs */}
          <div className="flex items-center gap-1 bg-slate-200 p-1 rounded-[8px] border border-slate-300 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-3 py-1.5 rounded-[6px] transition-all ${
                activeTab === 'comparison'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Normalized Matrix
            </button>
            <button
              onClick={() => setActiveTab('lineitems')}
              className={`px-3 py-1.5 rounded-[6px] transition-all ${
                activeTab === 'lineitems'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Item Breakdown (BOQ)
            </button>
            <button
              onClick={() => setActiveTab('risk')}
              className={`px-3 py-1.5 rounded-[6px] transition-all ${
                activeTab === 'risk'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Exclusion Reconciliation
            </button>
          </div>
        </div>

        {/* The SaaS Comparison UI Frame */}
        <div className="bg-white border border-[#CBD5E1] rounded-[14px] shadow-lg overflow-hidden">
          
          {/* Header Bar of Table */}
          <div className="bg-[#0B1220] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-[#1C2636]">
            <div>
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-[#0EA5E9] font-mono text-xs border border-blue-500/40">
                  PKG-HVAC-04
                </span>
                <h3 className="font-bold text-sm sm:text-base text-white">
                  HVAC Chiller &amp; Air Handling Equipment Package
                </h3>
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Project: Marrakech Hospitality Project &bull; Target Budget: MAD 2,600,000 &bull; 3 compliant offers received
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-300 font-mono">
                Currency: <strong className="text-white font-bold">MAD (Moroccan Dirham)</strong>
              </span>
              <Link
                href="/dashboard/bids"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[6px] text-xs font-semibold text-white transition-colors"
              >
                <span>Open Full Interactive Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Main Comparison Matrix Body */}
          {activeTab === 'comparison' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm font-sans border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[#475569]">
                    <th className="py-3.5 px-6 font-semibold w-1/4">Evaluation Criterion</th>
                    <th className="py-3.5 px-6 font-semibold w-1/4 bg-blue-50/50 border-x border-blue-100">
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A] font-bold">Supplier A &bull; Atlas Clim</span>
                        <span className="px-2 py-0.5 bg-[#16A34A] text-white text-[10px] font-mono rounded font-bold uppercase">
                          Recommended
                        </span>
                      </div>
                    </th>
                    <th className="py-3.5 px-6 font-semibold w-1/4">
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A] font-bold">Supplier B &bull; Maghreb Clim</span>
                        <span className="px-2 py-0.5 bg-amber-500 text-white text-[10px] font-mono rounded font-bold uppercase">
                          Risk Flag
                        </span>
                      </div>
                    </th>
                    <th className="py-3.5 px-6 font-semibold w-1/4">
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A] font-bold">Supplier C &bull; Sahara Thermal</span>
                        <span className="px-2 py-0.5 bg-slate-600 text-white text-[10px] font-mono rounded font-bold uppercase">
                          Standard
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {/* Headline Quote */}
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#0F172A]">
                      Headline Quotation Price
                      <span className="block text-[11px] font-normal text-slate-500">Unadjusted face value</span>
                    </td>
                    <td className="py-3.5 px-6 font-mono font-bold text-slate-800 bg-blue-50/30 border-x border-blue-100">
                      MAD 2,410,000
                    </td>
                    <td className="py-3.5 px-6 font-mono font-bold text-slate-800">
                      MAD 2,270,000 <span className="text-[10px] text-green-700 font-sans font-semibold">(-5.8% lowest)</span>
                    </td>
                    <td className="py-3.5 px-6 font-mono font-bold text-slate-800">
                      MAD 2,490,000
                    </td>
                  </tr>

                  {/* Specification Match */}
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#0F172A]">
                      Technical Specification Match
                      <span className="block text-[11px] font-normal text-slate-500">Eurovent / ASHRAE 90.1</span>
                    </td>
                    <td className="py-3.5 px-6 bg-blue-50/30 border-x border-blue-100">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]"></span>
                        <strong className="text-[#16A34A] font-mono">100%</strong>
                        <span className="text-xs text-slate-600">Exact OEM match</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-6">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]"></span>
                        <strong className="text-[#D97706] font-mono">92%</strong>
                        <span className="text-xs text-slate-600">Substituted EC motor</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-6">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]"></span>
                        <strong className="text-[#16A34A] font-mono">100%</strong>
                        <span className="text-xs text-slate-600">Carrier certified</span>
                      </div>
                    </td>
                  </tr>

                  {/* Logistics & Exclusions */}
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#0F172A]">
                      Site Freight &amp; Crane Unloading
                      <span className="block text-[11px] font-normal text-slate-500">Incoterms / Jobsite Marrakech</span>
                    </td>
                    <td className="py-3.5 px-6 bg-blue-50/30 border-x border-blue-100">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#16A34A] font-medium">
                        <Check className="w-3.5 h-3.5" /> Included (DAP Site)
                      </span>
                    </td>
                    <td className="py-3.5 px-6">
                      <div className="text-xs text-[#DC2626] font-semibold flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" /> Excluded (Ex-Works Tangier)
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                        Normalization delta: +MAD 185,000
                      </div>
                    </td>
                    <td className="py-3.5 px-6">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#16A34A] font-medium">
                        <Check className="w-3.5 h-3.5" /> Included (DAP Site)
                      </span>
                    </td>
                  </tr>

                  {/* Commercial Terms */}
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#0F172A]">
                      Payment Credit Structure
                      <span className="block text-[11px] font-normal text-slate-500">Working capital impact</span>
                    </td>
                    <td className="py-3.5 px-6 text-xs text-slate-700 bg-blue-50/30 border-x border-blue-100">
                      60 days end of month
                    </td>
                    <td className="py-3.5 px-6 text-xs text-slate-700">
                      30% advance, 70% before delivery
                    </td>
                    <td className="py-3.5 px-6 text-xs text-slate-700">
                      <strong className="text-[#2563EB]">90-day extended credit</strong>
                      <span className="block text-[11px] text-slate-500">MAD -28,000 WACC value</span>
                    </td>
                  </tr>

                  {/* Lead Time */}
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#0F172A]">
                      Factory-to-Site Lead Time
                      <span className="block text-[11px] font-normal text-slate-500">Critical path timeline</span>
                    </td>
                    <td className="py-3.5 px-6 font-mono text-xs bg-blue-50/30 border-x border-blue-100">
                      14 weeks (On schedule)
                    </td>
                    <td className="py-3.5 px-6 font-mono text-xs text-amber-700">
                      18 weeks (3 weeks buffer delay)
                    </td>
                    <td className="py-3.5 px-6 font-mono text-xs">
                      15 weeks (On schedule)
                    </td>
                  </tr>

                  {/* TRUE LANDED ECONOMICS */}
                  <tr className="bg-slate-100/80 font-bold border-t-2 border-slate-300">
                    <td className="py-4 px-6 text-[#0F172A]">
                      TRUE NORMALIZED LANDED COST
                      <span className="block text-[11px] font-normal text-slate-500">
                        Adjusted for risk, freight &amp; working capital
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-base text-[#16A34A] bg-blue-100/50 border-x border-blue-200">
                      MAD 2,410,000
                      <div className="text-[10px] font-sans font-normal text-slate-600 mt-0.5">
                        Lowest risk &bull; Optimal decision
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono text-base text-[#DC2626]">
                      MAD 2,455,000
                      <div className="text-[10px] font-sans font-normal text-slate-600 mt-0.5">
                        +MAD 185k over headline quote
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono text-base text-slate-800">
                      MAD 2,462,000
                      <div className="text-[10px] font-sans font-normal text-slate-600 mt-0.5">
                        Strong credit alternative
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'lineitems' && (
            <div className="p-6">
              <div className="text-xs font-mono text-slate-500 mb-3">
                EXTRACTED LINE-ITEM UNIT RATES (4 OF 18 PACKAGE ITEMS SHOWN)
              </div>
              <div className="border border-slate-200 rounded-[8px] overflow-hidden">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-100 text-slate-700 border-b border-slate-200">
                    <tr>
                      <th className="p-3">BOQ Item</th>
                      <th className="p-3">Description</th>
                      <th className="p-3">Qty</th>
                      <th className="p-3">Est. Rate</th>
                      <th className="p-3 bg-blue-50 text-blue-900">Supplier A Rate</th>
                      <th className="p-3">Supplier B Rate</th>
                      <th className="p-3">Supplier C Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-800">
                    <tr>
                      <td className="p-3 font-semibold">04.01.01</td>
                      <td className="p-3 font-sans">Centrifugal Chiller 450 TR VFD</td>
                      <td className="p-3">2 Units</td>
                      <td className="p-3">MAD 850,000</td>
                      <td className="p-3 bg-blue-50/40 font-bold">MAD 820,000</td>
                      <td className="p-3">MAD 790,000</td>
                      <td className="p-3">MAD 840,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">04.01.02</td>
                      <td className="p-3 font-sans">VAV Air Handling Units 12k CFM</td>
                      <td className="p-3">4 Units</td>
                      <td className="p-3">MAD 145,000</td>
                      <td className="p-3 bg-blue-50/40 font-bold">MAD 135,000</td>
                      <td className="p-3">MAD 125,000</td>
                      <td className="p-3">MAD 140,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">04.02.01</td>
                      <td className="p-3 font-sans">Chilled Water Pumps 65 m3/h</td>
                      <td className="p-3">3 Units</td>
                      <td className="p-3">MAD 48,000</td>
                      <td className="p-3 bg-blue-50/40 font-bold">MAD 46,000</td>
                      <td className="p-3">MAD 44,000</td>
                      <td className="p-3">MAD 48,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">04.02.04</td>
                      <td className="p-3 font-sans">Pre-insulated Pipework DN150</td>
                      <td className="p-3">320 m</td>
                      <td className="p-3">MAD 410</td>
                      <td className="p-3 bg-blue-50/40 font-bold">MAD 287.5</td>
                      <td className="p-3">MAD 290</td>
                      <td className="p-3">MAD 310</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'risk' && (
            <div className="p-6 space-y-4">
              <div className="text-xs font-mono text-slate-500">
                AUTOMATED RECONCILIATION OF COMMERCIAL DISCREPANCIES
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-amber-200 bg-amber-50/60 rounded-[8px] p-4">
                  <div className="flex items-center gap-2 font-bold text-amber-900 text-sm mb-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Supplier B: Scope &amp; Logistics Gap
                  </div>
                  <ul className="text-xs text-amber-800 space-y-1.5 list-disc list-inside">
                    <li>Ex-Works delivery excluded heavy hauling from Tangier (+MAD 120,000).</li>
                    <li>Site crane mobile hoisting not included in scope (+MAD 65,000).</li>
                    <li>Substituted EC motor creates 8% thermodynamic loss over lifecycle.</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-amber-200 text-xs font-bold text-amber-900">
                    Net Impact: +MAD 185,000 actual cash outlay required by contractor.
                  </div>
                </div>

                <div className="border border-blue-200 bg-blue-50/60 rounded-[8px] p-4">
                  <div className="flex items-center gap-2 font-bold text-blue-900 text-sm mb-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    Supplier C: Financial Term Credit Analysis
                  </div>
                  <ul className="text-xs text-blue-800 space-y-1.5 list-disc list-inside">
                    <li>90-day deferred settlement relieves local bank overdraft pressure.</li>
                    <li>Estimated working capital credit value: MAD 28,000 at 7.5% cost of capital.</li>
                    <li>Fully compliant technical specs with Carrier warranty.</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-blue-200 text-xs font-bold text-blue-900">
                    Normalized comparison: MAD 2,462,000 viable second-source backup.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Table Footer Status */}
          <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              <span>BYLDORA Intelligence Engine: <strong>Recommendation verified</strong> against Marrakech Site Conditions</span>
            </div>
            <div className="font-mono text-[11px] text-slate-500">
              Audit Hash: 0x8a92...c41e
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
