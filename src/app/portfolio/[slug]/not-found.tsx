import Link from "next/link";

import { MicasaBody } from "@/components/micasa/MicasaBody";
import { MicasaNavbar } from "@/components/micasa/MicasaNavbar";

export default function ProjectNotFound() {
  return (
    <MicasaBody className="work-template-default single single-work app-data">
      <MicasaNavbar sticky />
      <div className="content-wrap" style={{ padding: "120px 24px", textAlign: "center" }}>
        <h1>Project not found</h1>
        <Link href="/#content" className="animated-link" style={{ marginTop: 24, display: "inline-block" }}>
          Back to portfolio
        </Link>
      </div>
    </MicasaBody>
  );
}
