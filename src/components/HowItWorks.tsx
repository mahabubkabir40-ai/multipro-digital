import { Calculator, Zap, MapPin } from 'lucide-react';

export default function HowItWorks() {
  const pillars = [
    {
      id: "01",
      title: "The Instant Square-Foot Price Calculator",
      hook: "Stop wasting time giving rough quotes over the phone.",
      body: "We build an interactive calculator directly into your homepage. Homeowners select their garage size (2-car, 3-car, basement), choose their coating (Full Flake, Metallic, Solid), and see an estimated price range in seconds. On your live site that estimate routes them to book an on-site moisture test — the demo below is the price engine, not a phone-capture form.",
      icon: <Calculator className="w-8 h-8 text-brand-lime" />,
    },
    {
      id: "02",
      title: "Sub-1.5s High-Speed Showroom Portfolio",
      hook: "Showcase your work without the mobile lag.",
      body: "Most contractor websites fail Google PageSpeed tests because of heavy, uncompressed photos. We build clean-coded sites that load in under 1.5 seconds, featuring interactive Before/After sliders comparing cracked concrete to mirror-finish floors.",
      icon: <Zap className="w-8 h-8 text-brand-lime" />,
    },
    {
      id: "03",
      title: "Google Map Pack Domination (Top 3)",
      hook: "Own your city's most profitable zip codes.",
      body: "Over 80% of homeowners looking for garage coatings click the top 3 spots on Google Maps. We optimize your Google Business Profile, build localized city landing pages, and drive high-intent residential and commercial leads straight to your phone.",
      icon: <MapPin className="w-8 h-8 text-brand-lime" />,
    },
  ];

  return (
    <section id="the-system" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-slate-50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-[#1A365D] font-bold tracking-widest uppercase text-xs mb-4">
            The 3-Pillar Epoxy Engine
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#1A365D] font-black tracking-tight mb-4">
            The Epoxy Inbound Growth Engine™
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-sans leading-relaxed">
            How we turn Google searches and social media views into booked on-site estimates on autopilot.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl border border-white/10 hover:border-brand-lime/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden"
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
                <span className="text-brand-lime font-bold">100% Automated</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
