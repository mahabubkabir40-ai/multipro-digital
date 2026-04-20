import Link from 'next/link';

export const metadata = {
  title: 'Marketing Tips for Movers | Multipro Digital',
  description: 'Expert local SEO and marketing tips to help moving companies dominate Google Maps, get more exclusive leads, and grow their business.',
};

export default function MarketingTipsIndexPage() {
  const blogPosts = [
    {
      id: 'how-to-rank-google-maps',
      title: 'How to Rank #1 on Google Maps for Moving Companies',
      excerpt: "If you're a moving company owner watching competitors fill their top spots on Google Maps while your business sits buried on page 2, you're not alone.",
      image: '/blog-cover-movers.png',
      link: '/movers-marketing-tips/how-to-rank-google-maps-moving-companies'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">

      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-black text-[#1A365D] mb-4">
            Marketing Tips for <span className="text-brand-lime">Movers</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-sans">
            Actionable strategies and local SEO insights to help your moving company dominate the Google Map Pack and stop paying for shared leads.
          </p>
        </div>
      </section>

      {/* Blog Feed Grid */}
      <section className="py-16 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Image */}
                <Link href={post.link} target="_blank" rel="noopener noreferrer" className="aspect-[4/3] block overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={`Educational marketing guide for movers: ${post.title}`} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </Link>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <Link href={post.link} target="_blank" rel="noopener noreferrer" className="group">
                    <h2 className="text-2xl font-serif font-bold text-[#1A365D] mb-4 group-hover:text-brand-lime transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={post.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto text-[#1A365D] font-black text-xs uppercase tracking-widest hover:text-brand-lime transition-colors inline-block w-max"
                  >
                    READ MORE &raquo;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
