import React from 'react';
import Link from 'next/link';
import { Check, X, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ComparisonTable() {
  const comparisonData = [
    {
      feature: 'Industry Specialization',
      generic: 'Works with anyone (dentists, plumbers)',
      multipro: 'Epoxy & Concrete Coatings Only',
    },
    {
      feature: 'Lead Exclusivity',
      generic: 'Sells shared leads to competitors',
      multipro: '100% Exclusive Inbound Calls',
    },
    {
      feature: 'Instant Floor Calculator',
      generic: 'Generic contact form',
      multipro: 'Custom Interactive Pricing Widget',
    },
    {
      feature: 'Mobile Speed Score',
      generic: '30–50 PageSpeed (Slow WordPress)',
      multipro: '90+ PageSpeed (Sub-1.5s Clean Code)',
    },
    {
      feature: 'Search & AI Visibility',
      generic: 'Outdated SEO (Basic keywords on slow WordPress)',
      multipro: 'Google Maps + AI Overviews & ChatGPT Ready',
    },
    {
      feature: 'Territory Lock',
      generic: 'Works with multiple shops in your town',
      multipro: 'Strictly 1 Contractor Per City',
    },
    {
      feature: 'Contract Terms',
      generic: '6–12 month lock-in contracts',
      multipro: 'Month-to-Month (No Hostage Retainers)',
    },
  ];

  return (
    <section id="proof" className="py-24 bg-slate-900 relative overflow-hidden text-white">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-bold tracking-widest uppercase text-xs mb-4">
            <ShieldCheck className="w-4 h-4" /> Why Choose MultiPro Digital
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight mb-4 leading-tight">
            Generic Agencies vs.{' '}
            <span className="text-brand-lime block sm:inline">MultiPro Digital</span>
          </h2>
          <p className="text-base sm:text-lg text-blue-100/70 font-sans leading-relaxed">
            Stop paying generalists who treat floor coatings like standard home remodeling. We engineer custom growth systems built exclusively for coating pros.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="py-5 px-6 sm:px-8 text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                  Feature
                </th>
                <th className="py-5 px-6 sm:px-8 text-sm sm:text-base font-bold text-slate-400 uppercase tracking-wider">
                  Generic Marketing Agencies
                </th>
                <th className="py-5 px-6 sm:px-8 text-sm sm:text-base font-bold text-brand-lime uppercase tracking-wider bg-brand-lime/10 border-l border-r border-brand-lime/20">
                  MultiPro Digital
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-sans">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-5 px-6 sm:px-8 font-bold text-white text-sm sm:text-base">
                    {row.feature}
                  </td>
                  <td className="py-5 px-6 sm:px-8 text-slate-400 text-sm sm:text-base flex-1">
                    <div className="flex items-center gap-2.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{row.generic}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 sm:px-8 font-extrabold text-white text-sm sm:text-base bg-brand-lime/[0.06] border-l border-r border-brand-lime/20">
                    <div className="flex items-center gap-2.5 text-brand-lime">
                      <Check className="w-5 h-5 text-brand-lime shrink-0 stroke-[3]" />
                      <span className="text-white font-bold">{row.multipro}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Call to action below table */}
        <div className="mt-12 text-center">
          <Link
            href="/free-audit"
            prefetch={false}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-lime text-slate-950 font-black text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(154,251,22,0.4)] group select-none"
          >
            <span>Lock In Your City&apos;s Territory</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="text-xs text-blue-200/60 mt-3 font-sans">
            🔒 Strictly 1 contractor per city. Check if your territory is still open.
          </p>
        </div>
      </div>
    </section>
  );
}
