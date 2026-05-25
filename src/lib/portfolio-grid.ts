import type { Project } from "./types";
import { PORTFOLIO_DISPLAY_ORDER } from "./project-branding";

export interface GridSlot {
  cols: 4 | 6 | 8 | 12;
  shadow?: boolean;
  delay?: boolean;
}

export interface PortfolioRow {
  slots: GridSlot[];
  projects: Project[];
}

/** Sort projects for curated luxury presentation order. */
export function sortProjectsForPortfolio(projects: Project[]): Project[] {
  const order = new Map<string, number>(
    PORTFOLIO_DISPLAY_ORDER.map((slug, index) => [slug, index]),
  );

  return [...projects].sort(
    (a, b) => (order.get(a.slug) ?? 999) - (order.get(b.slug) ?? 999),
  );
}

function isVertical(project: Project): boolean {
  return project.coverImage.orientation === "vertical";
}

/** Assign column width from render orientation — wide landscapes, tall portraits. */
function columnSpan(project: Project, partner?: Project): 4 | 6 | 8 | 12 {
  if (!partner) {
    return isVertical(project) ? 8 : 12;
  }

  const selfVertical = isVertical(project);
  const partnerVertical = isVertical(partner);

  if (selfVertical && !partnerVertical) return 4;
  if (!selfVertical && partnerVertical) return 8;
  return 6;
}

function buildSlot(
  project: Project,
  partner: Project | undefined,
  index: number,
): GridSlot {
  return {
    cols: columnSpan(project, partner),
    shadow: index === 0,
    delay: index === 1,
  };
}

/**
 * Orientation-aware masonry rows:
 * landscape → wide (col-8), portrait → tall/narrow (col-4).
 */
export function buildPortfolioRows(projects: Project[]): PortfolioRow[] {
  const sorted = sortProjectsForPortfolio(projects);
  const rows: PortfolioRow[] = [];

  for (let i = 0; i < sorted.length; i += 2) {
    const lead = sorted[i];
    const trail = sorted[i + 1];

    if (trail) {
      rows.push({
        projects: [lead, trail],
        slots: [buildSlot(lead, trail, 0), buildSlot(trail, lead, 1)],
      });
    } else {
      rows.push({
        projects: [lead],
        slots: [buildSlot(lead, undefined, 0)],
      });
    }
  }

  return rows;
}

export function colClass(cols: GridSlot["cols"]): string {
  if (cols === 12) return "col-work col-sm-12";
  return `col-work col-sm-12 col-md-12 col-lg-${cols}`;
}
