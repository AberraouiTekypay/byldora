'use client';

import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowRight, Layers, MessageSquare, FileSpreadsheet, FileText, Mail, Globe } from 'lucide-react';

export default function EmergingMarketSection() {
  const { t } = useLanguage();

  const CHANNELS = [
    { 
      name: 'WhatsApp', 
      note: 'Devis signés en photo & mémos vocaux transcrits en 4 secondes', 
      icon: MessageSquare,
      color: 'text-[#18794E] bg-[#F0FDF4] border-[#BBF7D0]',
    },
    { 
      name: 'Excel', 
      note: 'Trame BPDE complétée hors-ligne sans risque de formule brisée', 
      icon: FileSpreadsheet,
      color: 'text-[#15803D] bg-[#F0FDF4] border-[#BBF7D0]',
    },
    { 
      name: 'PDF', 
      note: 'Devis scannés, bordereaux imprimés et fiches techniques OCR', 
      icon: FileText,
      color: 'text-[#B42318] bg-[#FEF2F2] border-[#FECACA]',
    },
    { 
      name: 'Email', 
      note: 'Réponse directe par courriel consignée en salle d’adjudication', 
      icon: Mail,
      color: 'text-[#2457D6] bg-[#EFF6FF] border-[#BFDBFE]',
    },
    { 
      name: 'Portail Web', 
      note: 'Saisie interactive sécurisée sans création de mot de passe lourd', 
      icon: Globe,
      color: 'text-[#111827] bg-[#FAF9F6] border-[#D9DEE7]',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#D9DEE7] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={t.emerging.eyebrow}
          headline={t.emerging.headline}
          subheadline={t.emerging.text}
        />

        {/* Featured Real Site Documentary Photography Card */}
        <div className="mb-12 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[6px] overflow-hidden p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 relative rounded-[4px] overflow-hidden border border-[#D9DEE7] group shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/market-trades.jpg"
                alt="Executive Procurement Team and Quantity Surveyors at Casablanca Commercial Construction Site"
                className="w-full h-auto object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/75 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-[#D9DEE7] rounded-[3px] px-2.5 py-1 text-[11px] font-mono text-[#111827] flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#18794E]" />
                <span className="font-bold">CHANTIERS CASABLANCA &amp; AXE MÉDITERRANÉE</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs border border-[#D9DEE7] rounded-[3px] p-2.5 text-[11px] font-mono text-[#111827] flex items-center justify-between">
                <span>Adoption Locale Forte :</span>
                <span className="font-bold text-[#18794E]">99,4% de Taux de Réponse Fournisseurs</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[3px] bg-white border border-[#D9DEE7] text-[11px] font-mono text-[#2457D6] font-semibold">
                <span>INGESTION MULTICANALE SANS CONTRAINTE LOGICIELLE</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight leading-snug">
                Bâti pour les pratiques réelles du terrain.
              </h3>

              <p className="text-xs sm:text-sm text-[#243244] leading-relaxed">
                Sur les marchés en pleine expansion (Maroc, Afrique du Nord, Moyen-Orient), exiger des artisans et sous-traitants qu’ils s’inscrivent sur un portail complexe conduit au désert d’offres. BYLDORA s’adapte à leur quotidien.
              </p>

              <div className="p-3 bg-white border border-[#D9DEE7] rounded-[4px] text-xs font-mono text-[#243244] space-y-1">
                <div className="font-bold text-[#111827] uppercase text-[10px]">Résultat Opérationnel :</div>
                <div className="text-[#18794E]">✓ Les entreprises locales répondent sans formation logicielle.</div>
                <div className="text-[#2457D6]">✓ Le maître d’ouvrage obtient 100% de données d’achats normalisées et comparables.</div>
              </div>
            </div>

          </div>
        </div>

        {/* Omnichannel Ingestion Architecture */}
        <div className="bg-[#FAF9F6] border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left: Input Channels with Colors */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="text-[11px] font-mono text-[#506A85] uppercase tracking-wider mb-3">
                Canaux d’Entrée Fournisseurs (Sans Barrière)
              </div>
              {CHANNELS.map((ch, idx) => {
                const Icon = ch.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-[#D9DEE7] rounded-[4px] p-3 flex items-center justify-between hover:border-[#111827] transition-colors text-xs font-mono"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-6 h-6 rounded-[2px] flex items-center justify-center border ${ch.color}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-[#111827]">{ch.name}</span>
                    </div>
                    <span className="text-[#506A85] text-[11px] font-sans text-right truncate max-w-[200px]">
                      {ch.note}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Center Arrow */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0 text-[#2457D6]">
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center font-bold">
                <ArrowRight className="w-5 h-5 hidden lg:block" />
                <span className="lg:hidden font-mono">&darr;</span>
              </div>
              <span className="text-[10px] font-mono text-[#2457D6] font-semibold mt-2 uppercase tracking-wider text-center">
                Moteur de Normalisation
              </span>
            </div>

            {/* Right: Structured Output */}
            <div className="lg:col-span-5 bg-white border-2 border-[#111827] rounded-[4px] p-6 shadow-xs">
              <div className="flex items-center justify-between font-mono text-[11px] text-[#506A85] mb-3">
                <span className="font-bold text-[#111827]">{t.emerging.outputTitle}</span>
                <Layers className="w-4 h-4 text-[#2457D6]" />
              </div>
              
              <div className="text-sm font-semibold text-[#111827] mb-2">
                {t.emerging.outputSubtitle}
              </div>

              <div className="space-y-2 text-xs font-mono text-[#243244] border-t border-[#E5E4DE] pt-3">
                <div className="flex items-center justify-between">
                  <span>Extraction unitaire DQE :</span>
                  <span className="font-bold text-[#18794E]">100% structurée</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Équivalence des prix unitaires :</span>
                  <span className="font-bold text-[#111827]">Harmonisée HT / TTC</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Périmètre &amp; limites de prestation :</span>
                  <span className="font-bold text-[#2457D6]">Réconcilié</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Piste d’audit opposable :</span>
                  <span className="font-bold text-[#18794E]">Archivée</span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-4 border-t border-[#E5E4DE] text-xs text-[#243244] font-medium leading-relaxed">
            &bull; <strong className="text-[#111827] font-semibold">{t.emerging.philosophy}</strong>
          </div>

        </div>

      </div>
    </section>
  );
}
