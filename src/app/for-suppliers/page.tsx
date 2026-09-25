'use client';

import React from 'react';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import FinalCtaSection from '@/components/marketing/FinalCtaSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/lib/languageContext';
import { Send, FileSpreadsheet, ShieldCheck, ArrowRight, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function ForSuppliersPage() {
  const { language } = useLanguage();

  const BENEFITS = [
    {
      title: language === 'fr' ? 'Accès Direct aux Appels d’Offres Qualifiés' : 'Direct Access to Qualified RFQs',
      desc: language === 'fr'
        ? 'Recevez des dossiers de consultation clairs, documentés par des bordereaux estimatifs précis et des spécifications CCTP conformes à votre cœur de métier.'
        : 'Receive structured procurement packages matched to your trade specialization with clear scopes, quantities, and milestone requirements.',
      icon: Send,
    },
    {
      title: language === 'fr' ? 'Répondez Selon Vos Habitudes' : 'Zero Friction Quotation Formats',
      desc: language === 'fr'
        ? 'Aucune obligation d’apprentissage d’un logiciel lourd. Remplissez notre portail sécurisé, complétez le fichier Excel du lot ou déposez votre devis PDF habituel.'
        : 'No cumbersome software onboarding. Quote directly through our fast web portal, populate offline Excel schedules, or upload your signed commercial PDF sheets.',
      icon: FileSpreadsheet,
    },
    {
      title: language === 'fr' ? 'Gestion Fluide des Additifs & Variantes' : 'Effortless Addenda & Scope Revisions',
      desc: language === 'fr'
        ? 'Transmettez vos variantes de marques et mémoires techniques. BYLDORA valorise la pertinence de vos propositions d’équivalence auprès du maître d’ouvrage.'
        : 'Submit proposed alternative brands and technical schedules with full visibility. BYLDORA presents your value engineering directly to the decision committee.',
      icon: RefreshCw,
    },
    {
      title: language === 'fr' ? 'Constitution d’un Historique Vérifié' : 'Verified Execution Track Record',
      desc: language === 'fr'
        ? 'Chaque livraison réussie et jalon approuvé renforce votre réputation sur la plateforme, vous positionnant comme partenaire de référence sur les futurs chantiers majeurs.'
        : 'Every fulfilled contract and verified milestone strengthens your standing in the directory, pre-qualifying your company for premier upcoming developments.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#111827]">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="POUR ENTREPRISES & FOURNISSEURS"
            headline={language === 'fr'
              ? 'Soyez Consulté Dès Qu’un Chantier Majeur Correspond à Vos Spécialités'
              : 'Get Discovered When the Right Project Needs What You Supply'}
            subheadline={language === 'fr'
              ? 'Une relation commerciale simplifiée pour les fabricants, distributeurs de matériaux et sous-traitants du BTP.'
              : 'Frictionless tender participation for manufacturers, equipment distributors, and trade subcontractors across growth markets.'}
          />

          {/* 4 Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {BENEFITS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 shadow-xs hover:border-[#111827] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-[4px] bg-[#FAF9F6] border border-[#D9DEE7] flex items-center justify-center text-[#2457D6] mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold text-[#111827] tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#243244] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#E5E4DE] text-[11px] font-mono text-[#506A85]">
                    Participation Sans Frais d’Adhésion
                  </div>
                </div>
              );
            })}
          </div>

          {/* Practical How to Respond Card */}
          <div className="bg-[#FAF9F6] border border-[#D9DEE7] rounded-[6px] p-6 sm:p-8 mb-16">
            <h3 className="font-bold text-base text-[#111827] mb-3">
              {language === 'fr' ? 'Comment répondre à une consultation BYLDORA :' : 'How to respond to a BYLDORA invitation to tender:'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-white p-4 rounded-[4px] border border-[#D9DEE7]">
                <div className="font-bold font-mono text-[#2457D6] mb-1">01 / LIEN SÉCURISÉ</div>
                <div className="font-semibold text-[#111827] mb-1">Invitation Directe</div>
                <p className="text-[#506A85]">
                  Vous recevez un lien direct vers le dossier de consultation sans obligation de créer un mot de passe complexe.
                </p>
              </div>
              <div className="bg-white p-4 rounded-[4px] border border-[#D9DEE7]">
                <div className="font-bold font-mono text-[#2457D6] mb-1">02 / FORMAT LIBRE</div>
                <div className="font-semibold text-[#111827] mb-1">Dépôt du Devis</div>
                <p className="text-[#506A85]">
                  Téléchargez la trame Excel des prix unitaires ou transmettez votre devis PDF officiel avec fiches techniques.
                </p>
              </div>
              <div className="bg-white p-4 rounded-[4px] border border-[#D9DEE7]">
                <div className="font-bold font-mono text-[#2457D6] mb-1">03 / CONFIRMATION</div>
                <div className="font-semibold text-[#111827] mb-1">Accusé d’Enregistrement</div>
                <p className="text-[#506A85]">
                  Votre offre est scellée, horodatée et transmise directement à la commission d’adjudication du projet.
                </p>
              </div>
            </div>
          </div>

          {/* Supplier Registration CTA */}
          <div className="bg-[#111827] text-white rounded-[6px] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight">
                {language === 'fr' ? 'Rejoignez le répertoire des fournisseurs qualifiés.' : 'Register in the verified vendor directory.'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {language === 'fr'
                  ? 'Faites référencer vos spécialités et certifications pour être sollicité sur les prochaines consultations.'
                  : 'Submit your trade specialties and certifications to be included in upcoming tender packages.'}
              </p>
            </div>
            <Link
              href="/dashboard/supplier-portal"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#2457D6] hover:bg-[#1D47B8] text-white text-xs font-semibold rounded-[4px] transition-colors"
            >
              <span>{language === 'fr' ? 'Accéder à l’espace fournisseur' : 'Open Supplier Portal'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      <FinalCtaSection />
      <Footer />
    </div>
  );
}
