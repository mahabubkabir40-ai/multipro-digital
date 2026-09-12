'use client';

import React, { useState } from 'react';

export default function HeroLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedLead, setSubmittedLead] = useState<{ name: string; phone: string } | null>(null);
  const [extraWebsite, setExtraWebsite] = useState('');
  const [isAddingWebsite, setIsAddingWebsite] = useState(false);
  const [websiteAdded, setWebsiteAdded] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Honeypot — silently succeed for bots
    if (data._honey) {
      setIsSuccess(true);
      setIsSubmitting(false);
      return;
    }

    const payload = {
      ...data,
      _subject: '⚡ New Light-Form Video Audit Request',
      source: 'homepage-hero-fast',
    };

    try {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'click_audit', {
          event_category: 'CTA',
          event_label: 'Hero Fast Form',
        });
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmittedLead({
          name: String(data.Name || 'Partner'),
          phone: String(data['Phone Number'] || ''),
        });
        setIsSuccess(true);
        form.reset();
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWebsiteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!extraWebsite.trim()) return;

    setIsAddingWebsite(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Name: submittedLead?.name,
          'Phone Number': submittedLead?.phone,
          'Website or Google Business Profile': extraWebsite,
          _subject: `🔗 Website Link Added for ${submittedLead?.name || 'Lead'}`,
          source: 'hero-step-2-website',
        }),
      });
      setWebsiteAdded(true);
    } catch (err) {
      console.error('Failed to add website:', err);
    } finally {
      setIsAddingWebsite(false);
    }
  };

  const inputClass =
    'w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1da4ff] focus:ring-4 focus:ring-[#1da4ff]/10 transition-all';
  const labelClass = 'block text-[#1A365D] text-xs font-bold mb-1';

  return (
    <div id="hero-lead-card" className="relative w-full max-w-md mx-auto lg:max-w-none lg:ml-auto scroll-mt-24">
      <div className="absolute -inset-3 rounded-[2rem] bg-slate-900/40 blur-xl pointer-events-none hidden lg:block" aria-hidden />
      <div className="relative bg-white/95 backdrop-blur-md rounded-3xl border border-brand-lime/30 shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-5 sm:p-6">
        {isSuccess ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-3 shadow-[0_0_24px_rgba(154,251,22,0.45)]">
              <svg className="w-7 h-7 text-[#1A365D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-black text-[#0b1f38] mb-1">
              You&apos;re On The List, {submittedLead?.name || 'Partner'}!
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-5">
              We&apos;re queuing up your territory audit. Our team will send your personal Loom breakdown to your cell within 24 hours.
            </p>

            {/* Optional Step 2: Website / GBP URL */}
            {!websiteAdded ? (
              <form onSubmit={handleWebsiteSubmit} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left">
                <label className="block text-xs font-bold text-[#1A365D] mb-1.5">
                  Have a website or Google Maps link? <span className="text-slate-500 font-normal">(Optional)</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={extraWebsite}
                    onChange={(e) => setExtraWebsite(e.target.value)}
                    placeholder="yoursite.com or Google Maps URL"
                    className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1da4ff]"
                  />
                  <button
                    type="submit"
                    disabled={isAddingWebsite || !extraWebsite.trim()}
                    className="px-4 py-2 bg-brand-lime text-[#1A365D] font-black text-xs uppercase tracking-wider rounded-xl hover:bg-slate-900 hover:text-white transition-all disabled:opacity-40"
                  >
                    {isAddingWebsite ? 'Adding...' : 'Attach'}
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 mt-1.5">
                  Optional: Helps us analyze your exact competitors faster.
                </p>
              </form>
            ) : (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-bold text-emerald-700 flex items-center justify-center gap-1.5">
                <span>✓</span> Website link attached to your audit request!
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="mb-4 border-l-4 border-brand-lime pl-3">
              <h2 className="text-lg sm:text-xl font-serif font-black text-[#0b1f38] leading-snug">
                Get Your Free 60-Second Video Audit
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                We&apos;ll audit your Google Map Pack territory and show where competitors are stealing jobs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

              <div>
                <label htmlFor="hero-name" className={labelClass}>
                  Name <span className="text-[#1da4ff]">*</span>
                </label>
                <input
                  id="hero-name"
                  type="text"
                  name="Name"
                  placeholder="John Doe"
                  required
                  disabled={isSubmitting}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="hero-phone" className={labelClass}>
                  Cell Phone Number <span className="text-[#1da4ff]">*</span>
                </label>
                <input
                  id="hero-phone"
                  type="tel"
                  name="Phone Number"
                  placeholder="(214) 839-4912"
                  required
                  disabled={isSubmitting}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="hero-city" className={labelClass}>
                  City, State or Shop Name <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  id="hero-city"
                  type="text"
                  name="City and State"
                  placeholder="e.g. Dallas, TX or Apex Epoxy"
                  disabled={isSubmitting}
                  className={inputClass}
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 text-red-600 text-xs font-medium border border-red-100">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="relative group overflow-hidden w-full mt-2 px-4 py-3.5 rounded-2xl bg-brand-lime text-[#1A365D] font-black text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(154,251,22,0.55)] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 select-none touch-manipulation"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-[#1A365D]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending Request...
                    </>
                  ) : (
                    'Send Me My Free Video Audit →'
                  )}
                </span>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-out" />
                )}
              </button>

              <div className="flex items-center justify-center gap-3 pt-1 text-[11px] text-slate-500 font-medium">
                <span>🔒 100% Free</span>
                <span>•</span>
                <span>No Pushy Calls</span>
                <span>•</span>
                <span>1 Shop Per Market</span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
