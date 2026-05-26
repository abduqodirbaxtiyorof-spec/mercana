import { buildStructuredData, getSiteUrl } from "@/lib/site-metadata";

export function StructuredData() {
  const data = buildStructuredData(getSiteUrl());

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
