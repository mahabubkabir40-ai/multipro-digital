'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function FreeAuditPage() {
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

    if (data._honey) {
      setIsSuccess(true);
      setIsSubmitting(false);
      return;
    }

    try {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'click_audit', {
          event_category: 'CTA',
          event_label: 'Free Audit Page Form',
        });
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: 'New Free Video Audit Request',
          source: 'free-audit-page',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setTimeout(() => {
          router.push('/success');
        }, 1200);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0b1f38] min-h-screen pt-36 md:pt-44 pb-24 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP SECTION: The Audit Form Right Up Front */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: What you get */}
          <div className="lg:col-span-6 space-y-6 text-white">
            <div className="inline-block px-4 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-bold tracking-widest uppercase text-xs">
              ⚡ 100% Free • Delivered in 24 Hours
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-tight">
              Get Your Free 60-Second <span className="text-brand-lime block">Epoxy Video Audit</span>
            </h1>

            <p className="text-base sm:text-lg text-blue-100/80 font-sans leading-relaxed border-l-4 border-brand-lime pl-4 sm:pl-6">
              We&apos;ll record a personalized 60-second video breaking down your Google Map Pack &amp; AI Search ranking gaps, your website&apos;s mobile speed score, and why competitors are booking all the 3-car garage projects in your city.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-sm sm:text-base text-blue-100/90 font-sans">
              <h3 className="text-xs uppercase tracking-widest font-black text-brand-lime">
                In Your Custom 60-Second Video:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>Google Map Pack &amp; AI Search Audit:</strong> Where you rank in Google Maps, AI Overviews, and local voice search.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>Sub-1.5s Mobile Speed Test:</strong> Why slow WordPress sites bounce high-ticket coating buyers.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>Instant Estimator Demo:</strong> How square-foot calculators pre-qualify serious homeowners.</span>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-blue-200/70 text-xs sm:text-sm font-sans flex items-center gap-2">
                🔒 Strictly 1 contractor per city territory. No pushy sales calls.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Form Card */}
          <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:max-w-none">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-brand-lime/30 text-slate-900">
              <div className="mb-6 border-l-4 border-brand-lime pl-4">
                <h2 className="text-xl sm:text-2xl font-serif font-black text-[#0b1f38] leading-snug">
                  Where Should We Send Your Video?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1">
                  Takes 30 seconds to request. 100% free with zero obligation.
                </p>
              </div>

              {isSuccess ? (
                <div className="py-16 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(154,251,22,0.4)]">
                    <svg className="w-8 h-8 text-[#1A365D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-serif font-black text-[#0b1f38] mb-2">Request Received!</h3>
                  <p className="text-slate-600 text-sm">Redirecting to your confirmation page...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-900 text-xs font-bold mb-1.5">
                        Name <span className="text-[#1da4ff]">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="Name"
                        placeholder="John Doe"
                        required
                        disabled={isSubmitting}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1da4ff] focus:ring-4 focus:ring-[#1da4ff]/10 transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-900 text-xs font-bold mb-1.5">
                        Phone Number <span className="text-[#1da4ff]">*</span>
                      </label>
                      <input 
                        type="tel" 
                        name="Phone Number"
                        placeholder="(214) 839-4912"
                        required
                        disabled={isSubmitting}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1da4ff] focus:ring-4 focus:ring-[#1da4ff]/10 transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-900 text-xs font-bold mb-1.5">
                        Email <span className="text-[#1da4ff]">*</span>
                      </label>
                      <input 
                        type="email" 
                        name="Email"
                        placeholder="john@apexepoxy.com"
                        required
                        disabled={isSubmitting}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1da4ff] focus:ring-4 focus:ring-[#1da4ff]/10 transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-900 text-xs font-bold mb-1.5">
                        Website Or Google Business Profile <span className="text-[#1da4ff]">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="Website or Google Business Profile"
                        placeholder="yoursite.com or Google Maps link"
                        required
                        disabled={isSubmitting}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1da4ff] focus:ring-4 focus:ring-[#1da4ff]/10 transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 text-red-600 text-xs font-medium border border-red-100">
                      {error}
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="relative group overflow-hidden w-full py-4 rounded-2xl bg-brand-lime text-[#1A365D] font-black text-sm sm:text-base transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(154,251,22,0.6)] active:scale-95 select-none touch-manipulation disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? 'Sending Request...' : 'Send Me My Free 60-Second Video Audit →'}
                    </span>
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-out" />
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: Secondary Direct Strategy Call Option */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold mb-3">
              Prefer To Speak Directly on a 15-Minute Strategy Call?
            </h2>
            <p className="text-blue-100/70 text-sm sm:text-base">
              If you need immediate territory lockout or want to review your market numbers live, you can book directly into our calendar below.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl h-[580px] border-[4px] border-white/10">
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
  );
}
