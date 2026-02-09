import { prisma } from "@/lib/prisma"

export default async function AdminDashboard() {
  const serviceCount = await prisma.service.count()
  const projectCount = await prisma.project.count()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-slate-800">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Total Services</h3>
          <p className="text-4xl font-bold text-slate-800">{serviceCount}</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Total Projects</h3>
          <p className="text-4xl font-bold text-slate-800">{projectCount}</p>
        </div>
      </div>
    </div>
  )
}
