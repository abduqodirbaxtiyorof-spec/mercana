import { buildGalleryRows } from "@/lib/gallery-layout";
import type { Project } from "@/lib/types";

import { GalleryRow } from "./GalleryRow";

interface MasonryGalleryProps {
  project: Project;
}

export function MasonryGallery({ project }: MasonryGalleryProps) {
  const rows = buildGalleryRows(project.images);

  if (rows.length === 0) {
    return null;
  }

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl space-y-6 px-6 md:space-y-10 md:px-10">
        {rows.map((row, index) => (
          <GalleryRow key={`${project.slug}-row-${index}`} row={row} index={index} />
        ))}
      </div>
    </section>
  );
}
