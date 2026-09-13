'use client';
 
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open to prevent page jumping underneath
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100] bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28 xl:h-32">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" prefetch={false} className="flex items-center group py-2" onClick={() => setIsMenuOpen(false)}>
              <Image 
                src="/logo.png" 
                alt="MultiPro Digital - Leading Marketing Agency for Epoxy & Concrete Coating Contractors" 
                width={160}
                height={85}
                priority
                className="h-16 sm:h-18 md:h-20 xl:h-24 w-auto object-contain transition-all duration-500 ease-out 
                           group-hover:scale-[1.08] group-hover:-rotate-3 
                           filter brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] group-hover:drop-shadow-[0_0_25px_rgba(154,251,22,0.8)]"
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <Link href="/" prefetch={false} className="relative text-base xl:text-lg font-bold text-slate-200 hover:text-white group py-2 tracking-wide transition-colors">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-brand-lime rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link href="/#portfolio" prefetch={false} className="relative text-base xl:text-lg font-bold text-slate-200 hover:text-white group py-2 tracking-wide transition-colors">
              Proof &amp; Results
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-brand-lime rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link href="/#the-system" prefetch={false} className="relative text-base xl:text-lg font-bold text-slate-200 hover:text-white group py-2 tracking-wide transition-colors">
              The System
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-brand-lime rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link href="/about" prefetch={false} className="relative text-base xl:text-lg font-bold text-slate-200 hover:text-white group py-2 tracking-wide transition-colors">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-brand-lime rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/free-audit"
              prefetch={false}
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'click_audit', {
                    'event_category': 'CTA',
                    'event_label': 'Navbar Desktop Button'
                  });
                }
              }}
              className="relative group overflow-hidden px-8 py-3.5 xl:px-10 xl:py-4 rounded-2xl bg-brand-lime text-slate-950 font-black text-base xl:text-lg transition-all duration-300 active:duration-75 transform hover:scale-[1.05] hover:-rotate-2 hover:shadow-[0_0_40px_rgba(154,251,22,0.6)] active:scale-95 select-none whitespace-nowrap shadow-[0_0_25px_rgba(154,251,22,0.4)]"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2.5">
                Free Video Audit
                <svg className="w-5 h-5 xl:w-6 xl:h-6 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-[800ms] ease-out" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2.5 transition-transform duration-300 active:scale-90"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <svg className="h-8 w-8 sm:h-9 sm:w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8 sm:h-9 sm:w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`lg:hidden fixed top-24 md:top-28 xl:top-32 inset-x-0 bottom-0 bg-slate-950/98 backdrop-blur-2xl border-b border-white/10 z-[100] overflow-y-auto shadow-2xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}`}>
        <div className="px-6 py-10 space-y-6 flex flex-col text-center max-w-sm mx-auto justify-center min-h-[calc(100dvh-6rem)]">
          <Link href="/" prefetch={false} onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-white hover:text-brand-lime transition-colors py-1">Home</Link>
          <Link href="/#portfolio" prefetch={false} onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-white hover:text-brand-lime transition-colors py-1">Proof &amp; Results</Link>
          <Link href="/#the-system" prefetch={false} onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-white hover:text-brand-lime transition-colors py-1">The System</Link>
          <Link href="/about" prefetch={false} onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-white hover:text-brand-lime transition-colors py-1">About Us</Link>
          <Link href="/contact" prefetch={false} onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-white hover:text-brand-lime transition-colors py-1">Contact</Link>
          <div className="pt-2 px-2">
            <Link
              href="/free-audit"
              prefetch={false}
              onClick={() => {
                setIsMenuOpen(false);
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'click_audit', {
                    'event_category': 'CTA',
                    'event_label': 'Navbar Mobile Button'
                  });
                }
              }}
              className="w-full bg-brand-lime text-slate-950 font-black py-4 rounded-xl shadow-xl flex items-center justify-center text-base font-sans tracking-wide transition-all duration-300 active:duration-75 active:scale-95 select-none touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Free Video Audit →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

