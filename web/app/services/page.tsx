import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Services - Anand Construction",
  description: "Demolition, Plaster, Plumbing and more construction services in Anand.",
};

export default async function Services() {
  const services = await prisma.service.findMany();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
        We provide a wide range of construction services. Each service is executed with precision and high-quality materials.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            {service.imageUrl ? (
              <div className="h-48 bg-slate-100 overflow-hidden relative">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
              </div>
            ) : (
               <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-400">
                 No Image
               </div>
            )}
            <div className="p-6 flex-1">
              <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
              <p className="text-slate-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
