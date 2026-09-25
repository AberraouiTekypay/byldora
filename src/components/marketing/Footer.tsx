'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { Language } from '@/lib/translations';

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-[#111827] text-slate-400 border-t border-[#243244] pt-16 pb-12 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-[#243244]">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block group focus:outline-none">
              <span className="font-bold text-xl text-white tracking-tight">
                BYLDORA
              </span>
              <span className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase font-medium mt-1">
                {t.footer.descriptor}
              </span>
            </Link>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              BYLDORA structure les consultations de la construction, compare la réalité économique des offres et documente les décisions d’achat sur les marchés en croissance.
            </p>

            {/* Language Switcher in Footer */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-500">Langue :</span>
              <div className="inline-flex border border-slate-700 bg-[#1C2636] rounded-[2px] p-0.5">
                {(['fr', 'en', 'ar'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-0.5 rounded-[2px] transition-colors ${
                      language === lang
                        ? 'bg-[#2457D6] text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Platform Navigation */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">
              {t.footer.navTitle}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/platform" className="hover:text-white transition-colors">
                  {t.nav.platform}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  {t.nav.howItWorks}
                </Link>
              </li>
              <li>
                <Link href="/for-developers" className="hover:text-white transition-colors">
                  {t.nav.forDevelopers}
                </Link>
              </li>
              <li>
                <Link href="/for-suppliers" className="hover:text-white transition-colors">
                  {t.nav.forSuppliers}
                </Link>
              </li>
              <li>
                <Link href="/construction-intelligence" className="hover:text-white transition-colors">
                  {t.nav.intelligence}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">
              {t.footer.legalTitle}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Confidentialité & Données
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Conditions Commerciales
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Operating Footprint */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">
              {t.footer.contactTitle}
            </div>
            <div className="text-xs text-slate-400 space-y-1.5 font-mono">
              <div>Casablanca • Anfa Finance City</div>
              <div>Paris • Rue de la Paix</div>
              <div className="pt-2 text-slate-300">
                <a href="mailto:contact@byldora.com" className="hover:text-white underline decoration-slate-600">
                  contact@byldora.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Mandatory EM300 Affiliation Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} BYLDORA Technologies. {t.footer.rights}
          </div>

          {/* Mandatory exact footer attribution with clickable EM300.co link */}
          <div className="text-slate-400 font-medium tracking-wide">
            An{' '}
            <a
              href="https://em300.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-white underline decoration-slate-600 underline-offset-2 transition-colors font-semibold"
            >
              EM300.co
            </a>{' '}
            Company
          </div>

          <div className="text-slate-500 font-mono text-[11px]">
            Procurement Infrastructure v3.0
          </div>
        </div>

      </div>
    </footer>
  );
}
