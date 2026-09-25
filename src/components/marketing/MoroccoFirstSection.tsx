'use client';

import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import SectionHeader from '@/components/ui/SectionHeader';

export default function MoroccoFirstSection() {
  const { t } = useLanguage();

  const HUBS = [
    { city: 'Casablanca', focus: 'Grands projets tertiaires, sièges et infrastructures côtières' },
    { city: 'Rabat', focus: 'Complexes ministériels, aménagement urbain et programmes publics' },
    { city: 'Tanger', focus: 'Plateformes logistiques, zones franches et industrie lourde' },
    { city: 'Marrakech', focus: 'Hôtellerie de luxe, resorts touristiques et réhabilitation' },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#D9DEE7] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={t.moroccoFirst.eyebrow}
          headline={t.moroccoFirst.headline}
          subheadline={t.moroccoFirst.text}
        />

        {/* Restrained Architectural Hubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {HUBS.map((hub, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px] p-5 hover:border-[#111827] transition-colors"
            >
              <div className="text-[10px] font-mono text-[#506A85] uppercase mb-1">
                PÔLE OPÉRATIONNEL 0{idx + 1}
              </div>
              <h3 className="font-bold text-base text-[#111827] mb-2">
                {hub.city}
              </h3>
              <p className="text-xs text-[#243244] leading-relaxed">
                {hub.focus}
              </p>
            </div>
          ))}
        </div>

        {/* Strategic Expansion Architecture */}
        <div className="bg-[#FAF9F6] border border-[#D9DEE7] rounded-[4px] p-4 text-xs font-mono text-[#506A85] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#18794E]" />
            <span className="font-semibold text-[#111827]">Marché Déployé : Maroc</span>
          </div>
          <div>
            &bull; {t.moroccoFirst.expansion}
          </div>
        </div>

      </div>
    </section>
  );
}
