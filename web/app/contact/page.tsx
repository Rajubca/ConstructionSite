import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Contact Us - Anand Construction",
  description: "Get in touch for your construction needs in Anand.",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
           <div className="space-y-8">
             <div>
               <h2 className="text-2xl font-bold mb-4">Our Office</h2>
               <address className="not-italic text-slate-600 text-lg">
                 C23, Gangdev Nagar<br />
                 Anand, Gujarat<br />
                 India
               </address>
             </div>

             <div>
               <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
               <p className="text-slate-600 text-lg">
                 Phone: <a href="tel:+919876543210" className="hover:text-amber-600 transition-colors">+91 98765 43210</a><br />
                 Email: <a href="mailto:info@example.com" className="hover:text-amber-600 transition-colors">info@example.com</a>
               </p>
             </div>

             <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg">
               <p className="font-bold text-amber-800 text-lg">Note: We work with material only.</p>
               <p className="text-amber-700 mt-2">This ensures quality and durability for all our projects.</p>
             </div>
           </div>

           <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-sm">
             <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
             <form className="space-y-4">
               <div>
                 <label className="block text-sm font-medium mb-1 text-slate-700">Name</label>
                 <input type="text" className="w-full rounded-md border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="Your Name" />
               </div>
               <div>
                 <label className="block text-sm font-medium mb-1 text-slate-700">Phone</label>
                 <input type="tel" className="w-full rounded-md border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="Your Phone Number" />
               </div>
               <div>
                 <label className="block text-sm font-medium mb-1 text-slate-700">Message</label>
                 <textarea rows={4} className="w-full rounded-md border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="Tell us about your project..."></textarea>
               </div>
               <Button type="button" className="w-full h-12 text-lg">Send Message</Button>
             </form>
           </div>
        </div>
      </div>
    </div>
  );
}
