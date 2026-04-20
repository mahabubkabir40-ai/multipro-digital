'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed w-full z-[100] transition-all duration-400 border-b border-white/20 ${isMenuOpen ? 'bg-white' : 'bg-white/85 backdrop-blur-xl'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group py-2" onClick={() => setIsMenuOpen(false)}>
              <img 
                src="/logo.png" 
                alt="MultiPro Digital - Leading Marketing Agency for Moving Companies" 
                className="h-14 md:h-16 w-auto object-contain transition-all duration-500 ease-out 
                           group-hover:scale-[1.08] group-hover:-rotate-3 
                           filter drop-shadow-sm group-hover:drop-shadow-[0_0_15px_rgba(154,251,22,0.6)]"
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="relative text-sm font-bold text-slate-700 hover:text-[#1A365D] group py-1 transition-colors">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-lime transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link href="/movers-marketing-tips" className="relative text-sm font-bold text-slate-700 hover:text-[#1A365D] group py-1 transition-colors">
              Marketing Tips
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-lime transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/contact" className="relative text-sm font-bold text-slate-700 hover:text-[#1A365D] group py-1 transition-colors">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-lime transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/contact#audit-form"
              className="relative group overflow-hidden px-6 py-2.5 rounded-xl bg-brand-lime text-[#1A365D] font-black text-sm transition-all duration-300 active:duration-75 transform hover:scale-[1.05] hover:-rotate-2 hover:shadow-[0_0_30px_rgba(154,251,22,0.4)] active:scale-95 active:bg-white select-none whitespace-nowrap"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Free Website & GBP Audit
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-[800ms] ease-out" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-brand-blue focus:outline-none p-2 transition-transform duration-300 active:scale-90"
            >
              {isMenuOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 z-[100] transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-10 opacity-0 invisible pointer-events-none'}`}>
        <div className="px-6 py-10 space-y-8 flex flex-col text-center">
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-slate-800 hover:text-brand-lime">About</Link>

          <Link href="/movers-marketing-tips" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-slate-800 hover:text-brand-lime">Marketing Tips</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-slate-800 hover:text-brand-lime">Contact</Link>
          <div className="pt-4 px-2">
            <Link
              href="/contact#audit-form"
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-brand-lime text-[#1A365D] font-black py-4 rounded-xl shadow-xl flex items-center justify-center text-[10px] min-[375px]:text-xs whitespace-nowrap text-nowrap overflow-hidden px-1 transition-all duration-300 active:duration-75 active:scale-95 active:bg-white select-none touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Free Website & GBP Audit
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

