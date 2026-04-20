const https = require('https');

const url = 'https://www.videezy.com/free-video/truck';

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /https:\/\/static\.videezy\.com\/system\/resources\/previews\/[0-9/]+/g;
    const matches = data.match(regex);
    if (matches) {
       console.log('Found previews:', Array.from(new Set(matches)));
    } else {
       console.log('No previews found');
       // Print a piece of data to see what we got
       console.log(data.substring(0, 1000));
    }
  });
});
