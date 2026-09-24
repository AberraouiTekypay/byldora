'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Shield, ArrowRight, User, Key, Building2 } from 'lucide-react';
import { useProcurementStore } from '@/lib/procurementStore';
import { UserRole } from '@/types/procurement';

export default function AuthPage() {
  const router = useRouter();
  const { switchRole } = useProcurementStore();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('t.benjelloun@byldora-enterprise.com');
  const [password, setPassword] = useState('••••••••••••');
  const [organization, setOrganization] = useState('Atlas Commercial Developments');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 600);
  };

  const handleRoleQuickAccess = (role: UserRole) => {
    switchRole(role);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#0B1220] text-white flex flex-col justify-between selection:bg-[#2563EB] selection:text-white">
      {/* Auth Navbar */}
      <header className="p-6 max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[8px] bg-[#2563EB] flex items-center justify-center text-white font-bold text-base">
            B
          </div>
          <span className="font-bold text-lg text-white tracking-tight">BYLDORA</span>
        </Link>
        <Link href="/" className="text-xs text-slate-400 hover:text-white transition-colors">
          &larr; Back to Landing Page
        </Link>
      </header>

      {/* Main Container */}
      <div className="max-w-md mx-auto w-full px-4 py-8">
        <div className="bg-[#1C2636] border border-[#2A384C] rounded-[14px] p-6 sm:p-8 shadow-xl">
          
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              {isLogin ? 'Sign in to BYLDORA' : 'Create Enterprise Account'}
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Procurement intelligence for construction developers &amp; contractors
            </p>
          </div>

          {/* Quick Access Roles for Evaluators */}
          <div className="mb-6 bg-[#0F1A2E] border border-blue-900/50 rounded-[10px] p-3.5">
            <div className="text-[11px] font-mono text-[#0EA5E9] uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Instant Evaluator Demo Personas</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleRoleQuickAccess('cpo')}
                className="p-2 rounded-[6px] bg-[#1C2636] hover:bg-[#2563EB] border border-slate-700 hover:border-blue-500 text-left transition-colors group"
              >
                <div className="text-[11px] font-bold text-white group-hover:text-white">CPO / Director</div>
                <div className="text-[10px] text-slate-400 group-hover:text-blue-100">Full Approval</div>
              </button>
              <button
                type="button"
                onClick={() => handleRoleQuickAccess('estimator')}
                className="p-2 rounded-[6px] bg-[#1C2636] hover:bg-[#2563EB] border border-slate-700 hover:border-blue-500 text-left transition-colors group"
              >
                <div className="text-[11px] font-bold text-white group-hover:text-white">Estimator</div>
                <div className="text-[10px] text-slate-400 group-hover:text-blue-100">BOQ &amp; RFQs</div>
              </button>
              <button
                type="button"
                onClick={() => handleRoleQuickAccess('supplier')}
                className="p-2 rounded-[6px] bg-[#1C2636] hover:bg-[#2563EB] border border-slate-700 hover:border-blue-500 text-left transition-colors group"
              >
                <div className="text-[11px] font-bold text-white group-hover:text-white">Supplier</div>
                <div className="text-[10px] text-slate-400 group-hover:text-blue-100">Bid Submissions</div>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Organization / Developer Name
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full bg-[#0B1220] border border-slate-700 rounded-[8px] pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:border-[#2563EB] focus:outline-none"
                    placeholder="e.g. Casablanca Commercial Developments"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Corporate Email Address
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0B1220] border border-slate-700 rounded-[8px] pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:border-[#2563EB] focus:outline-none"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Password
              </label>
              <div className="relative">
                <Key className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0B1220] border border-slate-700 rounded-[8px] pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:border-[#2563EB] focus:outline-none"
                  placeholder="Password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[8px] font-semibold text-sm text-white transition-colors shadow-sm disabled:opacity-50"
            >
              <span>{loading ? 'Authenticating...' : isLogin ? 'Access Platform' : 'Create Account'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-700 text-center text-xs text-slate-400">
            {isLogin ? (
              <span>
                Don&apos;t have an enterprise workspace?{' '}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-[#0EA5E9] hover:underline font-medium"
                >
                  Register organization
                </button>
              </span>
            ) : (
              <span>
                Already have credentials?{' '}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-[#0EA5E9] hover:underline font-medium"
                >
                  Sign in
                </button>
              </span>
            )}
          </div>

        </div>
      </div>

      {/* Subtle Bottom Attribution */}
      <footer className="p-6 text-center text-xs text-slate-500">
        <div>&copy; {new Date().getFullYear()} BYLDORA Technologies.</div>
        <div className="text-slate-400 text-[11px] mt-0.5">An EM300.co Company</div>
      </footer>
    </div>
  );
}
