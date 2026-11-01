import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AnniversaryBanner } from './components/AnniversaryBanner';
import { ServicesSection } from './components/ServicesSection';
import { VoicyAchievementSection } from './components/VoicyAchievementSection';
import { UracyAchievementSection } from './components/UracyAchievementSection';
import { ProfileSection } from './components/ProfileSection';
import { InquiryFlowSection } from './components/InquiryFlowSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCta } from './components/FloatingCta';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AnniversaryBanner />
        <ServicesSection />
        <VoicyAchievementSection />
        <UracyAchievementSection />
        <ProfileSection />
        <InquiryFlowSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
