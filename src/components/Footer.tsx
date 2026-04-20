import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0b1f38] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <Image 
                src="/logo.png" 
                alt="MultiPro Digital - SEO and Marketing for Movers" 
                width={120}
                height={48}
                className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-blue-200/60 font-sans text-sm leading-relaxed mb-6 max-w-xs">
              Multipro Digital helps moving companies get more jobs through powerful local SEO and marketing. We make it easy for movers to rank higher, attract more customers, and stay fully booked year-round.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-blue-200/60 hover:text-brand-lime transition-colors text-sm font-sans">About Us</Link></li>

              <li><Link href="/movers-marketing-tips" className="text-blue-200/60 hover:text-brand-lime transition-colors text-sm font-sans">Marketing Tips</Link></li>
              <li><Link href="/contact" className="text-blue-200/60 hover:text-brand-lime transition-colors text-sm font-sans">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Let's Connect</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6 mt-2">
                <Link href="#" className="text-blue-200/60 hover:text-brand-lime transition-all duration-300 hover:scale-110">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </Link>
                <Link href="#" className="text-blue-200/60 hover:text-brand-lime transition-all duration-300 hover:scale-110">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-[22px] h-[22px] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069v-2.162zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.947.072s3.668-.014 4.947-.072c4.358-.2 6.78-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.199-4.358-2.618-6.78-6.979-6.98-1.28-.059-1.689-.073-4.947-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </Link>
                <Link href="#" className="text-blue-200/60 hover:text-brand-lime transition-all duration-300 hover:scale-110">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </Link>
              </div>
              
              <Link 
                href="/contact#audit-form"
                className="inline-block text-brand-lime hover:text-white font-bold text-sm tracking-wide transition-colors border-b-2 border-brand-lime hover:border-white pb-1 w-max"
              >
                Get Your Free Audit &rarr;
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:mahabubkabir@multiprodigital.com" className="inline-flex items-center gap-3 text-blue-200/60 hover:text-brand-lime transition-colors text-sm font-sans break-all">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  mahabubkabir@multiprodigital.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-brand-lime flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200/40 text-xs font-sans mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MultiPro Digital. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-blue-200/40 hover:text-brand-lime transition-colors text-xs font-sans">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
