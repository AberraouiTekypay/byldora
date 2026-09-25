'use client';

import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowRight, Layers } from 'lucide-react';

export default function EmergingMarketSection() {
  const { t } = useLanguage();

  const CHANNELS = [
    { name: 'PDF', note: 'Devis scannés, fiches techniques et bordereaux imprimés' },
    { name: 'Excel', note: 'Saisie déconnectée sans corruption de formules' },
    { name: 'Email', note: 'Réponse directe par retour d’appel d’offres' },
    { name: 'WhatsApp', note: 'Photos de devis manuscrits et mémos de confirmation' },
    { name: 'Portail Web', note: 'Saisie interactive sécurisée sans création de compte complexe' },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#D9DEE7] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={t.emerging.eyebrow}
          headline={t.emerging.headline}
          subheadline={t.emerging.text}
        />

        {/* Omnichannel Ingestion Architecture */}
        <div className="bg-[#FAF9F6] border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 lg:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left: Input Channels */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="text-[11px] font-mono text-[#506A85] uppercase tracking-wider mb-3">
                Canaux d’Entrée Fournisseurs (Sans Friction)
              </div>
              {CHANNELS.map((ch, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#D9DEE7] rounded-[4px] p-3 flex items-center justify-between hover:border-[#111827] transition-colors text-xs font-mono"
                >
                  <span className="font-bold text-[#111827]">{ch.name}</span>
                  <span className="text-[#506A85] text-[11px] font-sans text-right truncate max-w-[200px]">
                    {ch.note}
                  </span>
                </div>
              ))}
            </div>

            {/* Center Arrow */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0 text-[#2457D6]">
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center font-bold">
                <ArrowRight className="w-5 h-5 hidden lg:block" />
                <span className="lg:hidden font-mono">&darr;</span>
              </div>
              <span className="text-[10px] font-mono text-[#506A85] mt-2 uppercase tracking-wider">
                Normalisation IA
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
                  <span>Périmètre & limites de prestation :</span>
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
