import React from 'react';
import Link from 'next/link';
import AutoLinker from '@/components/AutoLinker';


export const metadata = {
  title: 'About Us | The Epoxy Inbound Growth Engine™ | MultiPro Digital',
  description: 'Learn how MultiPro Digital helps US epoxy & concrete coating contractors book high-margin garage floors through instant quote calculators, sub-1.5s showroom websites, and Google Maps & AI search domination.',
};

export default function AboutPage() {
  const stats = [
    { label: 'Showroom Sites Built', value: '30+' },
    { label: 'Contractor Partners', value: '25+' },
    { label: 'Years in Local SEO', value: '5+' },
    { label: 'Top 3 Map Pack Win Rate', value: '94%' },
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-[#0a192f]">
        {/* Premium Dark Gradient Backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A365D] via-[#0a192f] to-[#0a192f]" />
        
        {/* Decorative glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-bold tracking-widest uppercase text-xs mb-8">
              Our Vision
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white mb-8 tracking-tight leading-tight">
              Built for <span className="text-brand-lime">Epoxy Contractors.</span><br />
              Driven by Real Booked Floors.
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 font-sans font-medium leading-relaxed max-w-2xl mb-10">
              <AutoLinker isDark>Multipro Digital is a specialized digital growth engine dedicated exclusively to helping independent epoxy and concrete coating contractors. We build sub-1.5s showroom websites, install instant square-foot quote calculators, and dominate Google Map Packs and AI Search to keep your installation crews booked with high-ticket 3-car garages.</AutoLinker>
            </p>
          </div>
        </div>
      </section>

      {/* Identity Section - Seamless Dark Theme */}
      <section className="py-20 sm:py-24 bg-slate-900 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-12">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white font-black leading-tight mb-6">
                Why We Focus <span className="text-brand-lime">Exclusively</span> on Epoxy &amp; Concrete Coatings
              </h2>
              <div className="w-24 h-1.5 bg-brand-lime rounded-full mb-6"></div>
              <p className="text-blue-100/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-sans">
                <AutoLinker isDark>We believe in the power of specialization. General marketing agencies treat an epoxy installer the same as a dentist or a plumber. They don&apos;t understand diamond grinders, moisture vapor barriers, full-flake polyaspartics, or metallic marble finishes. We chose to master one craft: converting local homeowners searching for garage floors into booked, high-margin on-site estimates on autopilot.</AutoLinker>
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-950/80 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 relative group overflow-hidden transition-all duration-300 hover:border-brand-lime/40 hover:shadow-[0_10px_30px_rgba(154,251,22,0.12)] hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-brand-lime/5 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10 text-center">
                    <div className="text-3xl sm:text-5xl font-serif font-black text-white mb-2">{stat.value}</div>
                    <div className="text-brand-lime text-[10px] sm:text-xs font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Dark Luxury Grid */}
      <section className="py-20 sm:py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white font-black mb-4">
              The MultiPro <span className="text-brand-lime">Difference</span>
            </h2>
            <p className="text-blue-100/70 text-base sm:text-lg font-sans">
              We combine deep coating trade knowledge with clean Next.js engineering and AI search optimization to solve the #1 bottleneck for contractors: tire-kickers and slow callbacks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-white/10 relative group overflow-hidden transition-all duration-300 hover:border-brand-lime/40 hover:shadow-[0_10px_30px_rgba(154,251,22,0.12)] hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-lime/10 border border-brand-lime/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Instant Floor Estimators</h3>
                <p className="text-blue-100/70 text-xs sm:text-sm leading-relaxed font-sans">Interactive square-foot calculators embedded right on your homepage that pre-qualify serious buyers and capture phone leads while your crews run grinders.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[10px] sm:text-xs font-bold text-brand-lime uppercase tracking-wider">100% Automated</div>
            </div>

            <div className="bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-white/10 relative group overflow-hidden transition-all duration-300 hover:border-brand-lime/40 hover:shadow-[0_10px_30px_rgba(154,251,22,0.12)] hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-lime/10 border border-brand-lime/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Sub-1.5s Showrooms</h3>
                <p className="text-blue-100/70 text-xs sm:text-sm leading-relaxed font-sans">Clean-coded Next.js websites that load high-res garage transformations in under 1.5 seconds. Zero mobile lag means zero bounced customers.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[10px] sm:text-xs font-bold text-brand-lime uppercase tracking-wider">95+ PageSpeed</div>
            </div>

            <div className="bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-white/10 relative group overflow-hidden transition-all duration-300 hover:border-brand-lime/40 hover:shadow-[0_10px_30px_rgba(154,251,22,0.12)] hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-lime/10 border border-brand-lime/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Google Maps &amp; AI Search</h3>
                <p className="text-blue-100/70 text-xs sm:text-sm leading-relaxed font-sans">Deep Google Business Profile optimization and structured schema that gets your shop recommended first by Google AI Overviews, Siri, and ChatGPT.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[10px] sm:text-xs font-bold text-brand-lime uppercase tracking-wider">AI Search Ready</div>
            </div>

            <div className="bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-white/10 relative group overflow-hidden transition-all duration-300 hover:border-brand-lime/40 hover:shadow-[0_10px_30px_rgba(154,251,22,0.12)] hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-lime/10 border border-brand-lime/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Territory Lock &amp; Exclusive Leads</h3>
                <p className="text-blue-100/70 text-xs sm:text-sm leading-relaxed font-sans">
                  <AutoLinker isDark>Strictly one epoxy contractor per city. Zero shared Angi or Thumbtack leads. Every call, video audit, and calculator estimate is 100% exclusive to you.</AutoLinker>
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[10px] sm:text-xs font-bold text-brand-lime uppercase tracking-wider">Market Exclusivity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-24 bg-[#0b1f38] relative overflow-hidden group border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A365D] via-[#0b1f38] to-[#0b1f38] opacity-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black text-white mb-4 sm:mb-6 leading-tight">
            Ready to Lock Out Competitors in Your City?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-8 sm:mb-10 font-sans">
            Get a free, personalized 60-second video audit showing your Google Map Pack ranking gaps, AI search visibility, and mobile site speed score.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/free-audit" 
              className="relative group overflow-hidden w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-brand-lime text-slate-950 font-black text-sm sm:text-lg transition-all duration-300 transform hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(154,251,22,0.6)] active:scale-95 flex items-center justify-center gap-2 select-none"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Your Free 60-Second Video Audit
                <svg className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-out" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
