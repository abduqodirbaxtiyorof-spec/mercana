import Link from "next/link";

import {
  coverCardClass,
  coverImageClass,
  coverImageStyle,
} from "@/lib/cover-image";
import { buildPortfolioRows, colClass } from "@/lib/portfolio-grid";
import type { Project } from "@/lib/types";

interface MicasaPortfolioGridProps {
  projects: Project[];
}

export function MicasaPortfolioGrid({ projects }: MicasaPortfolioGridProps) {
  const rows = buildPortfolioRows(projects);

  if (projects.length === 0) {
    return (
      <section className="mercana-portfolio">
        <div className="container-fluid work-cards-wrapper mercana-portfolio__grid">
          <p className="mercana-portfolio__empty">
            Add project renders to{" "}
            <code>public/project/</code> to populate the portfolio.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mercana-portfolio" aria-label="Portfolio">
      <div className="container-fluid work-cards-wrapper mercana-portfolio__grid">
        {rows.map((row, rowIndex) => (
          <div className="row mercana-portfolio__row" key={`portfolio-row-${rowIndex}`}>
            {row.projects.map((project, slotIndex) => {
              const slot = row.slots[slotIndex];
              const revealClass = `scroll-reveal${slot.delay ? " delay" : ""}`;

              return (
                <div
                  key={project.slug}
                  className={`${colClass(slot.cols)} ${revealClass}`}
                  data-cols={slot.cols}
                >
                  <div
                    className={`work-card mercana-portfolio__card${slot.shadow ? " shadow" : ""} ${coverCardClass(project, slot.cols)}`}
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
                        className={coverImageClass(project, slot.cols)}
                        style={coverImageStyle(project)}
                        src={project.coverImage.src}
                        alt={project.coverImage.alt}
                        width={project.coverImage.width}
                        height={project.coverImage.height}
                        loading={rowIndex === 0 && slotIndex === 0 ? "eager" : "lazy"}
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
