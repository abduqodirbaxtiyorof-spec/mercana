import type { Metadata } from "next";

export const SITE = {
  name: "MERCANA",
  tagline: "Design Studio",
  title: "MERCANA — Design Studio",
  description:
    "Luxury architecture and interior design studio specializing in cinematic modern spaces and premium visualization.",
  locale: "en_US",
  themeColor: "#000000",
  backgroundColor: "#000000",
} as const;

const DEFAULT_OG_IMAGE = "/micasa/images/logo_black.png";

/** Canonical site URL — set NEXT_PUBLIC_SITE_URL on Vercel. */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }

  return "http://localhost:3000";
}

function absoluteUrl(path: string, base: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildDefaultMetadata(): Metadata {
  const base = getSiteUrl();
  const ogImage = absoluteUrl(DEFAULT_OG_IMAGE, base);

  return {
    metadataBase: new URL(base),
    title: {
      default: SITE.title,
      template: `%s | ${SITE.title}`,
    },
    description: SITE.description,
    applicationName: SITE.name,
    authors: [{ name: SITE.title }],
    creator: SITE.title,
    publisher: SITE.title,
    keywords: [
      "MERCANA",
      "architecture",
      "interior design",
      "luxury interiors",
      "visualization",
      "design studio",
      "Uzbekistan",
    ],
    category: "design",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url: base,
      siteName: SITE.title,
      title: SITE.title,
      description: SITE.description,
      images: [
        {
          url: ogImage,
          width: 500,
          height: 287,
          alt: SITE.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE.title,
      description: SITE.description,
      images: [ogImage],
    },
    icons: {
      icon: "/micasa/images/mini_logo.png",
      apple: "/micasa/images/mini_logo.png",
    },
    manifest: "/site.webmanifest",
    other: {
      "theme-color": SITE.themeColor,
    },
  };
}

export function buildProjectMetadata(
  slug: string,
  projectTitle: string,
  subtitle: string,
  description: string,
  coverSrc?: string,
): Metadata {
  const base = getSiteUrl();
  const pageTitle = projectTitle;
  const pageDescription = `${projectTitle} — ${subtitle}. ${description}`;
  const imagePath = coverSrc && coverSrc.length > 0 ? coverSrc : DEFAULT_OG_IMAGE;
  const ogImage = absoluteUrl(imagePath, base);

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url: `${base}/portfolio/${slug}`,
      siteName: SITE.title,
      title: `${pageTitle} | ${SITE.title}`,
      description: pageDescription,
      images: [
        {
          url: ogImage,
          alt: `${projectTitle} — ${SITE.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | ${SITE.title}`,
      description: pageDescription,
      images: [ogImage],
    },
  };
}

export function buildStructuredData(siteUrl?: string) {
  const base = siteUrl ?? getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.title,
    description: SITE.description,
    url: base,
    image: absoluteUrl(DEFAULT_OG_IMAGE, base),
    serviceType: [
      "Architecture",
      "Interior Design",
      "3D Visualization",
    ],
    areaServed: {
      "@type": "Country",
      name: "Uzbekistan",
    },
  };
}
