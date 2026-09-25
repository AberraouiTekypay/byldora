'use client';

import React, { useState } from 'react';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/lib/languageContext';
import { Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    projectScope: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#111827]">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="RELATIONS INSTITUTIONNELLES"
            headline={language === 'fr'
              ? 'Échanger Avec l’Équipe BYLDORA'
              : 'Contact BYLDORA Institutional Relations'}
            subheadline={language === 'fr'
              ? 'Pour les maîtres d’ouvrage, directeurs d’achats et promoteurs souhaitant déployer la plateforme sur leurs chantiers.'
              : 'Direct communication for developers, project directors, and procurement executives planning upcoming tenders.'}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-white border border-[#D9DEE7] rounded-[6px] p-6 sm:p-10 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#18794E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827]">
                    {language === 'fr' ? 'Message Enregistré' : 'Inquiry Received'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#506A85] max-w-md mx-auto">
                    {language === 'fr'
                      ? 'Un directeur de projet BYLDORA prendra contact avec vous sous 24 heures pour convenir d’une session d’évaluation technique.'
                      : 'A BYLDORA representative will contact your office within 24 hours to schedule a confidential technical review.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#111827] mb-1.5 uppercase text-[11px] font-mono">
                        {language === 'fr' ? 'Nom & Prénom' : 'Full Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 border border-[#D9DEE7] rounded-[4px] bg-[#FAF9F6] text-[#111827] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2457D6]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-[#111827] mb-1.5 uppercase text-[11px] font-mono">
                        {language === 'fr' ? 'Entreprise / Maîtrise d’Ouvrage' : 'Organization / Company'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 border border-[#D9DEE7] rounded-[4px] bg-[#FAF9F6] text-[#111827] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2457D6]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#111827] mb-1.5 uppercase text-[11px] font-mono">
                        {language === 'fr' ? 'Fonction' : 'Job Title / Role'}
                      </label>
                      <input
                        type="text"
                        placeholder="ex. Directeur Technique / Métreur"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3 py-2 border border-[#D9DEE7] rounded-[4px] bg-[#FAF9F6] text-[#111827] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2457D6]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-[#111827] mb-1.5 uppercase text-[11px] font-mono">
                        {language === 'fr' ? 'Courriel Professionnel' : 'Corporate Email'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 border border-[#D9DEE7] rounded-[4px] bg-[#FAF9F6] text-[#111827] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2457D6]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#111827] mb-1.5 uppercase text-[11px] font-mono">
                      {language === 'fr' ? 'Enveloppe Estimative des Achats' : 'Estimated Procurement Volume'}
                    </label>
                    <select
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      className="w-full px-3 py-2 border border-[#D9DEE7] rounded-[4px] bg-[#FAF9F6] text-[#111827] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2457D6]"
                    >
                      <option value="">Sélectionner une fourchette</option>
                      <option value="5-20M">5M à 20M MAD</option>
                      <option value="20-50M">20M à 50M MAD</option>
                      <option value="50M+">Plus de 50M MAD</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#111827] mb-1.5 uppercase text-[11px] font-mono">
                      {language === 'fr' ? 'Détails du Projet ou Calendrier' : 'Project Details & Tender Horizon'}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 border border-[#D9DEE7] rounded-[4px] bg-[#FAF9F6] text-[#111827] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2457D6]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 bg-[#111827] hover:bg-[#243244] text-white text-xs font-semibold rounded-[4px] transition-colors"
                    >
                      {language === 'fr' ? 'Transmettre la demande' : 'Submit Inquiry'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Offices & Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-[#D9DEE7] rounded-[6px] p-6 shadow-xs">
                <div className="text-[11px] font-mono text-[#506A85] uppercase tracking-wider mb-4 pb-2 border-b border-[#E5E4DE]">
                  Bureaux Opérationnels
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#2457D6] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#111827]">Casablanca, Maroc</div>
                      <div className="text-[#506A85] mt-0.5">Tour CFC, Anfa Finance City</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#2457D6] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#111827]">Paris, France</div>
                      <div className="text-[#506A85] mt-0.5">Rue de la Paix, 75002 Paris</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-[#E5E4DE]">
                    <Mail className="w-4 h-4 text-[#2457D6] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#111827]">Courriel Institutionnel</div>
                      <div className="text-[#506A85] mt-0.5">
                        <a href="mailto:contact@byldora.com" className="hover:text-[#111827] underline">
                          contact@byldora.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DEE7] rounded-[6px] p-6 text-xs text-[#506A85] space-y-2">
                <div className="font-bold font-mono text-[#111827] uppercase">Société Mère</div>
                <p>
                  BYLDORA est une société du groupe <strong>EM300.co</strong>. Les réunions techniques et comités d’adjudication peuvent se tenir sur site client ou en visioconférence sécurisée.
                </p>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
