import { prisma } from "@/lib/prisma"
import { deleteService } from "@/app/actions"
import { Button } from "@/components/ui/Button"
import { ServiceForm } from "@/components/admin/ServiceForm"

export default async function ServicesManager() {
  const services = await prisma.service.findMany()

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800">Manage Services</h1>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold mb-6 text-slate-700">Add New Service</h2>
        <ServiceForm />
      </div>

      <div className="grid gap-4">
        {services.map(service => (
          <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex justify-between items-center hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              {service.imageUrl && <img src={service.imageUrl} className="h-12 w-12 rounded-lg object-cover bg-slate-100" />}
              <div>
                <h3 className="font-bold text-slate-800">{service.title}</h3>
                <p className="text-sm text-slate-500 line-clamp-1">{service.description}</p>
              </div>
            </div>
            <form action={async () => {
              "use server"
              await deleteService(service.id)
            }}>
              <Button variant="danger" size="sm">Delete</Button>
            </form>
          </div>
        ))}
        {services.length === 0 && <p className="text-slate-500 text-center py-8">No services found.</p>}
      </div>
    </div>
  )
}
