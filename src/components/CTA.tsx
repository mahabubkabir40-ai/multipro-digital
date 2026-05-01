import { Star } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section id="audit" className="relative py-32 overflow-hidden bg-[#0a192f]">
      {/* Premium Dark Gradient Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A365D] via-[#0a192f] to-[#0a192f]" />
      
      {/* Decorative glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glassmorphism Container */}
        <div className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-lime text-brand-lime" />
                ))}
              </div>
              <span className="text-sm font-semibold text-blue-100">Trusted by 25+ Moving Companies</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 tracking-tight leading-tight">
              Ready to Own Your <span className="text-brand-lime">Market?</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100/80 font-sans font-medium max-w-2xl mx-auto">
              Don't let competitors steal your top spots. Book your free Website & GBP Audit today to turn Google searches into booked jobs predictably.
            </p>
          </div>
          
          {/* Centered CTA Button */}
          <div className="flex justify-center">
            <Link 
              href="/contact#audit-form"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-6 sm:px-10 py-5 rounded-2xl bg-brand-lime text-[#1A365D] font-black text-base sm:text-xl transition-all duration-300 active:duration-75 transform hover:scale-[1.05] hover:-rotate-2 hover:shadow-[0_0_40px_rgba(154,251,22,0.6)] active:scale-95 active:shadow-inner active:rotate-1 flex items-center justify-center whitespace-nowrap select-none touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-1.5 px-3">
                Free Website & GBP Audit
                <svg className="w-4 h-4 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-[800ms] ease-out" />
            </Link>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-blue-100/60 text-sm font-semibold">
              <svg className="w-4 h-4 text-brand-lime" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              100% Free
            </div>
            <div className="flex items-center gap-2 text-blue-100/60 text-sm font-semibold">
              <svg className="w-4 h-4 text-brand-lime" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              No Pushy Sales Calls
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
