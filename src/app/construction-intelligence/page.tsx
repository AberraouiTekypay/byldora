'use client';

import React from 'react';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import FinalCtaSection from '@/components/marketing/FinalCtaSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/lib/languageContext';
import { ArrowRight, Database, TrendingUp, ShieldCheck, Compass } from 'lucide-react';
import Link from 'next/link';

export default function ConstructionIntelligencePage() {
  const { language } = useLanguage();

  const INTELLIGENCE_AREAS = [
    {
      title: language === 'fr' ? 'Référentiel des Prix Unitaires Réels' : 'Actual Unit Cost Benchmarks',
      desc: language === 'fr'
        ? 'Comparaison des offres reçues avec les niveaux de prix constatés sur des chantiers comparables (au m², à la tonne ou à l’unité). Détection immédiate des sous-estimations à risque et des surfacturations.'
        : 'Benchmarking submitted vendor bids against observed transaction unit costs across comparable projects. Immediate detection of high-risk abnormally low bids and excessive markups.',
      icon: TrendingUp,
    },
    {
      title: language === 'fr' ? 'Modélisation des Écarts de Spécifications' : 'Specification Deviation Modeling',
      desc: language === 'fr'
        ? 'Évaluation rigoureuse des équivalences proposées par les fabricants : impact sur les consommations d’énergie des groupes CVC, longévité des menuiseries aluminium et coefficients thermiques réels.'
        : 'Rigorous technical modeling of proposed vendor brand substitutions: lifecycle energy consumption variances, structural facade load factors, and true acoustic ratings.',
      icon: Compass,
    },
    {
      title: language === 'fr' ? 'Historique de Ponctualité Usine-Chantier' : 'Factory-to-Site Fulfillment Indices',
      desc: language === 'fr'
        ? 'Consignation des délais réels de fabrication et d’acheminement sur site. Connaissance empirique des goulets d’étranglement industriels (transformateurs, ascenseurs, chillers).'
        : 'Empirical tracking of factory production delays, container lead times, and customs clearance timelines for high-risk long-lead equipment.',
      icon: Database,
    },
    {
      title: language === 'fr' ? 'Évaluation Objective de Solvabilité' : 'Objective Fulfillment & Reliability Ratings',
      desc: language === 'fr'
        ? 'Mesure de la capacité des sous-traitants à honorer leurs engagements contractuels sans recours abusif à des réclamations financières ou abandons de chantier.'
        : 'Objective metrics on contractor and vendor capacity to complete milestones without disputes, abandonment, or ungrounded variation claims.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#111827]">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="INTELLIGENCE SECTORIELLE"
            headline={language === 'fr'
              ? 'Chaque Transaction Structurée Construit la Mémoire du Marché'
              : 'Every Structured Procurement Transaction Creates Market Intelligence'}
            subheadline={language === 'fr'
              ? 'En transformant des devis éphémères en enregistrements normalisés, BYLDORA pose les fondations d’une connaissance objective des marchés de la construction.'
              : 'By turning ephemeral quotations into structured transaction logs, BYLDORA creates the foundation for objective construction market intelligence.'}
          />

          {/* Core Concept Architecture Diagram */}
          <div className="bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 mb-16 shadow-xs">
            <div className="text-[11px] font-mono text-[#506A85] uppercase tracking-wider mb-6 pb-2 border-b border-[#E5E4DE]">
              Convergence des 6 Variables Contractuelles vers l’Intelligence Collective
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8 text-center text-xs font-mono">
              <div className="p-3 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                <span className="text-[#506A85]">01 / COÛT</span>
                <div className="font-bold text-[#111827] mt-1">Prix Unitaires</div>
              </div>
              <div className="p-3 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                <span className="text-[#506A85]">02 / RÉSEAU</span>
                <div className="font-bold text-[#111827] mt-1">Fournisseurs</div>
              </div>
              <div className="p-3 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                <span className="text-[#506A85]">03 / TECHNIQUE</span>
                <div className="font-bold text-[#111827] mt-1">Spécifications</div>
              </div>
              <div className="p-3 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                <span className="text-[#506A85]">04 / LOGISTIQUE</span>
                <div className="font-bold text-[#111827] mt-1">Délais Usine</div>
              </div>
              <div className="p-3 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                <span className="text-[#506A85]">05 / TRÉSORERIE</span>
                <div className="font-bold text-[#111827] mt-1">Conditions BFR</div>
              </div>
              <div className="p-3 bg-[#EFF6FF] border border-[#BFDBFE] rounded-[4px]">
                <span className="text-[#2457D6]">06 / EXÉCUTION</span>
                <div className="font-bold text-[#2457D6] mt-1">Attachements</div>
              </div>
            </div>

            <div className="p-4 bg-[#FAF9F6] border border-[#E5E4DE] rounded-[4px] text-xs text-[#243244] leading-relaxed flex items-center justify-between">
              <div>
                <strong>Principe de probité :</strong> BYLDORA ne prétend pas détenir magiquement l’ensemble des données du secteur, mais structure chaque nouveau projet pour que son maître d’ouvrage ne réinvente jamais la roue.
              </div>
              <div className="font-mono text-[#506A85] text-[11px] shrink-0 hidden sm:block">
                Données Cloisonnées & Anonymisées
              </div>
            </div>
          </div>

          {/* 4 Intelligence Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {INTELLIGENCE_AREAS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 shadow-xs hover:border-[#111827] transition-colors"
                >
                  <div className="w-9 h-9 rounded-[4px] bg-[#FAF9F6] border border-[#D9DEE7] flex items-center justify-center text-[#2457D6] mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#243244] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Callout */}
          <div className="bg-[#FAF9F6] border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-bold text-base text-[#111827]">
                {language === 'fr' ? 'Explorez les comparatifs en direct' : 'Explore live bid intelligence schedules'}
              </div>
              <div className="text-xs text-[#506A85] mt-0.5">
                {language === 'fr' ? 'Accédez au studio d’adjudication et d’équivalence économique.' : 'Access the live adjudication studio and landed cost matrix.'}
              </div>
            </div>
            <Link
              href="/dashboard/bids"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111827] hover:bg-[#243244] text-white text-xs font-semibold rounded-[4px] transition-colors"
            >
              <span>{language === 'fr' ? 'Consulter le comparatif' : 'View Adjudication Studio'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </main>

      <FinalCtaSection />
      <Footer />
    </div>
  );
}
