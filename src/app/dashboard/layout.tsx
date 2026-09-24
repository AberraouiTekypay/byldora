'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Building2, 
  FileSpreadsheet, 
  Send, 
  Cpu, 
  FileCheck2, 
  Network, 
  ChevronDown, 
  LogOut, 
  Menu, 
  X,
  ExternalLink
} from 'lucide-react';
import { useProcurementStore } from '@/lib/procurementStore';

const NAVIGATION = [
  { name: 'Dashboard Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Projects', href: '/dashboard/projects', icon: Building2 },
  { name: 'BOQ Intelligence', href: '/dashboard/boq', icon: FileSpreadsheet },
  { name: 'RFQ Packages', href: '/dashboard/rfq', icon: Send },
  { name: 'Bid Intelligence Matrix', href: '/dashboard/bids', icon: Cpu },
  { name: 'Supplier Portal', href: '/dashboard/supplier-portal', icon: Network },
  { name: 'Awards & Purchase Orders', href: '/dashboard/award', icon: FileCheck2 },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, switchRole, currentProject } = useProcurementStore();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row text-[#0F172A]">
      
      {/* Mobile Header */}
      <header className="md:hidden bg-[#0B1220] text-white px-4 py-3 flex items-center justify-between border-b border-[#1C2636] sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-[6px] bg-[#2563EB] flex items-center justify-center text-white font-bold text-sm">
            B
          </div>
          <span className="font-bold text-base tracking-tight">BYLDORA</span>
        </Link>
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-1.5 rounded-[6px] text-slate-300 hover:text-white border border-slate-700"
          aria-label="Toggle Navigation"
        >
          {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0B1220] text-slate-300 border-r border-[#1C2636] flex flex-col justify-between transition-transform duration-200 md:static md:translate-x-0 ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-0 -translate-x-full md:translate-x-0'
        }`}
      >
        <div>
          {/* Brand Header */}
          <div className="p-5 border-b border-[#1C2636] flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-[8px] bg-[#2563EB] flex items-center justify-center text-white font-bold text-base tracking-wider">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-white tracking-tight leading-none">
                  BYLDORA
                </span>
                <span className="text-[10px] tracking-wider text-slate-400 uppercase font-mono mt-1">
                  Procurement Hub
                </span>
              </div>
            </Link>
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="md:hidden text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Active Project Card */}
          <div className="p-4 mx-3 my-3 bg-[#1C2636] border border-[#2A384C] rounded-[10px]">
            <div className="text-[10px] font-mono uppercase text-[#0EA5E9] font-semibold mb-1 flex items-center justify-between">
              <span>ACTIVE PROJECT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
            </div>
            <div className="text-xs font-bold text-white line-clamp-1">
              {currentProject?.name || 'Marrakech Hospitality Project'}
            </div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 flex items-center justify-between">
              <span>Budget:</span>
              <span className="text-white font-semibold">MAD {(currentProject?.budgetMAD / 1000000).toFixed(1)}M</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="px-3 space-y-1 mt-2">
            {NAVIGATION.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#2563EB] text-white shadow-xs'
                      : 'text-slate-300 hover:bg-[#1C2636] hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Session & Role Switcher */}
        <div className="p-4 border-t border-[#1C2636] bg-[#070B14]">
          <div className="relative">
            <button
              type="button"
              onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
              className="w-full flex items-center justify-between p-2 rounded-[8px] bg-[#1C2636] hover:bg-[#243247] border border-slate-700 text-left transition-colors"
            >
              <div className="flex flex-col truncate pr-2">
                <span className="text-xs font-bold text-white truncate">{user.name}</span>
                <span className="text-[10px] font-mono text-[#0EA5E9] truncate uppercase">{user.roleTitle}</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </button>

            {/* Role Switcher Menu */}
            {roleDropdownOpen && (
              <div className="absolute bottom-full left-0 w-full mb-2 bg-[#1C2636] border border-slate-700 rounded-[8px] shadow-xl p-2 space-y-1 z-50">
                <div className="text-[10px] font-mono text-slate-400 px-2 py-1 uppercase">Switch Demo Persona:</div>
                <button
                  type="button"
                  onClick={() => {
                    switchRole('cpo');
                    setRoleDropdownOpen(false);
                  }}
                  className={`w-full text-left px-2 py-1.5 rounded-[6px] text-xs font-medium transition-colors ${
                    user.role === 'cpo' ? 'bg-[#2563EB] text-white' : 'text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  CPO / Procurement Director
                </button>
                <button
                  type="button"
                  onClick={() => {
                    switchRole('estimator');
                    setRoleDropdownOpen(false);
                  }}
                  className={`w-full text-left px-2 py-1.5 rounded-[6px] text-xs font-medium transition-colors ${
                    user.role === 'estimator' ? 'bg-[#2563EB] text-white' : 'text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  Lead Estimator &amp; Quantity Surveyor
                </button>
                <button
                  type="button"
                  onClick={() => {
                    switchRole('supplier');
                    setRoleDropdownOpen(false);
                  }}
                  className={`w-full text-left px-2 py-1.5 rounded-[6px] text-xs font-medium transition-colors ${
                    user.role === 'supplier' ? 'bg-[#2563EB] text-white' : 'text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  Regional Supplier / Bidder
                </button>
              </div>
            )}
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <span>View Landing Page</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
            <Link href="/auth" className="hover:text-red-400 flex items-center gap-1">
              <LogOut className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Desktop Bar */}
        <header className="hidden md:flex bg-white border-b border-[#E2E8F0] px-8 py-3.5 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">ORGANIZATION:</span>
            <span className="text-xs font-bold text-[#0F172A]">{user.organization}</span>
            <span className="text-slate-300">|</span>
            <span className="text-xs font-mono text-slate-400">PROJECT:</span>
            <span className="text-xs font-bold text-[#2563EB]">{currentProject?.name} ({currentProject?.code})</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-xs font-mono bg-slate-100 px-2.5 py-1 rounded-[6px] text-slate-700 border border-slate-200">
              ROLE: <strong className="text-[#0F172A]">{user.roleTitle}</strong>
            </div>
            <Link
              href="/"
              className="text-xs font-medium text-slate-600 hover:text-[#0F172A] transition-colors"
            >
              Public Site
            </Link>
          </div>
        </header>

        {/* Page View Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>

        {/* Subtle Dashboard Footer */}
        <footer className="px-8 py-4 border-t border-[#E2E8F0] bg-white text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>BYLDORA Construction Procurement Intelligence &bull; Production Workspace</div>
          <div className="text-slate-400 font-medium">An EM300.co Company</div>
        </footer>

      </div>

    </div>
  );
}
