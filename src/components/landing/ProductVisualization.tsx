'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';

export default function ProductVisualization() {
  const [activeTab, setActiveTab] = useState<'comparison' | 'lineitems' | 'risk'>('comparison');
  const { language, t } = useLanguage();

  return (
    <section id="product-visualization" className="bg-[#F8FAFC] py-20 lg:py-28 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-slate-200 border border-slate-300 text-xs font-semibold text-slate-800 tracking-wide mb-3">
              <span>{t.productVis.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              {t.productVis.headline}
            </h2>
            <p className="mt-3 text-base text-[#475569] leading-relaxed">
              {t.productVis.subheadline}
            </p>
          </div>

          {/* Interface Tabs */}
          <div className="flex items-center gap-1 bg-slate-200 p-1 rounded-[8px] border border-slate-300 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-3 py-1.5 rounded-[6px] transition-all ${
                activeTab === 'comparison'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.productVis.tabMatrix}
            </button>
            <button
              onClick={() => setActiveTab('lineitems')}
              className={`px-3 py-1.5 rounded-[6px] transition-all ${
                activeTab === 'lineitems'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.productVis.tabItems}
            </button>
            <button
              onClick={() => setActiveTab('risk')}
              className={`px-3 py-1.5 rounded-[6px] transition-all ${
                activeTab === 'risk'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.productVis.tabRisk}
            </button>
          </div>
        </div>

        {/* The SaaS Comparison UI Frame */}
        <div className="bg-white border border-[#CBD5E1] rounded-[14px] shadow-lg overflow-hidden">
          
          {/* Header Bar of Table */}
          <div className="bg-[#0B1220] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-[#1C2636]">
            <div>
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-[#0EA5E9] font-mono text-xs border border-blue-500/40">
                  PKG-HVAC-04
                </span>
                <h3 className="font-bold text-sm sm:text-base text-white">
                  {language === 'fr' ? 'Lot CVC — Groupes de Production d’Eau Glacée & CTA' : 'HVAC Chiller & Air Handling Equipment Package'}
                </h3>
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {language === 'fr' 
                  ? 'Projet Hôtelier Marrakech • Budget Estimatif : 2 600 000 MAD • 3 offres conformes reçues'
                  : 'Project: Marrakech Hospitality Project • Target Budget: MAD 2,600,000 • 3 compliant offers received'}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-300 font-mono">
                {language === 'fr' ? 'Devise :' : 'Currency:'} <strong className="text-white font-bold">MAD (Dirham Marocain)</strong>
              </span>
              <Link
                href="/dashboard/bids"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[6px] text-xs font-semibold text-white transition-colors"
              >
                <span>{t.productVis.openStudio}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Main Comparison Matrix Body */}
          {activeTab === 'comparison' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm font-sans border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[#475569]">
                    <th className="py-3.5 px-6 font-semibold w-1/4">{t.productVis.thCriterion}</th>
                    <th className="py-3.5 px-6 font-semibold w-1/4 bg-blue-50/50 border-x border-blue-100">
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A] font-bold">
                          {language === 'fr' ? 'Fournisseur A • Atlas Clim' : 'Supplier A • Atlas Clim'}
                        </span>
                        <span className="px-2 py-0.5 bg-[#16A34A] text-white text-[10px] font-mono rounded font-bold uppercase">
                          {t.productVis.recommendedBadge}
                        </span>
                      </div>
                    </th>
                    <th className="py-3.5 px-6 font-semibold w-1/4">
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A] font-bold">
                          {language === 'fr' ? 'Fournisseur B • Maghreb Clim' : 'Supplier B • Maghreb Clim'}
                        </span>
                        <span className="px-2 py-0.5 bg-amber-500 text-white text-[10px] font-mono rounded font-bold uppercase">
                          {t.productVis.riskBadge}
                        </span>
                      </div>
                    </th>
                    <th className="py-3.5 px-6 font-semibold w-1/4">
                      <div className="flex items-center justify-between">
                        <span className="text-[#0F172A] font-bold">
                          {language === 'fr' ? 'Fournisseur C • Sahara Thermal' : 'Supplier C • Sahara Thermal'}
                        </span>
                        <span className="px-2 py-0.5 bg-slate-600 text-white text-[10px] font-mono rounded font-bold uppercase">
                          {t.productVis.standardBadge}
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {/* Headline Quote */}
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#0F172A]">
                      {t.productVis.rowHeadline}
                      <span className="block text-[11px] font-normal text-slate-500">{t.productVis.rowHeadlineSub}</span>
                    </td>
                    <td className="py-3.5 px-6 font-mono font-bold text-slate-800 bg-blue-50/30 border-x border-blue-100">
                      MAD 2,410,000
                    </td>
                    <td className="py-3.5 px-6 font-mono font-bold text-slate-800">
                      MAD 2,270,000 <span className="text-[10px] text-green-700 font-sans font-semibold">({language === 'fr' ? '-5.8% apparent' : '-5.8% lowest'})</span>
                    </td>
                    <td className="py-3.5 px-6 font-mono font-bold text-slate-800">
                      MAD 2,490,000
                    </td>
                  </tr>

                  {/* Specification Match */}
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#0F172A]">
                      {t.productVis.rowSpec}
                      <span className="block text-[11px] font-normal text-slate-500">{t.productVis.rowSpecSub}</span>
                    </td>
                    <td className="py-3.5 px-6 bg-blue-50/30 border-x border-blue-100">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]"></span>
                        <strong className="text-[#16A34A] font-mono">100%</strong>
                        <span className="text-xs text-slate-600">{language === 'fr' ? 'Conforme CCTP' : 'Exact OEM match'}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-6">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]"></span>
                        <strong className="text-[#D97706] font-mono">92%</strong>
                        <span className="text-xs text-slate-600">{language === 'fr' ? 'Moteur substitué' : 'Substituted EC motor'}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-6">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]"></span>
                        <strong className="text-[#16A34A] font-mono">100%</strong>
                        <span className="text-xs text-slate-600">{language === 'fr' ? 'Certifié Carrier' : 'Carrier certified'}</span>
                      </div>
                    </td>
                  </tr>

                  {/* Logistics & Exclusions */}
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#0F172A]">
                      {t.productVis.rowLogistics}
                      <span className="block text-[11px] font-normal text-slate-500">{t.productVis.rowLogisticsSub}</span>
                    </td>
                    <td className="py-3.5 px-6 bg-blue-50/30 border-x border-blue-100">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#16A34A] font-medium">
                        <Check className="w-3.5 h-3.5" /> {language === 'fr' ? 'Inclus (DAP Chantier)' : 'Included (DAP Site)'}
                      </span>
                    </td>
                    <td className="py-3.5 px-6">
                      <div className="text-xs text-[#DC2626] font-semibold flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" /> {language === 'fr' ? 'Exclu (Départ Usine Tanger)' : 'Excluded (Ex-Works Tangier)'}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                        {language === 'fr' ? 'Ajustement fret & grutage : +185 000 MAD' : 'Normalization delta: +MAD 185,000'}
                      </div>
                    </td>
                    <td className="py-3.5 px-6">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#16A34A] font-medium">
                        <Check className="w-3.5 h-3.5" /> {language === 'fr' ? 'Inclus (DAP Chantier)' : 'Included (DAP Site)'}
                      </span>
                    </td>
                  </tr>

                  {/* Commercial Terms */}
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#0F172A]">
                      {t.productVis.rowPayment}
                      <span className="block text-[11px] font-normal text-slate-500">{t.productVis.rowPaymentSub}</span>
                    </td>
                    <td className="py-3.5 px-6 text-xs text-slate-700 bg-blue-50/30 border-x border-blue-100">
                      {language === 'fr' ? 'Traite 60 jours fin de mois' : '60 days end of month'}
                    </td>
                    <td className="py-3.5 px-6 text-xs text-slate-700">
                      {language === 'fr' ? '30% à la commande, 70% avant départ' : '30% advance, 70% before delivery'}
                    </td>
                    <td className="py-3.5 px-6 text-xs text-slate-700">
                      <strong className="text-[#2563EB]">{language === 'fr' ? 'Traite 90 jours différée' : '90-day extended credit'}</strong>
                      <span className="block text-[11px] text-slate-500">{language === 'fr' ? '-28 000 MAD gain BFR' : 'MAD -28,000 WACC value'}</span>
                    </td>
                  </tr>

                  {/* Lead Time */}
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#0F172A]">
                      {t.productVis.rowLead}
                      <span className="block text-[11px] font-normal text-slate-500">{t.productVis.rowLeadSub}</span>
                    </td>
                    <td className="py-3.5 px-6 font-mono text-xs bg-blue-50/30 border-x border-blue-100">
                      {language === 'fr' ? '14 semaines (Conforme planning)' : '14 weeks (On schedule)'}
                    </td>
                    <td className="py-3.5 px-6 font-mono text-xs text-amber-700">
                      {language === 'fr' ? '18 semaines (Risque retard +3 sem.)' : '18 weeks (3 weeks buffer delay)'}
                    </td>
                    <td className="py-3.5 px-6 font-mono text-xs">
                      {language === 'fr' ? '15 semaines (Conforme planning)' : '15 weeks (On schedule)'}
                    </td>
                  </tr>

                  {/* TRUE LANDED ECONOMICS */}
                  <tr className="bg-slate-100/80 font-bold border-t-2 border-slate-300">
                    <td className="py-4 px-6 text-[#0F172A]">
                      {t.productVis.rowLanded}
                      <span className="block text-[11px] font-normal text-slate-500">
                        {t.productVis.rowLandedSub}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-base text-[#16A34A] bg-blue-100/50 border-x border-blue-200">
                      MAD 2,410,000
                      <div className="text-[10px] font-sans font-normal text-slate-600 mt-0.5">
                        {language === 'fr' ? 'Moindre risque • Décision recommandée' : 'Lowest risk • Optimal decision'}
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono text-base text-[#DC2626]">
                      MAD 2,455,000
                      <div className="text-[10px] font-sans font-normal text-slate-600 mt-0.5">
                        {language === 'fr' ? '+185k MAD de surcoût réel masqué' : '+MAD 185k over headline quote'}
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono text-base text-slate-800">
                      MAD 2,462,000
                      <div className="text-[10px] font-sans font-normal text-slate-600 mt-0.5">
                        {language === 'fr' ? 'Option alternative de trésorerie' : 'Strong credit alternative'}
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'lineitems' && (
            <div className="p-6">
              <div className="text-xs font-mono text-slate-500 mb-3">
                {language === 'fr' 
                  ? 'BORDEREAU DES PRIX UNITAIRES EXTRAITS (ÉCHANTILLON DE 4 ARTICLES SUR 18)'
                  : 'EXTRACTED LINE-ITEM UNIT RATES (4 OF 18 PACKAGE ITEMS SHOWN)'}
              </div>
              <div className="border border-slate-200 rounded-[8px] overflow-hidden">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-100 text-slate-700 border-b border-slate-200">
                    <tr>
                      <th className="p-3">Item #</th>
                      <th className="p-3">{language === 'fr' ? 'Désignation Ouvrage' : 'Description'}</th>
                      <th className="p-3">{language === 'fr' ? 'Qté' : 'Qty'}</th>
                      <th className="p-3">{language === 'fr' ? 'Prix Estimatif' : 'Est. Rate'}</th>
                      <th className="p-3 bg-blue-50 text-blue-900">{language === 'fr' ? 'Prix Fournisseur A' : 'Supplier A Rate'}</th>
                      <th className="p-3">{language === 'fr' ? 'Prix Fournisseur B' : 'Supplier B Rate'}</th>
                      <th className="p-3">{language === 'fr' ? 'Prix Fournisseur C' : 'Supplier C Rate'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-800">
                    <tr>
                      <td className="p-3 font-semibold">04.01.01</td>
                      <td className="p-3 font-sans">Groupe Eau Glacée Centrifuge 450 TR VFD</td>
                      <td className="p-3">2 U</td>
                      <td className="p-3">MAD 850,000</td>
                      <td className="p-3 bg-blue-50/40 font-bold">MAD 820,000</td>
                      <td className="p-3">MAD 790,000</td>
                      <td className="p-3">MAD 840,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">04.01.02</td>
                      <td className="p-3 font-sans">Centrale de Traitement d’Air VAV 12 000 CFM</td>
                      <td className="p-3">4 U</td>
                      <td className="p-3">MAD 145,000</td>
                      <td className="p-3 bg-blue-50/40 font-bold">MAD 135,000</td>
                      <td className="p-3">MAD 125,000</td>
                      <td className="p-3">MAD 140,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">04.02.01</td>
                      <td className="p-3 font-sans">Pompes de Circulation 65 m3/h à Vitesse Variable</td>
                      <td className="p-3">3 U</td>
                      <td className="p-3">MAD 48,000</td>
                      <td className="p-3 bg-blue-50/40 font-bold">MAD 46,000</td>
                      <td className="p-3">MAD 44,000</td>
                      <td className="p-3">MAD 48,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">04.02.04</td>
                      <td className="p-3 font-sans">Tuyauterie Acier Soudé DN150 Pré-isolée M1</td>
                      <td className="p-3">320 ml</td>
                      <td className="p-3">MAD 410</td>
                      <td className="p-3 bg-blue-50/40 font-bold">MAD 287.5</td>
                      <td className="p-3">MAD 290</td>
                      <td className="p-3">MAD 310</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'risk' && (
            <div className="p-6 space-y-4">
              <div className="text-xs font-mono text-slate-500">
                {language === 'fr' 
                  ? 'ANALYSE DES ÉCARTS DE PÉRIMÈTRE ET D’EXCLUSIONS CONTRACTUELLES'
                  : 'AUTOMATED RECONCILIATION OF COMMERCIAL DISCREPANCIES'}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-amber-200 bg-amber-50/60 rounded-[8px] p-4">
                  <div className="flex items-center gap-2 font-bold text-amber-900 text-sm mb-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    {language === 'fr' ? 'Fournisseur B : Exclusions de Fret & Levage' : 'Supplier B: Scope & Logistics Gap'}
                  </div>
                  <ul className="text-xs text-amber-800 space-y-1.5 list-disc list-inside">
                    <li>{language === 'fr' ? 'Livraison départ usine excluant le transport lourd Tanger-Marrakech (+120 000 MAD).' : 'Ex-Works delivery excluded heavy hauling from Tangier (+MAD 120,000).'}</li>
                    <li>{language === 'fr' ? 'Grutage télescopique en terrasse technique non inclus (+65 000 MAD).' : 'Site crane mobile hoisting not included in scope (+MAD 65,000).'}</li>
                    <li>{language === 'fr' ? 'Ventilateur générique non Eurovent générant une surconsommation énergétique de 8%.' : 'Substituted EC motor creates 8% thermodynamic loss over lifecycle.'}</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-amber-200 text-xs font-bold text-amber-900">
                    {language === 'fr' ? 'Impact Réel : +185 000 MAD à la charge de l’entreprise générale.' : 'Net Impact: +MAD 185,000 actual cash outlay required by contractor.'}
                  </div>
                </div>

                <div className="border border-blue-200 bg-blue-50/60 rounded-[8px] p-4">
                  <div className="flex items-center gap-2 font-bold text-blue-900 text-sm mb-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    {language === 'fr' ? 'Fournisseur C : Analyse de Trésorerie Décalée' : 'Supplier C: Financial Term Credit Analysis'}
                  </div>
                  <ul className="text-xs text-blue-800 space-y-1.5 list-disc list-inside">
                    <li>{language === 'fr' ? 'Paiement à 90 jours allégeant la ligne de découvert bancaire.' : '90-day deferred settlement relieves local bank overdraft pressure.'}</li>
                    <li>{language === 'fr' ? 'Valeur du crédit trésorerie estimée à 28 000 MAD (taux 7,5%).' : 'Estimated working capital credit value: MAD 28,000 at 7.5% cost of capital.'}</li>
                    <li>{language === 'fr' ? 'Conformité CCTP totale et garantie constructeur certifiée.' : 'Fully compliant technical specs with Carrier warranty.'}</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-blue-200 text-xs font-bold text-blue-900">
                    {language === 'fr' ? 'Comparatif normalisé : 2 462 000 MAD — Option secondaire robuste.' : 'Normalized comparison: MAD 2,462,000 viable second-source backup.'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Table Footer Status */}
          <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              <span>
                {language === 'fr' 
                  ? 'Moteur d’Intelligence BYLDORA : Arbitrage vérifié selon les contraintes du Chantier de Marrakech'
                  : 'BYLDORA Intelligence Engine: Recommendation verified against Marrakech Site Conditions'}
              </span>
            </div>
            <div className="font-mono text-[11px] text-slate-500">
              Audit Hash: 0x8a92...c41e
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
