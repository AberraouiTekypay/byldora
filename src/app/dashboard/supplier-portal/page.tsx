'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Network, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  FileSpreadsheet, 
  Globe
} from 'lucide-react';
import { useProcurementStore } from '@/lib/procurementStore';

export default function SupplierPortalPage() {
  const router = useRouter();
  const { packages, submitBid } = useProcurementStore();

  const [selectedRfqId, setSelectedRfqId] = useState('pkg-04');
  const [supplierName, setSupplierName] = useState('Souss HVAC & Mechanical Engineering');
  const [supplierCode] = useState(`SUP-MA-${Math.floor(1000 + Math.random() * 9000)}`);
  const [country, setCountry] = useState('Morocco (Marrakech Region)');
  const [channel, setChannel] = useState<'WhatsApp' | 'Email' | 'Portal' | 'Excel Upload'>('Portal');
  const [quotedTotalMAD, setQuotedTotalMAD] = useState('2380000');
  const [specMatchPercentage, setSpecMatchPercentage] = useState('100');
  const [transportIncluded, setTransportIncluded] = useState(true);
  const [transportAdjustmentMAD, setTransportAdjustmentMAD] = useState('0');
  const [paymentTerms, setPaymentTerms] = useState('60 days end of month');
  const [deliveryWeeks, setDeliveryWeeks] = useState('14');
  const [exclusions, setExclusions] = useState('');
  const [notes] = useState('Scope includes supply, factory testing, and 24-month manufacturer parts warranty.');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const quoted = parseFloat(quotedTotalMAD) || 2380000;
    const transportAdj = transportIncluded ? 0 : (parseFloat(transportAdjustmentMAD) || 120000);
    const spec = parseInt(specMatchPercentage, 10) || 100;

    submitBid({
      rfqId: selectedRfqId,
      supplierName,
      supplierCode,
      country,
      channel,
      quotedTotalMAD: quoted,
      normalizedTotalMAD: quoted + transportAdj,
      specMatchPercentage: spec,
      transportIncluded,
      transportAdjustmentMAD: transportAdj,
      paymentTerms,
      paymentTermScore: 85,
      deliveryWeeks: parseInt(deliveryWeeks, 10) || 14,
      complianceStatus: spec === 100 ? 'Full Match' : 'Minor Discrepancy',
      notes,
      exclusions: exclusions ? [exclusions] : [],
      substitutions: [],
      isRecommended: false,
    });

    setSubmitted(true);
    setTimeout(() => {
      router.push('/dashboard/bids');
    }, 1200);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-mono text-[#2563EB] mb-1">
          <Network className="w-4 h-4" />
          <span>SUPPLIER QUOTING ENVIRONMENT</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
          Supplier Tender Submission Portal
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          This portal simulates how regional suppliers submit their quotations—either directly online, via marked-up Excel files, or through WhatsApp tender links.
        </p>
      </div>

      {/* Submission Form */}
      <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-6 sm:p-8 shadow-xs">
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Target RFQ Package */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Select Procurement Package to Quote *
            </label>
            <select
              value={selectedRfqId}
              onChange={(e) => setSelectedRfqId(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3 py-2 text-sm text-slate-800 focus:border-[#2563EB] focus:outline-none font-medium"
            >
              {packages.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.packageCode} — {pkg.title} (Allocated Budget: MAD {pkg.budgetMAD.toLocaleString()})
                </option>
              ))}
            </select>
          </div>

          {/* Supplier details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Vendor Company Name *
              </label>
              <input
                type="text"
                required
                value={supplierName}
                onChange={(e) => setSupplierName(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3 py-2 text-sm text-slate-800 focus:border-[#2563EB] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Operating Base / Country
              </label>
              <input
                type="text"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3 py-2 text-sm text-slate-800 focus:border-[#2563EB] focus:outline-none"
              />
            </div>
          </div>

          {/* Intake Channel */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Submission Channel
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(['Portal', 'WhatsApp', 'Email', 'Excel Upload'] as const).map((ch) => (
                <button
                  key={ch}
                  type="button"
                  onClick={() => setChannel(ch)}
                  className={`p-2.5 rounded-[8px] border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    channel === ch
                      ? 'border-[#2563EB] bg-blue-50 text-[#2563EB]'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {ch === 'WhatsApp' && <MessageSquare className="w-3.5 h-3.5 text-green-600" />}
                  {ch === 'Portal' && <Globe className="w-3.5 h-3.5 text-blue-600" />}
                  {ch === 'Excel Upload' && <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />}
                  <span>{ch}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Pricing & Specification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Lump Sum Quotation Price (MAD) *
              </label>
              <input
                type="number"
                required
                value={quotedTotalMAD}
                onChange={(e) => setQuotedTotalMAD(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3 py-2 text-sm font-mono text-slate-900 focus:border-[#2563EB] focus:outline-none font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Technical Specification Compliance (%)
              </label>
              <select
                value={specMatchPercentage}
                onChange={(e) => setSpecMatchPercentage(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3 py-2 text-sm text-slate-800 focus:border-[#2563EB] focus:outline-none font-mono"
              >
                <option value="100">100% — Full Compliance with Tender Specifications</option>
                <option value="95">95% — Minor Approved Brand Equivalence</option>
                <option value="90">90% — Alternative Equipment Proposed</option>
                <option value="85">85% — Major Deviations from Engineering Schedule</option>
              </select>
            </div>
          </div>

          {/* Transport & Logistics Terms */}
          <div className="bg-slate-50 border border-slate-200 rounded-[10px] p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800 block">Site Delivery (Incoterms DAP Marrakech)</span>
                <span className="text-[11px] text-slate-500">Does this quote include freight and unloading at jobsite?</span>
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={transportIncluded}
                  onChange={(e) => setTransportIncluded(e.target.checked)}
                  className="rounded text-[#2563EB]"
                />
                <span className="text-xs font-semibold text-slate-700">
                  {transportIncluded ? 'Included in Quote' : 'Excluded (Ex-Works)'}
                </span>
              </label>
            </div>

            {!transportIncluded && (
              <div>
                <label className="block text-xs font-semibold text-rose-700 mb-1">
                  Estimated Transport &amp; Crane Unloading Surcharge (MAD)
                </label>
                <input
                  type="number"
                  value={transportAdjustmentMAD}
                  onChange={(e) => setTransportAdjustmentMAD(e.target.value)}
                  className="w-full bg-white border border-rose-300 rounded-[8px] px-3 py-1.5 text-xs font-mono text-rose-900 focus:outline-none"
                  placeholder="e.g. 185000"
                />
              </div>
            )}
          </div>

          {/* Commercial Credit Terms & Lead time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Payment Terms Proposed
              </label>
              <select
                value={paymentTerms}
                onChange={(e) => setPaymentTerms(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3 py-2 text-sm text-slate-800 focus:border-[#2563EB] focus:outline-none"
              >
                <option value="60 days end of month">60 days end of month</option>
                <option value="90-day extended credit">90-day extended credit</option>
                <option value="30 days net">30 days net</option>
                <option value="30% advance, 70% before shipping">30% advance, 70% before shipping</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Delivery Lead Time (Weeks)
              </label>
              <input
                type="number"
                value={deliveryWeeks}
                onChange={(e) => setDeliveryWeeks(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3 py-2 text-sm font-mono text-slate-800 focus:border-[#2563EB] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Scope Exclusions / Footnotes (if any)
            </label>
            <input
              type="text"
              placeholder="e.g. Site crane mobile hoisting excluded, testing by third party"
              value={exclusions}
              onChange={(e) => setExclusions(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3 py-2 text-xs sm:text-sm text-slate-800 focus:border-[#2563EB] focus:outline-none"
            />
          </div>

          {submitted && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-[8px] text-xs font-semibold text-green-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>Quotation Ingested! Forwarding to AI Bid Normalization Matrix...</span>
            </div>
          )}

          <div className="pt-3 flex items-center justify-end gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-[8px] text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Commercial Quotation</span>
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
