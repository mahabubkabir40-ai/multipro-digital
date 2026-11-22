'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

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

  const guarantees = [
    "100% exclusive calls & quotes — zero shared Angi leads",
    "Strict 1-contractor territory lockout per metro area",
    "Month-to-month partnership — you own 100% of your assets",
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-900 relative overflow-x-clip border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-12 lg:gap-y-6 items-start">
          
          {/* Top-Left (Desktop) / First (Mobile): Header + Live Dashboard Preview */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-bold text-xs tracking-widest uppercase mb-4">
                Clear Answers
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-serif text-white font-black leading-[1.12] tracking-tight mb-3 sm:mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-blue-100/75 text-sm sm:text-base font-sans leading-relaxed max-w-xl mx-auto lg:mx-0">
                Straight answers for epoxy &amp; polyaspartic shop owners tired of slow agencies, long-term lock-ins, and shared lead brokers.
              </p>
            </div>

            {/* Live Dashboard Visual */}
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.45)] relative aspect-[16/10] group border border-white/15 bg-slate-950">
              <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-brand-lime/35 text-white font-bold text-[10px] sm:text-[11px] flex items-center gap-1.5 sm:gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse shrink-0" />
                Live Contractor Lead &amp; Ranking Tracker
              </div>
              <Image 
                src="/faq-results.webp" 
                alt="iPad Pro dashboard mockup displaying Google Map Pack rankings and 3-car garage inbound estimate lead notifications for concrete coatings contractors" 
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column (Desktop, spans both left rows) / Middle (Mobile): Refined Numbered Accordion */}
          <div className="lg:col-span-7 lg:row-span-2 w-full">
            <div className="space-y-3 sm:space-y-3.5">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const num = String(index + 1).padStart(2, '0');
                return (
                  <div 
                    key={index} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? 'bg-slate-950/95 border-brand-lime/50 shadow-[0_12px_35px_rgba(154,251,22,0.1)]'
                        : 'bg-slate-950/55 border-white/10 hover:border-white/25 hover:bg-slate-950/75'
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      className="w-full px-4 sm:px-7 py-4 sm:py-5 text-left flex items-start justify-between focus:outline-none gap-3 sm:gap-4 group touch-manipulation"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <div className="flex items-start gap-3 sm:gap-4 pr-1">
                        <span className={`font-mono text-[11px] sm:text-xs font-black px-2 py-1 rounded-md mt-0.5 shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-brand-lime text-slate-950'
                            : 'bg-white/5 text-brand-lime/80 border border-white/10 group-hover:border-brand-lime/40'
                        }`}>
                          {num}
                        </span>
                        <span className={`text-[15px] sm:text-lg font-bold font-serif leading-snug transition-colors ${
                          isOpen ? 'text-white' : 'text-slate-100 group-hover:text-brand-lime'
                        }`}>
                          {faq.question}
                        </span>
                      </div>
                      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 border ${
                        isOpen
                          ? 'bg-brand-lime/15 border-brand-lime/40 text-brand-lime rotate-180'
                          : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-brand-lime group-hover:border-brand-lime/30'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>
                    
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 sm:px-7 sm:pl-[4.75rem] pb-5 sm:pb-6">
                          <div className="pt-3 border-t border-white/10">
                            <p className="text-sm sm:text-[15px] text-blue-100/80 font-sans leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom-Left (Desktop, fills gap under image) / Last (Mobile, right after reading FAQs): Conversion Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-950/85 border border-white/10 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-xl bg-brand-lime/15 border border-brand-lime/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-brand-lime" />
                </div>
                <div>
                  <h3 className="text-white font-serif font-bold text-base leading-snug">
                    Still have a question about your city?
                  </h3>
                  <p className="text-slate-400 text-xs font-sans">
                    Check territory availability before a competitor locks it.
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5 my-4 sm:my-5">
                {guarantees.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-blue-100/85 font-sans leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/free-audit"
                className="w-full py-3.5 px-5 rounded-xl bg-brand-lime hover:bg-white text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(154,251,22,0.25)] hover:shadow-[0_0_32px_rgba(154,251,22,0.45)] active:scale-[0.98] touch-manipulation"
              >
                <span>Get Your Free 60s Video Audit</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
