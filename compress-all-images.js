const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const compressImage = async (inputRelativePath, outputRelativePath, resizeOpts = null, quality = 75) => {
  const inputPath = path.join(__dirname, inputRelativePath);
  const outputPath = path.join(__dirname, outputRelativePath);

  if (!fs.existsSync(inputPath)) {
    console.warn(`Input file does not exist: ${inputPath}`);
    return;
  }

  console.log(`Optimizing: ${inputRelativePath} -> ${outputRelativePath}...`);

  let pipeline = sharp(inputPath);
  if (resizeOpts) {
    pipeline = pipeline.resize(resizeOpts);
  }

  await pipeline
    .webp({ quality, effort: 6 })
    .toFile(outputPath);

  const origSize = fs.statSync(inputPath).size;
  const newSize = fs.statSync(outputPath).size;
  const savings = ((origSize - newSize) / origSize * 100).toFixed(1);
  console.log(`Success! Original: ${(origSize/1024).toFixed(1)}KB, New: ${(newSize/1024).toFixed(1)}KB (Saved ${savings}%)`);
};

const run = async () => {
  try {
    // 1. Mountain Movers avatar logo
    await compressImage(
      'public/avatars/Mountain Movers.png',
      'public/avatars/Mountain Movers.webp',
      { width: 96, height: 96, fit: 'cover' },
      80
    );

    // 2. Sunshine Movers avatar logo
    await compressImage(
      'public/avatars/Sunshine Movers.png',
      'public/avatars/Sunshine Movers.webp',
      { width: 96, height: 96, fit: 'cover' },
      80
    );

    // 3. Blog cover image
    await compressImage(
      'public/blog-cover-movers.png',
      'public/blog-cover-movers.webp',
      { width: 800 },
      45
    );

    // 4. FAQ results image
    await compressImage(
      'public/faq-results.png',
      'public/faq-results.webp',
      { width: 800 },
      75
    );

    // 5. Orlando Maps Mockup image
    await compressImage(
      'public/images/orlando-maps-mockup.png',
      'public/images/orlando-maps-mockup.webp',
      { width: 800 },
      75
    );

    console.log('All image optimization tasks completed successfully!');
  } catch (error) {
    console.error('Failed to run image optimization:', error);
    process.exit(1);
  }
};

run();
