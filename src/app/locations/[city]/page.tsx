import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { LOCATIONS, ALL_LOCATION_SLUGS } from '@/config/locations';
import Portfolio from '@/components/Portfolio';
import CityAuditForm from './CityAuditForm';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_LOCATION_SLUGS.map((slug) => ({
    city: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const location = LOCATIONS[city];

  if (!location) {
    return {
      title: 'Location Not Found | MultiPro Digital',
    };
  }

  const url = `https://www.multiprodigital.com/locations/${location.slug}`;

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url,
      type: 'website',
      siteName: 'MultiPro Digital',
      images: [
        {
          url: '/logo.png',
          width: 800,
          height: 425,
          alt: `MultiPro Digital - Epoxy Contractor Marketing in ${location.city}`,
        },
      ],
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params;
  const location = LOCATIONS[city];

  if (!location) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `MultiPro Digital - ${location.city} Epoxy Marketing`,
    description: location.metaDescription,
    url: `https://www.multiprodigital.com/locations/${location.slug}`,
    telephone: '+1-888-530-5080',
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: {
        '@type': 'State',
        name: location.stateFullName,
      },
    },
    serviceType: [
      'Epoxy Flooring Contractor Marketing',
      'Google Maps 3-Pack Optimization for Concrete Coating Shops',
      'Instant Garage Floor Estimator Software',
      'Sub-1.5s High-Speed Showroom Websites',
    ],
  };

  return (
    <div className="bg-[#0b1f38] min-h-screen pt-32 md:pt-40 pb-24 relative overflow-hidden text-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background Ambience Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Hero Section Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs sm:text-sm text-blue-200/60 font-sans">
          <Link href="/" className="hover:text-brand-lime transition-colors">Home</Link>
          <span>/</span>
          <Link href="/locations" className="hover:text-brand-lime transition-colors">Locations</Link>
          <span>/</span>
          <span className="text-white font-medium">{location.city}, {location.state}</span>
        </nav>

        {/* 2-COLUMN HERO SECTION: Story & Local Context on Left, Audit Form on Right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          
          {/* Left Column: Narrative, Suburbs & Local Snapshot */}
          <div className="lg:col-span-7">
            {/* Territory Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand-lime/40 bg-brand-lime/10 text-brand-lime font-bold tracking-wider uppercase text-xs mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
              <span>{location.city} Territory: {location.territoryStatus} • Strictly 1 Shop Locked Out</span>
            </div>

            {/* Headline & Subheadline */}
            <div className="border-l-4 border-brand-lime pl-4 sm:pl-6 mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-tight">
                {location.headline}
              </h1>
              <p className="mt-4 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
                {location.subheadline}
              </p>
            </div>

            {/* Local Market Snapshot Cards (Style 1: Unified Brand Lime) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
              <div className="bg-[#0c182b] border border-slate-700/60 rounded-xl p-3 sm:p-4 text-center shadow-lg">
                <span className="block text-[11px] font-mono uppercase text-slate-300 font-bold mb-1 tracking-wider">Average Ticket</span>
                <span className="text-base sm:text-lg font-black text-brand-lime leading-tight">{location.avgTicket}</span>
              </div>
              <div className="bg-[#0c182b] border border-slate-700/60 rounded-xl p-3 sm:p-4 text-center shadow-lg">
                <span className="block text-[11px] font-mono uppercase text-slate-300 font-bold mb-1 tracking-wider">Sq-Ft Rate</span>
                <span className="text-base sm:text-lg font-black text-brand-lime leading-tight">{location.sqftRate}</span>
              </div>
              <div className="bg-[#0c182b] border border-slate-700/60 rounded-xl p-3 sm:p-4 text-center shadow-lg">
                <span className="block text-[11px] font-mono uppercase text-slate-300 font-bold mb-1 tracking-wider">Focus Project</span>
                <span className="text-base sm:text-lg font-black text-brand-lime leading-tight">3-Car Garages</span>
              </div>
              <div className="bg-[#0c182b] border border-slate-700/60 rounded-xl p-3 sm:p-4 text-center shadow-lg">
                <span className="block text-[11px] font-mono uppercase text-slate-300 font-bold mb-1 tracking-wider">Territory</span>
                <span className="text-base sm:text-lg font-black text-brand-lime leading-tight">1 Shop Only</span>
              </div>
            </div>

            {/* Suburbs We Lock Out (Clean badges, no pin emoji) */}
            <div className="bg-[#0c182b]/70 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-md">
              <h2 className="text-xs uppercase tracking-widest font-black text-brand-lime mb-3">
                Suburbs &amp; Service Communities We Lock Out In {location.city}:
              </h2>
              <div className="flex flex-wrap gap-2">
                {location.suburbs.map((suburb) => (
                  <span
                    key={suburb}
                    className="bg-[#06101e] border border-slate-700/60 text-slate-200 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg"
                  >
                    {suburb}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-3 font-sans">
                When homeowners across these communities search Google Maps for commercial coatings, our system ensures your business appears in the top 3.
              </p>
            </div>
          </div>

          {/* Right Column: Hero Form Card */}
          <div id="hero-claim-form" className="lg:col-span-5 w-full scroll-mt-28">
            <div className="bg-[#0c182b] rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-700/60 text-white">
              <div className="border-l-4 border-brand-lime pl-3.5 mb-5">
                <h2 className="text-lg sm:text-xl font-serif font-black text-white leading-tight">
                  Claim the {location.city} Territory
                </h2>
                <p className="mt-1 text-slate-300 font-sans text-xs leading-relaxed">
                  Fill in your shop details below. We&apos;ll record a personalized 60-second video audit showing your Google Map Pack rankings, website speed, and how to dominate {location.city}. 100% Free.
                </p>
              </div>

              <CityAuditForm defaultCity={`${location.city}, ${location.state}`} />
            </div>
          </div>

        </div>

        {/* Regional Concrete & Slab Profile */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-20">
          <div className="bg-[#0c182b] border border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="inline-block px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              Regional Slab &amp; Climate Profile
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-black text-white mb-4">
              Why Concrete in {location.city} Requires Serious Prep
            </h3>
            
            <div className="space-y-4 text-sm sm:text-base text-slate-300 font-sans">
              <div>
                <strong className="text-white block mb-1">The Local Slab Challenge:</strong>
                <p>{location.climateAndSlabProfile.slabChallenge}</p>
              </div>

              <div>
                <strong className="text-white block mb-1">Mandatory Prep Profile:</strong>
                <p>{location.climateAndSlabProfile.prepRequirement}</p>
              </div>

              <div>
                <strong className="text-white block mb-1">Recommended System Specification:</strong>
                <p className="text-brand-lime font-medium">{location.climateAndSlabProfile.coatingRecommendation}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0c182b] border border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="inline-block px-3 py-1 rounded-md bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
              Local Market Friction
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-black text-white mb-4">
              What Is Costing {location.city} Shops \$15K+ Every Month
            </h3>

            <ul className="space-y-3.5 text-sm sm:text-base text-slate-300 font-sans">
              {location.marketPainPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* The 3 Pillars Engineered for this City */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-white mb-3">
              How We Put Your Shop in the Top 3 Across {location.city}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Pure concrete coating focus. Zero shared leads. Strictly 1 partner per market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {location.growthPillars.map((pillar, idx) => (
              <div key={idx} className="bg-[#0c182b] border border-slate-700/60 rounded-2xl p-6 relative shadow-lg">
                <span className="text-4xl font-black text-brand-lime/20 absolute top-4 right-4">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-serif font-black text-white mb-2 pr-8">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Undeniable Proof Section: Real Map Pack Domination & Keyword Wins */}
      <div className="my-16">
        <Portfolio />
      </div>

      {/* Closing CTA & Back Link Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16">
        <div className="bg-[#0c182b] rounded-3xl p-8 sm:p-12 text-center border border-slate-700/60 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-white mb-3">
            Ready to Lock Out Your Competitors in {location.city}?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-sans">
            We partner with strictly one epoxy coating contractor in {location.city}. Check your territory and claim your free audit before another shop locks it down.
          </p>
          <a
            href="#hero-claim-form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-lime text-slate-950 font-black text-sm sm:text-base hover:brightness-105 transition-all shadow-xl select-none"
          >
            Claim {location.city} Territory Above ↑
          </a>
        </div>

        {/* Back Link to Hub */}
        <div className="mt-10 text-center">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-sm text-brand-lime hover:text-white font-bold transition-colors"
          >
            ← View All Available Territory Markets
          </Link>
        </div>
      </div>

    </div>
  );
}
