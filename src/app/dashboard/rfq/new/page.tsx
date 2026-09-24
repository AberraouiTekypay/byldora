'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Send, ArrowLeft, MessageSquare, Mail, Globe } from 'lucide-react';
import { useProcurementStore } from '@/lib/procurementStore';

export default function NewRfqPage() {
  const router = useRouter();
  const { addRfqPackage, currentProject } = useProcurementStore();

  const [packageCode, setPackageCode] = useState('PKG-ELEC-05');
  const [title, setTitle] = useState('Transformers & Medium Voltage Switchgear');
  const [trade, setTrade] = useState('Electrical Engineering & Substations');
  const [budgetMAD, setBudgetMAD] = useState('3200000');
  const [deadline, setDeadline] = useState('2026-11-15');
  const [specStandard, setSpecStandard] = useState('IEC 62271 / Eurocode Standards');
  const [invitedSuppliers] = useState(4);
  const [dispatchChannels, setDispatchChannels] = useState({
    portal: true,
    email: true,
    whatsapp: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addRfqPackage({
      packageCode,
      title,
      trade,
      projectId: currentProject?.id || 'proj-marrakech-01',
      projectName: currentProject?.name || 'Marrakech Hospitality Project',
      budgetMAD: parseFloat(budgetMAD) || 3200000,
      deadline,
      status: 'issued',
      itemsCount: 14,
      invitedSuppliers,
      specStandard,
    });
    router.push('/dashboard/rfq');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Link
          href="/dashboard/rfq"
          className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Packages</span>
        </Link>
      </div>

      <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-6 sm:p-8 shadow-xs">
        <div className="mb-6">
          <span className="text-xs font-mono text-[#2563EB] uppercase font-bold">
            NEW PROCUREMENT TENDER
          </span>
          <h1 className="text-xl font-bold text-[#0F172A] mt-1">
            Bundle Trade Package &amp; Issue RFQ
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Assign BOQ items, establish technical standards, and dispatch invitations across omnichannel formats.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Package Code *
              </label>
              <input
                type="text"
                required
                value={packageCode}
                onChange={(e) => setPackageCode(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3.5 py-2 text-sm font-mono text-[#0F172A] focus:border-[#2563EB] focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Package Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3.5 py-2 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Trade Discipline
              </label>
              <input
                type="text"
                required
                value={trade}
                onChange={(e) => setTrade(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3.5 py-2 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Allocated Budget (MAD) *
              </label>
              <input
                type="number"
                required
                value={budgetMAD}
                onChange={(e) => setBudgetMAD(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3.5 py-2 text-sm font-mono text-[#0F172A] focus:border-[#2563EB] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Submission Deadline
              </label>
              <input
                type="date"
                required
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3.5 py-2 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Technical Specification Standard
              </label>
              <input
                type="text"
                required
                value={specStandard}
                onChange={(e) => setSpecStandard(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3.5 py-2 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-none"
              />
            </div>
          </div>

          {/* Omnichannel Dispatch Options */}
          <div className="pt-2">
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Emerging-Market Dispatch Channels
            </label>
            <div className="grid grid-cols-3 gap-3">
              <label className="border border-slate-200 rounded-[8px] p-3 flex items-center gap-2 cursor-pointer hover:bg-slate-50">
                <input
                  type="checkbox"
                  checked={dispatchChannels.portal}
                  onChange={(e) => setDispatchChannels({ ...dispatchChannels, portal: e.target.checked })}
                  className="rounded text-[#2563EB]"
                />
                <Globe className="w-4 h-4 text-[#2563EB]" />
                <span className="text-xs font-medium text-slate-800">Web Portal</span>
              </label>
              <label className="border border-slate-200 rounded-[8px] p-3 flex items-center gap-2 cursor-pointer hover:bg-slate-50">
                <input
                  type="checkbox"
                  checked={dispatchChannels.email}
                  onChange={(e) => setDispatchChannels({ ...dispatchChannels, email: e.target.checked })}
                  className="rounded text-[#2563EB]"
                />
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <span className="text-xs font-medium text-slate-800">Direct Email</span>
              </label>
              <label className="border border-slate-200 rounded-[8px] p-3 flex items-center gap-2 cursor-pointer hover:bg-slate-50">
                <input
                  type="checkbox"
                  checked={dispatchChannels.whatsapp}
                  onChange={(e) => setDispatchChannels({ ...dispatchChannels, whatsapp: e.target.checked })}
                  className="rounded text-[#2563EB]"
                />
                <MessageSquare className="w-4 h-4 text-[#16A34A]" />
                <span className="text-xs font-medium text-slate-800">WhatsApp Link</span>
              </label>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3">
            <Link
              href="/dashboard/rfq"
              className="px-4 py-2 border border-slate-300 rounded-[8px] text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-5 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-[8px] text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Issue RFQ Package</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
