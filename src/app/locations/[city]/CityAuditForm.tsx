'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  defaultCity?: string;
}

export default function CityAuditForm({ defaultCity = '' }: Props) {
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

    // Silent honeypot drop
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
          event_label: `Location Page Form - ${defaultCity}`,
        });
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          _ts: mountedTime,
          _subject: `⚡ Territory Audit Request: ${data['Business Name'] || data.Name} (${defaultCity})`,
          source: `location-page-${defaultCity.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
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
    'w-full bg-[#06101e] border border-slate-700/70 rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:bg-[#071324] focus:border-[#1da4ff] focus:ring-2 focus:ring-[#1da4ff]/30 transition-all shadow-inner';
  const labelClass = 'block text-white text-xs sm:text-sm font-bold mb-2';

  if (isSuccess) {
    return (
      <div className="py-16 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(154,251,22,0.4)]">
          <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-black text-white mb-2">Territory Request Received!</h3>
        <p className="text-slate-300 text-sm">Redirecting to your confirmation page...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      {/* Anti-spam honeypots & timing */}
      <input type="hidden" name="_ts" value={mountedTime} />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
      <input type="text" name="_hp_company_website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {/* Your Name */}
        <div>
          <label htmlFor="loc-name" className={labelClass}>
            Your Name <span className="text-[#1da4ff] font-bold ml-0.5">*</span>
          </label>
          <input
            id="loc-name"
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
          <label htmlFor="loc-business" className={labelClass}>
            Business Name <span className="text-slate-400 font-normal text-xs sm:text-sm ml-1">(Optional)</span>
          </label>
          <input
            id="loc-business"
            type="text"
            name="Business Name"
            placeholder="e.g. Apex Epoxy Coatings"
            disabled={isSubmitting}
            className={inputClass}
          />
        </div>

        {/* City & State */}
        <div>
          <label htmlFor="loc-city" className={labelClass}>
            City &amp; State <span className="text-[#1da4ff] font-bold ml-0.5">*</span>
          </label>
          <input
            id="loc-city"
            type="text"
            name="City & State"
            defaultValue={defaultCity}
            required
            disabled={isSubmitting}
            className={inputClass}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="loc-phone" className={labelClass}>
            Phone Number <span className="text-[#1da4ff] font-bold ml-0.5">*</span>
          </label>
          <input
            id="loc-phone"
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
          <label htmlFor="loc-email" className={labelClass}>
            Email Address <span className="text-[#1da4ff] font-bold ml-0.5">*</span>
          </label>
          <input
            id="loc-email"
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
          <label htmlFor="loc-website" className={labelClass}>
            Website or Google Business Profile <span className="text-slate-400 font-normal text-xs sm:text-sm ml-1">(Optional)</span>
          </label>
          <input
            id="loc-website"
            type="text"
            name="Website or Google Business Profile"
            placeholder="yoursite.com or Google Maps link"
            disabled={isSubmitting}
            className={inputClass}
          />
        </div>

        {/* Your Biggest Challenge */}
        <div className="sm:col-span-2">
          <label htmlFor="loc-challenge" className={labelClass}>
            Your Biggest Challenge in {defaultCity || 'Your Market'} <span className="text-slate-400 font-normal text-xs sm:text-sm ml-1">(Optional)</span>
          </label>
          <input
            id="loc-challenge"
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
                Checking Territory...
              </>
            ) : (
              'Check Territory & Claim Free 60-Sec Audit →'
            )}
          </span>
          {!isSubmitting && (
            <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-out" />
          )}
        </button>
      </div>
    </form>
  );
}
