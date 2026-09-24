'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#0B1220] text-slate-400 border-t border-[#1C2636] pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Brand & Structured Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-14 border-b border-[#1C2636]">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-[8px] bg-[#2563EB] flex items-center justify-center text-white font-bold text-base tracking-wider">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight">
                  BYLDORA
                </span>
                <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
                  {t.footer.tagline}
                </span>
              </div>
            </Link>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {t.footer.desc}
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 pt-1">
              <span>SOC-2 Ready</span>
              <span>&bull;</span>
              <span>Encrypted Ingestion</span>
              <span>&bull;</span>
              <span>Audit Logging</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {t.footer.product}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="#value-strip" className="hover:text-white transition-colors">
                  {language === 'fr' ? 'Intelligence BPDE / BOQ' : 'BOQ Intelligence'}
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  {language === 'fr' ? 'Diffusion des Appels d’Offres' : 'RFQ Dissemination'}
                </Link>
              </li>
              <li>
                <Link href="#product-visualization" className="hover:text-white transition-colors">
                  {language === 'fr' ? 'Matrice Comparative des Devis' : 'Bid Comparison Matrix'}
                </Link>
              </li>
              <li>
                <Link href="#bid-intelligence" className="hover:text-white transition-colors">
                  {language === 'fr' ? 'Moteur de Normalisation IA' : 'AI Normalization Engine'}
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors">
                  {language === 'fr' ? 'Édition des Bons de Commande' : 'Purchase Order Studio'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {t.footer.company}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="#construction-native" className="hover:text-white transition-colors">
                  {language === 'fr' ? 'À Propos de BYLDORA' : 'About BYLDORA'}
                </Link>
              </li>
              <li>
                <Link href="#future-finance" className="hover:text-white transition-colors">
                  {language === 'fr' ? 'Feuille de Route Infrastructure' : 'Infrastructure Roadmap'}
                </Link>
              </li>
              <li>
                <Link href="#value-strip" className="hover:text-white transition-colors">
                  {language === 'fr' ? 'Sécurité Entreprise' : 'Enterprise Security'}
                </Link>
              </li>
              <li>
                <a href="mailto:procurement@byldora.com" className="hover:text-white transition-colors">
                  procurement@byldora.com
                </a>
              </li>
              <li>
                <span className="text-slate-500 text-xs font-mono">
                  Casablanca &bull; Paris &bull; Dubai
                </span>
              </li>
            </ul>
          </div>

          {/* Legal Links & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/auth" className="hover:text-white transition-colors">
                  {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link href="/auth" className="hover:text-white transition-colors">
                  {language === 'fr' ? 'Conditions d’Utilisation' : 'Terms of Service'}
                </Link>
              </li>
              <li>
                <Link href="/auth" className="hover:text-white transition-colors">
                  {language === 'fr' ? 'Données Contractuelles BTP' : 'Commercial Contracting Data'}
                </Link>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/AberraouiTekypay/byldora" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub Enterprise
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Exact Required Attribution with clickable Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-500">
            &copy; {new Date().getFullYear()} BYLDORA Technologies. {t.footer.rights}
          </div>

          {/* Exact Required Footer Attribution with EM300.co as a link */}
          <div className="text-slate-400 font-medium tracking-wide">
            An{' '}
            <a
              href="https://em300.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white underline decoration-slate-600 underline-offset-2 transition-colors font-semibold"
            >
              EM300.co
            </a>{' '}
            Company
          </div>

          <div className="text-slate-500 text-[11px] font-mono">
            Enterprise Infrastructure v2.4
          </div>
        </div>

      </div>
    </footer>
  );
}
