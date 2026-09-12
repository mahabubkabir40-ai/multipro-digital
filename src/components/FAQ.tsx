'use client'

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly until my phone starts ringing?",
      answer: "Your custom site and instant sq-ft estimator go live within 7 days. Google Map Pack rankings and direct inbound calls from homeowners typically build serious momentum within 30 to 60 days."
    },
    {
      question: "Why does MultiPro get more calls than traditional marketing agencies?",
      answer: "Most agencies don't know the difference between diamond-grinding concrete and mopping a floor. They build slow WordPress templates that take 8 seconds to load on mobile. We build custom, ultra-fast sites designed specifically to showcase flake, quartz, and metallic floors — wired to rank #1 on Google Maps and capture homeowner phone numbers."
    },
    {
      question: "Are leads shared with other contractors in my city?",
      answer: "Never. Every phone call, quote request, and calculator estimate goes directly and exclusively to your phone. Zero shared Angi or Thumbtack leads."
    },
    {
      question: "Am I locked into a long-term contract?",
      answer: "No. We don't believe in holding contractors hostage. We earn your business month-to-month by keeping your grinders running and showing clear ranking proof."
    },
    {
      question: "Will you work with my local competitors down the street?",
      answer: "Never. We enforce strict territory lockouts — strictly one coatings contractor per geographic market. Once you partner with us, we lock out your competitors completely."
    }
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
