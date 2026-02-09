import { prisma } from "@/lib/prisma"
import { deleteProject } from "@/app/actions"
import { Button } from "@/components/ui/Button"
import { ProjectForm } from "@/components/admin/ProjectForm"

export default async function PortfolioManager() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800">Manage Portfolio</h1>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold mb-6 text-slate-700">Add New Project</h2>
        <ProjectForm />
      </div>

      <div className="grid gap-4">
        {projects.map(project => (
          <div key={project.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex justify-between items-center hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              {project.imageUrl ? (
                <img src={project.imageUrl} className="h-16 w-16 rounded-lg object-cover bg-slate-100" />
              ) : (
                <div className="h-16 w-16 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400">No Img</div>
              )}
              <div>
                <h3 className="font-bold text-slate-800">{project.title}</h3>
                <p className="text-sm text-slate-500 line-clamp-1">{project.description}</p>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">{project.category}</span>
              </div>
            </div>
            <form action={async () => {
              "use server"
              await deleteProject(project.id)
            }}>
              <Button variant="danger" size="sm">Delete</Button>
            </form>
          </div>
        ))}
         {projects.length === 0 && <p className="text-slate-500 text-center py-8">No projects found.</p>}
      </div>
    </div>
  )
}
