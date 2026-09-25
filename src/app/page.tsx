import React from 'react';
import Navbar from '@/components/marketing/Navbar';
import HeroSection from '@/components/marketing/HeroSection';
import ProblemSection from '@/components/marketing/ProblemSection';
import WorkflowSection from '@/components/marketing/WorkflowSection';
import ConstructionNativeSection from '@/components/marketing/ConstructionNativeSection';
import BidIntelligenceSection from '@/components/marketing/BidIntelligenceSection';
import EmergingMarketSection from '@/components/marketing/EmergingMarketSection';
import AudiencesSection from '@/components/marketing/AudiencesSection';
import DataMoatSection from '@/components/marketing/DataMoatSection';
import FinanceInfrastructureSection from '@/components/marketing/FinanceInfrastructureSection';
import MoroccoFirstSection from '@/components/marketing/MoroccoFirstSection';
import ProductShowcaseSection from '@/components/marketing/ProductShowcaseSection';
import FinalCtaSection from '@/components/marketing/FinalCtaSection';
import Footer from '@/components/marketing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#111827]">
      {/* Institutional Top Navigation */}
      <Navbar />

      {/* 1. HERO — Construction Procurement, Built Around the Project */}
      <HeroSection />

      {/* 2. THE PROBLEM — Construction Procurement is Still Fragmented */}
      <ProblemSection />

      {/* 3. THE BYLDORA MODEL — One Procurement Workflow. One Source of Truth */}
      <WorkflowSection />

      {/* 4. CONSTRUCTION-NATIVE — Built for the Way Construction is Actually Procured */}
      <ConstructionNativeSection />

      {/* 5. THE CORE DIFFERENTIATOR — The Lowest Quote is Not Always the Lowest Cost */}
      <BidIntelligenceSection />

      {/* 6. THE EMERGING-MARKET ADVANTAGE — Built for Fragmented Construction Markets */}
      <EmergingMarketSection />

      {/* 7. FOR DEVELOPERS & FOR SUPPLIERS */}
      <AudiencesSection />

      {/* 8. DATA MOAT — Every Procurement Decision Creates Intelligence */}
      <DataMoatSection />

      {/* 9. FINANCIAL INFRASTRUCTURE — Procurement Creates the Foundation for Finance */}
      <FinanceInfrastructureSection />

      {/* 10. MOROCCO FIRST — Starting in Morocco. Built for Fragmented Markets */}
      <MoroccoFirstSection />

      {/* 11. PRODUCT INTERFACES — Institutional Enterprise Workspace */}
      <ProductShowcaseSection />

      {/* 12. FINAL EDITORIAL CTA — Bring Intelligence to Your Next Procurement Cycle */}
      <FinalCtaSection />

      {/* 13. FOOTER — An EM300.co Company */}
      <Footer />
    </div>
  );
}
