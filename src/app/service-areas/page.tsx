import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AutoLinker from '@/components/AutoLinker';
import JsonLd from '@/components/JsonLd';
import { MapPin, ChevronRight, Star, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Service Areas | Local SEO for Movers | Multipro Digital',
  description: 'Specialized movers marketing and local SEO services across the USA. See the cities where we help moving companies dominate Google Maps.',
};

const locationsHubSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "url": "https://www.multiprodigital.com/service-areas/orlando-movers-marketing"
    }
  ]
};

export default function LocationsPage() {
  const locations = [
    {
      city: "Orlando",
      state: "FL",
      slug: "orlando-movers-marketing",
      description: "Dominating Central Florida local search for residential and commercial movers.",
      rating: 4.9
    }
    // More cities will be added here
  ];

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={locationsHubSchema} />
      
      {/* Header Space */}
      <div className="h-24 bg-[#0b1f38]" />

      {/* Hero Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-black text-brand-blue mb-6 leading-tight">
              Our <span className="text-brand-blue/60 italic">Service Areas</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-sans border-l-4 border-brand-lime pl-6">
              <AutoLinker>We provide specialized local SEO for movers across the United States. Our mission is to help moving companies in every major metro area stop paying for shared leads and start owning their local market.</AutoLinker>
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc, i) => (
              <Link 
                key={i} 
                href={`/service-areas/${loc.slug}`}

                className="group relative bg-white p-8 rounded-3xl border border-slate-200 hover:border-brand-lime transition-all duration-500 hover:shadow-2xl hover:shadow-brand-lime/10"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-brand-lime/20 transition-colors">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div className="flex items-center gap-1 text-orange-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    {loc.rating}
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif font-black text-brand-blue mb-4 group-hover:translate-x-2 transition-transform">
                  {loc.city}, {loc.state}
                </h3>
                <p className="text-slate-600 font-sans leading-relaxed mb-8">
                  {loc.description}
                </p>
                
                <div className="flex items-center gap-2 text-brand-blue font-black uppercase tracking-widest text-sm">
                  View Market Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/5 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Link>
            ))}

            {/* Coming Soon Placeholder */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-dashed border-slate-300 flex flex-col justify-center items-center text-center opacity-60">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-slate-400" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-500">More Cities Coming</h3>
              <p className="text-sm text-slate-400 mt-2">Miami • Tampa • Houston • Dallas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0b1f38] relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-lime/5 opacity-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-8">
            Don't See Your City?
          </h2>
          <p className="text-xl text-blue-100/60 mb-12">
            We only partner with one mover per market to guarantee results. Check if your service area is still available.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-10 py-5 bg-brand-lime text-[#1A365D] font-black rounded-2xl text-xl hover:scale-105 transition-transform"
          >
            Check Availability ⟶
          </Link>
        </div>
      </section>
    </main>
  );
}

// Helper to fix the missing TrendingUp import in the placeholder
import { TrendingUp } from 'lucide-react';
