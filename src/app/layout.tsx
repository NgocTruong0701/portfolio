import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const openSansItalic = localFont({
  src: "./fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf",
  variable: "--font-openSans-italic",
  weight: "100 900",
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const openSans = localFont({
  src: "./fonts/OpenSans-VariableFont_wdth,wght.ttf",
  variable: "--font-openSans",
  weight: "100 900",
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const firaCode = localFont({
  src: "./fonts/FiraCode-VariableFont_wght.ttf",
  variable: "--font-firaCode",
  weight: "300 700",
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
});

export const metadata: Metadata = {
  title: "LNT | Home",
  description: "Le Ngoc Truong - Software Developer portfolio, showcasing my projects, skills and experiences in web development.",
  keywords: ["Le Ngoc Truong", "Software Developer", "Web Developer", "Frontend Developer", "Backend Developer", "Portfolio", "React", "NextJS"],
  creator: "Le Ngoc Truong",
  authors: [{ name: "Le Ngoc Truong" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col h-screen overflow-hidden min-h-screen antialiased bg-background text-secondary-1 ${openSans.variable} 
        ${firaCode.variable} 
        ${openSansItalic.variable} `}
      >
        <Header />
        <main className="flex-1 h-[calc(100vh-104px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
