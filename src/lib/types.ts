export type ProjectCategory = string;

export type ImageOrientation = "horizontal" | "vertical" | "square";

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  orientation: ImageOrientation;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  heroImage: ProjectImage;
  images: ProjectImage[];
  coverImage: ProjectImage;
}
