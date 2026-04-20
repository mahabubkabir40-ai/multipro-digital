import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BlogPreview() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-blue font-bold">
            Top Marketing Tips for <span className="text-brand-lime">Moving Companies!</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Link href="#" className="block group">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-brand-lime/30 transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 font-sans text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                Local SEO
              </span>
              
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-lime transition-colors">
                How to Rank #1 on Google Maps for Moving Companies
              </h3>
              
              <p className="text-lg text-gray-600 font-sans leading-relaxed mb-8">
                If you're a moving company owner watching competitors fill their top spots on Google Maps while your business sits buried on page 2, you're not alone.
              </p>
              
              <div className="flex items-center text-brand-blue font-bold font-sans group-hover:text-brand-lime transition-colors">
                Learn More <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
        </div>
        
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-gray-600 font-sans text-lg">
            Multipro Digital helps moving companies get more jobs through powerful local SEO and marketing. We make it easy for movers to rank higher, attract more customers, and stay fully booked year-round.
          </p>
        </div>
      </div>
    </section>
  );
}
