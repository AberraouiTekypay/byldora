'use client';

import React from 'react';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/lib/languageContext';

export default function TermsPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#111827]">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="CONDITIONS COMMERCIALES"
            headline={language === 'fr'
              ? 'Conditions Générales d’Utilisation de l’Infrastructure BYLDORA'
              : 'Enterprise Terms of Service — BYLDORA Infrastructure'}
            subheadline={language === 'fr'
              ? 'Règles régissant l’accès aux services d’adjudication et de passation de marchés de construction.'
              : 'Terms governing access to BYLDORA tender adjudication and procurement infrastructure.'}
          />

          <div className="bg-white border border-[#D9DEE7] rounded-[6px] p-8 sm:p-12 shadow-xs space-y-8 text-xs sm:text-sm text-[#243244] leading-relaxed">
            
            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#111827] uppercase font-mono tracking-wide">
                1. Objet & Statut de BYLDORA
              </h3>
              <p>
                BYLDORA Technologies, une société du groupe <strong>EM300.co</strong>, fournit une infrastructure logicielle d’intelligence et de gestion des achats pour le secteur de la construction.
              </p>
              <p>
                <strong>BYLDORA n’agit ni en tant que courtier, ni en tant que maître d’œuvre délégué, ni en tant qu’entreprise générale de travaux.</strong> Les contrats d’achat, marchés de sous-traitance et bons de commande conclus à l’issue des consultations lient exclusivement le maître d’ouvrage (ou l’entreprise générale) et le fournisseur adjudicataire.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#111827] uppercase font-mono tracking-wide">
                2. Responsabilité des Chiffrages & Engagements des Devis
              </h3>
              <p>
                Les entreprises soumissionnaires sont seules responsables de l’exactitude de leurs prix unitaires, des quantitatifs chiffrés et des délais d’approvisionnement annoncés.
              </p>
              <p>
                Le moteur de normalisation BYLDORA applique des règles de calcul paramétriques basées sur les pièces communiquées. Il appartient à la commission d’adjudication du maître d’ouvrage de valider formellement les choix techniques avant la signature finale du marché.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#111827] uppercase font-mono tracking-wide">
                3. Services Financiers & Partenaires Agréés
              </h3>
              <p>
                Toute référence à de futurs flux de trésorerie, d’affacturage ou de crédit fournisseur ne constitue en aucun cas une offre directe de crédit par BYLDORA. De tels services seront exclusivement opérés en partenariat avec des institutions bancaires ou de crédit dûment agréées selon les juridictions compétentes.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#111827] uppercase font-mono tracking-wide">
                4. Droit Applicable & Règlement des Différends
              </h3>
              <p>
                Les présentes conditions sont régies par le droit des affaires applicable au siège de l’entité contractante. Tout litige relatif à l’utilisation de la plateforme logicielle sera soumis aux juridictions commerciales compétentes de Casablanca ou Paris selon le contrat de souscription.
              </p>
            </section>

            <div className="pt-6 border-t border-[#E5E4DE] text-xs font-mono text-[#506A85]">
              BYLDORA Technologies • Groupe EM300.co &bull; Contact juridique : <a href="mailto:legal@byldora.com" className="text-[#2457D6] underline">legal@byldora.com</a>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
