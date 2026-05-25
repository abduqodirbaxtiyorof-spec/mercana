"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { Parallax } from "@/components/ui/Parallax";
import type { Project } from "@/lib/types";

interface HeroProps {
  featured?: Project;
}

export function Hero({ featured }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const heroSrc = featured?.coverImage.src;

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0">
        {heroSrc ? (
          <Parallax className="h-[115%] w-full" offset={60}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${heroSrc})`,
                filter: "brightness(0.45)",
              }}
            />
          </Parallax>
        ) : (
          <div className="h-full w-full bg-gradient-to-b from-surface to-background" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 md:px-10 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10px] uppercase tracking-luxury text-accent"
        >
          Luxury Architecture & Interior
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-foreground md:text-7xl lg:text-8xl"
        >
          Spaces shaped by silence, light, and proportion.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-sm leading-relaxed text-muted md:text-base"
        >
          MERCANA presents curated interior visualizations — bedrooms, kitchens,
          bathrooms, and aquatic retreats designed with architectural rigor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="#portfolio"
            className="group inline-flex items-center border border-accent/60 px-8 py-3 text-[10px] uppercase tracking-luxury text-foreground transition-all duration-500 hover:border-accent hover:bg-accent/10"
          >
            View Portfolio
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center px-8 py-3 text-[10px] uppercase tracking-luxury text-muted transition-colors duration-500 hover:text-foreground"
          >
            Our Philosophy
          </Link>
        </motion.div>

        {!prefersReducedMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-10 w-px bg-accent/50"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
