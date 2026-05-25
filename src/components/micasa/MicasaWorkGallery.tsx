import { buildGalleryRows } from "@/lib/gallery-layout";
import type { GalleryRow } from "@/lib/gallery-layout";
import type { ProjectImage } from "@/lib/types";

interface MicasaWorkGalleryProps {
  images: ProjectImage[];
  projectTitle?: string;
}

function MicasaWorkImage({
  image,
  delay,
}: {
  image: ProjectImage;
  delay?: boolean;
}) {
  return (
    <div className={`scroll-reveal${delay ? " delay" : ""}`}>
      <div className="work-image-loop">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="work-image"
        />
      </div>
    </div>
  );
}

function GalleryRowBlock({ row, rowIndex }: { row: GalleryRow; rowIndex: number }) {
  if (row.type === "full") {
    return (
      <div className="work-image-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-work col-sm-12">
              <MicasaWorkImage image={row.image} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (row.type === "pair") {
    return (
      <div className="work-image-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-work col-sm-12 col-md-12 col-lg-6">
              <MicasaWorkImage image={row.images[0]} />
            </div>
            <div className="col-work col-sm-12 col-md-12 col-lg-6">
              <MicasaWorkImage image={row.images[1]} delay />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="work-image-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-work col-sm-12 col-md-12 col-lg-6">
            <MicasaWorkImage image={row.image} delay={rowIndex % 2 === 1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryEmptyFallback({ projectTitle }: { projectTitle?: string }) {
  return (
    <div className="work-image-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-work col-sm-12 scroll-reveal scroll-reveal-show">
            <div
              className="work-image-loop"
              style={{
                padding: "64px 24px",
                textAlign: "center",
                background: "#f4f5f5",
                minHeight: "240px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <p style={{ margin: 0, color: "#3f3f40", fontSize: "17px" }}>
                  {projectTitle ? `${projectTitle} — ` : ""}
                  images not found
                </p>
                <p style={{ margin: "12px 0 0", color: "#8a8a8a", fontSize: "15px" }}>
                  Add .jpg, .jpeg, .png or .webp to{" "}
                  <code style={{ color: "#3f3f40" }}>public/project/</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MicasaWorkGallery({ images, projectTitle }: MicasaWorkGalleryProps) {
  const validImages = images.filter((img) => img.src.length > 0);

  if (validImages.length === 0) {
    return <GalleryEmptyFallback projectTitle={projectTitle} />;
  }

  const rows = buildGalleryRows(validImages);

  if (rows.length === 0) {
    return (
      <>
        <GalleryRowBlock
          row={{ type: "full", image: validImages[0] }}
          rowIndex={0}
        />
      </>
    );
  }

  return (
    <>
      {rows.map((row, index) => (
        <GalleryRowBlock key={`gallery-row-${index}`} row={row} rowIndex={index} />
      ))}
    </>
  );
}
