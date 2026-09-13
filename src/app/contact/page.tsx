'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        // Small delay for the user to see the success state before redirecting
        setTimeout(() => {
          router.push('/success');
        }, 1500);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-[#0b1f38] min-h-screen pt-36 md:pt-48 pb-24 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Copy & Trust Building */}
            <div className="max-w-xl">
              <div className="inline-block px-4 py-1.5 rounded-full border border-brand-lime/20 bg-brand-lime/5 text-brand-lime font-bold tracking-widest uppercase text-xs mb-6">
                ⚡ 100% Free Consultation • Territory Lock
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white font-black mb-6 leading-tight">
                Ready to <span className="text-brand-lime block">Dominate Your Local Market?</span>
              </h1>
              <p className="text-lg text-blue-100/70 font-sans leading-relaxed mb-8">
                We’ll analyze your local service territory, your mobile site speed, and the exact roadmap we use to rank #1 in the Google Map Pack and Google AI Overviews—generating exclusive, high-ticket garage floor and commercial epoxy leads on autopilot.
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
                <p className="text-blue-100/70 font-medium mb-4">Trusted by rapidly growing epoxy & coating contractors nationwide.</p>
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
              <h3 className="text-2xl text-white font-serif font-bold mb-6 leading-tight">Get a Proven Roadmap to Rank <span className="text-brand-lime font-sans font-black tracking-tight">Top 3 on Maps &amp; AI &amp;</span> Keep Your Grinders Busy!</h3>
              <div className="w-full bg-white rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(29,164,255,0.15)] h-[600px] border-[4px] border-white/10">
                <iframe 
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Igc3C-U9tp7AKTpLeRVHI8x0ef-WovC1qnds_oFFQvDuRt3bRTQoFF2qLwI-U2gxKjG8d5O3G?gv=true" 
                  style={{ border: 0 }} 
                  width="100%" 
                  height="100%" 
                  title="Google Calendar Booking"
                  loading="lazy"
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Free Audit Form Section */}
      <section id="audit-form" className="bg-slate-950 py-20 sm:py-24 border-t border-white/10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-8 max-w-2xl mx-auto border-l-4 border-brand-lime pl-4 sm:pl-6 text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-black mb-3">Get Your Free 60-Second Video Audit</h2>
              <p className="text-blue-100/70 text-sm sm:text-base font-sans">
                Not ready to talk? No problem. Fill in the form below and we&apos;ll record a personalized 60-second video showing your Google Map Pack rankings, AI search visibility, mobile load speed, and how to fix it. 100% Free.
              </p>
            </div>
           
           <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/10 relative">
             {isSuccess ? (
               <div className="py-16 text-center animate-in fade-in zoom-in duration-500">
                 <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(154,251,22,0.4)]">
                   <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#1A365D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <h3 className="text-2xl sm:text-3xl font-serif font-black text-white mb-3">Request Received!</h3>
                 <p className="text-blue-100/70 text-base">Redirecting you to our success page...</p>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Anti-spam honeypot */}
                  <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-white text-xs sm:text-sm font-bold mb-1.5">Your Name <span className="text-[#1da4ff]">*</span></label>
                      <input 
                        type="text" 
                        name="Name"
                        placeholder="John Doe"
                        className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 transition-all text-sm shadow-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-white text-xs sm:text-sm font-bold mb-1.5">Business Name <span className="text-slate-400 font-normal">(Optional)</span></label>
                      <input 
                        type="text" 
                        name="Business Name"
                        placeholder="e.g. Apex Epoxy Coatings"
                        className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 transition-all text-sm shadow-sm"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-white text-xs sm:text-sm font-bold mb-1.5">City &amp; State <span className="text-[#1da4ff]">*</span></label>
                      <input 
                        type="text" 
                        name="City and State"
                        placeholder="Dallas, TX"
                        className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 transition-all text-sm shadow-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-white text-xs sm:text-sm font-bold mb-1.5">Phone Number <span className="text-[#1da4ff]">*</span></label>
                      <input 
                        type="tel" 
                        name="Phone Number"
                        placeholder="(214) 839-4912"
                        className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 transition-all text-sm shadow-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-white text-xs sm:text-sm font-bold mb-1.5">Email Address <span className="text-[#1da4ff]">*</span></label>
                      <input 
                        type="email" 
                        name="Email"
                        placeholder="john@apexepoxycoatings.com"
                        className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 transition-all text-sm shadow-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-white text-xs sm:text-sm font-bold mb-1.5">Website or Google Business Profile <span className="text-slate-400 font-normal">(Optional)</span></label>
                      <input 
                        type="text" 
                        name="Website or Google Business Profile"
                        placeholder="yoursite.com or Google Maps link"
                        className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 transition-all text-sm shadow-sm"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-xs sm:text-sm font-bold mb-1.5">Your Biggest Challenge <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <textarea 
                      name="Biggest Challenge"
                      rows={2}
                      placeholder="e.g. Need more 3-car garages, tired of shared Angi leads, or need an instant quote calculator"
                      disabled={isSubmitting}
                      className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 transition-all text-sm shadow-sm resize-none"
                    ></textarea>
                  </div>

                  {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 text-rose-400 text-sm font-medium border border-rose-500/20">
                      {error}
                    </div>
                  )}

                  <div className="flex justify-center pt-2">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="relative group overflow-hidden w-full max-w-md px-6 py-4 sm:px-8 sm:py-4.5 rounded-2xl bg-brand-lime text-[#1A365D] font-black text-sm sm:text-base transition-all duration-300 active:duration-75 transform hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(154,251,22,0.6)] active:scale-95 select-none touch-manipulation mx-auto disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2 text-center">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-[#1A365D]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            Sending Audit Request...
                          </>
                        ) : (
                          <>
                            Send Me My Free 60-Second Video Audit →
                          </>
                        )}
                      </span>
                      {!isSubmitting && <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-[800ms] ease-out" />}
                    </button>
                  </div>
               </form>
             )}
           </div>
        </div>
      </section>
    </>
  );
}
