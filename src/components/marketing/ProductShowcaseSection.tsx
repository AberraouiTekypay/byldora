'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import { ArrowRight, FileText, Send, Cpu, Building2, UserCheck } from 'lucide-react';

export default function ProductShowcaseSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'package' | 'rfq' | 'bid' | 'supplier'>('overview');

  const TABS = [
    { id: 'overview', label: t.productShowcase.tabOverview, icon: Building2 },
    { id: 'package', label: t.productShowcase.tabPackage, icon: FileText },
    { id: 'rfq', label: t.productShowcase.tabRfq, icon: Send },
    { id: 'bid', label: t.productShowcase.tabBidIntel, icon: Cpu },
    { id: 'supplier', label: t.productShowcase.tabSupplier, icon: UserCheck },
  ] as const;

  return (
    <section className="bg-[#F5F4F0] py-16 md:py-24 border-b border-[#D9DEE7] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={t.productShowcase.eyebrow}
          headline={t.productShowcase.headline}
          subheadline={t.productShowcase.subheadline}
        />

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 border-b border-[#D9DEE7]">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-[4px] text-xs font-mono font-medium transition-colors shrink-0 border ${
                  isActive
                    ? 'bg-[#111827] text-white border-[#111827]'
                    : 'bg-white text-[#243244] border-[#D9DEE7] hover:bg-[#FAF9F6]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product UI View Container */}
        <div className="bg-white border border-[#D9DEE7] rounded-[6px] shadow-sm overflow-hidden">
          
          {/* Header Bar */}
          <div className="bg-[#FAF9F6] border-b border-[#D9DEE7] px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-bold text-[#111827] uppercase">
                BYLDORA / {activeTab.toUpperCase()} / PRJ-CAS-2026
              </span>
              <Badge variant="mono" size="sm">ENVIRONNEMENT DÉCISIONNEL</Badge>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2457D6] hover:underline"
            >
              <span>Ouvrir l’application complète</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Tab 1: Project Overview */}
          {activeTab === 'overview' && (
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
                <div className="p-3.5 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                  <div className="text-[10px] font-mono text-[#506A85] uppercase">Enveloppe Achats</div>
                  <div className="text-xl font-bold font-mono text-[#111827] mt-1">38 400 000 MAD</div>
                  <div className="text-[11px] text-[#18794E] mt-0.5">● 100% allouée</div>
                </div>
                <div className="p-3.5 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                  <div className="text-[10px] font-mono text-[#506A85] uppercase">Lots Prévus</div>
                  <div className="text-xl font-bold font-mono text-[#111827] mt-1">27 Lots</div>
                  <div className="text-[11px] text-[#506A85] mt-0.5">18 consultations lancées</div>
                </div>
                <div className="p-3.5 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                  <div className="text-[10px] font-mono text-[#506A85] uppercase">Lots Adjudiqués</div>
                  <div className="text-xl font-bold font-mono text-[#18794E] mt-1">5 Lots</div>
                  <div className="text-[11px] text-[#18794E] mt-0.5">Bons de commande émis</div>
                </div>
                <div className="p-3.5 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                  <div className="text-[10px] font-mono text-[#506A85] uppercase">Économies sur Coût Rendu</div>
                  <div className="text-xl font-bold font-mono text-[#2457D6] mt-1">1 240 000 MAD</div>
                  <div className="text-[11px] text-[#2457D6] mt-0.5">Écarts réconciliés</div>
                </div>
              </div>

              <div className="border border-[#D9DEE7] rounded-[4px] overflow-hidden text-xs font-mono">
                <table className="w-full text-left">
                  <thead className="bg-[#FAF9F6] text-[#506A85] border-b border-[#D9DEE7]">
                    <tr>
                      <th className="p-3">Réf Lot</th>
                      <th className="p-3">Corps d’État</th>
                      <th className="p-3">Budget Estimatif</th>
                      <th className="p-3">Offre Lauréate</th>
                      <th className="p-3 text-right">Statut</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E4DE] text-[#111827]">
                    <tr>
                      <td className="p-3 font-bold">LOT-01</td>
                      <td className="p-3 font-sans">Terrassement & Gros Œuvre</td>
                      <td className="p-3">14 200 000 MAD</td>
                      <td className="p-3">13 850 000 MAD</td>
                      <td className="p-3 text-right"><Badge variant="success">Attribué</Badge></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">LOT-04</td>
                      <td className="p-3 font-sans">Menuiserie Aluminium & Façade</td>
                      <td className="p-3">5 100 000 MAD</td>
                      <td className="p-3">4 960 000 MAD</td>
                      <td className="p-3 text-right"><Badge variant="warning">Évaluation</Badge></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">LOT-08</td>
                      <td className="p-3 font-sans">Génie Climatique & Ventilation</td>
                      <td className="p-3">2 600 000 MAD</td>
                      <td className="p-3">2 410 000 MAD</td>
                      <td className="p-3 text-right"><Badge variant="success">Attribué</Badge></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 2: Procurement Package */}
          {activeTab === 'package' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E5E4DE]">
                <div>
                  <h4 className="font-bold text-base text-[#111827]">Lot 08 — Génie Climatique & Traitement d’Air</h4>
                  <div className="text-xs text-[#506A85] font-mono mt-0.5">Budget cible : 2 600 000 MAD • Division Uniclass Pr_65_70</div>
                </div>
                <Badge variant="blue">Consultation Ouverte</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 text-xs font-mono">
                <div className="p-3 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                  <span className="text-[#506A85]">Spécifications :</span>
                  <div className="font-bold text-[#111827] mt-1">Eurovent & ASHRAE 90.1</div>
                </div>
                <div className="p-3 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                  <span className="text-[#506A85]">Délai Chantier Requis :</span>
                  <div className="font-bold text-[#111827] mt-1">16 Semaines Usine</div>
                </div>
                <div className="p-3 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                  <span className="text-[#506A85]">Conditions de Paiement :</span>
                  <div className="font-bold text-[#111827] mt-1">Traite 60j + Retenue 10%</div>
                </div>
              </div>

              <div className="border border-[#D9DEE7] rounded-[4px] p-4 text-xs font-mono text-[#243244]">
                <div className="font-bold text-[#111827] mb-2 uppercase text-[11px]">Extraction des Postes Critiques (BPDE) :</div>
                <div className="space-y-1.5 text-[11px]">
                  <div>08.01.01 — 2 Groupes eau glacée centrifuges 450 TR VFD (Conforme CCTP)</div>
                  <div>08.01.02 — 4 Centrales de traitement d’air VAV 12 000 CFM (Filtres F7/F9)</div>
                  <div>08.02.04 — 320 ml Tuyauterie acier soudé pré-isolée DN150</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: RFQ Builder */}
          {activeTab === 'rfq' && (
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-base text-[#111827]">Dossier de Consultation Électronique (RFQ)</h4>
                <div className="text-xs text-[#506A85] font-mono mt-0.5">Diffusion multicanale avec trame de réponse normalisée</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono mb-4">
                <div className="p-3.5 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                  <div className="text-[#506A85] uppercase text-[10px]">Format Fournisseur Accepté</div>
                  <div className="font-bold text-[#111827] mt-1">Portail web interactif, bordereau Excel ou PDF scanné</div>
                </div>
                <div className="p-3.5 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                  <div className="text-[#506A85] uppercase text-[10px]">Exigence Obligatoire</div>
                  <div className="font-bold text-[#111827] mt-1">DAP Chantier, engagement délai ferme et fiches techniques</div>
                </div>
              </div>

              <div className="p-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[4px] text-xs text-[#18794E] font-mono flex items-center justify-between">
                <span>✓ Trame BPDE verrouillée contre la corruption de formules mathématiques</span>
                <span className="font-bold">Prêt pour envoi</span>
              </div>
            </div>
          )}

          {/* Tab 4: Bid Intelligence */}
          {activeTab === 'bid' && (
            <div className="p-6">
              <div className="mb-4 pb-2 border-b border-[#E5E4DE] flex items-center justify-between">
                <h4 className="font-bold text-base text-[#111827]">Matrice Comparative des Devis Réconciliés</h4>
                <span className="text-xs font-mono text-[#506A85]">3 Offres Normalisées</span>
              </div>

              <div className="border border-[#D9DEE7] rounded-[4px] overflow-hidden text-xs font-mono">
                <table className="w-full text-left">
                  <thead className="bg-[#FAF9F6] text-[#506A85] border-b border-[#D9DEE7]">
                    <tr>
                      <th className="p-3">Critère d’Évaluation</th>
                      <th className="p-3 bg-[#EFF6FF]/60 text-[#2457D6] font-bold">Fournisseur A (Atlas)</th>
                      <th className="p-3">Fournisseur B (Maghreb)</th>
                      <th className="p-3">Fournisseur C (Sahara)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E4DE]">
                    <tr>
                      <td className="p-3 font-semibold font-sans">Montant Devis Brut</td>
                      <td className="p-3 bg-[#EFF6FF]/30 font-bold text-[#111827]">2 410 000 MAD</td>
                      <td className="p-3 text-slate-700">2 270 000 MAD</td>
                      <td className="p-3 text-slate-700">2 490 000 MAD</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold font-sans">Conformité CCTP</td>
                      <td className="p-3 bg-[#EFF6FF]/30 text-[#18794E] font-bold">100% Conforme</td>
                      <td className="p-3 text-[#B7791F]">92% (moteur substitué)</td>
                      <td className="p-3 text-[#18794E]">100% Conforme</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold font-sans">Fret & Grutage</td>
                      <td className="p-3 bg-[#EFF6FF]/30 text-[#18794E]">Inclus DAP Chantier</td>
                      <td className="p-3 text-[#B42318] font-bold">+185 000 MAD non chiffré</td>
                      <td className="p-3 text-[#18794E]">Inclus DAP Chantier</td>
                    </tr>
                    <tr className="bg-[#FAF9F6] font-bold">
                      <td className="p-3 font-sans text-[#111827]">COÛT RENDU COMPARABLE</td>
                      <td className="p-3 bg-[#EFF6FF] text-[#18794E] text-sm">2 410 000 MAD (Adjugé)</td>
                      <td className="p-3 text-[#B42318] text-sm">2 630 000 MAD</td>
                      <td className="p-3 text-sm">2 490 000 MAD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 5: Supplier Profile */}
          {activeTab === 'supplier' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E5E4DE]">
                <div>
                  <h4 className="font-bold text-base text-[#111827]">Fiche Entreprise : Atlas Clim Maroc</h4>
                  <div className="text-xs text-[#506A85] font-mono mt-0.5">Fournisseur agréé Génie Climatique • RC Casablanca 48921</div>
                </div>
                <Badge variant="success">Vérifié & Solvable</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono mb-4">
                <div className="p-3 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                  <span className="text-[#506A85]">Assurances & Décennale :</span>
                  <div className="font-bold text-[#18794E] mt-1">À jour (2026/2027)</div>
                </div>
                <div className="p-3 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                  <span className="text-[#506A85]">Taux de Respect Délais :</span>
                  <div className="font-bold text-[#111827] mt-1">98,2% sur 6 chantiers</div>
                </div>
                <div className="p-3 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px]">
                  <span className="text-[#506A85]">Volume Traité :</span>
                  <div className="font-bold text-[#111827] mt-1">18,4M MAD certifiés</div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
