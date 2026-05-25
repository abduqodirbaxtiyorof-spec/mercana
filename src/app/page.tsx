import { MicasaBody } from "@/components/micasa/MicasaBody";
import { MicasaFooter } from "@/components/micasa/MicasaFooter";
import { MicasaHero } from "@/components/micasa/MicasaHero";
import { MicasaNavbar } from "@/components/micasa/MicasaNavbar";
import { MicasaPortfolioGrid } from "@/components/micasa/MicasaPortfolioGrid";
import { getHeroVideoMime, getHeroVideoSrc } from "@/lib/hero-video";
import { getAllProjects } from "@/lib/projects";

export const dynamic = "force-dynamic";

const HOME_BODY_CLASS =
  "home page-template page-template-template-home template-home page page-id-5 app-data index-data singular-data page-data page-5-data page-home-data template-home-data front-page-data";

export default function HomePage() {
  const projects = getAllProjects();
  const videoSrc = getHeroVideoSrc();
  const posterSrc = projects[0]?.coverImage.src ?? null;

  return (
    <MicasaBody className={HOME_BODY_CLASS}>
      <MicasaHero
        videoSrc={videoSrc}
        videoType={videoSrc ? getHeroVideoMime(videoSrc) : undefined}
        posterSrc={posterSrc}
      />
      <MicasaNavbar />
      <div className="content-wrap">
        <div id="content" className="content">
          <main className="main">
            <MicasaPortfolioGrid projects={projects} />
          </main>
        </div>
      </div>
      <MicasaFooter />
    </MicasaBody>
  );
}
