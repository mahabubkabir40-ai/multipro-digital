import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AutoLinker from '@/components/AutoLinker';
import JsonLd from '@/components/JsonLd';
import { MapPin, Star, Shield, TrendingUp, ChevronRight, Phone } from 'lucide-react';

export const metadata = {
  title: 'Orlando Movers Marketing & Local SEO | Multipro Digital',
  description: 'Dominate the Orlando moving market. We help Orlando moving companies hit the Top 3 on Google Maps and get exclusive local leads.',
};

const locationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Multipro Digital - Orlando Movers Marketing",
  "image": "https://www.multiprodigital.com/blog-cover-movers.png",
  "url": "https://www.multiprodigital.com/locations/orlando",
  "telephone": "",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Orlando",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.5383,
    "longitude": -81.3792
  },
  "areaServed": {
    "@type": "City",
    "name": "Orlando"
  }
};

export default function OrlandoLocationPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={locationSchema} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0b1f38] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-brand-lime/80 text-sm font-black uppercase tracking-widest mb-8">
              <Link href="/" className="hover:text-brand-lime">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Locations</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-brand-lime">Orlando</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight mb-6">
              The #1 Orlando <span className="text-brand-lime italic">Movers Marketing</span> Agency
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed mb-10 border-l-4 border-brand-lime pl-6">
              <AutoLinker>We help Orlando moving companies dominate the Google Map Pack and stop fighting over shared leads. If you're a mover in Central Florida, we build the engine that fills your trucks.</AutoLinker>
            </p>
            <Link 
              href="/contact#audit-form"
              className="inline-flex relative group overflow-hidden px-8 py-4 rounded-xl bg-brand-lime text-[#1A365D] font-black text-lg transition-all duration-300 transform hover:scale-[1.05] hover:-rotate-1 active:scale-95 flex items-center justify-center gap-2"
            >
              Get Your Free Orlando Market Audit ⟶
            </Link>
          </div>
        </div>
      </section>

      {/* Local Authority Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-black text-brand-blue mb-8">
                Why Orlando Movers Trust Multipro Digital
              </h2>
              <div className="space-y-8">
                {[
                  { icon: MapPin, title: "Deep Orlando Local SEO", desc: "We don't just target 'Orlando'. We optimize for Winter Park, Lake Nona, Dr. Phillips, and every neighborhood your trucks serve." },
                  { icon: TrendingUp, title: "Exclusive Orlando Leads", desc: "Stop paying for leads shared with 5 other movers. We generate direct, high-intent calls from Orlando homeowners." },
                  { icon: Shield, title: "Guaranteed Map Pack Strategy", desc: "Our proprietary system is built specifically to move you into the Top 3 for the most competitive Orlando moving keywords." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-brand-lime/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-blue mb-2">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed"><AutoLinker>{item.desc}</AutoLinker></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-200 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex text-brand-lime">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <span className="text-brand-blue font-black tracking-widest uppercase text-xs">Certified Success</span>
                </div>
                <p className="text-2xl font-serif italic text-slate-700 leading-relaxed mb-8">
                  "After switching to Multipro, our Orlando calls doubled in 3 months. We're now the #1 mover in our service area and our trucks have never been busier."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200" />
                  <div>
                    <div className="font-bold text-brand-blue">Local Orlando Client</div>
                    <div className="text-sm text-slate-500">Residential & Commercial Moving</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 right-0 w-64 h-64 bg-brand-lime/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0b1f38] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-8">
            Ready to Own the Orlando Market?
          </h2>
          <p className="text-xl text-blue-100/60 mb-12">
            Get a free visibility report and see exactly where you rank against your Orlando competitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="px-10 py-5 bg-brand-lime text-[#1A365D] font-black rounded-2xl text-xl hover:scale-105 transition-transform"
            >
              Get Started ⟶
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
