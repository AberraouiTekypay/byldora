'use client';

import React from 'react';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import FinalCtaSection from '@/components/marketing/FinalCtaSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/lib/languageContext';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksPage() {
  const { language } = useLanguage();

  const STEPS = [
    {
      step: '01',
      action: language === 'fr' ? 'Import & Structuration' : 'Ingest & Standardize',
      title: language === 'fr' ? 'Téléversement du Bordereau (BOQ / DQE)' : 'Upload Project Schedule & BOQ',
      desc: language === 'fr'
        ? 'Importez les classeurs Excel multi-onglets ou les métrés d’architecte. Le moteur BYLDORA extrait les lignes, quantités, unités de mesure et spécifications CCTP dans une base de données relationnelle.'
        : 'Upload complex multi-tab Excel workbooks, civil schedules, or architectural BOQ sheets. The parser extracts line items, quantities, units, and technical specifications into a structured database.',
      meta: language === 'fr' ? 'Compatible Excel (.xlsx), CSV, bordereaux PDF' : 'Supports Excel, CSV, PDF schedules',
      checkpoint: language === 'fr' ? 'Contrôle automatique d’intégrité des formules' : 'Formula integrity verification',
    },
    {
      step: '02',
      action: language === 'fr' ? 'Allotissement' : 'Scope & Partition',
      title: language === 'fr' ? 'Constitution des Lots Techniques' : 'Structure Trade Execution Packages',
      desc: language === 'fr'
        ? 'Regroupez des milliers d’articles en lots d’exécution cohérents (Gros Œuvre, CVC, Façades, Électricité, Finitions) avec budgets plafonds et jalons de livraison critiques alignés sur le planning général.'
        : 'Group raw line items into clean commercial trade packages (e.g. Structural Steel, MEP Chillers, Facades) with target budgets and milestone delivery requirements.',
      meta: language === 'fr' ? 'Découpage normé Uniclass / MasterFormat' : 'Automated CSI / Uniclass grouping',
      checkpoint: language === 'fr' ? 'Validation des limites de prestations entre lots' : 'Inter-package boundary validation',
    },
    {
      step: '03',
      action: language === 'fr' ? 'Consultation' : 'Dissemination',
      title: language === 'fr' ? 'Émission des Appels d’Offres (RFQ)' : 'Issue Structured RFQ Packages',
      desc: language === 'fr'
        ? 'Diffusez les dossiers de consultation aux sous-traitants et fabricants présélectionnés avec date limite de remise ferme, cahier des charges et critères d’admissibilité clairs.'
        : 'Distribute structured tender packages to pre-qualified regional vendors with clear submission deadlines, terms, and technical acceptance criteria.',
      meta: language === 'fr' ? 'Diffusé par Portail Web, Email ou WhatsApp' : 'Dispatched via Portal, Email, or WhatsApp',
      checkpoint: language === 'fr' ? 'Accusé de réception et traçabilité des ouvertures' : 'Submission confirmation logging',
    },
    {
      step: '04',
      action: language === 'fr' ? 'Collecte Souple' : 'Intake',
      title: language === 'fr' ? 'Réception des Devis Sans Friction' : 'Receive Supplier Quotations',
      desc: language === 'fr'
        ? 'Les entreprises répondent via le canal le plus adapté à leur organisation : saisie directe en ligne, classeur Excel renseigné hors ligne ou devis PDF scanné transmis par messagerie.'
        : 'Suppliers quote using whatever format they prefer: interactive portal, marked-up Excel files, or PDF attachments sent over email or messaging.',
      meta: language === 'fr' ? 'Zéro barrière d’adoption pour les PME locales' : 'Zero barrier to regional supplier entry',
      checkpoint: language === 'fr' ? 'Extraction OCR automatique des devis signés' : 'Automatic quote parsing & normalization',
    },
    {
      step: '05',
      action: language === 'fr' ? 'Normalisation IA' : 'Economic Reconciliation',
      title: language === 'fr' ? 'Calcul du Coût Rendu Comparable' : 'AI Bid Normalization & Landed Economics',
      desc: language === 'fr'
        ? 'Le moteur identifie les exclusions non chiffrées (fret omis, grutage exclu), alerte sur les variantes proposées et intègre les conditions de paiement pour établir un coût réel comparable.'
        : 'The intelligence engine identifies hidden exclusions (omitted freight, crane hire), flags unapproved material substitutions, and normalizes payment terms to a single comparative baseline.',
      meta: language === 'fr' ? 'Analyse d’équivalence CCTP & modèle coût rendu' : 'Specification matching & landed cost model',
      checkpoint: language === 'fr' ? 'Détection des surcoûts masqués avant signature' : 'Hidden scope risk flag identification',
    },
    {
      step: '06',
      action: language === 'fr' ? 'Contractualisation' : 'Contract Execution',
      title: language === 'fr' ? 'Adjudication & Émission du Bon de Commande' : 'Award & Contract-Ready PO Issuance',
      desc: language === 'fr'
        ? 'Adjudiquez le marché sur la base d’un dossier opposable, générez le Bon de Commande officiel intégrant la retenue de garantie (5 à 10%) et scellez l’accord contractuel.'
        : 'Select the optimal commercial offer with defensible audit trails, produce contract-ready Purchase Orders with standard retention clauses, and lock in commitments.',
      meta: language === 'fr' ? 'Édition immédiate exportable en PDF certifié' : 'Instant binding PO generation with PDF export',
      checkpoint: language === 'fr' ? 'Piste d’audit prête pour les banques et comités' : 'Bank-grade compliance record',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#111827]">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="CYCLE OPÉRATIONNEL"
            headline={language === 'fr' ? 'Le Fonctionnement de BYLDORA' : 'How BYLDORA Works'}
            subheadline={language === 'fr'
              ? 'Du bordereau estimatif initial aux bons de commande contractuels en six étapes traçables, data-driven et opposables.'
              : 'From initial bill of quantities to finalized purchase orders in six auditable, data-driven steps.'}
          />

          {/* 6 Steps List */}
          <div className="space-y-6 mb-16">
            {STEPS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 shadow-xs hover:border-[#111827] transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  
                  <div className="md:w-1/4">
                    <div className="font-mono text-xs font-bold text-[#2457D6] mb-1">
                      ÉTAPE {item.step} / {item.action.toUpperCase()}
                    </div>
                    <h3 className="text-lg font-bold text-[#111827] tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <div className="md:w-1/2">
                    <p className="text-xs sm:text-sm text-[#243244] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="md:w-1/4 border-t md:border-t-0 md:border-l border-[#E5E4DE] pt-4 md:pt-0 md:pl-6 space-y-2 text-xs font-mono">
                    <div className="text-[#506A85] text-[11px]">{item.meta}</div>
                    <div className="flex items-center gap-1.5 text-[#18794E] font-semibold pt-1">
                      <Check className="w-3.5 h-3.5" />
                      <span>{item.checkpoint}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="bg-[#FAF9F6] border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-bold text-base text-[#111827]">
                {language === 'fr' ? 'Prêt à tester sur votre prochain chantier ?' : 'Ready to evaluate your next project?'}
              </div>
              <div className="text-xs text-[#506A85] mt-0.5">
                {language === 'fr' ? 'Importez un bordereau test en quelques minutes.' : 'Upload a sample BOQ schedule in minutes.'}
              </div>
            </div>
            <Link
              href="/dashboard/projects/new"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111827] hover:bg-[#243244] text-white text-xs font-semibold rounded-[4px] transition-colors"
            >
              <span>{language === 'fr' ? 'Démarrer un projet' : 'Start a project'}</span>
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
