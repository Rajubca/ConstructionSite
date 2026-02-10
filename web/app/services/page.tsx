import { prisma } from "@/lib/prisma";
import { ServiceList } from "@/components/ServiceList";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Services - Anand Construction",
  description: "Demolition, Plaster, Plumbing and more construction services in Anand.",
};

export default async function Services() {
  const services = await prisma.service.findMany();

  return (
    <div className="bg-[var(--background)] min-h-screen py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--foreground)]">Our Services</h1>
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
            We provide a wide range of construction services. Each service is executed with precision and high-quality materials.
          </p>
        </AnimatedSection>

        <ServiceList services={services} />
      </div>
    </div>
  );
}
