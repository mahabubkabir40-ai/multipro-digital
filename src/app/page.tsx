import Hero from "@/components/Hero";
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
      {/* Section 2: Hero Section */}
      <Hero />
        
      {/* Section 3: The Problem (Agitation) */}
      <ScrollReveal className="optimized-section">
        <ProblemSolution />
      </ScrollReveal>

      {/* Section 4: The Solution (3-Pillar Epoxy Engine) */}
      <ScrollReveal className="optimized-section">
        <HowItWorks />
      </ScrollReveal>

      {/* Section 5: Feature Demo Callout (Instant Floor Estimator) */}
      <ScrollReveal className="optimized-section">
        <FloorCalculator />
      </ScrollReveal>

      {/* Section 6: Why Choose MultiPro Digital (Comparison Table) */}
      <ScrollReveal className="optimized-section">
        <ComparisonTable />
      </ScrollReveal>

      {/* Proof: Portfolio & Case Studies */}
      <ScrollReveal className="optimized-section">
        <Portfolio />
      </ScrollReveal>

      {/* Proof: Testimonials */}
      <ScrollReveal className="optimized-section">
        <Testimonials />
      </ScrollReveal>

      {/* Section 7: Frequently Asked Questions */}
      <ScrollReveal className="optimized-section">
        <FAQ />
      </ScrollReveal>

      {/* Section 8: Final Call to Action */}
      <ScrollReveal className="optimized-section">
        <CTA />
      </ScrollReveal>
    </main>
  );
}
