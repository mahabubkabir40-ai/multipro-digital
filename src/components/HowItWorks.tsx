import { Calculator, Zap, MapPin } from 'lucide-react';

export default function HowItWorks() {
  const pillars = [
    {
      id: "01",
      title: "Instant Square-Foot Price Estimator",
      hook: "Stop giving rough quotes over the phone.",
      body: "Homeowners select their garage size, pick full flake or metallic, and submit their phone number for an on-site moisture test before calling your competitors.",
      icon: <Calculator className="w-8 h-8 text-brand-lime" />,
      tag: "Lead Capture Machine",
    },
    {
      id: "02",
      title: "Sub-1.5s High-Speed Showroom",
      hook: "Showcase flake & metallic floors with zero lag.",
      body: "Slow WordPress sites bounce over 50% of mobile visitors. We build ultra-fast Next.js showroom sites that load in under 1.5 seconds, turning mobile visitors into booked estimates.",
      icon: <Zap className="w-8 h-8 text-brand-lime" />,
      tag: "Sub-1.5s Mobile Speed",
    },
    {
      id: "03",
      title: "Google Map Pack & AI Domination",
      hook: "Own your city's top 3 spots on Google Maps & AI.",
      body: "Over 80% of coatings jobs go to the Google Map Pack top 3. We optimize your Google Business Profile and local geo-signals so you become the #1 recommended call in your metro.",
      icon: <MapPin className="w-8 h-8 text-brand-lime" />,
      tag: "#1 Local Visibility",
    },
  ];

  return (
    <section id="the-system" className="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden scroll-mt-24">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-slate-50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-[#1A365D] font-bold tracking-widest uppercase text-xs mb-4">
            The 3-Pillar Epoxy Engine
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A365D] font-black tracking-tight mb-4">
            The Epoxy Inbound Growth Engine™
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-sans leading-relaxed">
            How we turn Google searches and social media views into booked on-site estimates on autopilot.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="bg-slate-900 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-2xl border border-white/10 hover:border-brand-lime/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden"
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
