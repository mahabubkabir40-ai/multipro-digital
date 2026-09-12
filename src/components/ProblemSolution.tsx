'use client';

import React from 'react';
import { AlertTriangle, PhoneOff, DollarSign, EyeOff } from 'lucide-react';

export default function ProblemSolution() {
  const scrollToSystem = () => {
    const target = document.getElementById('the-system');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const painCards = [
    {
      id: 1,
      badge: "Card 1: Expensive, Shared Leads",
      title: "Feeding The Angi Lead Trap",
      leadText: "Paying $80+ for a lead that gets blasted to 4 other installers.",
      body: "The homeowner just wants the cheapest guy with a roller and box-store epoxy. You burn diesel driving out to measure, just to get ghosted on price.",
      icon: <DollarSign className="w-8 h-8 text-rose-500" />,
      tag: "Shared Leads Trap",
      impact: "Wasted Fuel & Lost Margins",
    },
    {
      id: 2,
      badge: "Card 2: Missing High-Dollar Jobs on the Grinder",
      title: "Earplugs In, Grinder Running",
      leadText: "You can't answer the phone while pushing a 30-inch planetary grinder.",
      body: "Homeowners wanting a $4,500 full-flake garage rarely leave voicemails. They hang up, tap the next guy in the Google 3-Pack, and book with him.",
      icon: <PhoneOff className="w-8 h-8 text-amber-500" />,
      tag: "Missed Calls = Lost Jobs",
      impact: "Lost $4,000+ Garage Jobs",
    },
    {
      id: 3,
      badge: "Card 3: Instagram Views Don't Pay the Bills",
      title: 'Instagram "How Much?" Tire-Kickers',
      leadText: "Clean flake transformation reels get fire emojis, not deposits.",
      body: "Window-shoppers flood your DMs asking for ballparks, but because your site lacks an instant sq-ft estimator, they never commit to an on-site moisture test.",
      icon: <EyeOff className="w-8 h-8 text-blue-500" />,
      tag: "Zero-Deposit Traffic",
      impact: "Hours Wasted in DMs",
    },
  ];

  return (
    <section id="why-it-works" className="py-16 sm:py-24 lg:py-28 bg-slate-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-bold text-xs uppercase tracking-widest mb-4">
            <AlertTriangle className="w-4 h-4 text-rose-500" /> The Contractor Reality
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-black tracking-tight mb-4 sm:mb-6">
            Tired of Bidding Against Trunk-Slammers &amp; Buying Junk Leads?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100/70 font-sans leading-relaxed">
            You invested thousands in grinders, dust extractors, and polyaspartic rigs. You shouldn&apos;t have to race to the bottom on price or waste half your week chasing tire-kickers.
          </p>
        </div>

        {/* 3 Pain Point Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {painCards.map((card) => (
            <div 
              key={card.id}
              className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/10 hover:border-rose-500/40 hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.15)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group backdrop-blur-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/30 px-3 py-1 rounded-full">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-black text-white mb-3 leading-snug group-hover:text-rose-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-100 font-bold text-sm sm:text-base mb-2 font-sans leading-snug">
                  {card.leadText}
                </p>

                <p className="text-blue-100/60 text-xs sm:text-sm font-sans leading-relaxed">
                  {card.body}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-400">
                  Impact: <strong className="font-extrabold text-rose-400">{card.impact}</strong>
                </span>
                <button 
                  type="button"
                  onClick={scrollToSystem}
                  className="font-black text-brand-lime hover:text-white transition-colors flex items-center gap-1 group/btn cursor-pointer select-none"
                >
                  <span>See The Solution</span>
                  <span className="transition-transform group-hover/btn:translate-y-0.5">↓</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
