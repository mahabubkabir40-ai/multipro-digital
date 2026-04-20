'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const filters = ['All', 'Google Business Profile Ranking', 'Website Ranking'];

  const results = [
    {
      id: 1,
      name: "Ventura Moving Company",
      category: ['All', 'Google Business Profile Ranking'],
      image: "/portfolio/gbp/Ventura-Moving-Company-ranking-growth.jpg",
      metric: "#1",
      metricLabel: "Map Pack Ranking",
      timeframe: "in 60 Days"
    },
    {
      id: 2,
      name: "Oxnard Moving Company",
      category: ['All', 'Google Business Profile Ranking'],
      image: "/portfolio/gbp/Oxnard-Moving-Company-ranking-growth.jpg",
      metric: "Top 3",
      metricLabel: "Map Pack Ranking",
      timeframe: "in 30 Days"
    },
    {
      id: 3,
      name: "California Moving Company",
      category: ['All', 'Google Business Profile Ranking'],
      image: "/portfolio/gbp/California-moving-company-ranking-growth.jpg",
      metric: "#2",
      metricLabel: "Map Pack Ranking",
      timeframe: "in 30 Days"
    },
    {
      id: 4,
      name: "Idaho Moving Company",
      category: ['All', 'Website Ranking'],
      image: "/portfolio/website/Idaho-Moving-Comapny.jpg",
      metric: "Top 5",
      metricLabel: "Organic Search",
      timeframe: "in 30 Days"
    },
    {
      id: 5,
      name: "Maestro Moving Company",
      category: ['All', 'Website Ranking'],
      image: "/portfolio/website/Maestro-Movers-scaled.png",
      metric: "+13",
      metricLabel: "Ranking Spots",
      timeframe: "in 30 Days"
    },
    {
      id: 6,
      name: "Ventura Moving Company",
      category: ['All', 'Website Ranking'],
      image: "/portfolio/website/ventura-movers-company-ranking.png",
      metric: "Top 4",
      metricLabel: "Organic Search",
      timeframe: "in 30 Days"
    }
  ];

  const filteredResults = results.filter(result => result.category.includes(activeFilter));

  return (
    <section id="portfolio" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-bold tracking-widest uppercase text-xs mb-6">
            Proven Case Studies
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white font-black mb-6 leading-tight">
            How We Scale Movers To <span className="text-brand-lime whitespace-nowrap">7-Figures</span>
          </h2>
          <p className="text-lg text-blue-100/70 font-sans leading-relaxed">
            We don't post vanity metrics. We measure our success in booked moves, full schedules, and revenue growth. Explore our recent local market takeovers.
          </p>
        </div>

        {/* Sleek Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 border ${
                activeFilter === filter 
                  ? 'bg-brand-lime border-brand-lime text-[#1A365D] shadow-[0_0_20px_rgba(154,251,22,0.2)]' 
                  : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Premium Editorial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResults.map((result) => {
            const isActive = activeCardId === result.id;
            return (
            <div 
              key={result.id} 
              className={`relative rounded-2xl overflow-hidden bg-slate-950 border transition-all duration-500 shadow-2xl select-none touch-manipulation cursor-pointer ${isActive ? 'border-brand-lime/50 shadow-[0_20px_40px_-15px_rgba(154,251,22,0.15)] -translate-y-2' : 'border-white/10'}`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
              onClick={() => setActiveCardId(isActive ? null : result.id)}
              onMouseEnter={() => setActiveCardId(result.id)}
              onMouseLeave={() => setActiveCardId(null)}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {/* Image */}
                <Image 
                  src={result.image} 
                  alt={`Local SEO and Google Maps ranking case study for ${result.name}`} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover transform transition-transform duration-700 ease-out ${isActive ? 'scale-110' : 'scale-100'}`}
                />

                {/* Hover Reveal Overlays */}
                <div className={`absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`} />
                <div className={`absolute inset-0 bg-slate-950/90 transition-opacity duration-500 z-20 backdrop-blur-[2px] ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />

                {/* Info Hierarchy */}
                <div className={`absolute bottom-4 left-4 sm:bottom-6 sm:left-6 sm:right-6 right-4 z-30 transition-transform duration-500 ${isActive ? '-translate-y-40 sm:-translate-y-44' : 'translate-y-0'}`}>
                  <span className="text-brand-lime text-[10px] sm:text-[11px] font-black uppercase tracking-widest drop-shadow-md">
                    {result.category[1] || result.category[0]}
                  </span>
                  <h3 className="text-white font-serif font-bold text-xl sm:text-2xl mt-1 drop-shadow-md leading-snug">
                    {result.name}
                  </h3>
                </div>

                {/* Hover Reveal Content (Metrics & CTA) */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-30 transition-all duration-500 delay-75 flex flex-col justify-end ${isActive ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
                  
                  <div className="mb-4 sm:mb-6 border-l-[3px] border-brand-lime pl-3 sm:pl-4">
                    <div className="flex items-end gap-2 text-brand-lime">
                      <span className="text-3xl sm:text-5xl font-black leading-none tracking-tighter">{result.metric}</span>
                    </div>
                    <p className="text-white font-bold text-xs sm:text-base tracking-wide mt-1 sm:mt-2">{result.metricLabel}</p>
                    <p className="text-white/60 text-xs sm:text-sm font-sans mt-0.5 sm:mt-1">{result.timeframe}</p>
                  </div>

                  <Link 
                    href="/contact#audit-form"
                    onClick={(e) => e.stopPropagation()}
                    className="relative group/btn overflow-hidden w-full py-2.5 sm:py-3.5 rounded-xl bg-brand-lime text-[#1A365D] font-black text-xs sm:text-sm tracking-wide transition-all duration-300 active:duration-75 transform hover:scale-[1.05] active:scale-90 active:bg-white shadow-[0_4px_14px_rgba(154,251,22,0.3)] hover:shadow-[0_0_30px_rgba(154,251,22,0.6)] flex items-center justify-center gap-2 whitespace-nowrap select-none touch-manipulation"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Results Like This &rarr;
                    </span>
                    <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-[800ms] ease-out" />
                  </Link>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
