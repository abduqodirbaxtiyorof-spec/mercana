"use client";

import { Reveal } from "@/components/ui/Reveal";
import { PreserveImage } from "@/components/ui/PreserveImage";
import type { GalleryRow as GalleryRowType } from "@/lib/gallery-layout";
import { cn } from "@/lib/utils";

interface GalleryRowProps {
  row: GalleryRowType;
  index: number;
}

export function GalleryRow({ row, index }: GalleryRowProps) {
  if (row.type === "full") {
    return (
      <Reveal delay={index * 0.05} className="w-full">
        <div className="overflow-hidden rounded-sm bg-surface/40">
          <PreserveImage
            image={row.image}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="mx-auto"
          />
        </div>
      </Reveal>
    );
  }

  if (row.type === "pair") {
    return (
      <Reveal delay={index * 0.05}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {row.images.map((image) => (
            <div
              key={image.src}
              className="flex items-start justify-center overflow-hidden rounded-sm bg-surface/40"
            >
              <PreserveImage image={image} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          ))}
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={index * 0.05}>
      <div
        className={cn(
          "flex justify-center overflow-hidden rounded-sm bg-surface/40",
          "md:max-w-[50%] md:mx-auto",
        )}
      >
        <PreserveImage image={row.image} sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    </Reveal>
  );
}
