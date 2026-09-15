import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-brand-navy pt-20 pb-10 text-brand-offwhite">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-12">
          
          {/* Column 1: Brand (Takes up 4 cols on large screens) */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Link href="/" className="flex items-center">
              <Image src="/brand/custom-white-logo.png" alt="TIDI Logo" width={240} height={240} className="h-24 w-auto object-contain" />
            </Link>
            <p className="text-brand-lavender-tint/70 text-sm leading-relaxed max-w-sm">
              Total Impact Development Initiative. Igniting Hope, Shaping Futures. We deliver holistic, community-driven programs to break cycles of poverty and vulnerability, bridging care, and driving sustainable outcomes.
            </p>
          </div>
          
          {/* Column 2: Organisation */}
          <div className="flex flex-col gap-6 lg:col-span-3 lg:ml-8">
            <h3 className="text-xs font-bold tracking-widest uppercase text-white">Organisation</h3>
            <nav className="flex flex-col gap-4 text-sm text-brand-lavender-tint/70">
              <Link href="/about" className="hover:text-white transition-colors">About Our Work</Link>
              <Link href="/about" className="hover:text-white transition-colors">Our Approach</Link>
              <Link href="/get-involved" className="hover:text-white transition-colors">Get Involved</Link>
              <Link href="/updates" className="hover:text-white transition-colors">Updates & News</Link>
            </nav>
          </div>
          
          {/* Column 3: Pillars */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <h3 className="text-xs font-bold tracking-widest uppercase text-white">Pillars</h3>
            <nav className="flex flex-col gap-4 text-sm text-brand-lavender-tint/70">
              <Link href="/pillars/education" className="hover:text-white transition-colors">Education & Literacy</Link>
              <Link href="/pillars/health" className="hover:text-white transition-colors">Health & Wellness</Link>
              <Link href="/pillars/human-services" className="hover:text-white transition-colors">Human Services</Link>
            </nav>
          </div>
          
          {/* Column 4: Get In Touch */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h3 className="text-xs font-bold tracking-widest uppercase text-white">Get In Touch</h3>
            <div className="flex flex-col gap-4 text-sm text-brand-lavender-tint/70">
              <a href="mailto:totalimpactinitaitive@gmail.com" className="hover:text-white transition-colors break-words">totalimpactinitaitive@gmail.com</a>
              <div className="flex flex-col gap-1">
                <a href="tel:09151214069" className="hover:text-white transition-colors">09151214069</a>
                <a href="tel:07076071389" className="hover:text-white transition-colors">07076071389</a>
                <a href="tel:07033988545" className="hover:text-white transition-colors">07033988545</a>
              </div>
              <Link href="/contact" className="hover:text-white transition-colors pt-2">Contact Form</Link>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-brand-lavender/10 pt-8 text-xs text-brand-lavender-tint/50 md:flex-row">
          <p>© {new Date().getFullYear()} Total Impact Development Initiative. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 font-medium">
            <a href="https://x.com/Total_impact_D" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X (Twitter)</a>
            <a href="https://facebook.com/Totalimpactdevelopmentinitiative" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            <a href="https://instagram.com/total_impact1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
