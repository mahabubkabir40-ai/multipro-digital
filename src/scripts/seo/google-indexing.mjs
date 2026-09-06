import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const HOST = 'https://www.multiprodigital.com';
const KEY_FILE = path.join(process.cwd(), 'multipro-digital-seo-e15f3f08f650.json');

if (!fs.existsSync(KEY_FILE)) {
  console.error(`❌ Error: ${KEY_FILE} not found!`);
  process.exit(1);
}

const keys = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));

const jwtClient = new google.auth.JWT({
  email: keys.client_email,
  key: keys.private_key,
  scopes: ['https://www.googleapis.com/auth/indexing'],
});

const urls = [
  `${HOST}/`,
  `${HOST}/about`,
  `${HOST}/free-audit`,
  `${HOST}/contact`,
  `${HOST}/privacy-policy`
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
          requestBody: { url, type: 'URL_UPDATED' },
        });
        console.log(`✅ Indexed: ${url} (Status: ${res.status})`);
      } catch (err) {
        console.error(`❌ Failed: ${url} - ${err.message}`);
      }
    }
    console.log('\n✨ Google Indexing request complete.');
  } catch (error) {
    console.error('💥 Critical Error:', error.message);
  }
}

indexUrls();
