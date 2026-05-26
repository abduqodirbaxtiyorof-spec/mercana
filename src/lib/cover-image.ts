import type { GridSlot } from "./portfolio-grid";
import type { Project } from "./types";

type CoverProject = Pick<Project, "slug" | "category" | "coverImage">;

/** Per-category focal anchor — tuned for portfolio card heights. */
export const COVER_FOCAL: Record<string, string> = {
  kuhnya: "center 68%",
  bedroom: "center 55%",
  bassen: "center 45%",
  sanuzel: "center 38%",
};

const FOCAL_CLASS: Record<string, string> = {
  kuhnya: "focal-kitchen",
  bedroom: "focal-bedroom",
  bassen: "focal-spa",
  sanuzel: "focal-bathroom",
};

function resolveKey(project: CoverProject): string {
  return project.slug in FOCAL_CLASS ? project.slug : project.category;
}

function resolveFocalClass(project: CoverProject): string {
  return FOCAL_CLASS[resolveKey(project)] ?? "focal-default";
}

function useVerticalHeightFill(
  project: CoverProject,
  cols?: GridSlot["cols"],
): boolean {
  if (project.coverImage.orientation !== "vertical") return false;
  if (!cols) return false;
  return cols > 4;
}

export function coverImageClass(
  project: CoverProject,
  cols?: GridSlot["cols"],
): string {
  const orientation = project.coverImage.orientation;
  const heightFill = useVerticalHeightFill(project, cols);
  const mode = heightFill ? "cover-mode-vertical" : "cover-mode-horizontal";

  return `cover-${orientation} ${mode} ${resolveFocalClass(project)}`;
}

export function coverCardClass(
  project: CoverProject,
  cols?: GridSlot["cols"],
): string {
  const heightFill = useVerticalHeightFill(project, cols);
  const layout =
    project.coverImage.orientation === "vertical" && cols === 4
      ? "work-card--portrait-narrow"
      : `work-card--${project.coverImage.orientation}`;

  return `${layout} ${resolveFocalClass(project)}${heightFill ? " work-card--height-fill" : ""}`;
}

export function coverImageStyle(
  project: CoverProject,
): { objectPosition: string; objectFit: "cover" } {
  const key = resolveKey(project);
  return {
    objectFit: "cover",
    objectPosition: COVER_FOCAL[key] ?? "center 50%",
  };
}
