"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SmoothScrolling } from "@/animations/SmoothScrolling";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return (
      <main className="flex-1 h-screen w-screen overflow-hidden">
        {children}
      </main>
    );
  }

  return (
    <SmoothScrolling>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </SmoothScrolling>
  );
}
