'use client'

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly do we see results?",
      answer: "Your new high-speed website and instant estimate calculator go live within 7 days. Google Map Pack rankings and inbound organic call volume typically compound within 45 to 90 days."
    },
    {
      question: "How does MultiPro get us more calls than traditional SEO agencies?",
      answer: "Traditional agencies build slow WordPress templates and rely on outdated keyword stuffing. We engineer custom, sub-second Next.js web applications wired with structured schema. This gets you ranked not just in the Google Map Pack, but as the #1 recommended answer across Google AI Overviews, Apple Siri, and ChatGPT voice search."
    },
    {
      question: "Are leads shared with other contractors in my city?",
      answer: "Never. Every call, form submission, and calculator estimate generated from your website and Google profile is 100% exclusive to your business."
    },
    {
      question: "Am I locked into a long-term contract?",
      answer: "No. We don't believe in holding contractors hostage. We earn your business month-to-month through real booked jobs and clear ranking reports."
    },
    {
      question: "Do you work with my competitors?",
      answer: "We maintain strict territory exclusivity. We only partner with one epoxy coating contractor per geographic market. Once you partner with us, we lock out your local competitors."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* Left Column Image */}
          <div className="lg:w-1/2 w-full">
            <div className="sticky top-24 rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] group border border-slate-200">
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-brand-lime/30 text-white font-bold text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                Local SEO &amp; Inbound Leads Tracker
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-blue font-bold mb-8 sm:mb-10">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-gray-50 border-brand-lime/50 shadow-md' : 'bg-white hover:border-brand-blue/30'}`}
                >
                  <button
                    className="w-full px-5 sm:px-8 py-4 sm:py-6 text-left flex justify-between items-center focus:outline-none gap-3"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-base sm:text-lg font-bold font-serif text-brand-blue pr-2 group-hover:text-brand-lime">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-brand-lime transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  <div 
                    className={`px-5 sm:px-8 transition-all duration-300 overflow-hidden ${openIndex === index ? 'pb-5 sm:pb-6 opacity-100 max-h-96' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
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
