const https = require('https');

https.get('https://www.youtube.com/results?search_query=moving+truck+highway+footage', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /watch\?v=([a-zA-Z0-9_-]{11})/g;
    let match;
    const ids = new Set();
    while ((match = regex.exec(data)) !== null) {
      ids.add(match[1]);
    }
    console.log(Array.from(ids).slice(0, 5));
  });
});
