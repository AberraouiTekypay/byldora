'use client';

import React from 'react';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/lib/languageContext';

export default function PrivacyPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#111827]">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="CADRE JURIDIQUE"
            headline={language === 'fr'
              ? 'Politique de Confidentialité & Protection des Données de Chantier'
              : 'Privacy Policy & Project Data Protection'}
            subheadline={language === 'fr'
              ? 'Dernière mise à jour : 25 Septembre 2026. BYLDORA Technologies (Groupe EM300.co).'
              : 'Last updated: September 25, 2026. BYLDORA Technologies (EM300.co Group).'}
          />

          <div className="bg-white border border-[#D9DEE7] rounded-[6px] p-8 sm:p-12 shadow-xs space-y-8 text-xs sm:text-sm text-[#243244] leading-relaxed">
            
            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#111827] uppercase font-mono tracking-wide">
                1. Secret des Affaires & Cloisonnement des Offres
              </h3>
              <p>
                Dans le secteur de la construction, la confidentialité des prix unitaires et des remises commerciales est un impératif absolu. BYLDORA garantit un cloisonnement étanche entre les dossiers des différents maîtres d’ouvrage et fournisseurs.
              </p>
              <p>
                Aucune entreprise soumissionnaire ne peut avoir accès, directement ou indirectement, aux propositions déposées par ses concurrents avant la clôture formelle et l’ouverture contradictoire des plis par le maître d’ouvrage.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#111827] uppercase font-mono tracking-wide">
                2. Nature des Données Collectées
              </h3>
              <p>
                Dans le cadre de l’exploitation de la plateforme, BYLDORA traite :
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-700">
                <li>Les pièces techniques de marchés (CCTP, bordereaux de prix, plans d’architecte) ;</li>
                <li>Les devis, mémoires d’équivalence et fiches techniques des sous-traitants ;</li>
                <li>Les identités professionnelles et coordonnées des mandataires des entreprises ;</li>
                <li>Les journaux d’audit horodatés des dépôts d’offres et des décisions d’adjudication.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#111827] uppercase font-mono tracking-wide">
                3. Hébergement & Sécurité des Données
              </h3>
              <p>
                Les données sont hébergées dans des infrastructures certifiées conformes aux normes ISO 27001 et SOC-2. Toutes les transmissions de bordereaux et de correspondances sont chiffrées de bout en bout (TLS 1.3, AES-256).
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#111827] uppercase font-mono tracking-wide">
                4. Utilisation des Données à des Fins d’Analyse
              </h3>
              <p>
                BYLDORA ne commercialise aucune donnée brute à des tiers. Les indices sectoriels (dispersion des prix de l’acier, délais de livraison des groupes froids) sont calculés de manière strictement anonymisée et agrégée, sans qu’aucun chantier ou intervenant ne puisse être identifié.
              </p>
            </section>

            <div className="pt-6 border-t border-[#E5E4DE] text-xs font-mono text-[#506A85]">
              Pour toute question relative à vos données contractuelles : <a href="mailto:privacy@byldora.com" className="text-[#2457D6] underline">privacy@byldora.com</a>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
