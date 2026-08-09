import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMG_DIR = path.resolve(__dirname, '../public/assets/images');

async function run() {
  const files = (await fs.readdir(IMG_DIR)).filter((f) => /\.(jpg|jpeg|png)$/i.test(f));
  const dimensions = {};

  for (const file of files) {
    const inputPath = path.join(IMG_DIR, file);
    const base = file.replace(/\.(jpg|jpeg|png)$/i, '');
    const outputPath = path.join(IMG_DIR, `${base}.webp`);

    const image = sharp(inputPath);
    const meta = await image.metadata();
    await image.webp({ quality: 82 }).toFile(outputPath);

    const outStat = await fs.stat(outputPath);
    dimensions[`${base}.webp`] = { width: meta.width, height: meta.height };
    console.log(`${file} (${meta.width}x${meta.height}) -> ${base}.webp (${(outStat.size / 1024).toFixed(1)} KB)`);
  }

  console.log('\nDimensions map:');
  console.log(JSON.stringify(dimensions, null, 2));
}

run();
