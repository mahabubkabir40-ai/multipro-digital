'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FreeAuditPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mountedTime] = useState(() => Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Silent honeypot drop for automated bots
    if (data._honey || data._hp_company_website) {
      setIsSuccess(true);
      setIsSubmitting(false);
      setTimeout(() => {
        router.push('/success');
      }, 1200);
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
          _ts: mountedTime,
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

  const inputClass =
    'w-full bg-[#06101e] border border-slate-700/70 rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:bg-[#071324] focus:border-[#1da4ff] focus:ring-2 focus:ring-[#1da4ff]/30 transition-all shadow-inner';
  const labelClass = 'block text-white text-xs sm:text-sm font-bold mb-2';

  return (
    <div className="bg-[#0b1f38] min-h-screen pt-36 md:pt-44 pb-24 relative overflow-hidden">
      {/* Background Ambience Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Lime Accent Bar */}
        <div className="border-l-4 border-brand-lime pl-4 sm:pl-6 mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            Get Your Free 60-Second Video Audit
          </h1>
          <p className="mt-3 sm:mt-4 text-slate-300 font-sans text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            Fill in your shop details below. We&apos;ll record a personalized 60-second video breaking down your Google website rankings, Google Map Pack visibility, mobile load speed, and why competitors are getting called first for high-ticket garage jobs in your city. 100% Free.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-[#0c182b] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-slate-700/60 text-white">
          {isSuccess ? (
            <div className="py-16 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(154,251,22,0.4)]">
                <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-black text-white mb-2">Request Received!</h3>
              <p className="text-slate-300 text-sm">Redirecting to your confirmation page...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Anti-spam honeypots & timing verification */}
              <input type="hidden" name="_ts" value={mountedTime} />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
              <input type="text" name="_hp_company_website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Your Name */}
                <div>
                  <label htmlFor="audit-name" className={labelClass}>
                    Your Name <span className="text-[#1da4ff] font-bold ml-0.5">*</span>
                  </label>
                  <input
                    id="audit-name"
                    type="text"
                    name="Name"
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="audit-business" className={labelClass}>
                    Business Name <span className="text-slate-400 font-normal text-xs sm:text-sm ml-1">(Optional)</span>
                  </label>
                  <input
                    id="audit-business"
                    type="text"
                    name="Business Name"
                    placeholder="e.g. Apex Epoxy Coatings"
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>

                {/* City & State */}
                <div>
                  <label htmlFor="audit-city" className={labelClass}>
                    City &amp; State <span className="text-[#1da4ff] font-bold ml-0.5">*</span>
                  </label>
                  <input
                    id="audit-city"
                    type="text"
                    name="City & State"
                    placeholder="Dallas, TX"
                    required
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="audit-phone" className={labelClass}>
                    Phone Number <span className="text-[#1da4ff] font-bold ml-0.5">*</span>
                  </label>
                  <input
                    id="audit-phone"
                    type="tel"
                    name="Phone Number"
                    placeholder="(214) 839-4912"
                    required
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="audit-email" className={labelClass}>
                    Email Address <span className="text-[#1da4ff] font-bold ml-0.5">*</span>
                  </label>
                  <input
                    id="audit-email"
                    type="email"
                    name="Email"
                    placeholder="john@apexepoxycoatings.com"
                    required
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>

                {/* Website or Google Business Profile */}
                <div>
                  <label htmlFor="audit-website" className={labelClass}>
                    Website or Google Business Profile <span className="text-slate-400 font-normal text-xs sm:text-sm ml-1">(Optional)</span>
                  </label>
                  <input
                    id="audit-website"
                    type="text"
                    name="Website or Google Business Profile"
                    placeholder="yoursite.com or Google Maps link"
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>

                {/* Your Biggest Challenge */}
                <div className="sm:col-span-2">
                  <label htmlFor="audit-challenge" className={labelClass}>
                    Your Biggest Challenge <span className="text-slate-400 font-normal text-xs sm:text-sm ml-1">(Optional)</span>
                  </label>
                  <input
                    id="audit-challenge"
                    type="text"
                    name="Your Biggest Challenge"
                    placeholder="e.g. Need more 3-car garages, tired of shared Angi leads, or need an instant quote calculator"
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>
              </div>

              {error && (
                <div className="p-3.5 rounded-xl bg-red-950/80 text-red-300 text-xs sm:text-sm font-medium border border-red-800/80">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <div className="sm:col-span-2 pt-3 sm:pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group overflow-hidden px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-brand-lime text-slate-950 font-black text-sm sm:text-base tracking-wide transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(154,251,22,0.6)] active:scale-95 select-none touch-manipulation disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Request...
                      </>
                    ) : (
                      'Send Me My Free 60-Second Video Audit →'
                    )}
                  </span>
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-out" />
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
