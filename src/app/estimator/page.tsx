import type { Metadata } from 'next';
import Link from 'next/link';
import FloorCalculator from '@/components/FloorCalculator';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Instant Sq-Ft Concrete Coating Estimator • Live Demo | MultiPro Digital',
  description:
    'Test drive our live instant garage floor pricing estimator. See how concrete coating and epoxy contractors capture exclusive high-ticket polyaspartic leads.',
  alternates: {
    canonical: 'https://www.multiprodigital.com/estimator',
  },
  openGraph: {
    title: 'Instant Sq-Ft Floor Estimator • Live Contractor Demo',
    description:
      'Interactive pricing calculator for epoxy and polyaspartic garage floor contractors. Captures exclusive homeowner leads.',
    url: 'https://www.multiprodigital.com/estimator',
    siteName: 'MultiPro Digital',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.multiprodigital.com/portfolio/epoxy/pillar-1-estimator.png',
        width: 1200,
        height: 630,
        alt: 'MultiPro Digital Instant Sq-Ft Floor Estimator Live Demo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instant Sq-Ft Floor Estimator • Live Contractor Demo',
    description:
      'Interactive pricing calculator for epoxy and polyaspartic garage floor contractors. Captures exclusive homeowner leads.',
    images: ['https://www.multiprodigital.com/portfolio/epoxy/pillar-1-estimator.png'],
  },
};

export default function EstimatorPage() {
  return (
    <div className="bg-[#0b1f38] min-h-screen pt-28 sm:pt-36 pb-20 relative overflow-hidden">
      {/* Background Ambience Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs sm:text-sm text-blue-200/60 font-sans">
          <Link href="/" className="hover:text-brand-lime transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white font-medium">Instant Estimator Demo</span>
        </nav>

        {/* Focused Hero Header for Social / Instagram Traffic */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-mono font-bold tracking-widest uppercase text-[11px] sm:text-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
            Live Contractor Engine Demo
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight leading-tight mb-4">
            Test Drive The Instant Sq-Ft Floor Estimator
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-blue-100/80 font-sans leading-relaxed">
            See how our custom contractor websites stop price-shoppers, pre-qualify serious homeowners by budget, and lock in booked on-site moisture tests before they call your competitors.
          </p>
        </div>

        {/* The Live Interactive Floor Estimator */}
        <div className="mb-14">
          <FloorCalculator />
        </div>

        {/* Contractor Conversion Section Below Estimator */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-brand-lime/30 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-black uppercase tracking-wider text-brand-lime block mb-1">
                For Concrete Coating &amp; Epoxy Shop Owners
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-white tracking-tight">
                Want This Exact Estimator On Your Website?
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/70 mt-2 max-w-xl leading-relaxed">
                We build sub-1.5s custom websites for coating contractors with this built-in pricing engine, rank you in the Google Map Pack 3-Pack, and enforce a strict 1-contractor territory lockout in your county.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                  <span>Stops $400 DIY tire-kickers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                  <span>Captures homeowner phone &amp; garage size</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                  <span>100% Exclusive — zero shared Angi junk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                  <span>Strict 1-contractor territory lockout</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto flex flex-col gap-2.5">
              <Link
                href="/free-audit"
                className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-brand-lime text-[#1A365D] font-black text-xs sm:text-sm uppercase tracking-wider text-center hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(154,251,22,0.4)] flex items-center justify-center gap-2"
              >
                <span>Claim Your Territory &rarr;</span>
              </Link>
              <Link
                href="/contact"
                className="w-full md:w-auto px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider text-center transition-colors"
              >
                <span>Talk To An Expert</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
