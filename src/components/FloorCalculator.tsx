'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface SpaceOption {
  id: string;
  name: string;
  subtext: string;
  sqft: number;
}

interface CoatingSystem {
  id: string;
  name: string;
  description: string;
  pricePerSqFtLow: number;
  pricePerSqFtHigh: number;
  popular?: boolean;
}

export default function FloorCalculator() {
  const spaces: SpaceOption[] = [
    { id: '1-car', name: '1-Car Garage', subtext: '~250 sq ft', sqft: 250 },
    { id: '2-car', name: '2-Car Garage', subtext: '~450 sq ft', sqft: 450 },
    { id: '3-car', name: '3-Car Garage', subtext: '~650 sq ft', sqft: 650 },
    { id: 'commercial', name: 'Commercial / Basement', subtext: '1,000+ sq ft', sqft: 1000 },
  ];

  const systems: CoatingSystem[] = [
    {
      id: 'flake',
      name: 'Full Broadcast Flake System',
      description: 'Durable multi-layer polyaspartic + decorative vinyl chip blend. Most popular for garages.',
      pricePerSqFtLow: 6.5,
      pricePerSqFtHigh: 8.5,
      popular: true,
    },
    {
      id: 'metallic',
      name: 'Metallic Marble Epoxy',
      description: 'High-gloss designer showroom finish with 3D pearlescent swirls.',
      pricePerSqFtLow: 9.0,
      pricePerSqFtHigh: 12.5,
    },
    {
      id: 'solid',
      name: 'Solid Color Polyaspartic',
      description: 'Clean industrial high-traction finish. Rapid 1-day cure.',
      pricePerSqFtLow: 5.5,
      pricePerSqFtHigh: 7.0,
    },
    {
      id: 'quartz',
      name: 'Commercial Quartz Double-Broadcast',
      description: 'Extreme impact, chemical, and slip resistance for high-traffic zones.',
      pricePerSqFtLow: 8.5,
      pricePerSqFtHigh: 11.0,
    },
  ];

  const [selectedSpace, setSelectedSpace] = useState<SpaceOption>(spaces[1]); // Default 2-Car
  const [selectedSystem, setSelectedSystem] = useState<CoatingSystem>(systems[0]); // Default Full Flake
  const [needsPrep, setNeedsPrep] = useState<boolean>(false);

  // Prep cost: +$1.00 - $1.50/sqft if heavy crack repair/old coating removal needed
  const prepCostPerSqFtLow = needsPrep ? 1.0 : 0;
  const prepCostPerSqFtHigh = needsPrep ? 1.5 : 0;

  const totalLow = Math.round(selectedSpace.sqft * (selectedSystem.pricePerSqFtLow + prepCostPerSqFtLow));
  const totalHigh = Math.round(selectedSpace.sqft * (selectedSystem.pricePerSqFtHigh + prepCostPerSqFtHigh));

  return (
    <section id="estimator" className="py-24 bg-gradient-to-b from-slate-900 via-[#0a192f] to-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-bold tracking-widest uppercase text-xs mb-6">
            <Calculator className="w-4 h-4" /> Live Interactive Demo
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight mb-6">
            The Instant Floor Price Estimator
          </h2>
          <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed font-sans">
            How we double inbound quote bookings: When homeowners can estimate their floor project in 30 seconds, they stop shopping around and call your team directly.
          </p>
        </div>

        {/* Calculator Widget Container */}
        <div className="max-w-4xl mx-auto bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Step 1: Select Space */}
          <div className="mb-10">
            <label className="block text-sm font-black uppercase tracking-wider text-brand-lime mb-4">
              Step 1: Select Your Space Size
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {spaces.map((space) => {
                const isSelected = selectedSpace.id === space.id;
                return (
                  <button
                    key={space.id}
                    type="button"
                    onClick={() => setSelectedSpace(space)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                      isSelected
                        ? 'border-brand-lime bg-brand-lime/10 shadow-[0_0_20px_rgba(154,251,22,0.2)] ring-2 ring-brand-lime/40'
                        : 'border-white/10 bg-slate-900/60 hover:border-white/30'
                    }`}
                  >
                    <div className="font-bold text-white text-base sm:text-lg">{space.name}</div>
                    <div className="text-xs text-blue-200/60 mt-1">{space.subtext}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Coating Finish */}
          <div className="mb-10">
            <label className="block text-sm font-black uppercase tracking-wider text-brand-lime mb-4">
              Step 2: Choose Coating System & Finish
            </label>
            <div className="grid sm:grid-cols-2 gap-4">
              {systems.map((system) => {
                const isSelected = selectedSystem.id === system.id;
                return (
                  <button
                    key={system.id}
                    type="button"
                    onClick={() => setSelectedSystem(system)}
                    className={`p-5 rounded-2xl border text-left relative transition-all duration-200 ${
                      isSelected
                        ? 'border-brand-lime bg-brand-lime/10 shadow-[0_0_20px_rgba(154,251,22,0.2)] ring-2 ring-brand-lime/40'
                        : 'border-white/10 bg-slate-900/60 hover:border-white/30'
                    }`}
                  >
                    {system.popular && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-brand-lime text-slate-950 font-black text-[10px] uppercase tracking-wider">
                        Most Popular
                      </span>
                    )}
                    <div className="font-bold text-white text-base sm:text-lg flex items-center gap-2">
                      {system.name}
                    </div>
                    <p className="text-xs text-blue-200/70 mt-2 leading-relaxed">
                      {system.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Concrete Condition Checkbox */}
          <div className="mb-10 p-5 rounded-2xl bg-slate-900/50 border border-white/10 flex items-center justify-between gap-4">
            <div>
              <div className="font-bold text-white text-sm sm:text-base">Existing Coating Removal or Crack Repairs Required?</div>
              <div className="text-xs text-blue-200/60 mt-0.5">Heavy diamond diamond-grinding & crack mending prep</div>
            </div>
            <button
              type="button"
              onClick={() => setNeedsPrep(!needsPrep)}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
                needsPrep ? 'bg-brand-lime' : 'bg-slate-700'
              }`}
            >
              <div
                className={`bg-slate-900 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                  needsPrep ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Live Estimate Result Display */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-brand-blue to-slate-950 border border-brand-lime/40 shadow-inner">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-brand-lime font-black mb-1">
                  Estimated Project Investment Range
                </div>
                <div className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
                  ${totalLow.toLocaleString()} – ${totalHigh.toLocaleString()}*
                </div>
                <div className="text-xs text-blue-200/60 mt-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime" /> Based on {selectedSpace.sqft} sq ft • {selectedSystem.name}
                </div>
              </div>

              <Link
                href="/contact#audit-form"
                prefetch={false}
                className="w-full md:w-auto px-8 py-4 rounded-xl bg-brand-lime text-slate-950 font-black text-base sm:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(154,251,22,0.4)] flex items-center justify-center gap-2"
              >
                <span>Get This On Your Site</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Contractor Explanation Note */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-3 text-xs sm:text-sm text-blue-200/80 leading-relaxed">
            <Sparkles className="w-5 h-5 text-brand-lime flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Why this prints jobs:</strong> High-ticket homeowners hate waiting 3 days for a callback just to find out a ballpark price. When your website provides instant interactive transparency, you capture the address and contact info before they even look at a competitor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
