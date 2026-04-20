import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
        
        <ScrollReveal>
          <ProblemSolution />
        </ScrollReveal>

        <ScrollReveal>
          <HowItWorks />
        </ScrollReveal>

        <ScrollReveal>
          <Portfolio />
        </ScrollReveal>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal>
          <CTA />
        </ScrollReveal>

        <ScrollReveal>
          <FAQ />
      </ScrollReveal>
    </main>
  );
}
