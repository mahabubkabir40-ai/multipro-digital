import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Script from "next/script";
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
});

const playfair = Playfair_Display({
  variable: "--font-m-serif",
  subsets: ["latin"],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd data={organizationSchema} />
      </head>

      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZHR9P6KVHT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZHR9P6KVHT');
          `}
        </Script>
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
