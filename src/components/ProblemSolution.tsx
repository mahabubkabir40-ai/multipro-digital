import { TrendingUp, AlertTriangle } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Intro */}
        <div className="max-w-3xl mb-24 text-center mx-auto">
          <h2 className="text-5xl font-serif text-brand-blue font-black mb-8 leading-tight">
            We Help Moving Companies <br className="hidden md:block" />
            <span className="text-brand-lime bg-brand-blue px-6 py-2 rounded-xl shadow-[0_10px_30px_rgba(26,54,93,0.3)] inline-block transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 font-sans tracking-tight mt-4">
              Win Local Search
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-sans leading-relaxed">
            At Multipro Digital, we specialize in one thing — helping moving companies dominate Google and fill their calendars with real, high-intent leads. <strong className="text-brand-blue font-black">No gimmicks. No shared leads.</strong>
          </p>
        </div>

        {/* Premium 2 Column Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left Column - Problem (Neumorphic Style) */}
          <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-transparent hover:border-rose-400/60 hover:shadow-[0_0_40px_rgba(244,63,94,0.15)] relative group transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <AlertTriangle className="w-32 h-32 text-rose-500" />
            </div>
            
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-rose-50 text-rose-600 font-bold text-sm tracking-wide mb-8">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              The Problem
            </div>

            <h3 className="text-4xl font-serif text-brand-blue font-extrabold mb-8 relative inline-block">
              Does This Sound Familiar?
              <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-rose-400 rounded-full" />
            </h3>
            
            <p className="text-gray-600 font-sans leading-loose text-lg relative z-10">
              Running a moving company isn't easy—especially when your marketing feels like a guessing game. Every day your trucks sit idle is <strong className="text-brand-blue">money lost to the competitor down the street</strong> who already dominates the Map Pack. You're forced to waste thousands of dollars on expensive, shared leads that have already been called by five other movers, creating a painful cycle of unpredictable, slow months.
            </p>
          </div>

          {/* Right Column - Solution (Glassmorphic Deep Blue) */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden text-white border border-transparent hover:border-brand-lime/80 hover:shadow-[0_0_40px_rgba(154,251,22,0.2)] group transition-all duration-500 hover:-translate-y-2">
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-lime/20 rounded-full blur-[80px] group-hover:bg-brand-lime/30 transition-colors" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-lime/10 text-brand-lime border border-brand-lime/20 font-bold text-sm tracking-wide mb-8">
                <TrendingUp className="w-4 h-4" />
                The Solution
              </div>

              <h3 className="text-4xl font-serif font-extrabold mb-8 text-white relative inline-block">
                Why Movers Pick Us?
                <div className="absolute -bottom-3 left-0 w-1/2 h-1 bg-brand-lime rounded-full" />
              </h3>
              
              <p className="text-blue-100/90 font-sans leading-loose text-lg mb-8">
                We don't just generate 'leads'—we generate revenue. Whether you're a local residential mover or a long-distance specialist, we build systems that target the high-ticket jobs you actually want.
              </p>
              
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm border-l-4 border-l-brand-lime">
                <p className="text-white font-sans font-bold text-xl leading-relaxed">
                  Our goal isn't to just make your phone ring; it's to fill your trucks with the most profitable moves in your city.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
