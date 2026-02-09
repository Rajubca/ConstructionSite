import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Portfolio - Anand Construction",
  description: "View our recent construction projects in Anand, Gujarat.",
};

export default async function Portfolio() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>
      <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
        See our recent projects in and around Anand. From demolition to finishing touches.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-64 bg-slate-100 overflow-hidden relative">
              {project.videoUrl ? (
                 <iframe
                   src={project.videoUrl.includes('youtube') || project.videoUrl.includes('youtu.be') ? project.videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'www.youtube.com/embed/') : project.videoUrl}
                   className="w-full h-full"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                   title={project.title}
                 ></iframe>
              ) : project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full text-slate-400">No media</div>
              )}
            </div>
            <div className="p-6">
               <div className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-2">{project.category || 'Construction'}</div>
               <h2 className="text-xl font-bold mb-2">{project.title}</h2>
               <p className="text-slate-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      {projects.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          No projects found. Check back later!
        </div>
      )}
    </div>
  );
}
