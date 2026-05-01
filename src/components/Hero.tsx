'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-[75vh] md:min-h-[80vh] flex flex-col justify-start lg:justify-center pt-24 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-slate-900">
      {/* 10/10 Premium Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
        {/* VIDEO: Gated by JS to save 38MB bandwidth on mobile */}
        {mounted && !isMobile && (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-50 transform scale-105"
          >
            <source src="/moving-truck.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* STATIC FALLBACK: Optimized for instant mobile LCP */}
        {/* Uses CSS opacity and hardware acceleration instead of expensive mix-blend-overlay */}
        <div className="absolute inset-0 opacity-60 lg:opacity-30">
          <Image 
            src="/blog-cover-movers.png" 
            alt="Premium moving truck background" 
            fill
            className="object-cover"
            priority
            sizes="(max-width: 480px) 390px, (max-width: 1024px) 1024px, 100vw"
            quality={35} // Absolute minimum for mobile LCP speed
          />
        </div>

        {/* Navy Overlay to ensure Emerald & White text pops */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-900" />
        
        {/* Subtle Tech Blueprint Grid Overlay - Hidden on mobile to save paint time */}
        <div className="hidden lg:block absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Animated Glow Orbs - Hidden on mobile to significantly reduce LCP paint lag */}
        <div className="hidden lg:block absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/10 rounded-full blur-[128px] mix-blend-screen" />
        <div className="hidden lg:block absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[128px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl relative">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-lime/30 bg-brand-lime/10 lg:backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-ping" />
            <span className="w-2 h-2 rounded-full bg-brand-lime absolute" />
            <span className="text-brand-lime text-xs font-bold tracking-widest uppercase font-sans">#1 Mover Marketing Agency</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black text-white leading-[1.1] tracking-tight mb-6 sm:mb-8 lg:drop-shadow-lg">
            Stop Letting Your Moving Trucks Sit Idle <br className="hidden md:block" />
            <span className="text-brand-lime font-black">While Competitors Take Your Jobs.</span>
          </h1>
          
          <p className="mt-4 text-base sm:text-lg md:text-2xl text-blue-100 w-full sm:max-w-3xl font-sans leading-relaxed mb-8 sm:mb-10 border-l-4 border-brand-lime pl-4 sm:pl-6">
            We help USA Moving Companies dominate the Google Map Pack and get exclusive calls—so you can stop fighting over shared leads forever.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16">
            <Link 
              href="/contact#audit-form" 
              className="relative group overflow-hidden w-full sm:w-auto px-4 sm:px-8 py-4 rounded-2xl bg-brand-lime text-[#1A365D] font-black text-sm sm:text-lg transition-all duration-300 active:duration-75 transform hover:scale-[1.05] hover:-rotate-2 hover:shadow-[0_0_40px_rgba(154,251,22,0.6)] active:scale-95 active:shadow-inner active:rotate-1 flex items-center justify-center select-none touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span className="relative z-10 flex items-center justify-center text-center gap-1.5 text-[#1A365D]">
                Free Website & GBP Audit 
                <svg className="w-4 h-4 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-[800ms] ease-out" />
            </Link>
          </div>

          {/* Social Proof Trust Bar - Delayed to clear network for LCP image */}
          {mounted && (
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-[#0f172a] border border-white/10 w-full sm:max-w-fit shadow-xl animate-in fade-in duration-1000">
              <div className="flex -space-x-4">
                {[
                  { src: "/avatars/Adrian-owner.jpg.webp", alt: "Adrian - Moving Company Owner" },
                  { src: "/avatars/David-Owner.jpg.webp", alt: "David - Moving Company Owner" },
                  { src: "/avatars/Garret-owner.jpg.webp", alt: "Garret - Moving Company Owner" },
                  { src: "/avatars/Mountain%20Movers.png", alt: "Mountain Movers Success Partner" },
                  { src: "/avatars/Sunshine%20Movers.png", alt: "Sunshine Movers Success Partner" }
                ].map((avatar, index) => (
                  <div key={index} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-brand-lime bg-slate-800 overflow-hidden relative z-10 transition-transform duration-300 hover:scale-110 hover:z-20">
                    <Image 
                      src={avatar.src} 
                      alt={avatar.alt} 
                      width={48} 
                      height={48} 
                      className="w-full h-full object-cover"
                      loading="lazy" 
                      quality={40} 
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex text-brand-lime gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-white text-sm sm:text-base font-bold font-sans tracking-wide">Over 25+ Happy Clients</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
