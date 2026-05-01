const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public/blog-cover-movers.png');
const outputPath = path.join(__dirname, 'public/hero-bg-mobile.webp');

console.log(`Compressing ${inputPath} to ${outputPath}...`);

sharp(inputPath)
  .resize({ width: 600 }) // Mobile viewport width
  .webp({ quality: 50, effort: 6 }) // Aggressive compression for LCP
  .toFile(outputPath)
  .then(info => {
    console.log('Success!', info);
  })
  .catch(err => {
    console.error('Error:', err);
  });
