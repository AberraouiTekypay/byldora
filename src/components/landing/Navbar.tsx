'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0B1220]/95 backdrop-blur-md border-b border-[#1C2636] py-3.5 shadow-md'
          : 'bg-[#0B1220] border-b border-[#1C2636]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-8 h-8 rounded-[8px] bg-[#2563EB] flex items-center justify-center text-white font-bold text-base tracking-wider shadow-sm group-hover:bg-[#1D4ED8] transition-colors">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight leading-none">
                BYLDORA
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium mt-0.5">
                Procurement Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link
              href="#value-strip"
              className="hover:text-white transition-colors focus:text-white"
            >
              Platform
            </Link>
            <Link
              href="#how-it-works"
              className="hover:text-white transition-colors focus:text-white"
            >
              How It Works
            </Link>
            <Link
              href="#product-visualization"
              className="hover:text-white transition-colors focus:text-white"
            >
              Bid Comparison
            </Link>
            <Link
              href="#bid-intelligence"
              className="hover:text-white transition-colors focus:text-white"
            >
              Intelligence
            </Link>
            <Link
              href="#construction-native"
              className="hover:text-white transition-colors focus:text-white"
            >
              Enterprise
            </Link>
            <Link
              href="#future-finance"
              className="hover:text-white transition-colors focus:text-white"
            >
              Capital Layer
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/auth"
              className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[8px] transition-colors shadow-sm focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0B1220]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-[8px] border border-slate-800"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1220] border-b border-[#1C2636] px-4 pt-3 pb-6 space-y-3">
          <Link
            href="#value-strip"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-[#1C2636]/60 rounded-md"
          >
            Platform
          </Link>
          <Link
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-[#1C2636]/60 rounded-md"
          >
            How It Works
          </Link>
          <Link
            href="#product-visualization"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-[#1C2636]/60 rounded-md"
          >
            Bid Comparison
          </Link>
          <Link
            href="#bid-intelligence"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-[#1C2636]/60 rounded-md"
          >
            Intelligence
          </Link>
          <Link
            href="#construction-native"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-[#1C2636]/60 rounded-md"
          >
            Enterprise Scope
          </Link>
          <div className="pt-4 border-t border-[#1C2636] flex flex-col gap-2">
            <Link
              href="/auth"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 text-sm font-medium text-slate-300 bg-[#1C2636] hover:bg-[#243247] rounded-[8px]"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[8px]"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
