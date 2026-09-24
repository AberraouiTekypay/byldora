'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, MapPin } from 'lucide-react';
import { useProcurementStore } from '@/lib/procurementStore';

export default function ProjectsPage() {
  const { projects, activeProjectId, setActiveProjectId } = useProcurementStore();

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Enterprise Projects</h1>
          <p className="text-xs sm:text-sm text-slate-500">Manage capital projects, total budgets, and procurement workspaces</p>
        </div>
        <Link
          href="/dashboard/projects/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold rounded-[8px] transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </Link>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => {
          const isActive = proj.id === activeProjectId;
          return (
            <div
              key={proj.id}
              className={`bg-white border rounded-[12px] p-6 shadow-xs flex flex-col justify-between transition-all ${
                isActive ? 'border-[#2563EB] ring-2 ring-blue-500/20' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded">
                    {proj.code}
                  </span>
                  {isActive && (
                    <span className="text-[11px] font-mono text-[#16A34A] bg-green-50 border border-green-200 px-2.5 py-0.5 rounded-full font-semibold">
                      CURRENT WORKSPACE
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] mb-1">
                  {proj.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{proj.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Total Budget</span>
                    <span className="font-bold text-slate-800 text-sm">MAD {(proj.budgetMAD / 1000000).toFixed(1)}M</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Committed / Spent</span>
                    <span className="font-bold text-slate-800 text-sm">MAD {(proj.spentMAD / 1000000).toFixed(2)}M</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">BOQ Line Items</span>
                    <span className="font-semibold text-slate-700">{proj.totalBoqItems.toLocaleString()} items</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Trade Packages</span>
                    <span className="font-semibold text-slate-700">{proj.packagesCount} packages</span>
                  </div>
                </div>

                <div className="mt-3 text-xs text-slate-500">
                  Lead Consultant: <strong className="text-slate-700">{proj.leadConsultant}</strong>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  Target: {proj.completionDate}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveProjectId(proj.id)}
                  className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-slate-700 cursor-default'
                      : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                  }`}
                >
                  {isActive ? 'Active Workspace' : 'Select Workspace'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
