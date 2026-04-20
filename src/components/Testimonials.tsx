import { Star, Quote, BadgeCheck, Play } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Garrett",
      company: "Orlando-FL",
      text: "Our Google Map Pack ranking soared! Multipro Digital got us into the top 3 spots, leading to a 30%+ increase in inbound estimate requests. Our trucks are consistently busy.",
      rating: 5,
      image: "/avatars/Garret-owner.jpg.webp",
      isVideo: false
    },
    {
      id: 2,
      name: "Adrian",
      company: "Phoenix-AZ",
      text: "Finally, I can focus on operations, not chasing marketing. Multipro Digital handles our local SEO, keeping our calendar full and predictable. Huge stress relief!",
      rating: 5,
      image: "/avatars/Adrian-owner.jpg.webp",
      isVideo: false
    },
    {
      id: 3,
      name: "David",
      company: "Plano, TX",
      text: "They truly understand the moving industry – from peak season to dispatch needs. Multipro Digital isn't just an SEO vendor; they're a partner who gets us.",
      rating: 5,
      image: "/avatars/David-Owner.jpg.webp",
      isVideo: false
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1A365D 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A365D]/5 text-[#1A365D] font-bold text-xs tracking-widest uppercase mb-6">
            <Star className="w-4 h-4 text-brand-lime fill-brand-lime" />
            Client Success Stories
          </div>
          <h3 className="text-5xl md:text-6xl font-serif text-[#1A365D] font-black tracking-tight">
            What Our Partners <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-emerald-500">Are Saying</span>
          </h3>
        </div>
        
        {/* Staggered Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-10">
          {testimonials.map((review, index) => (
            <div 
              key={review.id} 
              className={`group bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] hover:border-brand-lime/30 transition-all duration-500 relative transform hover:-translate-y-2 flex flex-col h-full ${
                index === 1 ? 'lg:translate-y-12' : '' // Middle card offset
              }`}
            >
              
              {/* Premium Quote Icon Backdrop */}
              <div className="absolute top-8 right-8 text-brand-lime/10 group-hover:text-brand-lime/20 transition-colors duration-500 transform group-hover:scale-110">
                <Quote size={80} strokeWidth={1} />
              </div>
              
              <div className="flex mb-8 gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-brand-lime fill-brand-lime drop-shadow-sm" />
                ))}
              </div>
              
              <p className="text-gray-700 font-sans text-lg leading-loose mb-10 relative z-10 font-medium">
                "{review.text}"
              </p>
              
              <div className="flex items-center pt-6 border-t border-gray-100/80 mt-auto">
                <div className="relative w-16 h-16 rounded-full border-[3px] border-brand-lime mr-5 overflow-hidden flex-shrink-0 group/avatar">
                  <img src={review.image} alt={`Moving company owner ${review.name} - MultiPro Digital Partner`} className="w-full h-full object-cover transition-transform duration-500 group-hover/avatar:scale-110" />
                </div>
                
                <div>
                  <h4 className="font-bold text-xl text-[#1A365D] font-serif tracking-tight flex items-center gap-2">
                    {review.name}
                    <BadgeCheck className="w-5 h-5 text-emerald-500" />
                  </h4>
                  <p className="text-gray-500 text-sm font-sans font-medium uppercase tracking-wider mt-1">{review.company}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
