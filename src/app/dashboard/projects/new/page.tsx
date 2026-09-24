'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useProcurementStore } from '@/lib/procurementStore';

export default function NewProjectPage() {
  const router = useRouter();
  const { addProject } = useProcurementStore();

  const [name, setName] = useState('');
  const [code, setCode] = useState(`PRJ-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`);
  const [location, setLocation] = useState('Casablanca Finance City, Morocco');
  const [budgetMAD, setBudgetMAD] = useState('45000000');
  const [leadConsultant, setLeadConsultant] = useState('Benslimane Engineering Partners');
  const [completionDate, setCompletionDate] = useState('Q3 2027');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProject({
      name,
      code,
      location,
      budgetMAD: parseFloat(budgetMAD) || 45000000,
      currency: 'MAD',
      status: 'tender_active',
      totalBoqItems: 1420,
      packagesCount: 16,
      rfqsCount: 8,
      completionDate,
      leadConsultant,
    });
    router.push('/dashboard/projects');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Link
          href="/dashboard/projects"
          className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-6 sm:p-8 shadow-xs">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-[#0F172A]">Initiate Capital Construction Project</h1>
          <p className="text-xs text-slate-500 mt-1">
            Establish project scope, overall budget in MAD, and baseline procurement parameters.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Project Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Tangier Marina Mixed-Use Tower"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3.5 py-2 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Project Code
              </label>
              <input
                type="text"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3.5 py-2 text-sm font-mono text-[#0F172A] focus:border-[#2563EB] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Total Budget (MAD) *
              </label>
              <input
                type="number"
                required
                placeholder="45000000"
                value={budgetMAD}
                onChange={(e) => setBudgetMAD(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3.5 py-2 text-sm font-mono text-[#0F172A] focus:border-[#2563EB] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Site Location
            </label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3.5 py-2 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Lead Architectural / Engineering Consultant
              </label>
              <input
                type="text"
                required
                value={leadConsultant}
                onChange={(e) => setLeadConsultant(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3.5 py-2 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Target Handover Date
              </label>
              <input
                type="text"
                required
                placeholder="Q4 2027"
                value={completionDate}
                onChange={(e) => setCompletionDate(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-[8px] px-3.5 py-2 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3">
            <Link
              href="/dashboard/projects"
              className="px-4 py-2 border border-slate-300 rounded-[8px] text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-5 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-[8px] text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Create Workspace</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
