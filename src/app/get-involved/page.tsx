"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Handshake, Heart, Send, HeartHandshake } from "lucide-react";

function GetInvolvedContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "partner"; // 'partner', 'volunteer', 'donate'
  
  const [activeTab, setActiveTab] = useState<string>(initialType);

  // Sync state if URL changes
  useEffect(() => {
    const type = searchParams.get("type");
    if (type && ["partner", "volunteer", "donate"].includes(type)) {
      setActiveTab(type);
    }
  }, [searchParams]);

  return (
    <div className="bg-brand-offwhite min-h-screen pt-40 md:pt-48 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="font-asul text-4xl md:text-5xl font-bold text-brand-navy mb-6">Get Involved</h1>
          <p className="text-lg text-brand-navy/70 leading-relaxed max-w-2xl mx-auto">
            Whether you want to partner with us, volunteer your time, or support our programs financially, your involvement makes our impact possible.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row bg-white rounded-2xl p-2 shadow-sm border border-brand-lavender-tint/50 mb-12">
          <button 
            onClick={() => setActiveTab("partner")}
            className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm transition-colors ${activeTab === 'partner' ? 'bg-brand-navy text-white' : 'text-brand-navy/70 hover:bg-brand-lavender-tint/30'}`}
          >
            <Handshake className="w-4 h-4" />
            Partner With Us
          </button>
          <button 
            onClick={() => setActiveTab("volunteer")}
            className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm transition-colors ${activeTab === 'volunteer' ? 'bg-brand-navy text-white' : 'text-brand-navy/70 hover:bg-brand-lavender-tint/30'}`}
          >
            <HeartHandshake className="w-4 h-4" />
            Volunteer
          </button>
          <button 
            onClick={() => setActiveTab("donate")}
            className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm transition-colors ${activeTab === 'donate' ? 'bg-brand-navy text-white' : 'text-brand-navy/70 hover:bg-brand-lavender-tint/30'}`}
          >
            <Heart className="w-4 h-4" />
            Donate
          </button>
        </div>

        {/* Forms Container */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-brand-lavender-tint/50 relative overflow-hidden">
          
          {/* Partner Form */}
          {activeTab === "partner" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-asul text-3xl font-bold text-brand-navy mb-2">Partnership Application</h2>
              <p className="text-brand-navy/70 mb-8">
                For institutions, government bodies, NGOs, and corporations looking to collaborate on sustainable impact.
              </p>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Contact Person Name</label>
                    <input type="text" className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Organization Name</label>
                    <input type="text" className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all" placeholder="ABC Corp" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Email Address</label>
                    <input type="email" className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all" placeholder="john@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Phone Number</label>
                    <input type="tel" className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all" placeholder="+234..." required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">Partnership Category</label>
                  <select className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all text-brand-navy" required>
                    <option value="">Select a category</option>
                    <option value="corporate">Corporate Partner</option>
                    <option value="ngo">NGO / Non-Profit</option>
                    <option value="government">Government Agency</option>
                    <option value="academic">Academic Institution</option>
                    <option value="individual">Individual Partner</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">How would you like to partner with us?</label>
                  <textarea rows={5} className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all resize-none" placeholder="Describe your proposed partnership..." required></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full md:w-auto mt-4 px-8 py-4">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Partnership Request
                </Button>
              </form>
            </div>
          )}

          {/* Volunteer Form */}
          {activeTab === "volunteer" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-asul text-3xl font-bold text-brand-navy mb-2">Volunteer Registration</h2>
              <p className="text-brand-navy/70 mb-8">
                Join our network of dedicated volunteers contributing their time and skills to our field operations.
              </p>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Full Name</label>
                    <input type="text" className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all" placeholder="Jane Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Email Address</label>
                    <input type="email" className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all" placeholder="jane@example.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Phone Number</label>
                    <input type="tel" className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all" placeholder="+234..." required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Location (City, State)</label>
                    <input type="text" className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all" placeholder="Calabar, Cross River" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">Area of Interest / Skills</label>
                  <select className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all text-brand-navy" required>
                    <option value="">Select primary interest</option>
                    <option value="medical">Medical / Healthcare</option>
                    <option value="education">Education / Teaching</option>
                    <option value="logistics">Logistics & Operations</option>
                    <option value="media">Media & Communications</option>
                    <option value="general">General Volunteer</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">Tell us a bit about yourself</label>
                  <textarea rows={4} className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all resize-none" placeholder="Share your experience and why you want to volunteer..." required></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full md:w-auto mt-4 px-8 py-4">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Application
                </Button>
              </form>
            </div>
          )}

          {/* Donate Form */}
          {activeTab === "donate" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lavender/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <h2 className="font-asul text-3xl font-bold text-brand-navy mb-2 relative z-10">Make a Donation</h2>
              <p className="text-brand-navy/70 mb-8 relative z-10">
                Your financial support directly fuels our operations in education, health, and human services.
              </p>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">Which Pillar would you like to support?</label>
                  <select className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all text-brand-navy" required>
                    <option value="general">General Fund (Use where most needed)</option>
                    <option value="education">Education & Literacy</option>
                    <option value="health">Health & Wellness</option>
                    <option value="human-services">Human Services</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Full Name</label>
                    <input type="text" className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all" placeholder="Jane Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Email Address</label>
                    <input type="email" className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all" placeholder="jane@example.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">Pledge Amount (Optional)</label>
                  <input type="number" className="w-full bg-brand-offwhite border border-brand-lavender-tint/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all" placeholder="Amount" />
                </div>

                <div className="p-6 bg-brand-navy rounded-2xl text-white mt-8">
                  <h3 className="font-bold mb-2">Direct Bank Transfer</h3>
                  <p className="text-brand-lavender-tint/80 text-sm mb-4">You can make a direct donation to our official bank account below. We will reach out to acknowledge your contribution once you submit this form.</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm bg-black/20 p-4 rounded-xl">
                    <div className="text-brand-lavender-tint">Bank Name:</div>
                    <div className="font-bold">GTBank</div>
                    <div className="text-brand-lavender-tint">Account Name:</div>
                    <div className="font-bold">Total Impact Dev Init</div>
                    <div className="text-brand-lavender-tint">Account Number:</div>
                    <div className="font-bold tracking-wider">0123456789</div>
                  </div>
                </div>

                <Button type="submit" variant="primary" className="w-full md:w-auto mt-4 px-8 py-4">
                  <Send className="w-4 h-4 mr-2" />
                  Register Donation Pledge
                </Button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default function GetInvolvedPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-offwhite"></div>}>
      <GetInvolvedContent />
    </Suspense>
  );
}
