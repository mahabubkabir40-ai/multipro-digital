'use client'

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly do we see results?",
      answer: "Your new high-speed website and instant estimate calculator launch within 7 days. Google Map Pack ranking improvements and local SEO momentum typically scale within 60 to 90 days."
    },
    {
      question: "Do you work with other epoxy contractors in my city?",
      answer: "No. We operate on strict market territory exclusivity. We partner with only one epoxy/concrete coatings contractor per service area so there is never a conflict of interest."
    },
    {
      question: "How does the Instant Floor Price Estimator help me?",
      answer: "Homeowners looking for garage coatings want a fast ballpark. This homepage demo lets them pick a space size and finish to see an estimate range — then book a free audit or on-site consult so your team can confirm scope, prep, and a firm quote. On your live site, the same estimator routes serious buyers straight to your booking flow."
    },
    {
      question: "Am I locked into a long-term contract?",
      answer: "Never. We believe in earning your business through booked garage floors and commercial jobs, not legal lock-ins. All our growth plans are month-to-month after the initial setup period."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column Image */}
          <div className="lg:w-1/2 w-full">
            <div className="sticky top-24 rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] group border border-slate-200">
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-brand-lime/30 text-white font-bold text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                Before & After Floor Transformations
              </div>
              <Image 
                src="/faq-results.webp" 
                alt="Before and after comparison of dirty cracked concrete garage floor transformed into high-gloss flake epoxy showroom floor" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column Accordion */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-blue font-bold mb-10">
              Frequently Asked Questions!
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-gray-50 border-brand-lime/50 shadow-md' : 'bg-white hover:border-brand-blue/30'}`}
                >
                  <button
                    className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-lg font-bold font-serif text-brand-blue pr-8 group-hover:text-brand-lime">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-6 h-6 text-brand-lime transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  <div 
                    className={`px-8 transition-all duration-300 overflow-hidden ${openIndex === index ? 'pb-6 opacity-100 max-h-96' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-gray-600 font-sans leading-relaxed">
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
