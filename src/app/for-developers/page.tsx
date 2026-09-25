'use client';

import React from 'react';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import FinalCtaSection from '@/components/marketing/FinalCtaSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/lib/languageContext';
import { ShieldCheck, Check, ArrowRight, BarChart3, Clock, Scale } from 'lucide-react';
import Link from 'next/link';

export default function ForDevelopersPage() {
  const { language } = useLanguage();

  const VALUE_PILLARS = [
    {
      title: language === 'fr' ? 'Maîtrise Complète du Budget Achats' : 'Total Capital & Budget Control',
      desc: language === 'fr'
        ? 'Suivez en direct l’allocation des enveloppes budgétaires par corps d’état. Comparez instantanément les estimations initiales aux offres fermes reçues pour éviter tout dépassement imprévu.'
        : 'Track live budget allocation across every trade package. Instantly benchmark initial project estimates against submitted vendor proposals to stop cost creep before award.',
      icon: BarChart3,
    },
    {
      title: language === 'fr' ? 'Piste d’Audit Opposable pour Banques & Comités' : 'Bank-Grade Audit Trails',
      desc: language === 'fr'
        ? 'Toutes les consultations, révisions de prix, fiches techniques et justifications de choix sont consignées dans un dossier infalsifiable, simplifiant les déblocages de fonds bancaires.'
        : 'Every tender revision, specification sheet, and selection justification is logged into an immutable audit record, accelerating project financing drawdowns.',
      icon: ShieldCheck,
    },
    {
      title: language === 'fr' ? 'Protection Contre les Avenants & Litiges' : 'Scope Discrepancy & Variation Defense',
      desc: language === 'fr'
        ? 'En isolant les exclusions de prestations (fret, déchargement, essais de mise en service) avant la passation du marché, vous éliminez les réclamations de chantier ultérieures.'
        : 'By uncovering unquoted scopes (transport, crane hoisting, commissioning) before contracts are executed, you prevent costly subsequent variations and claims.',
      icon: Scale,
    },
    {
      title: language === 'fr' ? 'Sécurisation du Chemin Critique' : 'Critical-Path Lead Time Protection',
      desc: language === 'fr'
        ? 'Les équipements critiques à long délai de fabrication (14 à 26 semaines) sont identifiés dès l’analyse du bordereau pour anticiper les commandes prioritaires sans bloquer le gros œuvre.'
        : 'Critical equipment with 14–26 week factory fabrication horizons is flagged immediately during BOQ parsing, allowing early commitment before critical path disruption.',
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#111827]">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="POUR DONNEURS D’ORDRE"
            headline={language === 'fr'
              ? 'La Visibilité Achats du Premier Bordereau au Bon de Commande'
              : 'Procurement Visibility From the First BOQ to the Purchase Order'}
            subheadline={language === 'fr'
              ? 'Conçu pour les maîtres d’ouvrage, promoteurs immobiliers et entreprises générales recherchant la rigueur financière et la sécurité contractuelle.'
              : 'Engineered for property developers, asset owners, and primary general contractors seeking institutional control, compliance, and defensible awards.'}
          />

          {/* 4 Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {VALUE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 shadow-xs hover:border-[#111827] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-[4px] bg-[#FAF9F6] border border-[#D9DEE7] flex items-center justify-center text-[#2457D6] mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold text-[#111827] tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#243244] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#E5E4DE] text-[11px] font-mono text-[#506A85]">
                    Standard de Maîtrise d’Ouvrage BYLDORA
                  </div>
                </div>
              );
            })}
          </div>

          {/* Practical Scope Checklist */}
          <div className="bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 mb-16">
            <h3 className="font-bold text-lg text-[#111827] mb-4">
              {language === 'fr' ? 'Ce que BYLDORA apporte concrètement à votre direction technique :' : 'What BYLDORA delivers to your technical & procurement committee:'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#243244]">
              {[
                'Standardisation instantanée des devis hétérogènes au format DQE',
                'Identification des variantes non équivalentes et dégradations thermiques',
                'Comparaison normalisée DAP Chantier intégrant les frais logistiques',
                'Modélisation de l’impact de trésorerie selon les délais de règlement (30j, 60j, 90j)',
                'Génération de bons de commande officiels avec retenue de garantie (5-10%)',
                'Consignation centralisée des offres révisées et additifs d’appels d’offres',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 bg-[#FAF9F6] border border-[#E5E4DE] rounded-[4px]">
                  <Check className="w-4 h-4 text-[#18794E] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Card */}
          <div className="bg-[#111827] text-white rounded-[6px] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight">
                {language === 'fr' ? 'Équipez vos équipes de maîtrise d’ouvrage.' : 'Equip your commercial and technical teams.'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {language === 'fr'
                  ? 'Démarrez avec un projet pilote sans engagement pour éprouver la rigueur du moteur d’adjudication.'
                  : 'Start with a pilot project to experience the rigor of the normalized adjudication engine.'}
              </p>
            </div>
            <Link
              href="/dashboard/projects/new"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#2457D6] hover:bg-[#1D47B8] text-white text-xs font-semibold rounded-[4px] transition-colors"
            >
              <span>{language === 'fr' ? 'Démarrer un projet' : 'Start a Project'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      <FinalCtaSection />
      <Footer />
    </div>
  );
}
