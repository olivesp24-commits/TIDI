"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setIsSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again later.");
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-48 pb-24 bg-brand-offwhite min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="font-asul text-5xl font-bold text-brand-navy mb-6">Contact Us</h1>
            <p className="text-lg text-brand-navy/80 mb-8">
              Have questions about our programs or want to learn more about how you can support TIDI? We'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-brand-navy">Email</h3>
                <p className="text-brand-navy/70">totalimpactinitaitive@gmail.com</p>
              </div>
              <div>
                <h3 className="font-bold text-brand-navy">Phone</h3>
                <div className="text-brand-navy/70 flex flex-col gap-1 mt-1">
                  <a href="tel:09151214069" className="hover:text-brand-lavender transition-colors">09151214069</a>
                  <a href="tel:07076071389" className="hover:text-brand-lavender transition-colors">07076071389</a>
                  <a href="tel:07033988545" className="hover:text-brand-lavender transition-colors">07033988545</a>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-brand-navy">Office</h3>
                <p className="text-brand-navy/70">123 Development Way<br/>Cityville, State 12345</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-brand-lavender-tint shadow-sm">
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center">
                <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
                <Button variant="secondary" className="mt-6" onClick={() => setIsSuccess(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="hidden" name="form_type" value="Contact Message" />
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-brand-navy">Name</label>
                  <input type="text" id="name" name="name" className="border border-brand-lavender-tint rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender focus:border-transparent text-brand-navy" placeholder="Jane Doe" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-brand-navy">Email</label>
                  <input type="email" id="email" name="email" className="border border-brand-lavender-tint rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender focus:border-transparent text-brand-navy" placeholder="jane@example.com" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-bold text-brand-navy">Message</label>
                  <textarea id="message" name="message" rows={5} className="border border-brand-lavender-tint rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender focus:border-transparent text-brand-navy resize-none" placeholder="How can we help you?" required></textarea>
                </div>
                
                {error && <p className="text-red-500 text-sm">{error}</p>}
                
                <Button type="submit" variant="primary" className="mt-4" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
