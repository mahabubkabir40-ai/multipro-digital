import fs from 'fs';
import path from 'path';
import https from 'https';

const HOST = 'www.multiprodigital.com';
const KEY = '5f82b7c4d5e94b2a8d3e1f0c2a9b4d7e';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Define the root of the project (relative to where this script runs)
const root = process.cwd();

const getDynamicRoutes = (dirPath, prefix) => {
  const fullPath = path.join(root, dirPath);
  if (!fs.existsSync(fullPath)) return [];
  
  return fs.readdirSync(fullPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => `https://${HOST}/${prefix}/${dirent.name}`);
};

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
  `https://${HOST}/service-areas`,
  `https://${HOST}/movers-marketing-tips`,
  ...getDynamicRoutes('src/app/movers-marketing-tips', 'movers-marketing-tips'),
  ...getDynamicRoutes('src/app/service-areas', 'service-areas')
];

console.log('🚀 Preparing to submit the following URLs to IndexNow (Bing/DuckDuckGo):');
urls.forEach(url => console.log(` - ${url}`));

const data = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls
});

const options = {
  hostname: 'www.bing.com',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  console.log(`\n📡 Status Code: ${res.statusCode}`);
  
  if (res.statusCode === 200) {
    console.log('✅ Success! Bing has received your URLs and will begin crawling immediately.');
  } else if (res.statusCode === 202) {
    console.log('⌛ Accepted! Your URLs have been queued for processing.');
  } else {
    console.log('❌ Error: Something went wrong with the submission.');
  }

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error('\n❌ Network Error:', error);
});

req.write(data);
req.end();
