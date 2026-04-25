'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AutoLinker from '@/components/AutoLinker';
import JsonLd from '@/components/JsonLd';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import { MapPin, Star, Shield, TrendingUp, ChevronRight, Phone } from 'lucide-react';

const locationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Multipro Digital - Orlando Movers Marketing",
  "image": "https://www.multiprodigital.com/blog-cover-movers.png",
  "url": "https://www.multiprodigital.com/service-areas/orlando-movers-marketing",
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={locationSchema} />
      
      {/* 1. HERO (Dark/Navy) */}
      <section className="pt-32 pb-20 bg-[#0b1f38] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-brand-lime/80 text-sm font-black uppercase tracking-widest mb-8">
              <Link href="/" className="hover:text-brand-lime">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/service-areas" className="text-white hover:text-brand-lime">Service Areas</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-brand-lime">Orlando</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-lime/30 bg-brand-lime/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-ping" />
              <span className="text-brand-lime text-xs font-bold tracking-widest uppercase">#1 Orlando Mover Marketing Agency</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white leading-tight mb-6">
              The #1 Orlando <br />
              <span className="text-brand-lime">Movers Marketing Agency</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80 leading-relaxed mb-10 border-l-4 border-brand-lime pl-6">
              <AutoLinker>We help Orlando moving companies dominate the Google Map Pack and stop fighting over shared leads. If you're a mover in Central Florida, we build the engine that fills your trucks.</AutoLinker>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Link 
                href="/contact#audit-form"
                className="relative group overflow-hidden px-8 py-4 rounded-xl bg-brand-lime text-[#1A365D] font-black text-lg transition-all duration-300 transform hover:scale-[1.05] hover:-rotate-1 active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(154,251,22,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Free Website & GBP Audit ⟶
                </span>
                <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-out" />
              </Link>
            </div>

            {mounted && (
              <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-[#0f172a]/50 backdrop-blur-sm border border-white/10 w-fit shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="flex -space-x-4">
                  {[
                    { src: "/avatars/Adrian-owner.jpg.webp", alt: "Adrian - Moving Company Partner" },
                    { src: "/avatars/David-Owner.jpg.webp", alt: "David - 7-Figure Moving Business Owner" },
                    { src: "/avatars/Garret-owner.jpg.webp", alt: "Garret - Professional Mover Marketing Client" },
                    { src: "/avatars/Mountain%20Movers.png", alt: "Mountain Movers Orlando - Logo" },
                    { src: "/avatars/Sunshine%20Movers.png", alt: "Sunshine Movers Florida - Logo" }
                  ].map((avatar, index) => (
                    <div key={index} className="w-12 h-12 rounded-full border-[3px] border-brand-lime bg-slate-800 overflow-hidden relative z-10 transition-transform duration-300 hover:scale-110 hover:z-20">
                      <Image 
                        src={avatar.src} 
                        alt={avatar.alt} 
                        width={48} 
                        height={48} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex text-brand-lime gap-1 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-white font-bold tracking-wide">Over 25+ Happy Moving Clients</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. PORTFOLIO (Pure White) */}
      <Portfolio />

      {/* 3. TESTIMONIALS (Slate-50) */}
      <div className="bg-slate-50">
        <Testimonials />
      </div>

      {/* 4. MAP PACK (Pure White) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-6">
                <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                <span className="text-brand-blue font-black tracking-widest uppercase text-xs">Live Results</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-brand-blue mb-8 leading-tight">
                Dominate the <span className="text-brand-lime italic">Orlando Map Pack</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                <AutoLinker>In Orlando, the "Map Pack" is where 70% of moving leads go. If you aren't in the Top 3, you're giving away jobs to your competitors in Winter Park and Lake Nona. We optimize your profile to ensure you are the first mover homeowners see.</AutoLinker>
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "GMB Optimization for Central Florida keywords",
                  "Local Citation building for Orlando suburbs",
                  "Review strategy that builds massive trust",
                  "Geo-tagged content that Google loves"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-blue font-bold">
                    <div className="w-6 h-6 rounded-full bg-brand-lime/20 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-brand-blue" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact#audit-form"
                className="inline-flex items-center gap-2 text-brand-blue font-black hover:text-brand-lime transition-colors group"
              >
                See Your Current Ranking <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-900/5 aspect-[4/5] lg:aspect-auto lg:h-[600px]">
                <img 
                  src="/images/orlando-maps-mockup.png" 
                  alt="Orlando Movers Google Maps Local Pack Dominance Rankings Mockup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-lime/20 rounded-full blur-2xl" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEIGHBORHOODS (Dark Navy Contrast) */}
      <section className="py-24 bg-[#0b1f38] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-6">
              Sending Your Crews to Every <span className="text-brand-lime italic">Corner of Orlando</span>
            </h2>
            <p className="text-xl text-blue-100/80">
              We capture high-intent leads in the suburbs where your crews want to work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Winter Park", desc: "Targeting high-ticket residential estates and luxury relocations." },
              { name: "Lake Nona", desc: "Capturing the rapid expansion of medical city and family growth." },
              { name: "Dr. Phillips", desc: "Dominating upscale commercial moves and high-revenue accounts." },
              { name: "Downtown Orlando", desc: "High-volume corporate relocation and premium condo logistics." },
              { name: "Windermere", desc: "Elite estate moving leads with high-intent search profiles." },
              { name: "Maitland", desc: "Stable suburban family moves to keep your local trucks full." },
              { name: "Altamonte Springs", desc: "High-density residential leads for consistent weekly volume." },
              { name: "Kissimmee", desc: "Tourist-district commercial logistics and large-scale moves." }
            ].map((area, i) => (
              <div key={i} className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-brand-lime/50 transition-all group hover:shadow-2xl">
                <div className="w-10 h-10 bg-brand-lime/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-lime/20 transition-colors">
                  <MapPin className="w-5 h-5 text-brand-lime" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{area.name}</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LANDMARKS (Pure White) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-blue mb-6">
                Strategic Visibility Where Your <span className="text-brand-lime italic">Customers Live</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We position your brand around Orlando's most valuable hubs to ensure you're the first mover owners see when planning a relocation.
              </p>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-3 text-brand-blue font-bold mb-2">
                  <div className="w-2 h-2 rounded-full bg-brand-lime animate-ping" />
                  Owner Insight:
                </div>
                <p className="text-sm text-slate-500 italic">
                  Local authority isn't just SEO—it's building the trust needed to book large-scale, high-profit moves without haggling on price.
                </p>
              </div>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
              {[
                { name: "Lake Eola Park", area: "Downtown Orlando", icon: "📍" },
                { name: "Amway Center", area: "West Church St", icon: "🏀" },
                { name: "Dr. Phillips Center", area: "Performing Arts", icon: "🎭" },
                { name: "UCF Main Campus", area: "East Orlando", icon: "🎓" },
                { name: "ICON Park", area: "International Drive", icon: "🎡" },
                { name: "Harry P. Leu Gardens", area: "North Orlando", icon: "🌿" }
              ].map((landmark, i) => (
                <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-lime/30 transition-all hover:bg-white hover:shadow-lg group">
                  <div className="text-2xl group-hover:scale-125 transition-transform">{landmark.icon}</div>
                  <div>
                    <div className="font-bold text-brand-blue">{landmark.name}</div>
                    <div className="text-xs text-slate-400 font-black uppercase tracking-widest">{landmark.area}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA (Branded Dark) */}
      <CTA />

      {/* 8. FAQ (Subtle Slate-50) */}
      <div className="bg-slate-50">
        <FAQ />
      </div>
    </main>
  );
}
