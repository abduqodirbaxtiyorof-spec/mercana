export const SITE_NAME = "MERCANA";

export type NavLink =
  | { href: string; label: string; external?: false }
  | { href: string; label: string; external: true };

export const NAV_LINKS: NavLink[] = [{ href: "/#content", label: "Portfolio" }];

export const PROJECT_CATEGORIES = [
  "bedroom",
  "bassen",
  "kuhnya",
  "sanuzel",
] as const;

export const CATEGORY_LABELS: Record<
  (typeof PROJECT_CATEGORIES)[number],
  string
> = {
  bedroom: "Bedroom",
  bassen: "Pool & Spa",
  kuhnya: "Kitchen",
  sanuzel: "Bathroom",
};

/** Portfolio image formats — WebP is the primary format. */
export const IMAGE_EXTENSIONS = new Set([".webp", ".png"]);

/** Legacy extensions normalized to WebP when resolving paths. */
export const LEGACY_IMAGE_EXTENSIONS = /\.(jpe?g)$/i;

export const FOOTER = {
  phone: "+998 90 012 56 57",
  phoneHref: "tel:+998900125657",
  instagram: "https://www.instagram.com/abduqodir.viz/",
  telegram: "https://t.me/abduw0",
  copyright: "© 2026 MERCANA DESIGN STUDIO",
} as const;
