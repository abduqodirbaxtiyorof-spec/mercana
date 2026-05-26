import fs from "fs";
import path from "path";
import { imageSize } from "image-size";

import { IMAGE_EXTENSIONS, LEGACY_IMAGE_EXTENSIONS } from "./constants";
import { getProjectBranding, PORTFOLIO_DISPLAY_ORDER } from "./project-branding";
import type {
  ImageOrientation,
  Project,
  ProjectImage,
} from "./types";

const PROJECTS_DIR = path.join(process.cwd(), "public", "project");

function isImageFile(name: string): boolean {
  return IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase());
}

function getOrientation(width: number, height: number): ImageOrientation {
  const ratio = width / height;
  if (ratio > 1.08) return "horizontal";
  if (ratio < 0.92) return "vertical";
  return "square";
}

function toPublicSrc(relativePath: string): string {
  const normalized = relativePath.replace(/\\/g, "/");
  return normalized.startsWith("/") ? normalized : `/${normalized}`;
}

/** Map .jpg / .jpeg paths to .webp (same basename). */
function toWebpRelativePath(relativePath: string): string {
  return relativePath.replace(LEGACY_IMAGE_EXTENSIONS, ".webp");
}

function resolveImage(
  relativePath: string,
  projectTitle: string,
): ProjectImage | null {
  const webpPath = toWebpRelativePath(relativePath);
  const absolute = path.join(
    process.cwd(),
    "public",
    webpPath.replace(/^\//, ""),
  );

  if (!fs.existsSync(absolute)) return null;

  let width = 1600;
  let height = 1200;

  try {
    const dimensions = imageSize(absolute);
    if (dimensions.width && dimensions.height) {
      width = dimensions.width;
      height = dimensions.height;
    }
  } catch {
    // Keep fallback dimensions — still serve the image file.
  }

  const fileName = path.basename(relativePath);

  return {
    src: toPublicSrc(webpPath.replace(/^\//, "")),
    width,
    height,
    orientation: getOrientation(width, height),
    alt: `${projectTitle} — ${fileName.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")}`,
  };
}

function sortImages(files: string[]): string[] {
  return [...files].sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
  );
}

function loadImagesFromDir(
  dirPath: string,
  publicPrefix: string,
  projectTitle: string,
): ProjectImage[] {
  if (!fs.existsSync(dirPath)) return [];

  const files = sortImages(
    fs
      .readdirSync(dirPath, { withFileTypes: true })
      .filter((entry) => entry.isFile() && isImageFile(entry.name))
      .map((entry) => entry.name),
  );

  return files
    .map((file) => {
      const relative = `${publicPrefix}/${file}`.replace(/\\/g, "/");
      return resolveImage(relative, projectTitle);
    })
    .filter((img): img is ProjectImage => img !== null);
}

function formatTitle(slug: string): string {
  return slug
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}


function createPlaceholder(title: string): ProjectImage {
  return {
    src: "",
    width: 1600,
    height: 900,
    orientation: "horizontal",
    alt: title,
  };
}

function buildProject(
  slug: string,
  category: string,
  dirPath: string,
  publicPrefix: string,
): Project {
  const branding = getProjectBranding(slug, category);
  const images = loadImagesFromDir(dirPath, publicPrefix, branding.title);
  const placeholder = createPlaceholder(branding.title);

  const heroImage = images[0] ?? placeholder;
  const coverImage =
    images.find((img) => img.orientation === "horizontal") ??
    images.find((img) => img.orientation === "vertical") ??
    heroImage;

  return {
    slug,
    title: branding.title,
    subtitle: branding.subtitle,
    category,
    categoryLabel: branding.subtitle,
    description: branding.description,
    heroImage,
    coverImage,
    images,
  };
}

/** Scan one folder under public/project (e.g. sanuzel, bedroom). */
function scanCategoryFolder(categorySlug: string): Project[] {
  const categoryPath = path.join(PROJECTS_DIR, categorySlug);
  if (!fs.existsSync(categoryPath)) return [];

  const entries = fs.readdirSync(categoryPath, { withFileTypes: true });
  const projects: Project[] = [];

  const rootImages = entries.filter(
    (entry) => entry.isFile() && isImageFile(entry.name),
  );
  const subdirs = entries.filter(
    (entry) => entry.isDirectory() && !entry.name.startsWith("."),
  );

  // Category folder with images at root → slug matches folder name (sanuzel)
  if (rootImages.length > 0) {
    projects.push(
      buildProject(
        categorySlug,
        categorySlug,
        categoryPath,
        `/project/${categorySlug}`,
      ),
    );
  } else if (subdirs.length === 0) {
    projects.push(
      buildProject(
        categorySlug,
        categorySlug,
        categoryPath,
        `/project/${categorySlug}`,
      ),
    );
  }

  for (const subdir of subdirs) {
    projects.push(
      buildProject(
        subdir.name,
        categorySlug,
        path.join(categoryPath, subdir.name),
        `/project/${categorySlug}/${subdir.name}`,
      ),
    );
  }

  return projects;
}

function getCategoryFolders(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  return fs
    .readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        !entry.name.startsWith(".") &&
        entry.name !== "intro",
    )
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

export function getAllProjects(): Project[] {
  const order = new Map<string, number>(
    PORTFOLIO_DISPLAY_ORDER.map((slug, index) => [slug, index]),
  );

  return getCategoryFolders()
    .flatMap((folder) => scanCategoryFolder(folder))
    .sort((a, b) => (order.get(a.slug) ?? 999) - (order.get(b.slug) ?? 999));
}

export function getProjectBySlug(slug: string): Project | undefined {
  const normalized = slug.toLowerCase();
  return getAllProjects().find(
    (project) => project.slug.toLowerCase() === normalized,
  );
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map((project) => project.slug);
}

/** Verify every scanned project image file exists on disk. */
export function verifyProjectAssets(): {
  ok: boolean;
  missing: string[];
  projects: number;
  images: number;
} {
  const projects = getAllProjects();
  const missing: string[] = [];

  for (const project of projects) {
    for (const image of project.images) {
      if (!image.src) {
        missing.push(`${project.slug}: (empty src)`);
        continue;
      }
      const absolute = path.join(
        process.cwd(),
        "public",
        image.src.replace(/^\//, ""),
      );
      if (!fs.existsSync(absolute)) {
        missing.push(image.src);
      }
    }
  }

  return {
    ok: missing.length === 0,
    missing,
    projects: projects.length,
    images: projects.reduce((sum, p) => sum + p.images.length, 0),
  };
}
