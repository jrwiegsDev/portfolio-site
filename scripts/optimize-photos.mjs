// Converts the source photos in assets-src/photos into web-optimized WebP files in
// public/photos, and records their dimensions in src/data/photos.generated.json.
//
// sharp converts to sRGB and strips all metadata (including GPS) unless told otherwise,
// so nothing here should ever call withMetadata()/keepMetadata().
//
// Usage: npm run photos  (re-run after adding or replacing a photo in assets-src/photos)
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SOURCE_DIR = path.join(ROOT, 'assets-src/photos');
const OUTPUT_DIR = path.join(ROOT, 'public/photos');
const MANIFEST_PATH = path.join(ROOT, 'src/data/photos.generated.json');

const SMALL_WIDTH = 320; // phones and small grid tiles
const MAX_WIDTH = 640; // largest version; sources are no wider than this, so never upscale
const WEBP_QUALITY = 82;

const toSlug = (fileName) => path.parse(fileName).name.toLowerCase().replace(/_/g, '-');

// 320px (when the source is wider) plus the source's own width, capped at MAX_WIDTH
const variantWidths = (sourceWidth) => {
  const largest = Math.min(sourceWidth, MAX_WIDTH);
  return largest > SMALL_WIDTH ? [SMALL_WIDTH, largest] : [largest];
};

async function optimizePhoto(fileName) {
  const slug = toSlug(fileName);
  const input = path.join(SOURCE_DIR, fileName);
  // Dimensions after orientation is applied (what the browser will actually display)
  const { info: { width, height } } = await sharp(input).rotate().toBuffer({ resolveWithObject: true });

  const srcSet = [];
  for (const variantWidth of variantWidths(width)) {
    const outputName = `${slug}-${variantWidth}.webp`;
    const info = await sharp(input)
      .rotate() // apply any EXIF orientation before the metadata is stripped
      .resize({ width: variantWidth, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toFile(path.join(OUTPUT_DIR, outputName));
    srcSet.push({ src: `/photos/${outputName}`, width: info.width, height: info.height, bytes: info.size });
  }

  return {
    slug,
    width,
    height,
    src: srcSet[srcSet.length - 1].src,
    srcSet: srcSet.map(({ src, width: w, height: h }) => ({ src, width: w, height: h })),
    bytes: srcSet.map(({ bytes }) => bytes)
  };
}

const files = (await readdir(SOURCE_DIR)).filter((f) => /\.(png|jpe?g|heic|webp|tiff?)$/i.test(f)).sort();

// Start clean so photos removed from assets-src don't linger in public/
await rm(OUTPUT_DIR, { recursive: true, force: true });
await mkdir(OUTPUT_DIR, { recursive: true });

const manifest = {};
for (const file of files) {
  const { slug, bytes, ...photo } = await optimizePhoto(file);
  if (manifest[slug]) throw new Error(`Two source photos map to the same slug: ${slug}`);
  manifest[slug] = photo;
  console.log(`${file} -> ${photo.srcSet.map((s) => `${s.width}w`).join(', ')} (${bytes.map((b) => `${Math.round(b / 1024)} KB`).join(', ')})`);
}

await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`\nWrote ${Object.keys(manifest).length} photos to public/photos and ${path.relative(ROOT, MANIFEST_PATH)}`);
