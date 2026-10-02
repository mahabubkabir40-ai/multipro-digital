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
  "image": "https://www.multiprodigital.com/logo.png",
  "description": "Multipro Digital is a specialized digital marketing agency helping epoxy and concrete coating contractors dominate local search and capture exclusive high-ticket floor jobs.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "serviceType": "Epoxy Flooring SEO, Concrete Coatings Lead Generation, Web Design for Contractors",
  "sameAs": [
    "https://www.instagram.com/multiprodigitalagency/",
    "https://www.facebook.com/multiprodigitalagency"
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
        <meta name="google-site-verification" content="dvYw3SsPD-S8VEQGz5CrbmcTIZI3AkQApXZb3gIRXss" />
        <meta name="msvalidate.01" content="246F3C1A5C4046378DD8057F1C64B4CE" />
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
