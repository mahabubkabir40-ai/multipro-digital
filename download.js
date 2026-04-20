const https = require('https');
const fs = require('fs');
const path = require('path');

const url = "https://vjs.zencdn.net/v/oceans.mp4";
const savePath = path.join(__dirname, 'public', 'videos', 'hero-background.mp4');

// Ensure directory exists
fs.mkdirSync(path.dirname(savePath), { recursive: true });

const file = fs.createWriteStream(savePath);

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
}, (response) => {
  if (response.statusCode === 200) {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Download completed successfully.');
    });
  } else {
    console.error(`Failed to download. Status code: ${response.statusCode}`);
    
    // Handle redirects
    if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        console.log(`Redirecting to ${response.headers.location}...`);
        https.get(response.headers.location, (res) => {
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log('Download from redirect completed successfully.');
            });
        });
    }
  }
}).on('error', (err) => {
  fs.unlink(savePath, () => {});
  console.error(`Error: ${err.message}`);
});
