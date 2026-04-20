'use client'

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long until I see results?",
      answer: "Most movers start getting exclusive calls and seeing Google ranking improvements within 8–12 weeks after we complete your audit and launch your campaign."
    },
    {
      question: "How much does it cost?",
      answer: "Every moving company's needs and service areas are unique, so we don't offer one-size-fits-all pricing. We create a custom strategy tailored to your specific goals. The best first step is to book a 'Free Mover Growth Engine™ Strategy Session' call where we can provide a detailed proposal with no obligation."
    },
    {
      question: "Am I locked into a contract?",
      answer: "Nope. We believe in earning your business through results, not locking you in. Our plans are month-to-month after the initial setup period."
    },
    {
      question: "Do you work with other industries?",
      answer: "We work exclusively with moving companies — no shared leads, no guesswork — just exclusive calls from homeowners ready to move."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column Image */}
          <div className="lg:w-1/2 w-full">
            <div className="sticky top-24 rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] group">
              <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src="/faq-results.png" 
                alt="Dashboard visualization showing Google Map Pack Top 3 rankings for moving company keywords" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
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
