import { Button } from "@/components/ui/Button";

export default function ContactPage() {
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
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-brand-navy">Name</label>
                <input type="text" id="name" className="border border-brand-lavender-tint rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender focus:border-transparent" placeholder="Jane Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-brand-navy">Email</label>
                <input type="email" id="email" className="border border-brand-lavender-tint rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender focus:border-transparent" placeholder="jane@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-brand-navy">Message</label>
                <textarea id="message" rows={5} className="border border-brand-lavender-tint rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-lavender focus:border-transparent" placeholder="How can we help you?"></textarea>
              </div>
              <Button variant="primary" className="mt-4">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
