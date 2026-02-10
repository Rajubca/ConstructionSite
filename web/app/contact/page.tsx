import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - Anand Construction",
  description: "Get in touch for your construction needs in Anand.",
};

export default function Contact() {
  return (
    <div className="bg-[var(--background)] min-h-screen py-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="text-center mb-16">
          <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--foreground)]">Contact Us</h1>
          <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
            We are here to answer any questions you may have about our construction services. Reach out to us and we'll respond as soon as we can.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
           <AnimatedSection direction="left" className="space-y-8">
             <div className="bg-[var(--card)] p-8 rounded-xl border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow">
               <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Our Office</h2>
               <address className="not-italic text-[var(--muted-foreground)] text-lg leading-relaxed">
                 C23, Gangdev Nagar<br />
                 Anand, Gujarat<br />
                 India
               </address>
             </div>

             <div className="bg-[var(--card)] p-8 rounded-xl border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow">
               <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Contact Info</h2>
               <div className="space-y-3 text-lg">
                 <p className="flex items-center gap-3">
                   <span className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">📞</span>
                   <a href="tel:+919876543210" className="hover:text-[var(--primary)] transition-colors">+91 98765 43210</a>
                 </p>
                 <p className="flex items-center gap-3">
                   <span className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">✉️</span>
                   <a href="mailto:info@example.com" className="hover:text-[var(--primary)] transition-colors">info@example.com</a>
                 </p>
               </div>
             </div>

             <div className="p-6 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--primary)]/10 rounded-full blur-xl -mr-8 -mt-8" />
               <p className="font-bold text-[var(--primary)] text-lg flex items-center gap-2">
                 ⚠️ Note: We work with material only.
               </p>
               <p className="text-[var(--muted-foreground)] mt-2 text-sm font-medium">This ensures quality and durability for all our projects.</p>
             </div>
           </AnimatedSection>

           <ContactForm />
        </div>
      </div>
    </div>
  );
}
