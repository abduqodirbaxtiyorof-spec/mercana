import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcDir = path.join(root, "images");
const outDir = path.join(root, "public", "micasa", "images");

async function exportLogo(inputName, outputName, width, height) {
  const input = path.join(srcDir, inputName);
  const output = path.join(outDir, outputName);

  await sharp(input)
    .trim()
    .resize(width, height, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(output);

  const meta = await sharp(output).metadata();
  console.log(`${outputName}: ${meta.width}x${meta.height}`);
}

await exportLogo("logo_white1.png", "logo_white.png", 500, 287);
await exportLogo("mini_logo1.png", "mini_logo.png", 50, 50);
await exportLogo("logo_black1.png", "logo_black.png", 170, 98);

console.log("Done.");
