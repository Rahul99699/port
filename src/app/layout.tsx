import type { Metadata } from "next";
import { Syne, Share_Tech_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { config } from "@/data/config";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import AppOverlays from "@/components/app-overlays";
import { Providers } from "@/components/providers";
import CustomCursor from "@/components/ui/custom-cursor";

export const metadata: Metadata = {
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    images: [
      {
        url: config.ogImg,
        width: 800,
        height: 600,
        alt: "Portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["800"],
});

const mono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[syne.variable, mono.variable, dmSans.variable, "font-sans"].join(" ")} suppressHydrationWarning>
      <head>
        <Script
          defer
          src={process.env.UMAMI_DOMAIN}
          data-website-id={process.env.UMAMI_SITE_ID}
        ></Script>
        {/* <Analytics /> */}
      </head>
      <body className="overflow-x-hidden bg-[#040a1c] text-[#e5e7eb] antialiased">
        <Providers>
          <CustomCursor />
          <Header />
          {children}
          <Footer />
          <AppOverlays />
        </Providers>
      </body>
    </html>
  );
}
