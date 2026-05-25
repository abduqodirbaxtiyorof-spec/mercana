import Link from "next/link";

import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 md:px-10 md:py-20">
        <div>
          <p className="font-display text-2xl tracking-[0.25em] text-foreground">
            {SITE_NAME}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Luxury architecture and interior design studio. Crafting refined
            spaces with precision and timeless elegance.
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-luxury text-accent">
            Contact
          </p>
          <div className="mt-4 space-y-2 text-sm text-muted">
            <a
              href="mailto:hello@mercana.studio"
              className="block transition-colors duration-500 hover:text-foreground"
            >
              hello@mercana.studio
            </a>
            <a
              href="tel:+998954755000"
              className="block transition-colors duration-500 hover:text-foreground"
            >
              +998 95 475 50 00
            </a>
          </div>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-luxury text-accent">
            Studio
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Tashkent, Uzbekistan
            <br />
            Available worldwide
          </p>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 md:px-10">
        <p className="text-center text-[10px] uppercase tracking-luxury text-muted/70">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
