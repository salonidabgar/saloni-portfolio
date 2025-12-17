import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saloni Dabgar | Software Developer",
  description: "Full-stack software developer specializing in building exceptional digital experiences. Explore my portfolio, projects, and blog.",
  keywords: ["software developer", "full-stack", "web developer", "portfolio", "Saloni Dabgar"],
  authors: [{ name: "Saloni Dabgar" }],
  creator: "Saloni Dabgar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://salonidabgar.com",
    siteName: "Saloni Dabgar",
    title: "Saloni Dabgar | Software Developer",
    description: "Full-stack software developer specializing in building exceptional digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saloni Dabgar | Software Developer",
    description: "Full-stack software developer specializing in building exceptional digital experiences.",
    creator: "@salonidabgar",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
