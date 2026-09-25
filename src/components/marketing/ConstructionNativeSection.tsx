'use client';

import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
type PillarBadge = 'default' | 'success' | 'warning' | 'critical' | 'oxide' | 'blue' | 'mono';

interface Pillar {
  num: string;
  title: string;
  desc: string;
  tag: string;
  tagColor: PillarBadge;
}

export default function ConstructionNativeSection() {
  const { language, t } = useLanguage();

  const PILLARS: Pillar[] = [
    {
      num: '01',
      title: t.construction.a1Title,
      desc: t.construction.a1Desc,
      tag: 'Bordereaux multi-niveaux',
      tagColor: 'blue',
    },
    {
      num: '02',
      title: t.construction.a2Title,
      desc: t.construction.a2Desc,
      tag: 'Eurocodes 1, 3 & 9',
      tagColor: 'oxide',
    },
    {
      num: '03',
      title: t.construction.a3Title,
      desc: t.construction.a3Desc,
      tag: 'Retenue de garantie 5–10%',
      tagColor: 'default',
    },
    {
      num: '04',
      title: t.construction.a4Title,
      desc: t.construction.a4Desc,
      tag: '14–26 sem. approvisionnements',
      tagColor: 'warning',
    },
    {
      num: '05',
      title: t.construction.a5Title,
      desc: t.construction.a5Desc,
      tag: 'Attestations & assurances',
      tagColor: 'success',
    },
    {
      num: '06',
      title: t.construction.a6Title,
      desc: t.construction.a6Desc,
      tag: 'Lots fourniture & pose',
      tagColor: 'default',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#D9DEE7] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={t.construction.eyebrow}
          headline={t.construction.headline}
          subheadline={t.construction.subheadline}
        />

        {/* Featured Architectural Material Photography & BIM Specification Showcase */}
        <div className="mb-12 bg-[#FAF9F6] border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 lg:p-10 shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative & Engineering Specs */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[3px] bg-white border border-[#D9DEE7] text-[11px] font-mono text-[#B66A3C] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B66A3C]" />
                <span>SPÉCIFICATIONS MATÉRIAUX &amp; CCTP ARCHITECTURAL</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight leading-snug">
                {language === 'fr'
                  ? 'Des modèles architecturaux directement connectés aux lignes de métrés et prix.'
                  : 'Architectural specifications mapped directly to bill-of-quantities line items.'}
              </h3>

              <p className="text-xs sm:text-sm text-[#243244] leading-relaxed">
                {language === 'fr'
                  ? 'Les outils d’achats génériques échouent car les marchés BTP sont régis par les Eurocodes, les descentes de charges, les bilans thermiques et des plannings stricts. BYLDORA évalue chaque offre à travers ce prisme d’ingénierie.'
                  : 'Generic procurement software fails because construction tenders are governed by statutory Eurocodes, wind-load ratings, thermal coefficients, and strict milestone logistics.'}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 bg-white rounded-[4px] border border-[#D9DEE7]">
                  <div className="text-[#506A85] text-[10px] uppercase">Contrôle Eurocodes</div>
                  <div className="text-[#111827] font-bold mt-0.5">Eurocodes 1, 3 &amp; 9</div>
                  <div className="text-[11px] text-[#18794E] mt-1 font-semibold">Vent &amp; structure acier</div>
                </div>
                <div className="p-3 bg-white rounded-[4px] border border-[#D9DEE7]">
                  <div className="text-[#506A85] text-[10px] uppercase">Prix Paramétrique Façade</div>
                  <div className="text-[#2457D6] font-bold mt-0.5">385 € / m² Façade</div>
                  <div className="text-[11px] text-[#506A85] mt-1">Profilés aluminium &amp; vitrage</div>
                </div>
              </div>
            </div>

            {/* Right Editorial Photography Visual (Extruded Aluminium & Oxide Steel Cladding) */}
            <div className="lg:col-span-6 relative rounded-[4px] overflow-hidden border border-[#D9DEE7] bg-slate-900 shadow-sm group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/facade-oxide.jpg"
                alt="Architectural Material Detail: Extruded Aluminium Mullions and Oxide Corten Cladding"
                className="w-full h-auto object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/75 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-2 rounded-[3px] border border-[#D9DEE7] text-[11px] font-mono text-[#111827] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B66A3C]" />
                  <span className="font-semibold">Mullions Aluminium Extrudé &amp; Acier Corten</span>
                </div>
                <span className="text-[#2457D6] font-bold">CCTP Lot 04</span>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Technical Construction Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="border border-[#D9DEE7] bg-[#FAF9F6] rounded-[4px] p-6 hover:border-[#111827] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#506A85] mb-3 pb-2 border-b border-[#E5E4DE]">
                  <span className="font-bold text-[#111827]">{pillar.num} / SPÉCIFICATION</span>
                  <Badge variant={pillar.tagColor}>{pillar.tag}</Badge>
                </div>

                <h3 className="font-bold text-base text-[#111827] tracking-tight mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#243244] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E5E4DE] text-[11px] font-mono text-[#506A85] flex items-center justify-between">
                <span>Conformité contractuelle</span>
                <span className="text-[#18794E] font-semibold">✓ Vérifiée</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
