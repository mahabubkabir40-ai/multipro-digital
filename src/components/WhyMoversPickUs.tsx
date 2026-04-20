import { Trophy } from 'lucide-react';

export default function WhyMoversPickUs() {
  return (
    <section className="py-24 bg-brand-blue relative">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="relative inline-flex items-center justify-center w-16 h-16 mb-8 group">
          <div className="absolute inset-0 bg-brand-lime/30 rounded-2xl blur-lg animate-pulse" />
          <div className="relative z-10 flex items-center justify-center w-full h-full rounded-2xl bg-brand-lime/20 text-brand-lime border border-brand-lime/30">
            <Trophy className="w-8 h-8 animate-[bounce_4s_ease-in-out_infinite]" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-serif text-white font-bold mb-8">
          Why Movers <span className="text-brand-lime">Pick Us?</span>
        </h2>
        
        <p className="text-xl text-blue-100 font-sans leading-relaxed max-w-3xl mx-auto">
          We don't just generate 'leads'—we generate revenue. Whether you're a local residential mover or a long-distance specialist, we build systems that target the high-ticket jobs you actually want.
        </p>
        <p className="mt-6 text-xl text-white font-bold font-sans">
          Our goal isn't to just make your phone ring; it's to fill your trucks with the most profitable moves in your city.
        </p>
      </div>
    </section>
  );
}
