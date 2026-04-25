import { MapPin, Rocket, SearchCode } from 'lucide-react';
import AutoLinker from './AutoLinker';


export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "1. Visibility Audit",
      description: "We don't guess; we use data. We perform a deep-dive audit of your website, Google Business Profile, and your top 3 local competitors. We find the exact 'Visibility Gaps' that are causing you to lose high-value moves to the company down the street.",
      icon: <SearchCode className="w-8 h-8 text-brand-lime relative z-10 animate-[bounce_3s_ease-in-out_infinite]" />
    },
    {
      id: 2,
      title: "2. Local Authority Build",
      description: "This is where we turn your business into a local powerhouse. We optimize your GBP and website using our proprietary Local SEO tactics to force Google to recognize you as the authority. Our goal is simple: get you into the 'Top 3' Map Pack where 80% of the clicks happen.",
      icon: <MapPin className="w-8 h-8 text-brand-lime relative z-10 animate-[bounce_3s_ease-in-out_infinite_0.5s]" />
    },
    {
      id: 3,
      title: "3. Conversion Scaling",
      description: "Ranking #1 doesn't matter if the phone doesn't ring. We fine-tune your profile and site to maximize trust and 'Conversion Velocity.' We turn those rankings into exclusive, high-intent calls from homeowners, keeping your trucks moving and your calendar full year-round.",
      icon: <Rocket className="w-8 h-8 text-brand-lime relative z-10 animate-[bounce_3s_ease-in-out_infinite_1s]" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative exact visual whitespace */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-lime font-bold tracking-widest uppercase text-sm mb-4">How It Works</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-[#1A365D] font-black tracking-tight">The Mover Growth Engine</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="group relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-brand-lime/30 hover:-translate-y-2 transition-all duration-300"
            >
               {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A365D]/0 to-[#1A365D]/[0.03] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="relative w-16 h-16 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {/* Glowing layers behind the icon */}
                  <div className="absolute inset-0 bg-brand-lime/20 rounded-xl blur-xl group-hover:bg-brand-lime/40 transition-colors duration-500 animate-[pulse_4s_ease-in-out_infinite]" />
                  <div className="absolute inset-0 bg-[#1A365D] rounded-xl flex items-center justify-center shadow-lg shadow-[#1A365D]/20 z-10 border border-brand-lime/10">
                    {step.icon}
                  </div>
                </div>
                {/* Fixed the title text contrast! Explicitly setting it to dark slate */}
                <h4 className="text-2xl font-serif font-black text-brand-blue mb-4">
                  {step.title}
                </h4>
                {/* Fixed the description contrast */}
                <p className="text-slate-600 leading-relaxed font-sans">
                  <AutoLinker>{step.description}</AutoLinker>
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
