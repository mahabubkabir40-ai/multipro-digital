'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "I've been burned by marketing & SEO agencies before. How is MultiPro actually different?",
      answer: (
        <>
          Most agencies are generalists who have never set foot on a job site. They build slow 8-second WordPress templates, write generic blogs about &apos;interior painting&apos;, and don&apos;t know the difference between an <a href="https://www.icri.org" target="_blank" rel="noopener noreferrer" className="text-brand-lime font-semibold underline decoration-brand-lime/40 hover:text-white transition-colors">ICRI diamond grind</a> and a $300 big-box epoxy paint kit. MultiPro works exclusively with concrete coating contractors. We build sub-1.5s mobile showrooms with live pricing estimators, optimize your Google Business Profile to rank in the local 3-Pack, and enforce strict 1-contractor territory exclusivity.
        </>
      ),
    },
    {
      question: "Are phone calls and estimates 100% exclusive to my shop, or shared like Angi and Thumbtack?",
      answer: "100% exclusive to your business. Angi and Thumbtack sell the exact same shared lead to 4 or 5 hungry contractors at $90 each, triggering a brutal race to the bottom. With MultiPro, every phone call, quote request, and calculator estimate goes directly and exclusively to your shop's phone. Zero shared leads, ever.",
    },
    {
      question: "How do you stop cheap tire-kickers and price-shoppers from wasting my time?",
      answer: (
        <>
          Through our built-in <a href="#estimator" className="text-brand-lime font-semibold underline decoration-brand-lime/40 hover:text-white transition-colors">instant sq-ft pricing estimator</a>. Before homeowners submit their contact info, they enter their garage dimensions (2-car, 3-car, custom sq ft) and see realistic commercial pricing ($5.00–$7.50+/sq ft). This immediately filters out low-ballers who thought a professional coating was $400, ensuring you only spend gas and time quoting pre-qualified homeowners ready for a commercial polyaspartic system.
        </>
      ),
    },
    {
      question: "How quickly until my phone starts ringing with real garage floor jobs?",
      answer: "Your custom site and instant estimator go live within 7 days, immediately converting your existing direct traffic and word-of-mouth. Google Map Pack rankings and direct inbound calls from homeowners typically build serious momentum within 30 to 60 days as citations, geotagged project photos, and review velocity compound.",
    },
    {
      question: "Am I locked into a long-term contract, and do I own my Google Business Profile and website?",
      answer: "No contracts, and you own 100% of your assets. We work strictly month-to-month. If we aren't keeping your grinders running with high-margin jobs, you shouldn't have to pay us. You retain full ownership of your domain, Google Business Profile, and branding at all times.",
    },
    {
      question: "Will you ever work with my local coating competitors down the street?",
      answer: (
        <>
          Never. We enforce <Link href="/locations" className="text-brand-lime font-semibold underline decoration-brand-lime/40 hover:text-white transition-colors">strict territory lockouts</Link> — strictly one concrete coatings contractor per geographic market. Once you partner with us, we lock out your competitors completely.
        </>
      ),
    },
    {
      question: "What do you need from me each week? I'm out on the grinder running jobs all day.",
      answer: "Almost nothing. We know you're running 3-head grinders, mixing polyaspartic, and managing crews—not sitting at a desk. All we need from your crew is 2 or 3 quick photos or short clips of your surface prep and finished floors sent via text or WhatsApp after each job. We handle all geo-tagging, case studies, metadata, and local SEO.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* Left Column Image */}
          <div className="lg:w-1/2 w-full">
            <div className="sticky top-24 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative aspect-[4/3] group border border-white/15">
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-brand-lime/30 text-white font-bold text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                Live Contractor Lead &amp; Ranking Tracker
              </div>
              <Image 
                src="/faq-results.webp" 
                alt="iPad Pro dashboard mockup displaying Google Map Pack rankings and 3-car garage inbound estimate lead notifications for concrete coatings contractors" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column Accordion */}
          <div className="lg:w-1/2 w-full">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-bold text-xs tracking-widest uppercase mb-4">
              Clear Answers
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-black mb-8 sm:mb-10">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-slate-950/90 border-brand-lime/50 shadow-[0_10px_30px_rgba(154,251,22,0.1)]' : 'bg-slate-950/50 border-white/10 hover:border-white/20'}`}
                >
                  <button
                    className="w-full px-5 sm:px-8 py-4 sm:py-6 text-left flex justify-between items-center focus:outline-none gap-3 group"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-base sm:text-lg font-bold font-serif text-white pr-2 group-hover:text-brand-lime transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-brand-lime transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  <div 
                    className={`px-5 sm:px-8 transition-all duration-300 overflow-hidden ${openIndex === index ? 'pb-5 sm:pb-6 opacity-100 max-h-96' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-sm sm:text-base text-blue-100/80 font-sans leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
