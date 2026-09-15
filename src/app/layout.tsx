import type { Metadata } from "next";
import { Asul, Manrope } from "next/font/google";
import "./globals.css";

const asul = Asul({
  weight: ["400", "700"],
  variable: "--font-asul",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TIDI - Total Impact Development Initiative",
  description: "Igniting Hope, Shaping Futures.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrolling } from "@/animations/SmoothScrolling";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${asul.variable} ${manrope.variable} font-sans antialiased`}>
      <body className="min-h-screen flex flex-col bg-brand-offwhite text-brand-navy">
        <SmoothScrolling>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}

