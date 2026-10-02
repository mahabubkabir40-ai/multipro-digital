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

      {/* Top Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs sm:text-sm text-blue-200/60 font-sans">
          <Link href="/" className="hover:text-brand-lime transition-colors">Home</Link>
          <span>/</span>
          <Link href="/locations" className="hover:text-brand-lime transition-colors">Locations</Link>
          <span>/</span>
          <span className="text-white font-medium">{location.city}, {location.state}</span>
        </nav>

        {/* Territory Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand-lime/40 bg-brand-lime/10 text-brand-lime font-bold tracking-wider uppercase text-xs mb-6 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
          <span>{location.city} Territory: {location.territoryStatus} • Strictly 1 Shop Locked Out</span>
        </div>

        {/* Hero Section */}
        <div className="border-l-4 border-brand-lime pl-4 sm:pl-6 mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
            {location.headline}
          </h1>
          <p className="mt-4 text-slate-300 font-sans text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
            {location.subheadline}
          </p>
        </div>

        {/* Local Market Snapshot Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="bg-[#0c182b] border border-slate-700/60 rounded-2xl p-4 sm:p-5 text-center">
            <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Average Ticket</span>
            <span className="text-lg sm:text-2xl font-black text-brand-lime">{location.avgTicket}</span>
            <span className="block text-[11px] text-slate-400 mt-1">Full Broadcast Flake</span>
          </div>

          <div className="bg-[#0c182b] border border-slate-700/60 rounded-2xl p-4 sm:p-5 text-center">
            <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Sq-Ft Rate Range</span>
            <span className="text-lg sm:text-2xl font-black text-white">{location.sqftRate}</span>
            <span className="block text-[11px] text-slate-400 mt-1">{location.region} Market</span>
          </div>

          <div className="bg-[#0c182b] border border-slate-700/60 rounded-2xl p-4 sm:p-5 text-center">
            <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Typical Project</span>
            <span className="text-sm sm:text-base font-bold text-white line-clamp-1 sm:line-clamp-none">{location.garageType}</span>
            <span className="block text-[11px] text-slate-400 mt-1">Residential &amp; Commercial</span>
          </div>

          <div className="bg-[#0c182b] border border-slate-700/60 rounded-2xl p-4 sm:p-5 text-center">
            <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Territory Policy</span>
            <span className="text-lg sm:text-2xl font-black text-brand-lime">1 Shop Only</span>
            <span className="block text-[11px] text-slate-400 mt-1">Zero Competitor Sharing</span>
          </div>
        </div>

        {/* Local High-Wealth Suburbs We Target (No location symbol) */}
        <div className="bg-[#0c182b]/70 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-16">
          <h2 className="text-xs uppercase tracking-widest font-black text-brand-lime mb-3">
            Suburbs &amp; Service Communities We Lock Out In {location.city}:
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {location.suburbs.map((suburb) => (
              <span
                key={suburb}
                className="bg-[#06101e] border border-slate-700/60 text-slate-200 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg"
              >
                {suburb}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4">
            When homeowners across these communities search Google Maps for commercial polyaspartic coatings or flake garage floors, our system ensures your business appears in the top 3.
          </p>
        </div>

        {/* Regional Concrete & Slab Profile */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
          <div className="bg-[#0c182b] border border-slate-700/60 rounded-3xl p-6 sm:p-8">
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

          <div className="bg-[#0c182b] border border-slate-700/60 rounded-3xl p-6 sm:p-8">
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
              <div key={idx} className="bg-[#0c182b] border border-slate-700/60 rounded-2xl p-6 relative">
                <span className="text-4xl font-black text-brand-lime/20 absolute top-4 right-4">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-serif font-black text-white mb-2 pr-8">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
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

      {/* Bottom Claim Territory Form Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#0c182b] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-slate-700/60">
          <div className="border-l-4 border-brand-lime pl-4 sm:pl-6 mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-white leading-tight">
              Claim the {location.city} Territory Before Your Competitor Does
            </h2>
            <p className="mt-2 text-slate-300 font-sans text-sm sm:text-base max-w-2xl">
              Fill in your shop details below. We&apos;ll record a personalized 60-second video showing your current Google Map Pack rankings, website speed score, and the exact fixes to dominate {location.city}. 100% Free.
            </p>
          </div>

          <CityAuditForm defaultCity={`${location.city}, ${location.state}`} />
        </div>

        {/* Back Link to Hub */}
        <div className="mt-12 text-center">
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
