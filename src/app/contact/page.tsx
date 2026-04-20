import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | MultiPro Digital',
  description: 'Get started scaling your moving company. Schedule a call or request a free Website and Google Business Profile Audit today.',
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#0b1f38] min-h-screen pt-32 pb-24 relative overflow-hidden mt-20">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Copy & Trust Building */}
            <div className="max-w-xl">
              <div className="inline-block px-4 py-1.5 rounded-full border border-brand-lime/20 bg-brand-lime/5 text-brand-lime font-bold tracking-widest uppercase text-xs mb-6">
                Pick a Time That Works
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white font-black mb-6 leading-tight">
                Ready to <span className="text-brand-lime block">Dominate Your Local Market?</span>
              </h1>
              <p className="text-lg text-blue-100/70 font-sans leading-relaxed mb-8">
                We’ll analyze your local market, your revenue goals, and the exact roadmap we use to generate exclusive, high-ticket moving leads. 
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-lime/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 pr-2">
                    <p className="text-xs sm:text-sm text-blue-200/50 font-bold uppercase tracking-wider">Email Us Directly</p>
                    <a href="mailto:mahabubkabir@multiprodigital.com" className="text-base sm:text-lg text-white font-medium hover:text-brand-lime transition-colors block break-all leading-tight mt-1">
                      mahabubkabir@multiprodigital.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-lime/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-blue-200/50 font-bold uppercase tracking-wider">Average Response Time</p>
                    <span className="text-base sm:text-lg text-white font-medium block mt-1">Under 2 hours</span>
                  </div>
                </div>
              </div>

              {/* Social Proof Mini */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-blue-100/70 font-medium mb-4">Trusted by rapidly growing moving companies nationwide.</p>
                <div className="flex gap-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-6 h-6 text-brand-lime" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                </div>
              </div>
            </div>

            {/* Right Column - Dedicated Google Calendar */}
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 max-w-md mx-auto lg:max-w-none lg:w-full">
              <h3 className="text-2xl text-white font-serif font-bold mb-6 leading-tight">Get a Proven Roadmap to Rank <span className="text-brand-lime font-sans font-black tracking-tight">#1 &</span> Fill Your Trucks!</h3>
              <div className="w-full bg-white rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(29,164,255,0.15)] h-[600px] border-[4px] border-white/10">
                <iframe 
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Igc3C-U9tp7AKTpLeRVHI8x0ef-WovC1qnds_oFFQvDuRt3bRTQoFF2qLwI-U2gxKjG8d5O3G?gv=true" 
                  style={{ border: 0 }} 
                  width="100%" 
                  height="100%" 
                  title="Google Calendar Booking"
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Free Audit Form Section */}
      <section id="audit-form" className="bg-slate-100/50 py-24 border-t border-slate-200 relative overflow-hidden">
        {/* Subtle background glow to make glass pop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8 max-w-2xl mx-auto border-l-4 border-brand-lime pl-6 text-left">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0b1f38] font-black mb-3">Get Your Free Mover Visibility Audit!</h2>
              <p className="text-slate-600 text-lg">
                Not ready to talk? No problem. Fill in the form below and I'll record a personalized video showing why competitors are outranking you and how to fix it. 100% Free.
              </p>
            </div>
           
           <div className="bg-white/70 backdrop-blur-xl rounded-[1.5rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)] border border-brand-lime/20">
             <form action="https://formsubmit.co/mahabubkabir@multiprodigital.com" method="POST" className="space-y-5">
                {/* Anti-spam honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                {/* Success Redirect - Update this with your final domain later */}
                <input type="hidden" name="_next" value="https://multiprodigital.com/success" />
                <input type="hidden" name="_subject" value="New Website Audit Request!" />
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-900 text-sm font-bold mb-1.5">Your Name <span className="text-[#1da4ff]">*</span></label>
                    <input 
                      type="text" 
                      name="Name"
                      placeholder="John Doe"
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1da4ff] focus:ring-4 focus:ring-[#1da4ff]/10 transition-all shadow-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-900 text-sm font-bold mb-1.5">Company Name <span className="text-[#1da4ff]">*</span></label>
                    <input 
                      type="text" 
                      name="Company"
                      placeholder="Elite Movers LLC"
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1da4ff] focus:ring-4 focus:ring-[#1da4ff]/10 transition-all shadow-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-900 text-sm font-bold mb-1.5">Email Address <span className="text-[#1da4ff]">*</span></label>
                    <input 
                      type="email" 
                      name="Email"
                      placeholder="john@elitemovers.com"
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1da4ff] focus:ring-4 focus:ring-[#1da4ff]/10 transition-all shadow-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-900 text-sm font-bold mb-1.5">Website URL <span className="text-[#1da4ff]">*</span></label>
                    <input 
                      type="text" 
                      name="Website"
                      placeholder="https://yourwebsite.com"
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1da4ff] focus:ring-4 focus:ring-[#1da4ff]/10 transition-all shadow-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-900 text-sm font-bold mb-1.5">Current Monthly Moves</label>
                  <div className="relative">
                    <select name="Monthly Moves" defaultValue="" className="w-full bg-slate-50/50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 appearance-none focus:outline-none focus:bg-white focus:border-[#1da4ff] focus:ring-4 focus:ring-[#1da4ff]/10 transition-all shadow-sm">
                      <option value="" disabled className="text-slate-500">Select an option...</option>
                      <option value="0-10">0 - 10 Moves</option>
                      <option value="11-30">11 - 30 Moves</option>
                      <option value="31-100">31 - 100 Moves</option>
                      <option value="100+">100+ Moves</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-900 text-sm font-bold mb-1.5">Your Biggest Challenge</label>
                  <textarea 
                    name="Biggest Challenge"
                    rows={3}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1da4ff] focus:ring-4 focus:ring-[#1da4ff]/10 transition-all shadow-sm resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-center pt-2">
                  <button 
                    type="submit"
                    className="relative group overflow-hidden w-full max-w-sm px-6 py-4 sm:px-8 sm:py-5 rounded-2xl bg-brand-lime text-[#1A365D] font-black text-sm min-[375px]:text-base sm:text-xl transition-all duration-300 active:duration-75 transform hover:scale-[1.05] hover:-rotate-2 hover:shadow-[0_20px_40px_-10px_rgba(154,251,22,0.6)] active:scale-90 active:bg-white select-none touch-manipulation mx-auto"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                      Get Your Free Audit
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-[800ms] ease-out" />
                  </button>
                </div>
             </form>
           </div>
        </div>
      </section>
    </>
  );
}
