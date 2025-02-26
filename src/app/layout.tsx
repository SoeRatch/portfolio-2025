import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { Analytics } from '@vercel/analytics/next';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suraj Sharma | Software Engineer",
  description: "Portfolio of Suraj Sharma - Software Engineer specializing in scalable architectures, cloud infrastructure, and backend development.",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar
          links={[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
          ]}
          resumeUrl="/SurajSharma_Resume.pdf"
        />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
