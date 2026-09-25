'use client';

import React from 'react';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import FinalCtaSection from '@/components/marketing/FinalCtaSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/lib/languageContext';
import { HardHat, Building, Scale } from 'lucide-react';

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#111827]">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="ORIGINES & ENGAGEMENT"
            headline={language === 'fr'
              ? 'L’Expertise du Chantier Rencontre l’Infrastructure Logicielle'
              : 'Construction Expertise Meets Technology & Market Infrastructure'}
            subheadline={language === 'fr'
              ? 'Une équipe forgée par trente années de pratique de la maîtrise d’ouvrage, alliée aux standards les plus exigeants du génie logiciel européen.'
              : 'A founding team grounded in 30 years of construction and project management experience, paired with institutional software engineering.'}
          />

          {/* Central Editorial Narrative Card */}
          <div className="bg-white border border-[#D9DEE7] rounded-[6px] p-8 sm:p-12 mb-16 shadow-xs max-w-4xl">
            <div className="text-[11px] font-mono text-[#506A85] uppercase tracking-wider mb-4 pb-2 border-b border-[#E5E4DE]">
              Constat Fondateur
            </div>

            <blockquote className="text-xl sm:text-2xl font-bold text-[#111827] leading-snug tracking-tight mb-6">
              « Les achats de construction recèlent une valeur stratégique considérable, mais cette information reste prisonnière de classeurs non synchronisés, de courriels isolés et d’accords informels. »
            </blockquote>

            <div className="space-y-4 text-sm sm:text-base text-[#243244] leading-relaxed">
              <p>
                Sur un chantier de plusieurs dizaines de millions de dirhams, chaque lot technique représente un équilibre délicat entre conformité aux normes (Eurocodes, CCTP), faisabilité logistique, respect des délais d’usine et conditions de trésorerie.
              </p>
              <p>
                Pourtant, dans la majorité des entreprises, les décisions d’adjudication continuent d’être prises sous la pression du calendrier, en retenant le montant le plus bas affiché au bas d’un devis sans mesurer les exclusions de périmètre, les sujétions de grutage omises ou l’impact d’un acompte défavorable.
              </p>
              <p>
                <strong>BYLDORA a été fondée pour combler cette rupture :</strong> apporter aux directeurs de projet, maîtres d’ouvrage et responsables des achats un outil impartial, rigoureux et souverain pour arbitrer chaque marché avec une clarté indiscutable.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E4DE] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#506A85]">
              <div>Une société du groupe <strong>EM300.co</strong></div>
              <div>Casablanca • Anfa Finance City &bull; Paris</div>
            </div>
          </div>

          {/* 3 Core Competencies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8">
              <div className="w-9 h-9 rounded-[4px] bg-[#FAF9F6] border border-[#D9DEE7] flex items-center justify-center text-[#2457D6] mb-4">
                <HardHat className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#111827] mb-2">
                Pratique du Terrain & CCTP
              </h3>
              <p className="text-xs text-[#243244] leading-relaxed">
                Notre équipe est issue de la direction de travaux et de l’assistance à maîtrise d’ouvrage. Nous connaissons intimement les litiges d’avenants et les dérives de bordereaux.
              </p>
            </div>

            <div className="bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8">
              <div className="w-9 h-9 rounded-[4px] bg-[#FAF9F6] border border-[#D9DEE7] flex items-center justify-center text-[#2457D6] mb-4">
                <Building className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#111827] mb-2">
                Ingénierie Logicielle Européenne
              </h3>
              <p className="text-xs text-[#243244] leading-relaxed">
                Notre architecture privilégie la sobriété, la sécurité de type bancaire et la haute disponibilité, sans dépendances superflues ni gadgets artificiels.
              </p>
            </div>

            <div className="bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8">
              <div className="w-9 h-9 rounded-[4px] bg-[#FAF9F6] border border-[#D9DEE7] flex items-center justify-center text-[#2457D6] mb-4">
                <Scale className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#111827] mb-2">
                Éthique & Neutralité Commerciale
              </h3>
              <p className="text-xs text-[#243244] leading-relaxed">
                BYLDORA n’est ni courtier, ni intermédiaire rémunéré à la commission. Notre mission est d’apporter une vérité économique objective au service du maître d’ouvrage.
              </p>
            </div>
          </div>

        </div>
      </main>

      <FinalCtaSection />
      <Footer />
    </div>
  );
}
