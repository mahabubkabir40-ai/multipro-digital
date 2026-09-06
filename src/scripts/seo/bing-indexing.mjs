import fs from 'fs';
import path from 'path';
import https from 'https';

const HOST = 'www.multiprodigital.com';
const KEY = '5f82b7c4d5e94b2a8d3e1f0c2a9b4d7e';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const root = process.cwd();

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/about`,
  `https://${HOST}/free-audit`,
  `https://${HOST}/contact`,
  `https://${HOST}/privacy-policy`
];

console.log('🚀 Preparing to submit URLs to Bing IndexNow:');
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
    console.log('✅ Success! Bing has received your URLs.');
  } else if (res.statusCode === 202) {
    console.log('⌛ Accepted! Your URLs have been queued.');
  } else {
    console.log('❌ Error: Submission failed.');
  }
});

req.on('error', (e) => console.error('\n❌ Network Error:', e));
req.write(data);
req.end();
