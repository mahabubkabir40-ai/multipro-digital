import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import GoogleAnalyticsDeferred from "@/components/GoogleAnalyticsDeferred";
import "./globals.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Multipro Digital",
  "url": "https://www.multiprodigital.com",
  "logo": "https://www.multiprodigital.com/logo.png",
  "image": "https://www.multiprodigital.com/blog-cover-movers.png",
  "description": "Multipro Digital is a specialized local SEO and digital marketing agency dedicated exclusively to helping moving companies dominate local search.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "serviceType": "Local SEO for Movers, Moving Leads Generation",
  "sameAs": [
    "https://www.linkedin.com/in/mahabub-kabir/",
    "https://www.instagram.com/multiprodigitalagency/",
    "https://www.youtube.com/@MultiproMovers",
    "https://www.facebook.com/multiprodigitalagency"
  ]
};


const inter = Inter({
  variable: "--font-m-sans",
  subsets: ["latin"],
  display: "optional",
  preload: false,
});

const playfair = Playfair_Display({
  variable: "--font-m-serif",
  subsets: ["latin"],
  display: "optional",
  preload: false,
});

export const metadata: Metadata = {
  title: "Trusted Local SEO Agency for Movers | Multipro Digital",
  description: "Stop fighting over shared leads. We help USA Moving Companies dominate the Google Map Pack and get exclusive calls.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta name="google-site-verification" content="dvYw3SsPD-S8VEQGz5CrbmcTIZI3AkQApXZb3gIRXss" />
        <meta name="msvalidate.01" content="246F3C1A5C4046378DD8057F1C64B4CE" />
        {/* Preload fonts only on desktop/tablet to save mobile LCP bandwidth */}
        <link 
          rel="preload" 
          href="/_next/static/media/2a65768255d6b625-s.p.14by5b4al-y~f.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="" 
          media="(min-width: 768px)" 
        />
        <link 
          rel="preload" 
          href="/_next/static/media/83afe278b6a6bb3c-s.p.0q-301v4kxxnr.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="" 
          media="(min-width: 768px)" 
        />
        <JsonLd data={organizationSchema} />
      </head>

      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        {/* Google Analytics 4 (Deferred for PageSpeed) */}
        <GoogleAnalyticsDeferred />
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
