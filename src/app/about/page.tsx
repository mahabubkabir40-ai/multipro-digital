import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Specialized Local SEO for Movers | Multipro Digital',
  description: 'Multipro Digital is a specialized local SEO and digital marketing agency dedicated exclusively to helping moving companies dominate local search and fill their calendars.',
};

export default function AboutPage() {
  const stats = [
    { label: 'Projects Completed', value: '30+' },
    { label: 'Happy Clients', value: '25+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Ongoing Clients', value: '5+' },
  ];

  return (
    <main className="flex-grow pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#0a192f]">
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
              Specialized for <span className="text-brand-lime">Movers.</span><br />
              Driven by Results.
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 font-sans font-medium leading-relaxed max-w-2xl mb-10">
              Multipro Digital is a specialized local SEO and digital marketing agency dedicated exclusively to helping moving companies across the USA. We partner with moving businesses to fill their calendars and dominate local search.
            </p>
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-serif text-[#0b1f38] font-black leading-tight mb-8">
                Why We Focus <span className="text-brand-lime">Exclusively</span> on Moving Companies
              </h2>
              <div className="w-24 h-1.5 bg-brand-lime rounded-full mb-8"></div>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                We believe in the power of specialization. Unlike generalist agencies that try to serve everyone, we chose to master one industry. That means we already know what your customers are searching for, we know which keywords convert, and we know exactly how to beat your competitors.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200 relative group overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(154,251,22,0.15)] hover:-translate-y-4">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-brand-lime/5 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10 text-center">
                    <div className="text-5xl font-serif font-black text-[#0b1f38] mb-2">{stat.value}</div>
                    <div className="text-slate-500 text-xs font-black tracking-[0.2em] uppercase">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50 border-y border-brand-lime/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-[#0b1f38] font-black mb-6">
              Why Choose <span className="text-brand-lime">Us?</span>
            </h2>
            <p className="text-slate-600 text-lg">
              We use a holistic marketing approach to provide absolute value to our clients, combining decades of digital marketing experience with deep moving industry knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 relative group overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(154,251,22,0.15)] hover:-translate-y-4">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0b1f38] mb-4">ROI-Focused Techniques</h3>
              <p className="text-slate-600 leading-relaxed">Our agency prioritizes the techniques that show the best return on investment for your specific service area, ensuring every dollar spent grows your business.</p>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 relative group overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(154,251,22,0.15)] hover:-translate-y-4">
              <div className="w-14 h-14 bg-brand-lime/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0b1f38] mb-4">Emergency Support</h3>
              <p className="text-slate-600 leading-relaxed">We excel at emergency support. Our team is available to provide critical assistance as needed to keep your marketing engine running smoothly.</p>
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 relative group overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(154,251,22,0.15)] hover:-translate-y-4">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0b1f38] mb-4">Professional Team</h3>
              <p className="text-slate-600 leading-relaxed">We have a dedicated team of professionals with extensive experience in digital marketing, from GBP management to website technical overhauls.</p>
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-24 bg-[#0b1f38] relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A365D] via-[#0b1f38] to-[#0b1f38] opacity-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-10 leading-tight">
            Ready to Dominate Your Service Area?
          </h2>
          <Link 
            href="/contact#audit-form" 
            className="relative group overflow-hidden px-1 sm:px-10 py-5 rounded-2xl bg-brand-lime text-[#1A365D] font-black text-[10px] min-[375px]:text-xs sm:text-xl transition-all duration-300 active:duration-75 transform hover:scale-[1.05] hover:-rotate-2 hover:shadow-[0_0_40px_rgba(154,251,22,0.6)] active:scale-90 active:bg-white flex items-center justify-center whitespace-nowrap text-nowrap select-none touch-manipulation"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <span className="relative z-10 flex items-center justify-center gap-1.5 text-[#1A365D]">
              Free Website & GBP Audit 
              <svg className="w-3 h-3 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-[800ms] ease-out" />
          </Link>
        </div>
      </section>
    </main>
  );
}
