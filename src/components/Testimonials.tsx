'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, BadgeCheck, Play } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section id="testimonials" className="py-20 sm:py-28 lg:py-32 bg-slate-950 min-h-[300px]" />;
  }

  const testimonials = [
    {
      id: 1,
      name: "Liam",
      company: "Garage Floor Pros • Orlando, FL",
      text: "Our Google Map Pack ranking soared! Multipro Digital got us into the top 3 spots, leading to a 35%+ increase in inbound garage floor estimate requests. Our installation calendar is packed.",
      rating: 5,
      image: "/avatars/epoxy/contractor-1.webp",
      isVideo: false
    },
    {
      id: 2,
      name: "Mateo",
      company: "Apex Polyaspartic Coatings • Phoenix, AZ",
      text: "Finally, I can focus on prep and topcoats, not chasing bad leads. The interactive floor price calculator on our site captures serious homeowners before they call anyone else. Huge game changer!",
      rating: 5,
      image: "/avatars/epoxy/contractor-2.webp",
      isVideo: false
    },
    {
      id: 3,
      name: "Marcus",
      company: "DFW Epoxy Systems • Plano, TX",
      text: "They truly understand the coatings industry – from flake systems to commercial epoxy bids. Multipro Digital isn't just an SEO vendor; they keep our crews booked every single week.",
      rating: 5,
      image: "/avatars/epoxy/contractor-3.webp",
      isVideo: false
    }
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime font-bold text-xs tracking-widest uppercase mb-4 sm:mb-6">
            <Star className="w-4 h-4 text-brand-lime fill-brand-lime" />
            Client Success Stories
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white font-black tracking-tight">
            What Our Partners <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-emerald-400">Are Saying</span>
          </h3>
        </div>
        
        {/* Staggered Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-10">
          {testimonials.map((review, index) => (
            <div 
              key={review.id} 
              className={`group bg-slate-900/90 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] shadow-2xl border border-white/10 hover:shadow-[0_20px_50px_-15px_rgba(154,251,22,0.15)] hover:border-brand-lime/40 transition-all duration-500 relative transform hover:-translate-y-2 flex flex-col h-full ${
                index === 1 ? 'lg:translate-y-10' : '' // Middle card offset
              }`}
            >
              
              {/* Premium Quote Icon Backdrop */}
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-brand-lime/10 transition-colors duration-500 transform group-hover:scale-110 pointer-events-none">
                <Quote size={80} strokeWidth={1} />
              </div>
              
              <div className="flex mb-6 sm:mb-8 gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-brand-lime fill-brand-lime drop-shadow-sm" />
                ))}
              </div>
              
              <p className="text-slate-200 font-sans text-base sm:text-lg leading-relaxed mb-8 relative z-10 font-medium">
                &ldquo;{review.text}&rdquo;
              </p>
              
              <div className="flex items-center pt-6 border-t border-white/10 mt-auto">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[3px] border-brand-lime mr-4 sm:mr-5 overflow-hidden flex-shrink-0 group/avatar shadow-[0_0_15px_rgba(154,251,22,0.2)]">
                  <Image 
                    src={review.image} 
                    alt={`Epoxy & coatings contractor ${review.name} - MultiPro Digital Partner`} 
                    fill
                    sizes="64px"
                    className="object-cover transition-transform duration-500 group-hover/avatar:scale-110" 
                  />
                </div>
                
                <div>
                  <h4 className="font-bold text-lg sm:text-xl text-white font-serif tracking-tight flex items-center gap-2">
                    {review.name}
                    <BadgeCheck className="w-5 h-5 text-brand-lime" />
                  </h4>
                  <p className="text-brand-lime text-xs font-bold font-sans uppercase tracking-wider mt-1">{review.company}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
