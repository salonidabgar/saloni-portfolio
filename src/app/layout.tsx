import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import MouseSpotlight from "@/components/MouseSpotlight";
import Starfield from "@/components/Starfield";

export const metadata: Metadata = {
  title: "Saloni Dabgar | Software Developer",
  description: "Full-stack software developer specializing in embedded systems, blockchain, and modern web applications. IIT Kanpur alumna, currently at Jaguar Land Rover.",
  keywords: ["software developer", "embedded systems", "full-stack", "blockchain", "portfolio", "Saloni Dabgar", "IIT Kanpur", "Jaguar Land Rover"],
  authors: [{ name: "Saloni Dabgar" }],
  creator: "Saloni Dabgar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://salonidabgar.com",
    siteName: "Saloni Dabgar",
    title: "Saloni Dabgar | Software Developer",
    description: "Full-stack software developer crafting embedded systems, blockchain solutions, and modern web apps.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saloni Dabgar | Software Developer",
    description: "Full-stack software developer crafting embedded systems, blockchain solutions, and modern web apps.",
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
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen flex flex-col grain">
        <div className="aurora" />
        <Starfield />
        <MouseSpotlight />
        <CustomCursor />
        <Navigation />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
