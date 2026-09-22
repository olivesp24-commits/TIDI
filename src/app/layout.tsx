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
  title: {
    template: "%s | TIDI",
    default: "TIDI - Total Impact Development Initiative",
  },
  description: "Igniting Hope, Shaping Futures. TIDI is a non-governmental organization committed to eradicating poverty and creating equitable opportunities across marginalized communities in Nigeria.",
  openGraph: {
    title: "TIDI - Total Impact Development Initiative",
    description: "Igniting Hope, Shaping Futures. We deliver holistic, community-driven programs that improve access to quality education, essential health services, and comprehensive human support systems.",
    url: "https://tidi.org.ng",
    siteName: "TIDI",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TIDI - Total Impact Development Initiative",
    description: "Igniting Hope, Shaping Futures.",
  },
};

import { ConditionalLayout } from "@/components/layout/ConditionalLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${asul.variable} ${manrope.variable} font-sans antialiased`}>
      <body className="min-h-screen flex flex-col bg-brand-offwhite text-brand-navy">
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}

