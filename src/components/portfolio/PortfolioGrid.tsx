import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/lib/types";

interface PortfolioGridProps {
  projects: Project[];
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded border border-dashed border-border bg-surface/50 px-8 py-16 text-center">
        <p className="font-display text-2xl text-foreground">No projects yet</p>
        <p className="mt-4 text-sm text-muted">
          Add images to{" "}
          <code className="text-accent">public/project/[category]/</code> — bedroom,
          bassen, kuhnya, or sanuzel.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
      {projects.map((project, index) => (
        <PortfolioCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
