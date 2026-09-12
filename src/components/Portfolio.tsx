'use client'

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const [selectedProof, setSelectedProof] = useState<{
    image: string;
    title: string;
    badge: string;
    subtitle: string;
    note: string;
    quote?: string;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProof(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is active to prevent background scroll jumps on mobile
  useEffect(() => {
    if (selectedProof) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProof]);

  if (!mounted) {
    return <section id="portfolio" className="py-24 bg-slate-900 min-h-[400px]" />;
  }

  const filters = ['All', 'Google Business Profile Ranking', 'Website Ranking'];

  const results = [
    {
      id: 1,
      name: "Los Angeles, CA — #1 Map Pack Domination",
      category: ['All', 'Google Business Profile Ranking'],
      image: "/portfolio/epoxy/geogrid-la-ranking.png",
      rawImage: "/portfolio/epoxy/la-geogrid-original.png",
      metric: "#1",
      metricLabel: "Epoxy Flooring LA",
      timeframe: "25/25 #1 Geo-Pins (Clean Sweep)",
      quote: "Shop Owner: 'We booked 4 extra garage jobs our very first month hitting #1 across the map.'"
    },
    {
      id: 2,
      name: "Phoenix, AZ — Top 3 Map Pack Cluster",
      category: ['All', 'Google Business Profile Ranking'],
      image: "/portfolio/epoxy/geogrid-phoenix-ranking.png",
      rawImage: "/portfolio/epoxy/phoenix-geogrid-original.png",
      metric: "Top 3",
      metricLabel: "Epoxy Flooring Phoenix",
      timeframe: "40+ Top Pins across Metro",
      quote: "Installer: 'Exclusive local calls replaced shared lead junk across the East Valley in 30 days.'"
    },
    {
      id: 3,
      name: "Dallas, TX — #1 Google Organic Rankings",
      category: ['All', 'Website Ranking'],
      image: "/portfolio/epoxy/epoxy-floor-dallas-ranking.png",
      rawImage: "/portfolio/epoxy/dallas-ranking-original.png",
      metric: "#1",
      metricLabel: "epoxy flooring dallas",
      timeframe: "5 Keywords in Top 5 (DFW)",
      quote: "Shop Owner: 'Landing #1 for DFW epoxy keywords kept our crews booked with 3-car garages all summer.'"
    },
    {
      id: 4,
      name: "Tampa, FL — Top 3 Google 3-Pack Domination",
      category: ['All', 'Google Business Profile Ranking'],
      image: "/portfolio/epoxy/geogrid-tampa-ranking.png",
      rawImage: "/portfolio/epoxy/tampa-geogrid-original.png",
      metric: "Top 3",
      metricLabel: "Epoxy Flooring Tampa FL",
      timeframe: "27 Pins in Google 3-Pack",
      quote: "Owner: 'Phone started ringing with commercial epoxy and polyaspartic garage inquiries.'"
    },
    {
      id: 5,
      name: "Phoenix, AZ — Top-4 Metro Keyword Climb",
      category: ['All', 'Website Ranking'],
      image: "/portfolio/epoxy/epoxy-floor-phoenix-ranking.png",
      rawImage: "/portfolio/epoxy/phoenix-ranking-original.png",
      metric: "Top 4",
      metricLabel: "epoxy floor phoenix",
      timeframe: "Jumped 8 Spots (from #12)",
      quote: "Installer: 'Jumped past 8 local competitors in under 6 weeks without burning ad spend.'"
    },
    {
      id: 6,
      name: "Las Vegas, NV — #2 High-Ticket Epoxy SEO",
      category: ['All', 'Website Ranking'],
      image: "/portfolio/epoxy/epoxy-floor-las-vegas-ranking.png",
      rawImage: "/portfolio/epoxy/las-vegas-ranking-original.png",
      metric: "#2",
      metricLabel: "epoxy floor las vegas",
      timeframe: "+13 Monthly Organic Traffic",
      quote: "Owner: 'High-ticket metallic and garage leads now fill our calendar weeks in advance.'"
    }
  ];

  const openProofModal = (result: typeof results[0]) => {
    if (!result.rawImage) return;
    const isGbp = result.category.includes('Google Business Profile Ranking');
    setSelectedProof({
      image: result.rawImage,
      title: result.name,
      badge: isGbp ? "Verified Local Map Pack Ranking" : "Verified Client Search Ranking",
      subtitle: isGbp ? "Local 3-Pack Geo-Grid Heatmap Verification" : "Live Google Keyword Positions (Organic SEO Report)",
      note: isGbp 
        ? "Live geo-grid ranking audit showing Google Business Profile #1 and top-3 pins across targeted metro service areas."
        : "Real position tracking data showing page 1 Google rankings for high-ticket epoxy keywords.",
      quote: result.quote
    });
  };

  const filteredResults = results.filter(result => result.category.includes(activeFilter));

  return (
    <section id="portfolio" className="py-24 bg-slate-900 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-bold tracking-widest uppercase text-xs mb-6">
            Real Proof From The Field
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white font-black mb-6 leading-tight">
            Real Map Pack Domination &amp; <span className="text-brand-lime whitespace-nowrap">Keyword Wins</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100/70 font-sans leading-relaxed">
            No marketing theories. Here is actual Google Map Pack geo-grid data and search rankings that keep installation calendars full across major US cities.
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
              className={`relative rounded-2xl overflow-hidden bg-slate-950 border transition-all duration-500 shadow-2xl select-none touch-manipulation ${isActive ? 'border-brand-lime/50 shadow-[0_20px_40px_-15px_rgba(154,251,22,0.15)] -translate-y-2' : 'border-white/10'}`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
              onMouseEnter={() => setActiveCardId(result.id)}
              onMouseLeave={() => setActiveCardId(null)}
            >
              <div 
                className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer group/thumb"
                onClick={() => openProofModal(result)}
              >
                {/* Image with priority loading for above-fold cards to eliminate flicker */}
                <Image 
                  src={result.image} 
                  alt={`Local SEO Map Pack case study: ${result.name} — prior win, same system for epoxy/coatings`} 
                  fill
                  priority={result.id <= 3}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover object-top transform transition-transform duration-700 ease-out ${isActive ? 'scale-105' : 'scale-100'}`}
                />

                {/* Instant Enlarge Badge — Clean indicator */}
                <div 
                  className="absolute top-3 right-3 z-30 px-3 py-1.5 rounded-full bg-slate-950/85 text-white border border-brand-lime/40 text-xs font-bold flex items-center gap-1.5 backdrop-blur-md shadow-lg pointer-events-none"
                >
                  <svg className="w-3.5 h-3.5 text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                  <span>Tap To Enlarge</span>
                </div>

                {/* Hover Reveal Overlays */}
                <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`} />
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

                {/* Hover Reveal Content (Metrics & Single Focused CTA) */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-30 transition-all duration-500 delay-75 flex flex-col justify-end ${isActive ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
                  
                  <div className="mb-3 sm:mb-4 border-l-[3px] border-brand-lime pl-3 sm:pl-4">
                    <div className="flex items-end gap-2 text-brand-lime">
                      <span className="text-3xl sm:text-5xl font-black leading-none tracking-tighter">{result.metric}</span>
                    </div>
                    <p className="text-white font-bold text-xs sm:text-base tracking-wide mt-1 sm:mt-2">{result.metricLabel}</p>
                    <p className="text-white/60 text-xs sm:text-sm font-sans mt-0.5 sm:mt-1">{result.timeframe}</p>
                    {result.quote && (
                      <p className="text-brand-lime text-[11px] sm:text-xs font-semibold font-sans mt-2 pt-1.5 border-t border-white/10 italic leading-tight">
                        &ldquo;{result.quote}&rdquo;
                      </p>
                    )}
                  </div>

                  {/* Single clear CTA — No competing buttons */}
                  <div>
                    <Link 
                      href="/free-audit"
                      prefetch={false}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (typeof window !== 'undefined' && (window as any).gtag) {
                          (window as any).gtag('event', 'click_audit', {
                            'event_category': 'CTA',
                            'event_label': 'Portfolio Card Button'
                          });
                        }
                      }}
                      className="relative group/btn overflow-hidden w-full py-3 sm:py-3.5 rounded-xl bg-brand-lime text-[#1A365D] font-black text-xs sm:text-sm tracking-wide transition-all duration-300 active:duration-75 transform hover:scale-[1.02] active:scale-95 active:bg-white shadow-[0_4px_14px_rgba(154,251,22,0.3)] hover:shadow-[0_0_30px_rgba(154,251,22,0.6)] flex items-center justify-center gap-2 whitespace-nowrap select-none touch-manipulation"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-1.5">
                        Get Results Like This &rarr;
                      </span>
                      <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-[800ms] ease-out" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Proof Modal — Rendered via React Portal directly onto document.body to guarantee 100% viewport centering and fix mobile offscreen bug */}
      {selectedProof && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[99999] bg-slate-950/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto overscroll-contain animate-in fade-in duration-200"
          onClick={() => setSelectedProof(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-4xl w-full max-h-[92dvh] sm:max-h-[90vh] bg-slate-900 border border-brand-lime/40 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden my-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-slate-900/95 shrink-0">
              <div className="pr-3">
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-brand-lime block">{selectedProof.badge}</span>
                <p className="text-white text-xs sm:text-sm font-semibold truncate max-w-[220px] sm:max-w-md">{selectedProof.subtitle}</p>
              </div>
              <button 
                onClick={() => setSelectedProof(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-lime hover:text-slate-950 text-white flex items-center justify-center font-bold text-xl transition-all shrink-0 active:scale-95 touch-manipulation"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            
            {/* Scrollable Modal Content */}
            <div className="p-3 sm:p-5 overflow-y-auto flex-1 flex flex-col gap-3 overscroll-contain">
              <div className="bg-slate-950 rounded-xl p-2 sm:p-3 border border-white/10 flex items-center justify-center min-h-[180px]">
                <img 
                  src={selectedProof.image} 
                  alt={`${selectedProof.title} Proof`} 
                  className="w-full h-auto max-h-[50dvh] sm:max-h-[58vh] object-contain rounded-lg shadow-md mx-auto block"
                />
              </div>

              {selectedProof.quote && (
                <div className="p-3 rounded-xl bg-slate-950 border border-brand-lime/30 text-brand-lime text-xs sm:text-sm font-medium italic">
                  &ldquo;{selectedProof.quote}&rdquo;
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-5 border-t border-white/10 bg-slate-900/95 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-slate-400 text-xs text-center sm:text-left">
                {selectedProof.note}
              </p>
              <Link
                href="/free-audit"
                onClick={() => setSelectedProof(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-lime text-[#1A365D] font-black text-xs uppercase tracking-wider text-center hover:shadow-[0_0_20px_rgba(154,251,22,0.5)] transition-all shrink-0 select-none touch-manipulation"
              >
                Get Your Territory Analyzed &rarr;
              </Link>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
