import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HeroProofStrip() {
  const proofItems = [
    {
      city: "Los Angeles, CA",
      badge: "25/25 #1 Pins",
      rank: "#1 Map Pack",
      keyword: "Epoxy Flooring LA",
      thumb: "/portfolio/epoxy/geogrid-la-ranking.png",
      detail: "Clean sweep across entire metro grid",
    },
    {
      city: "Phoenix, AZ",
      badge: "40+ Top Pins",
      rank: "Top 3 Cluster",
      keyword: "Epoxy Flooring Phoenix",
      thumb: "/portfolio/epoxy/geogrid-phoenix-ranking.png",
      detail: "Dominates high-ticket Valley suburbs",
    },
    {
      city: "Tampa, FL",
      badge: "27 Top-3 Pins",
      rank: "Top 3 3-Pack",
      keyword: "Epoxy Flooring Tampa FL",
      thumb: "/portfolio/epoxy/geogrid-tampa-ranking.png",
      detail: "Locked out 14 local coating competitors",
    },
  ];

  return (
    <section className="bg-slate-950 border-y border-white/10 py-6 sm:py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-lime">
              Verified Map Pack Geo-Grids
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="hidden sm:inline text-xs sm:text-sm text-slate-300">
              Live ranking data from active coating contractor markets
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#estimator"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-lime hover:underline transition-all"
            >
              <span>⚡ Try Live Floor Estimator</span>
              <span>↓</span>
            </a>
            <a 
              href="#portfolio"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:text-brand-lime transition-colors group"
            >
              <span>Inspect Full Proof Heatmaps</span>
              <ArrowRight className="w-4 h-4 text-brand-lime transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {proofItems.map((item, idx) => (
            <a
              key={idx}
              href="#portfolio"
              className="group relative flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-brand-lime/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(154,251,22,0.15)]"
            >
              {/* Micro Map Thumbnail */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-slate-950">
                <Image
                  src={item.thumb}
                  alt={`Google Map Pack Geo Grid: ${item.city}`}
                  fill
                  sizes="80px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Data Snippet */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[11px] sm:text-xs font-black text-brand-lime uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-lime shrink-0" />
                    {item.city}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime shrink-0">
                    {item.badge}
                  </span>
                </div>
                <div className="text-sm sm:text-base font-black text-white leading-tight font-serif">
                  {item.rank}
                </div>
                <div className="text-xs text-slate-300 truncate mt-0.5 font-sans">
                  {item.detail}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
