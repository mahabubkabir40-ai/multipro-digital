import Link from 'next/link';
import { ArrowRight, Clock, User, ChevronRight, CheckCircle2, MapPin, Search, Star, MessageSquare, Camera, Settings, XCircle, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'How to Rank #1 on Google Maps for Moving Companies | Multipro Digital',
  description: 'Learn the exact 7-step system to dominate Google Maps and get more exclusive moving leads without paying for shared lead services.',
};

export default function MarketingTipsPage() {
  const tableOfContents = [
    { id: 'ranking-system', title: "Understanding Google's Local System" },
    { id: 'optimizations', title: "4 GBP Optimizations Movers Miss" },
    { id: 'how-to-beat-competitors', title: "How to Beat Competitors" },
    { id: 'real-results', title: "Real Results: Arizona Case Study" },
    { id: 'common-mistakes', title: "Common Ranking Mistakes" },
  ];

  return (
    <main className="min-h-screen bg-white">

      
      {/* Blog Hero Section */}
      <section className="pt-32 pb-16 bg-[#0b1f38] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/50 to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-brand-lime/80 text-sm font-black uppercase tracking-widest mb-6">
              <Link href="/" className="hover:text-brand-lime">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/movers-marketing-tips" className="hover:text-brand-lime">Marketing Tips</Link>
            </nav>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight mb-8">
              How to <span className="text-brand-lime italic">Rank #1</span> on Google Maps for Moving Companies
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-brand-lime" />
                <span>By Multipro Digital Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-lime" />
                <span>12 Min Read</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                <span>Updated for 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar - Table of Contents */}
            <aside className="lg:w-1/3 order-2 lg:order-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                  <h3 className="text-xl font-serif font-black text-brand-blue mb-6">What's Inside</h3>
                  <nav className="space-y-4">
                    {tableOfContents.map((item, i) => (
                      <Link 
                        key={i}
                        href={`#${item.id}`}
                        className="group flex items-start gap-3 text-slate-600 hover:text-brand-blue transition-colors font-bold"
                      >
                        <span className="text-brand-lime text-sm font-black">0{i + 1}</span>
                        <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Sidebar Sticky CTA */}
                <div className="bg-[#0b1f38] rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime opacity-10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif font-black text-white mb-4 leading-tight">
                      Stop Paying for Shared Mover Leads
                    </h3>
                    <p className="text-white/70 text-sm mb-8 leading-relaxed">
                      Get a custom GMB audit and see exactly what it takes to hit the Top 3 in your city.
                    </p>
                    <Link 
                      href="/contact#audit-form"
                      className="relative w-full group overflow-hidden px-1 py-4 rounded-xl bg-brand-lime text-[#1A365D] font-black text-xs transition-all duration-300 active:duration-75 transform hover:scale-[1.05] hover:-rotate-1 hover:shadow-[0_0_30px_rgba(154,251,22,0.4)] active:scale-95 active:bg-white flex items-center justify-center whitespace-nowrap text-nowrap select-none touch-manipulation"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-1.5 px-3">
                        Free Website & GBP Audit ⟶
                      </span>
                      <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-[800ms] ease-out" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Article Body */}
            <article className="lg:w-2/3 order-1 lg:order-2">
              <div className="prose prose-lg max-w-none text-slate-700 font-sans leading-relaxed">
                <p className="text-xl text-slate-900 font-bold mb-12 border-l-4 border-brand-lime pl-6 italic">
                  If you’re a moving company owner watching competitors fill their top spots on Google Maps while your business sits buried on page 2, you’re not alone.
                </p>

                <p className="mb-8">
                  The difference between ranking #1 and #11 can mean the difference between a fully booked calendar and scrambling for shared leads. 
                  The good news? Google Maps ranking isn’t luck—it’s a system. And once you understand how it works, you can dominate your local market.
                </p>

                <h2 id="ranking-system" className="text-3xl font-serif font-black text-brand-blue mt-16 mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-lime/10 rounded-lg flex items-center justify-center">
                    <Search className="w-6 h-6 text-brand-blue" />
                  </div>
                  Understanding Google's Local Pack Ranking System
                </h2>
                <p className="mb-6">Google uses three core factors to determine who shows up in the coveted “local 3-pack” when someone searches “movers near me”:</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-lime/20 flex items-center justify-center text-brand-blue font-black text-xs mt-1">1</div>
                    <div><strong className="text-brand-blue">Relevance:</strong> How well does your business match what the searcher is looking for? Google analyzes your business category, services, description, and posts.</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-lime/20 flex items-center justify-center text-brand-blue font-black text-xs mt-1">2</div>
                    <div><strong className="text-brand-blue">Distance:</strong> How close is your business to the searcher’s location? This is why claiming accurate service areas is critical.</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-lime/20 flex items-center justify-center text-brand-blue font-black text-xs mt-1">3</div>
                    <div><strong className="text-brand-blue">Prominence:</strong> How well-known and trusted is your business? Measured through reviews, citations, and overall online presence.</div>
                  </li>
                </ul>

                <h2 id="optimizations" className="text-3xl font-serif font-black text-brand-blue mt-16 mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-lime/10 rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-brand-blue" />
                  </div>
                  4 Google Business Profile Optimizations Moving Companies Miss
                </h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {[
                    { icon: MapPin, title: "Incomplete Service Areas", desc: "Don’t just list your city. Add every neighborhood and suburb you serve." },
                    { icon: MessageSquare, title: "Zero Regular Posts", desc: "Movers that post 2-3 times per week see 40% more calls." },
                    { icon: Star, title: "Ignoring Q&A Section", desc: "Proactively add questions customers ask and answer them yourself." },
                    { icon: Camera, title: "Outdated Photos", desc: "Upload fresh photos monthly: trucks, team, and successful moves." }
                  ].map((tip, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <tip.icon className="w-8 h-8 text-brand-lime mb-4" />
                      <h4 className="font-black text-brand-blue mb-2">{tip.title}</h4>
                      <p className="text-sm text-slate-600">{tip.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 id="how-to-beat-competitors" className="text-3xl font-serif font-black text-brand-blue mt-16 mb-8 flex items-center gap-3">
                  <Search className="w-8 h-8 text-brand-lime" />
                  How to Beat Competitors Already Ranking #1-3
                </h2>
                <p className="mb-6">Outranking established competitors requires strategy, not just effort. Here’s how:</p>
                <div className="space-y-6 mb-12">
                  <div className="flex gap-6 items-start">
                    <div className="w-1 w-full max-w-[4px] self-stretch bg-brand-lime rounded-full" />
                    <div>
                      <h4 className="font-bold text-brand-blue mb-1 text-xl">Analyze Their Weakness</h4>
                      <p>Check competitors’ GBP profiles. Are they posting regularly? Responding to reviews? Chances are, they’re neglecting something you can capitalize on.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-1 w-full max-w-[4px] self-stretch bg-brand-lime rounded-full" />
                    <div>
                      <h4 className="font-bold text-brand-blue mb-1 text-xl">Build Review Velocity</h4>
                      <p>It’s not just about total reviews—it’s about consistent new reviews. Aim for 3-5 new five-star reviews every month.</p>
                    </div>
                  </div>
                </div>

                <h2 id="real-results" className="text-3xl font-serif font-black text-brand-blue mt-16 mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-lime rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-[#1A365D]" />
                  </div>
                  Real Results: From Page 2 to Top 3 in 45 Days
                </h2>
                <div className="bg-[#0b1f38] p-10 rounded-3xl text-white mb-12 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4">
                     <div className="bg-brand-lime text-[#1A365D] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Arizona Case Study</div>
                   </div>
                   <p className="text-xl font-serif italic mb-8 border-l-2 border-brand-lime/30 pl-6">
                     "After implementing our local SEO system, a Phoenix-based mover jumped from position #11 to position #2 in just 8 weeks, generating 41 organic calls in their first month at the top."
                   </p>
                   <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-white/5 p-4 rounded-xl">
                        <div className="text-brand-lime text-2xl font-black">40%</div>
                        <div className="text-[10px] uppercase text-white/50 tracking-wider">More Calls</div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl">
                        <div className="text-brand-lime text-2xl font-black">60%</div>
                        <div className="text-[10px] uppercase text-white/50 tracking-wider">Lead Sav.</div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl">
                        <div className="text-brand-lime text-2xl font-black">83%</div>
                        <div className="text-[10px] uppercase text-white/50 tracking-wider">Close Rate</div>
                      </div>
                   </div>
                </div>

                <h2 id="common-mistakes" className="text-3xl font-serif font-black text-brand-blue mt-16 mb-8 flex items-center gap-3">
                  <XCircle className="w-8 h-8 text-red-500" />
                  Common Mistakes That Keep Movers on Page 2
                </h2>
                <div className="bg-red-50 border border-red-100 p-8 rounded-2xl space-y-4 mb-16">
                  {[
                    "Inconsistent NAP (Name, Address, Phone) across directories",
                    "Buying fake reviews (Google will penalize you heavily)",
                    "Neglecting website mobile speed (68% of moving searches are mobile)",
                    "Ignoring negative reviews instead of addressing them professionally"
                  ].map((mistake, i) => (
                    <div key={i} className="flex gap-3 items-start text-red-900 font-bold">
                      <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{mistake}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center py-16 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                  <h3 className="text-2xl font-serif font-black text-brand-blue mb-6">Want to see where you rank right now?</h3>
                  <Link 
                    href="/contact#audit-form"
                    className="inline-flex relative group overflow-hidden px-10 py-5 rounded-2xl bg-brand-lime text-[#1A365D] font-black text-xl transition-all duration-300 active:duration-75 transform hover:scale-[1.05] hover:-rotate-2 hover:shadow-[0_0_40px_rgba(154,251,22,0.6)] active:scale-90 active:bg-white select-none touch-manipulation"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-1.5 text-[#1A365D]">
                      Get Your Free Google Maps Audit ⟶
                    </span>
                  </Link>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>


    </main>
  );
}
