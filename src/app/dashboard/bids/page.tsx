'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Award, 
  Sparkles
} from 'lucide-react';
import { useProcurementStore } from '@/lib/procurementStore';

export default function BidIntelligenceMatrixPage() {
  const router = useRouter();
  const { bids, awardBidAndGeneratePo, user } = useProcurementStore();
  const [selectedBidId, setSelectedBidId] = useState<string>('bid-001');
  const [awardSuccess, setAwardSuccess] = useState(false);

  const handleAward = (bidId: string) => {
    const po = awardBidAndGeneratePo(bidId, user.name);
    if (po) {
      setAwardSuccess(true);
      setTimeout(() => {
        router.push('/dashboard/award');
      }, 800);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#2563EB] mb-1">
            <span>AI BID NORMALIZATION ENGINE</span>
            <span>&bull;</span>
            <span className="bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded">PKG-HVAC-04</span>
          </div>
          <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">
            Bid Intelligence &amp; Economic Reconciliation Matrix
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Reconciling disparate supplier quotations into true landed transaction economics for Marrakech Hospitality Project.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/rfq"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-300 px-3 py-2 rounded-[8px]"
          >
            &larr; Back to Packages
          </Link>
        </div>
      </div>

      {/* Principle Callout */}
      <div className="bg-[#0B1220] rounded-[12px] p-5 text-white border border-[#1C2636] flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[6px] bg-[#2563EB] flex items-center justify-center text-white shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-xs sm:text-sm text-slate-200">
            &ldquo;<strong>BYLDORA compares the economics of the transaction</strong>, not simply the number at the bottom of a quotation.&rdquo;
          </p>
        </div>
        <span className="hidden sm:inline-block text-[11px] font-mono text-[#0EA5E9] uppercase tracking-wider bg-[#1C2636] px-2.5 py-1 rounded">
          Automated Risk Normalization
        </span>
      </div>

      {/* Main Side-by-Side Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bids.map((bid) => {
          const isSelected = bid.id === selectedBidId;
          const isRecommended = bid.isRecommended;

          return (
            <div
              key={bid.id}
              onClick={() => setSelectedBidId(bid.id)}
              className={`bg-white border rounded-[14px] p-6 shadow-xs flex flex-col justify-between cursor-pointer transition-all ${
                isSelected
                  ? 'border-[#2563EB] ring-2 ring-blue-500/20 shadow-md'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    {bid.supplierCode} &bull; {bid.channel}
                  </span>
                  {isRecommended ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-white bg-[#16A34A] px-2.5 py-0.5 rounded-full uppercase">
                      <CheckCircle2 className="w-3 h-3" /> Recommended
                    </span>
                  ) : bid.transportIncluded === false ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-white bg-amber-600 px-2.5 py-0.5 rounded-full uppercase">
                      <AlertTriangle className="w-3 h-3" /> Risk Adjusted
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full uppercase">
                      Standard
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-[#0F172A] leading-tight mb-1">
                  {bid.supplierName}
                </h3>
                <p className="text-xs text-slate-400 mb-4">{bid.country}</p>

                {/* Price Display */}
                <div className="bg-slate-50 rounded-[10px] p-4 border border-slate-200 mb-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Raw Headline Quote</span>
                      <span className="text-lg font-mono font-bold text-slate-800">
                        MAD {bid.quotedTotalMAD.toLocaleString()}
                      </span>
                    </div>
                    {bid.transportAdjustmentMAD > 0 && (
                      <span className="text-[10px] text-rose-600 font-mono font-semibold">
                        +MAD {bid.transportAdjustmentMAD.toLocaleString()} omissions
                      </span>
                    )}
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-200 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#0F172A] block uppercase">TRUE LANDED COST</span>
                      <span className={`text-xl font-mono font-extrabold ${isRecommended ? 'text-[#16A34A]' : 'text-slate-900'}`}>
                        MAD {bid.normalizedTotalMAD.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Specification & Logistics Details */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Specification Match:</span>
                    <span className={`font-mono font-bold ${bid.specMatchPercentage === 100 ? 'text-[#16A34A]' : 'text-amber-600'}`}>
                      {bid.specMatchPercentage}% Match
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Logistics to Jobsite:</span>
                    <span className={`font-semibold ${bid.transportIncluded ? 'text-[#16A34A]' : 'text-[#DC2626]'}`}>
                      {bid.transportIncluded ? 'Included (DAP Site)' : 'Excluded (Ex-Works)'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Commercial Credit:</span>
                    <span className="font-semibold text-slate-700">{bid.paymentTerms}</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-500">Lead Time:</span>
                    <span className="font-mono text-slate-700">{bid.deliveryWeeks} weeks</span>
                  </div>
                </div>

                {/* Scope Exclusions / Substitutions callout */}
                {bid.exclusions.length > 0 && (
                  <div className="mt-3 p-2.5 bg-rose-50 border border-rose-200 rounded-[6px] text-[11px] text-rose-800">
                    <strong>Excluded Scope:</strong> {bid.exclusions.join(', ')}
                  </div>
                )}

                {bid.substitutions.length > 0 && (
                  <div className="mt-2 p-2.5 bg-amber-50 border border-amber-200 rounded-[6px] text-[11px] text-amber-800">
                    <strong>Proposed Substitution:</strong> {bid.substitutions[0].proposed} ({bid.substitutions[0].variance})
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAward(bid.id);
                  }}
                  className={`w-full py-2.5 px-4 rounded-[8px] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs ${
                    isRecommended
                      ? 'bg-[#16A34A] hover:bg-green-700 text-white'
                      : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Award &amp; Issue PO (MAD {bid.quotedTotalMAD.toLocaleString()})</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {awardSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-[10px] text-xs sm:text-sm font-semibold text-green-800 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <span>Award Decision Recorded! Generating legal Purchase Order documentation...</span>
        </div>
      )}

      {/* In-Depth Commercial Audit Log */}
      <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-6 shadow-xs">
        <h3 className="text-base font-bold text-[#0F172A] mb-3">
          Procurement Officer Audit Trail &amp; Normalization Rationale
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
          <div className="bg-slate-50 p-4 rounded-[8px] border border-slate-200 space-y-2">
            <div className="font-bold text-slate-800">Why Supplier A (Atlas Clim) is the verified choice:</div>
            <p className="leading-relaxed">
              While Maghreb Clim Solutions submitted an apparent quote that was MAD 140,000 cheaper on face value, their quotation explicitly excluded freight from Tangier and crane hoisting to the plant roof. 
              Adding verified logistics cost (MAD 185,000) makes Supplier B’s actual cost MAD 2,455,000—more expensive than Supplier A.
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-[8px] border border-slate-200 space-y-2">
            <div className="font-bold text-slate-800">Supplier C Working Capital Consideration:</div>
            <p className="leading-relaxed">
              Sahara Thermal Technologies offers 90-day deferred payment terms. For contractors operating in tight liquidity environments, this deferred capital preserves MAD 28,000 in financing interest, positioning them as an approved secondary alternative.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
