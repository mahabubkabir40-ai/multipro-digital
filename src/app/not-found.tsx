import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-xl w-full text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-mono text-xs font-bold uppercase tracking-wider mb-8">
          404 Error • Page Permanently Removed
        </div>

        <h1 className="text-5xl sm:text-6xl font-black font-serif tracking-tight mb-4 text-white">
          This Page <span className="text-brand-lime">Does Not Exist</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-sans">
          The URL you requested has been permanently deleted. If you are an epoxy flooring contractor looking to dominate Google Maps and capture exclusive installation jobs, explore our current services below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-lime text-[#1A365D] font-black text-sm uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(154,251,22,0.3)] hover:scale-105 active:scale-95"
          >
            Go to Homepage &rarr;
          </Link>
          <Link
            href="/free-audit"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
          >
            Claim Free Epoxy Audit
          </Link>
        </div>
      </div>
    </main>
  );
}
