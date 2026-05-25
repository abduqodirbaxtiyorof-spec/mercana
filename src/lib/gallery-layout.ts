import type { ProjectImage } from "./types";

export type GalleryRow =
  | { type: "full"; image: ProjectImage }
  | { type: "pair"; images: [ProjectImage, ProjectImage] }
  | { type: "single"; image: ProjectImage };

/** Build masonry rows: verticals side-by-side, horizontals full width. */
export function buildGalleryRows(images: ProjectImage[]): GalleryRow[] {
  const galleryImages = images.slice(1);
  const rows: GalleryRow[] = [];
  let pendingVertical: ProjectImage | null = null;

  for (const image of galleryImages) {
    if (image.orientation === "horizontal") {
      if (pendingVertical) {
        rows.push({ type: "single", image: pendingVertical });
        pendingVertical = null;
      }
      rows.push({ type: "full", image });
      continue;
    }

    if (pendingVertical) {
      rows.push({ type: "pair", images: [pendingVertical, image] });
      pendingVertical = null;
    } else {
      pendingVertical = image;
    }
  }

  if (pendingVertical) {
    rows.push({ type: "single", image: pendingVertical });
  }

  return rows;
}
