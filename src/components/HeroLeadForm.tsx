'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroLeadForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mountedTime] = useState(() => Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
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

    const payload = {
      ...data,
      _ts: mountedTime,
      _subject: '⚡ New Free 60-Second Video Audit Request',
      source: 'homepage-hero-form',
    };

    try {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'click_audit', {
          event_category: 'CTA',
          event_label: 'Hero Form',
        });
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => {
          router.push('/success');
        }, 1200);
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-[#06101e] border border-slate-700/70 rounded-xl px-3.5 py-2.5 sm:py-3 text-sm text-white focus:outline-none focus:bg-[#071324] focus:border-[#1da4ff] focus:ring-2 focus:ring-[#1da4ff]/30 transition-all shadow-inner';
  const labelClass = 'block text-white text-xs sm:text-[13px] font-bold mb-1.5';

  return (
    <div id="hero-lead-card" className="relative w-full max-w-xl mx-auto lg:max-w-none lg:ml-auto scroll-mt-24">
      <div className="absolute -inset-3 rounded-[2rem] bg-brand-lime/10 blur-2xl pointer-events-none hidden lg:block" aria-hidden />
      <div className="relative bg-[#0c182b]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-700/60 shadow-[0_20px_60px_rgba(0,0,0,0.45)] p-5 sm:p-6 md:p-7 text-white">
        {isSuccess ? (
          <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-14 h-14 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-3 shadow-[0_0_30px_rgba(154,251,22,0.4)]">
              <svg className="w-7 h-7 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-black text-white mb-1.5">Request Received!</h3>
            <p className="text-slate-300 text-xs sm:text-sm">Redirecting to your confirmation page...</p>
          </div>
        ) : (
          <>
            <div className="mb-5 border-l-4 border-brand-lime pl-3.5">
              <h2 className="text-lg sm:text-xl font-serif font-black text-white leading-snug">
                Get Your Free 60-Second Video Audit
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                We&apos;ll audit your Google Map Pack territory and show where competitors are stealing jobs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Anti-spam honeypots & timing */}
              <input type="hidden" name="_ts" value={mountedTime} />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
              <input type="text" name="_hp_company_website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Your Name */}
                <div>
                  <label htmlFor="hero-name" className={labelClass}>
                    Your Name <span className="text-[#1da4ff] font-bold ml-0.5">*</span>
                  </label>
                  <input
                    id="hero-name"
                    type="text"
                    name="Name"
                    required
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="hero-business" className={labelClass}>
                    Business Name <span className="text-slate-400 font-normal text-xs">(Optional)</span>
                  </label>
                  <input
                    id="hero-business"
                    type="text"
                    name="Business Name"
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>

                {/* City & State */}
                <div>
                  <label htmlFor="hero-city" className={labelClass}>
                    City &amp; State <span className="text-[#1da4ff] font-bold ml-0.5">*</span>
                  </label>
                  <input
                    id="hero-city"
                    type="text"
                    name="City & State"
                    required
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="hero-phone" className={labelClass}>
                    Phone Number <span className="text-[#1da4ff] font-bold ml-0.5">*</span>
                  </label>
                  <input
                    id="hero-phone"
                    type="tel"
                    name="Phone Number"
                    required
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="hero-email" className={labelClass}>
                    Email Address <span className="text-[#1da4ff] font-bold ml-0.5">*</span>
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    name="Email"
                    required
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>

                {/* Website or Google Business Profile */}
                <div>
                  <label htmlFor="hero-website" className={labelClass}>
                    Website / GBP <span className="text-slate-400 font-normal text-xs">(Optional)</span>
                  </label>
                  <input
                    id="hero-website"
                    type="text"
                    name="Website or Google Business Profile"
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>

                {/* Your Biggest Challenge */}
                <div className="sm:col-span-2">
                  <label htmlFor="hero-challenge" className={labelClass}>
                    Your Biggest Challenge <span className="text-slate-400 font-normal text-xs">(Optional)</span>
                  </label>
                  <input
                    id="hero-challenge"
                    type="text"
                    name="Your Biggest Challenge"
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-950/80 text-red-300 text-xs font-medium border border-red-800/80">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="relative group overflow-hidden w-full mt-1 px-4 py-3.5 rounded-xl sm:rounded-2xl bg-brand-lime text-slate-950 font-black text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(154,251,22,0.55)] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 select-none touch-manipulation shadow-lg"
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

              <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 pt-1 text-[10px] min-[380px]:text-[11px] sm:text-xs text-slate-400 font-medium whitespace-nowrap tracking-tight sm:tracking-normal select-none">
                <span className="inline-flex items-center gap-1">
                  <span>🔒</span> 100% Free
                </span>
                <span className="text-slate-600">•</span>
                <span>No Pushy Calls</span>
                <span className="text-slate-600">•</span>
                <span>1 Shop Per Market</span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
