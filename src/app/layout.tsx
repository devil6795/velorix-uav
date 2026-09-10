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
  description:
    "VELORIX UAV develops next-generation unmanned aerial systems, propulsion, flight technologies and mission-focused UAV platforms.",
  openGraph: {
    title: "VELORIX UAV — Built For What Comes Next.",
    description:
      "VELORIX UAV develops next-generation unmanned aerial systems, propulsion, flight technologies and mission-focused UAV platforms.",
    type: "website",
  },
  robots: "index, follow",
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
