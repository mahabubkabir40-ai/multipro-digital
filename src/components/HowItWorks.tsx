'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { Calculator, Zap, MapPin, ZoomIn, X, ArrowRight } from 'lucide-react';

interface Pillar {
  id: string;
  title: string;
  hook: string;
  body: string;
  icon: React.ReactNode;
  tag: string;
  image: string;
  imageMobile: string;
  imageAlt: string;
  actionText: string;
  actionHref: string;
  modalNote: string;
}

export default function HowItWorks() {
  const [selectedPreview, setSelectedPreview] = useState<Pillar | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pillars: Pillar[] = [
    {
      id: "01",
      title: "Instant Sq-Ft Price Estimator",
      hook: "Stop giving rough ballparks over the phone.",
      body: "Homeowners select their garage size, choose full flake or metallic, and submit their phone number to lock in an on-site moisture test before calling your competitors.",
      icon: <Calculator className="w-8 h-8 text-brand-lime" />,
      tag: "Captures Phone Numbers",
      image: "/portfolio/epoxy/pillar-1-estimator.png",
      imageMobile: "/portfolio/epoxy/pillar-1-estimator-mobile.png",
      imageAlt: "Live interactive floor pricing estimator software preview",
      actionText: "Try Live Estimator ↓",
      actionHref: "#estimator",
      modalNote: "Pre-qualifies homeowners by budget before you ever pick up the phone."
    },
    {
      id: "02",
      title: "Sub-1.5s Mobile Flake Showroom",
      hook: "Showcase flake, quartz & metallic work with zero lag.",
      body: "Homeowners browse floor photos on their phone standing in their garage. If your site takes 6 seconds to load your flake blends, they bounce. Our sites load in under 1.5 seconds.",
      icon: <Zap className="w-8 h-8 text-brand-lime" />,
      tag: "Zero Mobile Lag",
      image: "/portfolio/epoxy/pillar-2-showroom-speed.png",
      imageMobile: "/portfolio/epoxy/pillar-2-showroom-speed-mobile.png",
      imageAlt: "Sub-1.5s Mobile Flake Showroom and PageSpeed 98/100 Core Web Vitals audit",
      actionText: "Audit Your Speed →",
      actionHref: "/free-audit",
      modalNote: "Certified top 1% Core Web Vitals score keeps high-ticket buyers from bouncing."
    },
    {
      id: "03",
      title: "Google Map Pack #1 Domination",
      hook: "Be the first shop homeowners call on Google Maps.",
      body: "Over 80% of garage floor jobs go to the top 3 spots on Google Maps. We optimize your Google Business Profile and local geo-pins so your phone rings first in your county.",
      icon: <MapPin className="w-8 h-8 text-brand-lime" />,
      tag: "Top 3 Google 3-Pack",
      image: "/portfolio/epoxy/geogrid-la-ranking.png",
      imageMobile: "/portfolio/epoxy/geogrid-la-ranking-mobile.png",
      imageAlt: "Local Falcon Google Map Pack Geo-Grid showing #1 clean sweep rankings across metro",
      actionText: "See Verified Proof →",
      actionHref: "#portfolio",
      modalNote: "Clean sweep #1 ranking in Local Falcon Map Pack across the entire county."
    },
  ];

  return (
    <section id="the-system" className="py-16 sm:py-24 lg:py-28 bg-slate-900 relative overflow-hidden scroll-mt-24 border-t border-white/5">
      {/* Decorative subtle background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-bold tracking-widest uppercase text-xs mb-4">
            Built For Coating Installers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-black tracking-tight mb-4">
            How We Keep Your Grinders Spinning &amp; Crews Booked Solid
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100/70 font-sans leading-relaxed">
            How we turn local homeowners into signed contracts and booked on-site moisture tests — without buying shared Angi junk.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="bg-slate-950/80 rounded-3xl p-5 sm:p-8 md:p-10 text-white shadow-2xl border border-white/10 hover:border-brand-lime/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden backdrop-blur-xl"
            >
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-brand-lime/10 rounded-full blur-2xl group-hover:bg-brand-lime/20 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-brand-lime font-mono">
                    Pillar {pillar.id}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-black text-white mb-2 sm:mb-3 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-brand-lime font-bold text-xs sm:text-sm mb-3 sm:mb-4 font-sans tracking-wide">
                  {pillar.hook}
                </p>

                <p className="text-blue-100/80 text-sm sm:text-base font-sans leading-relaxed">
                  {pillar.body}
                </p>

                {/* Real Software Screenshot with Mobile-Optimized High-Contrast View */}
                <div 
                  onClick={() => setSelectedPreview(pillar)}
                  className="mt-6 relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl group/preview cursor-pointer transition-all duration-300 hover:border-brand-lime/60 hover:shadow-[0_0_25px_rgba(154,251,22,0.2)]"
                  title="Click to view full high-res preview"
                >
                  {/* MOBILE VIEW (Screens < 640px): Dedicated high-contrast mobile view */}
                  <div className="relative aspect-[4/3] block sm:hidden w-full overflow-hidden bg-slate-950">
                    <Image
                      src={pillar.imageMobile}
                      alt={pillar.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-contain p-1 transition-transform duration-300 group-hover/preview:scale-[1.02]"
                      priority={pillar.id === "01"}
                    />
                  </div>

                  {/* DESKTOP VIEW (Screens >= 640px): Full tight-cropped browser window */}
                  <div className="relative aspect-[16/9] hidden sm:block w-full overflow-hidden bg-slate-950">
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-1 transition-transform duration-500 group-hover/preview:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-2 rounded-xl bg-slate-900/95 text-white text-xs font-bold border border-brand-lime/50 flex items-center gap-1.5 shadow-2xl">
                        <ZoomIn className="w-3.5 h-3.5 text-brand-lime" />
                        Click to Inspect Full View
                      </span>
                    </div>
                  </div>
                  
                  {/* Quick Action Link Footer */}
                  <div className="p-3 bg-slate-950 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-slate-300 flex items-center gap-1.5 group-hover/preview:text-brand-lime transition-colors">
                      <ZoomIn className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                      <span className="sm:hidden">Tap to Enlarge</span>
                      <span className="hidden sm:inline">Inspect Preview</span>
                    </span>
                    <a
                      href={pillar.actionHref}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-lime hover:text-white transition-colors"
                    >
                      <span>{pillar.actionText}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-blue-200/60">
                <span>MultiPro Inbound System</span>
                <span className="text-brand-lime font-bold">{pillar.tag}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Preview Modal — Rendered via React Portal onto document.body */}
      {selectedPreview && mounted && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[99999] bg-slate-950/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto overscroll-contain animate-in fade-in duration-200"
          onClick={() => setSelectedPreview(null)}
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
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-brand-lime block">
                  Pillar {selectedPreview.id} • Live System Preview
                </span>
                <h4 className="text-white text-sm sm:text-base font-bold truncate max-w-[240px] sm:max-w-md">
                  {selectedPreview.title}
                </h4>
              </div>
              <button 
                onClick={() => setSelectedPreview(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-lime hover:text-slate-950 text-white flex items-center justify-center font-bold text-xl transition-all shrink-0 active:scale-95 touch-manipulation"
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>
            
            {/* Scrollable Modal Content */}
            <div className="p-3 sm:p-5 overflow-y-auto flex-1 flex flex-col gap-3 overscroll-contain">
              <div className="bg-slate-950 rounded-xl p-2 sm:p-3 border border-white/10 flex items-center justify-center min-h-[220px]">
                {/* On mobile screens, show the mobile-optimized high-contrast preview */}
                <img 
                  src={selectedPreview.imageMobile || selectedPreview.image} 
                  alt={`${selectedPreview.title} Full Preview`} 
                  className="w-full h-auto max-h-[58dvh] sm:hidden object-contain rounded-lg shadow-md mx-auto block"
                />
                {/* On desktop screens, show the full browser window */}
                <img 
                  src={selectedPreview.image} 
                  alt={`${selectedPreview.title} Full Preview`} 
                  className="w-full h-auto max-h-[62vh] hidden sm:block object-contain rounded-lg shadow-md mx-auto"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-brand-lime/30 text-brand-lime text-xs sm:text-sm font-medium flex items-center gap-2">
                <span>💡</span>
                <span>{selectedPreview.modalNote}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-5 border-t border-white/10 bg-slate-900/95 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-slate-400 text-xs text-center sm:text-left">
                Included with every MultiPro contractor growth system.
              </p>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                {selectedPreview.actionHref.startsWith('#') ? (
                  <a
                    href={selectedPreview.actionHref}
                    onClick={() => setSelectedPreview(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-lime text-[#1A365D] font-black text-xs uppercase tracking-wider text-center hover:shadow-[0_0_20px_rgba(154,251,22,0.5)] transition-all shrink-0 select-none touch-manipulation flex items-center justify-center gap-1.5"
                  >
                    <span>{selectedPreview.actionText}</span>
                  </a>
                ) : (
                  <Link
                    href={selectedPreview.actionHref}
                    onClick={() => setSelectedPreview(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-lime text-[#1A365D] font-black text-xs uppercase tracking-wider text-center hover:shadow-[0_0_20px_rgba(154,251,22,0.5)] transition-all shrink-0 select-none touch-manipulation flex items-center justify-center gap-1.5"
                  >
                    <span>{selectedPreview.actionText}</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
