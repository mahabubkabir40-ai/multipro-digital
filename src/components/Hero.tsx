import Image from 'next/image';
import HeroVideo from './HeroVideo';
import HeroCTA from './HeroCTA';
import HeroLeadForm from './HeroLeadForm';

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] md:min-h-[80vh] flex flex-col justify-start lg:justify-center pt-24 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-slate-900">
      {/* 10/10 Premium Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
        
        {/* VIDEO: Gated by JS to save bandwidth on mobile */}
        <HeroVideo />
        
        {/* STATIC FALLBACK: Optimized for instant mobile LCP with subtle elegant blend */}
        <div className="absolute inset-0 lg:hidden">
          <img 
            src="/hero-bg-mobile-v3.webp" 
            alt="Premium coatings marketing background" 
            fetchPriority="high"
            decoding="sync"
            className="object-cover absolute inset-0 w-full h-full opacity-20 mix-blend-luminosity"
          />
        </div>

        {/* Navy Overlay — smooth and uniform to guarantee 100% text contrast and zero patchy boxes */}
        <div className="absolute inset-0 bg-slate-950/90 sm:bg-gradient-to-r sm:from-slate-900 sm:via-slate-900/85 sm:to-slate-900/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-900" />
        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-slate-950/50 to-transparent pointer-events-none" />
        
        {/* Subtle Tech Blueprint Grid Overlay - Hidden on mobile to save paint time */}
        <div className="hidden lg:block absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] mix-blend-overlay" />

        {/* Animated Glow Orbs - Hidden on mobile to significantly reduce LCP paint lag */}
        <div className="hidden lg:block absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/10 rounded-full blur-[128px] mix-blend-screen" />
        <div className="hidden lg:block absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[128px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left column: copy + trust (7 cols on lg, 7 cols on xl) */}
          <div className="relative min-w-0 lg:col-span-7 pr-0 lg:pr-4">
          
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-brand-lime/30 bg-brand-lime/10 lg:backdrop-blur-md mb-5 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-ping shrink-0" />
              <span className="w-2 h-2 rounded-full bg-brand-lime absolute" />
              <span className="text-brand-lime text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase font-sans">
                <span className="sm:hidden">#1 Inbound Engine for US Epoxy Pros</span>
                <span className="hidden sm:inline">#1 Inbound Booking Engine for US Epoxy &amp; Concrete Coating Contractors</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[1.75rem] xl:text-[2.15rem] font-serif font-black text-white leading-tight sm:leading-[1.25] tracking-tight mb-5 sm:mb-8 lg:drop-shadow-lg text-balance">
              <span className="block lg:whitespace-nowrap">Stop Letting Your Crews <span className="whitespace-nowrap">Sit Idle</span></span>
              <span className="block mt-1 sm:mt-2 lg:whitespace-nowrap">While Competitors Book <span className="text-brand-lime font-black whitespace-nowrap">All The 3-Car Garages.</span></span>
            </h1>
            
            <p className="mt-4 text-sm sm:text-base md:text-lg text-blue-100/90 w-full sm:max-w-2xl font-sans leading-relaxed mb-7 sm:mb-10 border-l-4 border-brand-lime pl-4 sm:pl-6">
              We help independent epoxy contractors dominate the Google Map Pack and become the #1 recommended contractor when homeowners ask Google AI, ChatGPT, or Siri for garage coating quotes—powered by custom high-speed websites and instant price calculators.
            </p>

            {/* CTA Button visible on mobile when form is below */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10 lg:hidden">
              <HeroCTA />
            </div>

            {/* Social Proof Trust Bar - Rendered immediately for better LCP metrics */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-[#0f172a] border border-white/10 w-full sm:max-w-fit shadow-xl">
              <div className="flex -space-x-4">
                  {[
                    { src: "/avatars/epoxy/contractor-1.webp", alt: "Liam - Epoxy Flooring Contractor" },
                    { src: "/avatars/epoxy/contractor-2.webp", alt: "Mateo - Garage Coatings Specialist" },
                    { src: "/avatars/epoxy/contractor-3.webp", alt: "Marcus - Concrete Coatings Owner" },
                    { src: "/avatars/epoxy/contractor-4.webp", alt: "Dan - Polyaspartic Installer" },
                    { src: "/avatars/epoxy/contractor-5.webp", alt: "Sarah - Floor Project Manager" }
                  ].map((avatar, index) => (
                    <div key={index} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-brand-lime bg-slate-800 overflow-hidden relative z-10 transition-transform duration-300 hover:scale-110 hover:z-20">
                      <Image 
                        src={avatar.src} 
                        alt={avatar.alt} 
                        width={48} 
                        height={48} 
                        className="w-full h-full object-cover"
                        quality={80} 
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="flex text-brand-lime gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-white text-sm sm:text-base font-bold font-sans tracking-wide">
                    &ldquo;Exclusive local leads. No shared Angi or Thumbtack tire-kickers.&rdquo;
                  </p>
                </div>
              </div>

          </div>

          {/* Right column: lead form (5 cols on desktop) */}
          <div className="relative min-w-0 w-full lg:col-span-5">
            <HeroLeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}
