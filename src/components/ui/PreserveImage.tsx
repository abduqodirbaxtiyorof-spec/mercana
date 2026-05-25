import Image from "next/image";

import type { ProjectImage } from "@/lib/types";
import { cn } from "@/lib/utils";

interface PreserveImageProps {
  image: ProjectImage;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

/** Renders image at original aspect ratio — no crop, no object-cover. */
export function PreserveImage({
  image,
  priority = false,
  className,
  sizes = "100vw",
}: PreserveImageProps) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      priority={priority}
      sizes={sizes}
      className={cn("h-auto max-w-full", className)}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
