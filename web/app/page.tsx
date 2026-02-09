import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const services = await prisma.service.findMany({ take: 3 });

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Placeholder for hero image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40" />

        <div className="relative z-20 container mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Building Dreams in <span className="text-amber-500">Anand</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto">
            Professional construction services including demolition, plastering, and plumbing. Quality work with premium materials.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg">Get a Quote</Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">View Our Work</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-slate-600">We offer a modular approach to construction. Choose exactly what you need.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <Link href="/services" className="text-amber-600 font-medium hover:underline">Learn more &rarr;</Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services">
            <Button variant="secondary">View All Services</Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
           <p className="text-lg mb-8 opacity-90">We work with material only to ensure the highest quality standards.</p>
           <Link href="/contact">
             <Button size="lg" className="bg-white text-amber-600 hover:bg-slate-100">Contact Us Now</Button>
           </Link>
        </div>
      </section>
    </div>
  );
}
