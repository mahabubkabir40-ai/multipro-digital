import { Calculator, Zap, MapPin } from 'lucide-react';

export default function HowItWorks() {
  const pillars = [
    {
      id: "01",
      title: "Instant Sq-Ft Price Estimator",
      hook: "Stop giving rough ballparks over the phone.",
      body: "Homeowners select their garage size, choose full flake or metallic, and submit their phone number to lock in an on-site moisture test before calling your competitors.",
      icon: <Calculator className="w-8 h-8 text-brand-lime" />,
      tag: "Captures Phone Numbers",
      renderPreview: () => (
        <div className="mt-6 p-4 rounded-2xl bg-slate-900 border border-white/10 shadow-inner">
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-2">
            <span>INPUT: 3-Car Garage</span>
            <span className="text-brand-lime font-bold">FULL FLAKE</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-brand-lime/30 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Instant Estimate</div>
              <div className="text-lg font-black text-brand-lime font-mono">$5,200 - $7,800</div>
            </div>
            <a 
              href="#estimator" 
              className="px-3 py-1.5 rounded-lg bg-brand-lime hover:bg-white text-slate-950 text-xs font-black uppercase transition-all shadow-md flex items-center gap-1"
            >
              <span>Try Demo</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "02",
      title: "Sub-1.5s Mobile Flake Showroom",
      hook: "Showcase flake, quartz & metallic work with zero lag.",
      body: "Homeowners browse floor photos on their phone standing in their garage. If your site takes 6 seconds to load your flake blends, they bounce. Our sites load in under 1.5 seconds.",
      icon: <Zap className="w-8 h-8 text-brand-lime" />,
      tag: "Zero Mobile Lag",
      renderPreview: () => (
        <div className="mt-6 p-4 rounded-2xl bg-slate-900 border border-white/10 shadow-inner">
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-2">
            <span>MOBILE CORE VITALS</span>
            <span className="text-emerald-400 font-bold">GRADE A+</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/30 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Load Speed</div>
              <div className="text-lg font-black text-emerald-400 font-mono">0.8s Instant</div>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              100/100 Vitals
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "03",
      title: "Google Map Pack #1 Domination",
      hook: "Be the first shop homeowners call on Google Maps.",
      body: "Over 80% of garage floor jobs go to the top 3 spots on Google Maps. We optimize your Google Business Profile and local geo-pins so your phone rings first in your county.",
      icon: <MapPin className="w-8 h-8 text-brand-lime" />,
      tag: "Top 3 Google 3-Pack",
      renderPreview: () => (
        <div className="mt-6 p-4 rounded-2xl bg-slate-900 border border-white/10 shadow-inner">
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-2">
            <span>GOOGLE LOCAL 3-PACK</span>
            <span className="text-brand-lime font-bold">#1 RANKING</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-brand-lime/30 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Local Phone Calls</div>
              <div className="text-lg font-black text-white font-serif">#1 in Map Pack</div>
            </div>
            <div className="text-xs font-bold text-brand-lime font-mono">
              ⭐ 4.9 (84 reviews)
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="the-system" className="py-16 sm:py-24 lg:py-28 bg-slate-900 relative overflow-hidden scroll-mt-24 border-t border-white/5">
      {/* Decorative subtle background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-bold tracking-widest uppercase text-xs mb-4">
            Built For Coating Installers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-black tracking-tight mb-4">
            How We Keep Your Grinders Spinning &amp; Crews Booked Solid
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100/70 font-sans leading-relaxed">
            How we turn local homeowners into signed contracts and booked on-site moisture tests — without buying shared Angi junk.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-2xl border border-white/10 hover:border-brand-lime/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden backdrop-blur-xl"
            >
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-brand-lime/10 rounded-full blur-2xl group-hover:bg-brand-lime/20 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-2xl font-black text-brand-lime font-mono">
                    Pillar {pillar.id}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-black text-white mb-3 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-brand-lime font-bold text-sm mb-4 font-sans tracking-wide">
                  {pillar.hook}
                </p>

                <p className="text-blue-100/80 text-base font-sans leading-relaxed">
                  {pillar.body}
                </p>

                {/* Visual Preview Widget */}
                {pillar.renderPreview()}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-blue-200/60">
                <span>MultiPro Inbound System</span>
                <span className="text-brand-lime font-bold">{pillar.tag}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
