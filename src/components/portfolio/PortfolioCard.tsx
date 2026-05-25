"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import type { Project } from "@/lib/types";

interface PortfolioCardProps {
  project: Project;
  index: number;
}

export function PortfolioCard({ project, index }: PortfolioCardProps) {
  const wide = project.coverImage.orientation === "horizontal";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.85,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={wide ? "md:col-span-2" : "md:col-span-1"}
    >
      <Link href={`/portfolio/${project.slug}`} className="group block">
        <div className="relative overflow-hidden bg-surface">
          <div className="relative w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.coverImage.src}
              alt={project.coverImage.alt}
              width={project.coverImage.width}
              height={project.coverImage.height}
              className="h-auto w-full transition-transform duration-[1.2s] ease-luxury group-hover:scale-[1.03]"
              style={{ maxHeight: wide ? "520px" : "480px", objectFit: "contain", objectPosition: "center" }}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="text-[10px] uppercase tracking-luxury text-accent">
              {project.categoryLabel}
            </p>
            <h3 className="mt-2 font-display text-2xl tracking-wide text-foreground md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-md text-sm text-muted opacity-0 transition-all duration-500 group-hover:opacity-100">
              {project.description}
            </p>
            <span className="mt-4 inline-block text-[10px] uppercase tracking-luxury text-foreground/80 transition-colors duration-500 group-hover:text-accent">
              View Project →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
