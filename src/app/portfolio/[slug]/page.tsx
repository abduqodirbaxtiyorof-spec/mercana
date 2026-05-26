import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MicasaBody } from "@/components/micasa/MicasaBody";
import { MicasaFooter } from "@/components/micasa/MicasaFooter";
import { MicasaMoreProjects } from "@/components/micasa/MicasaMoreProjects";
import { MicasaNavbar } from "@/components/micasa/MicasaNavbar";
import { MicasaWorkGallery } from "@/components/micasa/MicasaWorkGallery";
import {
  getAllProjects,
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/projects";
import { buildDefaultMetadata, buildProjectMetadata } from "@/lib/site-metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

export const dynamicParams = true;

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildDefaultMetadata();
  }

  return buildProjectMetadata(
    slug,
    project.title,
    project.subtitle,
    project.description,
    project.coverImage.src,
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const hasImages = project.images.some((img) => img.src.length > 0);
  const heroSrc = hasImages ? project.heroImage.src : "";

  return (
    <MicasaBody
      className={`work-template-default single single-work postid-${project.slug} ${project.slug} app-data index-data singular-data single-data single-work-data single-work-${project.slug}-data`}
    >
      <MicasaNavbar sticky heroOverlay active="portfolio" />
      <div className="hero-wrapper">
        <div
          className="header hero"
          style={
            heroSrc
              ? { backgroundImage: `url(${heroSrc})` }
              : { background: "#f4f5f5" }
          }
        >
          {!heroSrc && (
            <span style={{ color: "#8a8a8a", fontSize: "15px" }}>
              No hero image — add files to public/project/{project.slug}
            </span>
          )}
        </div>
      </div>
      <div className="content-wrap">
        <div id="content" className="content" role="document">
          <main className="main">
            <div className="work-overview">
              <div className="container">
                <div className="row">
                  <div className="col-lg-1" />
                  <div className="col-sm-12 col-md-12 col-lg-4 scroll-reveal">
                    <h1>{project.title}</h1>
                    <h2>{project.subtitle}</h2>
                    <h3>Tashkent, Uzbekistan</h3>
                  </div>
                  <div className="col-lg-1" />
                  <div className="col-sm-12 col-md-12 col-lg-5 scroll-reveal delay">
                    <p>{project.description || `${project.title} — a curated interior by MERCANA Design Studio.`}</p>
                  </div>
                  <div className="col-lg-1" />
                </div>
              </div>
            </div>

            <MicasaWorkGallery images={project.images} projectTitle={project.title} />
            <MicasaMoreProjects projects={allProjects} currentSlug={project.slug} />
          </main>
        </div>
      </div>
      <MicasaFooter />
    </MicasaBody>
  );
}
