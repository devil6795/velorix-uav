import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { GridBackground } from "@/components/background/GridBackground";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VELORIX UAV — Built For What Comes Next.",
  description: "VELORIX UAV develops next-generation unmanned aerial systems, tactical drones, propulsion, flight technologies and mission-focused autonomous aerospace platforms.",
  keywords: ["UAV", "Unmanned Aerial Vehicles", "Aerospace", "Defense Drones", "Tactical UAV", "Autonomous Flight", "UAV Propulsion", "Drone Manufacturer"],
  authors: [{ name: "Velorix Engineering" }],
  creator: "VELORIX UAV",
  publisher: "VELORIX UAV",
  metadataBase: new URL("https://velorix-uav.vercel.app"),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "VELORIX UAV — Next-Generation Aerial Systems",
    description: "Engineering intelligent autonomous systems for strategic superiority. Advanced airframes, tactical avionics, and next-generation payload integration.",
    url: "https://velorix-uav.vercel.app",
    siteName: "VELORIX UAV",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VELORIX UAV Tactical Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VELORIX UAV — Aerospace Engineering",
    description: "Next-generation unmanned aerial systems, tactical drones, and mission-focused autonomous flight technologies.",
    images: ["/og-image.jpg"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VELORIX UAV",
  "url": "https://velorix-uav.vercel.app",
  "description": "VELORIX UAV develops next-generation unmanned aerial systems, tactical drones, propulsion, flight technologies and mission-focused autonomous aerospace platforms.",
  "founder": {
    "@type": "Person",
    "name": "Shantanu",
    "url": "https://shantanu-portfolio-eight.vercel.app/"
  },
  "industry": "Aerospace & Defense"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-background text-text-primary font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GridBackground />
        <ScrollProgress />
        <CustomCursor />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
