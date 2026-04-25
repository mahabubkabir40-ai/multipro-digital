const https = require('https');

const API_KEY = 'd75a40f579c647f6b16dec82b7484f00';
const HOST = 'https://www.multiprodigital.com';

function fetchBingData() {
  console.log('📡 Fetching Bing Webmaster Data for:', HOST);

  // 1. Get Traffic Stats
  const url = `https://ssl.bing.com/webmaster/api.svc/json/GetRankAndTrafficStats?apikey=${API_KEY}&siteUrl=${encodeURIComponent(HOST)}`;

  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        const stats = response.d;

        if (stats && stats.length > 0) {
          console.log('\n--- Bing Traffic Summary (Last 30 Days - Global) ---');
          console.table(stats.map(s => {
            // Parse Bing's weird date format /Date(1617235200000)/
            const timestamp = parseInt(s.Date.match(/\d+/)[0]);
            return {
              Date: new Date(timestamp).toLocaleDateString(),
              Clicks: s.Clicks,
              Impressions: s.Impressions,
              AvgRank: s.AllWebRank
            };
          }).slice(0, 7)); // Show last 7 data points
        } else {
          console.log('\n⚠️ No traffic data found in Bing yet. Keep indexing!');
        }

        // 2. Get Top Keywords (Next step if stats found)
        fetchKeywords();
      } catch (e) {
        console.error('💥 Error parsing Bing response:', e.message);
      }
    });
  }).on('error', (err) => console.error('❌ Network Error:', err.message));
}

function fetchKeywords() {
  const url = `https://ssl.bing.com/webmaster/api.svc/json/GetQueryStats?apikey=${API_KEY}&siteUrl=${encodeURIComponent(HOST)}`;

  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        const queries = response.d;

        if (queries && queries.length > 0) {
          console.log('\n--- Top Keywords on Bing ---');
          console.table(queries.slice(0, 10).map(q => ({
            Keyword: q.Query,
            Clicks: q.Clicks,
            Impressions: q.Impressions,
            AvgPos: q.AvgClickPosition
          })));
        } else {
          console.log('\n🔎 No specific keyword data yet.');
        }
      } catch (e) {}
    });
  });
}

fetchBingData();
