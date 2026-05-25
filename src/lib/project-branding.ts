export interface ProjectBranding {
  title: string;
  subtitle: string;
  description: string;
}

/** Luxury display names — never expose raw folder names in UI. */
const BRANDING_BY_SLUG: Record<string, ProjectBranding> = {
  kuhnya: {
    title: "Maison Lumière",
    subtitle: "Contemporary Living",
    description:
      "An open living composition where warm oak, soft stone, and layered lighting create a refined contemporary interior with quiet luxury.",
  },
  bedroom: {
    title: "Serenity Suite",
    subtitle: "Modern Interior",
    description:
      "A serene bedroom retreat defined by rich textures, sculptural headboard detailing, and a calm palette of charcoal, bronze, and velvet.",
  },
  sanuzel: {
    title: "Elysian Bathroom",
    subtitle: "Minimal Elegance",
    description:
      "A spa-inspired bathroom wrapped in herringbone stone, brushed brass accents, and atmospheric lighting for a private wellness ritual.",
  },
  bassen: {
    title: "Obsidian Spa",
    subtitle: "Private Spa",
    description:
      "A dramatic pool and wellness environment where deep tones, reflective water, and architectural lines evoke a cinematic resort atmosphere.",
  },
};

const BRANDING_BY_CATEGORY: Record<string, ProjectBranding> = {
  kuhnya: BRANDING_BY_SLUG.kuhnya,
  bedroom: BRANDING_BY_SLUG.bedroom,
  sanuzel: BRANDING_BY_SLUG.sanuzel,
  bassen: BRANDING_BY_SLUG.bassen,
};

/** Curated portfolio sequence for visual rhythm on the home grid. */
export const PORTFOLIO_DISPLAY_ORDER = [
  "kuhnya",
  "bedroom",
  "sanuzel",
  "bassen",
] as const;

export function getProjectBranding(
  slug: string,
  category: string,
): ProjectBranding {
  return (
    BRANDING_BY_SLUG[slug] ??
    BRANDING_BY_CATEGORY[category] ?? {
      title: "Private Residence",
      subtitle: "Luxury Interior",
      description:
        "A bespoke interior composition curated with architectural precision, premium materials, and timeless elegance.",
    }
  );
}
