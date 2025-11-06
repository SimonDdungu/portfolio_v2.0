import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components/1_Global";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simon Ddungu Portfolio",
  description: "I'm a full stack developer and computer science student. This site is where I share my projects, document what I'm learning, and talk a bit about who I am and where I want to go in tech.",
  openGraph: {
    title: "Simon's Portfolio",
    description: "I'm a full stack developer and computer science student. This site is where I share my projects, document what I'm learning, and talk a bit about who I am and where I want to go in tech.",
    url: "https://simonddungu-portfolio.vercel.app/",
    type: "website",
    siteName: "Simon Ddungu Portfolio",
    images: [
      {
        url: "https://simonddungu-portfolio.vercel.app/simons-og-image.png",
        width: 1200,
        height: 630,
        alt: "Simon's Portfolio"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Simon's Portfolio" />
        <meta name="theme-color" content="black"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Navbar />
          <main className="pt-16">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
