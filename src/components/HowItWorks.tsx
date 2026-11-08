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

function PillarMiniEstimator({ onInspectPreview }: { onInspectPreview: () => void }) {
  const [size, setSize] = useState<'1-car' | '2-car' | '3-car' | 'commercial'>('3-car');
  const [finish, setFinish] = useState<'flake' | 'metallic' | 'solid'>('flake');

  const sizes = [
    { id: '1-car', name: '1-Car', sub: '~250 sq ft', sqft: 250 },
    { id: '2-car', name: '2-Car', sub: '~450 sq ft', sqft: 450 },
    { id: '3-car', name: '3-Car', sub: '~650 sq ft', sqft: 650 },
    { id: 'commercial', name: 'Commercial', sub: '1,000+ sq ft', sqft: 1000 },
  ] as const;

  const finishes = [
    { id: 'flake', name: 'Full Flake', low: 8.0, high: 12.0, tag: 'Most Popular' },
    { id: 'metallic', name: 'Metallic', low: 9.0, high: 12.5, tag: 'Showroom' },
    { id: 'solid', name: 'Solid Color', low: 5.5, high: 7.0, tag: 'Clean & Fast' },
  ] as const;

  const currentSize = sizes.find((s) => s.id === size)!;
  const currentFinish = finishes.find((f) => f.id === finish)!;

  const totalLow = Math.max(2500, Math.round(currentSize.sqft * currentFinish.low));
  const totalHigh = Math.max(2500, Math.round(currentSize.sqft * currentFinish.high));

  const formattedLow = '$' + totalLow.toLocaleString();
  const formattedHigh = '$' + totalHigh.toLocaleString();

  return (
    <div 
      className="mt-6 relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl transition-all duration-300 hover:border-brand-lime/50"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top Browser Header Mockup */}
      <div className="px-3.5 py-2.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-[10px] sm:text-xs text-slate-400 truncate max-w-[140px] sm:max-w-none">
            app.multiprodigital.com/demo/estimator
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-[10px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
          <span>LIVE DEMO</span>
        </div>
      </div>

      {/* Main Interactive Controls */}
      <div className="p-3.5 sm:p-5 text-left flex flex-col gap-3.5 bg-slate-950/95">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-lime" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-tight">Instant Sq-Ft Estimator</span>
          </div>
          <span className="text-[10px] font-mono text-brand-lime font-bold bg-brand-lime/10 px-2 py-0.5 rounded border border-brand-lime/20">
            Captures Phone #
          </span>
        </div>

        {/* Step 1: Size Selector */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-brand-lime">
              Step 1: Size
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              {currentSize.name} {currentSize.id !== 'commercial' ? 'Garage' : ''} ({currentSize.sub})
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {sizes.map((s) => {
              const active = size === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSize(s.id);
                  }}
                  className={`p-2 rounded-xl text-left sm:text-center transition-all border ${
                    active
                      ? 'border-brand-lime bg-brand-lime/20 text-white font-bold ring-1 ring-brand-lime/50 shadow-[0_0_12px_rgba(154,251,22,0.2)]'
                      : 'border-white/10 bg-slate-900/80 text-slate-300 hover:border-white/30 hover:bg-slate-900'
                  }`}
                >
                  <div className="text-[11px] sm:text-xs font-bold leading-tight">{s.name}</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">{s.sub}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Finish Selector */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-brand-lime">
              Step 2: Finish
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              {currentFinish.name} ({currentFinish.tag})
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {finishes.map((f) => {
              const active = finish === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFinish(f.id);
                  }}
                  className={`p-2 rounded-xl text-center transition-all border ${
                    active
                      ? 'border-brand-lime bg-brand-lime/20 text-white font-bold ring-1 ring-brand-lime/50 shadow-[0_0_12px_rgba(154,251,22,0.2)]'
                      : 'border-white/10 bg-slate-900/80 text-slate-300 hover:border-white/30 hover:bg-slate-900'
                  }`}
                >
                  <div className="text-[11px] sm:text-xs font-bold leading-tight">{f.name}</div>
                  <div className="text-[9px] text-brand-lime font-medium mt-0.5">{f.tag}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Dynamic Price Display */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-brand-blue/30 border border-brand-lime/30 shadow-inner">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-brand-lime font-mono font-bold mb-1">
            <span>Step 3: Instant Estimated Price</span>
            <span className="text-slate-400 font-mono text-[9px]">~{currentSize.sqft} sq ft</span>
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-black text-white tracking-tight">
            {formattedLow} - {formattedHigh}*
          </div>
          <div className="text-[11px] text-blue-200/70 mt-1 flex items-center gap-1.5">
            <span className="text-brand-lime font-bold">✓</span>
            <span>Full Broadcast Polyaspartic • 1-Day Install</span>
          </div>
        </div>

        {/* Step 4: Homeowner Lock-in Action */}
        <div>
          <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1.5 flex items-center justify-between">
            <span>Step 4: Lock In Price &amp; On-Site Moisture Test</span>
            <span className="text-brand-lime text-[10px] font-mono">+ Instant Alert</span>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 bg-slate-900 border border-white/15 rounded-xl px-3 py-2 text-xs text-slate-300 font-mono flex items-center truncate">
              <span className="mr-1.5">📞</span>
              <span>(214) 839-4912</span>
            </div>
            <a
              href="#estimator"
              className="px-3 sm:px-4 py-2 rounded-xl bg-brand-lime text-slate-950 font-black text-xs uppercase tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center gap-1 shrink-0 shadow-[0_0_15px_rgba(154,251,22,0.35)]"
            >
              <span>Lock In Price →</span>
            </a>
          </div>
        </div>

        {/* Conversion Metrics */}
        <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-white/10 text-center">
          <div className="p-1.5 rounded-lg bg-white/5">
            <span className="text-brand-lime font-bold text-xs sm:text-sm block font-mono">24.8%</span>
            <span className="text-[9px] text-slate-400">Lead Conv.</span>
          </div>
          <div className="p-1.5 rounded-lg bg-white/5">
            <span className="text-brand-lime font-bold text-xs sm:text-sm block font-mono">100%</span>
            <span className="text-[9px] text-slate-400">Direct Calls</span>
          </div>
          <div className="p-1.5 rounded-lg bg-white/5">
            <span className="text-brand-lime font-bold text-xs sm:text-sm block font-mono">$5,000+</span>
            <span className="text-[9px] text-slate-400">Avg Job Size</span>
          </div>
        </div>
      </div>

      {/* Footer Strip */}
      <div className="p-3 bg-slate-950 border-t border-white/10 flex items-center justify-between">
        <button
          type="button"
          onClick={onInspectPreview}
          className="text-[11px] font-mono font-bold text-slate-300 flex items-center gap-1.5 hover:text-brand-lime transition-colors"
          title="Click to view full screenshot graphic"
        >
          <ZoomIn className="w-3.5 h-3.5 text-brand-lime shrink-0" />
          <span>Inspect Graphic</span>
        </button>
        <a
          href="#estimator"
          className="inline-flex items-center gap-1 text-xs font-bold text-brand-lime hover:text-white transition-colors"
        >
          <span>Try Full 4-Step Estimator ↓</span>
        </a>
      </div>
    </div>
  );
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

                {/* Pillar 01 is an Interactive Live Mini-Estimator; Pillars 02 & 03 retain inspectable previews */}
                {pillar.id === "01" ? (
                  <PillarMiniEstimator onInspectPreview={() => setSelectedPreview(pillar)} />
                ) : (
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
                )}
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
