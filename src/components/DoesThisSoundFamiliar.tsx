export default function DoesThisSoundFamiliar() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-brand-blue font-bold mb-8">
          Does This <span className="text-brand-lime">Sound Familiar?</span>
        </h2>
        
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm text-left relative overflow-hidden">
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-lime" />
          
          <p className="text-lg md:text-xl text-gray-700 font-sans leading-relaxed">
            Running a moving company isn't easy—especially when your marketing feels like a guessing game. Every day your trucks sit idle is money lost to the competitor down the street who already dominates the Map Pack. You're forced to waste thousands of dollars on expensive, shared leads that have already been called by five other movers, creating a painful cycle of unpredictable, slow months. You don't need another marketing gimmick; you need a predictable, job-filling system that gets you back on the road.
          </p>
        </div>
      </div>
    </section>
  );
}
