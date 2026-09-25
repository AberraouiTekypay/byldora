'use client';

import React from 'react';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import FinalCtaSection from '@/components/marketing/FinalCtaSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/lib/languageContext';
import { FileSpreadsheet, Layers, Send, Cpu, FileCheck2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PlatformPage() {
  const { language } = useLanguage();

  const MODULES = [
    {
      code: '01 / INGESTION',
      title: language === 'fr' ? 'Extraction & Structuration des Bordereaux (BOQ / DQE)' : 'Structured BOQ & Schedule Ingestion',
      desc: language === 'fr'
        ? 'Numérisation et extraction fine des classeurs Excel multi-onglets et bordereaux estimatifs. Décomposition hiérarchique des métrés, unités et spécifications CCTP dans une base unifiée.'
        : 'Deep multi-tier parsing of construction schedules, bills of quantities, and architectural specifications into structured relational databases.',
      icon: FileSpreadsheet,
      features: language === 'fr'
        ? ['Classification normalisée (CSI, Uniclass, POMI)', 'Détection automatique des unités et métrés', 'Isolation des exigences CCTP critiques']
        : ['Standard division hierarchies (CSI, Uniclass)', 'Automated unit and quantity validation', 'Critical specification extraction'],
    },
    {
      code: '02 / PACKAGES',
      title: language === 'fr' ? 'Allotissement & Budgétisation par Corps d’État' : 'Trade Package Partitioning & Budgeting',
      desc: language === 'fr'
        ? 'Regroupement de milliers d’articles en lots d’exécution cohérents (Gros Œuvre, Façades, CVC/Plomberie, Électricité, Finitions) avec budgets plafonds et jalons de livraison critiques.'
        : 'Grouping thousands of line items into distinct execution packages with defined budget thresholds and critical-path delivery milestones.',
      icon: Layers,
      features: language === 'fr'
        ? ['Périmètre de prestations hermétique', 'Contrôle budgétaire pré-consultation', 'Association des pièces écrites et plans d’exécution']
        : ['Watertight scope boundaries', 'Pre-tender budget allocation', 'Execution drawing and spec association'],
    },
    {
      code: '03 / RFQ DISPATCH',
      title: language === 'fr' ? 'Diffusion Multicanale & Collecte Sans Friction' : 'Omnichannel Tender Dissemination & Intake',
      desc: language === 'fr'
        ? 'Envoi des dossiers de consultation aux entreprises qualifiées. Les sous-traitants et fournisseurs répondent selon leurs usages : portail web direct, classeur Excel annoté ou devis PDF scanné.'
        : 'Distribute structured RFQ packages to pre-qualified regional vendors with zero friction: interactive portal, offline Excel, or PDF sheets.',
      icon: Send,
      features: language === 'fr'
        ? ['Canaux WhatsApp, Email et Portail', 'Protection des trames contre les formules corrompues', 'Horodatage certifié des dépôts d’offres']
        : ['WhatsApp, Email and Portal channels', 'Protected rate sheets without broken formulas', 'Certified submission audit logging'],
    },
    {
      code: '04 / BID INTEL',
      title: language === 'fr' ? 'Moteur de Normalisation & Équivalence Économique' : 'Bid Intelligence & Landed Cost Normalization',
      desc: language === 'fr'
        ? 'Analyse automatisée des devis reçus : détection des exclusions dissimulées (fret départ usine, grutage omis), chiffrage des écarts thermiques des variantes et harmonisation des conditions de règlement.'
        : 'Automated evaluation of vendor offers: uncovering hidden exclusions (omitted freight, crane hire), calculating variance penalties, and modeling payment credit.',
      icon: Cpu,
      features: language === 'fr'
        ? ['Calcul du coût réel rendu chantier (DAP)', 'Vérification de stricte conformité CCTP', 'Impact de trésorerie sur le BFR de l’entreprise']
        : ['True landed delivery cost model (DAP)', 'Strict technical compliance auditing', 'Working capital and credit impact analysis'],
    },
    {
      code: '05 / PO CONTRACT',
      title: language === 'fr' ? 'Adjudication Contrôlée & Bon de Commande Immuable' : 'Defensible Award & Verified PO Generation',
      desc: language === 'fr'
        ? 'Arbitrage commercial documenté par une piste d’audit opposable. Émission immédiate du Bon de Commande contractuel intégrant la retenue de garantie et les conditions de réception sur site.'
        : 'Defensible commercial award backed by an unalterable audit trail. Instant issuance of contract-ready Purchase Orders with standard retention clauses.',
      icon: FileCheck2,
      features: language === 'fr'
        ? ['Piste d’audit prête pour comités d’engagement', 'Clauses légales et retenue de garantie (5–10%)', 'Export PDF certifié et liaison comptable']
        : ['Investment committee audit trail', 'Statutory retention bond clauses (5–10%)', 'Certified PDF export and accounting sync'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#111827]">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="ARCHITECTURE LOGICIELLE"
            headline={language === 'fr' ? 'La Plateforme d’Achats BYLDORA' : 'The BYLDORA Procurement Platform'}
            subheadline={language === 'fr'
              ? 'Une infrastructure complète conçue pour transformer l’hétérogénéité des documents de construction en processus d’achat structurés, auditables et rationnels.'
              : 'Complete institutional infrastructure built to transform unstructured construction documents into rigorous, auditable procurement workflows.'}
          />

          {/* Modules Grid */}
          <div className="space-y-6 mb-16">
            {MODULES.map((module, idx) => {
              const Icon = module.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 shadow-xs hover:border-[#111827] transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-2 font-mono text-[11px] text-[#506A85] mb-2">
                        <Icon className="w-4 h-4 text-[#2457D6]" />
                        <span>{module.code}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#111827] tracking-tight">
                        {module.title}
                      </h3>
                    </div>

                    <div className="lg:col-span-5">
                      <p className="text-xs sm:text-sm text-[#243244] leading-relaxed">
                        {module.desc}
                      </p>
                    </div>

                    <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-[#E5E4DE] pt-4 lg:pt-0 lg:pl-6 space-y-2">
                      <div className="text-[10px] font-mono text-[#506A85] uppercase">Capacités Clés</div>
                      {module.features.map((feat, fIdx) => (
                        <div key={fIdx} className="text-xs font-mono text-[#111827] flex items-center gap-1.5">
                          <span className="text-[#18794E] font-bold">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Security & Reliability Banner */}
          <div className="bg-[#FAF9F6] border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="font-bold text-base text-[#111827]">
                {language === 'fr' ? 'Données Sécurisées & Confidentialité des Chantiers' : 'Enterprise Data Confidentiality & Integrity'}
              </h4>
              <p className="text-xs text-[#506A85]">
                {language === 'fr'
                  ? 'Chaque dossier de consultation est cloisonné. Les devis des concurrents restent strictement confidentiels jusqu’à l’ouverture des plis.'
                  : 'Every procurement tender is cryptographically partitioned. Supplier bids remain strictly sealed until formal opening.'}
              </p>
            </div>
            <Link
              href="/dashboard/projects/new"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#111827] hover:bg-[#243244] text-white text-xs font-semibold rounded-[4px] transition-colors"
            >
              <span>{language === 'fr' ? 'Démarrer une consultation' : 'Launch a project tender'}</span>
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
