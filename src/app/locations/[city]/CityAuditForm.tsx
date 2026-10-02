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
          'City & State': data['City & State'] || defaultCity,
          _ts: mountedTime,
          _subject: `⚡ Territory Audit Request: ${data['Business Name'] || data.Name} (${defaultCity})`,
          source: `location-hero-${defaultCity.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
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
    'w-full bg-[#06101e] border border-slate-700/70 rounded-xl px-3.5 py-2.5 sm:py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:bg-[#071324] focus:border-[#1da4ff] focus:ring-2 focus:ring-[#1da4ff]/30 transition-all shadow-inner';
  const labelClass = 'block text-white text-xs sm:text-sm font-bold mb-1.5';

  if (isSuccess) {
    return (
      <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-14 h-14 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-3 shadow-[0_0_30px_rgba(154,251,22,0.4)]">
          <svg className="w-7 h-7 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-serif font-black text-white mb-1.5">Territory Request Received!</h3>
        <p className="text-slate-300 text-xs sm:text-sm">Redirecting to your confirmation page...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Anti-spam honeypots & timing */}
      <input type="hidden" name="_ts" value={mountedTime} />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
      <input type="text" name="_hp_company_website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
            Business Name <span className="text-slate-400 font-normal text-xs">(Optional)</span>
          </label>
          <input
            id="loc-business"
            type="text"
            name="Business Name"
            placeholder="e.g. Apex Coatings"
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
            placeholder={defaultCity ? `e.g. ${defaultCity}` : 'e.g. Dallas, TX'}
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
            placeholder="john@apexepoxy.com"
            required
            disabled={isSubmitting}
            className={inputClass}
          />
        </div>

        {/* Website or Google Business Profile */}
        <div>
          <label htmlFor="loc-website" className={labelClass}>
            Website / GBP <span className="text-slate-400 font-normal text-xs">(Optional)</span>
          </label>
          <input
            id="loc-website"
            type="text"
            name="Website or Google Business Profile"
            placeholder="yoursite.com or Maps link"
            disabled={isSubmitting}
            className={inputClass}
          />
        </div>

        {/* Your Biggest Challenge */}
        <div className="sm:col-span-2">
          <label htmlFor="loc-challenge" className={labelClass}>
            Your Biggest Challenge <span className="text-slate-400 font-normal text-xs">(Optional)</span>
          </label>
          <input
            id="loc-challenge"
            type="text"
            name="Your Biggest Challenge"
            placeholder="e.g. Need more 3-car garages, tired of shared Angi leads"
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

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="relative group overflow-hidden w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-brand-lime text-slate-950 font-black text-sm sm:text-base tracking-wide transition-all duration-300 transform hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(154,251,22,0.6)] active:scale-95 select-none touch-manipulation disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
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

      <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-400">
        <span>🔒 100% Free Video</span>
        <span>•</span>
        <span>No Sales Calls</span>
        <span>•</span>
        <span>Strictly 1 Partner</span>
      </div>
    </form>
  );
}
