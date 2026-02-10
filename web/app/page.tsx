import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { prisma } from "@/lib/prisma";
import { HeroSection } from "@/components/layout/HeroSection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ServiceList } from "@/components/ServiceList";

export default async function Home() {
  const services = await prisma.service.findMany({ take: 3 });

  return (
    <div className="flex flex-col gap-0 pb-0 bg-[var(--background)] overflow-x-hidden">
      {/* Hero */}
      <HeroSection />

      {/* Services Preview */}
      <section className="py-24 px-4 bg-[var(--muted)]/30 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm">What We Do</span>
            <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">Exceptional Services</h2>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              We offer a modular approach to construction. Choose exactly what you need, executed with precision.
            </p>
          </AnimatedSection>

          <ServiceList services={services} />

          <AnimatedSection delay={0.4} className="text-center mt-16">
            <Link href="/services">
              <Button variant="secondary" size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                View All Services
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us / Features */}
      <section className="py-24 px-4 bg-[var(--secondary)] text-[var(--secondary-foreground)] relative overflow-hidden">
         {/* Abstract shapes */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--primary)]/10 to-transparent skew-x-12 translate-x-1/2 pointer-events-none" />

         <div className="container mx-auto max-w-6xl relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
               <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                 Quality Construction <br/> Without Compromise
               </h2>
               <p className="text-[var(--muted-foreground)] text-lg mb-8 leading-relaxed">
                 We believe in transparency and efficiency. By working with material only, we ensure that every brick laid and every pipe fitted meets the highest standards of safety and durability.
               </p>
               <ul className="space-y-4">
                 {['Expert Craftsmanship', 'Timely Completion', 'Premium Materials', 'Safety First'].map((item) => (
                   <li key={item} className="flex items-center gap-3 text-lg font-medium">
                     <span className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center text-[var(--secondary)] text-xs font-bold">✓</span>
                     {item}
                   </li>
                 ))}
               </ul>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
               <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-[var(--primary)]/20 group">
                 <div className="aspect-square bg-slate-800 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary)] via-transparent to-transparent opacity-60" />
               </div>
            </AnimatedSection>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--primary)] text-[var(--primary-foreground)] relative overflow-hidden">
        {/* Pattern overlay if needed */}
        <AnimatedSection className="container mx-auto px-4 text-center relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your project?</h2>
           <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
             Contact us today for a free consultation and quote. Let's build something great together.
           </p>
           <Link href="/contact">
             <Button size="lg" className="bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--secondary)] hover:text-white border-none text-lg px-10 py-6 h-auto shadow-2xl hover:shadow-none hover:scale-105 transition-all duration-300">
               Contact Us Now
             </Button>
           </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
