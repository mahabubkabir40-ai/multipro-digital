import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import GoogleAnalyticsDeferred from "@/components/GoogleAnalyticsDeferred";
import "./globals.css";

const structuredSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.multiprodigital.com/#website",
      "url": "https://www.multiprodigital.com",
      "name": "MultiPro Digital",
      "description": "Specialized Local SEO & High-Performance Websites for Epoxy & Concrete Coating Contractors",
      "publisher": {
        "@id": "https://www.multiprodigital.com/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.multiprodigital.com/#organization",
      "name": "MultiPro Digital",
      "url": "https://www.multiprodigital.com",
      "logo": "https://www.multiprodigital.com/logo.png",
      "image": "https://www.multiprodigital.com/logo.png",
      "description": "MultiPro Digital helps independent epoxy and concrete coating contractors dominate Google Maps, book high-margin 3-car garage floors, and lock out local city territories.",
      "telephone": "+1-888-530-5080",
      "email": "mahabubkabir@multiprodigital.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Canada" }
      ],
      "serviceType": [
        "Epoxy Flooring SEO",
        "Google Maps 3-Pack Optimization",
        "Contractor Website Design",
        "Interactive Floor Estimators"
      ],
      "sameAs": [
        "https://www.instagram.com/multiprodigitalagency/",
        "https://www.facebook.com/multiprodigitalagency"
      ]
    }
  ]
};


const inter = Inter({
  variable: "--font-m-sans",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const playfair = Playfair_Display({
  variable: "--font-m-serif",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.multiprodigital.com"),
  title: {
    default: "Epoxy Flooring SEO & Contractor Websites | MultiPro Digital",
    template: "%s",
  },
  description: "Dominate Google Maps, stop splitting shared leads, and book high-margin 3-car garage jobs. Custom Next.js websites and instant quote calculators for epoxy shops.",
  alternates: {
    canonical: "https://www.multiprodigital.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'dvYw3SsPD-S8VEQGz5CrbmcTIZI3AkQApXZb3gIRXss',
    other: {
      'msvalidate.01': '246F3C1A5C4046378DD8057F1C64B4CE',
    },
  },
  openGraph: {
    title: "Epoxy Flooring SEO & Contractor Websites | MultiPro Digital",
    description: "Dominate Google Maps, stop splitting shared leads, and book high-margin 3-car garage jobs. Custom Next.js websites and instant quote calculators for epoxy shops.",
    url: "https://www.multiprodigital.com",
    siteName: "MultiPro Digital",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 425,
        alt: "MultiPro Digital - Epoxy Flooring Marketing and Websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epoxy Flooring SEO & Contractor Websites | MultiPro Digital",
    description: "Dominate Google Maps, stop splitting shared leads, and book high-margin 3-car garage jobs. Custom Next.js websites and instant quote calculators for epoxy shops.",
    images: ["/logo.png"],
  },
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
        <JsonLd data={structuredSchema} />
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
