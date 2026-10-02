import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LOCATIONS } from '@/config/locations';

export const metadata: Metadata = {
  title: 'Exclusive Territories & Service Areas | MultiPro Digital',
  description: 'View active and available territory lockouts for epoxy and concrete coating contractors across the US. Strictly one partner per metro market.',
  alternates: {
    canonical: 'https://www.multiprodigital.com/locations',
  },
};

export default function LocationsHubPage() {
  const locationList = Object.values(LOCATIONS);

  return (
    <div className="bg-[#0b1f38] min-h-screen pt-36 md:pt-44 pb-24 relative overflow-hidden text-white">
      {/* Background Ambience Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="border-l-4 border-brand-lime pl-4 sm:pl-6 mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-lime/10 text-brand-lime font-bold text-xs uppercase tracking-widest mb-3">
            Strictly 1 Contractor Per Market
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
            Territory Availability &amp; City Hubs
          </h1>
          <p className="mt-4 text-slate-300 font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
            We operate on a strict territory lockout model. We will never partner with your local competitors or split leads in the same market. Explore open markets below.
          </p>
        </div>

        {/* Territory Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {locationList.map((loc) => (
            <div
              key={loc.slug}
              className="bg-[#0c182b] border border-slate-700/60 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-brand-lime/60 transition-all duration-300 group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {loc.region}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lime/10 text-brand-lime border border-brand-lime/30 text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                    {loc.territoryStatus}
                  </span>
                </div>

                <h2 className="text-2xl font-serif font-black text-white group-hover:text-brand-lime transition-colors mb-2">
                  {loc.city}, {loc.state}
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 mb-6 font-sans">
                  {loc.subheadline}
                </p>

                <div className="border-t border-slate-800 pt-4 space-y-2 text-xs text-slate-300 mb-6 font-sans">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Avg Project Ticket:</span>
                    <strong className="text-white font-bold">{loc.avgTicket}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sq-Ft Market Rate:</span>
                    <strong className="text-white font-bold">{loc.sqftRate}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Target Garage bays:</span>
                    <strong className="text-brand-lime font-bold">3-Car &amp; 4-Car</strong>
                  </div>
                </div>
              </div>

              <Link
                href={`/locations/${loc.slug}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#06101e] border border-slate-700 group-hover:bg-brand-lime group-hover:text-slate-950 text-white font-bold text-sm transition-all duration-300 select-none shadow-md"
              >
                <span>Inspect {loc.city} Market</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Can't find your city banner */}
        <div className="bg-[#0c182b] border border-slate-700/60 rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-serif font-black text-white mb-2">
            Don&apos;t See Your Metro Area Listed?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            We lock out territories in secondary and regional markets across the US and Canada as well. Request a free 60-second video audit to check if your city is open.
          </p>
          <Link
            href="/free-audit"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-lime text-slate-950 font-black text-sm sm:text-base hover:brightness-105 transition-all shadow-lg select-none"
          >
            Check Your City Territory Availability →
          </Link>
        </div>

      </div>
    </div>
  );
}
