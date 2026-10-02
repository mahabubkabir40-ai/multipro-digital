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
      name: "I've been burned by marketing & SEO agencies before. How is MultiPro actually different?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most agencies are generalists who have never set foot on a job site. They build slow 8-second WordPress templates, write generic blogs about 'interior painting', and don't know the difference between an ICRI diamond grind and a $300 big-box epoxy paint kit. MultiPro works exclusively with concrete coating contractors. We build sub-1.5s mobile showrooms with live pricing estimators, optimize your Google Business Profile to rank in the local 3-Pack, and enforce strict 1-contractor territory exclusivity.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are phone calls and estimates 100% exclusive to my shop, or shared like Angi and Thumbtack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '100% exclusive to your business. Angi and Thumbtack sell the exact same shared lead to 4 or 5 hungry contractors at $90 each, triggering a brutal race to the bottom. With MultiPro, every phone call, quote request, and calculator estimate goes directly and exclusively to your shop\'s phone. Zero shared leads, ever.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you stop cheap tire-kickers and price-shoppers from wasting my time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Through our built-in instant sq-ft pricing estimator. Before homeowners submit their contact info, they enter their garage dimensions (2-car, 3-car, custom sq ft) and see realistic commercial pricing ($5.00–$7.50+/sq ft). This immediately filters out low-ballers who thought a professional coating was $400, ensuring you only spend gas and time quoting pre-qualified homeowners ready for a commercial polyaspartic system.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly until my phone starts ringing with real garage floor jobs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your custom site and instant estimator go live within 7 days, immediately converting your existing direct traffic and word-of-mouth. Google Map Pack rankings and direct inbound calls from homeowners typically build serious momentum within 30 to 60 days as citations, geotagged project photos, and review velocity compound.',
      },
    },
    {
      '@type': 'Question',
      name: 'Am I locked into a long-term contract, and do I own my Google Business Profile and website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No contracts, and you own 100% of your assets. We work strictly month-to-month. If we aren\'t keeping your grinders running with high-margin jobs, you shouldn\'t have to pay us. You retain full ownership of your domain, Google Business Profile, and branding at all times.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you ever work with my local coating competitors down the street?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Never. We enforce strict territory lockouts — strictly one concrete coatings contractor per geographic market. Once you partner with us, we lock out your competitors completely.',
      },
    },
    {
      '@type': 'Question',
      name: "What do you need from me each week? I'm out on the grinder running jobs all day.",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost nothing. We know you\'re running 3-head grinders, mixing polyaspartic, and managing crews—not sitting at a desk. All we need from your crew is 2 or 3 quick photos or short clips of your surface prep and finished floors sent via text or WhatsApp after each job. We handle all geo-tagging, case studies, metadata, and local SEO.',
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
