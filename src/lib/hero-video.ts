import fs from "fs";
import path from "path";

const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov"]);

/** Directories scanned for hero background video (first match wins). */
const HERO_VIDEO_DIRS = [
  { fsPath: path.join(process.cwd(), "public", "intro"), urlBase: "/intro" },
  {
    fsPath: path.join(process.cwd(), "public", "project", "intro"),
    urlBase: "/project/intro",
  },
] as const;

function encodePublicPath(base: string, fileName: string): string {
  return `${base}/${encodeURIComponent(fileName)}`;
}

function findVideoInDir(
  fsPath: string,
  urlBase: string,
): string | null {
  if (!fs.existsSync(fsPath)) return null;

  const files = fs
    .readdirSync(fsPath, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() &&
        VIDEO_EXTENSIONS.has(path.extname(entry.name).toLowerCase()),
    )
    .map((entry) => {
      const fullPath = path.join(fsPath, entry.name);
      return {
        name: entry.name,
        mtime: fs.statSync(fullPath).mtimeMs,
      };
    })
    .sort((a, b) => b.mtime - a.mtime);

  if (files.length === 0) return null;

  return encodePublicPath(urlBase, files[0]!.name);
}

/** Resolve hero video URL from files in public/intro (or legacy project/intro). */
export function getHeroVideoSrc(): string | null {
  for (const { fsPath, urlBase } of HERO_VIDEO_DIRS) {
    const src = findVideoInDir(fsPath, urlBase);
    if (src) return src;
  }
  return null;
}

export function getHeroVideoMime(src: string): string {
  const ext = path.extname(src).toLowerCase();
  if (ext === ".webm") return "video/webm";
  if (ext === ".mov") return "video/quicktime";
  return "video/mp4";
}
