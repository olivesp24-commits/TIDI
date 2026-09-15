import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 pointer-events-none">
      <header className="pointer-events-auto w-full max-w-7xl rounded-full border border-brand-lavender-tint/50 bg-brand-offwhite/95 backdrop-blur shadow-[0_4px_20px_rgb(0,0,0,0.05)] px-6 py-3 flex items-center justify-between transition-all">
        
        <Link href="/" className="flex items-center">
          <Image src="/brand/champion-blue-logo (2).png" alt="TIDI Logo" width={200} height={64} className="h-14 w-auto object-contain" priority />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/about" className="text-brand-navy transition-colors hover:text-brand-lavender">About</Link>
          <Link href="/pillars" className="text-brand-navy transition-colors hover:text-brand-lavender">Our Pillars</Link>
          <Link href="/updates" className="text-brand-navy transition-colors hover:text-brand-lavender">Updates</Link>
          <Link href="/team" className="text-brand-navy transition-colors hover:text-brand-lavender">Our Team</Link>
          <Link href="/contact" className="text-brand-navy transition-colors hover:text-brand-lavender">Contact</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link href="/get-involved">
            <Button variant="primary">Partner with us</Button>
          </Link>
        </div>
        
      </header>
    </div>
  );
}
