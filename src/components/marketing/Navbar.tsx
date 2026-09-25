'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/languageContext';
import { Language } from '@/lib/translations';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.platform, href: '/platform' },
    { label: t.nav.howItWorks, href: '/how-it-works' },
    { label: t.nav.intelligence, href: '/construction-intelligence' },
    { label: t.nav.forDevelopers, href: '/for-developers' },
    { label: t.nav.forSuppliers, href: '/for-suppliers' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-150 border-b ${
        scrolled
          ? 'bg-[#F5F4F0]/95 backdrop-blur-xs border-[#D9DEE7] shadow-xs'
          : 'bg-[#F5F4F0] border-[#E5E4DE]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Wordmark & Descriptor */}
          <Link href="/" className="flex items-baseline gap-2.5 group focus:outline-none">
            <span className="font-bold text-xl text-[#111827] tracking-tight group-hover:text-[#2457D6] transition-colors">
              BYLDORA
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono tracking-wider text-[#506A85] uppercase font-medium border-l border-[#D9DEE7] pl-2.5">
              {t.nav.brandDescriptor}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-[#243244]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 border-b ${
                    isActive
                      ? 'text-[#2457D6] border-[#2457D6] font-semibold'
                      : 'text-[#243244] border-transparent hover:text-[#111827] hover:border-[#111827]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Language Switcher, Sign in, Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher: FR | EN | AR */}
            <div className="flex items-center border border-[#D9DEE7] bg-white rounded-[3px] p-0.5 text-[11px] font-mono">
              {(['fr', 'en', 'ar'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-0.5 rounded-[2px] transition-colors font-medium ${
                    language === lang
                      ? 'bg-[#111827] text-white font-bold'
                      : 'text-[#506A85] hover:text-[#111827]'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <Link
              href="/auth"
              className="text-xs font-medium text-[#243244] hover:text-[#111827] px-2.5 py-1.5 transition-colors"
            >
              {t.nav.signIn}
            </Link>

            <Link
              href="/dashboard/projects/new"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#111827] hover:bg-[#243244] rounded-[4px] transition-colors shadow-xs"
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button & Mobile Language Selector */}
          <div className="flex items-center gap-2 sm:hidden">
            <div className="flex items-center border border-[#D9DEE7] bg-white rounded-[3px] p-0.5 text-[10px] font-mono">
              {(['fr', 'en', 'ar'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`px-1.5 py-0.5 rounded-[2px] ${
                    language === lang ? 'bg-[#111827] text-white font-bold' : 'text-[#506A85]'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#111827] border border-[#D9DEE7] rounded-[4px] bg-white hover:bg-[#F5F4F0]"
              aria-label={t.nav.menu}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D9DEE7] bg-[#F5F4F0] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#111827] hover:bg-white rounded-[4px] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-[#D9DEE7] flex flex-col gap-2">
            <Link
              href="/auth"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-medium text-[#243244] border border-[#D9DEE7] bg-white rounded-[4px]"
            >
              {t.nav.signIn}
            </Link>
            <Link
              href="/dashboard/projects/new"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-semibold text-white bg-[#111827] rounded-[4px]"
            >
              {t.nav.startProject}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
