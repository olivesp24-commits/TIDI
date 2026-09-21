"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 pointer-events-none">
      <header className={`pointer-events-auto w-full max-w-7xl border border-brand-lavender-tint/50 bg-brand-offwhite/95 backdrop-blur shadow-[0_4px_20px_rgb(0,0,0,0.05)] flex flex-col transition-all overflow-hidden ${isOpen ? 'rounded-[2rem]' : 'rounded-full'}`}>
        
        <div className="flex items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Image src="/brand/champion-blue-logo (2).png" alt="TIDI Logo" width={200} height={64} className="h-14 w-auto object-contain" priority />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/about" className="text-brand-navy transition-colors hover:text-brand-lavender">About</Link>
            <Link href="/pillars" className="text-brand-navy transition-colors hover:text-brand-lavender">Our Pillars</Link>
            <Link href="/updates" className="text-brand-navy transition-colors hover:text-brand-lavender">Updates</Link>
            <Link href="/team" className="text-brand-navy transition-colors hover:text-brand-lavender">Our Team</Link>
            <Link href="/contact" className="text-brand-navy transition-colors hover:text-brand-lavender">Contact</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <Link href="/get-involved" onClick={() => setIsOpen(false)}>
                <Button variant="primary">Partner with us</Button>
              </Link>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-brand-navy hover:text-brand-lavender transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-brand-lavender-tint/30">
            <Link href="/about" className="text-brand-navy py-2 font-medium" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/pillars" className="text-brand-navy py-2 font-medium" onClick={() => setIsOpen(false)}>Our Pillars</Link>
            <Link href="/updates" className="text-brand-navy py-2 font-medium" onClick={() => setIsOpen(false)}>Updates</Link>
            <Link href="/team" className="text-brand-navy py-2 font-medium" onClick={() => setIsOpen(false)}>Our Team</Link>
            <Link href="/contact" className="text-brand-navy py-2 font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
            
            <div className="sm:hidden pt-4 border-t border-brand-lavender-tint/30">
              <Link href="/get-involved" className="w-full" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full">Partner with us</Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
