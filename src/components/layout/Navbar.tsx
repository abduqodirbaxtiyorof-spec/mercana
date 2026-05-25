"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-luxury",
          scrolled
            ? "border-b border-border/60 bg-background/85 py-4 backdrop-blur-xl"
            : "bg-transparent py-6 md:py-8",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="group relative">
            <span className="font-display text-2xl tracking-[0.28em] text-foreground transition-colors duration-500 group-hover:text-accent md:text-3xl">
              {SITE_NAME}
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 h-px bg-accent"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0, width: "100%" }}
            />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative font-sans text-[11px] uppercase tracking-luxury text-muted transition-colors duration-500 hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-accent transition-all duration-500 ease-luxury group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={cn(
                "h-px w-6 bg-foreground transition-all duration-500",
                menuOpen && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-foreground transition-all duration-500",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-foreground transition-all duration-500",
                menuOpen && "-translate-y-[7px] -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-3xl tracking-[0.2em] text-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
