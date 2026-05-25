import Link from "next/link";

import { MicasaBody } from "@/components/micasa/MicasaBody";
import { MicasaNavbar } from "@/components/micasa/MicasaNavbar";

export default function NotFound() {
  return (
    <MicasaBody className="home app-data">
      <MicasaNavbar />
      <div className="content-wrap" style={{ padding: "120px 24px", textAlign: "center" }}>
        <h1>Page not found</h1>
        <Link href="/" className="animated-link" style={{ marginTop: 24, display: "inline-block" }}>
          Return home
        </Link>
      </div>
    </MicasaBody>
  );
}
