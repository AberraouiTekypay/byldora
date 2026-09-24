import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import TrustStrip from '@/components/landing/TrustStrip';
import ProblemSection from '@/components/landing/ProblemSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import ProductVisualization from '@/components/landing/ProductVisualization';
import BidIntelligenceSection from '@/components/landing/BidIntelligenceSection';
import ConstructionNativeSection from '@/components/landing/ConstructionNativeSection';
import EmergingMarketSection from '@/components/landing/EmergingMarketSection';
import FutureSection from '@/components/landing/FutureSection';
import CtaSection from '@/components/landing/CtaSection';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Primary Navigation */}
      <Navbar />

      {/* 1. HERO */}
      <HeroSection />

      {/* 2. TRUST / VALUE STRIP */}
      <TrustStrip />

      {/* 3. PROBLEM */}
      <ProblemSection />

      {/* 4. HOW IT WORKS */}
      <HowItWorksSection />

      {/* 5. PRODUCT VISUALIZATION */}
      <ProductVisualization />

      {/* 6. BID INTELLIGENCE */}
      <BidIntelligenceSection />

      {/* 7. CONSTRUCTION-NATIVE */}
      <ConstructionNativeSection />

      {/* 8. EMERGING-MARKET READY */}
      <EmergingMarketSection />

      {/* 9. FUTURE */}
      <FutureSection />

      {/* 10. FINAL CTA */}
      <CtaSection />

      {/* 11. FOOTER (Contains "An EM300.co Company") */}
      <Footer />
    </main>
  );
}
