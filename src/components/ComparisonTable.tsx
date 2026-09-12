import React from 'react';
import Link from 'next/link';
import { Check, X, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ComparisonTable() {
  const comparisonData = [
    {
      feature: 'Industry Focus',
      generic: 'Works with anyone (plumbers, dentists, roofers)',
      multipro: 'Epoxy, Polyaspartic & Garage Coatings ONLY',
    },
    {
      feature: 'Who Gets The Leads?',
      generic: 'Blasts the same lead to 4 competitors on Angi',
      multipro: '100% Exclusive To Your Shop (Zero Shared Leads)',
    },
    {
      feature: 'Instant Pricing Tool',
      generic: 'Boring "Contact Us" form homeowners ignore',
      multipro: 'Interactive Sq-Ft Estimator (Captures Phone #s)',
    },
    {
      feature: 'Mobile Load Speed',
      generic: '5–8 second lag on phones (Slow WordPress)',
      multipro: 'Sub-1.5s instant load (Clean, modern code)',
    },
    {
      feature: 'Local Google Ranking',
      generic: 'Outdated SEO & basic keyword fluff',
      multipro: '#1 Google Map Pack + Siri & AI Search',
    },
    {
      feature: 'Working With Your Competitors?',
      generic: 'Takes money from anyone down the street',
      multipro: 'Strictly 1 Coating Installer Per City (Market Locked)',
    },
    {
      feature: 'Contract Jail',
      generic: '6–12 month lock-in contracts even if phone is dead',
      multipro: 'Month-to-Month (We earn your business every 30 days)',
    },
  ];

  return (
    <section id="proof" className="py-16 sm:py-20 md:py-24 bg-slate-900 relative overflow-hidden text-white border-t border-white/5">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-bold tracking-widest uppercase text-xs mb-4">
            <ShieldCheck className="w-4 h-4" /> Why Choose MultiPro Digital
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight mb-4 leading-tight">
            Generic Agencies vs.{' '}
            <span className="text-brand-lime block sm:inline">MultiPro Digital</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-blue-100/70 font-sans leading-relaxed">
            Stop paying generalist agencies who don&apos;t know the difference between diamond-grinding concrete and mopping a floor. We build exclusively for coating pros.
          </p>
        </div>

        {/* Single Responsive 3-Column Decision Table (No DOM Duplication) */}
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="py-5 px-6 sm:px-8 text-sm sm:text-base font-bold text-white uppercase tracking-wider w-1/3">
                  Feature
                </th>
                <th className="py-5 px-6 sm:px-8 text-sm sm:text-base font-bold text-slate-400 uppercase tracking-wider w-1/3">
                  Generic Marketing Agencies
                </th>
                <th className="py-5 px-6 sm:px-8 text-sm sm:text-base font-bold text-brand-lime uppercase tracking-wider bg-brand-lime/10 border-l border-r border-brand-lime/20 w-1/3">
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
                  <td className="py-5 px-6 sm:px-8 text-slate-400 text-sm sm:text-base">
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
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/free-audit"
            prefetch={false}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-lime text-slate-950 font-black text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(154,251,22,0.4)] group select-none"
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
