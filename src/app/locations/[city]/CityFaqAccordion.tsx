'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface CityFaqAccordionProps {
  city: string;
  faqs: FaqItem[];
}

export default function CityFaqAccordion({ city, faqs }: CityFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="w-full">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-bold tracking-widest uppercase text-xs mb-3 shadow-sm">
          <HelpCircle className="w-3.5 h-3.5 text-brand-lime" />
          <span>Regional Market Q&amp;A • {city}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-white leading-tight mb-3">
          Frequently Asked Questions About the {city} Territory
        </h2>
        <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
          Direct answers on territory lockout, local slab prep challenges, and capturing exclusive floor jobs across {city}.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-[#0c182b] border border-slate-700/60 rounded-2xl overflow-hidden shadow-lg transition-colors hover:border-slate-600"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-5 sm:px-7 py-4 sm:py-5 text-left flex justify-between items-center focus:outline-none gap-4 group cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-brand-lime transition-colors pr-2">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-lime/10 border-brand-lime/40' : ''}`}>
                  <ChevronDown className="w-4 h-4 text-brand-lime" />
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-1 text-sm sm:text-base text-slate-300 font-sans leading-relaxed border-t border-slate-800/80">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
