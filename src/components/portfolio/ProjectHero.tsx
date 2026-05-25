"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Parallax } from "@/components/ui/Parallax";
import type { Project } from "@/lib/types";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const { heroImage } = project;

  return (
    <section className="relative overflow-hidden bg-background pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-luxury text-muted"
        >
          <Link href="/" className="transition-colors duration-500 hover:text-accent">
            Home
          </Link>
          <span className="text-border">/</span>
          <Link
            href="/#portfolio"
            className="transition-colors duration-500 hover:text-accent"
          >
            Portfolio
          </Link>
          <span className="text-border">/</span>
          <span className="text-accent">{project.categoryLabel}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-3xl"
        >
          <h1 className="font-display text-4xl leading-tight text-foreground md:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
            {project.description}
          </p>
        </motion.div>
      </div>

      <Parallax className="relative w-full" offset={40}>
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-surface"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            className="mx-auto block h-auto max-h-[85vh] w-full"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </Parallax>
    </section>
  );
}
