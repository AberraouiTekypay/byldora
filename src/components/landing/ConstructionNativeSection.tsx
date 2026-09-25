'use client';

import React from 'react';
import { 
  FileSpreadsheet, 
  Layers, 
  FileCheck, 
  RefreshCw, 
  Ban, 
  CalendarRange, 
  Coins, 
  Clock, 
  Users2 
} from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';

export default function ConstructionNativeSection() {
  const { language, t } = useLanguage();

  const COMPLEXITY_ITEMS = [
    {
      title: language === 'fr' ? 'Structure BPDE & Métrés' : 'BOQ Structure',
      desc: language === 'fr' 
        ? 'Gestion fine des bordereaux multi-niveaux, métrés détaillés et classifications normalisées (CSI, Uniclass, POMI).' 
        : 'Deep multi-tiered schedules of rates, quantities, and division hierarchies (CSI MasterFormat, Uniclass, POMI).',
      icon: FileSpreadsheet,
      code: '01 / HIERARCHY',
    },
    {
      title: language === 'fr' ? 'Lots Techniques' : 'Trade Lots',
      desc: language === 'fr'
        ? 'Allotissement fluide des macro-projets par corps d’état : Gros Œuvre, CVC/Fluides, Façades, Finitions, FF&E.'
        : 'Seamless partitioning of mega-projects into trade-specific execution packages: Civil, MEP, Finishes, FF&E.',
      icon: Layers,
      code: '02 / LOTS',
    },
    {
      title: language === 'fr' ? 'Spécifications Techniques & CCTP' : 'Technical Specifications',
      desc: language === 'fr'
        ? 'Conformité automatisée aux Eurocodes, normes ASTM, avis techniques CSTB et exigences HQE/LEED.'
        : 'Automated verification against regional building codes, Eurocodes, ASTM standards, and LEED certifications.',
      icon: FileCheck,
      code: '03 / SPECS',
    },
    {
      title: language === 'fr' ? 'Variantes & Substitutions de Matériaux' : 'Material Substitutions',
      desc: language === 'fr'
        ? 'Détection rigoureuse des marques d’équivalence proposées et chiffrage des écarts thermiques et de durabilité.'
        : 'Rigorous detection of proposed alternative brands, calculating lifecycle performance and delta tolerances.',
      icon: RefreshCw,
      code: '04 / SUBSTITUTIONS',
    },
    {
      title: language === 'fr' ? 'Exclusions de Périmètre' : 'Commercial Exclusions',
      desc: language === 'fr'
        ? 'Identification automatique des postes non inclus : grutage, droits de douane, essais de mise en service et repli.'
        : 'Automatic detection of excluded scopes: cranage, customs duties, testing, commissioning, and waste removal.',
      icon: Ban,
      code: '05 / EXCLUSIONS',
    },
    {
      title: language === 'fr' ? 'Délais de Livraison & Phasage Chantier' : 'Delivery Dates & Staging',
      desc: language === 'fr'
        ? 'Synchronisation dynamique avec le planning Gantt de l’entreprise générale pour éviter les encombrements d’aires de stockage.'
        : 'Dynamic alignment with primary contractor critical-path Gantt milestones to avoid on-site staging bottlenecks.',
      icon: CalendarRange,
      code: '06 / LOGISTICS',
    },
    {
      title: language === 'fr' ? 'Conditions de Règlement & Retenue' : 'Payment Terms & Retention',
      desc: language === 'fr'
        ? 'Gestion automatisée de la retenue de garantie (5 à 10%), cautions de substitution et échéanciers de traites.'
        : 'Standardized management of retention bonds (5–10%), milestone certifications, and credit settlement cycles.',
      icon: Coins,
      code: '07 / CAPITAL',
    },
    {
      title: language === 'fr' ? 'Approvisionnements à Long Délai' : 'Long-Lead Materials',
      desc: language === 'fr'
        ? 'Suivi précoce des équipements critiques aux délais de fabrication de 14 à 26 semaines (groupes froid, transformateurs, ascenseurs).'
        : 'Early warning tracking for equipment with 14–26 week fabrication horizons (chillers, transformers, elevators).',
      icon: Clock,
      code: '08 / LONG-LEAD',
    },
    {
      title: language === 'fr' ? 'Sous-traitants & Qualification' : 'Subcontractors & Labor',
      desc: language === 'fr'
        ? 'Suivi des attestations d’assurances décennales, qualifications professionnelles et solvabilité des entreprises partenaires.'
        : 'Pre-qualification tracking of Tier-1 trade partners, safety compliance certificates, and worker insurances.',
      icon: Users2,
      code: '09 / TRADES',
    },
  ];

  return (
    <section id="construction-native" className="bg-[#0B1220] py-20 lg:py-28 border-b border-[#1C2636] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#1C2636] border border-[#2A384C] text-xs font-mono text-[#0EA5E9] tracking-wide mb-3">
            <span>{t.construction.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {t.construction.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.construction.subheadline}
          </p>
        </div>

        {/* Featured Technical BIM Architectural Specification Visual */}
        <div className="mb-14 bg-[#131D2E] border border-[#2A384C] rounded-[16px] overflow-hidden p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0B1220] border border-blue-900/60 font-mono text-[11px] text-[#0EA5E9]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-pulse" />
                <span>{t.construction.bimTag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {t.construction.bimHeadline}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {t.construction.bimDesc}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 bg-[#1C2636] rounded-[8px] border border-slate-700">
                  <div className="text-slate-400 text-[10px] uppercase">
                    {language === 'fr' ? 'Contrôles Conformité' : 'Compliance Checks'}
                  </div>
                  <div className="text-white font-bold text-sm mt-0.5">{t.construction.bimCheck1Title}</div>
                  <div className="text-[11px] text-emerald-400 mt-1">{t.construction.bimCheck1Sub}</div>
                </div>
                <div className="p-3 bg-[#1C2636] rounded-[8px] border border-slate-700">
                  <div className="text-slate-400 text-[10px] uppercase">
                    {language === 'fr' ? 'Prix Unitaires Paramétriques' : 'Parametric Unit Rates'}
                  </div>
                  <div className="text-white font-bold text-sm mt-0.5">{t.construction.bimCheck2Title}</div>
                  <div className="text-[11px] text-[#0EA5E9] mt-1">{t.construction.bimCheck2Sub}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative rounded-[12px] overflow-hidden border border-[#2A384C] bg-[#0B1220] shadow-xl group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bim-matrix.jpg"
                alt="BIM Wireframe Skyscraper Facade and Technical Annotations"
                className="w-full h-auto object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 bg-[#0B1220]/90 backdrop-blur-md px-3 py-1.5 rounded-[6px] border border-cyan-500/40 text-[11px] font-mono text-cyan-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{t.construction.bimBadge}</span>
              </div>
            </div>

          </div>
        </div>

        {/* 9 Complexity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPLEXITY_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#1C2636] border border-[#2A384C] rounded-[12px] p-6 hover:border-slate-500 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                      {item.code}
                    </span>
                    <div className="w-8 h-8 rounded-[6px] bg-[#0F1A2E] flex items-center justify-center text-[#0EA5E9]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
