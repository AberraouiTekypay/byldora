'use client';

import React, { useState } from 'react';
import { 
  Printer, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { useProcurementStore } from '@/lib/procurementStore';

export default function AwardPoStudioPage() {
  const { purchaseOrders } = useProcurementStore();
  const [selectedPoId, setSelectedPoId] = useState<string>(purchaseOrders[0]?.id || 'po-mhp-089');

  const activePo = purchaseOrders.find(p => p.id === selectedPoId) || purchaseOrders[0];

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#16A34A] mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>CONTRACTUAL AWARD &amp; PO STUDIO</span>
          </div>
          <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">
            Purchase Orders &amp; Commercial Awards
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Digitally certified purchase orders with standard retention clauses and delivery milestone commitments.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 hover:bg-slate-50 rounded-[8px] text-xs font-semibold text-slate-700 transition-colors shadow-2xs"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Export PDF</span>
          </button>
        </div>
      </div>

      {/* PO Selector Tabs */}
      {purchaseOrders.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {purchaseOrders.map((po) => (
            <button
              key={po.id}
              onClick={() => setSelectedPoId(po.id)}
              className={`px-3 py-1.5 rounded-[8px] text-xs font-mono font-semibold transition-colors shrink-0 ${
                selectedPoId === po.id
                  ? 'bg-[#0B1220] text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {po.poNumber} &bull; {po.supplierName}
            </button>
          ))}
        </div>
      )}

      {/* The Printable Purchase Order Document Card */}
      {activePo && (
        <div className="bg-white border border-[#CBD5E1] rounded-[14px] shadow-md p-6 sm:p-10 font-sans print:shadow-none print:border-none">
          
          {/* Document Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b-2 border-slate-900">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-[6px] bg-[#2563EB] flex items-center justify-center text-white font-bold text-base">
                  B
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-[#0F172A]">
                  BYLDORA
                </span>
              </div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">
                Verified Enterprise Procurement Document
              </div>
              <div className="text-xs text-slate-500 mt-2 space-y-0.5">
                <div>Buyer: <strong>Atlas Commercial Developments</strong></div>
                <div>Project: {activePo.projectName}</div>
                <div>Issue Date: {activePo.issueDate}</div>
              </div>
            </div>

            <div className="sm:text-right">
              <div className="inline-block px-3 py-1 bg-green-50 border border-green-300 text-green-800 text-xs font-mono font-bold rounded-full uppercase tracking-wider mb-2">
                &bull; Legally Issued &amp; Authorized
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-[#0F172A]">
                {activePo.poNumber}
              </div>
              <div className="text-xs font-mono text-slate-500 mt-1">
                Audit Record ID: 0x9f4a...831b
              </div>
            </div>
          </div>

          {/* Supplier & Delivery Coordinates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-b border-slate-200 text-xs sm:text-sm">
            <div>
              <span className="text-[11px] font-mono text-slate-400 block uppercase font-semibold mb-1">
                Contracted Vendor / Supplier
              </span>
              <div className="font-bold text-base text-[#0F172A]">{activePo.supplierName}</div>
              <div className="text-slate-600 mt-1">{activePo.supplierContact}</div>
              <div className="text-slate-500 text-xs mt-0.5">{activePo.supplierAddress}</div>
            </div>

            <div>
              <span className="text-[11px] font-mono text-slate-400 block uppercase font-semibold mb-1">
                Delivery Site &amp; Schedule
              </span>
              <div className="font-semibold text-slate-800">{activePo.deliveryLocation}</div>
              <div className="text-slate-600 mt-1">
                Required Milestone Date: <strong className="text-slate-900 font-mono">{activePo.deliveryDate}</strong>
              </div>
              <div className="text-slate-500 text-xs mt-0.5">
                Commercial Terms: {activePo.paymentTerms}
              </div>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="py-6">
            <table className="w-full text-left text-xs sm:text-sm font-sans">
              <thead>
                <tr className="border-b border-slate-300 text-slate-500 font-mono text-xs">
                  <th className="pb-3">ITEM #</th>
                  <th className="pb-3">SCOPE SPECIFICATION</th>
                  <th className="pb-3">UNIT</th>
                  <th className="pb-3 text-right">QTY</th>
                  <th className="pb-3 text-right">UNIT RATE (MAD)</th>
                  <th className="pb-3 text-right">LINE TOTAL (MAD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {activePo.items.map((line, idx) => (
                  <tr key={idx} className="py-3">
                    <td className="py-3 font-mono font-bold text-slate-700">{line.itemNumber}</td>
                    <td className="py-3 font-medium text-[#0F172A]">{line.description}</td>
                    <td className="py-3 text-slate-600">{line.unit}</td>
                    <td className="py-3 font-mono text-right text-slate-800">{line.quantity.toLocaleString()}</td>
                    <td className="py-3 font-mono text-right text-slate-800">
                      MAD {line.unitPriceMAD.toLocaleString()}
                    </td>
                    <td className="py-3 font-mono font-bold text-right text-slate-900">
                      MAD {line.totalMAD.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Financial Totals */}
          <div className="border-t-2 border-slate-300 pt-6 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="max-w-md text-xs text-slate-500 space-y-1.5">
              <div className="font-bold text-slate-700">Contractual Retention Clause:</div>
              <p>
                A standard <strong>{activePo.retentionPercentage}% performance retention</strong> will be withheld from interim applications, releasable 50% upon Practical Completion Certificate and 50% upon expiry of the 12-month Defects Liability Period.
              </p>
            </div>

            <div className="sm:w-80 space-y-2 text-xs sm:text-sm font-mono">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal (Excl. Tax):</span>
                <span>MAD {activePo.totalAmountMAD.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Moroccan VAT (20%):</span>
                <span>MAD {activePo.taxAmountMAD.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#0F172A] pt-2 border-t border-slate-300">
                <span>Grand Total:</span>
                <span>MAD {activePo.grandTotalMAD.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Defensible Signoff Stamp */}
          <div className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div className="p-4 bg-slate-50 rounded-[8px] border border-slate-200">
              <span className="text-[10px] font-mono text-slate-400 block uppercase mb-1">
                Authorized By (General Contractor / Developer)
              </span>
              <div className="font-bold text-[#0F172A]">{activePo.authorizedBy}</div>
              <div className="text-slate-500 mt-0.5">Verified Digital Signoff &bull; {activePo.issueDate}</div>
              <div className="mt-3 text-[11px] font-mono text-slate-400">
                Certified SHA-256 Signature Approved
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-[8px] border border-slate-200">
              <span className="text-[10px] font-mono text-slate-400 block uppercase mb-1">
                Supplier Acknowledgment &amp; Acceptance
              </span>
              <div className="font-bold text-[#0F172A]">{activePo.supplierName}</div>
              <div className="text-slate-500 mt-0.5">Countersignature pending site milestone handover</div>
              <div className="mt-3 text-[11px] font-mono text-[#16A34A] flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>PO Dispatched via BYLDORA Network</span>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
