"use client"

import { FloatingElements } from "../components/floating-elements"
import { Header } from "../components/sections/header"
import { HeroSection } from "../components/sections/hero-section"
import { SocialProofSection } from "../components/sections/social-proof-section"
import { ProblemAmplificationSection } from "../components/sections/problem-amplification-section"
import { SolutionMechanismSection } from "../components/sections/solution-mechanism-section"
import { FeaturesSection } from "../components/sections/features-section"
import { DetailedSocialProofSection } from "../components/sections/detailed-social-proof-section"
import { ValueStackSection } from "../components/sections/value-stack-section"
import { UrgencySection } from "../components/sections/urgency-section"
import { FAQSection } from "../components/sections/faq-section"
import { FinalCTASection } from "../components/sections/final-cta-section"
import { Footer } from "../components/sections/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Problem Amplification */}
      <ProblemAmplificationSection />

      {/* Solution Mechanism */}
      <SolutionMechanismSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Detailed Social Proof */}
      <DetailedSocialProofSection />

      {/* Value Stack & Offer */}
      <ValueStackSection />

      {/* Urgency & Scarcity */}
      <UrgencySection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
