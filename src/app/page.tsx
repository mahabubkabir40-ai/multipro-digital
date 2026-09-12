import Hero from "@/components/Hero";
import HeroProofStrip from "@/components/HeroProofStrip";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import FloorCalculator from "@/components/FloorCalculator";
import ComparisonTable from "@/components/ComparisonTable";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";


export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <link rel="preload" href="/hero-bg-mobile-v3.webp" as="image" media="(max-width: 1023px)" fetchPriority="high" />
      {/* 1. Hook & Offer: Hero Section */}
      <Hero />

      {/* 1.5 Immediate Proof: High-Impact Post-Hero Map Pack Strip */}
      <HeroProofStrip />
        
      {/* 2. Agitation: The Problem (Shared leads, missed calls on grinder) */}
      <ScrollReveal className="optimized-section">
        <ProblemSolution />
      </ScrollReveal>

      {/* 3. The Vehicle: The 3-Pillar Epoxy Inbound Growth Engine */}
      <ScrollReveal className="optimized-section">
        <HowItWorks />
      </ScrollReveal>

      {/* 4. Undeniable Proof: Real #1 Geo-Grid & Google Ranking Case Studies */}
      <Portfolio />

      {/* 5. Interactive Demo: Instant Floor Estimator */}
      <ScrollReveal className="optimized-section">
        <FloorCalculator />
      </ScrollReveal>

      {/* 6. Positioning: Why Choose MultiPro Digital vs Generic Agencies */}
      <ScrollReveal className="optimized-section">
        <ComparisonTable />
      </ScrollReveal>

      {/* 7. Social Proof: Client Testimonials */}
      <ScrollReveal className="optimized-section">
        <Testimonials />
      </ScrollReveal>

      {/* 8. Risk Reversal: Frequently Asked Questions */}
      <ScrollReveal className="optimized-section">
        <FAQ />
      </ScrollReveal>

      {/* 9. Final Close: Free 60-Second Video Audit CTA */}
      <ScrollReveal className="optimized-section">
        <CTA />
      </ScrollReveal>
    </main>
  );
}
