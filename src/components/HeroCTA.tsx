'use client';

import Link from 'next/link';

export default function HeroCTA() {
  return (
    <Link 
      href="/contact#audit-form" 
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'click_audit', {
            'event_category': 'CTA',
            'event_label': 'Hero Main Button'
          });
        }
      }}
      className="relative group overflow-hidden w-full sm:w-auto px-4 sm:px-8 py-4 rounded-2xl bg-brand-lime text-[#1A365D] font-black text-sm sm:text-lg transition-all duration-300 active:duration-75 transform hover:scale-[1.05] hover:-rotate-2 hover:shadow-[0_0_40px_rgba(154,251,22,0.6)] active:scale-95 active:shadow-inner active:rotate-1 flex items-center justify-center select-none touch-manipulation"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <span className="relative z-10 flex items-center justify-center text-center gap-1.5 text-[#1A365D]">
        Free Website & GBP Audit 
        <svg className="w-4 h-4 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </span>
      <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-[800ms] ease-out" />
    </Link>
  );
}
