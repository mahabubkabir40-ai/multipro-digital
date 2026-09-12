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
    // 1. FAQ results image
    await compressImage(
      'public/faq-results.png',
      'public/faq-results.webp',
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
