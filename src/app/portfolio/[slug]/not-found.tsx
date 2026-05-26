import type { Metadata } from "next";
import Link from "next/link";

import { MicasaBody } from "@/components/micasa/MicasaBody";
import { MicasaNavbar } from "@/components/micasa/MicasaNavbar";
import { SITE, buildDefaultMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = {
  ...buildDefaultMetadata(),
  title: `Project not found | ${SITE.title}`,
  robots: { index: false, follow: false },
};

export default function ProjectNotFound() {
  return (
    <MicasaBody className="work-template-default single single-work app-data">
      <MicasaNavbar sticky />
      <div className="content-wrap" style={{ padding: "120px 24px", textAlign: "center" }}>
        <h1>Project not found</h1>
        <Link
          href="/#content"
          className="animated-link"
          style={{ marginTop: 24, display: "inline-block" }}
        >
          Back to portfolio
        </Link>
      </div>
    </MicasaBody>
  );
}
