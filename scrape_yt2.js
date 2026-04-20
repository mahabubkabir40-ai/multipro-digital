const https = require('https');

https.get('https://www.youtube.com/results?search_query=moving+truck+highway+footage', {
  headers: {
    'User-Agent': 'Mozilla/5.0'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /"title":{"runs":\[{"text":"(.*?)"}\]}.*?"videoId":"(.*?)"/g;
    let match;
    const results = [];
    while ((match = regex.exec(data)) !== null) {
      results.push({ title: match[1], id: match[2] });
    }
    console.log(results.slice(0, 5));
  });
});
