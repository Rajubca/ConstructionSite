import { prisma } from "@/lib/prisma";
import { ProjectGrid } from "@/components/ProjectGrid";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Portfolio - Anand Construction",
  description: "View our past construction projects including demolition, plastering, and plumbing.",
};

export default async function Portfolio() {
  const projects = await prisma.project.findMany();

  return (
    <div className="bg-[var(--background)] min-h-screen py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">Our Work</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--foreground)]">Our Portfolio</h1>
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
            A showcase of our dedication to quality and craftsmanship. From residential renovations to large-scale construction.
          </p>
        </AnimatedSection>

        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}
