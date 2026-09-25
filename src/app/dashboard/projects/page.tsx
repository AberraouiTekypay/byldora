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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => {
          const isActive = proj.id === activeProjectId;
          return (
            <div
              key={proj.id}
              className={`bg-white border rounded-[14px] overflow-hidden shadow-xs flex flex-col justify-between transition-all hover:shadow-md ${
                isActive ? 'border-[#2563EB] ring-2 ring-blue-500/20' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Project Visual Banner */}
                {proj.image && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900 border-b border-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-[#0B1220]/20 to-transparent" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-white bg-[#0B1220]/80 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/20">
                        {proj.code}
                      </span>
                      {isActive ? (
                        <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 px-2 py-0.5 rounded-full font-semibold">
                          ● ACTIVE WORKSPACE
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-slate-200 bg-[#0B1220]/70 backdrop-blur-md px-2 py-0.5 rounded">
                          {proj.status.toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-2.5 left-3 text-xs text-white/90 font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span className="drop-shadow-xs">{proj.location}</span>
                    </div>
                  </div>
                )}

                <div className="p-5">
                  {!proj.image && (
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
                  )}

                  <h3 className="text-base font-bold text-[#0F172A] mb-1 leading-snug">
                    {proj.name}
                  </h3>

                  {!proj.image && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{proj.location}</span>
                    </div>
                  )}

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
            </div>

            <div className="p-5 pt-0 mt-auto">
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
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
          </div>
        );
      })}
      </div>

    </div>
  );
}
