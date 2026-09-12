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
      title: "Feeding the Angi & Thumbtack Trap",
      leadText: "You pay thousands for shared leads sent to 4 competitors.",
      body: "Homeowners price-shop all 4 contractors at once, forcing you into a race to the bottom on price instead of earning what your craftsmanship is worth.",
      icon: <DollarSign className="w-8 h-8 text-rose-500" />,
      tag: "Shared Leads Trap",
      impact: "Lost Margins & Profit",
    },
    {
      id: 2,
      badge: "Card 2: Missing High-Dollar Jobs on the Grinder",
      title: "Missing Calls While Running the Grinder",
      leadText: "When rolling epoxy or grinding concrete, you can't pick up.",
      body: "Homeowners rarely leave voicemails—they hang up and call the next contractor in the Google Map Pack, costing you $3,000+ per lost job.",
      icon: <PhoneOff className="w-8 h-8 text-amber-500" />,
      tag: "Missed Calls = Lost Jobs",
      impact: "Lost $3,000+ Jobs",
    },
    {
      id: 3,
      badge: "Card 3: Instagram Views Don't Pay the Bills",
      title: "Tire-Kickers in Your Social DMs",
      leadText: "Viral reel views don't translate to booked garage floors.",
      body: 'People comment "How much?" but never book because your site takes 7 seconds to load on mobile and lacks an instant pricing tool.',
      icon: <EyeOff className="w-8 h-8 text-blue-500" />,
      tag: "Zero-Conversion Website",
      impact: "Zero Inbound Bookings",
    },
  ];

  return (
    <section id="why-it-works" className="py-16 sm:py-24 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-700 font-bold text-xs uppercase tracking-widest mb-4">
            <AlertTriangle className="w-4 h-4 text-rose-600" /> Real Contractor Problems
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A365D] font-black tracking-tight mb-4 sm:mb-6">
            Does This Sound Familiar?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-sans leading-relaxed">
            Running an epoxy business is tough enough without paying for shared leads and losing high-ticket 3-car garages.
          </p>
        </div>

        {/* 3 Pain Point Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {painCards.map((card) => (
            <div 
              key={card.id}
              className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/80 hover:border-rose-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-black text-slate-900 mb-3 leading-snug group-hover:text-[#1A365D] transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-900 font-bold text-sm sm:text-base mb-2 font-sans leading-snug">
                  {card.leadText}
                </p>

                <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                  {card.body}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-500">
                  Impact: <strong className="font-extrabold text-slate-900">{card.impact}</strong>
                </span>
                <button 
                  type="button"
                  onClick={scrollToSystem}
                  className="font-black text-rose-600 hover:text-[#1A365D] transition-colors flex items-center gap-1 group/btn cursor-pointer select-none"
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
