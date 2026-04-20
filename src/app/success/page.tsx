import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Submission Received | MultiPro Digital',
  description: 'Thank you for requesting your free Mover Visibility Audit. We will be in touch shortly.',
};

export default function SuccessPage() {
  return (
    <div className="bg-[#0b1f38] min-h-screen flex items-center justify-center pt-20 pb-12 px-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/10 rounded-full blur-[128px] mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] mix-blend-screen" />

      <div className="max-w-xl w-full relative z-10 text-center">
        <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-12 md:p-16 border border-white/20 shadow-2xl animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(154,251,22,0.4)] animate-bounce">
            <svg className="w-12 h-12 text-[#0b1f38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-white font-black mb-6 leading-tight">
            Audit Request <span className="text-brand-lime">Received!</span>
          </h1>
          
          <p className="text-blue-100/70 text-lg mb-12 leading-relaxed">
            Thank you for reaching out. I'm already reviewing your details and will record your personalized visibility video within 24-48 hours. 
            <br /><br />
            Keep an eye on your inbox!
          </p>
          
          <Link 
            href="/"
            className="relative group overflow-hidden inline-flex items-center gap-2 bg-brand-lime text-[#1A365D] px-8 sm:px-10 py-5 rounded-2xl font-black text-sm sm:text-xl transition-all duration-300 active:duration-75 transform hover:scale-[1.05] active:scale-90 active:bg-white hover:shadow-[0_0_40px_rgba(154,251,22,0.6)] select-none touch-manipulation"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Return Home
              <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18m-9-9l9 9-9 9" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-[800ms] ease-out" />
          </Link>
        </div>
      </div>
    </div>
  );
}
