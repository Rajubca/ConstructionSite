"use client";

import { motion } from "framer-motion";
import { StaggerContainer, itemVariants } from "@/components/ui/StaggerContainer";
import { PlayCircle, ZoomIn } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string | null;
  videoUrl?: string | null;
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-[var(--card)] border border-[var(--border)]"
        >
          <div className="aspect-video relative overflow-hidden bg-[var(--muted)]">
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[var(--muted-foreground)] bg-gradient-to-br from-[var(--background)] to-[var(--muted)]">
                No Image
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
              {project.videoUrl && (
                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-[var(--primary)] rounded-full text-white hover:scale-110 transition-transform shadow-lg" title="Watch Video">
                  <PlayCircle className="w-6 h-6" />
                </a>
              )}
              {project.imageUrl && (
                <button className="p-3 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors shadow-lg" title="View Image">
                  <ZoomIn className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>

          <div className="p-6 relative z-10 bg-[var(--card)]">
            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{project.title}</h3>
            <p className="text-[var(--muted-foreground)] text-sm line-clamp-2">{project.description}</p>
          </div>
        </motion.div>
      ))}
    </StaggerContainer>
  );
}
