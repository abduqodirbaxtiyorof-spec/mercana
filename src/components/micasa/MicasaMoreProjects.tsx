import Link from "next/link";

import {
  coverCardClass,
  coverImageClass,
  coverImageStyle,
} from "@/lib/cover-image";
import type { Project } from "@/lib/types";

interface MicasaMoreProjectsProps {
  projects: Project[];
  currentSlug: string;
}

export function MicasaMoreProjects({
  projects,
  currentSlug,
}: MicasaMoreProjectsProps) {
  const items = projects.filter((p) => p.slug !== currentSlug).slice(0, 3);

  if (items.length === 0) return null;

  return (
    <div className="more-projects container mercana-portfolio mercana-portfolio--compact">
      <div className="more-projects-title">
        <h4>More projects</h4>
        <div className="more-projects-nav">
          <Link href="/#content" className="animated-link">
            VIEW ALL
          </Link>
        </div>
      </div>
      <div className="row">
        {items.map((project) => (
          <div key={project.slug} className="col-sm-12 col-lg-4 col-work">
            <div
              className={`work-card mercana-portfolio__card ${coverCardClass(project, 4)}`}
            >
              <Link href={`/portfolio/${project.slug}`}>
                <div className="work-cover mercana-portfolio__cover">
                  <div className="mercana-portfolio__cover-inner">
                    <h2>{project.title}</h2>
                    <p className="mercana-portfolio__subtitle">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={coverImageClass(project, 4)}
                  style={coverImageStyle(project)}
                  src={project.coverImage.src}
                  alt={project.coverImage.alt}
                  width={project.coverImage.width}
                  height={project.coverImage.height}
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
