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


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly until my phone starts ringing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your custom site and instant sq-ft estimator go live within 7 days. Google Map Pack rankings and direct inbound calls from homeowners typically build serious momentum within 30 to 60 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does MultiPro get more calls than traditional marketing agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most agencies don\'t know the difference between diamond-grinding concrete and mopping a floor. They build slow WordPress templates that take 8 seconds to load on mobile. We build custom, ultra-fast sites designed specifically to showcase flake, quartz, and metallic floors — wired to rank #1 on Google Maps and capture homeowner phone numbers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are leads shared with other contractors in my city?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Never. Every phone call, quote request, and calculator estimate goes directly and exclusively to your phone. Zero shared Angi or Thumbtack leads.',
      },
    },
    {
      '@type': 'Question',
      name: 'Am I locked into a long-term contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We don\'t believe in holding contractors hostage. We earn your business month-to-month by keeping your grinders running and showing clear ranking proof.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you work with my local competitors down the street?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Never. We enforce strict territory lockouts — strictly one coatings contractor per geographic market. Once you partner with us, we lock out your competitors completely.',
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      {/* FAQPage Structured Data for Google Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
