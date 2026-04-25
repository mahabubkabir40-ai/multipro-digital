import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const HOST = 'https://www.multiprodigital.com';
const KEY_FILE = path.join(process.cwd(), 'google-indexing-key.json');
const keys = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));

const jwtClient = new google.auth.JWT({
  email: keys.client_email,
  key: keys.private_key,
  scopes: ['https://www.googleapis.com/auth/indexing'],
});

const getDynamicRoutes = (dirPath, prefix) => {
  const fullPath = path.join(process.cwd(), dirPath);
  if (!fs.existsSync(fullPath)) return [];
  
  return fs.readdirSync(fullPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => `${HOST}/${prefix}/${dirent.name}`);
};

const urls = [
  `${HOST}/`,
  `${HOST}/about`,
  `${HOST}/contact`,
  `${HOST}/service-areas`,
  `${HOST}/movers-marketing-tips`,
  ...getDynamicRoutes('src/app/movers-marketing-tips', 'movers-marketing-tips'),
  ...getDynamicRoutes('src/app/service-areas', 'service-areas')
];

async function indexUrls() {
  try {
    console.log('🔐 Authorizing with Google...');
    await jwtClient.authorize();
    
    const indexing = google.indexing({ version: 'v3', auth: jwtClient });

    console.log(`🚀 Sending ${urls.length} URLs to Google Indexing API...`);

    for (const url of urls) {
      try {
        const res = await indexing.urlNotifications.publish({
          requestBody: {
            url: url,
            type: 'URL_UPDATED',
          },
        });
        console.log(`✅ Indexed: ${url} (Status: ${res.status})`);
      } catch (err) {
        console.error(`❌ Failed: ${url} - ${err.message}`);
      }
    }

    console.log('\\n✨ Google Indexing request complete.');
  } catch (error) {
    console.error('💥 Critical Error:', error.message);
  }
}

indexUrls();
